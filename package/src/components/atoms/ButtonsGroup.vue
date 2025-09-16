<script setup lang="ts">
import { computed, useSlots, h, Fragment, Comment, Text } from 'vue'
import type { ButtonVariant, ButtonSize } from '@/types'
import Button from './Button.vue'

export interface Props {
  gap?: 'sm' | 'md' | 'lg' | 'none'
  size?: ButtonSize
  variant?: ButtonVariant
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
}

const props = withDefaults(defineProps<Props>(), {
  gap: 'md'
})

const slots = useSlots()

// Classes CSS pour le container
const containerClasses = computed(() => [
  'su-buttons-group',
  `su-buttons-group--gap-${props.gap}`,
  {
    'su-buttons-group--connected': props.gap === 'none'
  }
])

// Traitement des boutons du slot avec propagation des props
const processedButtons = computed(() => {
  if (!slots.default) return []

  const children = slots.default()
  const processedChildren = []

  for (const vnode of children) {
    // Vérifie si le VNode est une instance du composant Button
    if (vnode.type === Button) {
      // Crée un nouvel objet de props en fusionnant les props existantes
      // avec les props du ButtonsGroup (qui ont la priorité)
      const newProps = { ...vnode.props }

      // Force les props size et variant si définies sur le ButtonsGroup
      if (props.size) {
        newProps.size = props.size
      }
      if (props.variant) {
        newProps.variant = props.variant
      }

      // Ajoute des classes CSS spécifiques pour le gap='none'
      if (props.gap === 'none') {
        const existingClass = newProps.class || ''
        newProps.class = `${existingClass} su-buttons-group__button`.trim()
      }

      // Recrée le VNode du bouton avec les nouvelles props
      processedChildren.push(h(vnode.type, newProps, vnode?.children))
    } else if (vnode.type === Comment || vnode.type === Text || vnode.type === Fragment) {
      // Ignore les commentaires, nœuds de texte et fragments
      continue
    } else {
      // Avertit si un élément non-Button est trouvé
      console.warn('ButtonsGroup expects only Button components as children. Found:', vnode.type)
      // On peut choisir de rendre l'élément tel quel ou de l'ignorer
      // Pour la cohérence, on l'ignore ici
    }
  }

  return processedChildren
})

// Attributs ARIA pour l'accessibilité
const ariaAttributes = computed(() => {
  const attrs: Record<string, any> = {}
  
  if (props.ariaLabel) attrs['aria-label'] = props.ariaLabel
  if (props.ariaDescribedBy) attrs['aria-describedby'] = props.ariaDescribedBy
  if (props.role) attrs['role'] = props.role
  
  return attrs
})
</script>

<template>
  <div 
    :class="containerClasses"
    v-bind="ariaAttributes"
  >
    <component 
      v-for="(button, index) in processedButtons" 
      :key="index"
      :is="button"
    />
  </div>
</template>

<style lang="scss">
@use '../../styles/variables' as *;

.su-buttons-group {
  display: inline-flex;
  align-items: center;
  
  // Gaps
  &--gap-sm {
    gap: 0.25rem;
  }
  
  &--gap-md {
    gap: 0.5rem;
  }
  
  &--gap-lg {
    gap: 0.75rem;
  }
  
  &--gap-none {
    gap: 0;
  }
  
  // Style connecté pour gap='none'
  &--connected {
    .su-buttons-group__button {
      margin-left: -1px;
      border-radius: 0;
      position: relative;
      
      // Premier bouton
      &:first-child {
        margin-left: 0;
        border-top-left-radius: $border-radius-md;
        border-bottom-left-radius: $border-radius-md;
      }
      
      // Dernier bouton
      &:last-child {
        border-top-right-radius: $border-radius-md;
        border-bottom-right-radius: $border-radius-md;
      }
      
      // Bouton unique (premier et dernier)
      &:only-child {
        border-radius: $border-radius-md;
      }
      
      // Focus visible avec z-index pour être au-dessus des autres
      &:focus-visible {
        z-index: 1;
      }
      
      // Hover avec z-index pour être au-dessus des autres
      &:hover:not(:disabled) {
        z-index: 1;
      }
      
      // Active avec z-index
      &:active:not(:disabled) {
        z-index: 1;
      }
    }
  }
}

// Support de la réduction des animations
@media (prefers-reduced-motion: reduce) {
  .su-buttons-group {
    .su-buttons-group__button {
      transition: none;
    }
  }
}
</style>