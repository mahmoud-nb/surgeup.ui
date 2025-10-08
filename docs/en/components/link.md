```vue
<!-- These links are equivalent -->
<SuLink href="https://vuejs.org" external>Vue.js</SuLink>
<SuLink href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</SuLink>
```

## Global configuration

You can configure default link values when installing the design system:

```js
// main.js
import { createApp } from 'vue'
import SurgeUpDS from '@surgeui/ds-vue'
import '@surgeui/ds-vue/style.css'

const app = createApp(App)

// Configure default values
app.use(SurgeUpDS, {
  linkVariant: 'primary',  // All links will be primary by default
  linkSize: 'lg',         // All links will be large by default
  linkUnderline: 'never'  // All links will never be underlined by default
})
```

### Usage with global configuration

```vue
<template>
  <!-- These links will use globally configured values -->
  <SuLink href="/page">Link with global config</SuLink>
  <SuLink variant="default" size="default" underline="default" href="/page">Same thing explicitly</SuLink>
  
  <!-- These links override global configuration -->
  <SuLink variant="secondary" href="/page">Specific variant</SuLink>
  <SuLink size="sm" href="/page">Specific size</SuLink>
  <SuLink underline="always" href="/page">Specific underline</SuLink>
</template>
```

### Available configuration options

| Option | Type | Description |
|--------|------|-------------|
| `linkVariant` | `'default' \| 'primary' \| 'secondary' \| 'muted'` | Default variant |
| `linkSize` | `'sm' \| 'md' \| 'lg'` | Default size |
| `linkUnderline` | `'always' \| 'hover' \| 'never'` | Default underline behavior |