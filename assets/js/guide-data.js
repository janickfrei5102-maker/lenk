// Inhalte des Gäste-Handbuchs. Quelle: «Schön, sinder i eusere Feriewohnig ar Lenk» (Version 06.24).
// Neue Artikel einfach unten anfügen. Felder:
//   id, title, cat, tags[], icon, summary, keywords (Suchbegriffe), illu (Name in guide-illus.js),
//   photos [{src, cap}], body (HTML), related [ids]
window.GUIDE_CATS = [
  {id:'vorbereitung', name:'Vor der Reise',  icon:'🧳'},
  {id:'ankommen',     name:'Ankommen',       icon:'🔑'},
  {id:'wohnen',       name:'Im Haus',        icon:'🏠'},
  {id:'waerme',       name:'Wärme & Wasser', icon:'🌡️'},
  {id:'feuer',        name:'Feuer',          icon:'🔥'},
  {id:'abreise',      name:'Abreise',        icon:'👋'},
  {id:'hilfe',        name:'Hilfe & Kontakt',icon:'☎️'}
];

const TEL = '<a href="tel:+41796582427">079 658 24 27</a>';

window.GUIDE = [
/* ============ Vor der Reise ============ */
{ id:'mitbringen', title:'Was ihr mitbringen müsst', cat:'vorbereitung', icon:'🧳',
  tags:['Checkliste','Schlafzimmer','Bad'],
  summary:'Bettwäsche und Frotteewäsche bringt ihr selbst mit. Hier sind die Masse.',
  keywords:'bettwäsche bettbezug duvet kissen matratze leintuch frottee handtuch badetuch waschlappen packliste',
  illu:'mitbringen',
  body:`
  <h3>Bettwäsche</h3>
  <div class="dims"><span>Matratze 90 × 200 cm</span><span>Kissen 50 × 70 cm</span><span>Duvet 160 × 210 cm</span></div>
  <p>Bettdecken und Kissen sind in der Wohnung vorhanden, die Bezüge nicht.</p>
  <h3>Fürs Bad</h3>
  <ul class="check" data-cl="mitbringen">
    <li><label><input type="checkbox"><span>Badetuch oder Duschtuch</span></label></li>
    <li><label><input type="checkbox"><span>Handtücher</span></label></li>
    <li><label><input type="checkbox"><span>Waschlappen</span></label></li>
    <li><label><input type="checkbox"><span>Abtrocknungstuch für die Küche</span></label></li>
  </ul>
  <div class="tip">Falls etwas fehlt: Im grossen Schlafzimmerschrank unten liegt Ersatz-Bettwäsche (Duvet 160×240, Kissen 60×90).</div>`,
  related:['schlafen','anreise'] },

{ id:'anreise', title:'Anreise & Adresse', cat:'vorbereitung', icon:'🚆',
  tags:['Anreise'],
  summary:'Oberriedstrasse 43, 3775 Lenk. Mit dem Bus bis «Lenk, Litte», dann zwei Minuten zu Fuss.',
  keywords:'adresse bus öv zug auto anfahrt haltestelle litte navigation simmental card ortsbus',
  body:`
  <div class="kv"><b>Adresse</b><span>Oberriedstrasse 43, 3775 Lenk i. S.</span></div>
  <div class="kv"><b>Bus</b><span>Haltestelle «Lenk, Litte», von dort 2 Minuten zum Haus</span></div>
  <div class="kv"><b>Auto</b><span>2 Parkplätze auf dem Kiesplatz vor dem Haus, siehe <a href="#parkieren">Parkieren</a></span></div>
  <p>Das Haus ist bei jedem Wetter mit Auto und ÖV gut erreichbar. Die Talstation der Metschbahn ist in 2 Minuten erreicht, der Betelberg in weniger als 10 Minuten.</p>
  <h3>Simmental Card</h3>
  <p>Jeder Gast bekommt die Simmental Card. Damit fahrt ihr gratis mit dem Ortsbus und bekommt Vergünstigungen, zum Beispiel für Hallenbad, Boulderhalle, Langlaufpass und Stockhornbahn.</p>
  <p><a class="btn btn-soft btn-sm" href="https://www.google.com/maps/search/?api=1&query=Oberriedstrasse+43%2C+3775+Lenk" target="_blank" rel="noopener">In Google Maps öffnen ↗</a></p>`,
  related:['parkieren','ankunft'] },

{ id:'hausregeln', title:'Hausregeln', cat:'vorbereitung', icon:'📜',
  tags:['Sicherheit','Feuer'],
  summary:'Rauchfrei, vorsichtig mit offenem Feuer und Sorge tragen zu den persönlichen Sachen.',
  keywords:'rauchen verboten kerzen rechaud regeln endreinigung privat',
  body:`
  <div class="alert"><b>Im ganzen Haus ist Rauchen verboten.</b> Vorsicht mit offenem Feuer wie Rechaud oder Kerzen.</div>
  <p>Das Haus gehörte unserem Vater, er und seine Geschwister sind hier aufgewachsen. Wir vermieten es als Hobby an Freunde und Bekannte, um einen Teil der Unterhaltskosten zu decken.</p>
  <ul>
    <li>Schaut euch gerne überall um, wir haben nichts zu verstecken. Tragt aber Sorge zu den persönlichen, nicht ersetzbaren Sachen.</li>
    <li>Die Endreinigung macht ihr selbst, dafür gibt es keine Zusatzkosten.</li>
    <li>Holz zum Kochen ist inklusive. Fürs Heizen und das Cheminée freuen wir uns über einen Batzen in die Kasse.</li>
    <li>Die Pflanzen freuen sich über Wasser, einmal pro Woche.</li>
  </ul>`,
  related:['abreise','holzherd'] },

/* ============ Ankommen ============ */
{ id:'ankunft', title:'Ankunft: die ersten Handgriffe', cat:'ankommen', icon:'🔑',
  tags:['Checkliste','Winter'],
  summary:'Fensterläden öffnen, Kühlschrank und TV einstecken, im Winter die Heizung starten.',
  keywords:'ankommen fensterläden läden kühlschrank strom tv wlan pflanzen giessen check-in',
  illu:'fensterladen',
  body:`
  <ul class="check" data-cl="ankunft">
    <li><label><input type="checkbox"><span>Fensterläden öffnen und aussen an der Fassade arretieren</span></label></li>
    <li><label><input type="checkbox"><span>Kühlschrank einschalten, wenn ihr ihn braucht (im Winter mit der Heizung umstecken)</span></label></li>
    <li><label><input type="checkbox"><span>Stecker für den Fernseher in der Stube einstecken, das WLAN startet automatisch mit</span></label></li>
    <li><label><input type="checkbox"><span>Ski und Snowboards in die Kammer stellen</span></label></li>
    <li><label><input type="checkbox"><span>Pflanzen 1× pro Woche giessen</span></label></li>
  </ul>
  <h3>Zusätzlich im Winter</h3>
  <ul class="check" data-cl="ankunft-winter">
    <li><label><input type="checkbox"><span>Kleinen Speicherofen in Küche und Bad zur Seite stellen und ausstecken</span></label></li>
    <li><label><input type="checkbox"><span>Heizlüfter und Elektroheizung von den Fernsteuer-Adaptern abziehen, Kühlschrank und Nachttischlampe wieder einstecken</span></label></li>
    <li><label><input type="checkbox"><span>Speicheröfen einstellen, siehe <a href="#speicheroefen">Speicheröfen</a></span></label></li>
  </ul>
  <div class="alert">Ist der kleine Ofen noch heiss, darf er nicht nahe an Gegenstände oder die Wand gestellt werden. Brandgefahr!</div>`,
  related:['speicheroefen','tv-wlan','winter-abreise'] },

{ id:'parkieren', title:'Parkieren', cat:'ankommen', icon:'🚗',
  tags:['Draussen','Winter','Anreise'],
  summary:'Auf dem Kiesplatz parkieren, Garagen und Durchfahrt immer freihalten.',
  keywords:'parkplatz auto garage durchfahrt kies wiese zaun container schneepflug',
  illu:'parkieren',
  photos:[{src:'assets/img/parkplatz-sommer.jpg',cap:'Kiesplatz im Sommer'},{src:'assets/img/parkplatz-winter.jpg',cap:'Im Winter'},{src:'assets/img/lageplan.jpg',cap:'Lageplan'}],
  body:`
  <ul>
    <li>Parkiert auf der angrenzenden Wiese (Kiesplatz).</li>
    <li><b>Garagen und Durchfahrt freihalten.</b> Die Garagen sind vermietet.</li>
    <li>Ein einzelnes kleines Auto darf ganz dicht an den Zaun, solange Garagen und Durchfahrt frei bleiben.</li>
    <li>Der Platz bei den Containern ist öffentlich, dort dürft ihr auch parkieren.</li>
  </ul>
  <div class="alert"><b>Im Winter:</b> Nicht vor den Schneehaufen bei den Containern stellen. Der Schneepflug braucht dort Platz zum Leeren.</div>`,
  related:['anreise','abfall'] },

{ id:'ski-bike', title:'Ski, Snowboard & Bikes', cat:'ankommen', icon:'⛷️',
  tags:['Kammer','Winter','Sommer','Draussen'],
  summary:'Wintersportgeräte kommen in die Kammer unter der Stube, Bikes in den alten Stall.',
  keywords:'ski snowboard velo bike fahrrad kammer werkstatt schlüssel stall aufbewahren',
  body:`
  <h3>Kammer</h3>
  <p>Die Kammer ist eine kleine Werkstatt unter der Stube. Sie ist von aussen zugänglich.</p>
  <div class="kv"><b>Schlüssel</b><span>Ganz unten am Schlüsselbrett. Das Schlüsselbrett hängt in der Küche neben der Spüle.</span></div>
  <h3>Stall</h3>
  <p>Im alten Stall gibt es Platz für Ski und Bikes. Dort stehen auch Gartenmöbel und Grill.</p>`,
  related:['wegweiser','garten'] },

{ id:'schlafen', title:'Betten & Bettwäsche', cat:'ankommen', icon:'🛏️',
  tags:['Schlafzimmer'],
  summary:'Zwei Schlafzimmer mit je zwei Betten, dazu das Bettsofa in der Stube.',
  keywords:'bett bettsofa schlafsofa decke duvet kissen ersatz schrank laden fenster dunkel',
  body:`
  <ul>
    <li>2 Schlafzimmer mit je 2 Betten (Matratzen 90 × 200 cm)</li>
    <li>Bettsofa in der Stube für 1–2 Personen</li>
  </ul>
  <h3>Wo ist was?</h3>
  <div class="kv"><b>Decken Bettsofa</b><span>Im alten Schlafzimmer, im kleinen braunen Schrank neben dem Bett (Doppeltür)</span></div>
  <div class="kv"><b>Ersatz-Bettwäsche</b><span>Unten im grossen Schlafzimmerschrank: Duvet 160×240, Kissen 60×90</span></div>
  <div class="tip">Im kleinen Schlafzimmer könnt ihr beim grossen Fenster den Laden schliessen, falls es euch morgens zu hell ist.</div>`,
  related:['mitbringen','speicheroefen'] },

/* ============ Im Haus ============ */
{ id:'wegweiser', title:'Wegweiser: Was ist wo?', cat:'wohnen', icon:'🧭',
  tags:['Küche','Stube','Bad','Dili','Kammer','Schlafzimmer'],
  summary:'Tippt auf einen Raum und seht, was dort zu finden ist. Von Gebührensäcken bis WC-Papier.',
  keywords:'finden suchen wo schrank schlüsselbrett dili heuboden laube kammer wc-papier küchenpapier putzkessel lappen',
  illu:'wegweiser',
  body:`
  <h3>Die Dili finden</h3>
  <p>Die Dili ist der alte Heuboden. Ihr geht aus der Küche hinaus in die Laube und dann links durch die Tür. Der Lichtschalter ist gleich bei der Tür.</p>
  <h3>Die Kammer finden</h3>
  <p>Die Kammer liegt unter der Stube und ist nur von aussen zugänglich. Den Schlüssel findet ihr ganz unten am Schlüsselbrett neben der Spüle.</p>`,
  related:['kueche','putzen','abfall'] },

{ id:'kueche', title:'Küche & Vorräte', cat:'wohnen', icon:'🍳',
  tags:['Küche'],
  summary:'Elektro- und Holzherd, Geschirrspüler, Fondue und Raclette. Die Grundvorräte sind da.',
  keywords:'kochen herd geschirrspüler abwaschmaschine kaffee delizio fondue raclette salz zucker mehl öl pasta reis gewürze vorrat',
  body:`
  <h3>Ausstattung</h3>
  <ul>
    <li>Elektroherd und Holzherd (siehe <a href="#holzherd">Holzherd anfeuern</a>)</li>
    <li>Geschirrspüler, Delizio-Kaffeemaschine</li>
    <li>Fondueset für Käse und Fleisch, Raclette-Ofen</li>
    <li>Eckbank für 6 Personen</li>
  </ul>
  <h3>Vorräte</h3>
  <p>Salz, Zucker, Mehl, Sirup, Öl und Essig, Pasta, Reis, Tee, Kaffee, Bouillon und ein paar Gewürze findet ihr irgendwo in der Küche.</p>
  <div class="tip">Habt ihr etwas aufgebraucht, füllt es bitte wieder auf oder gebt Bescheid, wenn ihr abreist oder kurz danach.</div>
  <div class="tip">Warmwasser sparen: Lieber den Geschirrspüler nehmen oder Wasser auf dem Holzherd heiss machen.</div>`,
  related:['holzherd','warmwasser','putzen'] },

{ id:'tv-wlan', title:'Fernseher & WLAN', cat:'wohnen', icon:'📺',
  tags:['Stube','Strom'],
  summary:'Stecker einstecken, dann laufen TV-Box und WLAN. Die Box hängt an HDMI 2.',
  keywords:'tv fernseher internet wifi wlan netflix disney bluetv swisscom box hdmi satellit',
  illu:'tv',
  body:`
  <ol class="steps">
    <li>Den Stecker für den Fernseher in der Stube einstecken. Das WLAN startet automatisch mit.</li>
    <li>Am TV den Eingang <b>HDMI 2</b> wählen, dort hängt die «Mi TV Box».</li>
    <li>Über die Box läuft BlueTV. Netflix, Disney+ und Co. gehen mit eurem eigenen Login.</li>
  </ol>
  <p>Den Stecker bei der Abreise wieder ausziehen.</p>`,
  related:['ankunft','abreise'] },

{ id:'putzen', title:'Putzen & Lappen', cat:'wohnen', icon:'🧽',
  tags:['Küche','Bad','Dili'],
  summary:'Staubsauger, Reinigungsmittel und Lappen. Und: Parkett nie nass putzen!',
  keywords:'reinigen staubsauger putzmittel lappen geschirrtuch parkett boden putzkessel windelständer',
  body:`
  <div class="alert"><b>Parkettboden nie nass reinigen!</b> Nur wo nötig mit einem feuchten Lappen wischen und gleich trocknen.</div>
  <div class="kv"><b>Staubsauger</b><span>steht in der Wohnung</span></div>
  <div class="kv"><b>Reinigungsmittel</b><span>unter der Spüle in der Küche</span></div>
  <div class="kv"><b>Küchenlappen &amp; Geschirrtücher</b><span>im Bad, unterste Schublade</span></div>
  <div class="kv"><b>Putzkessel &amp; Putzlappen</b><span>in der Dili im weissen Schrank</span></div>
  <h3>Gebrauchte Lappen</h3>
  <ul>
    <li>Bei der Abreise nasse Lappen und Tücher in der Dili an den Windelständer hängen.</li>
    <li>Trockene, schmutzige Lappen dürft ihr in die Eckbank bei der Tür werfen.</li>
  </ul>`,
  related:['abreise','wegweiser'] },

{ id:'abfall', title:'Abfall & Recycling', cat:'wohnen', icon:'♻️',
  tags:['Abfall','Kammer'],
  summary:'Weisse Gebührensäcke unter der Spüle, Container 100 m Richtung Dorf, Recycling in die Kammer.',
  keywords:'abfall müll kehricht gebührensack sack container recycling glas pet metall karton papier entsorgen',
  illu:'abfall',
  body:`
  <ul>
    <li>Unter der Spüle liegen <b>Gebührensäcke</b> (weisse Säcke 17 l und 35 l).</li>
    <li>Die Container stehen ca. 100 Meter neben dem Haus Richtung Dorf. Bitte nehmt bei der Abreise alle Säcke mit.</li>
    <li><b>Recycling</b> (Glas, Metall, Karton, Papier) dürft ihr in die Kammer stellen. Bitte alles gründlich auswaschen.</li>
  </ul>`,
  related:['abreise','parkieren'] },

{ id:'garten', title:'Garten, Grill & Sonnenschirm', cat:'wohnen', icon:'🌞',
  tags:['Draussen','Sommer'],
  summary:'Gartenmöbel, Kohle-Grill, Liegestuhl und Sonnenschirm stehen im Stall.',
  keywords:'grillieren grill kohle garten tisch stühle liegestuhl sonnenschirm hühnerstall terrasse',
  body:`
  <p>Tisch, Stühle, Liegestuhl, Grill, Sonnenschirm und mehr findet ihr im Stall oder im alten Hühnerstall.</p>
  <div class="alert">Vorsicht mit dem Kohle-Grill: Glut nur ganz ausgekühlt entsorgen.</div>`,
  related:['ski-bike','hausregeln'] },

/* ============ Wärme & Wasser ============ */
{ id:'warmwasser', title:'Warmwasser sparen', cat:'waerme', icon:'🚿',
  tags:['Bad','Strom'],
  summary:'Ein 200-Liter-Boiler lädt nachts auf. Wer trödelt, duscht als Letzter kalt.',
  keywords:'boiler warmwasser duschen kalt heisswasser tagesheizung baden badewanne',
  illu:'boiler',
  body:`
  <p>Es gibt nur einen <b>200-Liter-Boiler</b>, der nachts auflädt. Geht sparsam mit warmem Wasser um. Die Darstellung oben ist vereinfacht und zeigt nur das Prinzip.</p>
  <ul>
    <li>Kurz duschen, Badewanne nur ausnahmsweise</li>
    <li>Zum Abwaschen den Geschirrspüler nehmen oder Wasser auf dem Holzherd erhitzen</li>
  </ul>
  <h3>Warmwasser aus?</h3>
  <p>Der Boiler lässt sich auf Tagesheizung umstellen. Das stellt automatisch wieder auf Nacht zurück und muss bei Bedarf täglich neu gedrückt werden. Schreibt Andreas (${TEL}), er erklärt euch, wie das geht.</p>`,
  related:['bad-heizung','kueche'] },

{ id:'speicheroefen', title:'Speicheröfen einstellen', cat:'waerme', icon:'🌡️',
  tags:['Heizung','Winter','Stube','Schlafzimmer','Sicherheit'],
  summary:'Stube auf Maximum, Schlafzimmer auf 3–4. Die Öfen brauchen eine Nacht zum Aufladen.',
  keywords:'heizen heizung speicherofen ofen kalt drehregler stufe aufladen elektroofen',
  illu:'speicherofen',
  photos:[{src:'assets/img/speicherofen.jpg',cap:'Drehregler unten rechts am Ofen'}],
  body:`
  <p>Wenn es kalt ist und ihr länger als eine Nacht bleibt, schaltet die Speicheröfen ein. Sie laden nachts auf, die erste Nacht bleibt es deshalb leider noch kühl.</p>
  <div class="alert"><b>Die Speicheröfen werden sehr heiss.</b> Nie abdecken, auch nicht zum Kleidertrocknen!</div>
  <h3>Stube</h3>
  <p>Den Ofen unter den Fenstern auf <b>Maximum</b> stellen. Der Drehschalter sitzt unten rechts am Ofen.</p>
  <h3>Schlafzimmer</h3>
  <p>Jedes Schlafzimmer hat einen eigenen Speicherofen mit Steuerung. Stufe <b>3 oder 4</b>. Schaltet nur den Ofen im Zimmer ein, das ihr braucht, und schliesst beim anderen die Tür.</p>
  <p>Die Steuergeräte funktionieren in allen Räumen gleich: <a href="#steuergeraet">Steuergerät mit A und B</a>.</p>`,
  related:['steuergeraet','erster-abend','winter-abreise'] },

{ id:'steuergeraet', title:'Steuergerät: Tasten A und B', cat:'waerme', icon:'🎛️',
  tags:['Heizung','Winter','Strom'],
  summary:'Beide Tasten aus ist die Grundeinstellung. A gibt schnell Wärme ab, B heizt teuer mit Strom.',
  keywords:'steuerung thermostat taste a b schnell entladen tagesheizung strom regler',
  illu:'steuergeraet',
  body:`
  <div class="kv"><b>Stube</b><span>über dem Sofa neben dem Fenster, hinter dem Vorhang</span></div>
  <div class="kv"><b>Altes Schlafzimmer</b><span>an der Wand gegenüber dem Fenster, hinter dem braunen Schrank</span></div>
  <p>Die eingestellte Temperatur am Steuergerät bitte <b>nicht verstellen</b>. Probiert die Tasten oben in der Zeichnung aus.</p>
  <ul>
    <li><b>A</b>: schnell entladen. Sinnvoll am Abend, wenn ihr in der Stube sitzt. Funktioniert nur, wenn der Ofen geladen ist.</li>
    <li><b>B</b>: Tagesheizung. Normalerweise aus, weil der Ofen sonst direkt Strom verbraucht und nachts nicht lädt.</li>
  </ul>`,
  related:['speicheroefen','erster-abend'] },

{ id:'bad-heizung', title:'Bad: Bodenheizung & Handtuchtrockner', cat:'waerme', icon:'🛁',
  tags:['Bad','Heizung'],
  summary:'Bodenheizung auf 15–20 °C, beim Duschen kurz höher. Handtuchtrockner per Fernbedienung.',
  keywords:'bodenheizung thermostat handtuchtrockner wandheizung fernbedienung bad warm frostschutz',
  illu:'bodenheizung',
  photos:[{src:'assets/img/bodenheizung-30.jpg',cap:'Regler: heizt auf 30 °C'},{src:'assets/img/bodenheizung-frost.jpg',cap:'Regler: Frostschutz'}],
  body:`
  <h3>Bodenheizung</h3>
  <p>Der Regler hängt an der Wand rechts, wenn man ins Bad kommt. Stellt ihn auf ca. <b>15–20 °C</b>. Während dem Duschen dürft ihr kurz auf 25 °C oder mehr drehen.</p>
  <h3>Handtuchtrockner</h3>
  <p>Den Handtuchtrockner neben der Badewanne bedient ihr mit der Fernbedienung auf der Ablage über dem WC. Die Bedienungsanleitung liegt dabei.</p>`,
  related:['warmwasser','winter-abreise'] },

{ id:'erster-abend', title:'Erster Abend zu kalt?', cat:'waerme', icon:'🥶',
  tags:['Heizung','Winter','Sicherheit'],
  summary:'Bis die Speicheröfen geladen sind, helfen der kleine Ofen und der Heizlüfter.',
  keywords:'kalt frieren heizlüfter kleiner ofen steckdose schnell warm erste nacht',
  body:`
  <ol class="steps">
    <li>Den kleinen Speicherofen aus der Küche direkt in eine freie Steckdose stecken.</li>
    <li>Mit dem kleinen Heizlüfter das Schlafzimmer kurz vor dem Schlafengehen aufwärmen.</li>
    <li>Am Steuergerät in der Stube Taste A drücken, falls der Ofen schon etwas geladen ist.</li>
    <li>Oder den Holzherd einfeuern, er gibt viel Wärme: <a href="#holzherd">Holzherd anfeuern</a>.</li>
  </ol>
  <div class="alert"><b>Brandgefahr!</b> Kleiner Ofen und Heizlüfter werden sehr heiss. Nicht nahe an Gegenstände stellen, immer im Auge behalten und ausstecken, wenn ihr ins Bett oder aus dem Haus geht.</div>`,
  related:['speicheroefen','holzherd','steuergeraet'] },

/* ============ Feuer ============ */
{ id:'holzherd', title:'Holzherd anfeuern', cat:'feuer', icon:'🪵',
  tags:['Feuer','Küche','Heizung'],
  summary:'Schritt für Schritt zum Feuer im Holzherd: Kamin auf, Holz rein, Geduld haben.',
  keywords:'holzherd feuer anfeuern einfeuern kamin hebel riegel klappe anzündwürfel streichhölzer schieber holz rauch',
  illu:'holzherd',
  photos:[{src:'assets/img/holzherd-zu.jpg',cap:'Kamin geschlossen'},{src:'assets/img/holzherd-offen.jpg',cap:'Kamin offen'},{src:'assets/img/anzuendwuerfel.jpg',cap:'Holz und Anzündwürfel'},{src:'assets/img/schieber.jpg',cap:'Schieber regelt die Flamme'}],
  body:`
  <p>Alle Pfadfinder und Feuer-Fans dürfen den Holzherd in der Küche einfeuern. Er gibt viel Wärme. Holz zum Kochen ist inklusive, für mehr freuen wir uns über einen Batzen in die Kasse.</p>
  <div class="kv"><b>Holz</b><span>Schublade neben dem Herd, grösserer Vorrat in der Dili. Bitte nicht alles verbrauchen.</span></div>
  <div class="kv"><b>Anzünder</b><span>Anzündwürfel und Streichhölzer im Küchenschrank</span></div>
  <h3>Schritt für Schritt</h3>
  <ol class="steps linked">
    <li data-step-link="0"><b>Kamin öffnen:</b> Hebel hinten rechts zu euch ziehen. Zeigt er zur Küchenmitte, ist der Kamin offen.</li>
    <li data-step-link="1"><b>Holz einlegen:</b> Gusseisen-Klappe öffnen, zwei Scheite und ein Anzündwürfel.</li>
    <li data-step-link="2"><b>Anzünden:</b> zwei weitere Scheite darüber, Klappe schliessen.</li>
    <li data-step-link="3"><b>Luft geben:</b> Türchen mit der Ascheschublade 5 Minuten offen lassen.</li>
    <li data-step-link="4"><b>Schieber auf:</b> Türchen schliessen, Schieber mit dem Flämmchen ganz öffnen.</li>
    <li data-step-link="5"><b>Nachlegen:</b> zieht der Rauch gut ab, nach und nach Holz nachlegen.</li>
    <li data-step-link="6"><b>Feuer aus:</b> Riegel von euch wegdrücken. Zeigt er zur Wand, ist der Kamin zu.</li>
  </ol>
  <div class="alert"><b>Anfeuern braucht Geduld.</b> Erst wenn es etwas warm ist, zieht der Rauch durchs Kamin ab. Ist es draussen sehr kalt, raten wir Ungeübten ab: Ein Kaltluftpfropfen im Kamin kann die Wohnung mit Rauch füllen.</div>
  <div class="tip">Am letzten Morgen kein Feuer mehr machen. Die Asche muss bei der Abreise ganz kalt sein.</div>`,
  related:['asche','cheminee','kueche'] },

{ id:'asche', title:'Asche entsorgen', cat:'feuer', icon:'🪣',
  tags:['Feuer','Kammer','Sicherheit'],
  summary:'Nur kalte Asche, in die Metallkessel in der Kammer, umleeren auf der Terrasse.',
  keywords:'asche aschenschublade kübel kessel metall kalt entsorgen glut',
  illu:'asche',
  photos:[{src:'assets/img/aschekuebel.jpg',cap:'Aschekübel in der Kammer'}],
  body:`
  <div class="alert"><b>Asche muss kalt sein!</b> Warme Asche kann noch nach Stunden einen Brand auslösen.</div>
  <ol class="steps">
    <li>Nach dem Feuern die Aschenschublade leeren, sobald sie ganz kalt ist.</li>
    <li>Dafür gibt es 2 Metallkessel in der Kammer unter der Stube. Der Schlüssel hängt ganz unten am Schlüsselbrett neben der Spüle.</li>
    <li>Die Asche draussen auf der Terrasse umleeren, sonst ist die Kammer voller Aschenstaub.</li>
    <li>Im Winter bei der Abreise die Holzschublade wieder ganz auffüllen.</li>
  </ol>`,
  related:['holzherd','abreise'] },

{ id:'cheminee', title:'Cheminée', cat:'feuer', icon:'🏔️',
  tags:['Feuer','Stube'],
  summary:'Ab 3 Nächten dürft ihr das Cheminée einfeuern. Zuerst immer den Kamin öffnen.',
  keywords:'cheminee kamin feuer stube kaminklappe frischluft warmluft keller',
  illu:'cheminee',
  photos:[{src:'assets/img/cheminee.jpg',cap:'Das Cheminée'},{src:'assets/img/cheminee-zu.jpg',cap:'Kamin geschlossen'},{src:'assets/img/cheminee-offen.jpg',cap:'Kamin offen'}],
  body:`
  <p>Das Cheminée in der Stube dürft ihr einfeuern, wenn ihr <b>mindestens 3 Nächte</b> bleibt. Fürs Holz freuen wir uns über einen Batzen in die Kasse.</p>
  <ol class="steps">
    <li><b>Kamin öffnen</b>, bevor ihr Feuer macht.</li>
    <li>Die Frischluftklappe vom Keller fürs Feuer öffnen.</li>
    <li>Brennt das Feuer richtig, die seitliche Klappe für die Warmluftheizung öffnen.</li>
    <li>Wenn alles aus und kalt ist: Kamin und Klappen <b>wieder schliessen</b>.</li>
  </ol>`,
  related:['holzherd','asche'] },

/* ============ Abreise ============ */
{ id:'abreise', title:'Abreise-Checkliste', cat:'abreise', icon:'👋',
  tags:['Checkliste','Abfall'],
  summary:'Sauber hinterlassen, Kühlschrank aus und offen, Läden zu, Kamin-Riegel zu.',
  keywords:'abreisen check-out putzen kühlschrank läden stecker pflanzen asche essensreste mäuse',
  illu:'kuehlschrank',
  body:`
  <p>Hinterlasst die Wohnung so sauber und ordentlich, wie ihr sie angetroffen habt. Abhaken geht direkt hier, der Stand bleibt auf eurem Handy gespeichert.</p>
  <ul class="check" data-cl="abreise">
    <li><label><input type="checkbox"><span>Böden saugen, Oberflächen und Bad von Gebrauchsspuren befreien</span></label></li>
    <li><label><input type="checkbox"><span>Keine Essensreste liegen lassen. Angebrochenes in Tupperware oder Blechdosen, oder mitnehmen (wegen Mäusen)</span></label></li>
    <li><label><input type="checkbox"><span>Abfallsäcke in den Container bringen</span></label></li>
    <li><label><input type="checkbox"><span>Recycling in die Kammer stellen</span></label></li>
    <li><label><input type="checkbox"><span>Kühlschrank ausschalten, beide Türen (auch Gefrierfach) so öffnen, dass sie nicht zufallen</span></label></li>
    <li><label><input type="checkbox"><span>Stecker von Fernseher und Radio ausstecken</span></label></li>
    <li><label><input type="checkbox"><span>Pflanzen noch einmal giessen</span></label></li>
    <li><label><input type="checkbox"><span>Gebrauchte Lappen in der Dili aufhängen</span></label></li>
    <li><label><input type="checkbox"><span>Alle Fensterläden schliessen und arretieren</span></label></li>
    <li><label><input type="checkbox"><span>Kamin-Riegel am Holzherd geschlossen?</span></label></li>
    <li><label><input type="checkbox"><span>Kalte Asche in der Kammer entsorgen</span></label></li>
    <li><label><input type="checkbox"><span>Aufgebrauchte Vorräte nachfüllen oder Bescheid geben</span></label></li>
  </ul>
  <div class="tip">Im Winter zusätzlich: <a href="#winter-abreise">Heizung für die Abreise vorbereiten</a>.</div>`,
  related:['winter-abreise','abfall','putzen'] },

{ id:'winter-abreise', title:'Abreise im Winter: Heizung vorbereiten', cat:'abreise', icon:'❄️',
  tags:['Winter','Heizung','Checkliste'],
  summary:'Öfen auf Frostschutz, Heizgeräte an die Adapter S1–S4. Sonst funktioniert die Fernsteuerung nicht.',
  keywords:'winter frostschutz adapter s1 s2 s3 s4 fernsteuerung heizlüfter abreise frost schneeflocke',
  illu:'winterplan',
  body:`
  <div class="alert"><b>Wichtig:</b> Ohne diese Vorbereitung funktioniert die Fernsteuerung der Heizung nicht und das Haus kann auskühlen.</div>
  <p>Beim Abhaken wird der Raum im Plan oben grün.</p>
  <ul class="check" data-cl="winter">
    <li data-room="stube"><label><input type="checkbox"><span><b>Stube:</b> Speicherofen am Drehrad auf Stufe 2–3, Steuerung A und B aus</span></label></li>
    <li data-room="sz1"><label><input type="checkbox"><span><b>Schlafzimmer bei der Küche:</b> Speicherofen auf 0. Heizlüfter so hinstellen, dass er nichts direkt anbläst, und in Adapter <b>S2</b> stecken</span></label></li>
    <li data-room="sz2"><label><input type="checkbox"><span><b>Schlafzimmer bei der Stube:</b> Speicherofen auf 0. Heizlüfter auf mittlere Stufe, mit der Nachttischlampe umstecken in Adapter <b>S4</b></span></label></li>
    <li data-room="bad"><label><input type="checkbox"><span><b>Bad:</b> Bodenheizung auf Frostschutz ❄. Handtuchtrockner per Fernbedienung (rechte Taste) bis zur Schneeflocke durchklicken, blaues Licht blinkt langsam. Elektroheizung in die Mitte, einschalten und mit dem Kühlschrank umstecken in Adapter <b>S1</b></span></label></li>
    <li data-room="kueche"><label><input type="checkbox"><span><b>Küche:</b> Kleinen Speicherofen frei in die Küchenmitte stellen, Stufe 2–3, in Adapter <b>S3</b> stecken</span></label></li>
    <li><label><input type="checkbox"><span>Türen zu den Schlafzimmern schliessen, Türen zu Stube und Bad offen lassen</span></label></li>
  </ul>
  <div class="alert">Die Heizgeräte müssen <b>frei stehen</b>. Brandgefahr!</div>`,
  related:['abreise','speicheroefen','bad-heizung'] },

/* ============ Hilfe ============ */
{ id:'kontakt', title:'Kontakt & Notfall', cat:'hilfe', icon:'☎️',
  tags:['Sicherheit'],
  summary:'Bei Fragen jederzeit Andreas anrufen. Und die Notrufnummern für den Ernstfall.',
  keywords:'telefon anrufen notfall notruf polizei feuerwehr sanität ambulanz rega hilfe sms kontakt',
  body:`
  <div class="contact-cards">
    <a href="tel:+41796582427"><span>📞</span><b>Andreas</b><small>079 658 24 27 · jederzeit</small></a>
    <a href="sms:+41793650153"><span>💬</span><b>SMS an Papa</b><small>079 365 01 53</small></a>
    <a href="mailto:buchsandreas@bluewin.ch"><span>✉️</span><b>E-Mail</b><small>buchsandreas@bluewin.ch</small></a>
  </div>
  <h3>Notrufnummern Schweiz</h3>
  <div class="sos">
    <a href="tel:112"><b>112</b>Allgemeiner Notruf</a>
    <a href="tel:118"><b>118</b>Feuerwehr</a>
    <a href="tel:144"><b>144</b>Sanität</a>
    <a href="tel:117"><b>117</b>Polizei</a>
    <a href="tel:1414"><b>1414</b>Rega</a>
  </div>
  <p class="small">Adresse für den Notfall: Oberriedstrasse 43, 3775 Lenk i. S.</p>`,
  related:['faq'] },

{ id:'faq', title:'Häufige Fragen', cat:'hilfe', icon:'💡',
  tags:['Heizung','Feuer','Bad'],
  summary:'Kurze Antworten auf die Fragen, die am häufigsten kommen.',
  keywords:'fragen faq problem hilfe rauch kalt warmwasser holz kosten',
  body:`
  <details class="qa"><summary>Es ist am ersten Abend kalt. Was tun?</summary><p>Die Speicheröfen brauchen eine Nacht. Bis dahin helfen kleiner Ofen, Heizlüfter oder der Holzherd. Mehr unter <a href="#erster-abend">Erster Abend zu kalt?</a></p></details>
  <details class="qa"><summary>Das Warmwasser ist aus.</summary><p>Der Boiler lädt nachts. Andreas kann euch erklären, wie ihr auf Tagesheizen umstellt: ${TEL}. Siehe <a href="#warmwasser">Warmwasser</a>.</p></details>
  <details class="qa"><summary>Der Holzherd raucht in die Küche.</summary><p>Prüfen, ob der Kamin-Hebel offen ist (zeigt zur Küchenmitte). Kein Holz mehr nachlegen, Fenster öffnen. Bei grosser Kälte zieht der Kamin schlecht, dann lieber aufs Feuer verzichten.</p></details>
  <details class="qa"><summary>Kostet das Holz etwas?</summary><p>Holz zum Kochen ist inklusive. Fürs Heizen und das Cheminée freuen wir uns über einen Batzen in die Kasse.</p></details>
  <details class="qa"><summary>Wo ist das WC-Papier?</summary><p>In der Dili im weissen Schrank, zusammen mit dem Küchenpapier. Siehe <a href="#wegweiser">Wegweiser</a>.</p></details>
  <details class="qa"><summary>Dürfen wir das Cheminée benutzen?</summary><p>Ja, ab 3 Nächten. Zuerst den Kamin öffnen: <a href="#cheminee">Cheminée</a>.</p></details>`,
  related:['kontakt','erster-abend'] }
];
