import type { App } from 'vue'
import FormField from './components/atoms/FormField.vue'
import Button from './components/atoms/Button.vue'
import Password from './components/atoms/Password.vue'
import ButtonsGroup from './components/molecules/ButtonsGroup.vue'
import Link from './components/atoms/Link.vue'
import LinksGroup from './components/molecules/LinksGroup.vue'
import Input from './components/atoms/Input.vue'
import SelectBox from './components/atoms/SelectBox.vue'
import RadioGroup from './components/atoms/RadioGroup.vue'
import CheckboxGroup from './components/atoms/CheckboxGroup.vue'
import Switch from './components/atoms/Switch.vue'
import FileUpload from './components/atoms/FileUpload.vue'
import Textarea from './components/atoms/Textarea.vue'
import Slider from './components/atoms/Slider.vue'
import Dialog from './components/molecules/Dialog.vue'
import FormFields from './components/molecules/FormFields.vue'
import FloatButton from './components/molecules/FloatButton.vue'
import Image from './components/atoms/Image.vue'
import Avatar from './components/atoms/Avatar.vue'
import AvatarsGroup from './components/molecules/AvatarsGroup.vue'
import Dropdown from './components/molecules/Dropdown.vue'
import * as accessibility from './utils/accessibility'
import { ButtonRadius, ButtonSize, ButtonVariant, LinkSize, LinkUnderline, LinkVariant, DialogDisplay } from './types'

export { FormField, Button, Password, ButtonsGroup, Input, SelectBox, RadioGroup, CheckboxGroup, Switch, FileUpload, Textarea, Slider, FormFields }
export { Link, LinksGroup, FloatButton, Dialog, Dropdown }
export { Image, Avatar, AvatarsGroup }
export { accessibility }

export interface SurgeUpDSOptions {
  prefix?: string
  // Configuration globale des boutons
  buttonRadius?: Exclude<ButtonRadius, 'default'>
  buttonVariant?: Exclude<ButtonVariant, 'default'>
  buttonSize?: Exclude<ButtonSize, 'default'>
  // Configuration globale des liens
  linkVariant?: Exclude<LinkVariant, 'default'>
  linkSize?: Exclude<LinkSize, 'default'>
  linkUnderline?: Exclude<LinkUnderline, 'default'>
  dialogDisplay?: Exclude<DialogDisplay, 'center'>
}

export default {
  install(app: App, options: SurgeUpDSOptions = {}) {
    const prefix = options.prefix || 'Su'
    const root = document.documentElement
    
    // Configuration globale des valeurs par défaut des boutons
    if (typeof document !== 'undefined') {
      
      // Configuration du radius par défaut
      if (options.buttonRadius) {
        root.style.setProperty('--su-button-default-radius', `var(--su-border-radius-${options.buttonRadius})`)
      }
      
      // Configuration de la variante par défaut
      if (options.buttonVariant) {
        const variantMap = {
          primary: {
            bg: 'var(--su-button-variant-primary-bg)',
            color: 'var(--su-button-variant-primary-color)',
            border: 'var(--su-button-variant-primary-border)',
            hoverBg: 'var(--su-button-variant-primary-hover-bg)',
            hoverShadow: 'var(--su-button-variant-primary-hover-shadow)'
          },
          secondary: {
            bg: 'var(--su-button-variant-secondary-bg)',
            color: 'var(--su-button-variant-secondary-color)',
            border: 'var(--su-button-variant-secondary-border)',
            hoverBg: 'var(--su-button-variant-secondary-hover-bg)',
            hoverShadow: 'var(--su-button-variant-secondary-hover-shadow)'
          },
          outline: {
            bg: 'var(--su-button-variant-outline-bg)',
            color: 'var(--su-button-variant-outline-color)',
            border: 'var(--su-button-variant-outline-border)',
            hoverBg: 'var(--su-button-variant-outline-hover-bg)',
            hoverShadow: 'none'
          },
          ghost: {
            bg: 'var(--su-button-variant-ghost-bg)',
            color: 'var(--su-button-variant-ghost-color)',
            border: 'var(--su-button-variant-ghost-border)',
            hoverBg: 'var(--su-button-variant-ghost-hover-bg)',
            hoverShadow: 'none'
          }
        }
        
        const variant = variantMap[options.buttonVariant]
        if (variant) {
          // Mise à jour des variables CSS pour la variante par défaut
          root.style.setProperty('--su-button-variant-primary-bg', variant.bg)
          root.style.setProperty('--su-button-variant-primary-color', variant.color)
          root.style.setProperty('--su-button-variant-primary-border', variant.border)
          root.style.setProperty('--su-button-variant-primary-hover-bg', variant.hoverBg)
          root.style.setProperty('--su-button-variant-primary-hover-shadow', variant.hoverShadow)
        }
      }
      
      // Configuration de la taille par défaut
      if (options.buttonSize) {
        const sizeMap = {
          sm: 'sm',
          md: 'md',
          lg: 'lg'
        }
        
        const size = sizeMap[options.buttonSize]
        if (size) {
          // Mise à jour des variables CSS pour la taille par défaut
          root.style.setProperty('--su-button-size-md-padding', `var(--su-button-size-${size}-padding)`)
          root.style.setProperty('--su-button-size-md-font-size', `var(--su-button-size-${size}-font-size)`)
          root.style.setProperty('--su-button-size-md-line-height', `var(--su-button-size-${size}-line-height)`)
          root.style.setProperty('--su-button-size-md-min-height', `var(--su-button-size-${size}-min-height)`)
          root.style.setProperty('--su-button-size-md-icon-only-padding', `var(--su-button-size-${size}-icon-only-padding)`)
          root.style.setProperty('--su-button-size-md-icon-only-width', `var(--su-button-size-${size}-icon-only-width)`)
        }
      }
    }
    
    // Configuration de la variante par défaut des liens
    if (options.linkVariant) {
      const variantMap = {
        default: {
          color: 'var(--su-link-variant-default-color)',
          hoverColor: 'var(--su-link-variant-default-hover-color)',
          activeColor: 'var(--su-link-variant-default-active-color)'
        },
        primary: {
          color: 'var(--su-link-variant-primary-color)',
          hoverColor: 'var(--su-link-variant-primary-hover-color)',
          activeColor: 'var(--su-link-variant-primary-hover-color)'
        },
        secondary: {
          color: 'var(--su-link-variant-secondary-color)',
          hoverColor: 'var(--su-link-variant-secondary-hover-color)',
          activeColor: 'var(--su-link-variant-secondary-hover-color)'
        },
        muted: {
          color: 'var(--su-link-variant-muted-color)',
          hoverColor: 'var(--su-link-variant-muted-hover-color)',
          activeColor: 'var(--su-link-variant-muted-active-color)'
        }
      }
      
      const variant = variantMap[options.linkVariant]
      if (variant) {
        root.style.setProperty('--su-link-variant-default-color', variant.color)
        root.style.setProperty('--su-link-variant-default-hover-color', variant.hoverColor)
        root.style.setProperty('--su-link-variant-default-active-color', variant.activeColor)
      }
    }
    
    // Configuration de la taille par défaut des liens
    if (options.linkSize) {
      const sizeMap = {
        sm: 'sm',
        md: 'md',
        lg: 'lg'
      }
      
      const size = sizeMap[options.linkSize]
      if (size) {
        root.style.setProperty('--su-link-size-md-font-size', `var(--su-link-size-${size}-font-size)`)
        root.style.setProperty('--su-link-size-md-line-height', `var(--su-link-size-${size}-line-height)`)
        root.style.setProperty('--su-link-size-md-padding', `var(--su-link-size-${size}-padding)`)
        root.style.setProperty('--su-link-size-md-icon-size', `var(--su-link-size-${size}-icon-size)`)
        root.style.setProperty('--su-link-size-md-icon-only-padding', `var(--su-link-size-${size}-icon-only-padding)`)
        root.style.setProperty('--su-link-size-md-icon-only-size', `var(--su-link-size-${size}-icon-only-size)`)
      }
    }
    
    // Configuration du soulignement par défaut des liens
    if (options.linkUnderline) {
      root.style.setProperty('--su-link-default-underline', options.linkUnderline)
    }
    
    app.component(`${prefix}FormField`, FormField)
    app.component(`${prefix}Button`, Button)
    app.component(`${prefix}Password`, Password)
    app.component(`${prefix}ButtonsGroup`, ButtonsGroup)
    app.component(`${prefix}Link`, Link)
    app.component(`${prefix}LinksGroup`, LinksGroup)
    app.component(`${prefix}Input`, Input)
    app.component(`${prefix}SelectBox`, SelectBox)
    app.component(`${prefix}RadioGroup`, RadioGroup)
    app.component(`${prefix}CheckboxGroup`, CheckboxGroup)
    app.component(`${prefix}Switch`, Switch)
    app.component(`${prefix}FileUpload`, FileUpload)
    app.component(`${prefix}Textarea`, Textarea)
    app.component(`${prefix}Slider`, Slider)
    app.component(`${prefix}FormFields`, FormFields)
    app.component(`${prefix}FloatButton`, FloatButton)
    app.component(`${prefix}Dialog`, Dialog)
    app.component(`${prefix}Dropdown`, Dropdown)
    app.component(`${prefix}Image`, Image)
    app.component(`${prefix}Avatar`, Avatar)
    app.component(`${prefix}AvatarsGroup`, AvatarsGroup)
  }
}

export * from './types'