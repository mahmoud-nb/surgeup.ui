<script setup lang="ts">
import { computed, ref, watch, nextTick, useAttrs } from 'vue'
import type { TextareaProps } from '@/types'
import { generateId } from '@/utils/accessibility'

export interface Props extends TextareaProps {}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  state: 'default',
  disabled: false,
  readonly: false,
  required: false,
  rows: 3,
  minRows: 2,
  maxRows: 10,
  showCounter: false,
  autoResize: false,
  spellcheck: true,
  wrap: 'soft'
})

const emit = defineEmits<{
  'update:value': [value: string]
  input: [event: Event]
  change: [event: Event]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
}>()

const attrs = useAttrs()
const textareaRef = ref<HTMLTextAreaElement>()

// Génération d'IDs uniques pour l'accessibilité
const textareaId = computed(() => attrs.id as string || generateId('textarea'))
const messageId = computed(() => props.message ? `${textareaId.value}-message` : undefined)
const counterId = computed(() => props.showCounter && props.maxLength ? `${textareaId.value}-counter` : undefined)

// Valeur normalisée
const currentValue = computed(() => props.value || '')

// Compteur de caractères
const characterCount = computed(() => currentValue.value.length)
const remainingCharacters = computed(() => {
  if (!props.maxLength) return null
  return props.maxLength - characterCount.value
})

const isNearLimit = computed(() => {
  if (!props.maxLength) return false
  return remainingCharacters.value !== null && remainingCharacters.value <= props.maxLength * 0.1
})

const isOverLimit = computed(() => {
  if (!props.maxLength) return false
  return remainingCharacters.value !== null && remainingCharacters.value < 0
})

// Classes CSS
const containerClasses = computed(() => [
  'su-textarea-container',
  `su-textarea-container--${props.size}`,
  `su-textarea-container--${props.state}`,
  {
    'su-textarea-container--disabled': props.disabled,
    'su-textarea-container--readonly': props.readonly,
    'su-textarea-container--auto-resize': props.autoResize,
    'su-textarea-container--over-limit': isOverLimit.value
  }
])

const textareaClasses = computed(() => [
  'su-textarea',
  `su-textarea--${props.size}`,
  `su-textarea--${props.state}`,
  {
    'su-textarea--disabled': props.disabled,
    'su-textarea--readonly': props.readonly,
    'su-textarea--auto-resize': props.autoResize,
    'su-textarea--over-limit': isOverLimit.value
  }
])

const counterClasses = computed(() => [
  'su-textarea-counter',
  {
    'su-textarea-counter--near-limit': isNearLimit.value,
    'su-textarea-counter--over-limit': isOverLimit.value
  }
])

// Attributs ARIA
const ariaAttributes = computed(() => {
  const attrs: Record<string, any> = {}
  
  if (props.ariaLabel) attrs['aria-label'] = props.ariaLabel
  
  const describedByIds = [
    props.ariaDescribedBy,
    messageId.value,
    counterId.value
  ].filter(Boolean)
  
  if (describedByIds.length > 0) {
    attrs['aria-describedby'] = describedByIds.join(' ')
  }
  
  if (props.ariaInvalid !== undefined) attrs['aria-invalid'] = props.ariaInvalid
  if (props.ariaRequired !== undefined) attrs['aria-required'] = props.ariaRequired
  if (props.required) attrs['aria-required'] = 'true'
  if (props.state === 'error' || isOverLimit.value) attrs['aria-invalid'] = 'true'
  
  return attrs
})

// Attributs HTML natifs
const nativeAttributes = computed(() => {
  const attrs: Record<string, any> = {}
  
  if (props.autocomplete) attrs.autocomplete = props.autocomplete
  if (props.maxLength) attrs.maxlength = props.maxLength
  if (props.spellcheck !== undefined) attrs.spellcheck = props.spellcheck
  if (props.wrap) attrs.wrap = props.wrap
  
  return attrs
})

// Auto-resize
const adjustHeight = async () => {
  if (!props.autoResize || !textareaRef.value) return
  
  await nextTick()
  
  const textarea = textareaRef.value
  const minHeight = props.minRows ? props.minRows * 1.5 : 3 * 1.5 // 1.5rem par ligne
  const maxHeight = props.maxRows ? props.maxRows * 1.5 : 10 * 1.5
  
  // Réinitialiser la hauteur pour calculer la hauteur du contenu
  textarea.style.height = 'auto'
  
  // Calculer la nouvelle hauteur
  const scrollHeight = textarea.scrollHeight
  const newHeight = Math.max(minHeight * 16, Math.min(maxHeight * 16, scrollHeight))
  
  textarea.style.height = `${newHeight}px`
}

// Gestionnaires d'événements
const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:value', target.value)
  emit('input', event)
  
  if (props.autoResize) {
    adjustHeight()
  }
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

// Méthodes exposées
const focus = () => {
  textareaRef.value?.focus()
}

const select = () => {
  textareaRef.value?.select()
}

defineExpose({
  focus,
  select,
  textareaRef
})

// Watchers
watch(() => props.value, () => {
  if (props.autoResize) {
    adjustHeight()
  }
}, { immediate: true })

watch(() => props.autoResize, (newValue) => {
  if (newValue) {
    adjustHeight()
  }
})
</script>

<template>
  <div class="su-textarea-wrapper">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="textareaId" 
      class="su-textarea-label"
      :class="{
        'su-textarea-label--required': required,
        'su-textarea-label--disabled': disabled
      }"
    >
      {{ label }}
      <span v-if="required" class="su-textarea-required" aria-label="requis">*</span>
    </label>

    <!-- Container du textarea -->
    <div :class="containerClasses">
      <textarea
        ref="textareaRef"
        :id="textareaId"
        :class="textareaClasses"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :rows="autoResize ? minRows : rows"
        v-bind="{ ...nativeAttributes, ...ariaAttributes }"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
      />
    </div>

    <!-- Footer avec message et compteur -->
    <div 
      v-if="message || (showCounter && maxLength)" 
      class="su-textarea-footer"
    >
      <!-- Message d'aide/erreur/succès -->
      <div 
        v-if="message" 
        :id="messageId"
        class="su-textarea-message"
        :class="`su-textarea-message--${state}`"
        :aria-live="state === 'error' ? 'assertive' : 'polite'"
      >
        {{ message }}
      </div>

      <!-- Compteur de caractères -->
      <div 
        v-if="showCounter && maxLength" 
        :id="counterId"
        :class="counterClasses"
        :aria-live="isNearLimit || isOverLimit ? 'polite' : 'off'"
      >
        <span class="sr-only">
          {{ isOverLimit ? 'Limite de caractères dépassée' : 'Caractères restants' }}:
        </span>
        {{ characterCount }}/{{ maxLength }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../../styles/variables' as *;

.su-textarea-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.su-textarea-label {
  display: block;
  font-size: $font-size-sm;
  font-weight: 500;
  color: $text-primary;
  line-height: $line-height-tight;
  
  &--required {
    .su-textarea-required {
      color: $error-500;
      margin-left: 0.125rem;
    }
  }
  
  &--disabled {
    color: $text-tertiary;
    cursor: not-allowed;
  }
}

.su-textarea-container {
  position: relative;
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
    .su-textarea {
      padding: 0.5rem 0.75rem;
      font-size: $font-size-sm;
      line-height: 1.4;
    }
  }
  
  &--md {
    .su-textarea {
      padding: 0.75rem;
      font-size: $font-size-base;
      line-height: 1.5;
    }
  }
  
  &--lg {
    .su-textarea {
      padding: 1rem;
      font-size: $font-size-lg;
      line-height: 1.6;
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
  
  &--over-limit {
    border-color: $error-500;
    
    &:focus-within {
      border-color: $error-500;
      box-shadow: 0 0 0 3px rgba($error-500, 0.1);
    }
  }
}

.su-textarea {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: $text-primary;
  font-family: inherit;
  resize: vertical;
  
  &::placeholder {
    color: $text-tertiary;
  }
  
  &--disabled {
    color: $text-tertiary;
    cursor: not-allowed;
    resize: none;
    
    &::placeholder {
      color: $gray-400;
    }
  }
  
  &--readonly {
    cursor: default;
    resize: none;
  }
  
  &--auto-resize {
    resize: none;
    overflow-y: hidden;
  }
  
  &--over-limit {
    color: $error-600;
  }
}

.su-textarea-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  min-height: 1.25rem;
}

.su-textarea-message {
  flex: 1;
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

.su-textarea-counter {
  flex-shrink: 0;
  font-size: $font-size-sm;
  font-weight: 500;
  color: $text-secondary;
  line-height: $line-height-tight;
  
  &--near-limit {
    color: $warning-600;
  }
  
  &--over-limit {
    color: $error-600;
    font-weight: 600;
  }
}

// Mode sombre
@media (prefers-color-scheme: dark) {
  .su-textarea-label {
    color: $text-primary-dark;
    
    &--disabled {
      color: $text-tertiary-dark;
    }
  }
  
  .su-textarea-container {
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
  
  .su-textarea {
    color: $text-primary-dark;
    
    &::placeholder {
      color: $text-tertiary-dark;
    }
    
    &--disabled {
      color: $text-tertiary-dark;
    }
    
    &--over-limit {
      color: $error-400;
    }
  }
  
  .su-textarea-message {
    &--default {
      color: $text-secondary-dark;
    }
  }
  
  .su-textarea-counter {
    color: $text-secondary-dark;
    
    &--near-limit {
      color: $warning-400;
    }
    
    &--over-limit {
      color: $error-400;
    }
  }
}

// Mode de contraste élevé
@media (prefers-contrast: high) {
  .su-textarea-container {
    border-width: 2px;
    
    &:focus-within {
      border-width: 3px;
    }
  }
}

// Support de la réduction des animations
@media (prefers-reduced-motion: reduce) {
  .su-textarea-container {
    transition: none;
  }
}
</style>