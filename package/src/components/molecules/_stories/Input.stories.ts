import type { Meta, StoryObj } from '@storybook/vue3'
import { MagnifyingGlassIcon, AtSymbolIcon, LockClosedIcon, UserIcon } from '@heroicons/vue/24/outline'
import Input from '../Input.vue'

const meta: Meta<typeof Input> = {
  title: 'Molecules/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant Input flexible avec support complet des types HTML, préfixes/suffixes, alignement de texte, direction RTL/LTR et accessibilité selon les normes W3C.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time'],
      description: 'Type d\'input HTML'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille de l\'input'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'État visuel de l\'input'
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive l\'input'
    },
    readonly: {
      control: 'boolean',
      description: 'Input en lecture seule'
    },
    required: {
      control: 'boolean',
      description: 'Champ requis'
    },
    placeholder: {
      control: 'text',
      description: 'Texte de placeholder'
    },
    value: {
      control: 'text',
      description: 'Valeur de l\'input'
    },
    prefix: {
      control: 'text',
      description: 'Préfixe texte'
    },
    suffix: {
      control: 'text',
      description: 'Suffixe texte'
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Alignement du texte'
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl', 'auto'],
      description: 'Direction du texte'
    },
    label: {
      control: 'text',
      description: 'Label de l\'input'
    },
    message: {
      control: 'text',
      description: 'Message additionnel'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label par défaut',
    placeholder: 'Entrez du texte...'
  }
}

export const WithValue: Story = {
  args: {
    label: 'Avec valeur',
    modelValue: 'Valeur pré-remplie',
    placeholder: 'Entrez du texte...'
  }
}

export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'nom@exemple.com',
    prefixIcon: AtSymbolIcon
  }
}

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Mot de passe',
    placeholder: '••••••••',
    prefixIcon: LockClosedIcon
  }
}

export const Search: Story = {
  args: {
    type: 'search',
    label: 'Recherche',
    placeholder: 'Rechercher...',
    prefixIcon: MagnifyingGlassIcon
  }
}

export const WithPrefix: Story = {
  args: {
    label: 'Prix',
    placeholder: '0.00',
    suffix: '€',
    type: 'number'
  }
}

export const WithSuffix: Story = {
  args: {
    label: 'Site web',
    placeholder: 'monsite',
    prefix: 'https://',
    suffix: '.com'
  }
}

export const ClickablePrefix: Story = {
  args: {
    label: 'Recherche avec action',
    placeholder: 'Rechercher...',
    prefixIcon: MagnifyingGlassIcon
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const handlePrefixIconClick = () => {
        alert('Icône de recherche cliquée!')
      }
      return { args, MagnifyingGlassIcon, handlePrefixIconClick }
    },
    template: '<Input v-bind="args" :prefixIcon="MagnifyingGlassIcon" @prefix-icon-click="handlePrefixIconClick" />'
  })
}

export const ClickableSuffix: Story = {
  args: {
    label: 'Montant',
    placeholder: '0.00',
    suffix: '€'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const handleSuffixClick = () => {
        alert('Suffixe € cliqué!')
      }
      return { args, handleSuffixClick }
    },
    template: '<Input v-bind="args" @suffix-click="handleSuffixClick" />'
  })
}
export const States: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
        <Input label="État par défaut" placeholder="Entrez du texte" />
        <Input state="error" label="État d'erreur" placeholder="Entrez du texte" message="Ce champ contient une erreur" />
        <Input state="success" label="État de succès" placeholder="Entrez du texte" message="Valeur valide !" />
        <Input state="warning" label="État d'avertissement" placeholder="Entrez du texte" message="Attention à cette valeur" />
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
        <Input size="sm" label="Small" placeholder="Petit input" />
        <Input size="md" label="Medium" placeholder="Input moyen" />
        <Input size="lg" label="Large" placeholder="Grand input" />
      </div>
    `
  })
}

export const TextAlignment: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
        <Input label="Alignement à gauche" textAlign="left" value="Aligné à gauche" />
        <Input label="Alignement centré" textAlign="center" value="Centré" />
        <Input label="Alignement à droite" textAlign="right" value="Aligné à droite" />
      </div>
    `
  })
}

export const Disabled: Story = {
  args: {
    label: 'Input désactivé',
    disabled: true,
    modelValue: 'Valeur désactivée'
  }
}

export const Readonly: Story = {
  args: {
    label: 'Input en lecture seule',
    readonly: true,
    modelValue: 'Valeur en lecture seule'
  }
}

export const Required: Story = {
  args: {
    label: 'Champ requis',
    required: true,
    placeholder: 'Ce champ est obligatoire'
  }
}