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

  // ---------- DOM Elements ----------
  const pages = [];
  let prevBtn, nextBtn, pageIndicator, progressBar;
  let ttsBtn, fullscreenBtn, tocBtn;
  let tocOverlay, tocPanel;

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

    // TOC
    tocOverlay = document.getElementById('toc-overlay');
    tocPanel = document.getElementById('toc-panel');

    // Event listeners
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);

    ttsBtn.addEventListener('click', toggleTTS);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    tocBtn.addEventListener('click', openTOC);

    tocOverlay.addEventListener('click', closeTOC);
    document.getElementById('toc-close-btn').addEventListener('click', closeTOC);

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

  function startTTS() {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }

    const activePage = pages[currentPage];
    const textEl = activePage.querySelector('.page-story-text p, .cover-tagline, .end-text');
    if (!textEl) return;

    const utterance = new SpeechSynthesisUtterance(textEl.textContent);
    utterance.rate = 0.85;
    utterance.pitch = 1.05;
    utterance.lang = 'en-US';

    utterance.onend = () => {
      isSpeaking = false;
      ttsBtn.classList.remove('active');
      ttsBtn.innerHTML = '🔊';
    };

    utterance.onerror = () => {
      isSpeaking = false;
      ttsBtn.classList.remove('active');
      ttsBtn.innerHTML = '🔊';
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    isSpeaking = true;
    ttsBtn.classList.add('active');
    ttsBtn.innerHTML = '🔇';
  }

  function stopTTS() {
    window.speechSynthesis.cancel();
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
