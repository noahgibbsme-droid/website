
const el=document.querySelector('[data-clock]'),date=document.querySelector('[data-date]');
if(el&&date){const fmt=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});const df=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',day:'2-digit',month:'2-digit',year:'numeric'});function tick(){const now=new Date();el.textContent=fmt.format(now);date.textContent=df.format(now)+' · LDN'}tick();setInterval(tick,1000)}
