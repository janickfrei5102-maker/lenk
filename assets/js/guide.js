// Gäste-Handbuch: Suche, Kategorien, Tags, Artikelansicht, Checklisten.
(function(){
const A = window.GUIDE, CATS = window.GUIDE_CATS, IL = window.ILLUS || {};
const byId = Object.fromEntries(A.map(a => [a.id, a]));
const catOf = id => CATS.find(c => c.id === id);
const main = document.getElementById('gMain');
const qIn = document.getElementById('q'), sBox = document.getElementById('searchBox');
const state = { q:'', cat:null, tags:new Set() };

/* ---------- Suche ---------- */
const norm = s => (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ß/g,'ss');
const strip = h => h.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const SYN = { wifi:'wlan', internet:'wlan', muell:'abfall', kehricht:'abfall', heizen:'heiz', warm:'warm', ofen:'ofen', klo:'wc', toilette:'wc', velo:'bike', fahrrad:'bike', kamin:'kamin' };
A.forEach(a => {
  a._text = strip(a.body);
  a._hay = { title:norm(a.title), tags:norm(a.tags.join(' ')), kw:norm(a.keywords+' '+a.summary), body:norm(a._text) };
});
const terms = q => norm(q).split(/[\s,]+/).filter(Boolean).map(t => SYN[t] || t);
function score(a, ts){
  let s = 0;
  for (const t of ts){
    const h = a._hay; let m = 0;
    if (h.title.includes(t)) m += 6;
    if (h.tags.includes(t)) m += 4;
    if (h.kw.includes(t)) m += 3;
    if (h.body.includes(t)) m += 1;
    if (!m) return 0;
    s += m;
  }
  return s;
}
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function hi(text, ts){
  if (!ts.length) return esc(text);
  const n = norm(text); const marks = [];
  ts.forEach(t => { let i = 0; while ((i = n.indexOf(t, i)) > -1){ marks.push([i, i+t.length]); i += t.length; } });
  if (!marks.length) return esc(text);
  marks.sort((x,y)=>x[0]-y[0]);
  let out = '', last = 0;
  marks.forEach(([s,e]) => { if (s < last) return; out += esc(text.slice(last,s)) + '<mark>' + esc(text.slice(s,e)) + '</mark>'; last = e; });
  return out + esc(text.slice(last));
}
function snippet(a, ts){
  const n = norm(a._text);
  for (const t of ts){ const i = n.indexOf(t); if (i > -1){ const s = Math.max(0, i-50); return (s?'… ':'') + hi(a._text.slice(s, i+90), ts) + ' …'; } }
  return '';
}

/* ---------- Seitenleiste ---------- */
const allTags = [...new Set(A.flatMap(a => a.tags))].sort((x,y)=>x.localeCompare(y,'de'));
function renderSide(){
  const ts = terms(state.q);
  const pool = A.filter(a => (!ts.length || score(a,ts)) && [...state.tags].every(t => a.tags.includes(t)));
  document.getElementById('cats').innerHTML =
    `<li><button data-cat="" aria-pressed="${!state.cat}">📖 Alle Themen <span class="n">${pool.length}</span></button></li>` +
    CATS.map(c => `<li><button data-cat="${c.id}" aria-pressed="${state.cat===c.id}">${c.icon} ${c.name} <span class="n">${pool.filter(a=>a.cat===c.id).length}</span></button></li>`).join('');
  document.getElementById('tags').innerHTML = allTags.map(t => `<button class="tag" data-tag="${t}" aria-pressed="${state.tags.has(t)}">${t}</button>`).join('');
}
document.querySelector('.g-side').addEventListener('click', e => {
  const c = e.target.closest('[data-cat]'), t = e.target.closest('[data-tag]');
  if (c){ state.cat = c.dataset.cat || null; toList(); }
  if (t){ const k = t.dataset.tag; state.tags.has(k) ? state.tags.delete(k) : state.tags.add(k); toList(); }
});

/* ---------- Karten ---------- */
const card = (a, ts=[]) => `<a class="acard" href="#${a.id}">
  <div class="top"><span class="e">${a.icon}</span><h3>${hi(a.title, ts)}</h3></div>
  <p>${hi(a.summary, ts)}</p>${ts.length ? (s => s ? `<div class="snip">${s}</div>` : '')(snippet(a, ts)) : ''}
  <div class="mini">${a.illu && IL[a.illu]?.init ? '<span class="badge">✦ interaktiv</span>':''}${a.tags.slice(0,4).map(t=>`<span>#${t}</span>`).join('')}</div></a>`;

/* ---------- Ansichten ---------- */
function filtered(){
  const ts = terms(state.q);
  let list = A.filter(a => (!state.cat || a.cat === state.cat) && [...state.tags].every(t => a.tags.includes(t)));
  if (ts.length) list = list.map(a => [a, score(a, ts)]).filter(x => x[1]).sort((x,y)=>y[1]-x[1]).map(x => x[0]);
  return { list, ts };
}
function renderOverview(){
  const q = ['ankunft','speicheroefen','holzherd','abreise'].map(id => byId[id]);
  main.innerHTML = `<div class="fade-in">
    <div class="quick">${q.map(a=>`<a href="#${a.id}"><span class="e">${a.icon}</span><b>${a.title}</b><small>${a.summary.split('.')[0]}.</small></a>`).join('')}</div>
    ${CATS.map(c => `<section class="cat-sec" style="padding:0"><h2>${c.icon} ${c.name}</h2>
      <div class="cards">${A.filter(a=>a.cat===c.id).map(a=>card(a)).join('')}</div></section>`).join('')}
  </div>`;
}
function renderList(){
  const { list, ts } = filtered();
  const chips = [
    state.q && `<button class="chip-x" data-x="q">«${esc(state.q)}» ✕</button>`,
    state.cat && `<button class="chip-x" data-x="cat">${catOf(state.cat).name} ✕</button>`,
    ...[...state.tags].map(t => `<button class="chip-x" data-x="tag:${t}">#${t} ✕</button>`)
  ].filter(Boolean).join('');
  main.innerHTML = `<div class="fade-in">
    <div class="res-head"><h2>${list.length} ${list.length===1?'Thema':'Themen'}</h2>${chips}</div>
    ${list.length ? `<div class="cards">${list.map(a=>card(a, ts)).join('')}</div>` :
      `<div class="empty"><div class="e">🤷</div><p>Nichts gefunden. Versucht ein anderes Wort oder ruft Andreas an: <a href="tel:+41796582427">079 658 24 27</a></p></div>`}
  </div>`;
  main.querySelectorAll('[data-x]').forEach(b => b.onclick = () => {
    const x = b.dataset.x;
    if (x === 'q'){ state.q = ''; qIn.value = ''; sBox.classList.remove('has'); }
    else if (x === 'cat') state.cat = null;
    else state.tags.delete(x.slice(4));
    toList();
  });
}
function renderArticle(a){
  const order = CATS.flatMap(c => A.filter(x => x.cat === c.id));
  const i = order.indexOf(a), prev = order[i-1], next = order[i+1], c = catOf(a.cat);
  const il = a.illu && IL[a.illu];
  main.innerHTML = `<article class="art fade-in">
    <div class="crumb"><a href="#">Handbuch</a> › <button data-cat="${c.id}">${c.icon} ${c.name}</button>
      <span class="art-tools"><button class="btn btn-soft btn-sm" id="share">🔗 Link</button><button class="btn btn-soft btn-sm" onclick="print()">🖨 Drucken</button></span></div>
    <h1><span>${a.icon}</span>${a.title}</h1>
    <p class="lead">${a.summary}</p>
    <div class="art-tags">${a.tags.map(t=>`<button class="tag" data-tag="${t}">${t}</button>`).join('')}</div>
    ${il ? `<div class="illu-box">${il.svg}${il.controls ? `<div class="ctr">${il.controls}</div>` : ''}</div>` : ''}
    <div class="art-body">${a.body}</div>
    ${a.photos ? `<h3 style="margin-top:2em">Fotos aus dem Haus</h3><div class="photos" data-zoom>${a.photos.map(p=>`<figure><img src="${p.src}" alt="${p.cap}" loading="lazy"><figcaption>${p.cap}</figcaption></figure>`).join('')}</div>` : ''}
    ${a.related ? `<div class="related"><h3>Passt dazu</h3><div class="cards">${a.related.map(id=>byId[id]).filter(Boolean).map(r=>card(r)).join('')}</div></div>` : ''}
    <nav class="pn">${prev ? `<a href="#${prev.id}"><small>← Vorheriges</small>${prev.icon} ${prev.title}</a>` : '<span></span>'}
      ${next ? `<a class="next" href="#${next.id}"><small>Nächstes →</small>${next.icon} ${next.title}</a>` : ''}</nav>
  </article>`;
  if (il && il.init) il.init.call(il, main.querySelector('.illu-box'));
  wireChecklists(main);
  main.querySelector('.crumb [data-cat]').onclick = e => { state.cat = e.currentTarget.dataset.cat; state.tags.clear(); toList(); };
  main.querySelectorAll('.art-tags [data-tag]').forEach(b => b.onclick = () => { state.tags = new Set([b.dataset.tag]); state.cat = null; toList(); });
  const sh = main.querySelector('#share');
  sh.onclick = async () => { const u = location.href; try { if (navigator.share) await navigator.share({title:a.title, url:u}); else { await navigator.clipboard.writeText(u); sh.textContent = '✓ Kopiert'; } } catch(e){} };
  document.title = a.title + ' · Gäste-Handbuch';
}

/* ---------- Checklisten ---------- */
function wireChecklists(root){
  root.querySelectorAll('ul.check[data-cl]').forEach(ul => {
    const key = 'lenk-cl-' + ul.dataset.cl, lis = [...ul.children], boxes = lis.map(li => li.querySelector('input'));
    let saved = []; try { saved = JSON.parse(localStorage.getItem(key) || '[]'); } catch(e){}
    boxes.forEach((b,i) => b.checked = !!saved[i]);
    const bar = document.createElement('div'); bar.className = 'cl-bar';
    bar.innerHTML = '<div class="p"><i></i></div><span class="c"></span><button type="button">zurücksetzen</button>';
    ul.after(bar);
    const up = () => {
      const n = boxes.filter(b=>b.checked).length;
      lis.forEach((li,i) => li.classList.toggle('done', boxes[i].checked));
      bar.querySelector('i').style.width = (n/boxes.length*100) + '%';
      bar.querySelector('.c').textContent = n === boxes.length ? '✓ Alles erledigt' : `${n} von ${boxes.length}`;
      bar.classList.toggle('complete', n === boxes.length);
      lis.forEach((li,i) => { if (li.dataset.room) root.querySelector(`.wp .r[data-room="${li.dataset.room}"]`)?.classList.toggle('done', boxes[i].checked); });
      try { localStorage.setItem(key, JSON.stringify(boxes.map(b=>b.checked))); } catch(e){}
    };
    boxes.forEach(b => b.addEventListener('change', up));
    bar.querySelector('button').onclick = () => { boxes.forEach(b => b.checked = false); up(); };
    up();
  });
}

/* ---------- Routing ---------- */
const hasFilter = () => state.q || state.cat || state.tags.size;
function toList(){
  if (location.hash && location.hash !== '#') history.pushState(null, '', location.pathname + location.search);
  route();
  main.scrollIntoView({behavior:'smooth', block:'start'});
}
function route(){
  const id = decodeURIComponent(location.hash.slice(1));
  renderSide();
  if (id && byId[id]) { renderArticle(byId[id]); }
  else { document.title = 'Gäste-Handbuch · Ferienwohnung Lenk'; hasFilter() ? renderList() : renderOverview(); }
}
addEventListener('hashchange', () => { route(); if (location.hash.length > 1) scrollTo({top: document.querySelector('.g-layout').offsetTop - 70, behavior:'smooth'}); });
addEventListener('popstate', route);

let t;
qIn.addEventListener('input', () => {
  sBox.classList.toggle('has', !!qIn.value);
  clearTimeout(t); t = setTimeout(() => {
    state.q = qIn.value.trim();
    if (location.hash.length > 1) history.replaceState(null, '', location.pathname);
    route();
  }, 120);
});
qIn.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ qIn.value = ''; qIn.dispatchEvent(new Event('input')); }
  if (e.key === 'Enter'){ const f = main.querySelector('.acard'); if (f) location.hash = f.getAttribute('href'); }
});
sBox.querySelector('.clear').onclick = () => { qIn.value = ''; qIn.dispatchEvent(new Event('input')); qIn.focus(); };
document.querySelectorAll('.suggest [data-q]').forEach(b => b.onclick = () => { qIn.value = b.dataset.q; qIn.dispatchEvent(new Event('input')); });
addEventListener('keydown', e => {
  if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)){ e.preventDefault(); qIn.focus(); }
});

/* ---------- Alles drucken ---------- */
document.getElementById('printAll').onclick = () => {
  const order = CATS.flatMap(c => A.filter(x => x.cat === c.id));
  main.classList.add('print-all');
  main.innerHTML = order.map(a => `<article class="art"><h1><span>${a.icon}</span>${a.title}</h1><p class="lead">${a.summary}</p>
    ${a.illu && IL[a.illu] ? `<div class="illu-box">${IL[a.illu].svg}</div>` : ''}<div class="art-body">${a.body}</div></article>`).join('');
  main.querySelectorAll('details').forEach(d => d.open = true);
  main.querySelectorAll('.hh').forEach(s => s.classList.add('lever-open','fire'));
  main.querySelectorAll('.fl').forEach(s => s.classList.add('open'));
  setTimeout(() => { print(); main.classList.remove('print-all'); route(); }, 300);
};

route();
})();
