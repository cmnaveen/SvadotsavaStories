/* ==========================================================================
   TELUGU VARNAMALA REELS STUDIO - APPLICATION ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  let varnamalaData = [];
  let currentIdx = 0;
  let isPlaying = false;
  let timelineTime = 0; // 0 to 25 seconds
  let timelineInterval = null;
  let activeSpeech = null;
  let selectedVoice = null;
  let qaProgress = {}; // Store QA checklist state per letter index
  let activeAudio = null; // Keyless TTS audio element reference
  // Emoji Mapping for Word objects
  const emojiMap = {
    "అ": "🍌", "ఆ": "🍃", "ఇ": "🏠", "ఈ": "🪶", "ఉ": "🐿️",
    "ఊ": "🎡", "ఋ": "🧘", "ౠ": "🪙", "ఎ": "🐭", "ఏ": "🐘", "ఐ": "🍦", "ఒ": "🐪",
    "ఓ": "⛵", "ఔ": "🧪", "అం": "🔢", "అః": "🏰", "క": "🐸",
    "ఖ": "🌴", "గ": "🌂", "ఘ": "🔔", "ఙ": "📚", "చ": "🌙",
    "ఛ": "⛱️", "జ": "🚩", "ఝ": "🌊", "ఞ": "🎓", "ట": "🤠",
    "ఠ": "🪙", "డ": "🪘", "ఢ": "🥁", "ణ": "🪕", "త": "🪘",
    "థ": "🛒", "ద": "🍇", "ధ": "🏹", "న": "⭐", "ప": "⛵",
    "ఫ": "🍎", "బ": "⚽", "భ": "🏰", "మ": "🐊", "య": "🛡️",
    "ర": "☀️", "ల": "🟡", "వ": "🌧️", "శ": "🐚", "ష": "⬡",
    "స": "🦁", "హ": "🌈", "ళ": "🔒", "క్ష": "🌳", "ఱ": "🐎"
  };

  // DOM Elements
  const vowelGrid = document.getElementById('vowelGrid');
  const consonantGrid = document.getElementById('consonantGrid');
  const letterCounter = document.getElementById('letterCounter');
  const tabAll = document.getElementById('tabAll');
  const tabVowels = document.getElementById('tabVowels');
  const tabConsonants = document.getElementById('tabConsonants');
  
  // Simulator Layers
  const layerHook = document.getElementById('layerHook');
  const layerTrace = document.getElementById('layerTrace');
  const layerWord = document.getElementById('layerWord');
  const layerOutro = document.getElementById('layerOutro');
  
  // Tracing Elements
  const traceSvg = document.getElementById('traceSvg');
  const traceBrush = document.getElementById('traceBrush');
  const traceVectorGroup = document.getElementById('traceVectorGroup');
  const traceGlyphGuide = document.getElementById('traceGlyphGuide');
  const traceGlyphInk = document.getElementById('traceGlyphInk');
  const traceRevealRect = document.getElementById('traceRevealRect');
  const traceInstructionText = document.getElementById('traceInstructionText');
  
  // Word & Outro Display
  const wordTeluguDisplay = document.getElementById('wordTeluguDisplay');
  const wordTranslitDisplay = document.getElementById('wordTranslitDisplay');
  const wordMeaningDisplay = document.getElementById('wordMeaningDisplay');
  const wordObjectBubble = document.getElementById('wordObjectBubble');
  const outroLetterBubble = document.getElementById('outroLetterBubble');
  const wordMascotImg = document.getElementById('wordMascotImg');
  
  // HUD
  const hudLetterTag = document.getElementById('hudLetterTag');
  const hudTimeText = document.getElementById('hudTimeText');
  const subTelugu = document.getElementById('subTelugu');
  const subEnglish = document.getElementById('subEnglish');
  const gridOverlay = document.getElementById('gridOverlay');
  
  // Controls
  const reelProgress = document.getElementById('reelProgress');
  const progressBarFill = document.getElementById('progressBarFill');
  const btnPlayPause = document.getElementById('btnPlayPause');
  const btnRestart = document.getElementById('btnRestart');
  const btnPrevReel = document.getElementById('btnPrevReel');
  const btnNextReel = document.getElementById('btnNextReel');
  const ttsRate = document.getElementById('ttsRate');
  const overlayToggle = document.getElementById('overlayToggle');
  
  // Inspector
  const metaSound = document.getElementById('metaSound');
  const metaType = document.getElementById('metaType');
  const metaExampleWord = document.getElementById('metaExampleWord');
  const metaExampleTranslit = document.getElementById('metaExampleTranslit');
  const metaExampleMeaning = document.getElementById('metaExampleMeaning');
  const metaIsConjunct = document.getElementById('metaIsConjunct');
  const promptTextArea = document.getElementById('promptTextArea');
  const btnCopyPrompt = document.getElementById('btnCopyPrompt');
  const btnCopyJson = document.getElementById('btnCopyJson');
  
  // Narration Script text fields
  const beatText1 = document.getElementById('beatText1');
  const beatText2 = document.getElementById('beatText2');
  const beatText3 = document.getElementById('beatText3');
  const beatText4 = document.getElementById('beatText4');

  // QA Items
  const qaAkshara = document.getElementById('qaAkshara');
  const qaStroke = document.getElementById('qaStroke');
  const qaVocab = document.getElementById('qaVocab');
  const qaAudio = document.getElementById('qaAudio');
  const qaStatusText = document.getElementById('qaStatusText');
  const qaStatusBox = document.getElementById('qaStatusBox');

  // Load Voices for TTS
  function loadVoices() {
    if (!window.speechSynthesis) return;
    const voices = window.speechSynthesis.getVoices();
    // Try to find a Telugu voice (te-IN), fall back to other Indian voices (en-IN) or default
    selectedVoice = voices.find(v => v.lang.includes('te-IN')) ||
                    voices.find(v => v.lang.includes('en-IN')) ||
                    voices.find(v => v.lang.includes('en-US')) ||
                    voices[0];
  }
  
  if (window.speechSynthesis) {
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
  }

  // Load QA progress from LocalStorage
  function loadQAFromStorage() {
    const saved = localStorage.getItem('varnamala_reels_qa_progress');
    if (saved) {
      try {
        qaProgress = JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing QA progress:", e);
      }
    }
  }

  // Save QA progress to LocalStorage
  function saveQAToStorage() {
    localStorage.setItem('varnamala_reels_qa_progress', JSON.stringify(qaProgress));
    updateGridVisuals();
  }

  // Fetch Content Matrix JSON
  function initStudio() {
    try {
      // Use pre-loaded script variable to prevent file:// protocol CORS issues
      if (typeof VARNAMALA_DATA !== 'undefined') {
        varnamalaData = VARNAMALA_DATA;
      } else {
        throw new Error("VARNAMALA_DATA is not defined. Make sure varnamala_data.js is loaded.");
      }
      
      loadQAFromStorage();
      renderLetterSelector();
      loadLetter(0);
      
      letterCounter.textContent = `${varnamalaData.length} Letters Loaded`;
    } catch (e) {
      console.error("Failed to load varnamala content matrix:", e);
      alert("Error loading content matrix: " + e.message);
    }
  }

  // Render Left selector buttons
  function renderLetterSelector() {
    vowelGrid.innerHTML = '';
    consonantGrid.innerHTML = '';

    varnamalaData.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.className = `grid-btn ${item.type}`;
      btn.id = `grid-btn-${index}`;
      btn.dataset.index = index;
      
      btn.innerHTML = `
        <span class="btn-char">${item.letter}</span>
        <span class="btn-sound">${item.example_word_transliteration}</span>
      `;
      
      btn.addEventListener('click', () => {
        loadLetter(index);
      });
      
      if (item.type === 'vowel') {
        vowelGrid.appendChild(btn);
      } else {
        consonantGrid.appendChild(btn);
      }
    });

    updateGridVisuals();
  }

  // Update button highlights and checkmarks in left panel grid
  function updateGridVisuals() {
    varnamalaData.forEach((item, index) => {
      const btn = document.getElementById(`grid-btn-${index}`);
      if (!btn) return;

      // Active state
      if (index === currentIdx) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }

      // QA Done state
      const isDone = qaProgress[index] && 
                     qaProgress[index].akshara && 
                     qaProgress[index].stroke && 
                     qaProgress[index].vocab && 
                     qaProgress[index].audio;
      
      if (isDone) {
        btn.classList.add('qa-done');
      } else {
        btn.classList.remove('qa-done');
      }
    });
  }

  // Load selected letter details into inspector & reset simulator
  function loadLetter(index) {
    if (index < 0 || index >= varnamalaData.length) return;
    currentIdx = index;
    const item = varnamalaData[currentIdx];
    
    stopReel();
    
    // Update Inspector Info
    metaSound.textContent = item.sound;
    metaType.textContent = item.type;
    metaExampleWord.textContent = item.example_word;
    metaExampleTranslit.textContent = item.example_word_transliteration;
    metaExampleMeaning.textContent = item.example_word_meaning;
    metaIsConjunct.textContent = item.is_conjunct ? "Yes" : "No";
    
    promptTextArea.value = item.image_prompt;
    
    // Load script beats list
    beatText1.textContent = item.video_script[0];
    beatText2.textContent = item.video_script[1];
    beatText3.textContent = item.video_script[2];
    beatText4.textContent = item.video_script[3];

    // Load QA Checks
    const qa = qaProgress[currentIdx] || { akshara: false, stroke: false, vocab: false, audio: false };
    qaAkshara.checked = qa.akshara;
    qaStroke.checked = qa.stroke;
    qaVocab.checked = qa.vocab;
    qaAudio.checked = qa.audio;
    updateQAStatusUI();

hudLetterTag.textContent = item.letter;
    outroLetterBubble.textContent = item.letter;
    wordTeluguDisplay.textContent = item.example_word;
    wordTranslitDisplay.textContent = item.example_word_transliteration;
    wordMeaningDisplay.textContent = item.example_word_meaning;
    
    // Set custom emoji representing the word object
    wordObjectBubble.textContent = emojiMap[item.letter] || "⭐";
    
    // Reset Tracing Canvas
    setupSVGTracing(item.letter);

    // Reset Timeline
    resetReel();
    updateGridVisuals();
  }

  const VIEWBOX = 200;
  const traceCenterY = VIEWBOX / 2 + 10; // vertical center line of writing baseline

  // Generate dynamic stroke guides and visual step markers on the chalkboard slate
  function setupSVGTracing(letter) {
    traceInstructionText.textContent = `Akshara: "${letter}"`;

    // Hide vector groups
    if (traceVectorGroup) {
      traceVectorGroup.style.display = 'none';
    }

    // Set text elements to display the standard Telugu letter
    traceGlyphGuide.textContent = letter;
    traceGlyphGuide.style.display = 'none'; // Hide faint guide since we display the letter statically
    traceGlyphInk.textContent = letter;

    // Show the full letter immediately (no clip-path reveal)
    traceRevealRect.setAttribute('width', '200');

    // Hide the brush tip as there is no tracing animation
    traceBrush.style.display = 'none';
  }

  // Update UI checklist display
  function updateQAStatusUI() {
    const isDone = qaAkshara.checked && qaStroke.checked && qaVocab.checked && qaAudio.checked;
    if (isDone) {
      qaStatusText.textContent = "Verified Good ✓";
      qaStatusText.className = "status-badge status-verified";
      qaStatusBox.style.borderColor = "var(--success-color)";
    } else {
      qaStatusText.textContent = "Pending Verification";
      qaStatusText.className = "status-badge status-pending";
      qaStatusBox.style.borderColor = "var(--border-color)";
    }
  }

  // Handle Checklist edits
  function handleQACheckboxChange() {
    qaProgress[currentIdx] = {
      akshara: qaAkshara.checked,
      stroke: qaStroke.checked,
      vocab: qaVocab.checked,
      audio: qaAudio.checked
    };
    saveQAToStorage();
    updateQAStatusUI();
  }

  [qaAkshara, qaStroke, qaVocab, qaAudio].forEach(el => {
    el.addEventListener('change', handleQACheckboxChange);
  });

  // Copy elements
  btnCopyPrompt.addEventListener('click', () => {
    promptTextArea.select();
    document.execCommand('copy');
    const oldText = btnCopyPrompt.textContent;
    btnCopyPrompt.textContent = "Copied! ✓";
    setTimeout(() => btnCopyPrompt.textContent = oldText, 1500);
  });

  btnCopyJson.addEventListener('click', () => {
    const jsonStr = JSON.stringify(varnamalaData[currentIdx], null, 2);
    navigator.clipboard.writeText(jsonStr).then(() => {
      const oldText = btnCopyJson.textContent;
      btnCopyJson.textContent = "Copied Json! ✓";
      setTimeout(() => btnCopyJson.textContent = oldText, 1500);
    }).catch(err => {
      alert("Failed to copy JSON: " + err);
    });
  });

  // Tabs Filter
  tabAll.addEventListener('click', () => {
    setActiveTab(tabAll);
    vowelGrid.parentElement.querySelectorAll('.grid-section-title').forEach(el => el.classList.remove('hidden'));
    vowelGrid.classList.remove('hidden');
    consonantGrid.classList.remove('hidden');
  });

  tabVowels.addEventListener('click', () => {
    setActiveTab(tabVowels);
    vowelGrid.parentElement.querySelectorAll('.grid-section-title')[0].classList.remove('hidden');
    vowelGrid.parentElement.querySelectorAll('.grid-section-title')[1].classList.add('hidden');
    vowelGrid.classList.remove('hidden');
    consonantGrid.classList.add('hidden');
  });

  tabConsonants.addEventListener('click', () => {
    setActiveTab(tabConsonants);
    vowelGrid.parentElement.querySelectorAll('.grid-section-title')[0].classList.add('hidden');
    vowelGrid.parentElement.querySelectorAll('.grid-section-title')[1].classList.remove('hidden');
    vowelGrid.classList.add('hidden');
    consonantGrid.classList.remove('hidden');
  });

  function setActiveTab(activeBtn) {
    [tabAll, tabVowels, tabConsonants].forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  // Toggle Grid Overlays
  overlayToggle.addEventListener('change', () => {
    if (overlayToggle.checked) {
      gridOverlay.classList.add('active');
    } else {
      gridOverlay.classList.remove('active');
    }
  });

  // Playback & Timeline ticking (Simulator logic)
  function playReel() {
    if (isPlaying) return;
    isPlaying = true;
    btnPlayPause.textContent = "⏸️ Pause Reel";
    btnPlayPause.classList.add('playing');
    
    // Narrate initially if starting
    if (timelineTime === 0) {
      triggerTTSBeat(0);
    }

    timelineInterval = setInterval(() => {
      timelineTime += 0.1;
      
      // End reached
      if (timelineTime >= 25.0) {
        timelineTime = 25.0;
        pauseReel();
      }

      updateTimelineUI();
    }, 100);
  }

  function pauseReel() {
    if (!isPlaying) return;
    isPlaying = false;
    btnPlayPause.textContent = "▶️ Play Reel";
    btnPlayPause.classList.remove('playing');
    clearInterval(timelineInterval);

    // Stop any in-flight narration (audio chunks + speechSynthesis fallback).
    stopSpeaking();
  }

  function stopReel() {
    pauseReel();
    timelineTime = 0.0;
    updateTimelineUI();
  }

  function resetReel() {
    stopReel();
    updateTimelineUI();
  }

  btnPlayPause.addEventListener('click', () => {
    if (isPlaying) {
      pauseReel();
    } else {
      if (timelineTime >= 25.0) {
        timelineTime = 0.0;
      }
      playReel();
    }
  });

  btnRestart.addEventListener('click', () => {
    stopReel();
    playReel();
  });

  btnPrevReel.addEventListener('click', () => {
    if (currentIdx > 0) {
      loadLetter(currentIdx - 1);
    }
  });

  btnNextReel.addEventListener('click', () => {
    if (currentIdx < varnamalaData.length - 1) {
      loadLetter(currentIdx + 1);
    }
  });

  // Manual scrubber movement
  reelProgress.addEventListener('input', () => {
    const wasPlaying = isPlaying;
    pauseReel();
    timelineTime = parseFloat(reelProgress.value);
    updateTimelineUI();
    
    // Trigger speech only on beat transitions when scrubbing
    const currentBeat = getBeatFromTime(timelineTime);
    triggerTTSBeat(currentBeat);

    if (wasPlaying) {
      playReel();
    }
  });

  // Return the active beat partition (0-4) based on timeline seconds
  function getBeatFromTime(sec) {
    if (sec < 2.0) return 0;       // Hook
    if (sec < 6.0) return 1;       // Tracing
    if (sec < 13.0) return 2;      // Word link
    if (sec < 20.0) return 3;      // Rhyme
    return 4;                      // Outro
  }

  // Update simulator overlays, subtitles, and progress bars as time advances
  let lastBeat = -1;
  
  function updateTimelineUI() {
    reelProgress.value = timelineTime.toFixed(1);
    
    // Update progress bars
    const percentage = (timelineTime / 25.0) * 100;
    progressBarFill.style.width = `${percentage}%`;
    
    // Format minutes:seconds
    const minutes = Math.floor(timelineTime / 60);
    const seconds = Math.floor(timelineTime % 60);
    const milliseconds = Math.floor((timelineTime % 1) * 10);
    hudTimeText.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds} / 00:25.0`;

    // Active layer switching depending on beats
    const beat = getBeatFromTime(timelineTime);
    
    // Trigger TTS and UI animations when entering a new beat segment
    if (beat !== lastBeat) {
      lastBeat = beat;
      
      // Reset layer visibilities
      [layerHook, layerTrace, layerWord, layerOutro].forEach(el => el.classList.remove('active'));
      
      if (beat === 0) {
        layerHook.classList.add('active');
        // Speech Bubble bounce animation
        const bubble = layerHook.querySelector('.hook-bubble');
        bubble.classList.remove('animate-pop');
        void bubble.offsetWidth; // trigger reflow
        bubble.classList.add('animate-pop');
      } 
      else if (beat === 1) {
        layerTrace.classList.add('active');
      } 
      else if (beat === 2 || beat === 3) {
        layerWord.classList.add('active');
        
        // Trigger bounce animation on objects
        const bubble = document.getElementById('wordObjectBubble');
        bubble.style.animation = 'none';
        void bubble.offsetWidth; // trigger reflow
        bubble.style.animation = 'float 3s ease-in-out infinite';
      } 
      else if (beat === 4) {
        layerOutro.classList.add('active');
      }

      // Update Subtitles content
      const item = varnamalaData[currentIdx];
      if (beat === 0) {
        subTelugu.textContent = "ఇవాళ ఏ అక్షరం?";
        subEnglish.textContent = "Which letter today?";
        if (isPlaying) triggerTTSBeat(0);
      } 
      else if (beat === 1) {
        subTelugu.textContent = item.video_script[0];
        subEnglish.textContent = `This is letter '${item.letter}' - Say it clearly`;
        if (isPlaying) triggerTTSBeat(1);
      } 
      else if (beat === 2) {
        subTelugu.textContent = item.video_script[1];
        subEnglish.textContent = `${item.letter} is for ${item.example_word_meaning} (${item.example_word_transliteration})`;
        if (isPlaying) triggerTTSBeat(2);
      } 
      else if (beat === 3) {
        subTelugu.textContent = item.video_script[2];
        subEnglish.textContent = "Let's read the rhyme together!";
        if (isPlaying) triggerTTSBeat(3);
      } 
      else if (beat === 4) {
        subTelugu.textContent = item.video_script[3];
        subEnglish.textContent = `Let's repeat once more: ${item.letter} for ${item.example_word_meaning}!`;
        if (isPlaying) triggerTTSBeat(4);
      }
    }

    // No brush/writing animation during the tracing beat (2s to 6s) - keep still letter fully visible
    if (beat === 1) {
      traceRevealRect.setAttribute('width', '200');
      traceBrush.style.display = 'none';
    }
  }

  /* ----------------------------------------------------------------------
     TEXT-TO-SPEECH

     The browser's window.speechSynthesis rarely ships a real Telugu (te-IN)
     voice, so it was silent or mispronounced. We instead stream actual Telugu
     audio from the keyless Google Translate TTS endpoint (the same one the
     popular gTTS library uses) via <audio> elements — media playback is not
     subject to CORS, so this works straight from file://.

     Long lines are split into <=200 char chunks (endpoint limit) and queued.
     If the audio request fails (e.g. offline), we fall back to speechSynthesis.
  ---------------------------------------------------------------------- */
  let ttsQueue = [];
  let ttsToken = 0; // increments on every new request to invalidate stale callbacks

  // Split text into <=maxLen pieces at sentence / word boundaries.
  function chunkText(text, maxLen = 200) {
    const parts = [];
    let remaining = (text || '').trim();
    while (remaining.length > maxLen) {
      const window = remaining.slice(0, maxLen);
      let cut = Math.max(
        window.lastIndexOf('. '), window.lastIndexOf('? '),
        window.lastIndexOf('! '), window.lastIndexOf(', '),
        window.lastIndexOf(' ')
      );
      if (cut <= 0) cut = maxLen - 1;
      parts.push(remaining.slice(0, cut + 1).trim());
      remaining = remaining.slice(cut + 1).trim();
    }
    if (remaining) parts.push(remaining);
    return parts;
  }

  function googleTTSUrl(chunk, idx, total) {
    const params = new URLSearchParams({
      ie: 'UTF-8', client: 'tw-ob', tl: 'te',
      total: String(total), idx: String(idx),
      textlen: String(chunk.length), q: chunk
    });
    return `https://translate.google.com/translate_tts?${params.toString()}`;
  }

  // Stop any narration currently playing (audio or speechSynthesis).
  function stopSpeaking() {
    ttsToken++;            // invalidate in-flight chunk callbacks
    ttsQueue = [];
    if (activeAudio) {
      try { activeAudio.pause(); } catch (e) { /* ignore */ }
      activeAudio.onended = null;
      activeAudio.onerror = null;
      activeAudio = null;
    }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  // Browser speechSynthesis fallback (used only if the audio endpoint fails).
  function fallbackSpeak(text, rate) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    loadVoices();
    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.lang = 'te-IN';
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  }

  // Speak arbitrary Telugu text via the audio endpoint, chunk by chunk.
  function speakText(text, rate) {
    stopSpeaking();
    const trimmed = (text || '').trim();
    if (!trimmed) return;

    const myToken = ttsToken;
    const chunks = chunkText(trimmed);
    ttsQueue = chunks.map((c, i) => googleTTSUrl(c, i, chunks.length));
    let usedFallback = false;

    const playNext = () => {
      if (myToken !== ttsToken) return;        // a newer request superseded us
      if (ttsQueue.length === 0) return;        // finished

      const url = ttsQueue.shift();
      const audio = new Audio(url);
      audio.playbackRate = rate || 1.0;
      activeAudio = audio;

      audio.onended = () => { if (myToken === ttsToken) playNext(); };
      audio.onerror = () => {
        if (myToken !== ttsToken || usedFallback) return;
        usedFallback = true;
        fallbackSpeak(trimmed, rate); // network/endpoint failed → browser voice
      };
      const p = audio.play();
      if (p && p.catch) {
        p.catch(() => {
          if (myToken !== ttsToken || usedFallback) return;
          usedFallback = true;
          fallbackSpeak(trimmed, rate);
        });
      }
    };

    playNext();
  }

  // Trigger TTS voice narration matching the subtitle beats
  function triggerTTSBeat(beatIndex) {
    const item = varnamalaData[currentIdx];
    let text = "";

    if (beatIndex === 0) {
      text = "ఇవాళ ఏ అక్షరం?";
    } else if (beatIndex >= 1 && beatIndex <= 4) {
      text = item.video_script[beatIndex - 1];
    }

    if (!text) return;

    const rate = parseFloat(ttsRate.value) || 1.0;
    speakText(text, rate);
  }

  // Set active tab filtering on start
  initStudio();
});
