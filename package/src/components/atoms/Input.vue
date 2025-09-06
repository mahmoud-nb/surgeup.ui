<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue'
import type { InputProps } from '@/types'
import { generateId } from '@/utils/accessibility'

export interface Props extends InputProps {}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  state: 'default',
  disabled: false,
  readonly: false,
  required: false,
  textAlign: 'left',
  dir: 'auto'
})

const emit = defineEmits<{
  'update:value': [value: string | number]
  input: [event: Event]
  change: [event: Event]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
}>()

const attrs = useAttrs()
const inputRef = ref<HTMLInputElement>()

// Génération d'IDs uniques pour l'accessibilité
const inputId = computed(() => attrs.id as string || generateId('input'))
const helpTextId = computed(() => props.helpText ? `${inputId.value}-help` : undefined)
const errorId = computed(() => props.errorMessage ? `${inputId.value}-error` : undefined)
const successId = computed(() => props.successMessage ? `${inputId.value}-success` : undefined)
const warningId = computed(() => props.warningMessage ? `${inputId.value}-warning` : undefined)

// Classes CSS
const containerClasses = computed(() => [
  'su-input-container',
  `su-input-container--${props.size}`,
  `su-input-container--${props.state}`,
  {
    'su-input-container--disabled': props.disabled,
    'su-input-container--readonly': props.readonly,
    'su-input-container--has-prefix': props.prefix || props.prefixIcon,
    'su-input-container--has-suffix': props.suffix || props.suffixIcon,
    'su-input-container--rtl': props.dir === 'rtl'
  }
])

const inputClasses = computed(() => [
  'su-input',
  `su-input--${props.size}`,
  `su-input--${props.state}`,
  `su-input--align-${props.textAlign}`,
  {
    'su-input--disabled': props.disabled,
    'su-input--readonly': props.readonly,
    'su-input--has-prefix': props.prefix || props.prefixIcon,
    'su-input--has-suffix': props.suffix || props.suffixIcon
  }
])

// Message à afficher selon l'état
const displayMessage = computed(() => {
  switch (props.state) {
    case 'error':
      return props.errorMessage
    case 'success':
      return props.successMessage
    case 'warning':
      return props.warningMessage
    default:
      return props.helpText
  }
})

const messageId = computed(() => {
  switch (props.state) {
    case 'error':
      return errorId.value
    case 'success':
      return successId.value
    case 'warning':
      return warningId.value
    default:
      return helpTextId.value
  }
})

// Attributs ARIA
const ariaAttributes = computed(() => {
  const attrs: Record<string, any> = {}
  
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

// Attributs HTML natifs
const nativeAttributes = computed(() => {
  const attrs: Record<string, any> = {}
  
  if (props.autocomplete) attrs.autocomplete = props.autocomplete
  if (props.min !== undefined) attrs.min = props.min
  if (props.max !== undefined) attrs.max = props.max
  if (props.step !== undefined) attrs.step = props.step
  if (props.minLength !== undefined) attrs.minlength = props.minLength
  if (props.maxLength !== undefined) attrs.maxlength = props.maxLength
  if (props.pattern) attrs.pattern = props.pattern
  
  return attrs
})

// Gestionnaires d'événements
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:value', value)
  emit('input', event)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
}

const handleKeyup = (event: KeyboardEvent) => {
  emit('keyup', event)
}

// Méthode pour donner le focus à l'input
const focus = () => {
  inputRef.value?.focus()
}

// Méthode pour sélectionner le texte
const select = () => {
  inputRef.value?.select()
}

// Exposer les méthodes publiques
defineExpose({
  focus,
  select,
  inputRef
})
</script>

<template>
  <div class="su-input-wrapper" :dir="dir">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="inputId" 
      class="su-input-label"
      :class="{
        'su-input-label--required': required,
        'su-input-label--disabled': disabled
      }"
    >
      {{ label }}
      <span v-if="required" class="su-input-required" aria-label="requis">*</span>
    </label>

    <!-- Container de l'input -->
    <div :class="containerClasses">
      <!-- Préfixe icône -->
      <div v-if="prefixIcon" class="su-input-prefix su-input-prefix--icon">
        <component :is="prefixIcon" class="su-input-icon" aria-hidden="true" />
      </div>
      
      <!-- Préfixe texte -->
      <div v-else-if="prefix" class="su-input-prefix su-input-prefix--text">
        {{ prefix }}
      </div>

      <!-- Input -->
      <input
        ref="inputRef"
        :id="inputId"
        :class="inputClasses"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        v-bind="{ ...nativeAttributes, ...ariaAttributes }"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
      />

      <!-- Suffixe texte -->
      <div v-if="suffix" class="su-input-suffix su-input-suffix--text">
        {{ suffix }}
      </div>
      
      <!-- Suffixe icône -->
      <div v-else-if="suffixIcon" class="su-input-suffix su-input-suffix--icon">
        <component :is="suffixIcon" class="su-input-icon" aria-hidden="true" />
      </div>
    </div>

    <!-- Message d'aide/erreur/succès -->
    <div 
      v-if="displayMessage" 
      :id="messageId"
      class="su-input-message"
      :class="`su-input-message--${state}`"
      :aria-live="state === 'error' ? 'assertive' : 'polite'"
    >
      {{ displayMessage }}
    </div>
  </div>
</template>

<style lang="scss">
@use '../../styles/variables' as *;

.su-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.su-input-label {
  display: block;
  font-size: $font-size-sm;
  font-weight: 500;
  color: $text-primary;
  line-height: $line-height-tight;
  
  &--required {
    .su-input-required {
      color: $error-500;
      margin-left: 0.125rem;
    }
  }
  
  &--disabled {
    color: $text-tertiary;
    cursor: not-allowed;
  }
}

.su-input-container {
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid $gray-300;
  border-radius: $border-radius-md;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus-within {
    border-color: $primary-500;
    box-shadow: 0 0 0 3px rgba($primary-500, 0.1);
  }
  
  // Tailles
  &--sm {
    min-height: 2rem;
    
    .su-input {
      padding: 0.375rem 0.75rem;
      font-size: $font-size-sm;
    }
    
    .su-input-prefix,
    .su-input-suffix {
      padding: 0.375rem 0.5rem;
      font-size: $font-size-sm;
    }
  }
  
  &--md {
    min-height: 2.5rem;
    
    .su-input {
      padding: 0.5rem 0.75rem;
      font-size: $font-size-base;
    }
    
    .su-input-prefix,
    .su-input-suffix {
      padding: 0.5rem 0.75rem;
      font-size: $font-size-base;
    }
  }
  
  &--lg {
    min-height: 3rem;
    
    .su-input {
      padding: 0.75rem 1rem;
      font-size: $font-size-lg;
    }
    
    .su-input-prefix,
    .su-input-suffix {
      padding: 0.75rem 1rem;
      font-size: $font-size-lg;
    }
  }
  
  // États
  &--error {
    border-color: $error-500;
    
    &:focus-within {
      border-color: $error-500;
      box-shadow: 0 0 0 3px rgba($error-500, 0.1);
    }
  }
  
  &--success {
    border-color: $success-500;
    
    &:focus-within {
      border-color: $success-500;
      box-shadow: 0 0 0 3px rgba($success-500, 0.1);
    }
  }
  
  &--warning {
    border-color: $warning-500;
    
    &:focus-within {
      border-color: $warning-500;
      box-shadow: 0 0 0 3px rgba($warning-500, 0.1);
    }
  }
  
  &--disabled {
    background-color: $gray-50;
    border-color: $gray-200;
    cursor: not-allowed;
    
    &:focus-within {
      border-color: $gray-200;
      box-shadow: none;
    }
  }
  
  &--readonly {
    background-color: $gray-50;
    
    &:focus-within {
      box-shadow: 0 0 0 3px rgba($gray-500, 0.1);
    }
  }
  
  // RTL Support
  &--rtl {
    direction: rtl;
    
    .su-input-prefix {
      order: 2;
    }
    
    .su-input {
      order: 1;
    }
    
    .su-input-suffix {
      order: 0;
    }
  }
}

.su-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: $text-primary;
  font-family: inherit;
  line-height: $line-height-normal;
  
  &::placeholder {
    color: $text-tertiary;
  }
  
  // Alignement du texte
  &--align-left {
    text-align: left;
  }
  
  &--align-center {
    text-align: center;
  }
  
  &--align-right {
    text-align: right;
  }
  
  // Ajustements avec préfixe/suffixe
  &--has-prefix {
    padding-left: 0 !important;
  }
  
  &--has-suffix {
    padding-right: 0 !important;
  }
  
  &--disabled {
    color: $text-tertiary;
    cursor: not-allowed;
    
    &::placeholder {
      color: $gray-400;
    }
  }
  
  &--readonly {
    cursor: default;
  }
  
  // Types spéciaux
  &[type="number"] {
    -moz-appearance: textfield;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  
  &[type="search"] {
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
}

.su-input-prefix,
.su-input-suffix {
  display: flex;
  align-items: center;
  color: $text-secondary;
  background-color: $gray-50;
  border-right: 1px solid $gray-200;
  white-space: nowrap;
  
  &--text {
    font-weight: 500;
  }
  
  &--icon {
    .su-input-icon {
      width: 1.25em;
      height: 1.25em;
    }
  }
}

.su-input-suffix {
  border-right: none;
  border-left: 1px solid $gray-200;
}

.su-input-prefix {
  border-top-left-radius: $border-radius-md;
  border-bottom-left-radius: $border-radius-md;
}

.su-input-suffix {
  border-top-right-radius: $border-radius-md;
  border-bottom-right-radius: $border-radius-md;
}

.su-input-message {
  font-size: $font-size-sm;
  line-height: $line-height-tight;
  
  &--default {
    color: $text-secondary;
  }
  
  &--error {
    color: $error-600;
  }
  
  &--success {
    color: $success-600;
  }
  
  &--warning {
    color: $warning-600;
  }
}

// Mode sombre
@media (prefers-color-scheme: dark) {
  .su-input-label {
    color: $text-primary-dark;
    
    &--disabled {
      color: $text-tertiary-dark;
    }
  }
  
  .su-input-container {
    background-color: $gray-800;
    border-color: $gray-600;
    
    &--disabled {
      background-color: $gray-900;
      border-color: $gray-700;
    }
    
    &--readonly {
      background-color: $gray-900;
    }
  }
  
  .su-input {
    color: $text-primary-dark;
    
    &::placeholder {
      color: $text-tertiary-dark;
    }
    
    &--disabled {
      color: $text-tertiary-dark;
    }
  }
  
  .su-input-prefix,
  .su-input-suffix {
    background-color: $gray-900;
    border-color: $gray-600;
    color: $text-secondary-dark;
  }
  
  .su-input-message {
    &--default {
      color: $text-secondary-dark;
    }
  }
}

// Mode de contraste élevé
@media (prefers-contrast: high) {
  .su-input-container {
    border-width: 2px;
    
    &:focus-within {
      border-width: 3px;
    }
  }
}

// Support de la réduction des animations
@media (prefers-reduced-motion: reduce) {
  .su-input-container {
    transition: none;
  }
}
</style>