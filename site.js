// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll?.('.bar i').forEach(b=>b.style.width=b.dataset.w+'%');if(e.target.matches('.bar'))e.target.querySelector('i').style.width=e.target.querySelector('i').dataset.w+'%'}}),{threshold:.15});
document.querySelectorAll('.reveal,.bar').forEach(el=>io.observe(el));

// morph scene
const scene=document.querySelector('.scene');
if(scene){
  const dev=document.querySelector('.device'),crown=document.querySelector('.crown'),
        side=document.querySelector('.side'),prog=document.querySelector('.progress b'),
        h2=document.querySelector('.caption h2'),cp=document.querySelector('.caption p'),
        hand=document.querySelector('.hand'),glow=document.querySelector('.glow'),
        time=document.querySelector('.t span');
  const steps=[
    [0,'A phone is a box.','Rectangles were never designed for the human hand.'],
    [.22,'Now, let it breathe.','The corners soften. The edges dissolve.'],
    [.5,'A sphere. As old as the human grip.','Since the first caveman held a stone, the palm has loved a curve.'],
    [.76,'Flat glass. Domed back.','A true-flat sapphire face. A back that fills the palm.']
  ];
  const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,lerp=(a,b,t)=>a+(b-a)*t;
  let cur=-1;
  function frame(){
    const r=scene.getBoundingClientRect(),p=clamp(-r.top/(r.height-innerHeight));
    const m=ease(clamp((p-.15)/.4));          // box -> sphere
    const s=ease(clamp((p-.68)/.2));          // sphere -> side profile
    const size=Math.min(innerWidth*.7,innerHeight*.52,360);
    const w=lerp(Math.min(230,innerWidth*.55),size,m),h=lerp(Math.min(480,innerHeight*.58),size,m);
    dev.style.setProperty('--w',w+'px');dev.style.setProperty('--h',h+'px');
    dev.style.setProperty('--r',lerp(44,Math.max(w,h)/2,m)+'px');
    dev.style.transform=`rotateY(${m*360}deg) scale(${1-s})`;
    dev.style.opacity=1-s;
    crown.style.opacity=1-m;crown.style.left=`calc(50% + ${w/2-3}px)`;crown.style.top=`calc(50% - ${h*.16}px)`;
    side.style.opacity=s;side.style.transform=`scale(${.85+.15*s})`;
    hand.style.transform=`rotate(${180+p*720}deg)`;
    prog.style.height=p*100+'%';
    glow.style.transform=`scale(${1+m*.3})`;
    let i=0;steps.forEach((st,k)=>{if(p>=st[0])i=k});
    if(i!==cur){cur=i;h2.style.opacity=0;cp.style.opacity=0;setTimeout(()=>{h2.textContent=steps[i][1];cp.textContent=steps[i][2];h2.style.opacity=1;cp.style.opacity=1},180)}
    requestAnimationFrame(frame);
  }
  frame();
  const tick=()=>{const d=new Date();if(time)time.textContent=(d.getHours()%12||12)+':'+String(d.getMinutes()).padStart(2,'0')};
  tick();setInterval(tick,1000);
}
