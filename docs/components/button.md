# Button

Composant bouton flexible avec plusieurs variantes, tailles et états. Supporte les interactions au clavier et les états de chargement.

## Exemples

### Variantes

<div class="component-demo">
  <div class="demo-section">
    <h4>Variantes disponibles</h4>
    <div class="demo-buttons">
      <SuButton variant="primary">Primary</SuButton>
      <SuButton variant="secondary">Secondary</SuButton>
      <SuButton variant="outline">Outline</SuButton>
      <SuButton variant="ghost">Ghost</SuButton>
    </div>
  </div>
</div>

```vue
<template>
  <SuButton variant="primary">Primary</SuButton>
  <SuButton variant="secondary">Secondary</SuButton>
  <SuButton variant="outline">Outline</SuButton>
  <SuButton variant="ghost">Ghost</SuButton>
</template>
```

### Tailles

<div class="component-demo">
  <div class="demo-section">
    <h4>Tailles disponibles</h4>
    <div class="demo-buttons">
      <SuButton size="sm">Small</SuButton>
      <SuButton size="md">Medium</SuButton>
      <SuButton size="lg">Large</SuButton>
    </div>
  </div>
</div>

```vue
<template>
  <SuButton size="sm">Small</SuButton>
  <SuButton size="md">Medium</SuButton>
  <SuButton size="lg">Large</SuButton>
</template>
```

### États

<div class="component-demo">
  <div class="demo-section">
    <h4>États du bouton</h4>
    <div class="demo-buttons">
      <SuButton>Normal</SuButton>
      <SuButton :disabled="true">Disabled</SuButton>
      <SuButton :loading="true">Loading</SuButton>
    </div>
  </div>
</div>

```vue
<template>
  <SuButton>Normal</SuButton>
  <SuButton :disabled="true">Disabled</SuButton>
  <SuButton :loading="true">Loading</SuButton>
</template>
```

### Pleine largeur

<div class="component-demo">
  <div class="demo-section">
    <h4>Bouton pleine largeur</h4>
    <div class="demo-buttons-vertical">
      <SuButton :block="true">Bouton pleine largeur</SuButton>
      <SuButton variant="outline" :block="true">Outline pleine largeur</SuButton>
    </div>
  </div>
</div>

```vue
<template>
  <SuButton :block="true">Bouton pleine largeur</SuButton>
  <SuButton variant="outline" :block="true">Outline pleine largeur</SuButton>
</template>
```

### Accessibilité

<div class="component-demo">
  <div class="demo-section">
    <h4>Props d'accessibilité</h4>
    <div class="demo-buttons">
      <SuButton aria-label="Fermer la fenêtre">×</SuButton>
      <SuButton aria-describedby="help-text">Aide</SuButton>
      <SuButton :aria-pressed="true" variant="secondary">Activé</SuButton>
    </div>
    <p id="help-text" class="help-text">Ce bouton ouvre l'aide contextuelle</p>
  </div>
</div>

```vue
<template>
  <SuButton aria-label="Fermer la fenêtre">×</SuButton>
  <SuButton aria-describedby="help-text">Aide</SuButton>
  <SuButton :aria-pressed="true" variant="secondary">Activé</SuButton>
  <p id="help-text">Ce bouton ouvre l'aide contextuelle</p>
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Variante visuelle du bouton |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Taille du bouton |
| `disabled` | `boolean` | `false` | Désactive le bouton |
| `loading` | `boolean` | `false` | Affiche un spinner de chargement |
| `block` | `boolean` | `false` | Prend toute la largeur disponible |
| `ariaLabel` | `string` | `undefined` | Label accessible pour les lecteurs d'écran |
| `ariaDescribedBy` | `string` | `undefined` | ID de l'élément qui décrit le bouton |
| `ariaExpanded` | `boolean` | `undefined` | Indique si un élément contrôlé est étendu |
| `ariaPressed` | `boolean` | `undefined` | Indique l'état pressé d'un bouton toggle |
| `role` | `string` | `undefined` | Rôle ARIA personnalisé |
| `tabIndex` | `number` | `0` | Ordre de tabulation |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `@click` | `(event: MouseEvent) => void` | Émis lors du clic sur le bouton |
| `@focus` | `(event: FocusEvent) => void` | Émis lors du focus sur le bouton |
| `@blur` | `(event: FocusEvent) => void` | Émis lors de la perte de focus |
| `@keydown` | `(event: KeyboardEvent) => void` | Émis lors de l'appui sur une touche |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Contenu du bouton |

## Accessibilité

Le composant Button respecte les normes WCAG 2.1 AA :

### ✅ Fonctionnalités d'accessibilité

- **Navigation au clavier** : Support des touches Entrée et Espace
- **Focus visible** : Indicateur de focus clair et contrasté
- **Tailles minimales** : Respecte les tailles minimales de cible tactile (44px)
- **Contraste** : Ratios de contraste conformes WCAG AA (4.5:1 minimum)
- **États ARIA** : Support complet des attributs ARIA
- **Lecteurs d'écran** : Labels et descriptions accessibles
- **Réduction d'animation** : Respect de `prefers-reduced-motion`
- **Mode sombre** : Contraste adapté en mode sombre
- **Contraste élevé** : Support de `prefers-contrast: high`

### 🎯 Bonnes pratiques

```vue
<!-- Bouton avec label accessible -->
<SuButton aria-label="Supprimer l'élément">
  <TrashIcon />
</SuButton>

<!-- Bouton avec description -->
<SuButton aria-describedby="save-help">
  Sauvegarder
</SuButton>
<div id="save-help">Sauvegarde automatique toutes les 30 secondes</div>

<!-- Bouton toggle -->
<SuButton 
  :aria-pressed="isActive"
  @click="toggle"
>
  {{ isActive ? 'Activé' : 'Désactivé' }}
</SuButton>
```

## Exemples d'usage

### Bouton avec gestionnaire de clic

```vue
<script setup>
const handleClick = () => {
  console.log('Bouton cliqué!')
}
</script>

<template>
  <SuButton @click="handleClick">
    Cliquez-moi
  </SuButton>
</template>
```

### Bouton de soumission de formulaire

```vue
<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Logique de soumission
    await submitForm()
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <!-- Champs du formulaire -->
    <SuButton 
      type="submit" 
      :loading="isSubmitting"
      :disabled="isSubmitting"
      :aria-label="isSubmitting ? 'Envoi en cours...' : 'Envoyer le formulaire'"
    >
      {{ isSubmitting ? 'Envoi...' : 'Envoyer' }}
    </SuButton>
  </form>
</template>
```