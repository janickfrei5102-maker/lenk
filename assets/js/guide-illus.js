// Gezeichnete, teils interaktive Illustrationen für das Gäste-Handbuch.
// Jede Illustration: { svg: '<svg…>', controls?: '<html>', init?(host) }
// Farben kommen aus den CSS-Variablen in site.css, damit Hell/Dunkel stimmt.
(function(){
const S = 'class="s"';
const flames = (x,y,sc=1) => `<g transform="translate(${x} ${y}) scale(${sc})">
  <path class="flame" d="M-14 0c-4-14 6-18 4-30 8 6 14 14 12 30Z" fill="var(--glow)"/>
  <path class="flame" d="M-2 0c-6-18 6-24 6-38 10 10 14 24 8 38Z" fill="var(--flame)"/>
  <path class="flame" d="M8 0c0-10 6-14 6-22 6 8 8 14 4 22Z" fill="#ffd36b"/></g>`;
const waves = (x,y,w=80,cls='wave') => `<g transform="translate(${x} ${y})" fill="none" stroke="var(--glow)" stroke-width="3" stroke-linecap="round">
  ${[0,w/2,w].map(dx=>`<path class="${cls}" d="M${dx} 0c-8-8 8-14 0-22s8-14 0-22"/>`).join('')}</g>`;

const ILLUS = {};

/* ---------------- Fensterläden ---------------- */
ILLUS.fensterladen = {
  svg: `<svg class="il fl" viewBox="0 0 420 250" role="img" aria-label="Fensterläden öffnen und arretieren">
  <style>
    .fl .shL{transform-box:view-box;transform-origin:150px 0;transition:transform 1.1s cubic-bezier(.6,0,.3,1)}
    .fl .shR{transform-box:view-box;transform-origin:270px 0;transition:transform 1.1s cubic-bezier(.6,0,.3,1)}
    .fl.open .shL,.fl.open .shR{transform:scaleX(-1)}
    .fl .hook{transition:fill .4s}
    .fl.open .hook{fill:var(--glow)}
    .fl .lbl{opacity:0;transition:opacity .4s .9s}.fl.open .lbl{opacity:1}
  </style>
  <rect width="420" height="250" rx="16" fill="var(--wood-l)"/>
  ${Array.from({length:9},(_,i)=>`<path d="M0 ${28+i*26}H420" stroke="var(--wood)" stroke-width="1.5" opacity=".35"/>`).join('')}
  <rect x="140" y="40" width="140" height="170" rx="4" fill="var(--card)" ${S}/>
  <rect x="150" y="50" width="120" height="150" fill="var(--sky)"/>
  <path d="M150 170l30-40 22 24 28-44 40 60v30H150Z" fill="var(--green-l)" opacity=".7"/>
  <path d="M202 154l28-44 14 20-10-4-8 10Z" fill="#fff" opacity=".9"/>
  <path d="M210 50v150M150 125h120" stroke="var(--card)" stroke-width="6"/>
  <rect x="150" y="50" width="120" height="150" fill="none" ${S}/>
  <rect x="130" y="210" width="160" height="12" rx="3" fill="var(--wood)" ${S}/>
  <circle class="hook s" cx="78" cy="125" r="7" fill="var(--card)"/>
  <circle class="hook s" cx="342" cy="125" r="7" fill="var(--card)"/>
  ${['shL','shR'].map((c,k)=>`<g class="${c}"><rect x="${150+k*60}" y="50" width="60" height="150" rx="3" fill="var(--green)" ${S}/>
    ${Array.from({length:11},(_,i)=>`<path d="M${156+k*60} ${62+i*12}h48" stroke="#000" stroke-opacity=".25" stroke-width="2.5"/>`).join('')}</g>`).join('')}
  <g class="lbl"><text x="78" y="152" text-anchor="middle" class="t">arretieren</text><text x="342" y="152" text-anchor="middle" class="t">arretieren</text></g>
  </svg>`,
  controls: `<button class="btn btn-soft btn-sm" data-act="toggle">Läden öffnen</button>`,
  init(host){
    const svg=host.querySelector('svg'),b=host.querySelector('[data-act=toggle]');
    b.onclick=()=>{const o=svg.classList.toggle('open');b.textContent=o?'Läden schliessen':'Läden öffnen'};
    setTimeout(()=>{svg.classList.add('open');b.textContent='Läden schliessen'},700);
  }
};

/* ---------------- Parkieren ---------------- */
ILLUS.parkieren = {
  svg: `<svg class="il pk" viewBox="0 0 460 300" role="img" aria-label="Schema Parkplätze">
  <style>
    .pk .snow{opacity:0;transition:opacity .5s}.pk.winter .snow{opacity:1}
    .pk .car{transition:transform .6s}
  </style>
  <defs><pattern id="pkHatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0v10" stroke="var(--glow)" stroke-width="3" opacity=".5"/></pattern></defs>
  <rect width="460" height="300" rx="16" fill="var(--green-soft)"/>
  <rect x="0" y="252" width="460" height="38" fill="var(--steel)" opacity=".55"/>
  <path d="M10 271H450" stroke="#fff" stroke-width="3" stroke-dasharray="18 14"/>
  <text x="20" y="286" class="tw" style="font-weight:600">Oberriedstrasse → Dorf</text>
  <rect x="24" y="30" width="150" height="110" rx="6" fill="var(--wood-l)" ${S}/>
  <path d="M24 30h150M99 30v110" stroke="var(--wood)" stroke-width="2" opacity=".6"/>
  <text x="99" y="90" text-anchor="middle" class="t">Haus</text>
  <rect x="192" y="50" width="120" height="90" rx="4" fill="url(#pkHatch)" ${S}/>
  <text x="252" y="88" text-anchor="middle" class="t">Garagen</text>
  <text x="252" y="104" text-anchor="middle" class="tm">vermietet</text>
  <rect x="200" y="148" width="104" height="100" rx="6" fill="none" stroke="var(--glow)" stroke-width="2.5" stroke-dasharray="7 6"/>
  <path d="M252 236v-70m-10 12 10-12 10 12" stroke="var(--glow)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="252" y="200" text-anchor="middle" class="t" style="fill:var(--warn-ink)">freihalten</text>
  <rect x="24" y="156" width="160" height="88" rx="8" fill="var(--wood-xl)" ${S}/>
  <text x="104" y="174" text-anchor="middle" class="tm">Kiesplatz / Wiese</text>
  ${[46,112].map(x=>`<g class="car" transform="translate(${x} 186)"><rect width="52" height="34" rx="9" fill="var(--green)" ${S}/><rect x="10" y="6" width="32" height="22" rx="5" fill="var(--sky)" opacity=".8"/></g>`).join('')}
  <g transform="translate(140 226)"><circle r="11" fill="var(--ok)"/><path d="m-5 0 3 4 7-8" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
  <rect x="330" y="170" width="112" height="76" rx="8" fill="var(--card)" ${S}/>
  ${[344,374,404].map(x=>`<rect x="${x}" y="182" width="24" height="30" rx="3" fill="var(--steel-d)"/>`).join('')}
  <text x="386" y="230" text-anchor="middle" class="tm">Container</text><text x="386" y="242" text-anchor="middle" class="tm">öffentlich</text>
  <g class="snow"><path d="M330 168c10-26 30-30 44-18 10-16 32-12 36 8" fill="var(--snow)" ${S}/><text x="380" y="140" text-anchor="middle" class="t">Schneehaufen</text><text x="380" y="155" text-anchor="middle" class="tm">nicht davor parkieren</text></g>
  <g class="snow" fill="var(--snow)">${Array.from({length:18},(_,i)=>`<circle cx="${(i*53)%440+12}" cy="${(i*37)%140+12}" r="${2+(i%3)}"/>`).join('')}</g>
  </svg>`,
  controls: `<div class="seg" role="group" aria-label="Jahreszeit"><button data-s="sommer" aria-pressed="true">☀️ Sommer</button><button data-s="winter" aria-pressed="false">❄️ Winter</button></div>`,
  init(host){
    const svg=host.querySelector('svg');
    host.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{host.querySelectorAll('[data-s]').forEach(x=>x.setAttribute('aria-pressed',x===b));svg.classList.toggle('winter',b.dataset.s==='winter')});
  }
};

/* ---------------- Wegweiser: Was ist wo ---------------- */
const ROOMS = {
  kueche:{n:'Küche',e:'🍳',items:['Schlüsselbrett neben der Spüle (Kammerschlüssel ganz unten)','Unter der Spüle: Gebührensäcke 17/35 l und Reinigungsmittel','Holzschublade neben dem Holzherd','Küchenschrank: Anzündwürfel und Streichhölzer','Vorräte: Salz, Zucker, Mehl, Öl, Pasta, Reis, Tee, Kaffee …','Eckbank bei der Tür: trockene, schmutzige Lappen','Fondueset, Raclette-Ofen, Delizio-Maschine']},
  stube:{n:'Stube',e:'🛋',items:['Fernseher mit Mi TV Box (HDMI 2)','Stecker für TV und WLAN','Speicherofen unter den Fenstern','Steuergerät über dem Sofa, hinter dem Vorhang','Cheminée','Bettsofa für 1–2 Personen']},
  schlaf:{n:'Schlafzimmer',e:'🛏',items:['Je ein Speicherofen mit eigener Steuerung','Altes Schlafzimmer: Bettdecken fürs Bettsofa im kleinen braunen Schrank neben dem Bett','Grosser Schlafzimmerschrank unten: Ersatz-Bettwäsche (Duvet 160×240, Kissen 60×90)','Kleines Schlafzimmer: Laden beim grossen Fenster schliessbar','Kleiner Heizlüfter']},
  bad:{n:'Bad',e:'🛁',items:['Unterste Schublade: Küchenlappen und Geschirrtücher','Regler Bodenheizung rechts beim Reingehen','Fernbedienung Handtuchtrockner auf der Ablage über dem WC']},
  laube:{n:'Laube',e:'🚪',items:['Aus der Küche hinaus in die Laube','Links durch die Tür geht es in die Dili']},
  dili:{n:'Dili (Heuboden)',e:'🌾',items:['Weisser Schrank: WC-Papier, Küchenpapier','Weisser Schrank: Putzkessel und Putzlappen','Grösserer Holzvorrat','Windelständer für gebrauchte Lappen und Tücher','Lichtschalter gleich bei der Tür']},
  kammer:{n:'Kammer',e:'🔧',items:['Kleine Werkstatt unter der Stube, Zugang von aussen','Schlüssel: ganz unten am Schlüsselbrett in der Küche','Ski und Snowboards','Recycling: Glas, Metall, Karton, Papier','2 Metallkessel für kalte Asche']},
  stall:{n:'Stall & Hühnerstall',e:'🏚',items:['Gartentisch, Stühle, Liegestuhl','Grill und Sonnenschirm','Platz für Bikes und Ski']},
  draussen:{n:'Draussen',e:'🌲',items:['Container ca. 100 m Richtung Dorf','Kiesplatz zum Parkieren','Langlaufloipe und Winterwanderweg hinter dem Haus']}
};
const TILES = [
  ['dili',20,20,140,78],['laube',180,20,150,78],['stall',350,20,150,78],
  ['bad',20,118,140,90],['kueche',180,118,150,90],['stube',350,118,150,90],
  ['draussen',20,228,140,78],['schlaf',180,228,150,78],['kammer',350,228,150,78]
];
ILLUS.wegweiser = {
  svg: `<svg class="il ww" viewBox="0 0 520 326" role="img" aria-label="Schematischer Wegweiser durchs Haus">
  <style>
    .ww .room{cursor:pointer}
    .ww .room rect{fill:var(--card);transition:fill .2s,stroke .2s}
    .ww .room:hover rect{fill:var(--wood-xl)}
    .ww .room.sel rect{fill:var(--glow);stroke:var(--glow)}
    .ww .room.sel text{fill:#fff}
    .ww .room:focus{outline:none}.ww .room:focus-visible rect{stroke:var(--green);stroke-width:4}
  </style>
  <path d="M160 59h20M255 98v20M330 163h20" stroke="var(--wood)" stroke-width="4" stroke-dasharray="2 7" stroke-linecap="round"/>
  <path d="M425 208v20" stroke="var(--wood)" stroke-width="4" stroke-dasharray="2 7" stroke-linecap="round"/>
  <text x="432" y="222" class="tm">darunter</text>
  ${TILES.map(([k,x,y,w,h])=>`<g class="room" data-room="${k}" tabindex="0" role="button" aria-label="${ROOMS[k].n}">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" ${S}/>
    <text x="${x+w/2}" y="${y+h/2-4}" text-anchor="middle" style="font-size:22px">${ROOMS[k].e}</text>
    <text x="${x+w/2}" y="${y+h/2+20}" text-anchor="middle" class="t">${ROOMS[k].n}</text></g>`).join('')}
  </svg>`,
  controls: `<div class="room-panel" aria-live="polite"></div><p class="small" style="margin:6px 0 0">Schema der Wege, kein Grundriss. Raum antippen.</p>`,
  init(host){
    const panel=host.querySelector('.room-panel'),rooms=host.querySelectorAll('.room');
    const sel=k=>{rooms.forEach(r=>r.classList.toggle('sel',r.dataset.room===k));const R=ROOMS[k];
      panel.innerHTML=`<b>${R.e} ${R.n}</b><ul>${R.items.map(i=>`<li>${i}</li>`).join('')}</ul>`;};
    rooms.forEach(r=>{r.onclick=()=>sel(r.dataset.room);r.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();sel(r.dataset.room)}}});
    sel('kueche');
  }
};

/* ---------------- Boiler ---------------- */
ILLUS.boiler = {
  svg: `<svg class="il bo" viewBox="0 0 420 260" role="img" aria-label="Warmwasser im 200-Liter-Boiler">
  <style>.bo .lvl{transition:y .6s,height .6s}.bo .drop{animation:drip 1s linear infinite}.bo .drop:nth-child(2){animation-delay:.33s}.bo .drop:nth-child(3){animation-delay:.66s}
  .bo .moon{opacity:.25;transition:opacity .4s}.bo.night .moon{opacity:1}</style>
  <defs><linearGradient id="boG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--water-hot)"/><stop offset="1" stop-color="var(--water)"/></linearGradient>
  <clipPath id="boC"><rect x="66" y="36" width="108" height="188" rx="44"/></clipPath></defs>
  <rect width="420" height="260" rx="16" fill="var(--bg-alt)"/>
  <rect x="60" y="30" width="120" height="200" rx="50" fill="var(--card)" ${S}/>
  <g clip-path="url(#boC)"><rect class="lvl" x="60" y="36" width="120" height="188" fill="url(#boG)"/></g>
  <rect x="60" y="30" width="120" height="200" rx="50" fill="none" ${S}/>
  <text x="120" y="250" text-anchor="middle" class="t">200 Liter</text>
  <text class="pct" x="120" y="136" text-anchor="middle" style="font:700 22px Fraunces,serif;fill:#fff">100%</text>
  <path d="M180 70h80v30" fill="none" stroke="var(--steel-d)" stroke-width="6" stroke-linecap="round"/>
  <path d="M244 100h32l-4 10h-24Z" fill="var(--steel)" ${S}/>
  <g class="drops" fill="var(--water)">${[250,260,270].map(x=>`<circle class="drop" cx="${x}" cy="118" r="3"/>`).join('')}</g>
  <g class="moon" transform="translate(350 60)"><path d="M10-18a20 20 0 1 0 14 34 16 16 0 1 1-14-34Z" fill="#f4d27a" ${S}/><text x="0" y="40" text-anchor="middle" class="tm">lädt nachts</text></g>
  <text class="msg t" x="300" y="200" text-anchor="middle"></text>
  </svg>`,
  controls: `<label class="rng">Duschen heute: <b class="n">0</b><input type="range" min="0" max="6" value="0"></label>`,
  init(host){
    const svg=host.querySelector('svg'),r=host.querySelector('input'),n=host.querySelector('.n'),lvl=svg.querySelector('.lvl'),pct=svg.querySelector('.pct'),msg=svg.querySelector('.msg'),drops=svg.querySelector('.drops');
    const up=()=>{const v=+r.value,p=Math.max(0,1-v*.22);n.textContent=v;lvl.setAttribute('y',36+(1-p)*188);lvl.setAttribute('height',p*188);
      pct.textContent=Math.round(p*100)+'%';msg.textContent=p===0?'Leer, jetzt duscht es kalt 🥶':p<.35?'Knapp, sparsam duschen!':'Genug warmes Wasser';
      msg.style.fill=p<.35?'var(--warn-ink)':'var(--ink)';drops.style.opacity=v?1:0;svg.classList.toggle('night',p<.35)};
    r.oninput=up;up();
  }
};

/* ---------------- Speicherofen ---------------- */
ILLUS.speicherofen = {
  svg: `<svg class="il so" viewBox="0 0 420 260" role="img" aria-label="Elektro-Speicherofen mit Drehregler">
  <style>.so .knob{transform-box:fill-box;transform-origin:center;transition:transform .4s}.so .heat g{transition:opacity .4s}</style>
  <rect width="420" height="260" rx="16" fill="var(--bg-alt)"/>
  <rect x="0" y="232" width="420" height="28" fill="var(--wood-l)"/>
  <g class="heat">${[0,1,2,3,4].map(i=>`<g style="opacity:0">${waves(100+i*52,70,0)}</g>`).join('')}</g>
  <rect x="70" y="80" width="280" height="140" rx="12" fill="var(--enamel)" ${S}/>
  <path d="M82 92h256" stroke="#fff" stroke-opacity=".25" stroke-width="5" stroke-linecap="round"/>
  <rect x="84" y="186" width="200" height="24" rx="4" fill="var(--wood-xl)" ${S}/>
  ${Array.from({length:18},(_,i)=>`<path d="M${94+i*10.5} 190v16" stroke="var(--ink)" stroke-width="2" opacity=".55"/>`).join('')}
  <rect x="290" y="226" width="12" height="10" fill="var(--ink)"/><rect x="118" y="226" width="12" height="10" fill="var(--ink)"/>
  <g class="knob"><circle cx="316" cy="198" r="15" fill="var(--wood-xl)" ${S}/><path d="M316 198v-11" ${S}/></g>
  <circle class="hl on" cx="316" cy="198" r="24" fill="none" stroke="var(--glow)" stroke-width="3"/>
  <text x="316" y="160" text-anchor="middle" class="tw">Drehregler</text>
  <text class="lv" x="160" y="140" text-anchor="middle" style="font:700 30px Fraunces,serif;fill:#fff">0</text>
  </svg>`,
  controls: `<label class="rng">Stufe: <b class="n">0</b><input type="range" min="0" max="5" value="0"></label>
  <div class="presets"><button data-v="5">Stube: Maximum</button><button data-v="3">Schlafzimmer: 3–4</button><button data-v="0">Aus / Abreise SZ</button></div>`,
  init(host){
    const r=host.querySelector('input'),n=host.querySelector('.n'),k=host.querySelector('.knob'),lv=host.querySelector('.lv'),hs=host.querySelectorAll('.heat>g');
    const name=v=>v==5?'Max':v;
    const up=()=>{const v=+r.value;n.textContent=name(v);lv.textContent=name(v);k.style.transform=`rotate(${-130+v*52}deg)`;hs.forEach((g,i)=>g.style.opacity=i<v?1:0)};
    r.oninput=up;host.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{r.value=b.dataset.v;up()});up();
  }
};

/* ---------------- Steuergerät A/B ---------------- */
ILLUS.steuergeraet = {
  svg: `<svg class="il sg" viewBox="0 0 420 250" role="img" aria-label="Steuergerät mit Tasten A und B">
  <style>.sg .key{cursor:pointer}.sg .key rect{fill:var(--card);transition:fill .2s}.sg .key.on rect{fill:var(--glow)}.sg .key.on text{fill:#fff}
  .sg .led{fill:var(--line)}.sg .key.on .led{fill:#ffe08a}</style>
  <rect width="420" height="250" rx="16" fill="var(--wood-l)"/>
  ${Array.from({length:7},(_,i)=>`<path d="M${30+i*60} 0V250" stroke="var(--wood)" stroke-width="1.5" opacity=".35"/>`).join('')}
  <rect x="120" y="24" width="180" height="200" rx="16" fill="var(--card)" ${S}/>
  <circle cx="210" cy="92" r="42" fill="var(--bg-alt)" ${S}/>
  <path d="M210 92l-18-24" ${S}/>
  <circle cx="210" cy="92" r="5" fill="var(--ink)"/>
  <g transform="translate(244 54)"><rect x="-9" y="-2" width="18" height="14" rx="3" fill="var(--glow)"/><path d="M-5-2v-5a5 5 0 0 1 10 0v5" fill="none" stroke="var(--glow)" stroke-width="2.5"/></g>
  <text x="210" y="152" text-anchor="middle" class="tm">Temperatur nicht verstellen</text>
  ${['A','B'].map((t,i)=>`<g class="key" data-k="${t}" role="button" tabindex="0" aria-label="Taste ${t}"><rect x="${148+i*68}" y="166" width="56" height="42" rx="10" ${S}/><circle class="led" cx="${176+i*68}" cy="176" r="3.5"/><text x="${176+i*68}" y="200" text-anchor="middle" style="font:700 18px Inter;fill:var(--ink)">${t}</text></g>`).join('')}
  </svg>`,
  controls: `<div class="sg-out" aria-live="polite"></div>`,
  init(host){
    const out=host.querySelector('.sg-out'),keys=host.querySelectorAll('.key'),st={A:false,B:false};
    const T={
      '':['ok','Grundeinstellung','Der Ofen lädt nachts auf und gibt die Wärme tagsüber langsam ab. So soll es normalerweise sein.'],
      'A':['info','Schnell entladen','Gibt jetzt rasch viel Wärme ab, der Speicher ist dafür bald leer. Gut für einen gemütlichen Abend in der Stube. Geht nur, wenn der Ofen geladen ist.'],
      'B':['warn','Tagesheizung','Heizt direkt mit Strom und füllt den Speicher nachts nicht. Braucht viel Strom, bitte wieder ausschalten.'],
      'AB':['warn','Schnell entladen + Tagesheizung','Wird schnell warm, braucht aber sehr viel Strom. Dürft ihr nutzen, wenn es wirklich nötig ist. Danach beide Tasten wieder aus.']};
    const up=()=>{keys.forEach(k=>k.classList.toggle('on',st[k.dataset.k]));const t=T[(st.A?'A':'')+(st.B?'B':'')];
      out.className='sg-out '+t[0];out.innerHTML=`<b>${t[1]}</b> ${t[2]}`};
    keys.forEach(k=>{const f=()=>{st[k.dataset.k]=!st[k.dataset.k];up()};k.onclick=f;k.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();f()}}});up();
  }
};

/* ---------------- Bodenheizung (Thermostat) ---------------- */
ILLUS.bodenheizung = {
  svg: `<svg class="il bh" viewBox="0 0 420 260" role="img" aria-label="Thermostat der Bodenheizung">
  <style>.bh .ptr{transform-box:view-box;transform-origin:210px 130px;transition:transform .5s}.bh .led{transition:fill .3s}</style>
  <rect width="420" height="260" rx="16" fill="var(--bg-alt)"/>
  ${Array.from({length:6},(_,i)=>`<path d="M0 ${i*52}H420M${i*84} 0V260" stroke="var(--line)" stroke-width="2"/>`).join('')}
  <rect x="100" y="20" width="220" height="220" rx="14" fill="var(--card)" ${S}/>
  <circle class="led" cx="128" cy="46" r="6" fill="var(--line)"/>
  <circle cx="210" cy="130" r="66" fill="var(--bg)" ${S}/>
  ${[[-135,'❄'],[-67,'10'],[0,'20'],[67,'30'],[120,'○']].map(([a,t])=>{const r=88,x=210+r*Math.sin(a*Math.PI/180),y=130-r*Math.cos(a*Math.PI/180);return `<text x="${x}" y="${y+5}" text-anchor="middle" class="t">${t}</text>`}).join('')}
  <path d="M168 79a66 66 0 0 1 84 0" fill="none" stroke="var(--glow)" stroke-width="6" opacity=".25"/>
  <g class="ptr"><path d="M210 130V74" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/></g>
  <circle cx="210" cy="130" r="9" fill="var(--ink)"/>
  <text class="val" x="210" y="226" text-anchor="middle" style="font:700 16px Inter;fill:var(--ink)"></text>
  </svg>`,
  controls: `<div class="presets"><button data-t="4">❄ Frostschutz (Abreise)</button><button data-t="18">15–20 °C normal</button><button data-t="26">25 °C+ beim Duschen</button></div>`,
  init(host){
    const p=host.querySelector('.ptr'),led=host.querySelector('.led'),val=host.querySelector('.val');
    const set=t=>{const a=t<=5?-135:-67+(t-10)*6.7;p.style.transform=`rotate(${a}deg)`;led.style.fill=t<=5?'var(--water)':'#e5483a';val.textContent=t<=5?'Frostschutz':`ca. ${t} °C`;
      host.querySelectorAll('[data-t]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.t===t))};
    host.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>set(+b.dataset.t));set(18);
  }
};

/* ---------------- Holzherd (Schritt für Schritt) ---------------- */
ILLUS.holzherd = {
  svg: `<svg class="il hh" viewBox="0 0 440 300" role="img" aria-label="Holzherd in der Küche">
  <style>
    .hh .lever{transform-box:view-box;transform-origin:350px 104px;transition:transform .7s cubic-bezier(.5,0,.3,1.3)}
    .hh.lever-open .lever{transform:rotate(-160deg)}
    .hh .lid{transform-box:view-box;transform-origin:112px 100px;transition:transform .6s}
    .hh.lid-open .lid{transform:rotate(-38deg)}
    .hh .fire,.hh .wood,.hh .smoke,.hh .timer,.hh .room-smoke{opacity:0;transition:opacity .5s}
    .hh.fire .fire,.hh.wood .wood,.hh.fire .wood{opacity:1}
    .hh.fire.lever-open .smoke{opacity:1}
    .hh.timer-on .timer{opacity:1}
    .hh .ashdoor{transform-box:view-box;transform-origin:106px 0;transition:transform .6s}
    .hh.ash-open .ashdoor{transform:scaleX(.18)}
    .hh .knob{transition:transform .5s}.hh.slider-open .knob{transform:translateX(22px)}
    .hh .lbl-open{opacity:0}.hh.lever-open .lbl-open{opacity:1}.hh.lever-open .lbl-closed{opacity:0}
    .hh .lbl-open,.hh .lbl-closed{transition:opacity .4s}
  </style>
  <rect width="440" height="300" rx="16" fill="var(--bg-alt)"/>
  <g opacity=".7">${Array.from({length:12},(_,i)=>`<path d="M${i*40} 0v108" stroke="var(--line)" stroke-width="2"/>`).join('')}${[36,72].map(y=>`<path d="M0 ${y}h440" stroke="var(--line)" stroke-width="2"/>`).join('')}</g>
  <rect x="384" y="0" width="22" height="104" fill="var(--steel)" ${S}/>
  <g class="smoke" fill="var(--steel)">${[0,1,2].map(()=>`<circle class="puff" cx="395" cy="6" r="9"/>`).join('')}</g>
  <rect x="70" y="102" width="320" height="14" rx="3" fill="var(--steel-d)" ${S}/>
  <g class="lid"><rect x="112" y="92" width="80" height="11" rx="3" fill="var(--ink)"/><rect x="140" y="86" width="24" height="7" rx="3" fill="var(--steel)"/></g>
  <g class="lever"><path d="M350 104h30" stroke="var(--steel-d)" stroke-width="6" stroke-linecap="round"/><circle cx="380" cy="104" r="6" fill="var(--ink)"/></g>
  <circle cx="350" cy="104" r="5" fill="var(--ink)"/>
  <text x="350" y="66" text-anchor="middle" class="tm lbl-closed">Kamin zu</text>
  <text x="320" y="66" text-anchor="middle" class="t lbl-open" style="fill:var(--ok)">Kamin offen</text>
  <rect x="80" y="116" width="300" height="168" rx="6" fill="var(--wood-xl)" ${S}/>
  <rect x="104" y="134" width="94" height="62" rx="6" fill="var(--steel-d)" ${S}/>
  <rect x="114" y="142" width="74" height="46" rx="4" fill="#1d1715"/>
  <g class="wood"><rect x="122" y="172" width="58" height="10" rx="4" fill="var(--wood)"/><rect x="128" y="164" width="46" height="9" rx="4" fill="var(--wood-l)"/><rect x="146" y="158" width="10" height="8" fill="#fff"/></g>
  <g class="fire">${flames(151,176,.85)}</g>
  <rect x="104" y="206" width="94" height="66" rx="6" fill="#1d1715"/>
  <rect x="112" y="214" width="78" height="30" rx="2" fill="#5c5754"/>
  <g class="ashdoor"><rect x="106" y="206" width="92" height="66" rx="6" fill="var(--steel-d)" ${S}/>
    <rect x="128" y="248" width="48" height="12" rx="6" fill="var(--bg)" ${S}/>
    <g class="knob"><circle cx="138" cy="254" r="7" fill="var(--glow)"/><path d="M138 250c-3 3 0 5 0 7 2-1 3-4 0-7Z" fill="#fff"/></g></g>
  <rect x="216" y="134" width="144" height="138" rx="6" fill="var(--card)" ${S}/>
  <rect x="232" y="150" width="112" height="60" rx="4" fill="var(--bg-alt)" ${S}/>
  <path d="M236 230h104" stroke="var(--steel-d)" stroke-width="7" stroke-linecap="round"/>
  <g class="timer"><rect x="236" y="244" width="104" height="22" rx="11" fill="var(--glow)"/><text x="288" y="260" text-anchor="middle" class="tw">⏱ 5 Minuten</text></g>
  ${[['lever',350,104,28],['lid',152,96,34],['fire',151,165,40],['ash',151,239,42],['slider',152,254,22]].map(([k,x,y,r])=>`<circle class="hl hl-${k}" cx="${x}" cy="${y}" r="${r}" fill="none" stroke="var(--glow)" stroke-width="4"/>`).join('')}
  </svg>`,
  steps: [
    {t:'Kamin öffnen',d:'Hebel hinten rechts auf der Arbeitsfläche zu euch ziehen. Zeigt er zur Küchenmitte, ist der Kamin offen.',c:'lever-open',hl:'lever'},
    {t:'Holz einlegen',d:'Schwere Gusseisen-Klappe öffnen, zwei Scheite hinein und einen Anzündwürfel darauf.',c:'lever-open lid-open wood',hl:'lid'},
    {t:'Anzünden',d:'Würfel anzünden, zwei weitere Scheite darüber legen, Klappe schliessen.',c:'lever-open fire',hl:'fire'},
    {t:'Luft geben',d:'Das Türchen mit der Ascheschublade unter der Feuerstelle 5 Minuten offen lassen. Geduld!',c:'lever-open fire ash-open timer-on',hl:'ash'},
    {t:'Schieber auf',d:'Türchen schliessen und den Schieber (Plastikteil mit Flämmchen) ganz öffnen. Damit regelt ihr später die Hitze.',c:'lever-open fire slider-open',hl:'slider'},
    {t:'Nachlegen',d:'Zieht der Rauch gut ab, nach und nach Holz nachlegen, durch die Feuertür oder über die Klappe.',c:'lever-open fire slider-open lid-open',hl:'lid'},
    {t:'Feuer aus: Kamin zu',d:'Ist das Feuer erloschen, den Riegel von euch wegdrücken. Zeigt er zur Wand, ist der Kamin zu.',c:'',hl:'lever'}
  ]
};
ILLUS.holzherd.controls = `<div class="stepper"><div class="st-dots"></div><div class="st-text" aria-live="polite"></div>
  <div class="st-nav"><button class="btn btn-soft btn-sm" data-d="-1">← Zurück</button><button class="btn btn-primary btn-sm" data-d="1">Weiter →</button></div></div>`;
ILLUS.holzherd.init = function(host){
  const svg=host.querySelector('svg'),steps=this.steps,dots=host.querySelector('.st-dots'),txt=host.querySelector('.st-text');
  let i=0;
  dots.innerHTML=steps.map((s,k)=>`<button aria-label="Schritt ${k+1}: ${s.t}">${k+1}</button>`).join('');
  const go=k=>{i=Math.max(0,Math.min(steps.length-1,k));const s=steps[i];
    svg.setAttribute('class','il hh '+s.c);
    svg.querySelectorAll('.hl').forEach(h=>h.classList.toggle('on',h.classList.contains('hl-'+s.hl)));
    dots.querySelectorAll('button').forEach((b,k)=>{b.classList.toggle('on',k===i);b.classList.toggle('done',k<i)});
    txt.innerHTML=`<b>Schritt ${i+1}: ${s.t}</b><span>${s.d}</span>`;
    host.querySelectorAll('[data-d]').forEach(b=>b.disabled=(b.dataset.d<0&&i===0)||(b.dataset.d>0&&i===steps.length-1));
    document.querySelectorAll('[data-step-link]').forEach(li=>li.classList.toggle('cur',+li.dataset.stepLink===i));};
  dots.querySelectorAll('button').forEach((b,k)=>b.onclick=()=>go(k));
  host.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>go(i+ +b.dataset.d));
  document.querySelectorAll('[data-step-link]').forEach(li=>li.onclick=()=>{go(+li.dataset.stepLink);host.scrollIntoView({behavior:'smooth',block:'center'})});
  go(0);
};

/* ---------------- Asche ---------------- */
ILLUS.asche = {
  svg: `<svg class="il as" viewBox="0 0 420 220" role="img" aria-label="Nur kalte Asche in den Metallkessel">
  <style>.as .arr{animation:nudge 1.6s ease-in-out infinite}@keyframes nudge{50%{transform:translateX(8px)}}</style>
  <rect width="420" height="220" rx="16" fill="var(--bg-alt)"/>
  <rect x="30" y="110" width="110" height="50" rx="6" fill="var(--steel-d)" ${S}/>
  <path d="M38 118c20-12 40 4 60-4s30 2 34 6v30H38Z" fill="#9b9590"/>
  <text x="85" y="186" text-anchor="middle" class="t">Ascheschublade</text>
  <g class="arr"><path d="M156 135h52m-12-12 12 12-12 12" fill="none" stroke="var(--glow)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
  <path d="M230 90h90l-10 90h-70Z" fill="var(--steel)" ${S}/>
  <path d="M236 92c10-26 68-26 78 0" fill="none" ${S}/>
  <path d="M236 110h78" stroke="var(--ink)" stroke-width="1.5" opacity=".3"/>
  <text x="275" y="200" text-anchor="middle" class="t">Metallkessel (Kammer)</text>
  <g transform="translate(370 60)"><rect x="-8" y="0" width="16" height="70" rx="8" fill="var(--card)" ${S}/><circle cy="80" r="13" fill="var(--water)" ${S}/><rect x="-3" y="44" width="6" height="34" fill="var(--water)"/>
  <text y="-10" text-anchor="middle" class="t" style="fill:var(--water)">kalt!</text></g>
  <g transform="translate(85 60)"><circle r="20" fill="var(--warn-bg)" stroke="var(--warn-ink)" stroke-width="3"/>${flames(0,10,.5)}<path d="M-14-14 14 14" stroke="var(--warn-ink)" stroke-width="3.5" stroke-linecap="round"/></g>
  </svg>`
};

/* ---------------- Cheminée ---------------- */
ILLUS.cheminee = {
  svg: `<svg class="il ch" viewBox="0 0 420 300" role="img" aria-label="Cheminée mit Kaminklappe und Frischluftklappen">
  <style>
    .ch .damper{transform-box:view-box;transform-origin:210px 142px;transition:transform .6s}
    .ch.open .damper{transform:rotate(-70deg)}
    .ch .fire,.ch .smoke-up,.ch .smoke-room,.ch .warm{opacity:0;transition:opacity .5s}
    .ch.lit .fire{opacity:1}.ch.lit.open .smoke-up{opacity:1}.ch.lit:not(.open) .smoke-room{opacity:1}
    .ch.flap .warm{opacity:1}
    .ch .flapA{transition:fill .3s}.ch.flap .flapA{fill:var(--glow)}
  </style>
  <rect width="420" height="300" rx="16" fill="var(--bg-alt)"/>
  <path d="M110 10h200l20 76H90Z" fill="var(--card)" ${S}/>
  <g class="smoke-up" fill="var(--steel)">${[0,1,2].map(()=>`<circle class="puff" cx="210" cy="40" r="8"/>`).join('')}</g>
  <rect x="76" y="86" width="268" height="18" rx="3" fill="var(--wood)" ${S}/>
  <rect x="84" y="104" width="252" height="160" rx="8" fill="var(--wood-xl)" ${S}/>
  ${Array.from({length:28},(_,i)=>{const x=98+(i%9)*28+(Math.floor(i/9)%2)*14,y=118+Math.floor(i/9)*44;return `<ellipse cx="${x}" cy="${y}" rx="12" ry="9" fill="var(--wood-l)" opacity=".8"/>`}).join('')}
  <path d="M130 264V146q80-28 160 0v118Z" fill="#1d1715" ${S}/>
  <g class="damper"><path d="M170 142h80" stroke="var(--steel)" stroke-width="7" stroke-linecap="round"/></g>
  <g class="fire">${flames(210,250,1.2)}</g>
  <rect x="160" y="246" width="100" height="10" rx="4" fill="var(--wood)"/>
  <g class="smoke-room" fill="var(--steel)">${[0,1,2].map((_,k)=>`<circle class="puff" cx="${190+k*20}" cy="150" r="10"/>`).join('')}</g>
  <rect x="64" y="264" width="292" height="12" rx="3" fill="var(--steel-d)"/>
  <rect class="flapB s" x="196" y="280" width="28" height="10" rx="2" fill="var(--glow)"/>
  <rect class="flapA s" x="306" y="230" width="22" height="26" rx="2" fill="var(--card)"/>
  <g class="warm">${waves(304,226,24)}</g>
  <text x="210" y="298" text-anchor="middle" class="tm" dy="-14" dx="80">Frischluft Feuer</text>
  <text x="364" y="216" text-anchor="middle" class="tm">Warmluft</text>
  <text class="state tw" x="210" y="200" text-anchor="middle"></text>
  </svg>`,
  controls: `<div class="presets"><button data-c="open">Kamin öffnen</button><button data-c="lit">🔥 Feuer</button><button data-c="flap">Warmluftklappe</button></div><div class="ch-msg small" aria-live="polite"></div>`,
  init(host){
    const svg=host.querySelector('svg'),msg=host.querySelector('.ch-msg'),st=svg.querySelector('.state');
    const up=()=>{const o=svg.classList.contains('open'),l=svg.classList.contains('lit'),f=svg.classList.contains('flap');
      host.querySelectorAll('[data-c]').forEach(b=>b.setAttribute('aria-pressed',svg.classList.contains(b.dataset.c)));
      st.textContent=o?'Kamin offen':'Kamin zu';
      msg.innerHTML=l&&!o?'<b style="color:var(--warn-ink)">Stopp! Rauch in der Stube.</b> Immer zuerst den Kamin öffnen.':l&&!f?'Brennt das Feuer richtig, die seitliche Warmluftklappe öffnen.':l?'Perfekt, gemütlich warm. Danach den Kamin wieder schliessen.':o?'Kamin offen, jetzt darf das Feuer kommen.':'Ausgangslage: Kamin zu.'};
    host.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{svg.classList.toggle(b.dataset.c);up()});up();
  }
};

/* ---------------- Winter-Abreise: Heizplan ---------------- */
const WROOMS=[
  ['kueche','Küche',20,20,235,118,'Kleiner Speicherofen','Mitte, Stufe 2–3','S3','offen'],
  ['stube','Stube',265,20,235,118,'Speicherofen','Stufe 2–3, A+B aus','','offen'],
  ['sz1','Schlafzimmer bei der Küche',20,152,155,128,'Heizlüfter','sicher hinstellen','S2','zu'],
  ['sz2','Schlafzimmer bei der Stube',183,152,155,128,'Heizlüfter','mittlere Stufe','S4','zu'],
  ['bad','Bad',346,152,154,128,'Elektroheizung','in die Mitte','S1','offen']];
ILLUS.winterplan = {
  svg: `<svg class="il wp" viewBox="0 0 520 300" role="img" aria-label="Heizplan für die Abreise im Winter">
  <style>.wp .r rect.b{fill:var(--card);transition:fill .3s}.wp .r.done rect.b{fill:var(--green-soft)}.wp .ck{opacity:0;transition:opacity .3s}.wp .r.done .ck{opacity:1}</style>
  ${WROOMS.map(([k,n,x,y,w,h,dev,set,ad,door])=>`<g class="r" data-room="${k}">
    <rect class="b s" x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/>
    <text x="${x+12}" y="${y+22}" class="t">${n.split(' bei ')[0]}</text>${n.includes(' bei ')?`<text x="${x+12}" y="${y+38}" class="tm">bei ${n.split(' bei ')[1]}</text>`:''}
    <text x="${x+12}" y="${y+60}" class="t" style="font-weight:500">${dev}</text>
    <text x="${x+12}" y="${y+76}" class="tm">${set}</text>
    ${ad?`<g transform="translate(${x+12} ${y+h-36})"><rect width="44" height="24" rx="6" fill="var(--glow)"/><text x="22" y="17" text-anchor="middle" class="tw">${ad}</text></g>`:''}
    <g transform="translate(${x+w-62} ${y+h-34})"><rect width="50" height="22" rx="11" fill="${door==='zu'?'var(--steel-d)':'var(--bg-alt)'}" ${S} stroke-width="1.5"/><text x="25" y="15" text-anchor="middle" style="font:600 10.5px Inter;fill:${door==='zu'?'var(--card)':'var(--ink)'}">Tür ${door}</text></g>
    <g class="ck" transform="translate(${x+w-22} ${y+20})"><circle r="11" fill="var(--ok)"/><path d="m-5 0 3 4 7-8" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
  </g>`).join('')}
  </svg>`
};

/* ---------------- Kühlschrank ---------------- */
ILLUS.kuehlschrank = {
  svg: `<svg class="il ks" viewBox="0 0 420 240" role="img" aria-label="Kühlschrank aus und Türen offen">
  <style>.ks .door{transform-box:view-box;transition:transform 1s}.ks .d1{transform-origin:240px 0}.ks.open .door{transform:scaleX(-.55)}</style>
  <rect width="420" height="240" rx="16" fill="var(--bg-alt)"/>
  <rect x="150" y="30" width="90" height="190" rx="8" fill="var(--card)" ${S}/>
  <rect x="158" y="40" width="74" height="40" rx="4" fill="var(--sky)" ${S}/>
  <path d="M158 110h74M158 145h74M158 180h74" stroke="var(--line)" stroke-width="3"/>
  <g class="door d1"><rect x="150" y="30" width="90" height="56" rx="8" fill="var(--steel)" ${S}/><rect x="150" y="90" width="90" height="130" rx="8" fill="var(--card)" ${S}/><path d="M228 110v30" stroke="var(--steel-d)" stroke-width="5" stroke-linecap="round"/></g>
  <g transform="translate(90 200)"><path d="M-14 0h28l-14-18Z" fill="var(--wood-l)" ${S}/></g>
  <text x="90" y="232" text-anchor="middle" class="tm">Keil / Tuch</text>
  <g transform="translate(330 70)"><circle r="24" fill="var(--card)" ${S}/><path d="M0-12v12" ${S}/><path d="M-9-7a12 12 0 1 0 18 0" fill="none" ${S}/><text y="44" text-anchor="middle" class="t">aus</text></g>
  </svg>`,
  init(host){const s=host.querySelector('svg');setTimeout(()=>s.classList.add('open'),600)}
};

/* ---------------- Abfall ---------------- */
ILLUS.abfall = {
  svg: `<svg class="il ab" viewBox="0 0 460 190" role="img" aria-label="Abfallsack zum Container bringen">
  <style>.ab .bag{animation:walk 5s ease-in-out infinite}@keyframes walk{0%,10%{transform:translateX(0)}70%,100%{transform:translateX(250px)}}</style>
  <rect width="460" height="190" rx="16" fill="var(--green-soft)"/>
  <rect x="0" y="130" width="460" height="30" fill="var(--steel)" opacity=".5"/>
  <path d="M40 130V70l40-30 40 30v60Z" fill="var(--wood-l)" ${S}/>
  <rect x="68" y="96" width="24" height="34" fill="var(--wood)" ${S}/>
  <g class="bag"><path d="M118 128c-8 0-10-24 0-34l-4-10h20l-4 10c10 10 8 34 0 34Z" fill="#fff" ${S}/><text x="124" y="118" text-anchor="middle" style="font:700 8px Inter;fill:var(--ink)">17L</text></g>
  ${[360,392].map(x=>`<rect x="${x}" y="92" width="28" height="38" rx="4" fill="var(--steel-d)" ${S}/>`).join('')}
  <text x="390" y="82" text-anchor="middle" class="t">Container</text>
  <path d="M130 178h230" stroke="var(--ink)" stroke-width="2"/><path d="M130 172v12M360 172v12" stroke="var(--ink)" stroke-width="2"/>
  <text x="245" y="174" text-anchor="middle" class="tm">ca. 100 m Richtung Dorf</text>
  </svg>`
};

/* ---------------- Mitbringen ---------------- */
ILLUS.mitbringen = {
  svg: `<svg class="il mb" viewBox="0 0 460 220" role="img" aria-label="Masse für Bettwäsche">
  <rect width="460" height="220" rx="16" fill="var(--bg-alt)"/>
  <rect x="40" y="40" width="80" height="150" rx="8" fill="var(--card)" ${S}/>
  <text x="80" y="122" text-anchor="middle" class="t">Matratze</text><text x="80" y="140" text-anchor="middle" class="tm">90 × 200</text>
  <rect x="160" y="60" width="90" height="62" rx="16" fill="var(--wood-xl)" ${S}/>
  <text x="205" y="88" text-anchor="middle" class="t">Kissen</text><text x="205" y="106" text-anchor="middle" class="tm">50 × 70</text>
  <rect x="280" y="40" width="140" height="150" rx="12" fill="var(--green-soft)" ${S}/>
  <path d="M290 70c40 10 80-10 120 0" stroke="var(--green-l)" stroke-width="3" fill="none"/>
  <text x="350" y="120" text-anchor="middle" class="t">Duvet</text><text x="350" y="138" text-anchor="middle" class="tm">160 × 210</text>
  <g transform="translate(205 150)">${[0,1,2].map(i=>`<rect x="-36" y="${i*-12+30}" width="72" height="12" rx="5" fill="${['var(--glow)','var(--water)','var(--flame)'][i]}" ${S} stroke-width="2"/>`).join('')}<text y="58" text-anchor="middle" class="tm">Frotteewäsche</text></g>
  </svg>`
};

/* ---------------- TV & WLAN ---------------- */
ILLUS.tv = {
  svg: `<svg class="il tv" viewBox="0 0 420 220" role="img" aria-label="Fernseher mit TV-Box an HDMI 2">
  <style>.tv .led{animation:pulse 1.6s infinite}</style>
  <rect width="420" height="220" rx="16" fill="var(--bg-alt)"/>
  <rect x="60" y="24" width="220" height="130" rx="8" fill="var(--ink)"/>
  <rect x="70" y="34" width="200" height="110" rx="4" fill="var(--sky)"/>
  <path d="M70 120l50-46 30 30 40-50 80 66v24H70Z" fill="var(--green-l)" opacity=".7"/>
  <path d="M160 154v18M120 176h80" ${S}/>
  <rect x="290" y="132" width="80" height="22" rx="6" fill="var(--card)" ${S}/><circle class="led" cx="360" cy="143" r="3.5" fill="var(--ok)"/>
  <text x="330" y="124" text-anchor="middle" class="tm">Mi TV Box</text>
  <path d="M290 143c-6 0-6-24-10-24" fill="none" stroke="var(--glow)" stroke-width="3"/>
  <rect x="272" y="114" width="10" height="12" rx="2" fill="var(--glow)"/>
  <text x="300" y="104" class="t" style="fill:var(--glow)">← HDMI 2</text>
  <path d="M40 196h80" stroke="var(--ink)" stroke-width="2"/><rect x="120" y="188" width="22" height="16" rx="3" fill="var(--card)" ${S}/>
  <text x="200" y="200" class="tm">Stecker rein → WLAN startet mit</text>
  </svg>`
};

window.ILLUS = ILLUS;
})();
