// Gemeinsame Navigation, Footer, Animationen und Lightbox für alle Seiten.
(function(){
  const page = document.body.dataset.page || '';
  const links = [
    ['index.html','Start','start'],
    ['wohnung.html','Wohnung','wohnung'],
    ['preise.html','Preise & Buchen','preise'],
    ['lage.html','Lage & Ausflüge','lage'],
    ['anleitung.html','Gäste-Handbuch','anleitung']
  ];
  const logo = `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M4 56 24 20l10 16 8-12 18 32Z" fill="currentColor" opacity=".9"/><path d="m24 20 6 10-6-2-6 4Z" fill="#fff"/><path d="m42 24 5 9-5-2-4 3Z" fill="#fff" opacity=".8"/></svg>`;

  const nav = document.createElement('nav');
  nav.className = 'nav'; nav.id = 'nav';
  nav.innerHTML = `<div class="wrap">
    <a class="brand" href="index.html">${logo}Ferienwohnung Lenk</a>
    <button class="menu-btn" aria-label="Menü öffnen" aria-expanded="false">☰</button>
    <ul>${links.map(([h,t,k])=>`<li><a class="l${k==='anleitung'?'':''}" href="${h}"${k===page?' aria-current="page"':''}>${t}</a></li>`).join('')}</ul>
  </div>`;
  document.body.prepend(nav);

  const foot = document.createElement('footer');
  foot.className = 'site-foot';
  foot.innerHTML = `<div class="wrap">
    <h2>Lust auf Lenk?</h2>
    <p class="lead">Wir vermieten nur privat an Freunde und Bekannte. Meldet euch einfach bei Andreas.</p>
    <div class="foot-grid">
      <div><b>Telefon</b><a href="tel:+41796582427">079 658 24 27</a></div>
      <div><b>E-Mail</b><a href="mailto:buchsandreas@bluewin.ch">buchsandreas@bluewin.ch</a></div>
      <div><b>Post</b>Andreas Buchs<br>Alte Landstrasse 15<br>8114 Dänikon</div>
    </div>
    <div class="foot-bottom">
      <span>Ferienwohnung Oberried · Oberriedstrasse 43 · 3775 Lenk i. S.</span>
      <nav>${links.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}</nav>
    </div>
  </div>`;
  if (!document.body.hasAttribute('data-nofoot')) document.body.append(foot);

  // Nav-Verhalten
  const hasHero = document.querySelector('.hero, .banner');
  if (!hasHero) document.body.classList.add('solid-nav');
  const onScroll = () => nav.classList.toggle('solid', !hasHero || scrollY > 80);
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  const ul = nav.querySelector('ul'), btn = nav.querySelector('.menu-btn');
  btn.onclick = () => { const o = ul.classList.toggle('open'); btn.setAttribute('aria-expanded', o); nav.classList.add('solid'); };

  // Reveal
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.1});
  window.observeReveal = root => (root||document).querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
  observeReveal();

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'lb'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-label','Bild vergrössert');
  lb.innerHTML = '<img alt="">';
  document.body.append(lb);
  const lbImg = lb.querySelector('img');
  document.addEventListener('click', e => {
    const img = e.target.closest('[data-zoom] img, img[data-zoom]');
    if (img) { lbImg.src = img.currentSrc || img.src; lbImg.alt = img.alt; lb.classList.add('on'); }
  });
  lb.onclick = () => lb.classList.remove('on');
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('on'); });
})();
