/* ════════════════════════════════════════════════════════
   LOVE SITE — script.js
   All 18 points. Defensive. Senior-level. Working.
════════════════════════════════════════════════════════ */
'use strict';

/* ─────────────────────────────────────────────────────
   1. UTILS
───────────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const rand  = (a, b) => Math.random() * (b - a) + a;
const randI = (a, b) => Math.floor(rand(a, b + 1));
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = randI(0, i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─────────────────────────────────────────────────────
   2. DATA ARRAYS
───────────────────────────────────────────────────── */
const NICKNAMES = [
  'sonpapdi','kajukatli','dhanoo','laado','rani',
  'madam ji','cutieee','princess','pari','wifeyyy',
  'Shriuu','sweety','janeman','cutuuu','baby',
  'babydoll','my love','jaan','gulaabo','meethi si'
];

// 16 texts for NO button — no shrinking, just text changes and movement
const NO_TEXTS = [
  'Nahi 🙅',
  'Sach mein?? 🥺',
  'Please... 🙏',
  'Main tumhara Billu hoon 🐱',
  'Main tumhara future hubby hoon 💔',
  'Ek baar soch lo... 🥹',
  'Main roz tumse pyaar karta hoon 💕',
  'Please na meri jaan 😭',
  'Tumhare bina nahi jee sakta 🫀',
  'Yeh sahi nahi hai 💔',
  'Main roh raha hoon ab 😭',
  'Okay last chance... 🙏',
  'Pleaaaase 🥺🥺🥺',
  'Main mar jaaoonga 😭',
  'Theek hai... tum jao 💔',
  '*button gaya* 🫠'
];

// 20 compliments (respectful, Hinglish)
const COMPLIMENTS = [
  'Tumhara khana itna achha hota hai ki lagta hai — tumne haath se pyaar dala ho har dish mein 🍽️🥰',
  'Tumhari caring dekh ke lagta hai — is duniya mein koi mujhse zyada lucky nahi 🥺',
  'Tum 10 minute se zyada gussa nahi reh sakti mujhse — yeh tumhari sabse cute weakness hai 😭🥰',
  'Tumhe meri family se utna hi pyaar hai jitna mujhse — yeh baat mujhe sabse zyada touch karti hai 🏠❤️',
  'Tum sirf meri girlfriend nahi ho — tum mera ghar ho 🏡',
  'Tumhari aankhein jhooth nahi bolti — aur wahi mujhe sabse zyada pasand hai tumhare mein 👁️✨',
  'Tum jab muskurati ho toh duniya thodi aur sundar ho jaati hai 🌸',
  'Tumhari patience mujhe roz sharminda karti hai — tum mujhse kahin behtar insaan ho 🥺',
  'Tum apna khayal rakhti ho — aur yahi tumhari sabse badi strength hai 💪🌹',
  'Tum meri culture ko respect karti ho — yeh chhoti baat nahi, yeh sab kuch hai mere liye 🙏',
  'Tumhe mujhe aur jaanna hai — aur yeh feeling mujhe complete karta hai 🥰',
  'Tumhari smartness aur tumhari cuteness ka combination — seriously unfair hai baaki sabke liye 😭💅',
  'Tum caring itni ho ki main kabhi kabhi sochta hoon — kya main is pyaar ke laayak hoon? 🥺',
  'Tumhari hassi sunke lagta hai — yahi ek cheez chahiye zindagi mein 😭🎶',
  'Tum sach mein ek puri family banane wali ho — aur main chahta hoon woh family meri ho 🏠👨‍👩‍👧',
  'Tumse zyada beautiful aur koi nahi — aur yeh meri opinion nahi, yeh fact hai 💯🌹',
  'Tum meri life ka woh hissa ho jiske bina story adhoori lagti hai 📖💝',
  'Tumhari bindi aur tumhari aankhein — duniya ka sabse sundar combination 😭✨',
  'Tum mujhe samajhti ho bina bole — aur yeh gift bohot kam logo ko milta hai 🫀',
  'Sonpapdi ho tum meri — meethi, naram, aur ekdum unique 🍬🥰'
];

// 10 reasons (catch-hearts game)
const REASONS = [
  { icon: '🫀', text: 'Kyunki tumne kabhi mujhe judge nahi kiya — tum samajhti ho mujhe bina words ke, aur yeh sab kuch hai 🥺' },
  { icon: '🏡', text: 'Kyunki tumhari care mein ek alag hi warmth hai — jo mujhe ghar jaisi lagti hai. Tum mera sukoon ho 💕' },
  { icon: '🙏', text: 'Kyunki tumne kabhi dhoka nahi diya — aur is zamaane mein yeh sabse badi aur rare baat hai 🌹' },
  { icon: '😭', text: 'Kyunki tumhari smile ke liye main kuch bhi kar sakta hoon — literally kuch bhi, aur mujhe koi sharm nahi 😌' },
  { icon: '🌙', text: 'Kyunki mujhe pata hai tum kabhi nahi jaogi — aur isi wajah se main kal se nahi darta. Tum meri neend ho 💤' },
  { icon: '👶', text: 'Kyunki jab main tumhe apne bachon ki maa ke roop mein sochta hoon — koi aur dikh hi nahi ta. Sirf tum 🥹' },
  { icon: '🏠', text: 'Kyunki tumhari family values aur ghar ke liye jo dedication hai — yeh mujhe sabse zyada attract karta hai 🥰' },
  { icon: '🌟', text: 'Kyunki tumne mere sapnon ko kabhi chhota nahi samjha — hamesha encourage kiya, hamesha saath khadi rahi 💪' },
  { icon: '🌸', text: 'Kyunki tumhare saath hone se duniya ke saare problems chhote lag jaate hain — bas tum chahiye 🥺' },
  { icon: '💅', text: 'Kyunki tumhari woh self-love wali aadat — mujhe bhi sikhati hai ki khud se pyaar karo. Tum meri teacher bhi ho 😂🥰' }
];

// 15 wishes (jar)
const WISHES = [
  'Chahta hoon ek subah ho jab main tumhari chai banaoon aur tum meri — hum dono equal rahein ☕😭',
  'Chahta hoon hamare bachon ki aankhein tumhari jaisi hon — woh bindi wali magical aankhein 🥺👁️',
  'Chahta hoon hum dono mil ke ek ghar banayein — jahan shor bhi ho aur sukoon bhi 🏡',
  'Chahta hoon tumhari har raat ki neend peaceful ho — agar ho sake toh mere kandhe pe 🥰',
  'Chahta hoon tumhare haath ka khana roz khaaon — aur compliment bhi roz doon, kyunki tum deserve karti ho 🍽️',
  'Chahta hoon kabhi aisa na ho jab tumhe kisi cheez ki zaroorat ho aur main na hoon 🫂',
  'Chahta hoon hum saath budhape mein bhi yahi pagalpan karein — same drama, same love 😂❤️',
  'Chahta hoon tumhari maa mere baare mein sochen — "haaan yeh laayak hai meri beti ke liye" 😭🙏',
  'Chahta hoon hum kabhi bhi raat ko argue karein toh subah coffee saath piyein — koi grudge nahi 😅☕',
  'Chahta hoon tumhari zindagi mein jo bhi dard ho — woh door karna meri zimmedaari ho 🥺',
  'Chahta hoon hamara pehla ghar chhota ho — par pyaar usmein itna ho ki kaafi lage 🏠💝',
  'Chahta hoon tumhari personality aur meri stupidity — ek perfect balance banaye saari zindagi 😂🥰',
  'Chahta hoon jab hum retire hon — hum phir bhi aise hi haath pakdein, wahi pyaar, wahi warmth 👴👵',
  'Chahta hoon hamari beti bilkul tumhari tarah ho — cute, strong, caring, aur slightly stubborn 😭💅',
  'Chahta hoon yeh site tumhari zindagi ka sabse pyaara moment ban jaaye — abhi ke liye aur hamesha ke liye 🥺🌹'
];

// 3 finale messages
const FINALE_MSGS = [
  'Shrishti... main wada nahi karta perfect hone ka. Par yeh zaroor karta hoon — tumhari khushi meri zimmedaari rahegi. Hamesha. 🌹',
  'Tum meri kahani ka woh chapter ho jo main baar baar padna chahta hoon. Aur ab yeh kahani tumhare bina adhoori hai — aur hamesha rahegi. 💝',
  'Abhi toh sirf shuruat hai Shriuu... Ek ghar, ek family, ek zindagi — sab tumhare saath banana hai. Tumhari hassi, tumhari aankhein, tumhara pyaar — yeh sab mera hai. Aur main? Sirf tumhara hoon. Hamesha. 🥺🌙'
];

/* ─────────────────────────────────────────────────────
   3. STATE
───────────────────────────────────────────────────── */
let noTapIndex      = 0;
let compIndex       = 0;
let wishIndex       = 0;
let heartsCaught    = 0;
let gameRunning     = false;
let gameDropped     = 0;
let musicPlaying    = false;
let voicePlaying    = false;
let vinylStarted    = false;
let finaleStarted   = false;
let letterOpened    = false;
let vizRaf          = null;
let counterInterval = null;
let shuffledComps   = shuffle([...COMPLIMENTS]);

/* ─────────────────────────────────────────────────────
   4. AUDIO HELPERS
───────────────────────────────────────────────────── */
const bgMuz    = $('bgMusic');
const rainMuz  = $('rainAudio');
const chime    = $('chimeAudio');
const flip     = $('pageflipAudio');
const voiceEl  = $('voiceAudio');

function tryPlay(el) {
  if (!el) return;
  const p = el.play();
  if (p && typeof p.catch === 'function') p.catch(() => {});
}

function setVol(el, v) {
  if (!el) return;
  try { el.volume = clamp(v, 0, 1); } catch(e) {}
}

function fadeTo(el, target, ms = 700) {
  if (!el) return;
  const start = el.volume || 0;
  const steps = 30;
  const diff  = target - start;
  let i = 0;
  const id = setInterval(() => {
    i++;
    try { el.volume = clamp(start + diff * (i / steps), 0, 1); } catch(e) {}
    if (i >= steps) clearInterval(id);
  }, ms / steps);
}

function startBgMusic() {
  if (musicPlaying || !bgMuz) return;
  setVol(bgMuz, 0.28);
  tryPlay(bgMuz);
  musicPlaying = true;
  const fab = $('musicFab');
  if (fab) { fab.classList.add('show'); fab.classList.remove('muted'); }
}

// Music FAB toggle
const musicFab = $('musicFab');
if (musicFab) {
  musicFab.addEventListener('click', () => {
    if (musicPlaying) {
      if (bgMuz) bgMuz.pause();
      musicPlaying = false;
      musicFab.classList.add('muted');
    } else {
      startBgMusic();
    }
  });
}

/* ─────────────────────────────────────────────────────
   5. PAGE NAVIGATION SYSTEM
───────────────────────────────────────────────────── */
const PAGE_ORDER = ['intro','question','yes','counter','letter','vinyl','game','compliments','wishjar','voice','finale'];

function goTo(targetId) {
  const currentPage = document.querySelector('.page--active');
  const nextPage    = $('page-' + targetId);

  if (!nextPage)    { console.warn('Page not found:', targetId); return; }
  if (!currentPage) { nextPage.classList.add('page--active'); return; }
  if (currentPage === nextPage) return;

  // Slide current out
  currentPage.classList.add('page--leaving');
  currentPage.classList.remove('page--active');

  // Clean up leaving class after transition
  setTimeout(() => {
    currentPage.classList.remove('page--leaving');
  }, 500);

  // Activate next page
  nextPage.classList.add('page--active');
  nextPage.scrollTop = 0;

  // Nickname overlay: visible on all pages except intro
  const nickEl = $('nickOverlay');
  if (nickEl) {
    if (targetId === 'intro') {
      nickEl.classList.remove('visible');
    } else {
      nickEl.classList.add('visible');
    }
  }

  // Page-specific setup
  handlePageEnter(targetId);
}

// Make goTo globally accessible (used in onclick attributes)
window.goTo = goTo;

function handlePageEnter(id) {
  switch (id) {
    case 'question':    initQuestionPage();   break;
    case 'counter':     initCounterPage();    break;
    case 'letter':      initLetterPage();     break;
    case 'vinyl':       initVinylPage();      break;
    case 'game':        /* game starts on button click */ break;
    case 'compliments': initComplimentsPage(); break;
    case 'wishjar':     initWishJarPage();    break;
    case 'voice':       /* voice starts on mic tap */    break;
    case 'finale':      initFinalePage();     break;
  }
}

/* ─────────────────────────────────────────────────────
   6. BACKGROUND CANVAS (ambient particles, always on)
───────────────────────────────────────────────────── */
(function setupBgCanvas() {
  const cvs = $('bgCanvas');
  if (!cvs) return;
  const ctx = cvs.getContext('2d');

  const CHARS = ['♥', '✦', '·', '•', '❤'];
  const particles = [];

  function resize() {
    cvs.width  = window.innerWidth;
    cvs.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 55; i++) {
    particles.push({
      x:   rand(0, cvs.width),
      y:   rand(-20, cvs.height),
      vy:  rand(0.2, 0.65),
      vx:  rand(-0.18, 0.18),
      s:   rand(7, 15),
      a:   rand(0.03, 0.09),
      c:   Math.random() < 0.65 ? '#e05070' : '#d4956a',
      ch:  CHARS[randI(0, CHARS.length - 1)],
      rot: rand(0, Math.PI * 2),
      rv:  rand(-0.02, 0.02)
    });
  }

  function tick() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    particles.forEach(p => {
      p.x   += p.vx;
      p.y   += p.vy;
      p.rot += p.rv;
      if (p.y > cvs.height + 20) { p.y = -10; p.x = rand(0, cvs.width); }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.a;
      ctx.fillStyle = p.c;
      ctx.font = `${p.s}px serif`;
      ctx.fillText(p.ch, 0, 0);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  }
  tick();
})();

/* ─────────────────────────────────────────────────────
   7. NICKNAME OVERLAY (built once, shown on all non-intro pages)
───────────────────────────────────────────────────── */
(function buildNicknames() {
  const layer = $('nickOverlay');
  if (!layer) return;

  NICKNAMES.forEach((name) => {
    const el = document.createElement('span');
    el.className = 'nick-item';
    el.textContent = name;
    el.style.left             = `${rand(2, 88)}%`;
    el.style.animationDuration = `${rand(20, 34)}s`;
    el.style.animationDelay   = `${rand(0, 24)}s`;
    el.style.fontSize         = `${rand(0.95, 1.35)}rem`;
    layer.appendChild(el);
  });
})();

/* ─────────────────────────────────────────────────────
   8. EASTER EGG — 💖 spawns on any blank tap/click
      (opacity ~80%, smooth rise, never on buttons)
───────────────────────────────────────────────────── */
document.addEventListener('click', function(e) {
  // Skip if the click was on or inside a button
  if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
  spawnEggHeart(e.clientX, e.clientY);
}, true);

document.addEventListener('touchend', function(e) {
  if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
  const t = e.changedTouches[0];
  if (t) spawnEggHeart(t.clientX, t.clientY);
}, { passive: true, capture: true });

function spawnEggHeart(x, y) {
  const layer = $('eggLayer');
  if (!layer) return;
  const el = document.createElement('div');
  el.className = 'egg-heart';
  el.textContent = '💖';
  el.style.left = `${x - 14}px`;
  el.style.top  = `${y - 14}px`;
  layer.appendChild(el);
  setTimeout(() => { if (el.parentNode) el.remove(); }, 1900);
}

/* ─────────────────────────────────────────────────────
   9. PAGE 1 — INTRO (ECG + heart reveal)
───────────────────────────────────────────────────── */
(function initIntroPage() {
  const cvs = $('ecgCanvas');
  if (!cvs) return;
  const ctx = cvs.getContext('2d');

  function resizeCvs() {
    cvs.width  = window.innerWidth;
    cvs.height = window.innerHeight;
  }
  resizeCvs();
  window.addEventListener('resize', resizeCvs);

  // Medically accurate ECG Y value for a given X position in cycle
  function ecgY(pos, cy, amp) {
    const cycleLen = 200;
    const t = ((pos % cycleLen) + cycleLen) % cycleLen;
    // P wave
    if (t >= 20 && t < 40)  { const p = (t - 20) / 20; return cy - amp * 0.18 * Math.sin(p * Math.PI); }
    // PR flat
    if (t >= 40 && t < 55)  { return cy; }
    // Q dip
    if (t >= 55 && t < 62)  { const p = (t - 55) / 7;  return cy + amp * 0.12 * Math.sin(p * Math.PI); }
    // R spike up
    if (t >= 62 && t < 68)  { const p = (t - 62) / 6;  return cy - amp * p; }
    // R spike down
    if (t >= 68 && t < 76)  {
      const p = (t - 68) / 8;
      return (cy - amp) + (amp * 1.15) * p;
    }
    // S dip
    if (t >= 76 && t < 82)  { const p = (t - 76) / 6;  return (cy + amp * 0.15) - amp * 0.15 * p; }
    // ST flat
    if (t >= 82 && t < 118) { return cy; }
    // T wave
    if (t >= 118 && t < 154){ const p = (t - 118) / 36; return cy - amp * 0.3 * Math.sin(p * Math.PI); }
    // TP flat
    return cy;
  }

  let drawX = 0;
  const SPEED = 3.8;
  const trailPoints = [];
  let phase = 'drawing'; // 'drawing' | 'fading'
  let fadeAlpha = 1;
  let raf;

  function drawECG() {
    const cx = cvs.width;
    const cy = cvs.height * 0.5;
    const amp = Math.min(cvs.height * 0.32, 90);

    ctx.clearRect(0, 0, cvs.width, cvs.height);

    if (phase === 'drawing') {
      trailPoints.push({ x: drawX, y: ecgY(drawX, cy, amp) });
      drawX += SPEED;

      // Draw the line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(224, 80, 112, 0.88)';
      ctx.lineWidth = 2.6;
      ctx.shadowColor = '#e05070';
      ctx.shadowBlur  = 16;
      ctx.moveTo(trailPoints[0].x, trailPoints[0].y);
      trailPoints.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.stroke();

      // Moving glow dot at tip
      const last = trailPoints[trailPoints.length - 1];
      ctx.beginPath();
      ctx.shadowBlur  = 24;
      ctx.shadowColor = '#f0c49a';
      ctx.fillStyle   = '#f0c49a';
      ctx.arc(last.x, last.y, 5, 0, Math.PI * 2);
      ctx.fill();

      if (drawX > cx + 60) {
        phase = 'fading';
      }
      raf = requestAnimationFrame(drawECG);

    } else if (phase === 'fading') {
      fadeAlpha = Math.max(0, fadeAlpha - 0.035);
      ctx.globalAlpha = fadeAlpha;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(224, 80, 112, 0.7)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#e05070';
      ctx.moveTo(trailPoints[0].x, trailPoints[0].y);
      trailPoints.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.stroke();
      ctx.globalAlpha = 1;

      if (fadeAlpha > 0) {
        raf = requestAnimationFrame(drawECG);
      } else {
        cancelAnimationFrame(raf);
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        revealIntroContent();
      }
    }
  }

  // Start ECG after very short delay to let CSS paint first
  setTimeout(() => { raf = requestAnimationFrame(drawECG); }, 280);

  function revealIntroContent() {
    // Show heart container
    const hc = $('heartContainer');
    if (hc) setTimeout(() => hc.classList.add('show'), 50);

    // Show name
    const nm = $('introName');
    if (nm) setTimeout(() => nm.classList.add('show'), 550);

    // Show subtitle
    const sb = $('introSub');
    if (sb) setTimeout(() => sb.classList.add('show'), 1000);

    // Show button
    const btn = $('enterBtn');
    if (btn) setTimeout(() => btn.classList.add('show'), 1550);
  }
})();

// Enter button
const enterBtn = $('enterBtn');
if (enterBtn) {
  enterBtn.addEventListener('click', () => {
    startBgMusic();
    goTo('question');
  });
}

/* ─────────────────────────────────────────────────────
   10. PAGE 2 — QUESTION (petals canvas + NO button)
───────────────────────────────────────────────────── */
function initQuestionPage() {
  startPetalCanvas();
  positionNoButton();
}

// Petals & hearts canvas on question page
let petalRaf = null;
function startPetalCanvas() {
  const cvs = $('petalCanvas');
  if (!cvs || cvs._started) return;
  cvs._started = true;
  const ctx = cvs.getContext('2d');

  function resize() { cvs.width = window.innerWidth; cvs.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const CHARS = ['🌸', '♥', '✦', '·', '❤', '•', '✿'];
  const pts = [];
  for (let i = 0; i < 65; i++) {
    pts.push({
      x:   rand(0, cvs.width),
      y:   rand(-50, cvs.height),
      vy:  rand(0.4, 1.0),
      vx:  rand(-0.4, 0.4),
      s:   rand(10, 20),
      a:   rand(0.06, 0.2),
      c:   Math.random() < 0.6 ? '#e05070' : '#d4956a',
      ch:  CHARS[randI(0, CHARS.length - 1)],
      rot: rand(0, Math.PI * 2),
      rv:  rand(-0.025, 0.025)
    });
  }

  function tick() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rv;
      if (p.y > cvs.height + 30) { p.y = -20; p.x = rand(0, cvs.width); }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.a;
      ctx.fillStyle = p.c;
      ctx.font = `${p.s}px serif`;
      ctx.fillText(p.ch, 0, 0);
      ctx.restore();
    });
    petalRaf = requestAnimationFrame(tick);
  }
  tick();
}

// ── NO BUTTON LOGIC ──────────────────────────────────
const noBtn = $('noBtn');

function positionNoButton() {
  if (!noBtn) return;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  noBtn.style.left = `${Math.round(vw * 0.55)}px`;
  noBtn.style.top  = `${Math.round(vh * 0.72)}px`;
  noBtn.style.display = 'block';
  noBtn.style.transform = 'none';
  noBtn.style.opacity   = '1';
}

function moveNoButton() {
  if (!noBtn) return;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const btnW = noBtn.offsetWidth  || 120;
  const btnH = noBtn.offsetHeight || 44;
  const curL = parseInt(noBtn.style.left) || vw * 0.55;
  const curT = parseInt(noBtn.style.top)  || vh * 0.72;

  let nx, ny, attempts = 0;
  do {
    nx = randI(20, vw - btnW - 20);
    ny = randI(60, vh - btnH - 60);
    attempts++;
  } while (attempts < 25 && Math.abs(nx - curL) < 100 && Math.abs(ny - curT) < 80);

  noBtn.style.left = `${nx}px`;
  noBtn.style.top  = `${ny}px`;
}

function handleNoTap(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (e && e.stopPropagation) e.stopPropagation();

  if (noTapIndex >= NO_TEXTS.length - 1) {
    // Last tap — remove the button
    if (noBtn) {
      noBtn.style.opacity   = '0';
      noBtn.style.transform = 'scale(0)';
      noBtn.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    }
    return;
  }

  // Change text
  if (noBtn) noBtn.textContent = NO_TEXTS[noTapIndex];
  noTapIndex++;

  // Move to new position
  moveNoButton();
}

if (noBtn) {
  // Mouse enter (desktop hover)
  noBtn.addEventListener('mouseenter', handleNoTap);
  // Touch start (mobile)
  noBtn.addEventListener('touchstart', handleNoTap, { passive: false });
  // Click fallback
  noBtn.addEventListener('click', (e) => { e.stopPropagation(); moveNoButton(); });
}

// YES button
const yesBtn = $('yesBtn');
if (yesBtn) {
  yesBtn.addEventListener('click', handleYes);
  yesBtn.addEventListener('touchend', (e) => { e.preventDefault(); handleYes(); }, { passive: false });
}

async function handleYes() {
  startBgMusic();
  goTo('yes');

  await sleep(180);

  // Show big heart
  const heart = $('yesHeart');
  if (heart) {
    heart.classList.add('show');
    // Apply the beating animation after show
    setTimeout(() => {
      heart.style.animationPlayState = 'running';
    }, 100);
  }

  // Launch confetti
  launchConfetti();

  // Typewrite YES message
  await sleep(600);
  await typewriter($('yesMessage'), 'Pata tha mujhe... Tum sirf meri ho 🥰', 40);

  // Show continue button
  await sleep(2400);
  const cont = $('yesContinue');
  if (cont) cont.classList.remove('hidden');
}

/* ─────────────────────────────────────────────────────
   11. PAGE 3 — CONFETTI
───────────────────────────────────────────────────── */
function launchConfetti() {
  const cvs = $('confettiCanvas');
  if (!cvs) return;
  const ctx = cvs.getContext('2d');
  cvs.width  = window.innerWidth;
  cvs.height = window.innerHeight;

  const COLORS = ['#e05070','#f0c49a','#d4956a','#f4889a','#b8334f','#fce8ee','#fff'];
  const bits = [];

  for (let i = 0; i < 150; i++) {
    bits.push({
      x:     rand(0, cvs.width),
      y:     rand(-cvs.height * 0.6, -10),
      vx:    rand(-3, 3),
      vy:    rand(2.5, 8),
      w:     rand(5, 14),
      h:     rand(3, 8),
      angle: rand(0, Math.PI * 2),
      spin:  rand(-0.14, 0.14),
      color: COLORS[randI(0, COLORS.length - 1)],
      heart: Math.random() < 0.45,
      grav:  rand(0.03, 0.07)
    });
  }

  function tick() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    let anyVisible = false;
    bits.forEach(b => {
      b.x     += b.vx;
      b.y     += b.vy;
      b.vy    += b.grav;
      b.angle += b.spin;
      if (b.y < cvs.height + 30) anyVisible = true;

      const alpha = clamp(1 - b.y / (cvs.height * 0.95), 0, 1);
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.angle);
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = b.color;
      if (b.heart) {
        ctx.font = `${b.w * 1.5}px serif`;
        ctx.fillText('♥', -b.w / 2, b.h / 2);
      } else {
        ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
      }
      ctx.restore();
    });
    if (anyVisible) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ─────────────────────────────────────────────────────
   12. TYPEWRITER HELPER
───────────────────────────────────────────────────── */
function typewriter(el, text, speed = 40) {
  return new Promise(resolve => {
    if (!el) { resolve(); return; }
    el.textContent = '';
    let i = 0;
    const id = setInterval(() => {
      if (i < text.length) {
        el.textContent += text[i++];
      } else {
        clearInterval(id);
        resolve();
      }
    }, speed);
  });
}

/* ─────────────────────────────────────────────────────
   13. PAGE 4 — COUNTER
───────────────────────────────────────────────────── */
function initCounterPage() {
  if (counterInterval) clearInterval(counterInterval);
  const START = new Date('2026-02-12T00:00:00');

  function updateCounter() {
    const diffMs = Math.max(0, Date.now() - START.getTime());
    const totalSec = Math.floor(diffMs / 1000);
    const totalMin = Math.floor(totalSec / 60);
    const totalHr  = Math.floor(totalMin / 60);
    const days     = Math.floor(totalHr / 24);

    const d = $('cntDays');
    const h = $('cntHours');
    const m = $('cntMins');
    const s = $('cntSecs');

    if (d) d.textContent = days.toLocaleString();
    if (h) h.textContent = String(totalHr  % 24).padStart(2, '0');
    if (m) m.textContent = String(totalMin % 60).padStart(2, '0');
    if (s) s.textContent = String(totalSec % 60).padStart(2, '0');
  }
  updateCounter();
  counterInterval = setInterval(updateCounter, 1000);
}

/* ─────────────────────────────────────────────────────
   14. PAGE 5 — LETTER (envelope + opening sequence)
───────────────────────────────────────────────────── */
function initLetterPage() {
  const scene = $('envScene');
  if (scene) setTimeout(() => scene.classList.add('show'), 200);
}

// Wax seal opens the letter (ONLY wax seal, not the whole envelope)
const waxSeal = $('waxSeal');
if (waxSeal) {
  waxSeal.addEventListener('click',    openLetter);
  waxSeal.addEventListener('touchend', (e) => { e.preventDefault(); openLetter(); }, { passive: false });
}

function openLetter() {
  if (letterOpened) return;
  letterOpened = true;

  const envelope = $('envelope');
  const hint     = $('envHint');
  const arrow    = $('envArrow');

  // Stop wiggle animation
  if (envelope) envelope.classList.add('opening');

  // Play page flip sound
  if (flip) { try { flip.currentTime = 0; tryPlay(flip); } catch(e) {} }

  // Hide hint
  if (hint)  { hint.style.opacity  = '0'; hint.style.transition  = 'opacity 0.3s ease'; }
  if (arrow) { arrow.style.opacity = '0'; arrow.style.transition = 'opacity 0.3s ease'; }

  // Shake the envelope briefly
  if (envelope) {
    envelope.style.animation = 'envShake 0.55s ease';
  }

  // Open top flap after shake
  setTimeout(() => {
    if (envelope) envelope.classList.add('opened');
    // Start rain ambience
    if (rainMuz) { setVol(rainMuz, 0.16); tryPlay(rainMuz); }
  }, 600);

  // Show letter paper
  setTimeout(() => {
    const paper = $('letterPaper');
    if (paper) {
      paper.style.display = 'block';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          paper.classList.add('show');
          initLetterReveal();
        });
      });
    }
  }, 1100);

  // Show continue button
  setTimeout(() => {
    const cont = $('letterContinue');
    if (cont) cont.classList.remove('hidden');
  }, 3000);
}

function initLetterReveal() {
  const items = document.querySelectorAll('#letterPaper .lp-reveal');
  if (!items.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 70);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });

  items.forEach(el => obs.observe(el));

  // Also trigger visible for items already in viewport immediately
  setTimeout(() => {
    items.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setTimeout(() => el.classList.add('visible'), i * 80);
      }
    });
  }, 400);
}

/* ─────────────────────────────────────────────────────
   15. PAGE 6 — VINYL
───────────────────────────────────────────────────── */
function initVinylPage() {
  if (vinylStarted) return;
  vinylStarted = true;

  // Stop rain
  if (rainMuz) { try { rainMuz.pause(); } catch(e) {} }

  const arm     = $('tonearm');
  const disk    = $('vinylDisk');
  const bars    = $('musicBars');
  const caption = $('vinylCaption');

  // Move arm to playing position
  setTimeout(() => {
    if (arm) arm.classList.add('on');
  }, 350);

  // Spin disk + show bars + show caption
  setTimeout(() => {
    if (disk)    disk.classList.add('spinning');
    if (bars)    bars.classList.add('on');
    if (caption) caption.classList.add('on');
    fadeTo(bgMuz, 0.38);
  }, 1500);
}

/* ─────────────────────────────────────────────────────
   16. PAGE 7 — CATCH MY HEART GAME
───────────────────────────────────────────────────── */
const gameStartBtn = $('gameStartBtn');
if (gameStartBtn) {
  gameStartBtn.addEventListener('click', startGame);
}

function startGame() {
  const startZone = $('gameStartZone');
  const arena     = $('gameArena');
  if (startZone) startZone.style.display = 'none';
  if (arena) arena.style.display = 'block';

  gameRunning = true;
  heartsCaught = 0;
  gameDropped  = 0;

  // Start dropping hearts with staggered timing
  dropHeart();
}

function dropHeart() {
  if (!gameRunning || gameDropped >= 10) return;

  const zone = $('fallZone');
  if (!zone) return;

  const heartEl = document.createElement('div');
  heartEl.className = 'fall-heart';

  // Use SVG heart for each one
  const SVG_HEARTS = ['💕','💖','💗','💘','💝','🫀'];
  heartEl.textContent = SVG_HEARTS[randI(0, SVG_HEARTS.length - 1)];
  heartEl.style.left = `${rand(5, 80)}%`;

  const duration = rand(3200, 6500);
  heartEl.style.animationDuration = `${duration}ms`;

  const idx = gameDropped;
  gameDropped++;

  function catchHeart(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    if (heartEl.dataset.caught) return;
    heartEl.dataset.caught = '1';

    // Visual catch
    heartEl.style.animation = 'none';
    heartEl.classList.add('caught');

    // Sound
    if (chime) { try { chime.currentTime = 0; tryPlay(chime); } catch(e2) {} }

    heartsCaught++;
    const countEl = $('caughtCount');
    if (countEl) countEl.textContent = heartsCaught;

    // Show reason
    setTimeout(() => showReason(idx), 100);

    setTimeout(() => { if (heartEl.parentNode) heartEl.remove(); }, 500);

    // Drop next heart after a delay
    if (gameDropped < 10) {
      setTimeout(dropHeart, rand(500, 1400));
    }

    // Win condition
    if (heartsCaught >= 10) {
      setTimeout(() => {
        const win = $('gameWin');
        if (win) win.classList.add('show');
      }, 600);
    }
  }

  heartEl.addEventListener('click',    catchHeart);
  heartEl.addEventListener('touchstart', catchHeart, { passive: false });

  // If missed (falls through)
  heartEl.addEventListener('animationend', () => {
    if (!heartEl.dataset.caught) {
      if (heartEl.parentNode) heartEl.remove();
      // Still drop next heart even if missed
      if (gameDropped < 10 && gameRunning) {
        setTimeout(dropHeart, rand(400, 900));
      }
    }
  });

  zone.appendChild(heartEl);
}

function showReason(idx) {
  const r = REASONS[idx % REASONS.length];
  const list = $('reasonsList');
  if (!list) return;

  const card = document.createElement('div');
  card.className = 'reason-card';
  card.innerHTML = `
    <div class="reason-num">Wajah #${idx + 1} ${r.icon}</div>
    <p class="reason-text">${r.text}</p>
  `;
  list.appendChild(card);

  requestAnimationFrame(() => {
    setTimeout(() => card.classList.add('show'), 30);
  });
}

/* ─────────────────────────────────────────────────────
   17. PAGE 8 — COMPLIMENTS
───────────────────────────────────────────────────── */
function initComplimentsPage() {
  shuffledComps = shuffle([...COMPLIMENTS]);
  compIndex     = 0;
  startComplimentCanvas();
}

function startComplimentCanvas() {
  const cvs = $('complimentCanvas');
  if (!cvs || cvs._started) return;
  cvs._started = true;
  const ctx = cvs.getContext('2d');

  function resize() { cvs.width = window.innerWidth; cvs.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const pts = [];
  for (let i = 0; i < 45; i++) {
    pts.push({
      x: rand(0, cvs.width), y: rand(0, cvs.height),
      vx: rand(-0.28, 0.28), vy: rand(-0.28, 0.28),
      s: rand(8, 16), a: rand(0.03, 0.08),
      c: Math.random() < 0.6 ? '#e05070' : '#d4956a',
      ch: '✦'
    });
  }

  function tick() {
    if (!$('page-compliments').classList.contains('page--active')) { return; }
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = cvs.width;
      if (p.x > cvs.width)  p.x = 0;
      if (p.y < 0) p.y = cvs.height;
      if (p.y > cvs.height) p.y = 0;
      ctx.save();
      ctx.globalAlpha = p.a;
      ctx.fillStyle   = p.c;
      ctx.font        = `${p.s}px serif`;
      ctx.fillText(p.ch, p.x, p.y);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

const complimentBtn = $('complimentBtn');
if (complimentBtn) {
  complimentBtn.addEventListener('click', showNextCompliment);
  complimentBtn.addEventListener('touchend', (e) => { e.preventDefault(); showNextCompliment(); }, { passive: false });
}

function showNextCompliment() {
  const textEl = $('ccText');
  const cntEl  = $('compCounter');
  if (!textEl) return;

  textEl.classList.add('fading');

  setTimeout(() => {
    const text = shuffledComps[compIndex % shuffledComps.length];
    textEl.textContent = text;
    compIndex++;

    // Spawn sparkles inside card
    const card = $('complimentCard');
    if (card) {
      for (let i = 0; i < 7; i++) {
        const sp = document.createElement('span');
        sp.style.cssText = `
          position:absolute;
          font-size:${rand(0.9,1.5)}rem;
          left:${rand(5,88)}%;
          top:${rand(10,82)}%;
          animation:eggRise 1.4s ease forwards;
          pointer-events:none;
          z-index:3;
        `;
        sp.textContent = ['✨','💫','🌟','💕','🌸','💖'][randI(0,5)];
        card.appendChild(sp);
        setTimeout(() => { if (sp.parentNode) sp.remove(); }, 1500);
      }
    }

    textEl.classList.remove('fading');

    if (cntEl) {
      const left = Math.max(0, COMPLIMENTS.length - compIndex);
      cntEl.textContent = left > 0
        ? `${left} compliments aur tumhara intezaar kar rahe hain 🥰`
        : 'Tum hamesha itni hi khaas raho 🥰';
    }
  }, 290);
}

/* ─────────────────────────────────────────────────────
   18. PAGE 9 — WISH JAR
───────────────────────────────────────────────────── */
function initWishJarPage() {
  const scene = $('jarScene');
  if (scene) setTimeout(() => scene.classList.add('show'), 240);
}

const jarScene = $('jarScene');
if (jarScene) {
  jarScene.addEventListener('click',    openWish);
  jarScene.addEventListener('touchend', (e) => { e.preventDefault(); openWish(); }, { passive: false });
}

function openWish() {
  const note    = $('wishNote');
  const textEl  = $('wishText');
  const cntEl   = $('wishRemaining');
  if (!note || !textEl) return;

  note.classList.remove('open');

  setTimeout(() => {
    textEl.textContent = WISHES[wishIndex % WISHES.length];
    note.classList.add('open');
    wishIndex++;

    if (cntEl) {
      const left = WISHES.length - (wishIndex % WISHES.length);
      cntEl.textContent = left > 0 && wishIndex < WISHES.length
        ? `${WISHES.length - wishIndex} khwaab aur hain... 🌙`
        : 'Aur bhi hain... khatam nahi honge 🥺🌙';
    }
  }, 340);
}

/* ─────────────────────────────────────────────────────
   19. PAGE 10 — VOICE NOTE
───────────────────────────────────────────────────── */
const micOrb = $('micOrb');
if (micOrb) {
  micOrb.addEventListener('click',    handleVoice);
  micOrb.addEventListener('touchend', (e) => { e.preventDefault(); handleVoice(); }, { passive: false });
}

function handleVoice() {
  const hint = $('micHint');

  if (voicePlaying) {
    // Pause
    if (voiceEl) voiceEl.pause();
    voicePlaying = false;
    if (micOrb) micOrb.classList.remove('playing');
    const viz = $('vizCanvas');
    if (viz) viz.classList.remove('on');
    if (vizRaf) { cancelAnimationFrame(vizRaf); vizRaf = null; }
    fadeTo(bgMuz, 0.3);
    return;
  }

  // Dim background music
  fadeTo(bgMuz, 0.07);

  if (!voiceEl) {
    if (hint) hint.textContent = 'Voice note file add karo 🥺';
    return;
  }

  voiceEl.play().then(() => {
    voicePlaying = true;
    if (micOrb) micOrb.classList.add('playing');
    if (hint)   hint.textContent = 'Sun rahi ho? 🥺';
    const viz = $('vizCanvas');
    if (viz) viz.classList.add('on');
    startVisualizer();
  }).catch(() => {
    if (hint) hint.textContent = 'Voice note file "assets/Shriuu.mp3" add karo 🥺';
    fadeTo(bgMuz, 0.3);
  });

  if (voiceEl) {
    voiceEl.onended = () => {
      voicePlaying = false;
      if (micOrb) micOrb.classList.remove('playing');
      const viz = $('vizCanvas');
      if (viz) viz.classList.remove('on');
      if (vizRaf) { cancelAnimationFrame(vizRaf); vizRaf = null; }
      fadeTo(bgMuz, 0.3);
      if (hint) hint.textContent = 'Phir sunna ho toh tap karo 🥰';
    };
  }
}

function startVisualizer() {
  const cvs = $('vizCanvas');
  if (!cvs) return;
  const ctx = cvs.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  cvs.width  = cvs.offsetWidth  * dpr;
  cvs.height = cvs.offsetHeight * dpr;

  const BAR_COUNT = 30;

  function draw() {
    const W = cvs.width;
    const H = cvs.height;
    ctx.clearRect(0, 0, W, H);

    const barW = W / BAR_COUNT * 0.62;
    const gap  = W / BAR_COUNT * 0.38;

    for (let i = 0; i < BAR_COUNT; i++) {
      const t    = Date.now() / 390 + i * 0.65;
      const barH = (Math.sin(t) * 0.48 + 0.52) * H * 0.86 + 4;
      const x    = i * (barW + gap) + gap * 0.5;
      const y    = (H - barH) / 2;

      const gr = ctx.createLinearGradient(0, y, 0, y + barH);
      gr.addColorStop(0,   'rgba(224,80,112,0.92)');
      gr.addColorStop(1,   'rgba(212,149,106,0.9)');
      ctx.fillStyle = gr;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(x, y, barW, barH, 3);
      } else {
        ctx.rect(x, y, barW, barH);
      }
      ctx.fill();
    }
    vizRaf = requestAnimationFrame(draw);
  }
  draw();
}

/* ─────────────────────────────────────────────────────
   20. PAGE 11 — FINALE
───────────────────────────────────────────────────── */
function initFinalePage() {
  if (finaleStarted) return;
  finaleStarted = true;

  // Set days counter
  const START = new Date('2026-02-12T00:00:00');
  const diffMs = Math.max(0, Date.now() - START.getTime());
  const days   = Math.floor(diffMs / 86400000);
  const dEl    = $('togetherDays');
  if (dEl) dEl.textContent = days;

  // Start sparkles
  startSparkleCanvas();

  // Typewrite messages
  (async () => {
    await sleep(500);
    await typewriter($('fm1'), FINALE_MSGS[0], 24);
    await sleep(320);
    await typewriter($('fm2'), FINALE_MSGS[1], 24);
    await sleep(320);
    await typewriter($('fm3'), FINALE_MSGS[2], 20);
  })();
}

function startSparkleCanvas() {
  const cvs = $('sparkleCanvas');
  if (!cvs) return;
  const ctx = cvs.getContext('2d');
  cvs.width  = window.innerWidth;
  cvs.height = window.innerHeight;

  const sparkles = [];
  for (let i = 0; i < 60; i++) {
    sparkles.push({
      x:  rand(0, cvs.width),
      y:  rand(-50, cvs.height),
      vy: rand(0.3, 1.1),
      vx: rand(-0.3, 0.3),
      s:  rand(6, 15),
      a:  rand(0.2, 0.82),
      c:  Math.random() < 0.5 ? '#d4956a' : '#e05070',
      ch: Math.random() < 0.5 ? '✦' : '·'
    });
  }

  function tick() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    sparkles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.y > cvs.height + 15) { p.y = -10; p.x = rand(0, cvs.width); }
      ctx.save();
      ctx.globalAlpha = p.a;
      ctx.fillStyle   = p.c;
      ctx.font        = `${p.s}px serif`;
      ctx.fillText(p.ch, p.x, p.y);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

/* ─────────────────────────────────────────────────────
   21. ENVELOPE SHAKE ANIMATION (added via style tag)
───────────────────────────────────────────────────── */
(function addDynamicStyles() {
  const st = document.createElement('style');
  st.textContent = `
    @keyframes envShake {
      0%,100% { transform: rotate(0deg) translateY(0); }
      15%      { transform: rotate(-6deg) translateY(-5px); }
      30%      { transform: rotate(6deg)  translateY(-7px); }
      45%      { transform: rotate(-5deg) translateY(-4px); }
      60%      { transform: rotate(4deg)  translateY(-3px); }
      80%      { transform: rotate(-2deg) translateY(-1px); }
    }
  `;
  document.head.appendChild(st);
})();

/* ─────────────────────────────────────────────────────
   22. INITIAL SETUP (runs once DOM is ready)
───────────────────────────────────────────────────── */
(function init() {
  // Make sure only the intro page is active on start
  document.querySelectorAll('.page').forEach(p => {
    if (p.id !== 'page-intro') {
      p.classList.remove('page--active');
    }
  });

  // Nick overlay hidden on intro
  const nick = $('nickOverlay');
  if (nick) nick.classList.remove('visible');

  // No button hidden initially (shown when question page opens)
  if (noBtn) noBtn.style.display = 'none';

  // Log ready
  console.log('Love site ready 💝');
})();
