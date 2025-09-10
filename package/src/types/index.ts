import type { Component } from 'vue'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week'
export type InputSize = 'sm' | 'md' | 'lg'
export type InputState = 'default' | 'error' | 'success' | 'warning'
export type TextAlign = 'left' | 'center' | 'right'
export type SelectSize = 'sm' | 'md' | 'lg'
export type SelectState = 'default' | 'error' | 'success' | 'warning'

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

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  block?: boolean
  iconBefore?: Component
  iconAfter?: Component
  iconOnly?: Component
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaExpanded?: boolean
  ariaPressed?: boolean
  role?: string
  tabIndex?: number
}

export interface InputProps {
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
  ariaLabel?: string
  ariaDescribedBy?: string
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

export interface SelectProps {
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
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaInvalid?: boolean
  ariaRequired?: boolean
  loading?: boolean
  closeOnSelect?: boolean
  maxSelectedItems?: number
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