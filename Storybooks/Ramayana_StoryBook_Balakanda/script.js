/* ============================================================
   RAMAYANA BALA KANDA — CHILDREN'S STORYBOOK
   Interactive Logic: Navigation, TTS, Fullscreen, Swipe
   ============================================================ */

(function () {
  'use strict';

  // ---------- State ----------
  let currentPage = 0; // 0 = cover
  let totalPages = 0;
  let isAnimating = false;
  let isSpeaking = false;
  let tocOpen = false;
  let settingsOpen = false;

  // ---------- Audio Settings State ----------
  let activeAudio = null;
  let ttsToken = 0;

  // ---------- DOM Elements ----------
  const pages = [];
  let prevBtn, nextBtn, pageIndicator, progressBar;
  let ttsBtn, fullscreenBtn, tocBtn;
  let tocOverlay, tocPanel;

  // Audio Settings panel elements
  let audioSettingsBtn, audioSettingsPanel, ttsProvider, sarvamSettingsGroup, sarvamApiKey, sarvamSpeaker, ttsRate, applySettingsBtn, activeVoiceStatus;

  // ---------- Initialization ----------
  function init() {
    // Gather all pages
    document.querySelectorAll('.page').forEach(p => pages.push(p));
    totalPages = pages.length - 1; // minus cover = 42, but we include cover as index 0

    // Nav controls
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    pageIndicator = document.getElementById('page-indicator');
    progressBar = document.getElementById('progress-bar');

    // Toolbar
    ttsBtn = document.getElementById('tts-btn');
    fullscreenBtn = document.getElementById('fullscreen-btn');
    tocBtn = document.getElementById('toc-btn');
    audioSettingsBtn = document.getElementById('audio-settings-btn');

    // TOC
    tocOverlay = document.getElementById('toc-overlay');
    tocPanel = document.getElementById('toc-panel');

    // Settings Panel elements
    audioSettingsPanel = document.getElementById('audio-settings-panel');
    ttsProvider = document.getElementById('tts-provider');
    sarvamSettingsGroup = document.getElementById('sarvam-settings-group');
    sarvamApiKey = document.getElementById('sarvam-api-key');
    sarvamSpeaker = document.getElementById('sarvam-speaker');
    ttsRate = document.getElementById('tts-rate');
    applySettingsBtn = document.getElementById('apply-settings-btn');
    activeVoiceStatus = document.getElementById('active-voice-status');

    // Load initial settings
    ttsProvider.value = localStorage.getItem('tts_provider') || 'browser';
    sarvamApiKey.value = localStorage.getItem('sarvam_api_key') || '';
    sarvamSpeaker.value = localStorage.getItem('sarvam_speaker') || 'meera';
    ttsRate.value = localStorage.getItem('tts_rate') || '0.9';
    updateSettingsVisibility();
    updateActiveVoiceStatus();

    // Event listeners
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);

    ttsBtn.addEventListener('click', toggleTTS);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    tocBtn.addEventListener('click', openTOC);
    audioSettingsBtn.addEventListener('click', toggleAudioSettings);

    tocOverlay.addEventListener('click', closeTOC);
    document.getElementById('toc-close-btn').addEventListener('click', closeTOC);

    ttsProvider.addEventListener('change', () => {
      localStorage.setItem('tts_provider', ttsProvider.value);
      updateSettingsVisibility();
      updateActiveVoiceStatus();
    });
    sarvamApiKey.addEventListener('input', () => {
      localStorage.setItem('sarvam_api_key', sarvamApiKey.value.trim());
      updateActiveVoiceStatus();
    });
    sarvamSpeaker.addEventListener('change', () => {
      localStorage.setItem('sarvam_speaker', sarvamSpeaker.value);
      updateActiveVoiceStatus();
    });
    ttsRate.addEventListener('input', () => {
      localStorage.setItem('tts_rate', ttsRate.value);
      updateActiveVoiceStatus();
    });
    applySettingsBtn.addEventListener('click', toggleAudioSettings);

    // Keyboard nav
    document.addEventListener('keydown', handleKeyboard);

    // Touch/swipe
    setupSwipe();

    // Build TOC
    buildTOC();

    // Cover start button
    const startBtn = document.getElementById('start-reading-btn');
    if (startBtn) startBtn.addEventListener('click', () => goToPage(1));

    // Restart button
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) restartBtn.addEventListener('click', () => goToPage(0));

    // Show first page
    showPage(0);
    updateControls();
  }

  // ---------- Page Navigation ----------
  function showPage(index) {
    pages.forEach((p, i) => {
      p.classList.remove('active', 'turning-out-left', 'turning-out-right', 'turning-in');
      if (i === index) {
        p.classList.add('active');
      }
    });
  }

  function goToPage(index, direction = 'none') {
    if (isAnimating || index < 0 || index >= pages.length || index === currentPage) return;

    isAnimating = true;
    const oldPage = pages[currentPage];
    const newPage = pages[index];

    // Stop TTS if speaking
    if (isSpeaking) {
      stopTTS();
    }

    // Animate out
    const outClass = direction === 'right' || (direction === 'none' && index > currentPage)
      ? 'turning-out-left'
      : 'turning-out-right';

    oldPage.classList.add(outClass);

    setTimeout(() => {
      oldPage.classList.remove('active', outClass);
      newPage.classList.add('active', 'turning-in');
      currentPage = index;
      updateControls();

      setTimeout(() => {
        newPage.classList.remove('turning-in');
        isAnimating = false;
      }, 600);
    }, 300);
  }

  function nextPage() {
    if (currentPage < pages.length - 1) {
      goToPage(currentPage + 1, 'right');
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      goToPage(currentPage - 1, 'left');
    }
  }

  function updateControls() {
    // Buttons
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;

    // Page indicator
    if (currentPage === 0) {
      pageIndicator.textContent = 'Cover';
    } else if (currentPage === pages.length - 1) {
      pageIndicator.textContent = 'The End';
    } else {
      pageIndicator.textContent = `Page ${currentPage} of 42`;
    }

    // Progress bar
    const progress = (currentPage / (pages.length - 1)) * 100;
    progressBar.style.width = progress + '%';

    // TOC highlight
    document.querySelectorAll('.toc-item').forEach((item, i) => {
      item.classList.toggle('current', i === currentPage);
    });
  }

  // ---------- Keyboard Navigation ----------
  function handleKeyboard(e) {
    if (tocOpen) {
      if (e.key === 'Escape') closeTOC();
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
        e.preventDefault();
        nextPage();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        prevPage();
        break;
      case 'Home':
        e.preventDefault();
        goToPage(0);
        break;
      case 'End':
        e.preventDefault();
        goToPage(pages.length - 1);
        break;
      case 'f':
      case 'F':
        if (!e.ctrlKey && !e.metaKey) toggleFullscreen();
        break;
      case 'Escape':
        if (document.fullscreenElement) toggleFullscreen();
        break;
    }
  }

  // ---------- Touch / Swipe ----------
  function setupSwipe() {
    let startX = 0;
    let startY = 0;
    let distX = 0;
    const container = document.querySelector('.book-container');

    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      distX = e.changedTouches[0].clientX - startX;
      const distY = e.changedTouches[0].clientY - startY;

      // Only trigger if horizontal swipe is dominant and long enough
      if (Math.abs(distX) > 50 && Math.abs(distX) > Math.abs(distY) * 1.5) {
        if (distX < 0) {
          nextPage();
        } else {
          prevPage();
        }
      }
    }, { passive: true });
  }

  // ---------- Text-to-Speech ----------
  function toggleTTS() {
    if (isSpeaking) {
      stopTTS();
    } else {
      startTTS();
    }
  }

  function toggleAudioSettings() {
    settingsOpen = !settingsOpen;
    if (settingsOpen) {
      audioSettingsPanel.classList.add('open');
    } else {
      audioSettingsPanel.classList.remove('open');
    }
  }

  function updateSettingsVisibility() {
    if (ttsProvider.value === 'sarvam') {
      sarvamSettingsGroup.style.display = 'block';
    } else {
      sarvamSettingsGroup.style.display = 'none';
    }
  }

  function updateActiveVoiceStatus() {
    if (!activeVoiceStatus) return;
    const provider = localStorage.getItem('tts_provider') || 'browser';
    if (provider === 'sarvam') {
      const apiKey = (localStorage.getItem('sarvam_api_key') || '').trim();
      if (apiKey) {
        const speakerName = (localStorage.getItem('sarvam_speaker') || 'meera').toUpperCase();
        activeVoiceStatus.textContent = `Active: Sarvam AI (${speakerName})`;
        activeVoiceStatus.style.color = 'var(--saffron-dark)';
      } else {
        activeVoiceStatus.textContent = "Active: Browser Default (No API Key)";
        activeVoiceStatus.style.color = 'var(--rose)';
      }
    } else {
      activeVoiceStatus.textContent = "Active: Browser Default Voice";
      activeVoiceStatus.style.color = 'var(--text-light)';
    }
  }

  function saveAudioSettings() {
    localStorage.setItem('tts_provider', ttsProvider.value);
    localStorage.setItem('sarvam_api_key', sarvamApiKey.value.trim());
    localStorage.setItem('sarvam_speaker', sarvamSpeaker.value);
    localStorage.setItem('tts_rate', ttsRate.value);
    toggleAudioSettings();
  }

  function startTTS() {
    const activePage = pages[currentPage];
    const textEl = activePage.querySelector('.page-story-text p, .cover-tagline, .end-text');
    if (!textEl) return;
    const text = textEl.textContent.trim();
    if (!text) return;

    const provider = localStorage.getItem('tts_provider') || 'browser';
    const rate = parseFloat(localStorage.getItem('tts_rate')) || 0.9;

    console.log("TTS Request:", { provider, rate });

    ttsToken++;
    const myToken = ttsToken;

    if (provider === 'sarvam') {
      const apiKey = (localStorage.getItem('sarvam_api_key') || '').trim();
      if (!apiKey) {
        alert('Please enter your Sarvam API Key in the settings panel (⚙) first.');
        toggleAudioSettings();
        return;
      }

      const speaker = localStorage.getItem('sarvam_speaker') || 'meera';
      console.log("Calling Sarvam AI with speaker:", speaker);

      ttsBtn.classList.add('active');
      ttsBtn.innerHTML = '⌛'; // loading state icon

      fetch('https://api.sarvam.ai/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-subscription-key': apiKey
        },
        body: JSON.stringify({
          text: text,
          target_language_code: 'en-IN', // Indian English!
          speaker: speaker,
          model: 'bulbul:v3',
          pace: rate,
          temperature: 0.7 // storytelling expressiveness!
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (myToken !== ttsToken) return;
        if (data && data.audios && data.audios[0]) {
          const audioBase64 = data.audios[0];
          const audioSrc = `data:audio/mp3;base64,${audioBase64}`;
          const audio = new Audio(audioSrc);
          audio.playbackRate = 1.0;
          activeAudio = audio;
          isSpeaking = true;
          ttsBtn.innerHTML = '🔇';

          audio.onended = () => {
            if (myToken === ttsToken) {
              stopTTS();
            }
          };
          audio.onerror = () => {
            if (myToken === ttsToken) {
              console.error("Sarvam audio playback error. Falling back to browser default.");
              fallbackSpeak(text, rate, myToken);
            }
          };
          
          const playPromise = audio.play();
          if (playPromise && playPromise.catch) {
            playPromise.catch(err => {
              if (myToken === ttsToken) {
                console.error("Playback interrupted:", err);
                fallbackSpeak(text, rate, myToken);
              }
            });
          }
        } else {
          throw new Error("No audio returned from Sarvam AI");
        }
      })
      .catch(err => {
        console.error("Sarvam AI TTS failed, falling back:", err);
        if (myToken === ttsToken) {
          fallbackSpeak(text, rate, myToken);
        }
      });

    } else {
      fallbackSpeak(text, rate, myToken);
    }
  }

  function fallbackSpeak(text, rate, myToken) {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.');
      stopTTS();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1.0;
    
    // Attempt to set an Indian English voice if available on browser
    const voices = window.speechSynthesis.getVoices();
    const inVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en_IN'));
    if (inVoice) {
      utterance.voice = inVoice;
    } else {
      utterance.lang = 'en-IN'; // Fallback hint
    }

    utterance.onend = () => {
      if (myToken === ttsToken) {
        stopTTS();
      }
    };

    utterance.onerror = (e) => {
      console.error("Web Speech API error:", e);
      if (myToken === ttsToken) {
        stopTTS();
      }
    };

    isSpeaking = true;
    ttsBtn.classList.add('active');
    ttsBtn.innerHTML = '🔇';
    window.speechSynthesis.speak(utterance);
  }

  function stopTTS() {
    window.speechSynthesis.cancel();
    if (activeAudio) {
      activeAudio.pause();
      activeAudio = null;
    }
    ttsToken++; // cancel any ongoing fetch/play callbacks
    isSpeaking = false;
    ttsBtn.classList.remove('active');
    ttsBtn.innerHTML = '🔊';
  }

  // ---------- Fullscreen ----------
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      fullscreenBtn.innerHTML = '⊡';
    } else {
      document.exitFullscreen().catch(() => {});
      fullscreenBtn.innerHTML = '⛶';
    }
  }

  // ---------- Table of Contents ----------
  function buildTOC() {
    const list = document.getElementById('toc-list');
    pages.forEach((page, i) => {
      const item = document.createElement('div');
      item.classList.add('toc-item');
      if (i === 0) item.classList.add('current');

      const num = document.createElement('span');
      num.classList.add('toc-item-num');
      num.textContent = i === 0 ? '★' : (i === pages.length - 1 ? '✦' : i);

      const title = document.createElement('span');
      title.textContent = page.dataset.title || `Page ${i}`;

      item.appendChild(num);
      item.appendChild(title);

      item.addEventListener('click', () => {
        goToPage(i);
        closeTOC();
      });

      list.appendChild(item);
    });
  }

  function openTOC() {
    tocOpen = true;
    tocOverlay.classList.add('open');
    tocPanel.classList.add('open');

    // Scroll current page into view
    const current = tocPanel.querySelector('.toc-item.current');
    if (current) current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function closeTOC() {
    tocOpen = false;
    tocOverlay.classList.remove('open');
    tocPanel.classList.remove('open');
  }

  // ---------- Boot ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
