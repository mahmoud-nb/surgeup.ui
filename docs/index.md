# SurgeUp Design System

Bibliothèque de composants Vue.js 3 avec Composition API, conçue pour créer des interfaces modernes et cohérentes.

## 📖 Documentation et exemples

- **[Documentation complète](/)** - Guide d'utilisation et API des composants
- **[Storybook](https://mahmoud-nb.github.io/surgeup.ui/storybook/)** - Exemples interactifs et tests des composants

## ✨ Fonctionnalités

- 🎨 **Design moderne** - Composants avec un design soigné et professionnel
- 🔧 **TypeScript** - Support complet de TypeScript pour une meilleure expérience développeur
- 🎯 **Composition API** - Utilise la Composition API de Vue 3
- 📱 **Responsive** - Composants adaptés à tous les écrans
- 🌙 **Mode sombre** - Support natif du mode sombre
- ⚡ **Performance** - Optimisé pour les meilleures performances

## 🚀 Installation rapide

```bash
npm install @surgeup/ds-vue
```

```vue
<script setup>
import { SuButton } from '@surgeup/ds-vue'
import '@surgeup/ds-vue/style.css'
</script>

<template>
  <SuButton variant="primary">
    Mon premier bouton
  </SuButton>
</template>
```

## 📚 Composants disponibles

<div class="component-grid">
  <div class="component-card">
    <h3>Button</h3>
    <p>Composant bouton avec plusieurs variantes et tailles</p>
    <a href="/components/button">Voir la documentation →</a>
  </div>
  
  <div class="component-card">
    <h3>Input</h3>
    <p>Composant input avec préfixes, suffixes et validation</p>
    <a href="/components/input">Voir la documentation →</a>
  </div>
  
  <div class="component-card">
    <h3>SelectBox</h3>
    <p>Composant select avec recherche et sélection multiple</p>
    <a href="/components/selectbox">Voir la documentation →</a>
  </div>
  
  <div class="component-card">
    <h3>Dialog</h3>
    <p>Composant modal et tiroir polyvalent</p>
    <a href="/components/dialog">Voir la documentation →</a>
  </div>
</div>

<style scoped>
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.component-card {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.2s ease;
}

.component-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.component-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}

.component-card p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.component-card a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.component-card a:hover {
  text-decoration: underline;
}
</style>