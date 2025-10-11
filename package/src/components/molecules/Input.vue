<script setup lang="ts">
import { computed, ref, useId, useAttrs } from 'vue'
import FormField from '../atoms/FormField.vue'
import BaseInput from '../atoms/BaseInput.vue'
import type { FormFieldProps } from '../atoms/FormField.vue'
import type { BaseInputProps } from '../atoms/BaseInput.vue'

export type InputProps = FormFieldProps & BaseInputProps

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'md',
  state: 'default',
  disabled: false,
  readonly: false,
  required: false,
  textAlign: 'left',
  dir: 'auto'
})

const modelValue = defineModel<string | number>({ default: '' })

const emit = defineEmits<{
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

const attrs = useAttrs()
const fieldId = 'input-' + useId()
const inputId = computed(() => attrs.id as string || fieldId)

const baseInputProps = computed(() => {
  const { label, message, value, ...rest } = props
  return rest
})

// Gestionnaires d'événements
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  modelValue.value = props.type === 'number' ? Number(target.value) : target.value
  emit('input', event)
}

const handleChange = (event: Event) => emit('change', event)
const handleFocus = (event: FocusEvent) => emit('focus', event)
const handleBlur = (event: FocusEvent) => emit('blur', event)
const handleKeydown = (event: KeyboardEvent) => emit('keydown', event)
const handleKeyup = (event: KeyboardEvent) => emit('keyup', event)

// Méthodes exposées
const baseInputRef = ref<InstanceType<typeof BaseInput>>()

const focus = () => baseInputRef.value?.focus()
const select = () => baseInputRef.value?.select()

defineExpose({
  focus,
  select,
  inputRef: baseInputRef?.value?.inputRef
})
</script>

<template>
  <FormField
    :fieldId="inputId"
    :label="label"
    :message="message"
    :state="state"
    :required="required"
    :disabled="disabled"
  >
    <template #default="{ messageId }">
      <BaseInput 
        ref="baseInputRef"
        :id="inputId"
        :value="modelValue"
        :aria-describedby="messageId"
        v-bind="{ ...baseInputProps }"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
        @prefix-click="$emit('prefix-click', $event)"
        @prefix-icon-click="$emit('prefix-icon-click', $event)"
        @suffix-click="$emit('suffix-click', $event)"
        @suffix-icon-click="$emit('suffix-icon-click', $event)"
      />
    </template>
  </FormField>
</template>