
const body=document.body;
const langWrap=document.querySelector('.lang-wrap');
const langBtn=document.querySelector('.lang-btn');
langBtn?.addEventListener('click',()=>langWrap.classList.toggle('open'));
document.addEventListener('click',e=>{if(langWrap&&!langWrap.contains(e.target))langWrap.classList.remove('open');});
const burger=document.querySelector('.burger'),drawer=document.querySelector('.mobile-drawer'),overlay=document.querySelector('.overlay'),drawerClose=document.querySelector('.drawer-close');
function toggleDrawer(on){if(!drawer)return;drawer.classList.toggle('show',on);overlay.classList.toggle('show',on);body.classList.toggle('lock',on);burger?.setAttribute('aria-expanded',String(on));drawer?.setAttribute('aria-hidden',String(!on));if(on){trapFocus(drawer);} }
burger?.addEventListener('click',()=>toggleDrawer(true));drawerClose?.addEventListener('click',()=>toggleDrawer(false));overlay?.addEventListener('click',()=>toggleDrawer(false));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){toggleDrawer(false);closeModal();}});
function trapFocus(container){const f=[...container.querySelectorAll('a,button,input')];if(!f.length)return;f[0].focus();container.onkeydown=(e)=>{if(e.key!=='Tab')return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}
const faq=[...document.querySelectorAll('.faq-item')];faq.forEach(item=>item.querySelector('button').addEventListener('click',()=>{faq.forEach(i=>i.classList.remove('open'));item.classList.add('open');}));
const modal=document.querySelector('.modal');
function openModal(){modal?.classList.add('show');body.classList.add('lock');modal?.setAttribute('aria-hidden','false');if(modal)trapFocus(modal);}
function closeModal(){modal?.classList.remove('show');body.classList.remove('lock');modal?.setAttribute('aria-hidden','true');}
document.querySelector('.privacy-link')?.addEventListener('click',openModal);
document.querySelector('.modal-x')?.addEventListener('click',closeModal);
document.querySelector('.modal-close')?.addEventListener('click',closeModal);
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
