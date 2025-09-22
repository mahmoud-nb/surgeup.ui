# Installation

## 📚 Ressources

- **Documentation** : Guide complet avec exemples
- **[Storybook](http://localhost:6006)** : Exemples interactifs et playground des composants

## Prérequis

- Vue.js 3.3+
- Node.js 16+

## Installation via npm

```bash
npm install @surgeup/ds-vue
```

## Installation via yarn

```bash
yarn add @surgeup/ds-vue
```

## Installation via pnpm

```bash
pnpm add @surgeup/ds-vue
```

## Configuration

### Import global

```js
// main.js
import { createApp } from 'vue'
import SurgeUpDS from '@surgeup/ds-vue'
import '@surgeup/ds-vue/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(SurgeUpDS)
app.mount('#app')
```

### Import sélectif

```vue
<script setup>
import { SuButton } from '@surgeup/ds-vue'
import '@surgeup/ds-vue/style.css'
</script>

<template>
  <SuButton variant="primary">
    Mon bouton
  </SuButton>
</template>
```

### Configuration avec options

```js
// main.js
import { createApp } from 'vue'
import SurgeUpDS from '@surgeup/ds-vue'

const app = createApp(App)

// Personnaliser le préfixe des composants
app.use(SurgeUpDS, {
  prefix: 'My', // Les composants seront MyButton, MyInput, etc.
  
  // Configuration globale des boutons
  buttonRadius: 'lg',     // Rayon large par défaut
  buttonVariant: 'outline', // Variante outline par défaut
  buttonSize: 'lg',       // Taille large par défaut
  
  // Configuration globale des liens
  linkVariant: 'primary', // Variante primary par défaut
  linkSize: 'lg',         // Taille large par défaut
  linkUnderline: 'never'  // Jamais souligné par défaut
})
```

## TypeScript

Le design system inclut des types TypeScript complets. Aucune configuration supplémentaire n'est nécessaire.

```vue
<script setup lang="ts">
import { SuButton } from '@surgeup/ds-vue'
import type { ButtonVariant } from '@surgeup/ds-vue'

const variant: ButtonVariant = 'primary'
</script>
```