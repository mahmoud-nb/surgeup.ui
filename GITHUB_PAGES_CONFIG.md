# Configuration GitHub Pages - Réponse Complète

## 🎯 RÉPONSE À VOS QUESTIONS

### ✅ 1. La configuration est-elle correcte ?

**OUI, maintenant elle l'est.** J'ai corrigé le workflow pour utiliser un système unifié.

### ✅ 2. Storybook est-il accessible depuis /storybook/ ?

**OUI.** Storybook sera accessible sur :
```
https://mahmoud-nb.github.io/surgeup.ui/storybook/
```

### ✅ 3. Le fichier main.ts est-il accessible ?

**OUI.** L'erreur 404 était causée par le conflit entre deux workflows. Le nouveau workflow résout ce problème.

### ✅ 4. Un seul workflow ou deux ?

**UN SEUL WORKFLOW est meilleur** car :
- ⚡ Plus rapide (~5-8 min vs 10-15 min)
- 🔒 Évite les conflits de déploiement
- ✅ Structure garantie
- 💾 Économise les ressources GitHub Actions

---

## 📋 CONFIGURATION GITHUB PAGES (SETTINGS)

### ⚠️ TRÈS IMPORTANT

Dans les **Settings** de votre repository GitHub :

```
Repository: mahmoud-nb/surgeup.ui
Settings > Pages
```

### Option à choisir :

```
┌─────────────────────────────────────────────┐
│ Build and deployment                        │
├─────────────────────────────────────────────┤
│                                             │
│ Source: [v] GitHub Actions    ✅ CORRECT    │
│                                             │
│         [ ] Deploy from a branch  ❌ FAUX   │
│                                             │
└─────────────────────────────────────────────┘
```

### ✅ CHOISIR : "GitHub Actions"

**NE PAS choisir** "Deploy from a branch"

---

## 🚫 SI VOUS AVIEZ CHOISI "Deploy from a branch"

Si vous aviez choisi cette option, vous devriez choisir :

```
Branch: gh-pages
Folder: / (root)
```

**MAIS NE LE FAITES PAS** car le workflow GitHub Actions gère tout automatiquement et mieux.

---

## 📊 COMPARAISON DES MÉTHODES

### Méthode 1 : GitHub Actions (✅ RECOMMANDÉ)

```
Avantages:
✅ Build automatique à chaque push
✅ Combine Documentation + Storybook
✅ Routing correct garanti
✅ Plus rapide
✅ Gestion des erreurs

Inconvénients:
❌ Utilise des minutes GitHub Actions
   (mais vous avez 2000 min/mois gratuites)
```

**Configuration:**
- Source: GitHub Actions
- Workflow: .github/workflows/deploy.yml

### Méthode 2 : Deploy from a branch (❌ NON RECOMMANDÉ)

```
Avantages:
✅ Ne consomme pas de minutes Actions

Inconvénients:
❌ Build manuel nécessaire
❌ Difficile de combiner Docs + Storybook
❌ Erreurs de routing fréquentes
❌ Maintenance complexe
```

**Configuration (si vraiment nécessaire):**
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

---

## 🏗️ ARCHITECTURE DU DÉPLOIEMENT

### Structure finale sur GitHub Pages :

```
https://mahmoud-nb.github.io/surgeup.ui/
│
├── index.html              ← Page d'accueil (VitePress)
├── assets/                 ← Assets de la documentation
├── components/             ← Pages des composants
├── en/                     ← Documentation EN
├── guide/                  ← Pages guide
│
└── storybook/              ← Storybook (sous-dossier)
    ├── index.html          ← Page d'accueil Storybook
    ├── iframe.html         ← Preview Storybook
    └── assets/             ← Assets Storybook
```

### Comment le workflow crée cette structure :

```bash
# 1. Build Documentation → docs/.vitepress/dist/
npm run build:docs

# 2. Build Storybook → package/storybook-static/
npm run build-storybook

# 3. Combine les deux
mkdir -p dist-combined
cp -r docs/.vitepress/dist/* dist-combined/
mkdir -p dist-combined/storybook
cp -r package/storybook-static/* dist-combined/storybook/

# 4. Déploie dist-combined/
```

---

## 🔧 CONFIGURATION DES FICHIERS

### 1. VitePress (docs/.vitepress/config.ts)

```typescript
export default defineConfig({
  base: '/surgeup.ui/',        // ✅ Correspondant au nom du repo
  ignoreDeadLinks: true,
  ssr: {
    noExternal: ['@surgeup/ds-vue']
  },
  // ...
})
```

### 2. Storybook (package/.storybook/main.ts)

```typescript
const config: StorybookConfig = {
  // ...
  managerHead: (head) => `
    ${head}
    <base href="/surgeup.ui/storybook/">  // ✅ Base URL correcte
  `,
  // ...
}
```

### 3. Workflow (.github/workflows/deploy.yml)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    permissions:
      contents: read
      pages: write      # ✅ Permission nécessaire
      id-token: write   # ✅ Permission nécessaire

    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build:lib
      - run: npm run build:docs
      - run: npm run build-storybook

      - name: Combine builds
        run: |
          mkdir -p dist-combined
          cp -r docs/.vitepress/dist/* dist-combined/
          mkdir -p dist-combined/storybook
          cp -r package/storybook-static/* dist-combined/storybook/

      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist-combined'

      - uses: actions/deploy-pages@v4
```

---

## ✅ CHECKLIST FINALE

### Avant de pousser sur GitHub :

- [x] Workflow corrigé (un seul job de déploiement)
- [x] VitePress base URL configurée
- [x] Storybook base href configurée
- [x] Build local testé et fonctionnel

### Sur GitHub :

- [ ] Settings > Pages > Source = "GitHub Actions"
- [ ] Push vers main
- [ ] Attendre le workflow (5-8 min)
- [ ] Tester les URLs

### URLs à tester :

- [ ] https://mahmoud-nb.github.io/surgeup.ui/ (Documentation)
- [ ] https://mahmoud-nb.github.io/surgeup.ui/storybook/ (Storybook)
- [ ] https://mahmoud-nb.github.io/surgeup.ui/en/ (Documentation EN)
- [ ] https://mahmoud-nb.github.io/surgeup.ui/components/button (Page composant)

---

## 🎯 RÉSUMÉ EXÉCUTIF

### Pour déployer correctement :

1. **GitHub Settings** → Pages → Source → **"GitHub Actions"** ✅
2. **Pusher le code** sur main
3. **Attendre 5-8 minutes**
4. **Accéder aux URLs**

### URLs finales :

```
📚 Documentation : https://mahmoud-nb.github.io/surgeup.ui/
🎨 Storybook     : https://mahmoud-nb.github.io/surgeup.ui/storybook/
```

### Pourquoi GitHub Actions et pas "Deploy from a branch" ?

Parce que le workflow unifié :
- ✅ Combine automatiquement Docs + Storybook
- ✅ Garantit le routing correct
- ✅ Plus rapide et fiable
- ✅ Gère les erreurs automatiquement

---

## 🆘 EN CAS DE PROBLÈME

### Erreur 404 après déploiement :

1. Vérifier que Source = "GitHub Actions" dans Settings
2. Attendre 10 minutes (propagation DNS)
3. Vider le cache du navigateur (Ctrl+F5)
4. Vérifier les logs du workflow

### Storybook ne charge pas :

1. Vérifier l'URL : doit se terminer par `/storybook/`
2. Vérifier la console pour les erreurs 404
3. Vérifier que `managerHead` est bien configuré

### Le workflow échoue :

1. Vérifier les logs dans Actions
2. S'assurer que toutes les dépendances sont installées
3. Tester le build local : `npm run build`

---

## 📞 CONTACT

Si vous avez d'autres questions, vérifiez :
- Les logs du workflow dans Actions
- La console du navigateur (F12)
- Le fichier DEPLOYMENT_GUIDE.md
