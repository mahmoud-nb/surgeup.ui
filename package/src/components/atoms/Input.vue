<script setup lang="ts">
import { computed, ref } from 'vue'
import FormField from './FormField.vue'
import { useId } from '@/composables/useId'
import type { InputProps } from '@/types'

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
  'prefix-click': [event: MouseEvent]
  'prefix-icon-click': [event: MouseEvent]
  'suffix-click': [event: MouseEvent]
  'suffix-icon-click': [event: MouseEvent]
}>()

const inputRef = ref<HTMLInputElement>()
const fieldId = useId('input')

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

// Attributs ARIA
const ariaAttributes = computed(() => {
  const attrs: Record<string, any> = {}
  
  if (props.ariaLabel) attrs['aria-label'] = props.ariaLabel
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

// Gestionnaires d'événements pour prefix et suffix
const handlePrefixClick = (event: MouseEvent) => {
  if (props.disabled || props.readonly) return
  emit('prefix-click', event)
}

const handlePrefixIconClick = (event: MouseEvent) => {
  if (props.disabled || props.readonly) return
  emit('prefix-icon-click', event)
}

const handleSuffixClick = (event: MouseEvent) => {
  if (props.disabled || props.readonly) return
  emit('suffix-click', event)
}

const handleSuffixIconClick = (event: MouseEvent) => {
  if (props.disabled || props.readonly) return
  emit('suffix-icon-click', event)
}

// Méthodes exposées
const focus = () => {
  inputRef.value?.focus()
}

const select = () => {
  inputRef.value?.select()
}

defineExpose({
  focus,
  select,
  inputRef
})
</script>

<template>
  <FormField
    :fieldId="fieldId"
    :label="label"
    :message="message"
    :state="state"
    :required="required"
    :disabled="disabled"
  >
    <template #default="{ fieldId: id, messageId }">
      <div :class="containerClasses" :dir="dir">
        <!-- Préfixe icône -->
        <div 
          v-if="prefixIcon" 
          class="su-input-prefix su-input-prefix--icon su-input-prefix--clickable"
          @click="handlePrefixIconClick"
        >
          <component :is="prefixIcon" class="su-input-icon" aria-hidden="true" />
        </div>
        
        <!-- Préfixe texte -->
        <div 
          v-else-if="prefix" 
          class="su-input-prefix su-input-prefix--text su-input-prefix--clickable"
          @click="handlePrefixClick"
        >
          {{ prefix }}
        </div>

        <!-- Input -->
        <input
          ref="inputRef"
          :id="id"
          :class="inputClasses"
          :type="type"
          :value="value"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          :aria-describedby="messageId"
          v-bind="{ ...nativeAttributes, ...ariaAttributes }"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown="handleKeydown"
          @keyup="handleKeyup"
        />

        <!-- Suffixe texte -->
        <div 
          v-if="suffix" 
          class="su-input-suffix su-input-suffix--text su-input-suffix--clickable"
          @click="handleSuffixClick"
        >
          {{ suffix }}
        </div>
        
        <!-- Suffixe icône -->
        <div 
          v-else-if="suffixIcon" 
          class="su-input-suffix su-input-suffix--icon su-input-suffix--clickable"
          @click="handleSuffixIconClick"
        >
          <component :is="suffixIcon" class="su-input-icon" aria-hidden="true" />
        </div>
      </div>
    </template>
  </FormField>
</template>

<style lang="scss">
@use '../../styles/variables' as *;
@use '../../styles/mixins' as *;

.su-input-container {
  @include su-form-field-container;
  display: flex;
  align-items: center;
  
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
  @include su-form-field-element;
  width: 100%;
  flex: 1;
  line-height: $line-height-normal;
  
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
  
  &--clickable {
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover:not(.su-input-container--disabled):not(.su-input-container--readonly) {
      background-color: $gray-100;
      color: $text-primary;
    }
    
    &:active:not(.su-input-container--disabled):not(.su-input-container--readonly) {
      background-color: $gray-200;
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

// Styles spécifiques au mode sombre pour les préfixes/suffixes
@media (prefers-color-scheme: dark) {
  .su-input-prefix,
  .su-input-suffix {
    background-color: $gray-900;
    border-color: $gray-600;
    color: $text-secondary-dark;
    
    &--clickable:hover:not(.su-input-container--disabled):not(.su-input-container--readonly) {
      background-color: $gray-700;
      color: $text-primary-dark;
    }
    
    &--clickable:active:not(.su-input-container--disabled):not(.su-input-container--readonly) {
      background-color: $gray-600;
    }
  }
}
</style>