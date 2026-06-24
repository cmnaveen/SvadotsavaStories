/* ==========================================================================
   RAMAYANA EPISODES DATABASE
   ========================================================================== */
const episodesData = [
  {
    id: 1,
    title: "Birth of Rāma",
    image: "images/yajna.png",
    caption: "King Daśaratha performs the Putrakāmeṣṭi Yajña with golden flames.",
    moral: "Faith and devotion bring divine blessings.",
    paragraphs: [
      "Long ago, in the glorious golden city of Ayodhyā, ruled a kind and wise king named Daśaratha. Although his kingdom was wealthy and his people were happy, the king's heart was heavy with sorrow. He had no children to carry on his legacy and protect the kingdom in the years to come.",
      "Seeking a blessing from the heavens, the king performed the sacred Putrakāmeṣṭi Yajña, a powerful fire ritual. The air filled with holy chants, and the sacred flames danced towards the sky. Pleased with his devotion, the Lord of Fire emerged holding a golden bowl of divine pudding. Daśaratha shared this blessing with his three queens. Soon, the palace echoed with joy as four noble sons were born: Rāma, Lakṣmaṇa, Bharata, and Śatrughna. The eldest, Rāma, shone with a celestial light, bringing hope to all of Ayodhyā."
    ],
    quiz: {
      question: "What did the Lord of Fire give King Daśaratha from the sacred flames?",
      options: [
        "A golden bow of great strength",
        "A golden bowl of divine pudding",
        "A magical flying chariot",
        "A crown made of starlight"
      ],
      correctIndex: 1,
      badge: {
        id: "badge-faith",
        name: "Blessing of Faith",
        emoji: "🔥",
        desc: "Unlocked for learning that faith and devotion bring divine blessings."
      }
    }
  },
  {
    id: 2,
    title: "Childhood in Ayodhyā",
    image: "images/cover.png",
    caption: "The four young princes practicing archery and studying scriptures in the palace.",
    moral: "Knowledge and discipline shape noble character.",
    paragraphs: [
      "As the four princes grew, the palace of Ayodhyā was filled with the sounds of laughter and learning. Under the guidance of their teachers, they studied holy scriptures, the art of archery, and the principles of Dharma. They learned that a true king is not one who rules with force, but one who serves his people with kindness.",
      "The boys grew up to be strong, disciplined, and wise. Prince Rāma was loved by everyone in the city for his humility and gentle words. He shared a special, unbreakable bond with his brother Lakṣmaṇa, while Bharata and Śatrughna were always by each other's side. The citizens of Ayodhyā watched them with pride, knowing their future was in safe and noble hands."
    ],
    quiz: {
      question: "What values did the princes learn during their childhood?",
      options: [
        "How to gather great riches",
        "Scriptures, archery, and dharma",
        "To build the tallest palaces",
        "To navigate giant oceans"
      ],
      correctIndex: 1,
      badge: {
        id: "badge-knowledge",
        name: "Noble Discipline",
        emoji: "📚",
        desc: "Unlocked for learning how knowledge and discipline shape character."
      }
    }
  },
  {
    id: 3,
    title: "The Sage’s Request",
    image: "images/cover.png",
    caption: "The holy Sage Viśvāmitra arriving at King Daśaratha's court.",
    moral: "Serving sages and protecting dharma is a sacred duty.",
    paragraphs: [
      "One afternoon, the great and powerful Sage Viśvāmitra arrived at the royal court of Ayodhyā. He was troubled. Fearsome demons in the dark forests were disrupting the holy rituals and sacrifices (yajñas) that the sages performed to maintain peace in the world.",
      "Viśvāmitra asked King Daśaratha for young Rāma and Lakṣmaṇa's help to guard his rituals. Though the king was worried about his young sons, he knew that protecting the sages was a sacred duty. Rāma and Lakṣmaṇa bravely stepped forward, bowing to the sage and promising to defend the forest with their lives."
    ],
    quiz: {
      question: "Why did Sage Viśvāmitra ask for Rāma and Lakṣmaṇa's help?",
      options: [
        "To build a temple in the mountains",
        "To protect his holy rituals from demons",
        "To teach them how to cook wild fruits",
        "To guide him back to his cottage"
      ],
      correctIndex: 1,
      badge: {
        id: "badge-duty",
        name: "Sacred Protector",
        emoji: "🏹",
        desc: "Unlocked for understanding the duty of protecting dharma."
      }
    }
  },
  {
    id: 4,
    title: "Battle with Tāṭakā",
    image: "images/cover.png",
    caption: "Prince Rāma facing the giant demoness Tāṭakā in the dark forest.",
    moral: "Courage guided by righteousness conquers evil.",
    paragraphs: [
      "Sage Viśvāmitra led the young princes deep into the dark, eerie forest of Tāṭakā. The forest was once beautiful, but it was now cursed and ruined by the terrifying demoness Tāṭakā, who roared like thunder and shook the very trees. She attacked travelers and spread fear throughout the land.",
      "As Tāṭakā charged towards them like a swirling dust storm, Rāma took his bow. Guided by the sage's wisdom and his own courage, Rāma released a single, glowing arrow. The arrow hit its mark, and the demoness fell, restoring peace and sunlight to the cursed forest. The wild beasts and trees rejoiced once more."
    ],
    quiz: {
      question: "Who was Tāṭakā?",
      options: [
        "A friendly bird that guided travelers",
        "A wise queen of the forest",
        "A terrifying demoness who cursed the forest",
        "A playful river spirit"
      ],
      correctIndex: 2,
      badge: {
        id: "badge-courage",
        name: "Forest Courage",
        emoji: "🦁",
        desc: "Unlocked for learning that courage guided by righteousness conquers evil."
      }
    }
  },
  {
    id: 5,
    title: "Protecting the Yajña",
    image: "images/cover.png",
    caption: "Rāma and Lakṣmaṇa standing guard by the sacred fire of Sage Viśvāmitra.",
    moral: "Focus and bravery protect sacred duties.",
    paragraphs: [
      "After their victory, they arrived at Viśvāmitra's peaceful hermitage. The sages began their six-day yajña, and Rāma and Lakṣmaṇa stayed awake day and night, standing guard with their bows drawn. They remained extremely focused, watching the tree canopy for any signs of trouble.",
      "On the final day, the demons Mārīca and Subāhu swooped down with black clouds to destroy the sacred fire. Rāma acted swiftly. With unmatched bravery, he used special celestial weapons to send Mārīca flying far away and defeated Subāhu. The ritual was completed safely, filling the forest with holy energy."
    ],
    quiz: {
      question: "For how many days did the princes stand guard over the yajña?",
      options: [
        "One day and one night",
        "Three days",
        "Six days and nights",
        "Ten days"
      ],
      correctIndex: 2,
      badge: {
        id: "badge-focus",
        name: "Unwavering Focus",
        emoji: "🎯",
        desc: "Unlocked for realizing that focus and bravery protect our duties."
      }
    }
  },
  {
    id: 6,
    title: "Journey to Mithilā",
    image: "images/cover.png",
    caption: "Sage Viśvāmitra and the princes crossing a beautiful river on their way to Mithilā.",
    moral: "Every journey brings new lessons and challenges.",
    paragraphs: [
      "With the forest safe, Sage Viśvāmitra invited the princes on a journey to the majestic kingdom of Mithilā, ruled by the noble King Janaka. As they walked through green fields, crossed shining rivers, and climbed rocky hills, the sage shared ancient stories of stars, gods, and historical heroes.",
      "Rāma and Lakṣmaṇa listened with wonder, asking questions and learning at every step. They realized that the world is a giant book of lessons, and every journey we take, whether easy or difficult, shapes our minds and teaches us how to live in harmony with nature."
    ],
    quiz: {
      question: "Who was the ruler of the kingdom of Mithilā?",
      options: [
        "King Daśaratha",
        "King Janaka",
        "Sage Viśvāmitra",
        "Demon Mārīca"
      ],
      correctIndex: 1,
      badge: {
        id: "badge-journey",
        name: "Mithilā Scholar",
        emoji: "🚶",
        desc: "Unlocked for learning that every journey brings new lessons."
      }
    }
  },
  {
    id: 7,
    title: "The Bow Challenge",
    image: "images/bow.png",
    caption: "Young Prince Rāma lifting and breaking the heavy iron Bow of Lord Śiva.",
    moral: "True strength lies in purity and devotion.",
    paragraphs: [
      "In Mithilā, King Janaka held a grand challenge. He possessed the massive, heavy iron Bow of Lord Śiva, which lay inside a heavy chest. Many powerful kings and warriors had tried to lift it, but none could even budge it. King Janaka had declared that whoever could string this bow would marry his daughter, the virtuous Princess Sītā.",
      "With Sage Viśvāmitra's blessing, Rāma stepped forward. The court was silent. With a calm smile and a pure heart, Rāma reached down. To everyone's absolute amazement, he lifted the giant bow with one hand! As he bent it to tie the string, the bow broke in half with a sound like a clap of thunder, filling the hall with golden light."
    ],
    quiz: {
      question: "What happened when Rāma bent Lord Śiva's bow?",
      options: [
        "It turned into a golden bird and flew away",
        "It broke in half with a thunderous sound",
        "It turned into a beautiful sword",
        "It vanished into thin air"
      ],
      correctIndex: 1,
      badge: {
        id: "badge-strength",
        name: "True Strength",
        emoji: "⚡",
        desc: "Unlocked for seeing that true strength lies in purity and devotion."
      }
    }
  },
  {
    id: 8,
    title: "Wedding of Rāma and Sītā",
    image: "images/cover.png",
    caption: "Princess Sītā placing a flower garland around Prince Rāma's neck.",
    moral: "Love blossoms when rooted in virtue.",
    paragraphs: [
      "King Janaka was overjoyed. The palace of Mithilā was decorated with bright oil lamps, colorful flowers, and beautiful tapestries. King Daśaratha and the royal family of Ayodhyā traveled to Mithilā to celebrate the wedding. Princess Sītā, wearing a golden sari, placed a fresh flower garland around Rāma's neck.",
      "It was a wedding of legendary beauty. Everyone sang songs of joy, and the gods showered flower petals from the sky. Rāma and Sītā promised to always support each other, representing a perfect union of truth (Rāma) and earth-born grace (Sītā), bringing peace to both kingdoms."
    ],
    quiz: {
      question: "What did Princess Sītā place around Rāma's neck?",
      options: [
        "A necklace made of blue diamonds",
        "A fresh flower garland",
        "A royal gold chain",
        "A sacred silver thread"
      ],
      correctIndex: 1,
      badge: {
        id: "badge-love",
        name: "Virtuous Union",
        emoji: "🌸",
        desc: "Unlocked for realizing that love blossoms when rooted in virtue."
      }
    }
  },
  {
    id: 9,
    title: "Brothers United",
    image: "images/cover.png",
    caption: "The four brothers standing side-by-side in Ayodhyā, promising loyalty.",
    moral: "Family harmony is the greatest strength.",
    paragraphs: [
      "To double the joy, the three other brothers also married noble princesses of Mithilā. The entire royal family returned to Ayodhyā, where the streets were lined with flags, music, and happy crowds welcoming their beloved princes home.",
      "The four brothers stood together in the palace, promising to always support, respect, and defend one another. They showed that when a family stands united in love and trust, no force in the world can break them. The palace of Ayodhyā shone brighter than ever before."
    ],
    quiz: {
      question: "What did the return of the four brothers show the citizens of Ayodhyā?",
      options: [
        "That they had acquired many horses",
        "That family unity is the greatest strength",
        "That they loved traveling to distant lands",
        "That Mithilā was larger than Ayodhyā"
      ],
      correctIndex: 1,
      badge: {
        id: "badge-family",
        name: "Family Unity",
        emoji: "🤝",
        desc: "Unlocked for learning that family harmony is our greatest strength."
      }
    }
  },
  {
    id: 10,
    title: "Lessons of Bālakāṇḍa",
    image: "images/cover.png",
    caption: "A teacher sitting under a banyan tree, explaining the virtues of Rāma to children.",
    moral: "Be brave, kind, and devoted — just like Rāma.",
    paragraphs: [
      "The stories of the Bālakāṇḍa (Rāma's childhood) remind us that we can all find the virtues of Rāma inside ourselves. From his respect for elders and teachers to his courage in protecting the forest, Rāma showed us what it means to live a life of truth and righteousness (Dharma).",
      "As you complete this book, remember to be brave when you face fear, kind when you meet others, and devoted to your learning and duties. By holding these values close to your heart, you too can bring the light of Ayodhyā into the world around you. Live beautifully, study well, and grow in dharma!"
    ],
    quiz: {
      question: "What does the Bālakāṇḍa teach us to be?",
      options: [
        "Proud and loud in every situation",
        "Brave, kind, and devoted to our duty",
        "Afraid of challenging tasks",
        "Always seeking rewards"
      ],
      correctIndex: 1,
      badge: {
        id: "badge-dharma",
        name: "Dharma Champion",
        emoji: "👑",
        desc: "Unlocked for completing the entire Bālakāṇḍa book and embracing its values!"
      }
    }
  }
];

/* ==========================================================================
   APP STATE MANAGEMENT
   ========================================================================== */
let appState = {
  currentEpisodeIdx: 0,
  completedQuizzes: Array(10).fill(false),
  unlockedBadges: Array(10).fill(false)
};

// Load progress from Local Storage
function loadProgress() {
  const saved = localStorage.getItem('ramayana_stories_progress');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.completedQuizzes)) {
        appState = { ...appState, ...parsed };
      }
    } catch (e) {
      console.error("Failed to parse progress data:", e);
    }
  }
}

// Save progress to Local Storage
function saveProgress() {
  localStorage.setItem('ramayana_stories_progress', JSON.stringify(appState));
}

// Reset progress
function resetProgress() {
  appState = {
    currentEpisodeIdx: 0,
    completedQuizzes: Array(10).fill(false),
    unlockedBadges: Array(10).fill(false)
  };
  saveProgress();
  updateProgressUI();
  renderBadgeGrid();
  goToEpisode(0);
  showView('coverView');
  playChime(150, 0.1, 0.4); // soft pitch chime to confirm reset
}

/* ==========================================================================
   AUDIO SYNTHESIZER (WEB AUDIO API)
   ========================================================================== */
let audioCtx = null;
let tanpuraNode = null;
let isAmbientPlaying = false;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Start Tanpura Drone
function startTanpuraDrone() {
  initAudio();
  
  // Create Tanpura-like oscillator bundle for a deep traditional Indian drone
  const rootFreq = 130.81; // C3
  const frequencies = [rootFreq * 0.75, rootFreq, rootFreq * 1.5, rootFreq * 2]; // G2, C3, G3, C4
  const oscillators = [];
  
  const droneGroup = audioCtx.createGain();
  droneGroup.gain.setValueAtTime(0, audioCtx.currentTime);
  droneGroup.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 2.0); // Slow fade-in

  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(350, audioCtx.currentTime);
  filter.Q.setValueAtTime(1.5, audioCtx.currentTime);

  frequencies.forEach((freq, index) => {
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();
    
    // Mix of Sawtooth and Triangle for rich harmonic structure
    osc.type = index % 2 === 0 ? 'triangle' : 'sawtooth';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    // Add subtle detuning for natural chorus feel
    osc.detune.setValueAtTime((index - 1.5) * 4, audioCtx.currentTime);
    
    // Slow volume breathing cycle (LFO effect)
    oscGain.gain.setValueAtTime(0.02, audioCtx.currentTime);
    
    osc.connect(oscGain);
    oscGain.connect(filter);
    oscillators.push({ osc, gainNode: oscGain });
  });

  filter.connect(droneGroup);
  droneGroup.connect(audioCtx.destination);

  // Start oscillators
  oscillators.forEach(item => item.osc.start());

  // LFO breathing animation loop
  let breathingInterval = setInterval(() => {
    if (!isAmbientPlaying) {
      clearInterval(breathingInterval);
      return;
    }
    const t = audioCtx.currentTime;
    oscillators.forEach((item, idx) => {
      // create offset phase breathing
      const depth = 0.01 + Math.sin(t * 0.8 + idx) * 0.008;
      item.gainNode.gain.linearRampToValueAtTime(depth, t + 1.2);
    });
  }, 1000);

  tanpuraNode = {
    oscillators,
    droneGroup,
    stop: function() {
      const t = audioCtx.currentTime;
      droneGroup.gain.linearRampToValueAtTime(0, t + 1.0);
      setTimeout(() => {
        oscillators.forEach(item => {
          try { item.osc.stop(); } catch(e) {}
        });
      }, 1200);
    }
  };
}

// Toggle Ambient Sound Trigger
function toggleAmbientSound() {
  const btn = document.getElementById('ambientSoundBtn');
  if (isAmbientPlaying) {
    isAmbientPlaying = false;
    btn.classList.remove('active');
    btn.querySelector('.btn-text').textContent = 'Ambient Drone';
    if (tanpuraNode) tanpuraNode.stop();
  } else {
    isAmbientPlaying = true;
    btn.classList.add('active');
    btn.querySelector('.btn-text').textContent = 'Drone Playing';
    startTanpuraDrone();
  }
}

// Play Page Turn Chime
function playChime(freq = 523.25, duration = 0.3, volume = 0.25) {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);
    
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn("Audio block/not supported:", e);
  }
}

// Play Successful Chime
function playSuccessChord() {
  try {
    initAudio();
    const now = audioCtx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08); // Arpeggiated entry
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8 + idx * 0.08);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + 1.2 + idx * 0.08);
    });
  } catch (e) {
    console.warn(e);
  }
}

/* ==========================================================================
   TEXT-TO-SPEECH NARRATION ENGINE
   ========================================================================== */
let synth = window.speechSynthesis;
let utteranceSequence = [];
let activeUtteranceIdx = -1;
let isTTSPlaying = false;
let isTTSPaused = false;

// Populate voice list or find the best English voice
let selectedVoice = null;
function loadVoices() {
  if (!synth) return;
  const voices = synth.getVoices();
  // Prefer natural sounding English voices
  selectedVoice = voices.find(v => v.lang.includes('en-IN')) || 
                  voices.find(v => v.lang.includes('en-GB')) || 
                  voices.find(v => v.lang.includes('en-US')) || 
                  voices[0];
}
if (synth && synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = loadVoices;
}
loadVoices();

// Pre-render story paragraphs into clickable text spans for highlighting
function renderStoryTextHTML(epIdx) {
  const textContainer = document.getElementById('storyText');
  textContainer.innerHTML = '';
  
  const paragraphs = episodesData[epIdx].paragraphs;
  let phraseCounter = 0;
  
  paragraphs.forEach(para => {
    const pEl = document.createElement('p');
    // Split paragraph by sentences to create easy-to-read phrases
    const sentences = para.match(/[^.!?]+[.!?]+(\s|$)/g) || [para];
    
    sentences.forEach(sentence => {
      if (sentence.trim().length === 0) return;
      const span = document.createElement('span');
      span.className = 'story-phrase';
      span.id = `phrase-${phraseCounter}`;
      span.textContent = sentence;
      span.dataset.index = phraseCounter;
      
      // Make phrases clickable to skip to that part of the story!
      span.addEventListener('click', () => {
        if (isTTSPlaying || isTTSPaused) {
          stopTTS();
          startTTSFromPhrase(phraseCounter);
        }
      });
      
      pEl.appendChild(span);
      phraseCounter++;
    });
    
    textContainer.appendChild(pEl);
  });
}

// Generate the phrases to speak
function getPhrasesArray() {
  const spans = document.querySelectorAll('.story-phrase');
  const phrases = [];
  spans.forEach(span => {
    phrases.push({
      text: span.textContent,
      id: span.id
    });
  });
  return phrases;
}

// Speak the sequence starting from an index
function speakPhraseSequence(phraseIdx) {
  if (!synth) return;
  synth.cancel(); // safety cancel
  
  const phrases = getPhrasesArray();
  if (phraseIdx >= phrases.length) {
    // Finished reading!
    stopTTS();
    return;
  }
  
  activeUtteranceIdx = phraseIdx;
  const currentPhrase = phrases[phraseIdx];
  
  // Visual highlight
  document.querySelectorAll('.story-phrase').forEach(el => el.classList.remove('highlight'));
  const activeSpan = document.getElementById(currentPhrase.id);
  if (activeSpan) {
    activeSpan.classList.add('highlight');
    // Scroll text panel slightly if needed
    activeSpan.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  const utterance = new SpeechSynthesisUtterance(currentPhrase.text);
  if (selectedVoice) utterance.voice = selectedVoice;
  
  // Set speed
  const speed = parseFloat(document.getElementById('ttsSpeed').value);
  utterance.rate = speed;
  
  utterance.onend = function() {
    if (isTTSPlaying && !isTTSPaused) {
      speakPhraseSequence(phraseIdx + 1);
    }
  };

  utterance.onerror = function(event) {
    console.error("Speech Synthesis Error:", event);
    if (event.error !== 'interrupted') {
      stopTTS();
    }
  };

  isTTSPlaying = true;
  synth.speak(utterance);
}

function startTTSFromPhrase(phraseIdx) {
  isTTSPlaying = true;
  isTTSPaused = false;
  document.getElementById('ttsStopBtn').disabled = false;
  
  const playBtn = document.getElementById('ttsPlayPauseBtn');
  playBtn.querySelector('.play-icon').classList.add('hidden');
  playBtn.querySelector('.pause-icon').classList.remove('hidden');
  playBtn.querySelector('span').textContent = 'Pause Reading';
  
  speakPhraseSequence(phraseIdx);
}

function playPauseTTS() {
  if (!synth) return;
  
  if (isTTSPlaying) {
    if (isTTSPaused) {
      // Resume
      isTTSPaused = false;
      const playBtn = document.getElementById('ttsPlayPauseBtn');
      playBtn.querySelector('.play-icon').classList.add('hidden');
      playBtn.querySelector('.pause-icon').classList.remove('hidden');
      playBtn.querySelector('span').textContent = 'Pause Reading';
      
      // SpeechSynthesis resume can be buggy on some browsers, so we just restart the phrase
      speakPhraseSequence(activeUtteranceIdx);
    } else {
      // Pause
      isTTSPaused = true;
      synth.cancel();
      const playBtn = document.getElementById('ttsPlayPauseBtn');
      playBtn.querySelector('.play-icon').classList.remove('hidden');
      playBtn.querySelector('.pause-icon').classList.add('hidden');
      playBtn.querySelector('span').textContent = 'Resume Reading';
    }
  } else {
    // Start fresh
    startTTSFromPhrase(0);
  }
}

function stopTTS() {
  if (!synth) return;
  synth.cancel();
  isTTSPlaying = false;
  isTTSPaused = false;
  activeUtteranceIdx = -1;
  
  const playBtn = document.getElementById('ttsPlayPauseBtn');
  playBtn.querySelector('.play-icon').classList.remove('hidden');
  playBtn.querySelector('.pause-icon').classList.add('hidden');
  playBtn.querySelector('span').textContent = 'Listen Aloud';
  
  document.getElementById('ttsStopBtn').disabled = true;
  
  document.querySelectorAll('.story-phrase').forEach(el => el.classList.remove('highlight'));
}

/* ==========================================================================
   CONFETTI GENERATOR UTILITY (CANVAS)
   ========================================================================== */
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let confettiParticles = [];
let isConfettiRunning = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createConfettiParticle() {
  const colors = ['#ffd700', '#ff8838', '#ff3e3e', '#3cd070', '#34d399', '#4facfe'];
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: Math.random() * 8 + 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedX: Math.random() * 4 - 2,
    speedY: Math.random() * 5 + 4,
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 10 - 5
  };
}

function runConfetti() {
  if (!isConfettiRunning) {
    isConfettiRunning = true;
    confettiParticles = Array.from({ length: 80 }, createConfettiParticle);
    animateConfetti();
    setTimeout(() => {
      isConfettiRunning = false;
    }, 3500); // Stop emitting after 3.5s
  } else {
    // Top up particles
    for (let i = 0; i < 40; i++) {
      confettiParticles.push(createConfettiParticle());
    }
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  confettiParticles.forEach((p, idx) => {
    p.y += p.speedY;
    p.x += p.speedX;
    p.rotation += p.rotationSpeed;
    
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();
    
    // recycle particles if confetti is still running and particle fell off bottom
    if (p.y > canvas.height) {
      if (isConfettiRunning) {
        confettiParticles[idx] = createConfettiParticle();
      } else {
        confettiParticles.splice(idx, 1);
      }
    }
  });
  
  if (confettiParticles.length > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

/* ==========================================================================
   QUIZ ENGINE
   ========================================================================== */
function loadQuizForEpisode(epIdx) {
  const episode = episodesData[epIdx];
  const container = document.getElementById('quizContainer');
  const questionEl = document.getElementById('quizQuestion');
  const optionsEl = document.getElementById('quizOptions');
  const feedbackEl = document.getElementById('quizFeedback');
  
  // Reset feedback classes and visibility
  feedbackEl.classList.add('hidden');
  optionsEl.innerHTML = '';
  
  // Set question
  questionEl.textContent = episode.quiz.question;
  
  // Populate options
  const isAlreadySolved = appState.completedQuizzes[epIdx];
  
  episode.quiz.options.forEach((opt, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.innerHTML = `<span class="opt-bullet">${String.fromCharCode(65 + optIdx)}.</span> <span class="opt-text">${opt}</span>`;
    
    if (isAlreadySolved) {
      btn.disabled = true;
      if (optIdx === episode.quiz.correctIndex) {
        btn.classList.add('correct');
      }
    } else {
      btn.addEventListener('click', () => handleQuizSubmission(epIdx, optIdx, btn));
    }
    optionsEl.appendChild(btn);
  });
  
  if (isAlreadySolved) {
    showQuizFeedback(episode.quiz.badge.name, true);
  }
}

function handleQuizSubmission(epIdx, selectedIdx, clickedBtn) {
  const episode = episodesData[epIdx];
  const correctIdx = episode.quiz.correctIndex;
  
  if (selectedIdx === correctIdx) {
    clickedBtn.classList.add('correct');
    // Disable all options
    document.querySelectorAll('.quiz-option-btn').forEach(btn => btn.disabled = true);
    
    // Update State
    appState.completedQuizzes[epIdx] = true;
    appState.unlockedBadges[epIdx] = true;
    saveProgress();
    
    // Effects
    playSuccessChord();
    runConfetti();
    
    // Display Success Feedback
    showQuizFeedback(episode.quiz.badge.name, false);
    
    // Update Badge Room and Cover bar progress
    updateProgressUI();
    renderBadgeGrid();
  } else {
    clickedBtn.classList.add('incorrect');
    // Simple shake/vibration sound
    playChime(180, 0.2, 0.3);
    setTimeout(() => {
      clickedBtn.classList.remove('incorrect');
    }, 1000);
  }
}

function showQuizFeedback(badgeName, isRecall) {
  const feedbackEl = document.getElementById('quizFeedback');
  feedbackEl.classList.remove('hidden');
  
  if (isRecall) {
    feedbackEl.querySelector('.feedback-text').innerHTML = `You have already earned the <strong>${badgeName}</strong>! Check it in the Badge Room.`;
  } else {
    feedbackEl.querySelector('.feedback-text').innerHTML = `Superb! You answered correctly and unlocked the <strong>${badgeName}</strong>!`;
  }
}

/* ==========================================================================
   PAGE NAVIGATION & TRANSITIONS
   ========================================================================== */
function showView(viewId) {
  document.querySelectorAll('.view-section').forEach(view => {
    view.classList.remove('active');
  });
  document.getElementById(viewId).classList.add('active');
  
  // Stop text reading when changing screens
  stopTTS();
}

function goToEpisode(epIdx) {
  appState.currentEpisodeIdx = epIdx;
  saveProgress();
  
  const episode = episodesData[epIdx];
  
  // Image Panel
  document.getElementById('episodeImage').src = episode.image;
  document.getElementById('episodeCaption').textContent = episode.caption;
  
  // Heading
  document.getElementById('episodeTitle').textContent = `${episode.id}. ${episode.title}`;
  
  // Story Text
  renderStoryTextHTML(epIdx);
  
  // Moral
  document.getElementById('storyMoral').textContent = episode.moral;
  
  // Quiz
  loadQuizForEpisode(epIdx);
  
  // Nav controls status
  document.getElementById('chapterIndicator').textContent = `Episode ${episode.id} of 10`;
  document.getElementById('prevEpBtn').disabled = epIdx === 0;
  
  // Dots status
  updateProgressDotsUI();
}

function updateProgressDotsUI() {
  const dotsContainer = document.getElementById('readerProgressDots');
  dotsContainer.innerHTML = '';
  
  episodesData.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    if (idx === appState.currentEpisodeIdx) {
      dot.classList.add('active');
    } else if (appState.completedQuizzes[idx]) {
      dot.classList.add('completed');
    }
    
    dot.addEventListener('click', () => {
      playChime(350 + idx * 40, 0.15, 0.15);
      goToEpisode(idx);
    });
    
    dotsContainer.appendChild(dot);
  });
}

function updateProgressUI() {
  const totalCompleted = appState.completedQuizzes.filter(Boolean).length;
  const pct = (totalCompleted / 10) * 100;
  
  // Progress Bar
  const coverBar = document.getElementById('coverProgressBar');
  if (coverBar) coverBar.style.width = `${pct}%`;
  
  // Progress text
  const progressText = document.getElementById('coverProgressText');
  if (progressText) {
    progressText.textContent = `${totalCompleted} / 10 Episodes Completed`;
  }
}

/* ==========================================================================
   BADGE ROOM RENDER
   ========================================================================== */
function renderBadgeGrid() {
  const grid = document.getElementById('badgeGrid');
  grid.innerHTML = '';
  
  episodesData.forEach((ep, idx) => {
    const badge = ep.quiz.badge;
    const isUnlocked = appState.unlockedBadges[idx];
    
    const card = document.createElement('div');
    card.className = `badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    
    card.innerHTML = `
      <div class="badge-icon-container">
        <span class="badge-emoji">${isUnlocked ? badge.emoji : '❓'}</span>
        ${!isUnlocked ? '<div class="badge-lock">🔒</div>' : ''}
      </div>
      <div class="badge-name">${isUnlocked ? badge.name : 'Hidden Badge'}</div>
      <div class="badge-ep">Episode ${ep.id}</div>
      <div class="badge-desc" style="font-size:0.75rem; margin-top:5px; color:var(--text-muted);">
        ${isUnlocked ? badge.desc : 'Complete the quiz to unlock this virtue.'}
      </div>
    `;
    
    grid.appendChild(card);
  });
}

/* ==========================================================================
   THEME SWITCHER
   ========================================================================== */
function setTheme(themeName) {
  document.body.className = '';
  document.body.classList.add(`theme-${themeName}`);
  
  // Update Dot Highlight
  document.querySelectorAll('.theme-dot').forEach(dot => dot.classList.remove('active'));
  
  if (themeName === 'warm') document.getElementById('themeWarmBtn').classList.add('active');
  if (themeName === 'light') document.getElementById('themeLightBtn').classList.add('active');
  if (themeName === 'dark') document.getElementById('themeDarkBtn').classList.add('active');
}

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Load local storage progress
  loadProgress();
  
  // Render Cover progress state
  updateProgressUI();
  
  // Navigation & Button Bindings
  document.getElementById('headerLogo').addEventListener('click', () => {
    showView('coverView');
  });
  
  document.getElementById('startReadingBtn').addEventListener('click', () => {
    playChime(440, 0.2, 0.2); // Start sound
    showView('readerView');
    goToEpisode(appState.currentEpisodeIdx);
  });
  
  document.getElementById('backToCoverBtn').addEventListener('click', () => {
    showView('coverView');
    updateProgressUI();
  });
  
  document.getElementById('prevEpBtn').addEventListener('click', () => {
    if (appState.currentEpisodeIdx > 0) {
      playChime(392, 0.2, 0.2);
      goToEpisode(appState.currentEpisodeIdx - 1);
    }
  });
  
  document.getElementById('nextEpBtn').addEventListener('click', () => {
    if (appState.currentEpisodeIdx < 9) {
      playChime(523, 0.2, 0.2);
      goToEpisode(appState.currentEpisodeIdx + 1);
    } else {
      // Completed last episode quiz? Show badge room
      showView('badgeRoomView');
      renderBadgeGrid();
    }
  });

  // Badge Room controls
  document.getElementById('badgeRoomNavBtn').addEventListener('click', () => {
    renderBadgeGrid();
    showView('badgeRoomView');
  });
  
  document.getElementById('closeBadgeRoomBtn').addEventListener('click', () => {
    showView('readerView');
    goToEpisode(appState.currentEpisodeIdx);
  });
  
  document.getElementById('resetProgressBtn').addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all your progress and badges?")) {
      resetProgress();
    }
  });

  // TTS Control elements
  document.getElementById('ttsPlayPauseBtn').addEventListener('click', playPauseTTS);
  document.getElementById('ttsStopBtn').addEventListener('click', stopTTS);
  
  const speedSlider = document.getElementById('ttsSpeed');
  const speedValText = document.getElementById('ttsSpeedVal');
  speedSlider.addEventListener('input', () => {
    speedValText.textContent = `${parseFloat(speedSlider.value).toFixed(1)}x`;
    // If playing, restart speaking with the new speed
    if (isTTSPlaying && !isTTSPaused) {
      speakPhraseSequence(activeUtteranceIdx);
    }
  });

  // Ambient sound button
  document.getElementById('ambientSoundBtn').addEventListener('click', toggleAmbientSound);

  // Themes
  document.getElementById('themeWarmBtn').addEventListener('click', () => setTheme('warm'));
  document.getElementById('themeLightBtn').addEventListener('click', () => setTheme('light'));
  document.getElementById('themeDarkBtn').addEventListener('click', () => setTheme('dark'));
});
