'use strict';
/* ═══════════════════════════════════════════
   LOVE SITE — script.js
   Senior Dev Clean Build
═══════════════════════════════════════════ */

// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────
const NICKNAMES = [
  'sonpapdi','kajukatli','dhanoo','laado','rani',
  'madam ji','cutieee','princess','pari','wifeyyy',
  'Shriuu','sweety','janeman','cutuuu','baby',
  'babydoll','my love','jaan','gulaabo','meethi si'
];

const NO_TEXTS = [
  'Nahi 🙅','Sach mein?? 🥺','Please... 🙏',
  'Main tumhara Billu hoon 🐱','Main tumhara future hubby hoon 💔',
  'Ek baar soch lo... 🥹','Main roz tumse pyaar karta hoon 💕',
  'Please na meri jaan 😭','Tumhare bina nahi jee sakta 🫀',
  'Yeh sahi nahi hai 💔','Main roh raha hoon ab 😭',
  'Okay last chance... 🙏','Pleaaaase 🥺🥺🥺',
  'Main mar jaaoonga 😭','Theek hai... tum jao... 💔','*button gaya* 🫠'
];

const COMPLIMENTS = [
  'Tumhara khana itna achha hota hai ki lagta hai tumne haath se pyaar dala ho har dish mein 🍽️🥰',
  'Tumhari caring dekh ke lagta hai — is duniya mein koi mujhse zyada lucky nahi 🥺',
  'Tum 10 minute se zyada gussa nahi reh sakti mujhse — yeh tumhari sabse cute weakness hai 😭🥰',
  'Tumhe meri family se utna hi pyaar hai jitna mujhse — yeh baat mujhe sabse zyada touch karti hai 🏠❤️',
  'Tum sirf meri girlfriend nahi ho — tum mera ghar ho 🏡',
  'Tumhari aankhein jhooth nahi bolti — aur wahi mujhe sabse zyada pasand hai tumhare mein 👁️✨',
  'Tum jab muskurati ho toh duniya thodi aur sundar ho jaati hai 🌸',
  'Tumhari patience mujhe roz sharminda karti hai — tum mujhse kahin behtar insaan ho 🥺',
  'Tum khud se itna pyaar karti ho — aur yahi tumhari sabse badi strength hai 💪🌹',
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

const REASONS = [
  { icon:'🫀', text:'Kyunki tumne kabhi mujhe judge nahi kiya — tum samajhti ho mujhe bina words ke, aur yeh sab kuch hai 🥺' },
  { icon:'🏡', text:'Kyunki tumhari care mein ek alag hi warmth hai — jo mujhe ghar jaisi lagti hai. Tum mera sukoon ho 💕' },
  { icon:'🙏', text:'Kyunki tumne kabhi dhoka nahi diya — aur is zamaane mein yeh sabse badi aur rare baat hai 🌹' },
  { icon:'😭', text:'Kyunki tumhari smile ke liye main kuch bhi kar sakta hoon — literally kuch bhi, aur mujhe koi sharm nahi 😌' },
  { icon:'🌙', text:'Kyunki mujhe pata hai tum kabhi nahi jaogi — aur isi wajah se main kal se nahi darta. Tum meri neend ho 💤' },
  { icon:'👶', text:'Kyunki jab main tumhe apne bachon ki maa ke roop mein sochta hoon — koi aur dikh hi nahi ta. Sirf tum 🥹' },
  { icon:'🏠', text:'Kyunki tumhari family values aur ghar ke liye jo dedication hai — yeh mujhe sabse zyada attract karta hai 🥰' },
  { icon:'🌟', text:'Kyunki tumne mere sapnon ko kabhi chhota nahi samjha — hamesha encourage kiya, hamesha saath khadi rahi 💪' },
  { icon:'🌸', text:'Kyunki tumhare saath hone se duniya ke saare problems chhote lag jaate hain — bas tum chahiye 🥺' },
  { icon:'💅', text:'Kyunki tumhari woh self-love wali aadat — mujhe bhi sikhati hai ki khud se pyaar karo. Tum meri teacher bhi ho 😂🥰' }
];

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

const FINAL_MSGS = [
  'Shrishti... main wada nahi karta perfect hone ka. Par yeh zaroor karta hoon — tumhari khushi meri zimmedaari rahegi. Hamesha. 🌹',
  'Tum meri kahani ka woh chapter ho jo main baar baar padna chahta hoon. Aur ab yeh kahani tumhare bina adhoori hai — aur hamesha rahegi. 💝',
  'Abhi toh sirf shuruat hai Shriuu... Ek ghar, ek family, ek zindagi — sab tumhare saath banana hai. Tumhari hassi, tumhari aankhein, tumhara pyaar — yeh sab mera hai. Aur main? Sirf tumhara hoon. Hamesha. 🥺🌙'
];

const HEART_CHARS = ['💖','💖','💖','💕','💝'];

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let noIdx = 0;
let compIdx = 0;
let wishIdx = 0;
let heartsCaught = 0;
let gameActive = false;
let muzOn = false;
let voicePlaying = false;
let vinylStarted = false;
let finaleStarted = false;
let vizRaf = null;

let shuffledComps = shuffle([...COMPLIMENTS]);

// ─────────────────────────────────────────
// DOM HELPERS
// ─────────────────────────────────────────
const $ = id => document.getElementById(id);
const rand = (a,b) => Math.random()*(b-a)+a;
const randInt = (a,b) => Math.floor(rand(a,b+1));
const sleep = ms => new Promise(r => setTimeout(r,ms));

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=randInt(0,i);[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

// ─────────────────────────────────────────
// AUDIO
// ─────────────────────────────────────────
const bgMuz   = $('bgMusic');
const rainMuz = $('rainAudio');
const chime   = $('chimeAudio');
const flip    = $('pageflipAudio');
const voice   = $('voiceAudio');

function setVol(el, v){ if(el) el.volume = Math.max(0,Math.min(1,v)); }
function playAudio(el){ if(el) el.play().catch(()=>{}); }

function startBgMuz(){
  if(!bgMuz||muzOn) return;
  setVol(bgMuz,0.3); playAudio(bgMuz); muzOn=true;
  $('musicFab').classList.remove('muted');
}

function fadeTo(el,target,ms=700){
  if(!el) return;
  const start=el.volume, steps=28, inc=(target-start)/steps;
  let i=0;
  const t=setInterval(()=>{
    i++;
    el.volume=Math.max(0,Math.min(1,start+inc*i));
    if(i>=steps) clearInterval(t);
  },ms/steps);
}

$('musicFab').addEventListener('click',()=>{
  if(muzOn){ bgMuz.pause(); muzOn=false; $('musicFab').classList.add('muted'); }
  else { startBgMuz(); }
});

// ─────────────────────────────────────────
// PAGE SYSTEM
// ─────────────────────────────────────────
const PAGE_IDS = ['intro','question','yes','counter','letter','vinyl','game','compliments','wishjar','voice','finale'];

function goTo(id){
  const cur = document.querySelector('.page.active');
  const nxt = $('page-'+id);
  if(!nxt||!cur||cur===nxt) return;

  cur.classList.add('exit-left');
  cur.classList.remove('active');

  setTimeout(()=>{
    cur.classList.remove('exit-left');
    cur.style.visibility='hidden';
    nxt.style.visibility='';
    nxt.classList.add('active');
    nxt.scrollTop=0;

    // Show nicknames on all pages except intro
    const nickEl = $('nickOverlay');
    if(id==='intro'){ nickEl.classList.add('nick-hidden'); }
    else { nickEl.classList.remove('nick-hidden'); }

    onPageEnter(id);
  },420);
}

function onPageEnter(id){
  switch(id){
    case 'counter':    initCounter();    break;
    case 'letter':     initLetter();     break;
    case 'vinyl':      initVinyl();      break;
    case 'game':       initGame();       break;
    case 'compliments':initCompliments(); break;
    case 'wishjar':    initWishJar();    break;
    case 'voice':      initVoice();      break;
    case 'finale':     initFinale();     break;
  }
}

// ─────────────────────────────────────────
// GLOBAL BG CANVAS — floating hearts/petals
// ─────────────────────────────────────────
(function bgCanvas(){
  const cvs = $('bgCanvas');
  const ctx = cvs.getContext('2d');
  const pts = [];

  function resize(){ cvs.width=innerWidth; cvs.height=innerHeight; }
  resize(); window.addEventListener('resize',resize);

  for(let i=0;i<50;i++){
    pts.push({
      x:rand(0,innerWidth), y:rand(-20,innerHeight),
      vy:rand(0.25,0.75), vx:rand(-0.2,0.2),
      s:rand(8,16), a:rand(0.03,0.1),
      c:Math.random()<0.65?'#e05070':'#d4956a',
      ch:Math.random()<0.7?'♥':'·'
    });
  }

  (function tick(){
    ctx.clearRect(0,0,cvs.width,cvs.height);
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.y>cvs.height+20){ p.y=-10; p.x=rand(0,cvs.width); }
      ctx.save();
      ctx.globalAlpha=p.a; ctx.fillStyle=p.c;
      ctx.font=`${p.s}px serif`; ctx.fillText(p.ch,p.x,p.y);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  })();
})();

// ─────────────────────────────────────────
// NICK OVERLAY — build once, show on all non-intro pages
// ─────────────────────────────────────────
(function buildNicknames(){
  const layer = $('nickOverlay');
  NICKNAMES.forEach((name,i)=>{
    const el = document.createElement('span');
    el.className='nick-item';
    el.textContent=name;
    el.style.left=`${rand(3,88)}%`;
    el.style.animationDuration=`${rand(18,30)}s`;
    el.style.animationDelay=`${rand(0,20)}s`;
    el.style.fontSize=`${rand(1.0,1.4)}rem`;
    layer.appendChild(el);
  });
})();

// ─────────────────────────────────────────
// EASTER EGG — 💖 on any blank tap
// ─────────────────────────────────────────
document.addEventListener('click',e=>{
  if(e.target.tagName==='BUTTON'||e.target.closest('button')) return;
  const layer=$('eggLayer');
  const el=document.createElement('div');
  el.className='egg-heart';
  el.textContent='💖';
  el.style.left=`${e.clientX-12}px`;
  el.style.top=`${e.clientY-12}px`;
  layer.appendChild(el);
  setTimeout(()=>el.remove(),1900);
});

// ─────────────────────────────────────────
// PAGE 1 — ECG INTRO
// ─────────────────────────────────────────
(function initIntro(){
  const cvs=$('ecgCanvas');
  const ctx=cvs.getContext('2d');
  let raf, x=0, pts=[], phase='draw', frame=0;

  function resize(){ cvs.width=innerWidth; cvs.height=innerHeight; }
  resize(); window.addEventListener('resize',resize);

  // Realistic ECG waveform y-offset for given x position in cycle
  function ecgY(pos){
    const cyc=200;
    const t=((pos%cyc)+cyc)%cyc;
    const cy=cvs.height/2;
    // Baseline = cy
    // P wave
    if(t>=25&&t<45){ const p=(t-25)/20; return cy-14*Math.sin(p*Math.PI); }
    // PR
    if(t>=45&&t<60){ return cy; }
    // Q
    if(t>=60&&t<66){ const p=(t-60)/6; return cy+10*p; }
    // R up
    if(t>=66&&t<72){ const p=(t-66)/6; return cy+10-75*p; }
    // R down
    if(t>=72&&t<78){ const p=(t-72)/6; return cy-65+80*p; }
    // S
    if(t>=78&&t<84){ const p=(t-78)/6; return cy+15-15*p; }
    // ST
    if(t>=84&&t<120){ return cy; }
    // T wave
    if(t>=120&&t<155){ const p=(t-120)/35; return cy-24*Math.sin(p*Math.PI); }
    // TP
    return cy;
  }

  const SPEED=3.5;

  function drawFrame(){
    frame++;
    ctx.clearRect(0,0,cvs.width,cvs.height);

    if(phase==='draw'){
      pts.push({x,y:ecgY(x)});
      x+=SPEED;

      // Draw line
      ctx.beginPath();
      ctx.strokeStyle='rgba(224,80,112,0.85)';
      ctx.lineWidth=2.5;
      ctx.shadowColor='#e05070'; ctx.shadowBlur=14;
      ctx.moveTo(pts[0].x,pts[0].y);
      pts.forEach(p=>ctx.lineTo(p.x,p.y));
      ctx.stroke();

      // Moving glow dot
      const last=pts[pts.length-1];
      ctx.beginPath();
      ctx.arc(last.x,last.y,5,0,Math.PI*2);
      ctx.fillStyle='#f0c49a';
      ctx.shadowBlur=22;
      ctx.fill();

      if(x>cvs.width+60) phase='flatline';
      raf=requestAnimationFrame(drawFrame);
    }

    if(phase==='flatline'){
      // Draw static completed ECG briefly then fade
      ctx.globalAlpha=Math.max(0,1-frame*0.03);
      ctx.beginPath();
      ctx.strokeStyle='rgba(224,80,112,0.6)';
      ctx.lineWidth=2;
      ctx.moveTo(pts[0].x,pts[0].y);
      pts.forEach(p=>ctx.lineTo(p.x,p.y));
      ctx.stroke();
      ctx.globalAlpha=1;
      if(frame>40){
        cancelAnimationFrame(raf);
        ctx.clearRect(0,0,cvs.width,cvs.height);
        showIntroHeart();
      } else {
        raf=requestAnimationFrame(drawFrame);
      }
    }
  }

  drawFrame();

  function showIntroHeart(){
    const wrap=$('heartAnimWrap');
    wrap.classList.add('show');

    setTimeout(()=>{
      $('introName').classList.add('show');
    },600);
    setTimeout(()=>{
      $('introSub').classList.add('show');
    },1100);
    setTimeout(()=>{
      $('enterBtn').classList.add('show');
    },1700);
  }
})();

// Enter button
$('enterBtn').addEventListener('click',()=>{
  startBgMuz();
  $('musicFab').classList.add('show');
  $('nickOverlay').classList.remove('nick-hidden');
  goTo('question');
  initPetalCanvas();
});

// ─────────────────────────────────────────
// PAGE 2 — QUESTION (petals + NO button)
// ─────────────────────────────────────────
function initPetalCanvas(){
  const cvs=$('petalCanvas');
  if(!cvs) return;
  const ctx=cvs.getContext('2d');

  function resize(){ cvs.width=innerWidth; cvs.height=innerHeight; }
  resize(); window.addEventListener('resize',resize);

  const pts=[];
  const chars=['🌸','♥','✦','·','❤','•'];

  for(let i=0;i<60;i++){
    pts.push({
      x:rand(0,innerWidth), y:rand(-40,innerHeight),
      vy:rand(0.4,1.0), vx:rand(-0.4,0.4),
      s:rand(10,20), a:rand(0.06,0.2),
      ch:chars[randInt(0,chars.length-1)],
      c:Math.random()<0.6?'#e05070':'#d4956a',
      rot:rand(0,Math.PI*2), rotV:rand(-0.02,0.02)
    });
  }

  (function tick(){
    if(!$('page-question').classList.contains('active')){ return; }
    ctx.clearRect(0,0,cvs.width,cvs.height);
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotV;
      if(p.y>cvs.height+30){ p.y=-20; p.x=rand(0,cvs.width); }
      ctx.save();
      ctx.translate(p.x,p.y); ctx.rotate(p.rot);
      ctx.globalAlpha=p.a; ctx.fillStyle=p.c;
      ctx.font=`${p.s}px serif`; ctx.fillText(p.ch,0,0);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  })();
}

// Position NO button initially
function placeNoBtn(){
  const btn=$('noBtn');
  const vw=innerWidth, vh=innerHeight;
  btn.style.left=`${vw*0.56}px`;
  btn.style.top=`${vh*0.72}px`;
}

window.addEventListener('load',placeNoBtn);

const noBtn=$('noBtn');
noBtn.style.position='fixed';

function moveNoBtn(){
  const vw=innerWidth, vh=innerHeight;
  const curL=parseInt(noBtn.style.left)||vw*0.56;
  const curT=parseInt(noBtn.style.top) ||vh*0.72;
  let nx,ny, tries=0;
  do {
    nx=randInt(30,vw-130);
    ny=randInt(80,vh-80);
    tries++;
  } while(tries<20 && Math.abs(nx-curL)<90 && Math.abs(ny-curT)<90);

  noBtn.style.left=`${nx}px`;
  noBtn.style.top=`${ny}px`;
}

noBtn.addEventListener('mouseenter',()=>{
  if(noIdx>=NO_TEXTS.length-1) return;
  noBtn.textContent=NO_TEXTS[noIdx];
  noIdx++;
  moveNoBtn();
});

noBtn.addEventListener('touchstart',e=>{
  e.preventDefault();
  if(noIdx>=NO_TEXTS.length-1){
    noBtn.style.opacity='0'; noBtn.style.transform='scale(0)';
    noBtn.style.transition='all 0.4s ease';
    return;
  }
  noBtn.textContent=NO_TEXTS[noIdx];
  noIdx++;
  moveNoBtn();
},{passive:false});

noBtn.addEventListener('click',e=>{
  e.preventDefault();
  moveNoBtn();
});

$('yesBtn').addEventListener('click',handleYes);

async function handleYes(){
  goTo('yes');
  await sleep(200);
  const heart=$('cssBigHeart');
  heart.classList.add('show');
  // Confetti
  launchConfetti();
  // YES message typewriter
  await sleep(650);
  typewriter($('yesMsg'),'Pata tha mujhe... Tum sirf meri ho 🥰',42);
  // Show continue after 3s
  await sleep(3000);
  $('yesContinueBtn').classList.remove('hidden');
}

// ─────────────────────────────────────────
// PAGE 3 — CONFETTI
// ─────────────────────────────────────────
function launchConfetti(){
  const cvs=$('confettiCanvas');
  const ctx=cvs.getContext('2d');
  cvs.width=innerWidth; cvs.height=innerHeight;
  const colors=['#e05070','#f0c49a','#d4956a','#f4889a','#b8334f','#fce8ee'];
  const bits=[];

  for(let i=0;i<140;i++){
    bits.push({
      x:rand(0,cvs.width), y:rand(-cvs.height,0),
      vx:rand(-2.5,2.5), vy:rand(2,7),
      w:rand(6,14), h:rand(3,7),
      angle:rand(0,Math.PI*2), spin:rand(-0.12,0.12),
      color:colors[randInt(0,colors.length-1)],
      heart:Math.random()<0.5
    });
  }

  function tick(){
    ctx.clearRect(0,0,cvs.width,cvs.height);
    let alive=false;
    bits.forEach(b=>{
      b.x+=b.vx; b.y+=b.vy; b.angle+=b.spin; b.vy+=0.04;
      if(b.y<cvs.height+20){ alive=true; }
      const alpha=Math.max(0,1-b.y/(cvs.height*0.9));
      ctx.save();
      ctx.translate(b.x,b.y); ctx.rotate(b.angle);
      ctx.globalAlpha=alpha; ctx.fillStyle=b.color;
      if(b.heart){ ctx.font=`${b.w*1.5}px serif`; ctx.fillText('♥',-b.w/2,b.h/2); }
      else { ctx.fillRect(-b.w/2,-b.h/2,b.w,b.h); }
      ctx.restore();
    });
    if(alive) requestAnimationFrame(tick);
  }
  tick();
}

// ─────────────────────────────────────────
// TYPEWRITER
// ─────────────────────────────────────────
function typewriter(el,text,spd=40){
  return new Promise(res=>{
    el.textContent=''; let i=0;
    const t=setInterval(()=>{
      if(i<text.length){ el.textContent+=text[i++]; }
      else { clearInterval(t); res(); }
    },spd);
  });
}

// ─────────────────────────────────────────
// PAGE 4 — COUNTER
// ─────────────────────────────────────────
function initCounter(){
  const start=new Date('2026-02-12T00:00:00');
  function upd(){
    const diff=Math.max(0,Date.now()-start);
    const s=Math.floor(diff/1000);
    const m=Math.floor(s/60);
    const h=Math.floor(m/60);
    const d=Math.floor(h/24);
    $('cDays').textContent=d.toLocaleString();
    $('cHours').textContent=String(h%24).padStart(2,'0');
    $('cMins').textContent=String(m%60).padStart(2,'0');
    $('cSecs').textContent=String(s%60).padStart(2,'0');
  }
  upd(); setInterval(upd,1000);
}

// ─────────────────────────────────────────
// PAGE 5 — LETTER
// ─────────────────────────────────────────
function initLetter(){
  const scene=$('envelopeScene');
  setTimeout(()=>scene.classList.add('show'),200);

  const sealBtn=$('waxSealBtn');
  let opened=false;

  function openLetter(e){
    e.stopPropagation();
    if(opened) return;
    opened=true;

    // Disable hint
    $('envHint').style.opacity='0';

    // Play sound
    if(flip){ flip.currentTime=0; playAudio(flip); }

    // Shake envelope
    const env=$('envelope3d');
    env.style.animation='envShake 0.5s ease';
    env.style.setProperty('--shake','envShake');

    // Add shake keyframe dynamically
    if(!document.getElementById('dynStyles')){
      const st=document.createElement('style');
      st.id='dynStyles';
      st.textContent=`
        @keyframes envShake{
          0%,100%{transform:rotate(0) translateY(0);}
          20%{transform:rotate(-5deg) translateY(-4px);}
          40%{transform:rotate(5deg) translateY(-6px);}
          60%{transform:rotate(-4deg) translateY(-3px);}
          80%{transform:rotate(3deg) translateY(-2px);}
        }
      `;
      document.head.appendChild(st);
    }
    env.style.animation='envShake 0.5s ease';

    setTimeout(()=>{
      // Open flap
      env.classList.add('opened');

      // Wax seal burst
      const wax=$('waxSealBtn');
      wax.style.transform='scale(0) rotate(45deg)';
      wax.style.transition='transform 0.4s var(--spring)';

      // Rain ambience
      if(rainMuz){ setVol(rainMuz,0.18); playAudio(rainMuz); }

      setTimeout(()=>{
        const paper=$('letterPaper');
        paper.style.display='block';
        requestAnimationFrame(()=>{
          paper.classList.add('show');
          setupLetterReveal();
          // Show continue after 2s
          setTimeout(()=>{
            $('letterContinueBtn').classList.remove('hidden');
          },2500);
        });
      },900);
    },550);
  }

  sealBtn.addEventListener('click',openLetter);
  sealBtn.addEventListener('touchend',openLetter,{passive:true});
}

function setupLetterReveal(){
  const items=document.querySelectorAll('.lp-r');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach((en,i)=>{
      if(en.isIntersecting){
        setTimeout(()=>en.target.classList.add('vis'),i*60);
        obs.unobserve(en.target);
      }
    });
  },{threshold:0.1,rootMargin:'0px 0px -20px 0px'});
  items.forEach(el=>obs.observe(el));
}

// ─────────────────────────────────────────
// PAGE 6 — VINYL (auto-starts on enter)
// ─────────────────────────────────────────
function initVinyl(){
  if(vinylStarted) return;
  vinylStarted=true;

  // Stop rain
  if(rainMuz){ rainMuz.pause(); }

  const arm=$('vinylArm');
  const disk=$('vinylDisk');
  const bars=$('musicBars');
  const cap=$('vinylCaption');

  // Move arm to position first
  setTimeout(()=>{ arm.classList.add('on'); },400);

  // Start spinning
  setTimeout(()=>{
    disk.classList.add('spin');
    bars.classList.add('on');
    cap.classList.add('on');
    // Make sure music plays
    startBgMuz();
    fadeTo(bgMuz,0.35);
  },1400);
}

// ─────────────────────────────────────────
// PAGE 7 — GAME
// ─────────────────────────────────────────
function initGame(){}

$('gameStartBtn').addEventListener('click',startGame);

let gameDrops=0;

function startGame(){
  $('gameStart').style.display='none';
  const arena=$('gameArena');
  arena.style.display='block';
  arena.style.animation='fadeIn 0.4s ease';
  gameActive=true;
  dropNextHeart();
}

function dropNextHeart(){
  if(!gameActive||gameDrops>=10) return;

  const fa=$('fallArea');
  const h=document.createElement('div');
  h.className='fall-heart';
  h.textContent=HEART_CHARS[randInt(0,HEART_CHARS.length-1)];
  h.style.left=`${rand(5,80)}%`;
  const dur=rand(3200,6200);
  h.style.animationDuration=`${dur}ms`;
  h.dataset.idx=gameDrops;
  gameDrops++;

  function onCatch(e){
    e.stopPropagation();
    if(h.dataset.caught) return;
    h.dataset.caught='1';
    h.classList.add('caught');
    heartsCaught++;
    $('caughtNum').textContent=heartsCaught;
    if(chime){ chime.currentTime=0; playAudio(chime); }
    showReason(heartsCaught-1);
    setTimeout(()=>h.remove(),500);
    if(gameDrops<10) setTimeout(dropNextHeart, rand(600,1400));
    if(heartsCaught>=10){
      setTimeout(()=>{
        $('gameWin').classList.remove('hidden');
      },600);
    }
  }

  h.addEventListener('click',onCatch);
  h.addEventListener('touchstart',e=>{e.preventDefault();onCatch(e);},{passive:false});
  fa.appendChild(h);

  h.addEventListener('animationend',()=>{
    if(h.parentNode) h.remove();
    if(gameDrops<10&&gameActive) setTimeout(dropNextHeart,rand(400,1000));
  });
}

function showReason(idx){
  const r=REASONS[idx%REASONS.length];
  const grid=$('reasonsGrid');
  const card=document.createElement('div');
  card.className='reason-card';
  card.innerHTML=`<div class="reason-num">Wajah #${idx+1} ${r.icon}</div><p class="reason-text">${r.text}</p>`;
  grid.appendChild(card);
  requestAnimationFrame(()=>setTimeout(()=>card.classList.add('show'),50));
}

// ─────────────────────────────────────────
// PAGE 8 — COMPLIMENTS
// ─────────────────────────────────────────
function initCompliments(){
  shuffledComps=shuffle([...COMPLIMENTS]);
  compIdx=0;

  // Background canvas particles
  const cvs=$('complimentCanvas');
  if(!cvs) return;
  const ctx=cvs.getContext('2d');
  cvs.width=innerWidth; cvs.height=innerHeight;

  const pts=[];
  for(let i=0;i<40;i++){
    pts.push({x:rand(0,cvs.width),y:rand(0,cvs.height),
      s:rand(8,16),a:rand(0.03,0.08),vy:rand(-0.3,0.3),vx:rand(-0.3,0.3),
      c:Math.random()<0.6?'#e05070':'#d4956a',ch:'✦'});
  }

  (function tick(){
    if(!$('page-compliments').classList.contains('active')) return;
    ctx.clearRect(0,0,cvs.width,cvs.height);
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=cvs.width; if(p.x>cvs.width)p.x=0;
      if(p.y<0)p.y=cvs.height; if(p.y>cvs.height)p.y=0;
      ctx.save(); ctx.globalAlpha=p.a; ctx.fillStyle=p.c;
      ctx.font=`${p.s}px serif`; ctx.fillText(p.ch,p.x,p.y);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  })();
}

$('complimentBtn').addEventListener('click',showCompliment);

function showCompliment(){
  const textEl=$('ccText');
  const counter=$('complimentCounter');

  textEl.classList.add('fade');
  setTimeout(()=>{
    const c=shuffledComps[compIdx%shuffledComps.length];
    textEl.textContent=c;
    compIdx++;
    textEl.classList.remove('fade');

    // Sparkle spawn
    const card=$('complimentCard');
    for(let i=0;i<6;i++){
      const sp=document.createElement('span');
      sp.style.cssText=`position:absolute;font-size:${rand(0.9,1.4)}rem;left:${rand(5,88)}%;top:${rand(10,80)}%;animation:eggRise 1.4s ease forwards;pointer-events:none;`;
      sp.textContent=['✨','💫','🌟','💕','🌸'][randInt(0,4)];
      card.appendChild(sp);
      setTimeout(()=>sp.remove(),1500);
    }

    const left=COMPLIMENTS.length-compIdx;
    counter.textContent=left>0?`${left} compliments aur tumhara intezaar kar rahe hain 🥰`:'Tum hamesha itni hi khaas raho 🥰';
  },280);
}

// ─────────────────────────────────────────
// PAGE 9 — WISH JAR
// ─────────────────────────────────────────
function initWishJar(){
  const scene=$('jarScene');
  setTimeout(()=>scene.classList.add('show'),250);
}

const jarScene=$('jarScene');
jarScene.addEventListener('click',openWish);
jarScene.addEventListener('touchend',e=>{ e.preventDefault(); openWish(); },{passive:false});

function openWish(){
  const note=$('wishNote');
  const textEl=$('wishText');
  const counter=$('wishCount');

  note.classList.remove('open');
  setTimeout(()=>{
    textEl.textContent=WISHES[wishIdx%WISHES.length];
    note.classList.add('open');
    wishIdx++;
    const left=WISHES.length-wishIdx%WISHES.length;
    counter.textContent=left>0?`${left} khwaab aur hain... 🌙`:'Aur bhi hain... khatam nahi honge 🥺🌙';
  },320);
}

// ─────────────────────────────────────────
// PAGE 10 — VOICE NOTE
// ─────────────────────────────────────────
function initVoice(){}

const micOrb=$('micOrb');
micOrb.addEventListener('click',handleVoice);
micOrb.addEventListener('touchend',e=>{ e.preventDefault(); handleVoice(); },{passive:false});

function handleVoice(){
  if(voicePlaying){
    voice.pause(); voicePlaying=false;
    micOrb.classList.remove('playing');
    $('vizCanvas').classList.remove('on');
    if(vizRaf){ cancelAnimationFrame(vizRaf); vizRaf=null; }
    fadeTo(bgMuz,0.3);
    return;
  }

  fadeTo(bgMuz,0.07);
  voice.play().then(()=>{
    voicePlaying=true;
    micOrb.classList.add('playing');
    $('micHint').textContent='Sun rahi ho? 🥺';
    $('vizCanvas').classList.add('on');
    startViz();
  }).catch(()=>{
    $('micHint').textContent='Voice note "assets/Shriuu.mp3" add karo 🥺';
  });

  voice.onended=()=>{
    voicePlaying=false;
    micOrb.classList.remove('playing');
    $('vizCanvas').classList.remove('on');
    if(vizRaf){ cancelAnimationFrame(vizRaf); vizRaf=null; }
    fadeTo(bgMuz,0.3);
    $('micHint').textContent='Phir sunna ho toh tap karo 🥰';
  };
}

function startViz(){
  const cvs=$('vizCanvas');
  const ctx=cvs.getContext('2d');
  const dpr=window.devicePixelRatio||1;
  cvs.width=cvs.offsetWidth*dpr;
  cvs.height=cvs.offsetHeight*dpr;

  const bars=30;
  const bw=cvs.width/bars/1.5;
  const gap=cvs.width/bars*0.5;

  function draw(){
    ctx.clearRect(0,0,cvs.width,cvs.height);
    for(let i=0;i<bars;i++){
      const t=Date.now()/380+i*0.6;
      const h=(Math.sin(t)*0.5+0.5)*cvs.height*0.82+4;
      const x=i*(bw+gap)+gap;
      const y=(cvs.height-h)/2;
      const gr=ctx.createLinearGradient(0,y,0,y+h);
      gr.addColorStop(0,'rgba(224,80,112,0.9)');
      gr.addColorStop(1,'rgba(212,149,106,0.9)');
      ctx.fillStyle=gr;
      ctx.beginPath();
      if(ctx.roundRect) ctx.roundRect(x,y,bw,h,3);
      else ctx.rect(x,y,bw,h);
      ctx.fill();
    }
    vizRaf=requestAnimationFrame(draw);
  }
  draw();
}

// ─────────────────────────────────────────
// PAGE 11 — FINALE
// ─────────────────────────────────────────
async function initFinale(){
  if(finaleStarted) return;
  finaleStarted=true;

  // Days counter
  const start=new Date('2026-02-12T00:00:00');
  const d=Math.floor(Math.max(0,Date.now()-start)/86400000);
  $('finaleDays').textContent=d;

  startSparkles();
  await sleep(600);
  await typewriter($('fm1'),FINAL_MSGS[0],26);
  await sleep(350);
  await typewriter($('fm2'),FINAL_MSGS[1],26);
  await sleep(350);
  await typewriter($('fm3'),FINAL_MSGS[2],22);
}

function startSparkles(){
  const cvs=$('sparkleCanvas');
  const ctx=cvs.getContext('2d');
  cvs.width=innerWidth; cvs.height=innerHeight;

  const pts=[];
  for(let i=0;i<55;i++){
    pts.push({x:rand(0,cvs.width),y:rand(-50,cvs.height),
      vy:rand(0.3,1.1),s:rand(6,14),a:rand(0.25,0.85),
      c:Math.random()<0.5?'#d4956a':'#e05070',ch:Math.random()<0.5?'✦':'·'});
  }

  (function tick(){
    ctx.clearRect(0,0,cvs.width,cvs.height);
    pts.forEach(p=>{
      p.y+=p.vy; if(p.y>cvs.height+10){ p.y=-10; p.x=rand(0,cvs.width); }
      ctx.save(); ctx.globalAlpha=p.a; ctx.fillStyle=p.c;
      ctx.font=`${p.s}px serif`; ctx.fillText(p.ch,p.x,p.y);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  })();
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
// All pages hidden except intro
document.querySelectorAll('.page').forEach(p=>{
  if(p.id!=='page-intro') p.style.visibility='hidden';
});

// Position no button on load
window.addEventListener('load',()=>{
  placeNoBtn();
  initIntroOnly();
});

function initIntroOnly(){
  // Nick overlay hidden on intro
  $('nickOverlay').classList.add('nick-hidden');
}
