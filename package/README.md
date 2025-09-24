# SurgeUp Design System

A modern Vue.js 3 component library with Composition API, designed to create beautiful and consistent user interfaces.

[![npm version](https://badge.fury.io/js/%40surgeup%2Fds-vue.svg)](https://badge.fury.io/js/%40surgeup%2Fds-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg)](https://www.typescriptlang.org/)

## ✨ Features

- 🎨 **Modern Design** - Polished and professional components
- 🔧 **TypeScript** - Full TypeScript support for better developer experience
- 🎯 **Composition API** - Built with Vue 3 Composition API
- 📱 **Responsive** - Components adapted to all screen sizes
- 🌙 **Dark Mode** - Native dark mode support
- ♿ **Accessible** - WCAG 2.1 AA compliant with complete accessibility support
- ⚡ **Performance** - Optimized for best performance
- 🎨 **Customizable** - Global configuration and theming support

## 🚀 Quick Start

### Installation

```bash
npm install @surgeup/ds-vue
```

### Basic Usage

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

### Global Installation

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

## 📚 Available Components

### Form Components
- **Input** - Flexible input with prefixes, suffixes, and validation states
- **Textarea** - Auto-resizing textarea with character counter
- **SelectBox** - Custom select with search, multiple selection, and groups
- **RadioGroup** - Radio button groups with card and default styles
- **CheckboxGroup** - Checkbox groups with multiple selection support
- **Switch** - Toggle switches with intelligent label positioning
- **Slider** - Range sliders with dual-range, tooltips, and custom marks
- **FileUpload** - File upload with drag & drop and validation

### Action Components
- **Button** - Flexible buttons with variants, sizes, and loading states
- **Link** - Smart links with Vue Router support and external link detection

### Layout Components
- **ButtonsGroup** - Organize buttons with controlled spacing
- **LinksGroup** - Organize links with controlled spacing
- **FormFields** - Organize form fields with sections and responsive layout
- **FloatButton** - Floating action button with slots and positioning

## 🎯 Component Examples

### Button with Icon

```vue
<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <SuButton variant="primary" :icon="PlusIcon" iconDisplay="left">
    Add Item
  </SuButton>
</template>
```

### Form with Validation

```vue
<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  country: '',
  notifications: false
})

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' }
]
</script>

<template>
  <SuFormFields role="form" aria-label="Registration form">
    <template #head>
      <h2>Create Account</h2>
    </template>

    <SuInput 
      type="email"
      label="Email"
      placeholder="name@example.com"
      v-model="form.email"
      required
    />
    
    <SuInput 
      type="password"
      label="Password"
      placeholder="••••••••"
      v-model="form.password"
      required
    />
    
    <SuSelectBox 
      :options="countries"
      label="Country"
      placeholder="Select your country"
      v-model="form.country"
      searchable
    />
    
    <SuSwitch 
      label="Email notifications"
      rightLabel="Enabled"
      v-model="form.notifications"
    />

    <template #footer>
      <SuButton variant="primary" block>
        Create Account
      </SuButton>
    </template>
  </SuFormFields>
</template>
```

### Connected Button Group

```vue
<script setup>
import { PlusIcon, CogIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <SuButtonsGroup gap="none" variant="outline" size="sm">
    <SuButton :icon="PlusIcon" iconDisplay="only" aria-label="Add" />
    <SuButton :icon="CogIcon" iconDisplay="only" aria-label="Settings" />
    <SuButton :icon="TrashIcon" iconDisplay="only" aria-label="Delete" />
  </SuButtonsGroup>
</template>
```

## 🎨 Global Configuration

Customize default component behavior when installing:

```js
app.use(SurgeUpDS, {
  // Component prefix (default: 'Su')
  prefix: 'My', // Components become MyButton, MyInput, etc.
  
  // Button defaults
  buttonRadius: 'lg',
  buttonVariant: 'outline',
  buttonSize: 'lg',
  
  // Link defaults
  linkVariant: 'primary',
  linkSize: 'lg',
  linkUnderline: 'never'
})
```

## ♿ Accessibility

All components follow WCAG 2.1 AA standards:

- **Keyboard Navigation** - Full keyboard support
- **Screen Readers** - Proper ARIA attributes and announcements
- **Focus Management** - Clear focus indicators and logical tab order
- **Color Contrast** - WCAG AA compliant contrast ratios (4.5:1 minimum)
- **Touch Targets** - Minimum 44px touch targets
- **Reduced Motion** - Respects `prefers-reduced-motion`
- **High Contrast** - Supports `prefers-contrast: high`
- **RTL Support** - Right-to-left language support

## 🌙 Dark Mode

Dark mode is automatically supported through CSS media queries:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles are automatically applied */
}
```

## 📱 Responsive Design

All components are responsive by default:

- **Mobile-first** approach
- **Flexible layouts** that adapt to screen size
- **Touch-friendly** interactions
- **Automatic responsive behavior** (e.g., FormFields switches to vertical on mobile)

## 🎭 Storybook

Explore all components interactively in Storybook:

```bash
npm run storybook
```

## 🛠️ Development

### Prerequisites

- Node.js 16+
- Vue.js 3.3+

### Build the library

```bash
npm run build
```

### Development mode

```bash
npm run dev
```

### Run Storybook

```bash
npm run storybook
```

## 📖 Documentation

Visit our [complete documentation](https://surgeup-ds.netlify.app) for:

- **Component API** - Detailed props, events, and slots
- **Usage examples** - Real-world implementation examples
- **Accessibility guide** - Best practices for inclusive design
- **Customization** - Theming and configuration options

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Documentation](https://surgeup-ds.netlify.app)
- [Storybook](https://surgeup-ds-storybook.netlify.app)
- [GitHub Repository](https://github.com/surgeup/design-system)
- [npm Package](https://www.npmjs.com/package/@surgeup/ds-vue)

## 🏷️ Component List

### Form Components
- `SuInput` - Text inputs with prefixes, suffixes, and validation
- `SuTextarea` - Auto-resizing textarea with character counter
- `SuSelectBox` - Custom select with search and multiple selection
- `SuRadioGroup` - Radio button groups with card styles
- `SuCheckboxGroup` - Checkbox groups with selection limits
- `SuSwitch` - Toggle switches with side labels
- `SuSlider` - Range sliders with dual-range and tooltips
- `SuFileUpload` - File upload with drag & drop

### Action Components
- `SuButton` - Buttons with variants, sizes, and loading states
- `SuLink` - Smart links with Vue Router and external link support

### Layout Components
- `SuButtonsGroup` - Organize buttons with spacing control
- `SuLinksGroup` - Organize links with spacing control
- `SuFormFields` - Organize form fields with sections
- `SuFloatButton` - Floating action button with positioning and slots

### Utility Components
- `SuFormField` - Base form field wrapper with label and message

---

Made with ❤️ by the SurgeUp team