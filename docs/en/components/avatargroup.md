# AvatarGroup

AvatarGroup component to display a series of avatars with overflow management, controlled spacing and before/after slots. Ideal for showing teams, participants or collaborators.

## Usage examples

### Basic AvatarGroup

<div class="component-demo">
  <div class="demo-section">
    <h4>Simple avatar group</h4>
    <div class="demo-inputs">
      <SuAvatarGroup 
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
  <SuAvatarGroup :avatars="teamMembers" />
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatars` | `AvatarProps[]` | `[]` | List of avatars to display |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Avatar size |
| `variant` | `'circle' \| 'rounded' \| 'square'` | `'circle'` | Avatar shape |
| `max` | `number` | `5` | Maximum number of visible avatars |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Spacing between avatars |
| `clickable` | `boolean` | `false` | Clickable avatars |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `@avatar-click` | `(avatar: any, index: number, event: MouseEvent) => void` | Emitted when an avatar is clicked |

### Slots

| Slot | Description |
|------|-------------|
| `before` | Content displayed before avatars |
| `after` | Content displayed after avatars |

## Accessibility

The AvatarGroup component follows WCAG 2.1 AA standards with complete keyboard navigation and screen reader support.