<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from '../types'

export interface Props extends ButtonProps {}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  block: false,
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
    `su-button--${props.variant}`,
    `su-button--${props.size}`,
    {
      'su-button--disabled': props.disabled,
      'su-button--loading': props.loading,
      'su-button--block': props.block
    }
  ]
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
    <span v-if="!loading" class="su-button__content">
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
@use '../styles/variables' as *;

.su-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: $border-radius-md;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  position: relative;
  
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

  // Sizes
  &--sm {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    min-height: 2rem; // 32px minimum pour l'accessibilité
  }

  &--md {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    min-height: 2.5rem; // 40px minimum pour l'accessibilité
  }

  &--lg {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    min-height: 3rem; // 48px minimum pour l'accessibilité
  }

  // Variants
  &--primary {
    background-color: $primary-600;
    color: white;
    
    &:hover:not(&--disabled):not(&--loading) {
      background-color: $primary-700;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba($primary-600, 0.4);
    }

    &:active:not(&--disabled):not(&--loading) {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba($primary-600, 0.4);
    }
  }

  &--secondary {
    background-color: $gray-100;
    color: $gray-900;
    border-color: $gray-200;

    &:hover:not(&--disabled):not(&--loading) {
      background-color: $gray-200;
      border-color: $gray-300;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba($gray-500, 0.15);
    }
  }

  &--outline {
    background-color: transparent;
    color: $primary-600;
    border-color: $primary-200;

    &:hover:not(&--disabled):not(&--loading) {
      background-color: $primary-50;
      border-color: $primary-300;
      transform: translateY(-1px);
    }
  }

  &--ghost {
    background-color: transparent;
    color: $primary-600;

    &:hover:not(&--disabled):not(&--loading) {
      background-color: $primary-50;
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