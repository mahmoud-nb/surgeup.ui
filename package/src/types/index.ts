export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  block?: boolean
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaExpanded?: boolean
  ariaPressed?: boolean
  role?: string
  tabIndex?: number
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