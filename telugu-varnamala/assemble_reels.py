# -*- coding: utf-8 -*-
"""
Telugu Varnamala Reels - Automatic FFMPEG Video Assembler
=========================================================

This script automates Step 5 of the production pipeline. It takes entries from
'varnamala_matrix.json', creates dynamic subtitle SRT files, synthesizes Telugu
narration via TTS, and uses FFmpeg to stitch images, tracing clips, and audio
into final 16:9 landscape (1920x1080) MP4 reels.

Prerequisites (Python 3):
-------------------------
1. Install Python 3: https://www.python.org/downloads/
2. Install Pillow (Python Imaging Library):
   pip install Pillow
3. Install FFmpeg and add it to your Windows System PATH:
   https://github.com/BtbN/FFmpeg-Builds/releases
4. (Optional, recommended) Install gTTS for the most reliable Telugu narration:
   pip install gTTS
   If gTTS is not installed, the script falls back to the same keyless Google
   Translate TTS endpoint using only the standard library, and finally to a
   silent track if there is no network access.

Usage:
------
Run the script from your terminal:
    python assemble_reels.py --letter అ

To render all 50 reels in a batch:
    python assemble_reels.py --all
"""

import os
import sys
import json
import time
import shutil
import subprocess
import argparse
import urllib.parse
import urllib.request

# Resolve data/font paths relative to this script so it works from any CWD.
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Try importing PIL to generate placeholders if real images aren't present yet
try:
    from PIL import Image, ImageDraw, ImageFont
    PIL_AVAILABLE = True
except ImportError:
    PIL_AVAILABLE = False

# Try importing gTTS for high quality, chunk-aware Telugu narration
try:
    from gtts import gTTS
    GTTS_AVAILABLE = True
except ImportError:
    GTTS_AVAILABLE = False

# Target output canvas (16:9 landscape)
VIDEO_WIDTH, VIDEO_HEIGHT = 1920, 1080
TTS_LANG = "te"  # Telugu

# Configuration and Timing Track (in seconds)
BEATS = {
    "hook": {"start": 0, "end": 2, "duration": 2},
    "trace": {"start": 2, "end": 6, "duration": 4},
    "word": {"start": 6, "end": 20, "duration": 14},
    "outro": {"start": 20, "end": 25, "duration": 5}
}
TOTAL_DURATION = 25.0

def load_matrix():
    """Loads the varnamala_matrix.json file."""
    matrix_path = os.path.join(BASE_DIR, "varnamala_matrix.json")
    if not os.path.exists(matrix_path):
        print(f"Error: {matrix_path} not found. Run generate_matrix first.")
        sys.exit(1)
    
    with open(matrix_path, "r", encoding="utf-8") as f:
        return json.load(f)

def generate_srt_file(entry, output_path):
    """Generates an SRT subtitle file for the reel based on script timings."""
    subtitles = [
        # (Start, End, Text in Telugu \n Transliteration - English Meaning)
        ("00:00:00,000", "00:00:02,000", u"ఇవాళ ఏ అక్షరం?\n(Today's letter?)"),
        ("00:00:02,000", "00:00:06,000", f"{entry['video_script'][0]}\n({entry['letter']} as in {entry['example_word_transliteration']})"),
        ("00:00:06,000", "00:00:13,000", f"{entry['video_script'][1]}\n({entry['example_word_transliteration']} means {entry['example_word_meaning']})"),
        ("00:00:13,000", "00:00:20,000", f"{entry['video_script'][2]}\n(Let's repeat the rhyme!)"),
        ("00:00:20,000", "00:00:25,000", f"{entry['video_script'][3]}\n(Once again: {entry['letter']} for {entry['example_word_meaning']})")
    ]
    
    with open(output_path, "w", encoding="utf-8") as f:
        for idx, (start, end, text) in enumerate(subtitles, 1):
            f.write(f"{idx}\n")
            f.write(f"{start} --> {end}\n")
            f.write(f"{text}\n\n")
    print(f"Generated subtitles: {output_path}")

FONT_NAME = os.path.join(BASE_DIR, "NotoSansTelugu-Regular.ttf")
FONT_URL = "https://fonts.gstatic.com/s/notosanstelugu/v30/0FlxVOGZlE2Rrtr-HmgkMWJNjJ5_RyT8o8c7fHkeg-esVC5dzHkHIJQqrEntezbaRkzb.ttf"

EMOJI_MAP = {
    "అ": "🍌", "ఆ": "🐄", "ఇ": "🏠", "ఈ": "🪶", "ఉ": "🐿️",
    "ఊ": "🎡", "ఋ": "🧘", "ౠ": "🪙", "ఎ": "🐭", "ఏ": "🐘", "ఐ": "🖐️", "ఒ": "🐪",
    "ఓ": "⛵", "ఔ": "🧪", "అం": "🔢", "అః": "🏰", "క": "👁️",
    "ఖ": "⚔️", "గ": "🔔", "ఘ": "🏺", "ఙ": "📖", "చ": "🛞",
    "ఛ": "⛱️", "జ": "🐾", "ఝ": "🐟", "ఞ": "🎓", "ట": "🍅",
    "ఠ": "🧣", "డ": "💰", "ఢ": "🥁", "ణ": "🪕", "త": "👩",
    "థ": "🛒", "ద": "💐", "ధ": "🏹", "న": "🦊", "ప": "🥛",
    "ఫ": "🍎", "బ": "⚽", "భ": "🏰", "మ": "🛏️", "య": "🔥",
    "ర": "☀️", "ల": "🌿", "వ": "🌲", "శ": "🐚", "ష": "⬡",
    "స": "🌊", "హ": "🦢", "ళ": "🔒", "క్ష": "🌾", "ఱ": "🪚"
}

def download_font_if_needed():
    """Downloads Noto Sans Telugu font if it does not exist in the current folder."""
    if os.path.exists(FONT_NAME):
        return True
    print(f"Downloading '{FONT_NAME}' from Google Fonts repository...")
    req = urllib.request.Request(
        FONT_URL, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if data:
            with open(FONT_NAME, "wb") as f:
                f.write(data)
            print(f"Successfully downloaded '{FONT_NAME}'")
            return True
    except Exception as e:
        print(f"Warning: Could not download Noto Sans Telugu font: {e}")
    return False

def make_templated_image(template_type, entry, output_path):
    """Generates high-quality landscape 16:9 canvas images based on the slide template."""
    if not PIL_AVAILABLE:
        print("Pillow library not installed. Skipping slide generation.")
        return False

    download_font_if_needed()

    width, height = VIDEO_WIDTH, VIDEO_HEIGHT
    
    # Try loading custom font, fall back to Windows Nirmala UI or default
    font_path = None
    if os.path.exists(FONT_NAME):
        font_path = FONT_NAME
    else:
        # Check standard Windows font folder for Telugu support
        windows_nirmala = "C:\\Windows\\Fonts\\Nirmala.ttf"
        if os.path.exists(windows_nirmala):
            font_path = windows_nirmala

    def get_font(size):
        if font_path:
            try:
                return ImageFont.truetype(font_path, size)
            except Exception:
                pass
        return ImageFont.load_default()

    if template_type == "hook":
        bg_color = (38, 25, 61)  # Deep Violet
        img = Image.new("RGB", (width, height), color=bg_color)
        draw = ImageDraw.Draw(img)
        
        # Decorative accents
        draw.ellipse([(-200, -200), (600, 600)], fill=(50, 35, 75))
        draw.ellipse([(width - 600, height - 600), (width + 200, height + 200)], fill=(45, 30, 70))
        
        # Rounded text box
        draw.rounded_rectangle([(width // 2 - 400, height // 2 - 200), (width // 2 + 400, height // 2 + 100)], radius=30, fill=(60, 45, 90))
        
        # Render Telugu text hook
        draw.text((width // 2, height // 2 - 80), "ఇవాళ ఏ అక్షరం?", fill=(255, 255, 0), font=get_font(90), anchor="mm")
        draw.text((width // 2, height // 2 + 20), "Which letter is today?", fill=(220, 220, 250), font=get_font(40), anchor="mm")
        draw.text((width // 2, height - 120), "Chinnu the Peacock is thinking...", fill=(180, 180, 210), font=get_font(36), anchor="mm")

    elif template_type == "trace":
        # Green chalkboard slate with wood borders
        bg_color = (22, 50, 29)  # Slate Green
        img = Image.new("RGB", (width, height), color=(78, 50, 30))  # Wood Frame
        draw = ImageDraw.Draw(img)
        
        border = 30
        draw.rectangle([(border, border), (width - border, height - border)], fill=bg_color)
        
        # Draw dotted slate guidelines
        for y in [350, 540, 730]:
            for x in range(border + 20, width - border - 20, 25):
                draw.line([(x, y), (x + 12, y)], fill=(255, 255, 255, 40), width=2)
                
        # Draw the standard still typographic character
        letter = entry["letter"]
        draw.text((width // 2, height // 2), letter, fill=(245, 246, 248), font=get_font(380), anchor="mm")
        draw.text((width // 2, 75), "అక్షరము (Letter)", fill=(200, 240, 210), font=get_font(36), anchor="mm")

    elif template_type == "word":
        bg_color = (20, 42, 34)  # Forest Green
        img = Image.new("RGB", (width, height), color=bg_color)
        draw = ImageDraw.Draw(img)
        
        draw.ellipse([(-300, -300), (500, 500)], fill=(25, 52, 42))
        draw.ellipse([(width - 500, height - 500), (width + 300, height + 300)], fill=(28, 58, 48))
        
        # Word Details Card
        draw.rounded_rectangle([(100, 150), (width // 2 - 50, height - 150)], radius=40, fill=(10, 25, 20))
        
        letter = entry["letter"]
        word = entry["example_word"]
        translit = entry["example_word_transliteration"]
        meaning = entry["example_word_meaning"]
        
        draw.text((width // 4 - 30, 260), f"{letter} - {word}", fill=(76, 201, 240), font=get_font(85), anchor="mm")
        draw.text((width // 4 - 30, 420), f"({translit})", fill=(255, 255, 255), font=get_font(50), anchor="mm")
        
        draw.line([(180, 520), (width // 2 - 130, 520)], fill=(40, 70, 60), width=3)
        draw.text((width // 4 - 30, 620), meaning, fill=(255, 209, 102), font=get_font(60), anchor="mm")
        
        # Representative Object Bubble
        obj_x, obj_y = 3 * width // 4 - 50, height // 2
        draw.ellipse([(obj_x - 220, obj_y - 220), (obj_x + 220, obj_y + 220)], fill=(30, 60, 50))
        
        emoji = EMOJI_MAP.get(letter, "⭐")
        emoji_font = None
        for font_name in ["seguiemj.ttf", "Symbola.ttf", "NotoColorEmoji.ttf", "arial.ttf"]:
            try:
                emoji_font = ImageFont.truetype(font_name, 160)
                break
            except Exception:
                pass
        if not emoji_font:
            emoji_font = get_font(160)
            
        draw.text((obj_x, obj_y), emoji, fill=(255, 255, 255), font=emoji_font, anchor="mm")
        
    elif template_type == "outro":
        bg_color = (61, 29, 29)  # Deep Red
        img = Image.new("RGB", (width, height), color=bg_color)
        draw = ImageDraw.Draw(img)
        
        draw.ellipse([(-200, -200), (500, 500)], fill=(75, 35, 35))
        draw.ellipse([(width - 500, height - 500), (width + 200, height + 200)], fill=(70, 32, 32))
        
        draw.text((width // 2, 220), "తెలుగు వర్ణమాల", fill=(255, 215, 0), font=get_font(90), anchor="mm")
        draw.text((width // 2, 360), "Telugu Varnamala Series", fill=(230, 230, 230), font=get_font(48), anchor="mm")
        
        bubble_x, bubble_y = width // 2, height // 2 + 150
        draw.ellipse([(bubble_x - 120, bubble_y - 120), (bubble_x + 120, bubble_y + 120)], fill=(245, 246, 248))
        draw.text((bubble_x, bubble_y), entry["letter"], fill=(61, 29, 29), font=get_font(130), anchor="mm")

    img.save(output_path)
    print(f"Created templated image ({template_type}) at: {output_path}")
    return True

# ---------------------------------------------------------------------------
# TEXT-TO-SPEECH ENGINE (keyless Telugu narration)
# ---------------------------------------------------------------------------

def narration_segments(entry):
    """Returns (start_time_seconds, text) tuples aligned to the subtitle beats."""
    return [
        (0.0,  u"ఇవాళ ఏ అక్షరం?"),
        (2.0,  entry["video_script"][0]),
        (6.0,  entry["video_script"][1]),
        (13.0, entry["video_script"][2]),
        (20.0, entry["video_script"][3]),
    ]

def _chunk_text(text, max_len=200):
    """Splits text into <=max_len pieces at sentence/word boundaries (TTS limit)."""
    text = text.strip()
    chunks = []
    while len(text) > max_len:
        window = text[:max_len]
        cut = max(window.rfind(". "), window.rfind("? "), window.rfind("! "),
                  window.rfind(", "), window.rfind(" "))
        if cut <= 0:
            cut = max_len - 1
        chunks.append(text[:cut + 1].strip())
        text = text[cut + 1:].strip()
    if text:
        chunks.append(text)
    return chunks

def _fetch_tts_chunk(text, out_path):
    """Downloads one <=200 char chunk from the keyless Google Translate endpoint."""
    params = {
        "ie": "UTF-8", "client": "tw-ob", "tl": TTS_LANG,
        "q": text, "textlen": str(len(text)), "total": "1", "idx": "0",
    }
    url = "https://translate.google.com/translate_tts?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(
        url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
        if not data:
            return False
        with open(out_path, "wb") as f:
            f.write(data)
        return True
    except Exception as e:
        print(f"   TTS fetch failed: {e}")
        return False

def synth_segment(text, out_path):
    """Synthesizes one narration segment (mp3) using gTTS or the direct endpoint."""
    text = (text or "").strip()
    if not text:
        return False

    # Preferred path: gTTS handles chunking, retries and the endpoint for us.
    if GTTS_AVAILABLE:
        try:
            gTTS(text=text, lang=TTS_LANG).save(out_path)
            return os.path.exists(out_path) and os.path.getsize(out_path) > 0
        except Exception as e:
            print(f"   gTTS failed ({e}); trying direct endpoint...")

    # Fallback: fetch each chunk ourselves and concatenate the mp3 parts.
    chunks = _chunk_text(text)
    parts = []
    for i, chunk in enumerate(chunks):
        part_path = f"{out_path}.part{i}.mp3"
        if not _fetch_tts_chunk(chunk, part_path):
            for p in parts:
                _safe_remove(p)
            return False
        parts.append(part_path)
        time.sleep(0.3)  # be gentle on the public endpoint

    if len(parts) == 1:
        shutil.move(parts[0], out_path)
    else:
        list_path = f"{out_path}.concat.txt"
        with open(list_path, "w", encoding="utf-8") as f:
            for p in parts:
                f.write(f"file '{os.path.abspath(p)}'\n")
        subprocess.run(
            ["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", list_path,
             "-c", "copy", out_path],
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        for p in parts:
            _safe_remove(p)
        _safe_remove(list_path)
    return os.path.exists(out_path) and os.path.getsize(out_path) > 0

def _safe_remove(path):
    try:
        os.remove(path)
    except OSError:
        pass

def build_narration(entry, audio_path, temp_dir):
    """Builds a TOTAL_DURATION narration WAV with each segment placed at its beat
    start time. Returns True on success, False if TTS is unavailable."""
    segments = narration_segments(entry)
    seg_files = []
    for i, (start, text) in enumerate(segments):
        seg_mp3 = os.path.join(temp_dir, f"narration_seg_{i}.mp3")
        if not synth_segment(text, seg_mp3):
            for _, p in seg_files:
                _safe_remove(p)
            return False
        seg_files.append((start, seg_mp3))

    # Delay each segment to its start time, mix together, then pad/trim to length.
    inputs = []
    filters = []
    for i, (start, seg_mp3) in enumerate(seg_files):
        inputs += ["-i", seg_mp3]
        delay_ms = int(round(start * 1000))
        filters.append(
            f"[{i}:a]aresample=44100,aformat=channel_layouts=stereo,"
            f"adelay={delay_ms}|{delay_ms}[a{i}]")
    mix_labels = "".join(f"[a{i}]" for i in range(len(seg_files)))
    filter_complex = ";".join(filters) + ";" + (
        f"{mix_labels}amix=inputs={len(seg_files)}:dropout_transition=0:normalize=0[mix];"
        f"[mix]apad,atrim=0:{TOTAL_DURATION}[out]")

    cmd = (["ffmpeg", "-y"] + inputs +
           ["-filter_complex", filter_complex, "-map", "[out]",
            "-ac", "2", "-ar", "44100", audio_path])
    result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

    for _, p in seg_files:
        _safe_remove(p)

    if result.returncode != 0:
        print("   Narration assembly failed:")
        print(result.stderr[-800:])
        return False
    return os.path.exists(audio_path)


def compile_reel(entry, output_dir):
    """Compiles the 25-second MP4 reel for the given letter entry using FFmpeg."""
    letter = entry["letter"]
    translit = entry["example_word_transliteration"]
    
    print("\n" + "="*50)
    print(f"Compiling Reel for: {letter} ({translit})")
    print("="*50)
    
    os.makedirs(output_dir, exist_ok=True)
    temp_dir = os.path.join(output_dir, "temp")
    os.makedirs(temp_dir, exist_ok=True)
    
    # 1. Define asset filenames
    hook_img = os.path.join(temp_dir, "hook.png")
    trace_img = os.path.join(temp_dir, "trace.png")
    word_img = os.path.join(temp_dir, "word.png")
    outro_img = os.path.join(temp_dir, "outro.png")
    
    # Narrations: Bulbul TTS output or silent audio fallback
    audio_path = os.path.join(temp_dir, "narration.wav")
    srt_path = os.path.join(temp_dir, "subtitles.srt")
    output_mp4 = os.path.join(output_dir, f"reel_{translit.lower()}.mp4")
    
    # 2. Build visual slides for the video
    if PIL_AVAILABLE:
        make_templated_image("hook", entry, hook_img)
        make_templated_image("trace", entry, trace_img)
        make_templated_image("word", entry, word_img)
        make_templated_image("outro", entry, outro_img)
    else:
        # Create empty placeholder files if PIL is missing
        for p in [hook_img, trace_img, word_img, outro_img]:
            with open(p, 'wb') as f:
                f.write(b'')
    
    # 3. Build the Telugu narration track (keyless TTS), aligned to the beats.
    #    Falls back to a silent track if no TTS / network is available so that
    #    assembly always completes.
    if not os.path.exists(audio_path):
        print("Synthesizing Telugu narration via TTS...")
        if build_narration(entry, audio_path, temp_dir):
            print("Narration track ready.")
        else:
            print("TTS unavailable. Generating silent track as fallback...")
            cmd_silence = [
                "ffmpeg", "-y",
                "-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo",
                "-t", str(TOTAL_DURATION),
                audio_path
            ]
            subprocess.run(cmd_silence, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
    # 4. Generate subtitles
    generate_srt_file(entry, srt_path)
    
    # 5. Run FFmpeg complex filter to stitch images sequentially.
    # Inputs:
    # -i hook.png (0), -i trace.png (1), -i word.png (2), -i outro.png (3), -i narration.wav (4)
    # Each frame is normalized to 1920x1080 (16:9) so real, differently-sized
    # assets can be dropped in later without breaking the concat.
    scale_filters = [
        f"[{i}:v]scale={VIDEO_WIDTH}:{VIDEO_HEIGHT}:force_original_aspect_ratio=decrease,"
        f"pad={VIDEO_WIDTH}:{VIDEO_HEIGHT}:(ow-iw)/2:(oh-ih)/2:color=black,setsar=1[v{i}]"
        for i in range(4)
    ]
    filter_complex = ";".join(scale_filters) + ";[v0][v1][v2][v3]concat=n=4:v=1:a=0[v]"

    ffmpeg_cmd = [
        "ffmpeg", "-y",
        "-loop", "1", "-t", str(BEATS["hook"]["duration"]), "-i", hook_img,
        "-loop", "1", "-t", str(BEATS["trace"]["duration"]), "-i", trace_img,
        "-loop", "1", "-t", str(BEATS["word"]["duration"]), "-i", word_img,
        "-loop", "1", "-t", str(BEATS["outro"]["duration"]), "-i", outro_img,
        "-i", audio_path,
        "-filter_complex", filter_complex,
        "-map", "[v]",
        "-map", "4:a",
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-r", "30",
        "-c:a", "aac",
        "-shortest",
        output_mp4
    ]
    
    print("Running FFmpeg compiler...")
    try:
        result = subprocess.run(ffmpeg_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if result.returncode == 0:
            print(f"Success! Reel saved at: {output_mp4}")
        else:
            print("FFmpeg failed. Error log:")
            print(result.stderr)
    except FileNotFoundError:
        print("Error: FFmpeg executable not found in PATH.")
        print("Please download FFmpeg and add it to your environment variables.")

def main():
    parser = argparse.ArgumentParser(description="Assemble Telugu Varnamala Reels.")
    parser.add_argument("--letter", type=str, help="Letter character (e.g. అ) to compile a single reel.")
    parser.add_argument("--all", action="store_true", help="Compile all 50 reels in a batch.")
    parser.add_argument("--out", type=str, default="output_reels", help="Output directory path.")
    
    args = parser.parse_args()
    
    # Print welcome block
    print("====================================================")
    print("✨ TELUGU VARNAMALA REELS BUILDER & AUTO COMPILER ✨")
    print("====================================================")
    
    if not PIL_AVAILABLE:
        print("Warning: Pillow (PIL) package not found. Run 'pip install Pillow' to support frame rendering.")
    
    matrix = load_matrix()
    
    if args.all:
        print(f"Batch processing all {len(matrix)} letters...")
        for entry in matrix:
            compile_reel(entry, args.out)
    elif args.letter:
        # Find specified letter
        # In Python 2.7 or Windows console, decoding arguments might be needed
        target = args.letter
        matched = [entry for entry in matrix if entry["letter"] == target or entry["example_word_transliteration"].lower() == target.lower()]
        
        if matched:
            compile_reel(matched[0], args.out)
        else:
            print(f"Error: Letter '{target}' not found in the matrix database.")
    else:
        # Default fallback: compile first reel for testing
        print("No options specified. Compiling first letter (అ) as test:")
        compile_reel(matrix[0], args.out)

if __name__ == "__main__":
    main()
