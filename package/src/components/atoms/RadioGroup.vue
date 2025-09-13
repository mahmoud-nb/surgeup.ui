<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { RadioGroupProps } from '@/types'
import { generateId } from '@/utils/accessibility'

export interface Props extends RadioGroupProps {}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  size: 'md',
  state: 'default',
  disabled: false,
  required: false,
  displayType: 'default',
  direction: 'vertical',
  maxHeight: null,
  initialVisibleOptions: null
})

const emit = defineEmits<{
  'update:value': [value: string | number]
  change: [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const attrs = useAttrs()

// État local pour "Afficher plus"
const showAll = ref(false)

// Génération d'IDs uniques
const groupId = computed(() => attrs.id as string || generateId('radio-group'))
const messageId = computed(() => props.message ? `${groupId.value}-message` : undefined)
const radioName = computed(() => props.name || groupId.value)

// Options visibles selon initialVisibleOptions
const visibleOptions = computed(() => {
  if (!props.initialVisibleOptions || showAll.value) {
    return props.options
  }
  return props.options.slice(0, props.initialVisibleOptions)
})

// Détermine si le bouton "Afficher plus" est nécessaire
const needsShowMore = computed(() => {
  return props.initialVisibleOptions && props.options.length > props.initialVisibleOptions
})

// Nombre d'options cachées
const hiddenOptionsCount = computed(() => {
  if (!props.initialVisibleOptions || showAll.value) return 0
  return Math.max(0, props.options.length - props.initialVisibleOptions)
})

// Classes CSS
const groupClasses = computed(() => [
  'su-radio-group',
  `su-radio-group--${props.size}`,
  `su-radio-group--${props.state}`,
  `su-radio-group--${props.displayType}`,
  `su-radio-group--${props.direction}`,
  {
    'su-radio-group--disabled': props.disabled,
    'su-radio-group--scrollable': props.maxHeight
  }
])

const getOptionClasses = (option: any) => [
  'su-radio-option',
  `su-radio-option--${props.size}`,
  `su-radio-option--${props.state}`,
  `su-radio-option--${props.displayType}`,
  {
    'su-radio-option--selected': props.value === option.value,
    'su-radio-option--disabled': option.disabled || props.disabled
  }
]

// Attributs ARIA
const ariaAttributes = computed(() => {
  const attrs: Record<string, any> = {
    role: 'radiogroup'
  }
  
  if (props.ariaLabel) attrs['aria-label'] = props.ariaLabel
  if (props.ariaDescribedBy || messageId.value) {
    const describedBy = [props.ariaDescribedBy, messageId.value].filter(Boolean).join(' ')
    attrs['aria-describedby'] = describedBy
  }
  if (props.required) attrs['aria-required'] = 'true'
  if (props.state === 'error') attrs['aria-invalid'] = 'true'
  
  return attrs
})

// Gestionnaires d'événements
const handleChange = (value: string | number) => {
  if (props.disabled) return
  
  emit('update:value', value)
  emit('change', value)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

// Gestionnaire pour "Afficher plus/moins"
const toggleShowAll = () => {
  showAll.value = !showAll.value
}
</script>

<template>
  <div class="su-radio-group-wrapper">
    <!-- Label -->
    <fieldset 
      :class="groupClasses"
      v-bind="ariaAttributes"
    >
      <legend 
        v-if="label" 
        class="su-radio-group-label"
        :class="{
          'su-radio-group-label--required': required,
          'su-radio-group-label--disabled': disabled
        }"
      >
        {{ label }}
        <span v-if="required" class="su-radio-group-required" aria-label="requis">*</span>
      </legend>

      <!-- Options -->
      <div 
        class="su-radio-group-options"
        :style="{ maxHeight: maxHeight || undefined, overflowY: maxHeight ? 'auto' : undefined }"
      >
        <label
          v-for="option in visibleOptions"
          :key="option.value"
          :class="getOptionClasses(option)"
          :for="`${groupId}-${option.value}`"
        >
          <!-- Input radio caché -->
          <input
            :id="`${groupId}-${option.value}`"
            type="radio"
            :name="radioName"
            :value="option.value"
            :checked="value === option.value"
            :disabled="option.disabled || disabled"
            :required="required"
            class="su-radio-input"
            @change="handleChange(option.value)"
            @focus="handleFocus"
            @blur="handleBlur"
          />

          <!-- Indicateur radio personnalisé -->
          <div class="su-radio-indicator">
            <div class="su-radio-dot"></div>
          </div>

          <!-- Contenu de l'option -->
          <div class="su-radio-content">
            <!-- Icône -->
            <component 
              v-if="option.icon" 
              :is="option.icon" 
              class="su-radio-icon"
              aria-hidden="true"
            />
            
            <!-- Texte -->
            <div class="su-radio-text">
              <div class="su-radio-label">{{ option.label }}</div>
              <div 
                v-if="option.description" 
                class="su-radio-description"
              >
                {{ option.description }}
              </div>
            </div>
          </div>
        </label>
      </div>

      <!-- Bouton "Afficher plus/moins" -->
      <button
        v-if="needsShowMore"
        type="button"
        class="su-radio-group-toggle"
        @click="toggleShowAll"
      >
        {{ showAll ? 'Afficher moins' : `Afficher plus (${hiddenOptionsCount})` }}
      </button>
    </fieldset>

    <!-- Message -->
    <div 
      v-if="message" 
      :id="messageId"
      class="su-radio-group-message"
      :class="`su-radio-group-message--${state}`"
      :aria-live="state === 'error' ? 'assertive' : 'polite'"
    >
      {{ message }}
    </div>
  </div>
</template>

<style lang="scss">
@use '../../styles/variables' as *;

.su-radio-group-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.su-radio-group {
  border: none;
  padding: 0;
  margin: 0;
  
  &-label {
    display: block;
    font-size: $font-size-sm;
    font-weight: 500;
    color: $text-primary;
    line-height: $line-height-tight;
    margin-bottom: 0.75rem;
    
    &--required {
      .su-radio-group-required {
        color: $error-500;
        margin-left: 0.125rem;
      }
    }
    
    &--disabled {
      color: $text-tertiary;
      cursor: not-allowed;
    }
  }
  
  &-options {
    display: flex;
    gap: 0.75rem;
  }
  
  // Direction
  &--vertical {
    .su-radio-group-options {
      flex-direction: column;
    }
  }
  
  &--horizontal {
    .su-radio-group-options {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  
  // Style carte
  &--inline-card,
  &--block-card {
    .su-radio-group-options {
      gap: 0.75rem;
    }
  }
  
  &--inline-card {
    .su-radio-group-options {
      gap: 0.5rem;
    }
  }
  
  // Scroll
  &--scrollable {
    .su-radio-group-options {
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: $gray-400 $gray-100;
      
      &::-webkit-scrollbar {
        width: 6px;
      }
      
      &::-webkit-scrollbar-track {
        background: $gray-100;
        border-radius: 3px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: $gray-400;
        border-radius: 3px;
        
        &:hover {
          background: $gray-500;
        }
      }
    }
  }
}

.su-radio-option {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  // Style par défaut
  &--default {
    padding: 0.25rem 0;
    
    &:hover:not(&--disabled) {
      .su-radio-indicator {
        border-color: $primary-400;
      }
    }
  }
  
  // Style carte
  &--inline-card,
  &--block-card {
    padding: 1rem;
    border: 1px solid $gray-200;
    border-radius: $border-radius-md;
    background-color: white;
    
    &:hover:not(&--disabled) {
      border-color: $primary-300;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    
    &--selected {
      border-color: $primary-500;
      background-color: $primary-50;
      box-shadow: 0 0 0 1px $primary-500;
    }
  }
  
  &--inline-card {
    .su-radio-content {
      text-align: center;
    }
    
    .su-radio-indicator {
      align-self: center;
    }
  }
  
  &--block-card {
    width: 100%;
  }
  
  // Tailles
  &--sm {
    .su-radio-indicator {
      width: 1rem;
      height: 1rem;
      
      .su-radio-dot {
        width: 0.375rem;
        height: 0.375rem;
      }
    }
    
    .su-radio-label {
      font-size: $font-size-sm;
    }
    
    .su-radio-description {
      font-size: 0.75rem;
    }
    
    &.su-radio-option--inline-card,
    &.su-radio-option--block-card {
      padding: 0.75rem;
    }
  }
  
  &--md {
    .su-radio-indicator {
      width: 1.25rem;
      height: 1.25rem;
      
      .su-radio-dot {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    
    .su-radio-label {
      font-size: $font-size-base;
    }
    
    .su-radio-description {
      font-size: $font-size-sm;
    }
  }
  
  &--lg {
    .su-radio-indicator {
      width: 1.5rem;
      height: 1.5rem;
      
      .su-radio-dot {
        width: 0.625rem;
        height: 0.625rem;
      }
    }
    
    .su-radio-label {
      font-size: $font-size-lg;
    }
    
    .su-radio-description {
      font-size: $font-size-base;
    }
    
    &.su-radio-option--inline-card,
    &.su-radio-option--block-card {
      padding: 1.25rem;
    }
  }
  
  // États
  &--error {
    &.su-radio-option--inline-card,
    &.su-radio-option--block-card {
      border-color: $error-300;
      
      &--selected {
        border-color: $error-500;
        background-color: $error-50;
      }
    }
    
    .su-radio-indicator {
      border-color: $error-500;
      
      &.su-radio-indicator--checked {
        background-color: $error-500;
      }
    }
  }
  
  &--success {
    &.su-radio-option--inline-card,
    &.su-radio-option--block-card {
      border-color: $success-300;
      
      &--selected {
        border-color: $success-500;
        background-color: $success-50;
      }
    }
    
    .su-radio-indicator {
      border-color: $success-500;
      
      &.su-radio-indicator--checked {
        background-color: $success-500;
      }
    }
  }
  
  &--warning {
    &.su-radio-option--inline-card,
    &.su-radio-option--block-card {
      border-color: $warning-300;
      
      &--selected {
        border-color: $warning-500;
        background-color: $warning-50;
      }
    }
    
    .su-radio-indicator {
      border-color: $warning-500;
      
      &.su-radio-indicator--checked {
        background-color: $warning-500;
      }
    }
  }
  
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &.su-radio-option--inline-card,
    &.su-radio-option--block-card {
      background-color: $gray-50;
      border-color: $gray-200;
    }
  }
}

.su-radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  
  &:focus + .su-radio-indicator {
    box-shadow: 0 0 0 3px rgba($primary-500, 0.2);
  }
  
  &:checked + .su-radio-indicator {
    border-color: $primary-500;
    background-color: white;
    
    .su-radio-dot {
      background-color: $primary-500;
      transform: scale(1);
    }
  }
}

.su-radio-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $gray-300;
  border-radius: 50%;
  background-color: white;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  
  &-dot {
    border-radius: 50%;
    background-color: transparent;
    transform: scale(0);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.su-radio-content {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.su-radio-icon {
  width: 1.25em;
  height: 1.25em;
  flex-shrink: 0;
  color: $text-secondary;
  margin-top: 0.125rem;
}

.su-radio-text {
  flex: 1;
  min-width: 0;
}

.su-radio-label {
  font-weight: 500;
  color: $text-primary;
  line-height: $line-height-tight;
}

.su-radio-description {
  color: $text-secondary;
  line-height: $line-height-normal;
  margin-top: 0.25rem;
}

.su-radio-group-toggle {
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid $gray-300;
  border-radius: $border-radius-md;
  color: $primary-600;
  font-size: $font-size-sm;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background-color: $gray-50;
    border-color: $primary-300;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($primary-500, 0.2);
  }
}

.su-radio-group-message {
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
  .su-radio-group-label {
    color: $text-primary-dark;
    
    &--disabled {
      color: $text-tertiary-dark;
    }
  }
  
  .su-radio-option {
    &--inline-card,
    &--block-card {
      background-color: $gray-800;
      border-color: $gray-600;
      
      &:hover:not(&--disabled) {
        border-color: $primary-400;
      }
      
      &--selected {
        border-color: $primary-400;
        background-color: rgba($primary-400, 0.1);
      }
      
      &--disabled {
        background-color: $gray-900;
        border-color: $gray-700;
      }
    }
  }
  
  .su-radio-indicator {
    border-color: $gray-500;
    background-color: $gray-800;
  }
  
  .su-radio-label {
    color: $text-primary-dark;
  }
  
  .su-radio-description {
    color: $text-secondary-dark;
  }
  
  .su-radio-group-toggle {
    background-color: $gray-800;
    border-color: $gray-600;
    color: $primary-400;
    
    &:hover {
      background-color: $gray-700;
      border-color: $primary-400;
    }
  }
  
  .su-radio-group-message {
    &--default {
      color: $text-secondary-dark;
    }
  }
}

// Mode de contraste élevé
@media (prefers-contrast: high) {
  .su-radio-indicator {
    border-width: 3px;
  }
  
  .su-radio-option--inline-card,
  .su-radio-option--block-card {
    border-width: 2px;
  }
}

// Support de la réduction des animations
@media (prefers-reduced-motion: reduce) {
  .su-radio-option,
  .su-radio-indicator,
  .su-radio-dot {
    transition: none;
  }
}
</style>