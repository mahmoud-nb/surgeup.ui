<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '@/types'

export interface Props extends ButtonProps {}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  radius: 'default',
  disabled: false,
  loading: false,
  block: false,
  iconDisplay: 'left',
  tabIndex: 0
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  keydown: [event: KeyboardEvent]
}>()

const classes = computed(() => {
  return [
    'su-button',
    props.variant !== 'default' ? `su-button--${props.variant}` : 'su-button--default-variant',
    props.size !== 'default' ? `su-button--${props.size}` : 'su-button--default-size',
    props.radius !== 'default' ? `su-button--radius-${props.radius}` : 'su-button--default-radius',
    {
      'su-button--disabled': props.disabled,
      'su-button--loading': props.loading,
      'su-button--block': props.block,
      'su-button--icon-only': props.icon && props.iconDisplay === 'only',
      'su-button--icon-right': props.icon && props.iconDisplay === 'right'
    }
  ]
})

// Détermine si le bouton contient du texte
const hasText = computed(() => {
  return !(props.icon && props.iconDisplay === 'only')
})

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
}

const handleKeydown = (event: KeyboardEvent) => {
  // Support des touches Entrée et Espace pour l'accessibilité
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    if (!props.disabled && !props.loading) {
      emit('click', event as any)
    }
  }
  emit('keydown', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

// Calcul des attributs ARIA
const ariaAttributes = computed(() => {
  const attrs: Record<string, any> = {}
  
  if (props.ariaLabel) attrs['aria-label'] = props.ariaLabel
  if (props.ariaDescribedBy) attrs['aria-describedby'] = props.ariaDescribedBy
  if (props.ariaExpanded !== undefined) attrs['aria-expanded'] = props.ariaExpanded
  if (props.ariaPressed !== undefined) attrs['aria-pressed'] = props.ariaPressed
  if (props.role) attrs['role'] = props.role
  
  // États automatiques
  if (props.loading) {
    attrs['aria-busy'] = 'true'
    attrs['aria-live'] = 'polite'
  }
  
  if (props.disabled) {
    attrs['aria-disabled'] = 'true'
  }
  
  // Pour les boutons avec icône seule, s'assurer qu'il y a un label
  if (props.icon && props.iconDisplay === 'only' && !props.ariaLabel) {
    console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility')
  }
  
  return attrs
})
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
    :tabindex="disabled ? -1 : tabIndex"
    v-bind="ariaAttributes"
    @click="handleClick"
    @keydown="handleKeydown"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <span v-if="loading" class="su-button__spinner">
      <svg class="su-spinner" viewBox="0 0 24 24">
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2"
          aria-hidden="true"
        />
        <path 
          d="M12 2a10 10 0 0 1 10 10" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round"
          aria-hidden="true"
        />
      </svg>
      <span class="sr-only">Chargement en cours...</span>
    </span>
    
    <template v-if="!loading">
      <!-- Icône -->
      <component 
        v-if="icon" 
        :is="icon" 
        class="su-button__icon"
        aria-hidden="true"
      />
      
      <!-- Contenu textuel -->
      <span v-if="hasText" class="su-button__content">
        <slot />
      </span>
    </template>
  </button>
</template>

<style lang="scss">
@use '../../styles/variables' as *;

.su-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  position: relative;
  gap: 0.5rem;
  
  // Focus visible amélioré pour l'accessibilité
  &:focus-visible {
    outline: 2px solid $primary-600;
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba($primary-600, 0.2);
  }

  // Support du mode de contraste élevé
  @media (prefers-contrast: high) {
    border-width: 2px;
    
    &:focus-visible {
      outline-width: 3px;
    }
  }

  // Support de la réduction des animations
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &:hover:not(&--disabled):not(&--loading) {
      transform: none;
    }
    
    .su-spinner {
      animation: none;
    }
  }

  // Radius configurations
  &--radius-none {
    border-radius: var(--su-border-radius-none);
  }
  
  &--radius-sm {
    border-radius: var(--su-border-radius-sm);
  }
  
  &--radius-md {
    border-radius: var(--su-border-radius-md);
  }
  
  &--radius-lg {
    border-radius: var(--su-border-radius-lg);
  }
  
  &--radius-xl {
    border-radius: var(--su-border-radius-xl);
  }
  
  &--default-radius {
    border-radius: var(--su-button-default-radius);
  }

  // Sizes
  &--default-size {
    padding: var(--su-button-size-md-padding);
    font-size: var(--su-button-size-md-font-size);
    line-height: var(--su-button-size-md-line-height);
    min-height: var(--su-button-size-md-min-height);
    
    &.su-button--icon-only {
      padding: var(--su-button-size-md-icon-only-padding);
      width: var(--su-button-size-md-icon-only-width);
    }
  }
  
  &--sm {
    padding: var(--su-button-size-sm-padding);
    font-size: var(--su-button-size-sm-font-size);
    line-height: var(--su-button-size-sm-line-height);
    min-height: var(--su-button-size-sm-min-height);
    
    &.su-button--icon-only {
      padding: var(--su-button-size-sm-icon-only-padding);
      width: var(--su-button-size-sm-icon-only-width);
    }
  }

  &--md {
    padding: var(--su-button-size-md-padding);
    font-size: var(--su-button-size-md-font-size);
    line-height: var(--su-button-size-md-line-height);
    min-height: var(--su-button-size-md-min-height);
    
    &.su-button--icon-only {
      padding: var(--su-button-size-md-icon-only-padding);
      width: var(--su-button-size-md-icon-only-width);
    }
  }

  &--lg {
    padding: var(--su-button-size-lg-padding);
    font-size: var(--su-button-size-lg-font-size);
    line-height: var(--su-button-size-lg-line-height);
    min-height: var(--su-button-size-lg-min-height);
    
    &.su-button--icon-only {
      padding: var(--su-button-size-lg-icon-only-padding);
      width: var(--su-button-size-lg-icon-only-width);
    }
  }

  // Variants
  &--default-variant {
    background-color: var(--su-button-variant-primary-bg);
    color: var(--su-button-variant-primary-color);
    border-color: var(--su-button-variant-primary-border);
    
    &:hover:not(&--disabled):not(&--loading) {
      background-color: var(--su-button-variant-primary-hover-bg);
      transform: translateY(-1px);
      box-shadow: var(--su-button-variant-primary-hover-shadow);
    }

    &:active:not(&--disabled):not(&--loading) {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(59, 130, 246, 0.4);
    }
  }
  
  &--primary {
    background-color: var(--su-button-variant-primary-bg);
    color: var(--su-button-variant-primary-color);
    border-color: var(--su-button-variant-primary-border);
    
    &:hover:not(&--disabled):not(&--loading) {
      background-color: var(--su-button-variant-primary-hover-bg);
      transform: translateY(-1px);
      box-shadow: var(--su-button-variant-primary-hover-shadow);
    }

    &:active:not(&--disabled):not(&--loading) {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(59, 130, 246, 0.4);
    }
  }

  &--secondary {
    background-color: var(--su-button-variant-secondary-bg);
    color: var(--su-button-variant-secondary-color);
    border-color: var(--su-button-variant-secondary-border);

    &:hover:not(&--disabled):not(&--loading) {
      background-color: var(--su-button-variant-secondary-hover-bg);
      border-color: var(--su-button-variant-secondary-hover-border);
      transform: translateY(-1px);
      box-shadow: var(--su-button-variant-secondary-hover-shadow);
    }
  }

  &--outline {
    background-color: var(--su-button-variant-outline-bg);
    color: var(--su-button-variant-outline-color);
    border-color: var(--su-button-variant-outline-border);

    &:hover:not(&--disabled):not(&--loading) {
      background-color: var(--su-button-variant-outline-hover-bg);
      border-color: var(--su-button-variant-outline-hover-border);
      transform: translateY(-1px);
    }
  }

  &--ghost {
    background-color: var(--su-button-variant-ghost-bg);
    color: var(--su-button-variant-ghost-color);
    border-color: var(--su-button-variant-ghost-border);

    &:hover:not(&--disabled):not(&--loading) {
      background-color: var(--su-button-variant-ghost-hover-bg);
      transform: translateY(-1px);
    }
  }

  // States
  &--disabled {
    opacity: 0.6; // Amélioration du contraste
    cursor: not-allowed;
    
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  &--loading {
    cursor: wait;
    
    .su-button__content {
      opacity: 0.7;
    }
  }

  &--block {
    width: 100%;
  }
  
  // Direction de l'icône
  &--icon-right {
    flex-direction: row-reverse;
  }

  // Icon styles
  &__icon {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
  }
  
  // Ajustements pour les boutons avec icônes seules
  &--icon-only {
    gap: 0;
    
    .su-button__icon {
      width: 1.25em;
      height: 1.25em;
    }
  }

  // Spinner
  &__spinner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .su-spinner {
    width: 1em;
    height: 1em;
    animation: spin 1s linear infinite;
  }

  // Classe pour le texte accessible aux lecteurs d'écran uniquement
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

// Dark mode
@media (prefers-color-scheme: dark) {
  .su-button {
    &--secondary {
      background-color: $gray-800;
      color: $gray-100;
      border-color: $gray-700;

      &:hover:not(&--disabled):not(&--loading) {
        background-color: $gray-700;
        border-color: $gray-600;
      }
    }

    &--outline {
      color: $primary-400; // Meilleur contraste en mode sombre
      border-color: $primary-400;

      &:hover:not(&--disabled):not(&--loading) {
        background-color: rgba($primary-400, 0.1);
        border-color: $primary-300;
      }
    }

    &--ghost {
      color: $primary-400;

      &:hover:not(&--disabled):not(&--loading) {
        background-color: rgba($primary-400, 0.1);
      }
    }
  }
}
</style>