<script setup lang="ts">
import { computed, h, Fragment, Comment, Text } from 'vue'
import Link from '../atoms/Link.vue'

export interface LinksGroupProps {
  gap?: 'sm' | 'md' | 'lg' | 'none'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'primary' | 'secondary' | 'muted'
  underline?: 'always' | 'hover' | 'never'
  direction?: 'horizontal' | 'vertical'
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
}

const props = withDefaults(defineProps<LinksGroupProps>(), {
  gap: 'md',
  direction: 'horizontal'
})

const slots = defineSlots<{
  default(): any
}>()

// Classes CSS pour le container
const containerClasses = computed(() => [
  'su-links-group',
  `su-links-group--gap-${props.gap}`,
  `su-links-group--${props.direction}`,
  {
    'su-links-group--connected': props.gap === 'none'
  }
])

// Traitement des liens du slot avec propagation des props
const processedLinks = computed(() => {
  if (!slots?.default) return []

  const children = (slots?.['default']?.() ?? [])
  const processedChildren = []

  for (const vnode of children) {
    // Vérifie si le VNode est une instance du composant Link
    if (vnode.type === Link) {
      // Crée un nouvel objet de props en fusionnant les props existantes
      // avec les props du LinksGroup (qui ont la priorité)
      const newProps = { ...vnode.props }

      // Force les props size, variant et underline si définies sur le LinksGroup
      if (props.size) {
        newProps.size = props.size
      }
      if (props.variant) {
        newProps.variant = props.variant
      }
      if (props.underline) {
        newProps.underline = props.underline
      }

      // Ajoute des classes CSS spécifiques pour le gap='none'
      if (props.gap === 'none') {
        const existingClass = newProps.class || ''
        newProps.class = `${existingClass} su-links-group__link`.trim()
      }

      // Recrée le VNode du lien avec les nouvelles props
      processedChildren.push(h(vnode.type, newProps, vnode?.children))
    } else if (vnode.type === Comment || vnode.type === Text || vnode.type === Fragment) {
      // Ignore les commentaires, nœuds de texte et fragments
      continue
    } else {
      // Avertit si un élément non-Link est trouvé
      console.warn('LinksGroup expects only Link components as children. Found:', vnode.type)
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
      v-for="(link, index) in processedLinks" 
      :key="index"
      :is="link"
    />
  </div>
</template>

<style lang="scss">
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.su-links-group {
  @include component-group(md); // Gap par défaut
  
  &--gap-sm { @include component-group(sm); }
  &--gap-md { @include component-group(md); }
  &--gap-lg { @include component-group(lg); }
  &--gap-none { @include component-group(none); }
  
  // Direction
  &--vertical {
    flex-direction: column;
    align-items: flex-start;
  }
  
  &--horizontal {
    flex-direction: row;
  }
  
  // Style connecté pour gap='none'
  &--connected {
    .su-links-group__link {
      @include connected-elements($border-radius-sm);
      border: 1px solid transparent;
      
      // Bordures pour l'effet connecté
      &:not(.su-link--disabled) {
        border-color: $gray-200;
        background-color: white;
        
        &:hover {
          border-color: $primary-300;
          background-color: $primary-50;
        }
        
        &:focus-visible {
          border-color: $primary-500;
        }
        
        &:active {
          background-color: $primary-100;
        }
      }
    }
    
    // Direction verticale pour les liens connectés
    &.su-links-group--vertical {
      .su-links-group__link {
        // Override pour la direction verticale
        margin-left: 0;
        margin-top: -1px;
        
        &:first-child {
          margin-top: 0;
          border-top-left-radius: $border-radius-sm;
          border-top-right-radius: $border-radius-sm;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        
        &:last-child {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: $border-radius-sm;
          border-bottom-right-radius: $border-radius-sm;
        }
        
        &:only-child {
          border-radius: $border-radius-sm;
        }
      }
    }
  }
}

// Mode sombre
@media (prefers-color-scheme: dark) {
  .su-links-group--connected {
    .su-links-group__link:not(.su-link--disabled) {
      border-color: $gray-600;
      background-color: $gray-800;
      
      &:hover {
        border-color: $primary-400;
        background-color: rgba($primary-400, 0.1);
      }
      
      &:focus-visible {
        border-color: $primary-400;
      }
      
      &:active {
        background-color: rgba($primary-400, 0.2);
      }
    }
  }
}
</style>