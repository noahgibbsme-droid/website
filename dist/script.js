const nav=document.querySelector('#nav');
const host=document.querySelector('#galleries');
const box=document.querySelector('#lightbox');
const full=document.querySelector('#full');
const count=document.querySelector('#count');
let current=[],position=0;
function show(i){if(!current.length)return;position=(i+current.length)%current.length;full.src=current[position];full.alt=`Photograph ${position+1}`;count.textContent=`${position+1} / ${current.length}`}
function openViewer(images,i){current=images;show(i);box.hidden=false;document.body.style.overflow='hidden'}
function closeViewer(){box.hidden=true;full.removeAttribute('src');document.body.style.overflow=''}
document.querySelector('#close').onclick=closeViewer;
document.querySelector('#prev').onclick=()=>show(position-1);
document.querySelector('#next').onclick=()=>show(position+1);
box.addEventListener('click',e=>{if(e.target===box)closeViewer()});
document.addEventListener('keydown',e=>{if(box.hidden)return;if(e.key==='Escape')closeViewer();if(e.key==='ArrowLeft')show(position-1);if(e.key==='ArrowRight')show(position+1)});
function tick(){const now=new Date();const dateFmt=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',day:'2-digit',month:'2-digit',year:'numeric'});const timeFmt=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});document.querySelector('#clock').textContent=timeFmt.format(now);document.querySelector('#date').textContent=dateFmt.format(now)+' · LDN';document.querySelector('#year').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',year:'numeric'}).format(now)}
tick();setInterval(tick,1000);
fetch('/galleries.json').then(r=>{if(!r.ok)throw Error('No gallery manifest');return r.json()}).then(galleries=>{
  for(const g of galleries){
    const id='gallery-'+g.name.toLowerCase().replace(/[^a-z0-9]+/g,'-');
    const link=document.createElement('a');link.href='#'+id;link.textContent=g.name;
    nav.insertBefore(link,nav.querySelector('a[href="#contact"]'));
    const section=document.createElement('section');section.className='gallery';section.id=id;
    const heading=document.createElement('h2');heading.textContent=g.name;
    const grid=document.createElement('div');grid.className='photos';
    g.images.forEach((url,i)=>{const img=document.createElement('img');img.src=url;img.alt=`${g.name} photograph ${i+1}`;img.loading='lazy';img.className='thumb';img.tabIndex=0;img.addEventListener('click',()=>openViewer(g.images,i));img.addEventListener('keydown',e=>{if(e.key==='Enter')openViewer(g.images,i)});grid.append(img)});
    section.append(heading,grid);host.append(section);
  }
}).catch(e=>console.error('Gallery loading failed:',e));
