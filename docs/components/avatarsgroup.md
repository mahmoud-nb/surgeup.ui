# AvatarsGroup

Composant AvatarsGroup pour afficher une série d'avatars avec gestion du surplus, espacement contrôlé et slots before/after. Idéal pour montrer les équipes, participants ou collaborateurs.

## Exemples d'utilisation

### AvatarsGroup de base

<div class="component-demo">
  <div class="demo-section">
    <h4>Groupe d'avatars simple</h4>
    <div class="demo-inputs">
      <SuAvatarsGroup 
        :avatars="[
          { id: '1', src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', name: 'John Doe', alt: 'John Doe' },
          { id: '2', name: 'Marie Dupont', alt: 'Marie Dupont' },
          { id: '3', src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100', name: 'Pierre Martin', alt: 'Pierre Martin' },
          { id: '4', name: 'Sophie Chen', alt: 'Sophie Chen' }
        ]"
      />
    </div>
  </div>
</div>

```vue
<script setup>
const teamMembers = [
  { id: '1', src: 'photo1.jpg', name: 'John Doe', alt: 'John Doe' },
  { id: '2', name: 'Marie Dupont', alt: 'Marie Dupont' },
  { id: '3', src: 'photo3.jpg', name: 'Pierre Martin', alt: 'Pierre Martin' },
  { id: '4', name: 'Sophie Chen', alt: 'Sophie Chen' }
]
</script>

<template>
  <SuAvatarsGroup :avatars="teamMembers" />
</template>
```

### Avec surplus (overflow)

<div class="component-demo">
  <div class="demo-section">
    <h4>Limitation du nombre d'avatars</h4>
    <div class="demo-inputs">
      <SuAvatarsGroup 
        :avatars="[
          { id: '1', src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', name: 'John Doe', alt: 'John Doe' },
          { id: '2', name: 'Marie Dupont', alt: 'Marie Dupont' },
          { id: '3', src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100', name: 'Pierre Martin', alt: 'Pierre Martin' },
          { id: '4', name: 'Sophie Chen', alt: 'Sophie Chen' },
          { id: '5', name: 'Alex Johnson', alt: 'Alex Johnson' },
          { id: '6', name: 'Emma Wilson', alt: 'Emma Wilson' },
          { id: '7', name: 'Lucas Brown', alt: 'Lucas Brown' }
        ]"
        :max="4"
      />
    </div>
  </div>
</div>

```vue
<template>
  <SuAvatarsGroup 
    :avatars="longTeamList"
    :max="4"
  />
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatars` | `AvatarProps[]` | `[]` | Liste des avatars à afficher |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Taille des avatars |
| `variant` | `'circle' \| 'rounded' \| 'square'` | `'circle'` | Forme des avatars |
| `max` | `number` | `5` | Nombre maximum d'avatars visibles |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Espacement entre les avatars |
| `clickable` | `boolean` | `false` | Avatars cliquables |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `@avatar-click` | `(avatar: any, index: number, event: MouseEvent) => void` | Émis lors du clic sur un avatar |

### Slots

| Slot | Description |
|------|-------------|
| `before` | Contenu affiché avant les avatars |
| `after` | Contenu affiché après les avatars |

## Accessibilité

Le composant AvatarsGroup respecte les normes WCAG 2.1 AA avec support complet de la navigation au clavier et des lecteurs d'écran.