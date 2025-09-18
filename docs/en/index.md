# SurgeUp Design System

Modern Vue.js 3 component library with Composition API, designed to create modern and consistent interfaces.

## 📖 Documentation and examples

- **[Complete Documentation](/)** - Usage guide and component API
- **[Storybook](http://localhost:6006)** - Interactive examples and component testing

## ✨ Features

- 🎨 **Modern Design** - Components with polished and professional design
- 🔧 **TypeScript** - Full TypeScript support for better developer experience
- 🎯 **Composition API** - Uses Vue 3 Composition API
- 📱 **Responsive** - Components adapted to all screen sizes
- 🌙 **Dark Mode** - Native dark mode support
- ⚡ **Performance** - Optimized for best performance

## 🚀 Quick Installation

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
    My first button
  </SuButton>
</template>
```

## 📚 Available Components

<div class="component-grid">
  <div class="component-card">
    <h3>Button</h3>
    <p>Button component with multiple variants and sizes</p>
    <a href="/en/components/button">View documentation →</a>
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