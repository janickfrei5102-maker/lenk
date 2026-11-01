// Talkarte und Tourenvorschläge für «Lage & Ausflüge».
// Angaben laut Tourenportalen (Stand November 2026). Koordinaten sind grob, die Karte ist eine Skizze.
(function(){
// Projektion: Länge 7.38–7.56 → x 0–900, Breite 46.475–46.395 → y 0–580
const P = (lon, lat) => [Math.round((lon-7.38)*5000), Math.round((46.475-lat)*7250)];

const PLACES = {
  haus:       {n:'Ferienwohnung', p:P(7.452,46.447), home:true},
  lenk:       {n:'Lenk Bahnhof', p:P(7.444,46.457)},
  seeli:      {n:'Lenkerseeli', p:P(7.441,46.468)},
  betelberg:  {n:'Talstation Betelberg', p:P(7.437,46.452)},
  leiterli:   {n:'Leiterli', p:P(7.405,46.433)},
  metschTal:  {n:'Stand-Xpress / Nordic Center', p:P(7.457,46.444)},
  metsch:     {n:'Metsch', p:P(7.48,46.437)},
  buehlberg:  {n:'Bühlberg', p:P(7.47,46.452)},
  metschstand:{n:'Metschstand', p:P(7.505,46.433)},
  hahnenmoos: {n:'Hahnenmoos', p:P(7.523,46.452)},
  geils:      {n:'Geils', p:P(7.545,46.46)},
  simmenfaelle:{n:'Simmenfälle', p:P(7.468,46.42)},
  rezliberg:  {n:'Rezliberg', p:P(7.481,46.409)},
  siebenbrunnen:{n:'Siebenbrunnen', p:P(7.488,46.402)},
  langermatte:{n:'Langermatte', p:P(7.447,46.41)},
  poeschenried:{n:'Pöschenried', p:P(7.43,46.43)},
  iffigfall:  {n:'Iffigfall', p:P(7.418,46.415)},
  iffigenalp: {n:'Iffigenalp', p:P(7.41,46.402)},
  iffigsee:   {n:'Iffigsee', p:P(7.392,46.398)}
};

const TYPES = {familie:'👨‍👩‍👧 Familie', wasser:'💧 Wasser', bahn:'🚡 Bergbahn', sport:'⛰ Sportlich', schnee:'❄️ Schnee'};

const TOURS = [
/* ---------- Sommer ---------- */
{ id:'seeli', s:'sommer', types:['familie','wasser'], t:'Spaziergang zum Lenkerseeli',
  meta:['leicht','kinderwagentauglich'], route:['haus','lenk','seeli'],
  d:'Der kleine See liegt in einem Naturschutzgebiet am nördlichen Dorfrand und ist ein beliebter Ort zum Verweilen. Ideal für einen ersten Abend oder mit kleinen Kindern.',
  start:'Direkt ab Haus durchs Dorf',
  links:[['Lenkerseeli in Google Maps','https://www.google.com/maps/search/?api=1&query=Lenkerseeli+Lenk']] },
{ id:'simmenfaelle', s:'sommer', types:['familie','wasser'], t:'Talweg zu den Simmenfällen',
  meta:['leicht','Rückweg mit Bus'], route:['haus','simmenfaelle'],
  d:'Flach den Talboden hinauf zu den Simmenfällen. Den schönsten Blick auf die Wasserfälle hat man von der Barbarabrücke, wo das Wasser über mehrere Stufen in die Tiefe stürzt. Zurück fährt der Bus ab Hotel Simmenfälle, mit der Simmental Card gratis.',
  start:'Direkt ab Haus',
  links:[['Reportage Beobachter','https://www.beobachter.ch/ausfluge-freizeit/ausflug-ins-berner-oberland-ein-fest-fur-die-simme'],['Simmenfälle in Google Maps','https://www.google.com/maps/search/?api=1&query=Simmenf%C3%A4lle+Lenk']] },
{ id:'siebenbrunnen', s:'sommer', types:['wasser','familie'], t:'Simmenfälle – Siebenbrunnen',
  meta:['ca. 2 h hin und zurück','Bergweg'], route:['simmenfaelle','rezliberg','siebenbrunnen'],
  d:'Vom Hotel Simmenfälle über den Rezliberg zu «d\'Sibe Brünne», der Quelle der Simme. Im Sommer schiessen bis zu 2800 Liter pro Sekunde aus der Felswand.',
  start:'Bus bis «Simmenfälle»',
  links:[['Tourenbeschrieb','https://www.interlaken.swiss/erlebnisse/tour/dsibe-bruenne-eine-kraftquelle']] },
{ id:'metsch-siebenbrunnen', s:'sommer', types:['bahn','wasser'], t:'Metsch – Siebenbrunnen – Simmenfälle',
  meta:['9,2 km','2 h 55','mittel','↑ 279 m ↓ 633 m'], route:['metschTal','metsch','siebenbrunnen','rezliberg','simmenfaelle'],
  d:'Mit dem Stand-Xpress zur Mittelstation Metsch, dann vorbei an der wilden Bummerebach-Schlucht und dem Nessli Beizli unter den Felswänden der Ammertehore zu den Siebenbrunnen. Zum Abschluss kühlt die Gischt an der Barbarabrücke. Die Talstation liegt nur 2 Minuten vom Haus.',
  start:'Stand-Xpress, 2 Min. ab Haus',
  links:[['Tourenbeschrieb Lenk-Simmental','https://lenk-simmental.ch/en/experiences-tours/touren-detailseite/detail/metsch-siebenbrunnen-simmenfalle']] },
{ id:'iffigfall', s:'sommer', types:['wasser','familie'], t:'Iffigenalp – Iffigfall – Lenk',
  meta:['8,8 km','ca. 2 h 30','leicht','meist bergab'], route:['iffigenalp','iffigfall','poeschenried','lenk'],
  d:'Mit dem Postauto hinauf zur Iffigenalp, dann zu Fuss zum Iffigfall, einem der schönsten Wasserfälle im Berner Oberland. Der Bach begleitet euch fast bis ins Dorf.',
  start:'Postauto Lenk – Iffigenalp',
  links:[['Tourenbeschrieb','https://www.interlaken.swiss/erlebnisse/tour/naturschauspiel-iffigfall'],['Fahrplan PostAuto','https://www.postauto.ch']] },
{ id:'trotti', s:'sommer', types:['bahn','familie'], t:'Trotti-Bike vom Betelberg',
  meta:['10,7 km','ca. 30 Min.','ab 10 J. / 125 cm'], route:['leiterli','poeschenried','betelberg'],
  d:'Mit der Gondel aufs Leiterli, Trotti mieten und über Kies- und Asphaltstrassen hinunter, vorbei am Speichersee und der Murmeltier-Höhle, durch Pöschenried und dem Iffigbach entlang. Helm inklusive. Von Pöschenried ist der Iffigfall ein kurzer Abstecher.',
  start:'Gondel Betelberg',
  note:'2026 wird das Bergrestaurant Leiterli neu gebaut, die Trotti-Zeiten konnten eingeschränkt sein. Vorher auf betelberg.ch prüfen.',
  links:[['Tourenbeschrieb','https://lenk-simmental.ch/en/experiences-tours/touren-detailseite/detail/trotti-bike-am-betelberg'],['Betelberg','https://www.betelberg.ch']] },
{ id:'metschstand', s:'sommer', types:['sport'], t:'Höhenwanderung über den Metschstand',
  meta:['9 km','ca. 3 h 15','Bergweg'], route:['buehlberg','hahnenmoos','metschstand','metsch','buehlberg'],
  d:'Rundweg ab Bühlberg über den Alpweg zum Hahnenmoospass und über den Metschstand zurück. Weite Blicke ins Simmental und Richtung Adelboden.',
  start:'Bus bis «Bühlberg»',
  links:[['Tourenbeschrieb','https://www.interlaken.swiss/erlebnisse/tour/hoehenwanderung-ueber-den-metschstand-im-simmental']] },
{ id:'iffigsee', s:'sommer', types:['sport','wasser'], t:'Iffigsee & Wildhornhütte',
  meta:['ca. 14 km','ca. 5 h 30','T3 anspruchsvoll'], route:['iffigenalp','iffigsee'],
  d:'Für Geübte: Von der Iffigenalp in knapp zwei Stunden zum Iffigsee, weiter zur SAC-Wildhornhütte und über das Iffighore zurück. Gutes Schuhwerk und stabiles Wetter sind Pflicht.',
  start:'Postauto Lenk – Iffigenalp',
  links:[['Tourenbeschrieb (PDF)','https://wegwandern.ch/wp-content/uploads/2025/10/Wanderung-Iffigenalp%E2%80%93Iffigsee%E2%80%93Wildhornhuette%E2%80%93Iffighore%E2%80%93Iffigenalp.pdf']] },

/* ---------- Winter ---------- */
{ id:'loipe', s:'winter', types:['schnee','familie'], t:'Loipe Simmenfälle (Nr. 142)',
  meta:['9 km','80 Hm','für Einsteiger'], route:['metschTal','simmenfaelle'],
  d:'Die Loipe führt gleich hinter dem Haus durch, vom Dorf bis zum Restaurant Simmenfälle als Wendepunkt. Langlaufpässe gibt es im Tourist Center, im Nordic Center an der Stand-Xpress-Talstation und in der App langlauf.ch. Mit der Simmental Card vergünstigt.',
  start:'Loipe hinter dem Haus',
  links:[['Loipenbeschrieb','https://www.myswitzerland.com/en-au/experiences/route/loipe-simmenfaelle'],['Sportlichere Rennloipe','https://lenk-simmental.ch/en/experiences-tours/touren-detailseite/detail/rennloipe-lenk-simmenfaelle'],['Langlaufpass','https://www.langlauf.ch']] },
{ id:'winter-simmenfaelle', s:'winter', types:['schnee','familie','wasser'], t:'Winterwanderweg Simmenfälle – Lenk',
  meta:['4,2 km','ca. 1 h','leicht'], route:['simmenfaelle','haus'],
  d:'Mit dem Bus zu den Simmenfällen und über den verschneiten Talboden zurück. Der Weg führt hinter dem Haus vorbei. Er wird nur bei genügend Schnee präpariert.',
  start:'Bus bis «Simmenfälle»',
  links:[['Tourenbeschrieb','https://lenk-simmental.ch/en/experiences-tours/touren-detailseite/detail/simmenfaelle-lenk-1']] },
{ id:'schlitteln', s:'winter', types:['schnee','familie','bahn'], t:'Schlitteln Leiterli – Stoss',
  meta:['Schlittelweg bis ins Tal'], route:['leiterli','betelberg'],
  d:'Mit der Gondel aufs Leiterli und mit dem Schlitten zurück Richtung Tal.',
  start:'Gondel Betelberg',
  links:[['Schlittelweg','https://www.myswitzerland.com/en-us/experiences/route/schlittelweg-leiterlistoss/'],['Betelberg','https://www.betelberg.ch']] },
{ id:'leiterli-tschaette', s:'winter', types:['schnee','bahn'], t:'Winter-Rundweg Leiterli – Tschätte',
  meta:['5 km','ca. 2 h','mittel'], route:['leiterli','poeschenried','leiterli'],
  d:'Oben auf dem Betelberg mit Blick auf Wildstrubel und Plaine Morte, entlang der zerfurchten Gryde und über die stille Alp. Start östlich der Bergstation.',
  start:'Gondel Betelberg',
  links:[['Tourenbeschrieb','https://lenk-simmental.ch/en/experiences-tours/touren-detailseite/detail/rundweg-leiterli-tschaette-leiterli']] },
{ id:'hahnenmoos-geils', s:'winter', types:['schnee','familie','bahn'], t:'Hahnenmoos – Geils',
  meta:['1,7 km','ca. 30 Min.','leicht'], route:['hahnenmoos','geils'],
  d:'Kurzer Winterwanderweg mitten im Skigebiet Adelboden-Lenk, gut kombinierbar mit einem Skitag am Hahnenmoos.',
  start:'Stand-Xpress oder Bus Bühlberg',
  links:[['Tourenbeschrieb','https://lenk-simmental.ch/en/experiences-tours/touren-detailseite/detail/winter-hiking-trail-hahnenmoospass-geils']] },
{ id:'schneeschuh', s:'winter', types:['schnee','sport','wasser'], t:'Schneeschuhtrail zum Iffigfall',
  meta:['Rundtour','4–5 h'], route:['lenk','poeschenried','iffigfall','poeschenried','lenk'],
  d:'Rundtour ab Bahnhof Lenk zum gefrorenen Iffigfall. Vorher das Lawinenbulletin anschauen.',
  start:'Bahnhof Lenk',
  links:[['Tourenbeschrieb','https://wegwandern.ch/wanderung/schneeschuhtour-lenk-iffigfall-schneeschuhtrail/'],['Lawinenbulletin SLF','https://www.slf.ch']] }
];

/* ---------- Karte zeichnen ---------- */
const pt = k => PLACES[k].p;
const path = ks => ks.map((k,i) => (i?'L':'M') + pt(k).join(' ')).join(' ');
const smooth = pts => { let d = `M${pts[0][0]} ${pts[0][1]}`; for (let i=1;i<pts.length;i++){ const [x0,y0]=pts[i-1],[x1,y1]=pts[i]; d += ` Q${x0} ${y0} ${(x0+x1)/2} ${(y0+y1)/2}`; } const l=pts[pts.length-1]; return d+` T${l[0]} ${l[1]}`; };

const simme = smooth([pt('siebenbrunnen'),pt('rezliberg'),pt('simmenfaelle'),[410,320],[372,230],[332,150],pt('seeli'),[296,-10]]);
const iffig = smooth([pt('iffigsee'),pt('iffigenalp'),pt('iffigfall'),pt('poeschenried'),[290,250],[322,160]]);
const peak = (x,y,s=1,n='') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 18 0-22 30 18Z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="m0-22 9 12-5-2-4 5-4-4-6 2Z" fill="var(--snow)"/></g>${n?`<text x="${x}" y="${y+40*s}" text-anchor="middle" class="mp-peak">${n}</text>`:''}`;

function mapSVG(){
  return `<svg class="mp" viewBox="0 0 900 580" role="img" aria-label="Skizze des Tals rund um Lenk mit Ausflugszielen">
  <defs>
    <pattern id="mpForest" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M11 3 5 15h12Z" fill="var(--green-l)" opacity=".35"/></pattern>
    <radialGradient id="mpHigh" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="var(--wood-xl)"/><stop offset="1" stop-color="var(--wood-xl)" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="900" height="580" fill="var(--green-soft)"/>
  <!-- Hänge und Wald -->
  <path d="M0 0H240C220 120 230 200 270 260 220 330 200 420 260 580H0Z" fill="url(#mpForest)"/>
  <path d="M900 0H420C430 100 420 180 440 240 480 300 520 360 600 420 640 470 700 520 700 580H900Z" fill="url(#mpForest)"/>
  <ellipse cx="110" cy="330" rx="170" ry="140" fill="url(#mpHigh)"/>
  <ellipse cx="660" cy="250" rx="220" ry="150" fill="url(#mpHigh)"/>
  <ellipse cx="700" cy="560" rx="260" ry="120" fill="url(#mpHigh)"/>
  ${peak(760,515,1.4,'Wildstrubel')}${peak(615,470,1,'Ammertehore')}${peak(50,450,1.1,'Wildhorn')}${peak(855,60,.9,'Albristhorn')}${peak(90,120,.9,'')}
  <!-- Strassen -->
  <path d="${smooth([[300,-10],pt('lenk'),pt('haus'),[420,330],pt('simmenfaelle')])}" fill="none" stroke="var(--card)" stroke-width="7" stroke-linecap="round"/>
  <path d="${smooth([pt('lenk'),[300,220],pt('poeschenried'),pt('iffigfall'),pt('iffigenalp')])}" fill="none" stroke="var(--card)" stroke-width="5" stroke-linecap="round"/>
  <path d="${smooth([pt('haus'),[420,190],pt('buehlberg')])}" fill="none" stroke="var(--card)" stroke-width="4" stroke-linecap="round"/>
  <!-- Gewässer -->
  <path d="${simme}" fill="none" stroke="var(--water)" stroke-width="4.5" stroke-linecap="round"/>
  <path d="${iffig}" fill="none" stroke="var(--water)" stroke-width="3" stroke-linecap="round"/>
  <ellipse cx="${pt('seeli')[0]}" cy="${pt('seeli')[1]}" rx="18" ry="10" fill="var(--water)"/>
  <ellipse cx="${pt('iffigsee')[0]}" cy="${pt('iffigsee')[1]}" rx="16" ry="9" fill="var(--water)"/>
  <text x="378" y="300" class="mp-water" transform="rotate(62 378 300)">Simme</text>
  <text x="222" y="380" class="mp-water" transform="rotate(-60 222 380)">Iffigbach</text>
  <!-- Bergbahnen -->
  <g class="mp-lift"><path d="M${pt('betelberg').join(' ')}L${pt('leiterli').join(' ')}"/><path d="M${pt('metschTal').join(' ')}L${pt('metsch').join(' ')}"/><path d="M${pt('geils').join(' ')}L${pt('hahnenmoos').join(' ')}"/></g>
  <!-- Dorf -->
  <g opacity=".85">${[[-24,-8],[-8,-16],[10,-6],[-16,8],[4,10],[22,4]].map(([dx,dy])=>`<rect x="${pt('lenk')[0]+dx-6}" y="${pt('lenk')[1]+dy-5}" width="12" height="10" rx="2" fill="var(--wood-l)"/>`).join('')}</g>
  <text x="${pt('lenk')[0]-70}" y="${pt('lenk')[1]-26}" class="mp-town">Lenk i. S.</text>
  <text x="300" y="20" class="mp-small">↑ Zweisimmen</text>
  <text x="890" y="200" text-anchor="end" class="mp-small">Adelboden →</text>
  <!-- Routen -->
  <g class="mp-routes">${TOURS.map(t=>`<path class="mp-route" data-id="${t.id}" d="${path(t.route)}"/>`).join('')}</g>
  <!-- Orte -->
  <g class="mp-pins">${Object.entries(PLACES).map(([k,o])=>{const [x,y]=o.p;
    if(o.home) return `<g class="mp-home" transform="translate(${x} ${y})"><circle r="17" fill="var(--glow)"/><path d="M-8 4 0-6 8 4v6h-16Z" fill="#fff"/><circle r="17" fill="none" stroke="var(--glow)" stroke-width="3" class="mp-ring"/></g><text x="${x+22}" y="${y+5}" class="mp-label mp-label-home">Ferienwohnung</text>`;
    return `<g class="mp-pin" data-place="${k}" transform="translate(${x} ${y})"><circle r="6"/></g><text x="${x+10}" y="${y+4}" class="mp-label" data-place-label="${k}">${o.n}${o.alt?` <tspan class="mp-small">${o.alt}</tspan>`:''}</text>`}).join('')}</g>
  <g transform="translate(830 540)"><circle r="22" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M0-16 6 4 0 0-6 4Z" fill="var(--glow)"/><text y="16" text-anchor="middle" class="mp-small" style="font-weight:700">N</text></g>
  <g transform="translate(24 40)"><path d="M0 0h77" stroke="var(--ink)" stroke-width="3"/><path d="M0-5v10M77-5v10" stroke="var(--ink)" stroke-width="2"/><text x="38" y="-8" text-anchor="middle" class="mp-small">ca. 1 km</text></g>
  </svg>`;
}

/* ---------- UI ---------- */
const host = document.getElementById('tourMap');
if (!host) return;
host.innerHTML = mapSVG();
const svg = host.querySelector('svg');
const list = document.getElementById('tourList'), detail = document.getElementById('tourDetail');
const state = { s: new Date().getMonth() >= 10 || new Date().getMonth() <= 3 ? 'winter' : 'sommer', type: null, sel: null };

function visible(){ return TOURS.filter(t => t.s === state.s && (!state.type || t.types.includes(state.type))); }

function render(){
  document.querySelectorAll('[data-season-btn]').forEach(b => b.setAttribute('aria-pressed', b.dataset.seasonBtn === state.s));
  document.getElementById('typeChips').innerHTML = Object.entries(TYPES)
    .filter(([k]) => TOURS.some(t => t.s === state.s && t.types.includes(k)))
    .map(([k,v]) => `<button class="tchip" data-type="${k}" aria-pressed="${state.type===k}">${v}</button>`).join('');
  const vis = visible();
  if (!vis.find(t => t.id === state.sel)) state.sel = null;
  list.innerHTML = vis.map(t => `<button class="tour${t.id===state.sel?' sel':''}" data-id="${t.id}">
      <b>${t.t}</b><span class="tm">${t.meta.join(' · ')}</span><span class="st">📍 ${t.start}</span></button>`).join('')
    || '<p class="small">Keine Vorschläge für diesen Filter.</p>';
  svg.classList.toggle('winter', state.s === 'winter');
  svg.querySelectorAll('.mp-route').forEach(r => {
    const on = vis.some(t => t.id === r.dataset.id);
    r.classList.toggle('vis', on); r.classList.toggle('sel', r.dataset.id === state.sel);
  });
  const used = new Set((state.sel ? vis.filter(t=>t.id===state.sel) : vis).flatMap(t => t.route));
  svg.querySelectorAll('.mp-pin').forEach(p => p.classList.toggle('dim', !used.has(p.dataset.place)));
  svg.querySelectorAll('[data-place-label]').forEach(p => p.classList.toggle('dim', !used.has(p.dataset.placeLabel)));
  const t = TOURS.find(x => x.id === state.sel);
  detail.innerHTML = t ? `<div class="td fade">
      <div class="td-head"><h3>${t.t}</h3><button class="td-x" aria-label="Schliessen">✕</button></div>
      <div class="td-meta">${t.meta.map(m=>`<span>${m}</span>`).join('')}${t.types.map(k=>`<span class="ty">${TYPES[k]}</span>`).join('')}</div>
      <p>${t.d}</p>
      <p class="small"><b>Start:</b> ${t.start} · <b>Route:</b> ${t.route.filter((k,i,a)=>a.indexOf(k)===i).map(k=>PLACES[k].n).join(' → ')}</p>
      ${t.note?`<p class="td-note">⚠️ ${t.note}</p>`:''}
      <div class="td-links">${t.links.map(([n,u])=>`<a class="btn btn-soft btn-sm" href="${u}" target="_blank" rel="noopener">${n} ↗</a>`).join('')}
        <a class="btn btn-soft btn-sm" href="https://www.sbb.ch" target="_blank" rel="noopener">Fahrplan SBB ↗</a></div>
    </div>` : `<p class="td-empty">👆 Wählt einen Vorschlag aus der Liste oder tippt auf eine Route in der Karte.</p>`;
  detail.querySelector('.td-x')?.addEventListener('click', () => { state.sel = null; render(); });
}

document.addEventListener('click', e => {
  const s = e.target.closest('[data-season-btn]'), ty = e.target.closest('[data-type]'), tr = e.target.closest('.tour'), r = e.target.closest('.mp-route.vis');
  if (s){ state.s = s.dataset.seasonBtn; state.type = null; state.sel = null; render(); }
  if (ty){ state.type = state.type === ty.dataset.type ? null : ty.dataset.type; render(); }
  if (tr){ state.sel = state.sel === tr.dataset.id ? null : tr.dataset.id; render(); if (state.sel && innerWidth < 900) host.scrollIntoView({behavior:'smooth', block:'start'}); }
  if (r){ state.sel = r.dataset.id; render(); }
});
render();
window.LAGE_PLACES = PLACES;
})();
