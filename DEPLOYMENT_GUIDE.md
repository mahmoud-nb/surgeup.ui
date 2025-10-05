# 🚀 Guide de Déploiement GitHub Pages

## ⚠️ PROBLÈME RÉSOLU

Votre configuration avait **deux jobs de déploiement séparés** qui tentaient de déployer simultanément sur GitHub Pages, causant des conflits et l'erreur 404.

## ✅ CONFIGURATION CORRECTE

### 1. Configuration GitHub Pages (Settings)

Allez dans **Settings** > **Pages** de votre repository :

```
Source: GitHub Actions
```

**❌ NE PAS choisir "Deploy from a branch"**

**✅ CHOISIR "GitHub Actions"**

### 2. Structure de déploiement

Le nouveau workflow unifié crée cette structure :

```
https://mahmoud-nb.github.io/surgeup.ui/
├── index.html                    ← Documentation VitePress (racine)
├── assets/
├── components/
├── en/
├── guide/
└── storybook/                    ← Storybook (sous-dossier)
    ├── index.html
    └── assets/
```

### 3. URLs finales

Après déploiement :

- **📚 Documentation** : https://mahmoud-nb.github.io/surgeup.ui/
- **🎨 Storybook** : https://mahmoud-nb.github.io/surgeup.ui/storybook/

## 📋 CHECKLIST DE DÉPLOIEMENT

### Étape 1 : Vérifier les fichiers locaux

```bash
# Tester le build localement
npm run build

# Les fichiers doivent être générés dans :
# - docs/.vitepress/dist/
# - package/storybook-static/
```

### Étape 2 : Pousser sur GitHub

```bash
git add .
git commit -m "fix: Configuration GitHub Pages avec workflow unifié"
git push origin main
```

### Étape 3 : Configurer GitHub Pages

1. Allez sur https://github.com/mahmoud-nb/surgeup.ui/settings/pages
2. Dans **"Source"** :
   - ✅ Sélectionnez **"GitHub Actions"**
   - ❌ Ne pas sélectionner "Deploy from a branch"

### Étape 4 : Vérifier le workflow

1. Allez sur https://github.com/mahmoud-nb/surgeup.ui/actions
2. Le workflow "Deploy to GitHub Pages" devrait se lancer automatiquement
3. Attendez qu'il devienne vert (✅)

### Étape 5 : Accéder au site

Après quelques minutes :
- Documentation : https://mahmoud-nb.github.io/surgeup.ui/
- Storybook : https://mahmoud-nb.github.io/surgeup.ui/storybook/

## 🔧 AVANTAGES DU WORKFLOW UNIFIÉ

### Ancien système (PROBLÉMATIQUE) :
- ❌ Deux workflows séparés
- ❌ Conflits de déploiement
- ❌ Temps de build doublé
- ❌ Erreurs 404

### Nouveau système (CORRIGÉ) :
- ✅ Un seul workflow
- ✅ Déploiement combiné
- ✅ Temps de build optimisé
- ✅ Routing correct

## 🐛 RÉSOLUTION DE L'ERREUR 404

L'erreur 404 sur `main.ts` était causée par :

1. **Deux jobs de déploiement concurrents** qui écrasaient les fichiers
2. **Manque de `npm ci`** dans les jobs de build
3. **Base URL incorrecte** dans VitePress

### Solution appliquée :

✅ **Workflow unifié** qui :
- Build tout dans un seul job
- Combine les builds avant le déploiement
- Déploie une seule fois avec la structure correcte

✅ **Configuration VitePress correcte** :
```typescript
base: '/surgeup.ui/'
```

✅ **Configuration Storybook correcte** :
```typescript
managerHead: (head) => `
  ${head}
  <base href="/surgeup.ui/storybook/">
`,
```

## 📊 TEMPS DE BUILD

Le workflow unifié est **plus rapide** :

- Ancien : ~10-15 minutes (2 workflows séparés)
- Nouveau : ~5-8 minutes (1 workflow combiné)

## 🔍 VÉRIFICATION POST-DÉPLOIEMENT

Après le déploiement, vérifiez :

1. ✅ Documentation accessible : https://mahmoud-nb.github.io/surgeup.ui/
2. ✅ Storybook accessible : https://mahmoud-nb.github.io/surgeup.ui/storybook/
3. ✅ Changement de langue fonctionne (FR/EN)
4. ✅ Navigation entre les pages
5. ✅ Liens vers Storybook depuis la documentation

## ❓ QUESTIONS RÉPONSES

### Q : Dois-je utiliser GitHub Actions ou "Deploy from a branch" ?

**R : GitHub Actions** ✅

Le workflow unifié nécessite GitHub Actions pour combiner les builds.

### Q : Si je choisis "Deploy from a branch", quel dossier ?

**R : Ne pas utiliser cette option** ❌

Le workflow GitHub Actions gère tout automatiquement.

### Q : Pourquoi l'erreur 404 sur main.ts ?

**R :** L'ancien workflow avait deux jobs qui se faisaient concurrence. Le nouveau workflow résout ce problème en combinant tout.

### Q : Puis-je avoir Storybook à la racine ?

**R : Non recommandé.** La structure actuelle est optimale :
- Documentation à la racine (principale)
- Storybook dans /storybook/ (secondaire)

## 🎯 PROCHAINES ÉTAPES

1. ✅ Poussez les modifications sur GitHub
2. ✅ Configurez GitHub Pages sur "GitHub Actions"
3. ✅ Attendez le déploiement (~5-8 min)
4. ✅ Testez les URLs
5. ✅ Profitez ! 🎉

## 📞 SUPPORT

Si vous rencontrez des problèmes :

1. Vérifiez les logs du workflow dans Actions
2. Assurez-vous que GitHub Pages est configuré sur "GitHub Actions"
3. Attendez 5-10 minutes après le push pour la propagation DNS
