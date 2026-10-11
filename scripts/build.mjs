
import fs from 'node:fs';
import path from 'node:path';
const cwd=process.cwd(),pub=path.join(cwd,'public'),photos=path.join(pub,'photos'),dist=path.join(cwd,'dist');
fs.rmSync(dist,{recursive:true,force:true});fs.mkdirSync(dist,{recursive:true});
fs.cpSync(pub,dist,{recursive:true});
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'gallery';
const types=new Set(['.jpg','.jpeg','.png','.webp','.gif','.avif']);
const folders=fs.existsSync(photos)?fs.readdirSync(photos,{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>x.name).sort((a,b)=>a.localeCompare(b)): [];
const data=folders.map(name=>{
 const base=path.join(photos,name);
 const files=fs.readdirSync(base).filter(f=>types.has(path.extname(f).toLowerCase())).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
 return {name,slug:slug(name),images:files.map(file=>{
 const stem=file.slice(0,-path.extname(file).length),sidecar=path.join(base,stem+'.txt');
 const raw=fs.existsSync(sidecar)?fs.readFileSync(sidecar,'utf8').trim():'';
 const lines=raw.split(/\r?\n/),title=lines[0]?.trim()||stem.replace(/[-_]/g,' ');
 const description=raw?lines.slice(1).join('\n').trim():'';
 return {file,title,description,stem};
 })};
});
const header=(depth=0)=>`<header class="subhead"><a class="brandlink" href="${'../'.repeat(depth)}index.html">NOAH GIBBS</a><a href="${'../'.repeat(depth)}index.html">← home</a></header>`;
const doc=(title,body,depth=0,script='')=>`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#ffffff"><title>${esc(title)} — NOAH GIBBS</title><link rel="stylesheet" href="${'../'.repeat(depth)}style.css"></head><body>${body}${script?`<script src="${'../'.repeat(depth)}${script}" defer></script>`:''}</body></html>`;
const copyright=`<footer class="foot">© ${new Date().getFullYear()} NOAH GIBBS · PHOTOGRAPHY</footer>`;
const links=data.map(g=>`<a href="galleries/${encodeURIComponent(g.slug)}/index.html">${esc(g.name.toLowerCase())}</a>`).join('');
const home=`<main class="home"><div class="home-center"><h1 class="brand">NOAH GIBBS</h1><div class="clock" data-clock>00:00:00</div><div class="date" data-date>LDN</div><nav class="nav" aria-label="Gallery navigation">${links}<a href="contact.html">contact</a></nav></div><div class="copyright">© ${new Date().getFullYear()} NOAH GIBBS · PHOTOGRAPHY</div></main>`;
fs.writeFileSync(path.join(dist,'index.html'),doc('Photography',home,0,'clock.js'));
fs.writeFileSync(path.join(dist,'contact.html'),doc('Contact',`${header()}<main class="content contact"><h1>contact</h1><p>For photography bookings, collaborations and enquiries:</p><p><a href="mailto:noahgibbsme@gmail.com">noahgibbsme@gmail.com</a></p></main>${copyright}`));
for(const g of data){
 const folder=path.join(dist,'galleries',g.slug);fs.mkdirSync(folder,{recursive:true});
 const tiles=g.images.map((im,i)=>`<a class="tile" href="${i+1}.html"><img loading="lazy" src="../../photos/${encodeURIComponent(g.name)}/${encodeURIComponent(im.file)}" alt="${esc(im.title)}"><span>${esc(im.title)}</span></a>`).join('');
 const page=`${header(2)}<main class="content"><h1>${esc(g.name.toLowerCase())}</h1><p class="hint">${g.images.length} photograph${g.images.length===1?'':'s'}</p>${g.images.length?`<div class="grid">${tiles}</div>`:'<div class="empty">Photographs coming soon.</div>'}<a class="backtop" href="../../index.html">← back to home</a></main>${copyright}`;
 fs.writeFileSync(path.join(folder,'index.html'),doc(g.name,page,2));
 g.images.forEach((im,i)=>{
  const img=`../../photos/${encodeURIComponent(g.name)}/${encodeURIComponent(im.file)}`;
  const prev=i>0?`<a href="${i}.html">← previous</a>`:'';
  const next=i<g.images.length-1?`<a href="${i+2}.html">next →</a>`:'';
  const body=`${header(2)}<main class="content"><div class="detail"><div><img class="detail-image" src="${img}" alt="${esc(im.title)}"></div><div class="detail-copy"><h1>${esc(im.title)}</h1>${im.description?`<p>${esc(im.description)}</p>`:'<p>Photography by Noah Gibbs.</p>'}<div class="detail-nav">${prev}<a href="index.html">all ${esc(g.name.toLowerCase())}</a>${next}</div></div></div></main>${copyright}`;
  fs.writeFileSync(path.join(folder,`${i+1}.html`),doc(im.title,body,2));
 });
}
console.log(`Built ${data.length} galleries and ${data.reduce((n,g)=>n+g.images.length,0)} image pages.`);
