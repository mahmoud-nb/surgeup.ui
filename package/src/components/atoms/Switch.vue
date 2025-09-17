<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { SwitchProps } from '@/types'
import { generateId } from '@/utils/accessibility'

export interface Props extends SwitchProps {}

const props = withDefaults(defineProps<Props>(), {
  value: false,
  size: 'md',
  state: 'default',
  disabled: false,
  readonly: false,
  required: false
})

const emit = defineEmits<{
  'update:value': [value: boolean]
  change: [value: boolean]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  keydown: [event: KeyboardEvent]
}>()

const attrs = useAttrs()

// Génération d'IDs uniques pour l'accessibilité
const switchId = computed(() => attrs.id as string || generateId('switch'))
const messageId = computed(() => props.message ? `${switchId.value}-message` : undefined)

// Classes CSS
const containerClasses = computed(() => [
  'su-switch-container',
  `su-switch-container--${props.size}`,
  `su-switch-container--${props.state}`,
  {
    'su-switch-container--disabled': props.disabled,
    'su-switch-container--readonly': props.readonly,
    'su-switch-container--has-labels': props.leftLabel || props.rightLabel,
    'su-switch-container--centered': props.leftLabel && props.rightLabel
  }
])

const switchClasses = computed(() => [
  'su-switch',
  `su-switch--${props.size}`,
  `su-switch--${props.state}`,
  {
    'su-switch--checked': props.value,
    'su-switch--disabled': props.disabled,
    'su-switch--readonly': props.readonly
  }
])

// Attributs ARIA
const ariaAttributes = computed(() => {
  const attrs: Record<string, any> = {
    role: 'switch',
    'aria-checked': props.value
  }
  
  if (props.ariaLabel) attrs['aria-label'] = props.ariaLabel
  if (props.ariaDescribedBy || messageId.value) {
    const describedBy = [props.ariaDescribedBy, messageId.value].filter(Boolean).join(' ')
    attrs['aria-describedby'] = describedBy
  }
  if (props.ariaInvalid !== undefined) attrs['aria-invalid'] = props.ariaInvalid
  if (props.ariaRequired !== undefined) attrs['aria-required'] = props.ariaRequired
  if (props.required) attrs['aria-required'] = 'true'
  if (props.state === 'error') attrs['aria-invalid'] = 'true'
  
  return attrs
})

// Gestionnaires d'événements
const handleToggle = () => {
  if (props.disabled || props.readonly) return
  
  const newValue = !props.value
  emit('update:value', newValue)
  emit('change', newValue)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault()
    handleToggle()
  }
  emit('keydown', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<template>
  <div class="su-switch-wrapper">
    <!-- Label principal -->
    <label 
      v-if="label" 
      :for="switchId" 
      class="su-switch-main-label"
      :class="{
        'su-switch-main-label--required': required,
        'su-switch-main-label--disabled': disabled
      }"
    >
      {{ label }}
      <span v-if="required" class="su-indicator-required" aria-label="requis">*</span>
    </label>

    <!-- Container du switch -->
    <div :class="containerClasses">
      <!-- Label gauche -->
      <span 
        v-if="leftLabel" 
        class="su-switch-side-label su-switch-side-label--left"
        :class="{
          'su-switch-side-label--active': !value,
          'su-switch-side-label--disabled': disabled
        }"
      >
        {{ leftLabel }}
      </span>

      <!-- Switch -->
      <div
        :id="switchId"
        :class="switchClasses"
        :tabindex="disabled ? -1 : 0"
        v-bind="ariaAttributes"
        @click="handleToggle"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <!-- Track -->
        <div class="su-switch-track">
          <!-- Thumb -->
          <div class="su-switch-thumb">
            <!-- Indicateur visuel optionnel -->
            <div class="su-switch-indicator">
              <svg 
                v-if="value" 
                class="su-switch-icon su-switch-icon--check" 
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
              <svg 
                v-else 
                class="su-switch-icon su-switch-icon--cross" 
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Label droite -->
      <span 
        v-if="rightLabel" 
        class="su-switch-side-label su-switch-side-label--right"
        :class="{
          'su-switch-side-label--active': value,
          'su-switch-side-label--disabled': disabled
        }"
      >
        {{ rightLabel }}
      </span>
    </div>

    <!-- Message d'aide/erreur/succès -->
    <div 
      v-if="message" 
      :id="messageId"
      class="su-switch-message"
      :class="`su-switch-message--${state}`"
      :aria-live="state === 'error' ? 'assertive' : 'polite'"
    >
      {{ message }}
    </div>
  </div>
</template>

<style lang="scss">
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.su-switch-wrapper {
  @include su-form-field-wrapper;
}

.su-switch-main-label {
  @include su-form-field-label;
}

.su-switch-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  &--centered {
    justify-content: center;
  }
  
  &--has-labels:not(&--centered) {
    justify-content: flex-start;
  }
}

.su-switch-side-label {
  font-size: $font-size-sm;
  font-weight: 500;
  color: $text-secondary;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  
  &--active {
    color: $text-primary;
  }
  
  &--disabled {
    color: $text-tertiary;
    cursor: not-allowed;
  }
}

.su-switch {
  position: relative;
  cursor: pointer;
  outline: none;
  border-radius: 9999px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus-visible {
    box-shadow: 0 0 0 3px rgba($primary-500, 0.2);
  }
  
  // Tailles
  &--sm {
    width: 2.75rem; // 44px
    height: 1.5rem; // 24px
    
    .su-switch-thumb {
      width: 1.25rem; // 20px
      height: 1.25rem; // 20px
      margin: 0.125rem; // 2px
    }
    
    .su-switch-icon {
      width: 0.75rem;
      height: 0.75rem;
    }
    
    &.su-switch--checked .su-switch-thumb {
      transform: translateX(1.25rem); // 20px
    }
  }
  
  &--md {
    width: 3.5rem; // 56px
    height: 2rem; // 32px
    
    .su-switch-thumb {
      width: 1.75rem; // 28px
      height: 1.75rem; // 28px
      margin: 0.125rem; // 2px
    }
    
    .su-switch-icon {
      width: 1rem;
      height: 1rem;
    }
    
    &.su-switch--checked .su-switch-thumb {
      transform: translateX(1.5rem); // 24px
    }
  }
  
  &--lg {
    width: 4rem; // 64px
    height: 2.25rem; // 36px
    
    .su-switch-thumb {
      width: 2rem; // 32px
      height: 2rem; // 32px
      margin: 0.125rem; // 2px
    }
    
    .su-switch-icon {
      width: 1.25rem;
      height: 1.25rem;
    }
    
    &.su-switch--checked .su-switch-thumb {
      transform: translateX(1.75rem); // 28px
    }
  }
  
  // États
  &--checked {
    .su-switch-track {
      background-color: $primary-600;
    }
    
    .su-switch-thumb {
      background-color: white;
    }
  }
  
  &--error {
    &.su-switch--checked .su-switch-track {
      background-color: $error-500;
    }
  }
  
  &--success {
    &.su-switch--checked .su-switch-track {
      background-color: $success-500;
    }
  }
  
  &--warning {
    &.su-switch--checked .su-switch-track {
      background-color: $warning-500;
    }
  }
  
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:focus-visible {
      box-shadow: none;
    }
  }
  
  &--readonly {
    cursor: default;
  }
}

.su-switch-track {
  width: 100%;
  height: 100%;
  background-color: $gray-300;
  border-radius: 9999px;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.su-switch-thumb {
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
}

.su-switch-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.su-switch-icon {
  color: $gray-600;
  
  &--check {
    color: $primary-600;
  }
  
  &--cross {
    color: $gray-400;
  }
}

.su-switch-message {
  @include su-form-field-message;
}

</style>