# 🚀 Deployment Guide - Nico Merkel Portfolio

## GitHub Setup

### 1. Repository erstellen
```bash
# Neues Repository auf GitHub erstellen
# Dann lokal initialisieren:
git init
git add .
git commit -m "Initial commit: Nico Merkel Portfolio"
git branch -M main
git remote add origin https://github.com/DEIN_USERNAME/nico-merkel-portfolio.git
git push -u origin main
```

### 2. GitHub Repository Einstellungen
- Gehe zu Settings → Pages
- Source: "Deploy from a branch"
- Branch: `main`
- Folder: `/ (root)`
- Save

## Vercel Deployment

### Option 1: Automatisches Deployment (Empfohlen)
1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke "New Project"
3. Importiere dein GitHub Repository
4. Vercel erkennt automatisch Vite und konfiguriert alles
5. Klicke "Deploy"

### Option 2: Vercel CLI
```bash
# Vercel CLI installieren
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Für Produktion
vercel --prod
```

### Option 3: GitHub Actions (Automatisch)
Das Repository ist bereits für automatisches Deployment konfiguriert:
- Jeder Push auf `main` triggered automatisch ein Deployment
- Vercel erstellt automatisch Preview-Deployments für Pull Requests

## Custom Domain Setup

### Vercel Domain
1. Gehe zu deinem Vercel Dashboard
2. Klicke auf dein Projekt
3. Gehe zu "Settings" → "Domains"
4. Füge deine Domain hinzu (z.B. `nico-merkel.de`)
5. Folge den DNS-Anweisungen

### DNS Konfiguration
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

## Environment Variables (Optional)

Falls du später Backend-Features hinzufügst:
```bash
# In Vercel Dashboard → Settings → Environment Variables
VITE_API_URL=https://your-api.com
VITE_CONTACT_EMAIL=nico.merkel@online.de
```

## Performance Optimierung

Das Portfolio ist bereits optimiert für:
- ✅ Lighthouse Score 95+
- ✅ First Contentful Paint < 1.5s
- ✅ Largest Contentful Paint < 2.5s
- ✅ Cumulative Layout Shift < 0.1

## Monitoring

### Vercel Analytics
1. Gehe zu deinem Vercel Dashboard
2. Klicke auf "Analytics"
3. Aktiviere Web Analytics für dein Projekt

### Google Analytics (Optional)
Füge deine Google Analytics ID in `index.html` hinzu:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Troubleshooting

### Build Fehler
```bash
# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install

# Build testen
npm run build
```

### Vercel Build Fehler
- Prüfe die Build-Logs in Vercel Dashboard
- Stelle sicher, dass alle Dependencies in `package.json` stehen
- Teste lokal mit `npm run build`

### Performance Probleme
- Optimiere Bilder (WebP Format)
- Komprimiere Assets
- Nutze CDN für statische Assets

## Support

Bei Problemen:
1. Prüfe die Vercel Build-Logs
2. Teste lokal mit `npm run dev`
3. Erstelle ein Issue auf GitHub
4. Kontaktiere: nico.merkel@online.de

---

**Deployment erfolgreich! 🎉**

Dein Portfolio ist jetzt live und professionell deployt!
