# Installation

## 📚 Resources

- **Documentation**: Complete guide with examples
- **[Storybook](http://localhost:6006)**: Interactive examples and component playground

## Prerequisites

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

### Global import

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

### Selective import

```vue
<script setup>
import { SuButton } from '@surgeup/ds-vue'
import '@surgeup/ds-vue/style.css'
</script>

<template>
  <SuButton variant="primary">
    My button
  </SuButton>
</template>
```

### Configuration with options

```js
// main.js
import { createApp } from 'vue'
import SurgeUpDS from '@surgeup/ds-vue'

const app = createApp(App)

// Customize component prefix
app.use(SurgeUpDS, {
  prefix: 'My', // Components will be MyButton, MyInput, etc.
  
  // Global button configuration
  buttonRadius: 'lg',     // Large radius by default
  buttonVariant: 'outline', // Outline variant by default
  buttonSize: 'lg',       // Large size by default
  
  // Global link configuration
  linkVariant: 'primary', // Primary variant by default
  linkSize: 'lg',         // Large size by default
  linkUnderline: 'never'  // Never underlined by default
})
```

## TypeScript

The design system includes complete TypeScript types. No additional configuration is needed.

```vue
<script setup lang="ts">
import { SuButton } from '@surgeup/ds-vue'
import type { ButtonVariant } from '@surgeup/ds-vue'

const variant: ButtonVariant = 'primary'
</script>
```