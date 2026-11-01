# Ferienwohnung Lenk

Statische Webseite für die Ferienwohnung im Oberried, Lenk i. S. Kein Build-Schritt nötig.

| Seite | Inhalt |
|---|---|
| `index.html` | Start |
| `wohnung.html` | Ausstattung, Galerie, Schlafplätze |
| `preise.html` | Preise, Kostenrechner, Verfügbarkeit (noch deaktiviert) |
| `lage.html` | Aktivitäten Sommer/Winter, Anreise |
| `anleitung.html` | Gäste-Handbuch mit Suche, Kategorien, Tags |

## Handbuch bearbeiten

- Texte: `assets/js/guide-data.js` (ein Objekt pro Artikel: Titel, Kategorie, Tags, Suchbegriffe, Inhalt)
- Zeichnungen: `assets/js/guide-illus.js`
- Direktlink auf einen Artikel: `anleitung.html#holzherd`

## Online stellen (GitHub Pages)

Settings → Pages → „Deploy from a branch“ → `master` / `(root)`.
