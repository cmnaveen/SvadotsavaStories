/* ============================================================
   Ramayana Children's Storybook — Interactive Engine
   ============================================================ */

// ---- Page Data (42 Pages + Cover) ----
const PAGES = [
  {
    title: "The Ramayana",
    subtitle: "Bala Kanda — The Book of Youth",
    text: "Welcome, dear reader, to the magical story of Prince Rama — a tale of bravery, love, and wisdom that has been told for thousands of years. Turn the page to begin your adventure!",
    image: "cover.png",
    isCover: true,
    ornamentIcon: "🕉️"
  },
  {
    title: "The Question of the Perfect Hero",
    text: "Long ago, the gentle sage Valmiki wondered, \"Who is the bravest, kindest, most truthful person in all the world?\" The heavenly singer Narada smiled and said, \"There is one such soul — a prince named Rama.\" And so a beautiful story began.",
    image: "page_01.png",
    ornamentIcon: "🙏"
  },
  {
    title: "The Sorrowful Bird and the First Poem",
    text: "Beside the river Tamasa, Valmiki saw a hunter harm a little singing bird called a krauncha, and his heart filled with sorrow. His sadness flowed out as the very first poem ever sung! Then Lord Brahma appeared in a shower of light and blessed him: \"Tell Rama's whole story in song, and the world will love it forever.\"",
    image: "page_02.png",
    ornamentIcon: "🐦"
  },
  {
    title: "The Golden City of Ayodhya",
    text: "Far away stood Ayodhya, a city so beautiful it sparkled like a jewel. Its kind and mighty ruler, King Dasaratha, cared for every person as if they were his own family. Banners waved, bells rang, and everyone lived happily.",
    image: "page_05.png",
    ornamentIcon: "🏰"
  },
  {
    title: "The King's Quiet Wish",
    text: "Though King Dasaratha had everything, his heart held one quiet sadness — he had no children to fill his palace with laughter. Each evening he gazed at the empty halls and softly wished for a son. A good king, he knew, must hope and be patient.",
    image: "page_06.png",
    ornamentIcon: "👑"
  },
  {
    title: "The Wise Sage Rishyasringa",
    text: "The king's faithful minister Sumantra had an idea: \"Invite the holy young sage Rishyasringa! Wherever he goes, blessings follow.\" So with great respect, the gentle sage was welcomed to Ayodhya to help the king's wish come true.",
    image: "page_07.png",
    ornamentIcon: "🌧️"
  },
  {
    title: "The Great Fire Sacrifice",
    text: "A grand sacred ceremony began on the banks of the river Sarayu. Priests chanted, sweet smoke curled into the sky, and golden flames danced in the holy fire. Everyone prayed with hopeful hearts for the king to be blessed with sons.",
    image: "page_08.png",
    ornamentIcon: "🔥"
  },
  {
    title: "A Plea in the Heavens",
    text: "High in the heavens, the gods were worried about a cruel ten-headed demon-king named Ravana, who frightened everyone. Together they flew to Lord Vishnu and begged, \"Only you can save the world from him!\"",
    image: "page_09.png",
    ornamentIcon: "🙏"
  },
  {
    title: "Vishnu's Great Promise",
    text: "Lord Vishnu smiled kindly and made a great promise: \"I will be born on Earth as a human prince, and I will set everything right.\" The gods rejoiced, for they knew goodness would soon walk among people.",
    image: "page_08_new.png",
    ornamentIcon: "✨"
  },
  {
    title: "The Gift from the Sacred Fire",
    text: "As the ceremony reached its peak, a glowing divine being rose from the flames, holding a golden bowl of magical sweet pudding. \"Share this with your queens,\" he said. The king's heart leapt with joy, for his wish was about to come true!",
    image: "page_10.png",
    ornamentIcon: "🍯"
  },
  {
    title: "Four Princes Are Born",
    text: "Soon the palace rang with happy cries — four baby princes were born! Queen Kaushalya's son was named Rama, Queen Kaikeyi's son was Bharata, and Queen Sumitra had two sons, Lakshmana and Shatrughna. All of Ayodhya celebrated, and the king's quiet sadness turned into the greatest joy.",
    image: "page_11.png",
    ornamentIcon: "👶"
  },
  {
    title: "Brave Princes and Hidden Helpers",
    text: "The four brothers grew up strong, clever, and kind, learning archery, the scriptures, and how to care for others. Rama, the eldest, loved everyone the most. And far away in the forests, mighty monkey-heroes — among them Vali, Sugriva, and the wise Hanuman — were quietly being born, secret friends Rama would need one day.",
    image: "page_12.png",
    ornamentIcon: "🏹"
  },
  {
    title: "The Sage's Important Request",
    text: "One day the powerful sage Vishwamitra strode into the palace. \"Demons are spoiling our holy prayers in the forest,\" he said. \"Please send young Rama to protect us.\" Everyone was surprised — Rama was still so young!",
    image: "page_13.png",
    ornamentIcon: "🧙"
  },
  {
    title: "A Father's Worry, A Wise Word",
    text: "The king's heart trembled to send his dear son away. But the royal teacher Vasishtha said gently, \"Trust the sage. Rama is destined for greatness.\" So Rama and his loyal brother Lakshmana set out, bows in hand, ready and brave.",
    image: "page_14.png",
    ornamentIcon: "⚔️"
  },
  {
    title: "Secret Chants by the River",
    text: "As they walked beside the shining river Sarayu, Vishwamitra taught the princes two magical chants called Bala and Atibala. These gifts kept them strong, never tired, and never afraid. The boys listened carefully, for learning is its own kind of power.",
    image: "page_16.png",
    ornamentIcon: "🚶"
  },
  {
    title: "The Dark Forest of Taraka",
    text: "Soon they reached a gloomy, tangled forest where no birds sang. A fierce demoness named Taraka had frightened everyone away. \"Be brave,\" said the sage. \"This forest can be peaceful again.\"",
    image: "page_15_new.png",
    ornamentIcon: "🌲"
  },
  {
    title: "Rama Brings Back the Light",
    text: "Taraka rushed out with a terrible roar, but Rama stood calm and steady. With one swift, brave arrow, he freed the forest from her fear. At once, sunlight poured in, birds returned, and the trees seemed to smile again.",
    image: "page_16_new.png",
    ornamentIcon: "🏹"
  },
  {
    title: "Gifts of the Shining Weapons",
    text: "Pleased with Rama's courage, Vishwamitra gave him wondrous celestial weapons that glowed with divine light. They appeared as friendly shining beings, ready to help only when truly needed. Rama promised to use them wisely, never for showing off.",
    image: "page_17_new.png",
    ornamentIcon: "⚡"
  },
  {
    title: "Guarding the Holy Prayers",
    text: "At Vishwamitra's hermitage, the gentle sages began their sacred fire-prayer. Rama and Lakshmana stood guard for many days, watchful and brave. Suddenly the sky darkened — the demons Maricha and Subahu came swooping down to spoil everything!",
    image: "page_18_new.png",
    ornamentIcon: "🛕"
  },
  {
    title: "The Sacrifice Is Saved",
    text: "Quick as lightning, Rama fitted a special arrow to his bow. With one gentle, powerful shot he flung the demon Maricha far across the ocean, and stopped the others. The sacred fire blazed on, and the grateful sages blessed the brave young prince.",
    image: "page_19_new.png",
    ornamentIcon: "💨"
  },
  {
    title: "A Journey and a Wonderful Tale",
    text: "Next, Vishwamitra led the princes toward the city of Mithila for a great celebration. As they walked, he told them a magical story: \"Let me tell you how the holy river Ganga came down to Earth.\" The boys leaned in, eager to listen.",
    image: "page_20_new.png",
    ornamentIcon: "🛤️"
  },
  {
    title: "King Sagara and the Sacred Horse",
    text: "\"Long ago,\" said the sage, \"the mighty King Sagara held a grand ceremony with a beautiful sacred horse. But sneaky trouble was near — the horse suddenly vanished without a trace!\" The king's sixty thousand sons set off to search the whole world.",
    image: "page_21_new.png",
    ornamentIcon: "🐎"
  },
  {
    title: "A Mistake and a Lesson",
    text: "Digging deep into the earth, the sons finally found the horse beside the silent, glowing sage Kapila. Without asking, they shouted at him angrily — and in a flash of heat, they were turned to ashes. It was a sad lesson: never be rude to the wise and the kind.",
    image: "page_22_new.png",
    ornamentIcon: "🪨"
  },
  {
    title: "Bhagiratha's Mighty Effort",
    text: "Years later, the noble prince Bhagiratha wished to free his ancestors' souls. He prayed with all his heart for the holy river Ganga to flow down from the heavens. He stood still for a very long time, showing that patience and devotion can move even the gods.",
    image: "page_23_new.png",
    ornamentIcon: "🙏"
  },
  {
    title: "The River Falls from Heaven",
    text: "At last the mighty Ganga came rushing down from the sky! But she was so powerful she might have flooded the whole Earth — so kind Lord Shiva caught her gently in his tangled hair and let her flow softly. Following Bhagiratha, the holy river freed his ancestors and blessed the land.",
    image: "page_24_new.png",
    ornamentIcon: "🌊"
  },
  {
    title: "The Churning of the Ocean",
    text: "Vishwamitra shared another wonder: long ago, the gods and demons churned the great Milky Ocean together, using Mount Mandara as the churning-stick and the giant serpent Vasuki as the rope. Out came amazing treasures and amrita, the precious nectar of life. It showed that even rivals can create something good by working together.",
    image: "page_25_new.png",
    ornamentIcon: "🐍"
  },
  {
    title: "The Hermitage and the Quiet Stone",
    text: "Their path led to the peaceful, empty hermitage of the sage Gautama, where a strange grey stone lay among the flowers. \"This was once Ahalya, the noble wife of Sage Gautama,\" said Vishwamitra softly. \"Long ago she was turned to stone, waiting for the touch of someone truly good.\"",
    image: "page_26_new.png",
    ornamentIcon: "🪨"
  },
  {
    title: "Ahalya Is Freed",
    text: "As Rama's gentle foot touched the stone, a warm light spread through it. The stone softened, and kind Ahalya stood up alive once more, smiling with happy tears! Rama's goodness and forgiveness had set her free.",
    image: "page_27_new.png",
    ornamentIcon: "🦋"
  },
  {
    title: "Welcome to Mithila",
    text: "At last they reached the festive city of Mithila, ruled by the wise and gentle King Janaka. He welcomed Vishwamitra and the two princes with great warmth and curiosity. \"Who are these shining young heroes?\" he wondered with a smile.",
    image: "page_28_new.png",
    ornamentIcon: "🌸"
  },
  {
    title: "The Earth-Child and the Mighty Bow",
    text: "King Janaka told a wonderful story: \"My daughter Sita was found in a furrow of the earth, a gift from the land itself.\" Then he showed them a giant, ancient bow of Lord Shiva, so heavy that no king alive could even lift it. \"Whoever bends this bow,\" he said, \"shall marry my brave Sita.\"",
    image: "page_29_new.png",
    ornamentIcon: "🏹"
  },
  {
    title: "Rama Lifts the Unliftable Bow",
    text: "Calmly, Rama walked up to the enormous bow. To everyone's amazement, he lifted it as easily as a flower — and as he bent it to string it, the great bow snapped with a sound like thunder! The whole hall gasped, then burst into cheers.",
    image: "page_30_new.png",
    ornamentIcon: "⚡"
  },
  {
    title: "Sita Chooses Rama",
    text: "Gentle Sita stepped forward and placed a beautiful flower garland around Rama's neck, choosing him as her husband. The people of Mithila cheered with delight, and swift messengers raced to Ayodhya to share the wonderful news. Love and goodness had found each other.",
    image: "page_31_new.png",
    ornamentIcon: "💌"
  },
  {
    title: "The King Journeys to Mithila",
    text: "When the happy news reached Ayodhya, King Dasaratha was overjoyed! He set out for Mithila with his other sons, his ministers, and a grand royal parade. The roads filled with elephants, music, and the sound of celebration.",
    image: "page_32_new.png",
    ornamentIcon: "🐘"
  },
  {
    title: "Four Brothers, Four Brides",
    text: "King Janaka happily shared that his family had four wonderful princesses. So it was joyfully arranged: all four brothers would be married together! Rama would wed Sita, Lakshmana would wed Urmila, Bharata would wed Mandavi, and Shatrughna would wed Shrutakirti.",
    image: "page_33_new.png",
    ornamentIcon: "👸"
  },
  {
    title: "The Grand Wedding",
    text: "Mithila sparkled like a dream for the grandest wedding ever seen! Lamps glowed, drums played, and flower petals floated in the air. Four happy couples gathered, and everyone's heart was full of love and blessings.",
    image: "page_34_new.png",
    ornamentIcon: "💒"
  },
  {
    title: "Sacred Vows by the Fire",
    text: "Holding hands, each couple walked around the sacred fire and made gentle promises to love and care for one another always. Sages chanted blessings, and the gods showered flowers from above. It was a moment of pure happiness and trust.",
    image: "page_35_new.png",
    ornamentIcon: "🔥"
  },
  {
    title: "A Storm on the Road Home",
    text: "As the joyful families travelled back to Ayodhya, the sky suddenly grew dark and the wind howled. Out stepped Parasurama, a fierce warrior-sage with a great axe, his eyes blazing. Everyone froze — but Rama stayed perfectly calm.",
    image: "page_36_new.png",
    ornamentIcon: "🌩️"
  },
  {
    title: "The Warrior's Challenge",
    text: "\"So you broke Lord Shiva's bow?\" thundered Parasurama. \"Let us see if you can string this mighty bow of mine!\" He believed no one could match his strength. But Rama only smiled gently and accepted the challenge.",
    image: "page_37_new.png",
    ornamentIcon: "🏹"
  },
  {
    title: "Calm Strength Wins",
    text: "With astonishing ease, Rama lifted the great bow and bent it, ready in a heartbeat. In that moment, Parasurama understood that Rama was truly divine, and all his pride melted away. True strength, he learned, is calm and humble — never boastful.",
    image: "page_38_new.png",
    ornamentIcon: "✨"
  },
  {
    title: "Peace at Last",
    text: "Parasurama bowed respectfully to Rama and, with a peaceful heart, walked away to the quiet mountains to pray. The storm vanished and the sky turned bright and blue again. Goodness had won, gently and kindly, without any harm.",
    image: "page_39_new.png",
    ornamentIcon: "☮️"
  },
  {
    title: "The Joyful Homecoming",
    text: "At last the family reached Ayodhya, and the whole city burst into celebration! Streets were sprinkled with water and scattered with flowers, lamps glowed in every window, and people cheered with all their might. Their beloved princes had come home with their brides.",
    image: "page_40_new.png",
    ornamentIcon: "🪔"
  },
  {
    title: "A Warm Welcome for the Brides",
    text: "The three loving queen-mothers welcomed Sita and the other princesses into the palace with open arms and happy tears. They performed gentle ceremonies, offered sweets, and blessed each new daughter. The royal family was now bigger, warmer, and more joyful than ever.",
    image: "page_41_new.png",
    ornamentIcon: "🌸"
  },
  {
    title: "A Happy Beginning",
    text: "And so Rama and Sita began their happy life together, loved by everyone for their kindness, courage, and truth. This was only the very beginning of their great adventure. For wherever there is bravery, devotion, and a good heart, a wonderful story is always waiting to unfold.",
    image: "page_42_new.png",
    ornamentIcon: "🌅"
  }
];

// ---- DOM Refs ----
const $ = id => document.getElementById(id);
const book           = $('book');
const pageLeft       = $('page-left');
const pageImageWrap  = $('page-image-wrap');
const pageImage      = $('page-image');
const pageRight      = $('page-right');
const chapterTitle   = $('chapter-title');
const storyText      = $('story-text');
const moralBox       = $('moral-box');
const prevBtn        = $('prev-btn');
const nextBtn        = $('next-btn');
const pageCounter    = $('page-counter');
const progressBar    = $('progress-bar');
const tocList        = $('toc-list');
const sidebar        = $('sidebar');
const tocToggleBtn   = $('toc-toggle-btn');
const readBtn        = $('read-btn');
const autoplayBtn    = $('autoplay-btn');
const speakingInd    = $('speaking-indicator');
const loadingOverlay = $('loading-overlay');

// ---- State ----
let currentPage  = 0;
let isAutoPlay   = false;
let autoPlayTimer = null;
let isSpeaking   = false;

// ---- Build TOC ----
function buildTOC() {
  PAGES.forEach((p, i) => {
    const li = document.createElement('li');
    li.className = 'toc-item';
    li.innerHTML = `<span class="toc-num">${i === 0 ? '✦' : i}</span> ${p.title}`;
    li.addEventListener('click', () => goToPage(i));
    tocList.appendChild(li);
  });
}

// ---- Render Page ----
function renderPage(direction) {
  const p = PAGES[currentPage];
  const isCover = p.isCover;

  // Transition animation
  book.classList.remove('page-turning', 'page-turning-back');
  void book.offsetWidth; // force reflow
  book.classList.add(direction === 'back' ? 'page-turning-back' : 'page-turning');

  // Cover mode
  book.classList.toggle('cover-mode', !!isCover);

  // Text
  if (isCover) {
    chapterTitle.textContent = p.title;
    storyText.innerHTML = `<em style="font-family:'Cinzel',serif;font-size:1rem;color:var(--gold-dim);display:block;margin-bottom:.8rem;">${p.subtitle || ''}</em>${p.text}`;
  } else {
    chapterTitle.textContent = p.title;
    storyText.textContent = p.text;
  }

  // Moral
  moralBox.textContent = p.moral || '';

  // Page number
  pageRight.setAttribute('data-page', currentPage === 0 ? '' : currentPage);

  // Image
  if (p.image) {
    pageImage.style.display = 'block';
    pageImage.classList.add('fade-out');
    // Remove any ornament frame
    const existingFrame = pageImageWrap.querySelector('.ornament-frame');
    if (existingFrame) existingFrame.remove();

    const img = new Image();
    img.onload = () => {
      pageImage.src = p.image;
      requestAnimationFrame(() => pageImage.classList.remove('fade-out'));
    };
    img.onerror = () => {
      // If image fails to load, show ornament frame
      showOrnamentFrame(p);
    };
    img.src = p.image;
  } else {
    showOrnamentFrame(p);
  }

  // Navigation
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === PAGES.length - 1;

  // Counter
  pageCounter.textContent = `${currentPage + 1} / ${PAGES.length}`;

  // Progress
  progressBar.style.width = `${((currentPage + 1) / PAGES.length) * 100}%`;

  // TOC active
  document.querySelectorAll('.toc-item').forEach((el, i) => {
    el.classList.toggle('active', i === currentPage);
  });

  // Scroll TOC into view
  const activeItem = tocList.querySelector('.toc-item.active');
  if (activeItem) activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function showOrnamentFrame(p) {
  pageImage.style.display = 'none';
  // Remove existing frames
  const existingFrame = pageImageWrap.querySelector('.ornament-frame');
  if (existingFrame) existingFrame.remove();

  const frame = document.createElement('div');
  frame.className = 'ornament-frame';
  frame.innerHTML = `
    <div class="ornament-icon">${p.ornamentIcon || '❧'}</div>
    <div class="ornament-text">${p.title}</div>
  `;
  pageImageWrap.appendChild(frame);
}

// ---- Navigation ----
function goToPage(idx, direction) {
  if (idx < 0 || idx >= PAGES.length) return;
  stopSpeaking();
  const dir = direction || (idx > currentPage ? 'forward' : 'back');
  currentPage = idx;
  renderPage(dir);
}

function nextPage() { goToPage(currentPage + 1, 'forward'); }
function prevPage() { goToPage(currentPage - 1, 'back'); }

// ---- Text-to-Speech ----
function speak() {
  if (!('speechSynthesis' in window)) {
    alert('Text-to-Speech is not supported in this browser.');
    return;
  }

  if (isSpeaking) {
    stopSpeaking();
    return;
  }

  const p = PAGES[currentPage];
  const utterance = new SpeechSynthesisUtterance(p.text);
  utterance.lang = 'en-IN';
  utterance.rate = 0.85;
  utterance.pitch = 1.05;

  // Try to use a nice voice
  const voices = speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    v.lang.includes('en') && (v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Google'))
  ) || voices.find(v => v.lang.includes('en'));
  if (preferred) utterance.voice = preferred;

  utterance.onstart = () => {
    isSpeaking = true;
    readBtn.classList.add('active');
    speakingInd.classList.add('active');
  };
  utterance.onend = () => {
    isSpeaking = false;
    readBtn.classList.remove('active');
    speakingInd.classList.remove('active');

    // If autoplay, go to next page after reading
    if (isAutoPlay && currentPage < PAGES.length - 1) {
      autoPlayTimer = setTimeout(() => {
        nextPage();
        if (isAutoPlay) speak();
      }, 1500);
    }
  };
  utterance.onerror = () => {
    isSpeaking = false;
    readBtn.classList.remove('active');
    speakingInd.classList.remove('active');
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

// ---- Stop Speaking ----
function stopSpeaking() {
  speechSynthesis.cancel();
  isSpeaking = false;
  readBtn.classList.remove('active');
  speakingInd.classList.remove('active');
  if (autoPlayTimer) clearTimeout(autoPlayTimer);
}

// ---- Auto-Play ----
function toggleAutoPlay() {
  isAutoPlay = !isAutoPlay;
  autoplayBtn.classList.toggle('active', isAutoPlay);
  autoplayBtn.querySelector('.icon').textContent = isAutoPlay ? '⏸' : '▶';

  if (isAutoPlay) {
    speak();
  } else {
    stopSpeaking();
  }
}

// ---- Sidebar Toggle ----
function toggleSidebar() {
  sidebar.classList.toggle('collapsed');
}

// ---- Keyboard Navigation ----
document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      e.preventDefault();
      nextPage();
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      e.preventDefault();
      prevPage();
      break;
    case ' ':
      e.preventDefault();
      speak();
      break;
    case 'Escape':
      stopSpeaking();
      if (isAutoPlay) toggleAutoPlay();
      break;
  }
});

// ---- Touch/Swipe Support ----
let touchStartX = 0;
let touchStartY = 0;
document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  const dy = e.changedTouches[0].screenY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
    if (dx < 0) nextPage();
    else prevPage();
  }
}, { passive: true });

// ---- Event Listeners ----
prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);
readBtn.addEventListener('click', speak);
autoplayBtn.addEventListener('click', toggleAutoPlay);
tocToggleBtn.addEventListener('click', toggleSidebar);

// Pre-load voices
if ('speechSynthesis' in window) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}

// ---- Init ----
buildTOC();
renderPage('forward');

// Remove loading
setTimeout(() => {
  loadingOverlay.classList.add('hidden');
}, 800);
