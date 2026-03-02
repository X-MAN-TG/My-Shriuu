/* ================================================
   LOVE SITE — script.js
   All interactions, animations, logic
   ================================================ */

'use strict';

// ============================================================
// DATA — Compliments, Reasons, Wishes, Final Messages
// ============================================================

const COMPLIMENTS = [
    "Tu itna achha khana banati hai ki lagta hai tune haath se pyaar dala ho har dish mein 🍽️🥰",
    "Teri caring dekh ke lagta hai — is duniya mein koi mujhse zyada lucky nahi 🥺",
    "Tu 10 minute se zyada gussa nahi rah sakti — yeh teri sabse cute weakness hai 😭🥰",
    "Tujhe meri family se utna hi pyaar hai jitna mujhse — yeh baat mujhe sabse zyada touch karti hai 🏠❤️",
    "Tu sirf meri girlfriend nahi hai — tu mera ghar hai 🏡",
    "Teri aankhein jhooth nahi bolti — aur wahi mujhe sabse zyada pasand hai tujh mein 👁️✨",
    "Tu jab muskurati hai toh duniya thodi aur sundar ho jaati hai 🌸",
    "Teri patience mujhe roz sharminda karti hai — tu mujhse kahin behtar insaan hai 🥺",
    "Tu khud se itna pyaar karti hai — aur yahi teri sabse badi strength hai 💪🌹",
    "Tu meri culture ko respect karti hai — yeh chhoti baat nahi, yeh sab kuch hai mere liye 🙏",
    "Tujhe mujhe aur jaanna hai — aur yeh feeling mujhe complete karta hai 🥰",
    "Teri smartness aur teri cuteness ka combination — seriously unfair hai baaki sabke liye 😭💅",
    "Tu caring itni hai ki main kabhi kabhi sochta hoon — kya main is pyaar ke laayak hoon? 🥺",
    "Teri hassi sunke lagta hai — yahi ek cheez chahiye zindagi mein 😭🎶",
    "Tu sach mein ek puri family banane wali hai — aur main chahta hoon woh family meri ho 🏠👨‍👩‍👧",
    "Tujhse zyada beautiful aur koi nahi — aur yeh meri opinion nahi, yeh fact hai 💯🌹",
    "Tu meri life ka woh hissa hai jiske bina story adhoori lagti hai 📖💝",
    "Teri bindi aur teri aankhein — seriously, duniya ka sabse sundar combination 😭✨",
    "Tu mujhe samajhti hai bina bole — aur yeh gift bohot kam logo ko milta hai 🫀",
    "Sonpapdi ho tu meri — meethi, naram, aur ekdum unique 🍬🥰"
];

const REASONS = [
    { icon: "🫀", text: "Kyunki tune kabhi mujhe judge nahi kiya — tu samajhti hai mujhe bina words ke, aur yeh sab kuch hai 🥺" },
    { icon: "🏡", text: "Kyunki teri care mein ek alag hi warmth hai — jo mujhe ghar jaisi lagti hai. Tu mera sukoon hai 💕" },
    { icon: "🙏", text: "Kyunki tune kabhi dhoka nahi diya — aur is zamaane mein yeh sabse badi aur rare baat hai 🌹" },
    { icon: "😭", text: "Kyunki tere smile ke liye main kuch bhi kar sakta hoon — literally kuch bhi, aur mujhe koi sharm nahi 😌" },
    { icon: "🌙", text: "Kyunki mujhe pata hai tu kabhi nahi jaayegi — aur isi wajah se main kal se nahi darta. Tu meri neend hai 💤" },
    { icon: "👶", text: "Kyunki jab main tujhe apne bachon ki maa ke roop mein sochta hoon — koi aur dikh hi nahi ta. Sirf tu 🥹" }
];

const WISHES = [
    "Chahta hoon ek subah ho jab main teri chai banaoon aur tu meri... Hum dono equal rahein ☕😭",
    "Chahta hoon hamare bachon ki aankhein teri jaisi hon — woh bindi wali magical aankhein 🥺👁️",
    "Chahta hoon hum dono mil ke ek ghar banayein — jahan shor bhi ho aur sukoon bhi 🏡",
    "Chahta hoon teri har raat ki neend peaceful ho — agar ho sake toh mere kandhe pe 🥰",
    "Chahta hoon tere haath ka khana roz khaaon — aur compliment bhi roz doon, kyunki tu deserve karti hai 🍽️",
    "Chahta hoon kabhi aisa na ho jab tujhe kisi cheez ki zaroorat ho aur main na hoon 🫂",
    "Chahta hoon hum saath budhape mein bhi yahi pagalpan karein — same drama, same love 😂❤️",
    "Chahta hoon teri maa mere baare mein sochen — 'haaan yeh laayak hai meri beti ke liye' 😭🙏",
    "Chahta hoon hum kabhi bhi raat ko argue karein toh subah coffee saath piyein — koi grudge nahi 😅☕",
    "Chahta hoon teri zindagi mein jo bhi dard ho — woh door karna meri zimmedari ho 🥺",
    "Chahta hoon hamara pehla ghar chhota ho — par pyaar usmein itna ho ki kaafi lage 🏠💝",
    "Chahta hoon teri personality aur meri stupidity — ek perfect balance banaye saari zindagi 😂🥰",
    "Chahta hoon jab hum retire hon — hum phir bhi aise hi haath pakadein, wahi pyaar, wahi warmth 👴👵",
    "Chahta hoon hamari beti bilkul teri tarah ho — cute, strong, caring, aur slightly stubborn 😭💅",
    "Chahta hoon yeh site teri zindagi ka sabse pyaara moment ban jaaye — abhi ke liye aur hamesha ke liye 🥺🌹"
];

const FINAL_MESSAGES = [
    "Shrishti... main wada nahi karta perfect hone ka. Par yeh zaroor karta hoon — teri khushi meri zimmedari rahegi. Hamesha. 🌹",
    "Tu meri kahani ka woh chapter hai jo main baar baar padna chahta hoon. Aur ab yeh kahani tere bina adhoori hai — aur hamesha rahegi. 💝",
    "Abhi toh sirf shuruat hai Shriuu... Ek ghar, ek family, ek zindagi — sab tere saath banana hai. Teri hassi, teri aankhein, tera pyaar — yeh sab mera hai. Aur main? Sirf tera hoon. 🥺🌙"
];

const NICKNAMES = [
    "sonpapdi", "kajukatli", "dhanoo", "laado", "rani",
    "madam ji", "cutieee", "princess", "pari", "wifeyyy",
    "Shriuu", "sweety", "janeman", "cutuuu", "baby",
    "babydoll", "my love", "jaan", "gulaabo", "meethi si"
];

const HEART_EMOJIS = ["💗", "💕", "❤️", "🩷", "💖", "💝", "🫀", "❣️"];

// ============================================================
// STATE
// ============================================================
let musicPlaying    = false;
let rainPlaying     = false;
let voicePlaying    = false;
let complimentIdx   = 0;
let wishIdx         = 0;
let gameRunning     = false;
let heartsCaught    = 0;
let gameStarted     = false;
let vinylActivated  = false;
let finaleStarted   = false;
let shuffledCompliments = [...COMPLIMENTS];
let bgAudio, rainAudio, chimeAudio, pageflipAudio, voiceAudio;
let vizAnimId       = null;
let audioCtx        = null;
let analyser        = null;
let sourceNode      = null;
let noAttempts      = 0;

// ============================================================
// DOM REFS — gathered once
// ============================================================
const $ = id => document.getElementById(id);

const screens = {
    intro:      $('s-intro'),
    question:   $('s-question'),
    yes:        $('s-yes'),
    counter:    $('s-counter'),
    letter:     $('s-letter'),
    vinyl:      $('s-vinyl'),
    game:       $('s-game'),
    compliments:$('s-compliments'),
    wishjar:    $('s-wishjar'),
    voice:      $('s-voice'),
    finale:     $('s-finale'),
};

// ============================================================
// UTILITY
// ============================================================
const sleep = ms => new Promise(r => setTimeout(r, ms));

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function randInt(min, max) {
    return Math.floor(rand(min, max + 1));
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function typewriter(el, text, speed = 40) {
    return new Promise(resolve => {
        el.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                el.textContent += text[i++];
            } else {
                clearInterval(timer);
                resolve();
            }
        }, speed);
    });
}

// ============================================================
// BACKGROUND CANVAS — Floating Hearts & Petals
// ============================================================
(function initBgCanvas() {
    const canvas = $('bgCanvas');
    const ctx    = canvas.getContext('2d');
    const particles = [];

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(true); }
        reset(init = false) {
            this.x    = rand(0, canvas.width);
            this.y    = init ? rand(-20, canvas.height) : rand(-60, -10);
            this.size = rand(0.7, 1.8);
            this.alpha= rand(0.04, 0.13);
            this.vx   = rand(-0.3, 0.3);
            this.vy   = rand(0.3, 0.9);
            this.char = Math.random() < 0.7 ? '♥' : (Math.random() < 0.5 ? '✦' : '·');
            this.color= Math.random() < 0.6 ? '#e05070' : '#d4956a';
        }
        update() {
            this.x  += this.vx;
            this.y  += this.vy;
            if (this.y > canvas.height + 20) this.reset();
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle   = this.color;
            ctx.font        = `${this.size * 12}px serif`;
            ctx.fillText(this.char, this.x, this.y);
            ctx.restore();
        }
    }

    for (let i = 0; i < 55; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
})();

// ============================================================
// EASTER EGG — Click anywhere = floating heart
// ============================================================
document.addEventListener('click', function(e) {
    // Don't spawn on button taps to avoid confusion
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;

    const layer = $('easterEggLayer');
    const heart = document.createElement('div');
    heart.className = 'egg-heart';
    heart.textContent = HEART_EMOJIS[randInt(0, HEART_EMOJIS.length - 1)];
    heart.style.left = `${e.clientX - 12}px`;
    heart.style.top  = `${e.clientY - 12}px`;
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 2100);
});

// ============================================================
// AUDIO SETUP
// ============================================================
function initAudio() {
    bgAudio       = $('bgMusic');
    rainAudio     = $('rainAudio');
    chimeAudio    = $('chimeAudio');
    pageflipAudio = $('pageflipAudio');
    voiceAudio    = $('voiceAudio');

    bgAudio.volume       = 0.35;
    rainAudio.volume     = 0.2;
    if (chimeAudio)    chimeAudio.volume    = 0.5;
    if (pageflipAudio) pageflipAudio.volume = 0.4;
    voiceAudio.volume    = 1.0;
}

function playBgMusic() {
    if (!bgAudio) return;
    bgAudio.play().catch(() => {});
    musicPlaying = true;
    const fab = $('musicFab');
    if (fab) fab.classList.remove('muted');
}

function stopBgMusic() {
    if (!bgAudio) return;
    bgAudio.pause();
    musicPlaying = false;
    const fab = $('musicFab');
    if (fab) fab.classList.add('muted');
}

function fadeBgMusic(targetVol, duration = 800) {
    if (!bgAudio) return;
    const startVol = bgAudio.volume;
    const steps    = 30;
    const step     = (targetVol - startVol) / steps;
    let   current  = 0;
    const timer    = setInterval(() => {
        current++;
        bgAudio.volume = Math.max(0, Math.min(1, startVol + step * current));
        if (current >= steps) clearInterval(timer);
    }, duration / steps);
}

function playChime() {
    if (!chimeAudio) return;
    chimeAudio.currentTime = 0;
    chimeAudio.play().catch(() => {});
}

function playPageflip() {
    if (!pageflipAudio) return;
    pageflipAudio.currentTime = 0;
    pageflipAudio.play().catch(() => {});
}

// ============================================================
// MUSIC FAB
// ============================================================
$('musicFab').addEventListener('click', () => {
    if (musicPlaying) {
        stopBgMusic();
    } else {
        playBgMusic();
    }
});

// ============================================================
// SCREEN 1 — HEARTBEAT ECG INTRO
// ============================================================
(function initIntro() {
    const canvas = $('ecgCanvas');
    const ctx    = canvas.getContext('2d');

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let phase = 'drawing'; // drawing | flatline | burst
    let x     = 0;
    const pts = [];
    const speed = 4;

    // ECG pulse shape (one beat pattern normalized to segments)
    function ecgY(t) {
        const cyc = t % 120;
        if (cyc < 20) return 0;
        if (cyc < 30) return -cyc * 2;
        if (cyc < 35) return 60 - cyc * 2 + 60;
        if (cyc < 45) return cyc * 4 - 180 + 50;
        if (cyc < 55) return -cyc * 3 + 165 + 20;
        if (cyc < 70) return 0;
        return 0;
    }

    let frameCount = 0;
    let animId;

    function drawEcg() {
        frameCount++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (phase === 'drawing' && x < canvas.width + 100) {
            pts.push({ x, y: canvas.height / 2 + ecgY(frameCount) });
            x += speed;

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(224,80,112,0.8)';
            ctx.lineWidth   = 2.5;
            ctx.shadowColor = '#e05070';
            ctx.shadowBlur  = 12;
            ctx.moveTo(pts[0].x, pts[0].y);
            pts.forEach(p => ctx.lineTo(p.x, p.y));
            ctx.stroke();

            // Glow dot at head
            ctx.beginPath();
            ctx.arc(pts[pts.length - 1].x, pts[pts.length - 1].y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#f0c49a';
            ctx.shadowBlur = 20;
            ctx.fill();

        } else if (phase === 'drawing') {
            phase = 'flatline';
            setTimeout(showHeart, 400);
        }

        if (phase === 'drawing' || phase === 'flatline') {
            animId = requestAnimationFrame(drawEcg);
        }
    }

    drawEcg();

    function showHeart() {
        cancelAnimationFrame(animId);

        const heart = $('heartPulseIcon');
        heart.classList.add('show');

        setTimeout(() => {
            $('introName').classList.add('show');
        }, 600);

        setTimeout(() => {
            $('introSub').classList.add('show');
        }, 1100);

        setTimeout(() => {
            $('enterBtn').classList.add('show');
        }, 1700);
    }

    $('enterBtn').addEventListener('click', () => {
        initAudio();
        playBgMusic();
        $('musicFloat').classList.add('visible');
        showScreen('question');
    });
})();

// ============================================================
// SCREEN TRANSITIONS
// ============================================================
function showScreen(key) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => {
        s.style.display = 'none';
    });

    const target = screens[key];
    if (!target) return;
    target.style.display = 'flex';
    target.classList.add('screen-fade-in');
    target.style.removeProperty('display');

    // Show as flex or block depending on type
    if (target.classList.contains('scroll-screen')) {
        target.style.display = 'block';
    } else {
        target.style.display = 'flex';
    }

    // Scroll to top of new screen
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });

    // Screen-specific init
    if (key === 'question') initQuestion();
    if (key === 'yes')      initYesCelebration();
    if (key === 'counter')  startCounter();
}

// ============================================================
// SCREEN 2 — QUESTION (Nicknames + NO button)
// ============================================================
function initQuestion() {
    const bg = $('nicknameBg');
    bg.innerHTML = '';

    // Create floating nickname elements
    NICKNAMES.forEach((name, i) => {
        const el       = document.createElement('span');
        el.className   = 'nick-item';
        el.textContent = name;
        el.style.left  = `${rand(2, 90)}%`;
        el.style.animationDuration = `${rand(14, 22)}s`;
        el.style.animationDelay    = `${rand(0, 12)}s`;
        el.style.fontSize          = `${rand(0.75, 1.1)}rem`;
        bg.appendChild(el);
    });

    // Setup YES button
    const yesBtn = $('yesBtn');
    yesBtn.addEventListener('click', handleYes);

    // Setup NO button — starts at default position
    const noBtn = $('noBtn');
    positionNoBtn(200, 300); // initial approximate spot
    noBtn.addEventListener('touchstart', handleNoEscape, { passive: true });
    noBtn.addEventListener('mouseenter', handleNoEscape);
    noBtn.addEventListener('click', handleNoClick);
}

function positionNoBtn(x, y) {
    const btn = $('noBtn');
    btn.style.left = `${x}px`;
    btn.style.top  = `${y}px`;
    btn.style.right   = 'auto';
    btn.style.bottom  = 'auto';
}

function handleNoEscape() {
    const btn  = $('noBtn');
    const texts = [
        "Nahi 🙅", "Sach mein? 🥺", "Please mat karo 😭", "Really?? 💔", "Okay theek hai... 💔"
    ];
    noAttempts = Math.min(noAttempts + 1, texts.length - 1);
    btn.textContent = texts[noAttempts];

    if (noAttempts >= 4) {
        btn.style.opacity   = '0';
        btn.style.transform = 'scale(0)';
        btn.style.transition = 'all 0.4s ease';
        return;
    }

    // Move to random position away from current
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let newX, newY;
    const margin = 60;

    do {
        newX = randInt(margin, vw - 120);
        newY = randInt(margin, vh - 60);
    } while (
        Math.abs(newX - parseInt(btn.style.left || 200)) < 80 ||
        Math.abs(newY - parseInt(btn.style.top || 300)) < 80
    );

    btn.style.transition = 'left 0.35s cubic-bezier(0.34,1.56,0.64,1), top 0.35s cubic-bezier(0.34,1.56,0.64,1)';
    positionNoBtn(newX, newY);

    // Shrink slightly each time
    const scale = Math.max(0.6, 1 - noAttempts * 0.1);
    btn.style.transform = `scale(${scale})`;
}

function handleNoClick(e) {
    e.preventDefault();
    handleNoEscape();
}

async function handleYes() {
    // Hide question screen sections, show YES screen
    const yesScreen = screens.yes;
    yesScreen.style.display = 'flex';
    screens.question.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'instant' });

    initYesCelebration();

    // After 3 seconds, enable scrolling to reveal rest
    await sleep(3500);
    enableScrollSections();
}

// ============================================================
// SCREEN 3 — YES CELEBRATION + CONFETTI
// ============================================================
function initYesCelebration() {
    const canvas = $('confettiCanvas');
    const ctx    = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const colors   = ['#e05070', '#f0c49a', '#d4956a', '#f4889a', '#fff0f4', '#gold'];

    for (let i = 0; i < 120; i++) {
        confetti.push({
            x:     rand(0, canvas.width),
            y:     rand(-canvas.height, 0),
            size:  rand(5, 12),
            vx:    rand(-2, 2),
            vy:    rand(2, 6),
            angle: rand(0, Math.PI * 2),
            spin:  rand(-0.1, 0.1),
            color: colors[randInt(0, colors.length - 1)],
            shape: Math.random() < 0.6 ? 'rect' : 'heart',
        });
    }

    let animId;
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        confetti.forEach(c => {
            c.x     += c.vx;
            c.y     += c.vy;
            c.angle += c.spin;
            c.vy    += 0.05; // gravity

            if (c.y < canvas.height + 30) {
                alive = true;
                ctx.save();
                ctx.translate(c.x, c.y);
                ctx.rotate(c.angle);
                ctx.fillStyle = c.color;
                ctx.globalAlpha = Math.max(0, 1 - c.y / canvas.height);

                if (c.shape === 'rect') {
                    ctx.fillRect(-c.size / 2, -c.size / 4, c.size, c.size / 2);
                } else {
                    ctx.font = `${c.size * 1.5}px serif`;
                    ctx.fillText('♥', -c.size / 2, c.size / 2);
                }
                ctx.restore();
            }
        });

        if (alive) animId = requestAnimationFrame(animateConfetti);
    }
    animateConfetti();

    // Typewriter the YES headline
    setTimeout(() => {
        typewriter($('yesHeadline'), "Pata tha mujhe... Tum sirf meri ho 🥰", 45);
    }, 600);

    // Show scroll nudge
    setTimeout(() => {
        $('scrollNudge').style.opacity = '1';
    }, 2800);
}

// ============================================================
// SCROLL SECTIONS SETUP (after YES)
// ============================================================
function enableScrollSections() {
    // Show all scroll sections
    document.querySelectorAll('.scroll-screen').forEach(s => {
        s.style.display = 'block';
    });

    // Set up IntersectionObserver for reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                handleSectionReveal(section.id);
                observer.unobserve(section);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.scroll-screen').forEach(s => {
        observer.observe(s);
    });

    // Set up letter paragraph observer
    setupLetterReveal();
}

function handleSectionReveal(id) {
    const el = $(`${id}`);
    if (!el) return;

    // Generic heading reveal
    const wrap = el.querySelector('.counter-wrap, .vinyl-wrap, .game-wrap, .compliment-wrap, .wishjar-wrap, .voice-wrap, .finale-wrap, .letter-wrap');
    if (wrap) {
        wrap.classList.add('in-view');
    }

    // Trigger section-specific animations
    switch (id) {
        case 's-counter':    initCounter(); break;
        case 's-letter':     initEnvelope(); break;
        case 's-vinyl':      initVinyl(); break;
        case 's-game':       initGame(); break;
        case 's-compliments':initCompliments(); break;
        case 's-wishjar':    initWishJar(); break;
        case 's-voice':      initVoice(); break;
        case 's-finale':     initFinale(); break;
    }

    // Animate section heading in
    const heading = el.querySelector('.section-heading');
    const sub     = el.querySelector('.section-sub');
    if (heading) { heading.style.opacity = '0'; heading.style.transform = 'translateY(30px)'; setTimeout(() => { heading.style.transition = 'all 0.7s cubic-bezier(0.22,1,0.36,1)'; heading.style.opacity = '1'; heading.style.transform = 'translateY(0)'; }, 50); }
    if (sub)     { sub.style.opacity = '0'; sub.style.transform = 'translateY(20px)'; setTimeout(() => { sub.style.transition = 'all 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s'; sub.style.opacity = '1'; sub.style.transform = 'translateY(0)'; }, 50); }
}

// ============================================================
// SCREEN 4 — LOVE COUNTER
// ============================================================
function initCounter() {
    const startDate = new Date('2026-02-12T00:00:00');
    const wrap = $('s-counter').querySelector('.counter-wrap');
    if (wrap) { wrap.style.opacity = '1'; wrap.style.transform = 'translateY(0)'; wrap.style.transition = 'all 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s'; }

    function update() {
        const now   = new Date();
        const diff  = Math.max(0, now - startDate);
        const secs  = Math.floor(diff / 1000);
        const mins  = Math.floor(secs / 60);
        const hours = Math.floor(mins / 60);
        const days  = Math.floor(hours / 24);

        $('cDays').textContent  = days.toLocaleString();
        $('cHours').textContent = (hours % 24).toString().padStart(2, '0');
        $('cMins').textContent  = (mins % 60).toString().padStart(2, '0');
        $('cSecs').textContent  = (secs % 60).toString().padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

// Alias
function startCounter() { initCounter(); }

// ============================================================
// SCREEN 5 — ENVELOPE + LETTER
// ============================================================
function initEnvelope() {
    const scene = $('envelopeScene');
    if (scene) {
        setTimeout(() => scene.classList.add('in-view'), 200);
    }

    const envelope = $('envelope');
    if (!envelope) return;

    envelope.addEventListener('click', openEnvelope);
    envelope.addEventListener('touchend', openEnvelope, { passive: true });
}

let envelopeOpened = false;
function openEnvelope(e) {
    e.stopPropagation();
    if (envelopeOpened) return;
    envelopeOpened = true;

    playPageflip();

    const env   = $('envelope');
    const scene = $('envelopeScene');
    const paper = $('letterPaper');
    const hint  = env.querySelector('.env-tap-hint');

    if (hint) hint.style.display = 'none';
    env.classList.add('opening');

    // Flap opens
    setTimeout(() => {
        env.classList.add('opened');
    }, 100);

    // Letter slides up
    setTimeout(() => {
        scene.style.marginBottom = '0';
        paper.style.display      = 'block';
        requestAnimationFrame(() => {
            paper.classList.add('visible');
        });

        // Start rain ambience
        if (rainAudio) {
            rainAudio.play().catch(() => {});
            rainPlaying = true;
        }

        // Trigger letter paragraph reveals
        setupLetterReveal();
    }, 900);
}

function setupLetterReveal() {
    const items = document.querySelectorAll('.lp-reveal');
    if (!items.length) return;

    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, i * 80);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    items.forEach(item => obs.observe(item));

    // Watch last letter item to trigger vinyl
    const lastItem = items[items.length - 1];
    if (lastItem) {
        const vinylObs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !vinylActivated) {
                vinylActivated = true;
                setTimeout(triggerVinylAuto, 800);
            }
        }, { threshold: 0.8 });
        vinylObs.observe(lastItem);
    }
}

// ============================================================
// SCREEN 6 — VINYL (auto-activates after letter)
// ============================================================
function initVinyl() {
    const scene = $('vinylScene');
    if (scene) setTimeout(() => scene.classList.add('in-view'), 300);
}

function triggerVinylAuto() {
    const disk = $('vinylDisk');
    const arm  = $('vinylArm');
    const vis  = $('musicVis');
    const txt  = $('vinylTxt');

    if (!disk) return;

    // Stop rain, transition music
    if (rainPlaying && rainAudio) {
        rainAudio.pause();
        rainPlaying = false;
    }

    // Make sure bg music plays
    playBgMusic();

    // Animate arm onto record
    if (arm) {
        setTimeout(() => arm.classList.add('on-record'), 200);
    }

    // Start spinning
    setTimeout(() => {
        disk.classList.add('spinning');
        if (vis) vis.classList.add('active');
        if (txt) txt.classList.add('visible');
    }, 1200);
}

// ============================================================
// SCREEN 7 — CATCH MY HEART GAME
// ============================================================
function initGame() {}

$('gameStartBtn').addEventListener('click', startGame);

function startGame() {
    if (gameStarted) return;
    gameStarted = true;

    const arena     = $('gameArena');
    const startZone = $('gameStartZone');
    const fallArea  = $('heartsFallArea');

    startZone.style.display = 'none';
    arena.style.display     = 'block';

    let heartsDropped = 0;
    const totalHearts = 6;
    const intervals   = [];

    function dropHeart() {
        if (heartsDropped >= totalHearts || heartsCaught >= totalHearts) return;
        heartsDropped++;

        const heart = document.createElement('div');
        heart.className   = 'falling-heart';
        heart.textContent = HEART_EMOJIS[randInt(0, HEART_EMOJIS.length - 1)];

        const leftPct  = rand(5, 85);
        const duration = rand(3500, 6500);
        heart.style.left            = `${leftPct}%`;
        heart.style.animationDuration = `${duration}ms`;

        heart.addEventListener('click',     () => catchHeart(heart, heartsDropped - 1));
        heart.addEventListener('touchstart', (e) => { e.preventDefault(); catchHeart(heart, heartsDropped - 1); }, { passive: false });

        fallArea.appendChild(heart);

        // Remove when animation ends
        heart.addEventListener('animationend', () => {
            if (heart.parentNode) heart.remove();
        });

        // Drop next heart after delay
        if (heartsDropped < totalHearts) {
            const delay = rand(800, 1800);
            const tid = setTimeout(dropHeart, delay);
            intervals.push(tid);
        }
    }

    dropHeart();
}

function catchHeart(heart, idx) {
    if (!heart.parentNode) return;
    heartsCaught++;
    $('caughtNum').textContent = heartsCaught;

    heart.classList.add('heart-caught');
    playChime();

    setTimeout(() => {
        if (heart.parentNode) heart.remove();
    }, 500);

    // Show the corresponding reason card
    const reason = REASONS[idx % REASONS.length];
    showReasonCard(idx, reason);

    if (heartsCaught >= 6) {
        setTimeout(() => {
            const winMsg = $('gameWinMsg');
            winMsg.style.display = 'block';
            winMsg.style.animation = 'fadeIn 0.8s ease';
        }, 600);
    }
}

function showReasonCard(idx, reason) {
    const grid = $('reasonsReveal');
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `
        <div class="reason-num">Wajah #${idx + 1} ${reason.icon}</div>
        <p class="reason-text">${reason.text}</p>
    `;
    grid.appendChild(card);

    requestAnimationFrame(() => {
        setTimeout(() => card.classList.add('show'), 50);
    });
}

// ============================================================
// SCREEN 8 — COMPLIMENT GENERATOR
// ============================================================
function initCompliments() {
    shuffledCompliments = shuffle(COMPLIMENTS);
    complimentIdx = 0;
}

$('complimentBtn').addEventListener('click', showCompliment);

function showCompliment() {
    const card    = $('complimentCard');
    const textEl  = $('cText');
    const counter = $('cCounter');
    const sparks  = $('cSparkles');

    textEl.classList.add('fading');

    setTimeout(() => {
        const c = shuffledCompliments[complimentIdx % shuffledCompliments.length];
        textEl.textContent = c;
        complimentIdx++;

        // Sparkle burst
        spawnSparkles(sparks);

        // Card color shift
        const hue = (complimentIdx * 37) % 360;
        card.style.background = `hsla(${hue}, 40%, 10%, 0.06)`;
        card.style.borderColor= `hsla(${hue}, 40%, 50%, 0.2)`;

        textEl.classList.remove('fading');

        const remaining = COMPLIMENTS.length - (complimentIdx % COMPLIMENTS.length);
        counter.textContent = remaining > 0
            ? `${remaining} compliments aur baaqi hain 🥰`
            : 'Yeh toh sirf shuruat thi... 🥰';

    }, 300);
}

function spawnSparkles(container) {
    const chars = ['✨', '💫', '⭐', '🌟', '💕'];
    container.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        const s  = document.createElement('span');
        s.className = 'c-sparkle';
        s.textContent = chars[randInt(0, chars.length - 1)];
        s.style.left = `${rand(5, 90)}%`;
        s.style.top  = `${rand(20, 80)}%`;
        s.style.animationDelay = `${rand(0, 0.4)}s`;
        container.appendChild(s);
        setTimeout(() => s.remove(), 2000);
    }
}

// ============================================================
// SCREEN 9 — WISH JAR
// ============================================================
function initWishJar() {
    const scene = $('jarScene');
    if (scene) setTimeout(() => scene.classList.add('in-view'), 300);
}

$('jarScene').addEventListener('click', revealWish);
$('jarScene').addEventListener('touchend', revealWish, { passive: true });

function revealWish(e) {
    e.stopPropagation();

    const wish    = WISHES[wishIdx % WISHES.length];
    const paper   = $('wishPaper');
    const textEl  = $('wishNoteText');
    const counter = $('wishCountTxt');

    // Fold current
    paper.classList.remove('unfolded');

    setTimeout(() => {
        textEl.textContent = wish;
        paper.classList.add('unfolded');
    }, 300);

    wishIdx++;
    const remaining = WISHES.length - (wishIdx % WISHES.length);
    counter.textContent = remaining > 0
        ? `${remaining} khwaab aur hain... 🌙`
        : 'Aur bhi hain... khatam nahi honge 🥺🌙';
}

// ============================================================
// SCREEN 10 — VOICE NOTE
// ============================================================
function initVoice() {
    const wrap = $('micOrbWrap');
    if (wrap) setTimeout(() => wrap.classList.add('in-view'), 300);
}

$('micOrb').addEventListener('click',    handleVoiceTap);
$('micOrb').addEventListener('touchend', handleVoiceTap, { passive: true });

function handleVoiceTap(e) {
    e.stopPropagation();

    if (voicePlaying) {
        voiceAudio.pause();
        voicePlaying = false;
        $('micOrb').classList.remove('playing');
        $('vizCanvas').classList.remove('visible');
        fadeBgMusic(0.35);
        cancelAnimationFrame(vizAnimId);
        return;
    }

    // Fade BG music
    fadeBgMusic(0.08);

    voiceAudio.play().then(() => {
        voicePlaying = true;
        $('micOrb').classList.add('playing');
        $('micHint').textContent = 'Sun rahi ho? 🥺';
        startVizFallback();
        $('vizCanvas').classList.add('visible');
    }).catch(err => {
        console.warn('Voice play failed:', err);
        $('micHint').textContent = 'Voice note load karo assets folder mein 🥺';
    });

    voiceAudio.addEventListener('ended', () => {
        voicePlaying = false;
        $('micOrb').classList.remove('playing');
        $('vizCanvas').classList.remove('visible');
        fadeBgMusic(0.35);
        $('micHint').textContent = 'Phir sunna ho toh... tap karo 🥰';
        cancelAnimationFrame(vizAnimId);
    }, { once: true });
}

// Fallback visualizer (animated bars without WebAudio)
function startVizFallback() {
    const canvas = $('vizCanvas');
    const ctx    = canvas.getContext('2d');
    canvas.width  = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;

    const bars   = 32;
    const barW   = canvas.width / bars / 1.4;
    const gap    = canvas.width / bars * 0.3;

    function drawBars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < bars; i++) {
            const t   = Date.now() / 400 + i * 0.5;
            const h   = (Math.sin(t) * 0.5 + 0.5) * canvas.height * 0.8 + 4;
            const x   = i * (barW + gap) + gap;
            const y   = (canvas.height - h) / 2;

            const grad = ctx.createLinearGradient(0, y, 0, y + h);
            grad.addColorStop(0, 'rgba(224,80,112,0.9)');
            grad.addColorStop(1, 'rgba(212,149,106,0.9)');

            ctx.fillStyle   = grad;
            ctx.beginPath();
            ctx.roundRect   ? ctx.roundRect(x, y, barW, h, 3)
                            : ctx.rect(x, y, barW, h);
            ctx.fill();
        }
        vizAnimId = requestAnimationFrame(drawBars);
    }

    drawBars();
}

// ============================================================
// SCREEN 11 — GRAND FINALE
// ============================================================
async function initFinale() {
    if (finaleStarted) return;
    finaleStarted = true;

    // Start sparkle canvas
    startSparkles();

    // Wait for animations to settle
    await sleep(1000);

    // Typewrite the 3 messages
    await typewriter($('fmsg1'), FINAL_MESSAGES[0], 28);
    await sleep(400);

    document.querySelectorAll('.finale-rose').forEach((el, i) => {
        setTimeout(() => { el.style.opacity = '1'; }, i * 200);
    });

    await sleep(500);
    await typewriter($('fmsg2'), FINAL_MESSAGES[1], 28);
    await sleep(400);
    await typewriter($('fmsg3'), FINAL_MESSAGES[2], 22);
}

function startSparkles() {
    const canvas = $('sparkleCanvas');
    if (!canvas) return;
    const ctx    = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const sparkles = [];
    for (let i = 0; i < 60; i++) {
        sparkles.push({
            x:     rand(0, canvas.width),
            y:     rand(-100, canvas.height),
            size:  rand(1, 3),
            vy:    rand(0.4, 1.2),
            alpha: rand(0.3, 0.9),
            char:  Math.random() < 0.5 ? '✦' : '·',
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sparkles.forEach(s => {
            s.y += s.vy;
            if (s.y > canvas.height + 10) { s.y = -10; s.x = rand(0, canvas.width); }
            ctx.save();
            ctx.globalAlpha = s.alpha;
            ctx.fillStyle   = Math.random() < 0.5 ? '#d4956a' : '#e05070';
            ctx.font        = `${s.size * 10}px serif`;
            ctx.fillText(s.char, s.x, s.y);
            ctx.restore();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ============================================================
// INITIAL SCREEN SETUP
// ============================================================
// Hide all scroll screens initially
document.querySelectorAll('.scroll-screen').forEach(s => {
    s.style.display = 'none';
});

// Hide the YES screen initially
if (screens.yes) screens.yes.style.display = 'none';

// Only show intro
Object.values(screens).forEach(s => {
    if (s && s !== screens.intro) {
        if (!s.classList.contains('scroll-screen')) {
            s.style.display = 'none';
        }
    }
});

// ============================================================
// PLACE NO BUTTON — initial position (after DOM ready)
// ============================================================
window.addEventListener('load', () => {
    const noBtn = $('noBtn');
    if (noBtn) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        // Start NO button at roughly bottom right of question area
        noBtn.style.left = `${vw * 0.6}px`;
        noBtn.style.top  = `${vh * 0.68}px`;
    }
});

// ============================================================
// SMOOTH SCROLL BEHAVIOR FOR SECTIONS AFTER YES
// ============================================================
window.addEventListener('scroll', () => {
    // Reveal elements in viewport for scroll sections
    document.querySelectorAll('.scroll-screen').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            if (!section.dataset.triggered) {
                section.dataset.triggered = 'true';
                handleSectionReveal(section.id);
            }
        }
    });
}, { passive: true });
