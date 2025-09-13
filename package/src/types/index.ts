import type { Component } from 'vue'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week'
export type InputSize = 'sm' | 'md' | 'lg'
export type InputState = 'default' | 'error' | 'success' | 'warning'
export type TextAlign = 'left' | 'center' | 'right'
export type SelectSize = 'sm' | 'md' | 'lg'
export type SelectState = 'default' | 'error' | 'success' | 'warning'
export type RadioSize = 'sm' | 'md' | 'lg'
export type RadioState = 'default' | 'error' | 'success' | 'warning'
export type RadioDisplayType = 'default' | 'inline-card' | 'block-card'
export type CheckboxSize = 'sm' | 'md' | 'lg'
export type CheckboxState = 'default' | 'error' | 'success' | 'warning'
export type CheckboxDisplayType = 'default' | 'inline-card' | 'block-card'
export type SwitchSize = 'sm' | 'md' | 'lg'
export type SwitchState = 'default' | 'error' | 'success' | 'warning'
export type FileUploadSize = 'sm' | 'md' | 'lg'
export type FileUploadState = 'default' | 'error' | 'success' | 'warning'
export type TextareaSize = 'sm' | 'md' | 'lg'
export type TextareaState = 'default' | 'error' | 'success' | 'warning'

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
  group?: string
  icon?: Component
  description?: string
}

export interface SelectGroup {
  label: string
  options: SelectOption[]
}

export interface ButtonProps extends AccessibilityProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  block?: boolean
  iconBefore?: Component
  iconAfter?: Component
  iconOnly?: Component
  ariaExpanded?: boolean
  ariaPressed?: boolean
}

export interface InputProps extends AccessibilityProps {
  type?: InputType
  size?: InputSize
  state?: InputState
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  placeholder?: string
  value?: string | number
  prefix?: string
  suffix?: string
  prefixIcon?: Component
  suffixIcon?: Component
  textAlign?: TextAlign
  dir?: 'ltr' | 'rtl' | 'auto'
  label?: string
  message?: string
  ariaInvalid?: boolean
  ariaRequired?: boolean
  autocomplete?: string
  min?: number | string
  max?: number | string
  step?: number | string
  minLength?: number
  maxLength?: number
  pattern?: string
}

export interface SelectProps extends AccessibilityProps {
  options?: SelectOption[]
  groups?: SelectGroup[]
  value?: string | number | (string | number)[]
  multiple?: boolean
  searchable?: boolean
  clearable?: boolean
  size?: SelectSize
  state?: SelectState
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  placeholder?: string
  searchPlaceholder?: string
  noOptionsText?: string
  noResultsText?: string
  maxHeight?: string
  textAlign?: TextAlign
  dir?: 'ltr' | 'rtl' | 'auto'
  label?: string
  message?: string
  ariaInvalid?: boolean
  ariaRequired?: boolean
  maxSelectedItems?: number
  closeOnSelect?: boolean
  loading?: boolean
}

export interface RadioOption {
  value: string | number
  label: string
  description?: string
  disabled?: boolean
  icon?: Component
}

export interface RadioGroupProps extends AccessibilityProps {
  options: RadioOption[]
  value?: string | number
  name?: string
  size?: RadioSize
  state?: RadioState
  disabled?: boolean
  required?: boolean
  displayType?: RadioDisplayType
  label?: string
  message?: string
  direction?: 'horizontal' | 'vertical'
  maxHeight?: string | null
  initialVisibleOptions?: number | null
}

export interface CheckboxOption {
  value: string | number
  label: string
  description?: string
  disabled?: boolean
  icon?: Component
}

export interface CheckboxGroupProps extends AccessibilityProps {
  options: CheckboxOption[]
  value?: (string | number)[]
  size?: CheckboxSize
  state?: CheckboxState
  disabled?: boolean
  required?: boolean
  displayType?: CheckboxDisplayType
  label?: string
  message?: string
  direction?: 'horizontal' | 'vertical'
  maxSelections?: number
  maxHeight?: string | null
  initialVisibleOptions?: number | null
}

export interface SwitchProps extends AccessibilityProps {
  value?: boolean
  size?: SwitchSize
  state?: SwitchState
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  label?: string
  leftLabel?: string
  rightLabel?: string
  message?: string
  ariaInvalid?: boolean
  ariaRequired?: boolean
}

export interface UploadedFile {
  id: string
  file: File
  name: string
  size: number
  type: string
  status: 'pending' | 'uploading' | 'success' | 'error'
  progress?: number
  error?: string
  preview?: string
}

export interface FileUploadProps extends AccessibilityProps {
  value?: UploadedFile[]
  multiple?: boolean
  accept?: string
  maxSize?: number
  maxFiles?: number
  size?: FileUploadSize
  state?: FileUploadState
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  label?: string
  message?: string
  placeholder?: string
  dragText?: string
  browseText?: string
  allowPreview?: boolean
  showFileList?: boolean
  ariaInvalid?: boolean
  ariaRequired?: boolean
}

export interface TextareaProps extends AccessibilityProps {
  size?: TextareaSize
  state?: TextareaState
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  placeholder?: string
  value?: string
  rows?: number
  minRows?: number
  maxRows?: number
  maxLength?: number
  showCounter?: boolean
  autoResize?: boolean
  label?: string
  message?: string
  ariaInvalid?: boolean
  ariaRequired?: boolean
  autocomplete?: string
  spellcheck?: boolean
  wrap?: 'soft' | 'hard' | 'off'
}

// Types pour l'accessibilité
export interface AccessibilityProps {
  ariaLabel?: string
  ariaLabelledBy?: string
  ariaDescribedBy?: string
  ariaHidden?: boolean
  role?: string
  tabIndex?: number
}