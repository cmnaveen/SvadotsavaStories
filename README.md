# Svadotsava Stories

A collection of two independent, kid-focused educational web projects. The repo
is split by content — each app is fully self-contained in its own folder with its
own HTML/CSS/JS and image assets.

```
.
├── ramayana-stories/      # Interactive Rāmāyaṇa storybook (10-episode kids series)
└── telugu-varnamala/      # Telugu Varnamala reels studio + video compiler
```

---

## 1. Rāmāyaṇa Stories — `ramayana-stories/`

**The True Rāmāyaṇa**, a 10-episode interactive reading journey for kids: a cover
screen, an illustrated book reader with text-to-speech narration, per-episode
quizzes, and a collectible badge room. Progress is saved in the browser.

- Tech: HTML, CSS, vanilla JS (no build step).
- Run: open [`ramayana-stories/index.html`](ramayana-stories/index.html) in a browser.
- Assets: `ramayana-stories/images/` (`cover.png`, `yajna.png`, `bow.png`).

## 2. Telugu Varnamala — `telugu-varnamala/`

A studio for producing 16:9 landscape video reels that teach the Telugu
Varnamala (అ–ఱ). Two parts:

- **Web simulator / QA portal** — preview each letter's reel (hook → slate-style
  stroke tracing → example word → outro), with burned-in captions and a
  native-speaker QA checklist.
  - Run: open [`telugu-varnamala/preview_reels.html`](telugu-varnamala/preview_reels.html) in a browser.
  - Files: `preview_reels.html`, `preview_app.js`, `preview_style.css`,
    `varnamala_data.js`.
- **Offline FFmpeg compiler** — `assemble_reels.py` renders the final
  `1920x1080` MP4 reels from `varnamala_matrix.json`, generating slide images
  (Pillow), Telugu narration (gTTS / keyless Google Translate TTS), and subtitles.

  ```bash
  cd telugu-varnamala
  pip install Pillow gTTS          # plus FFmpeg on your PATH
  python assemble_reels.py --letter అ      # single reel
  python assemble_reels.py --all           # batch all letters
  ```

  Assets: `telugu-varnamala/images/` (`mascot_anchor.png`).
