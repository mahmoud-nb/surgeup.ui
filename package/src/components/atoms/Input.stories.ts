import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { 
  MagnifyingGlassIcon,
  AtSymbolIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/vue/24/outline'
import Input from './Input.vue'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant Input flexible avec support des préfixes/suffixes, différents types, états et accessibilité complète selon les normes W3C.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local', 'month', 'week'],
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
    disabled: {
      control: { type: 'boolean' },
      description: 'Désactive l\'input'
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Input en lecture seule'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Champ requis'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Histoire par défaut
export const Default: Story = {
  args: {
    placeholder: 'Entrez votre texte...',
    size: 'md',
    state: 'default'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-bind="args" v-model:value="value" />'
  })
}

// Types d'input
export const InputTypes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const textValue = ref('')
      const emailValue = ref('')
      const passwordValue = ref('')
      const numberValue = ref('')
      const telValue = ref('')
      const urlValue = ref('')
      const searchValue = ref('')
      const dateValue = ref('')
      
      return {
        textValue,
        emailValue,
        passwordValue,
        numberValue,
        telValue,
        urlValue,
        searchValue,
        dateValue
      }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; width: 800px;">
        <Input 
          type="text" 
          label="Texte" 
          placeholder="Entrez du texte"
          v-model:value="textValue"
        />
        <Input 
          type="email" 
          label="Email" 
          placeholder="nom@exemple.com"
          v-model:value="emailValue"
        />
        <Input 
          type="password" 
          label="Mot de passe" 
          placeholder="••••••••"
          v-model:value="passwordValue"
        />
        <Input 
          type="number" 
          label="Nombre" 
          placeholder="123"
          v-model:value="numberValue"
        />
        <Input 
          type="tel" 
          label="Téléphone" 
          placeholder="+33 1 23 45 67 89"
          v-model:value="telValue"
        />
        <Input 
          type="url" 
          label="URL" 
          placeholder="https://exemple.com"
          v-model:value="urlValue"
        />
        <Input 
          type="search" 
          label="Recherche" 
          placeholder="Rechercher..."
          v-model:value="searchValue"
        />
        <Input 
          type="date" 
          label="Date" 
          v-model:value="dateValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Différents types d\'input HTML supportés par le composant.'
      }
    }
  }
}

// Tailles
export const Sizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const smallValue = ref('')
      const mediumValue = ref('')
      const largeValue = ref('')
      
      return { smallValue, mediumValue, largeValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
        <Input 
          size="sm" 
          label="Small" 
          placeholder="Petit input"
          v-model:value="smallValue"
        />
        <Input 
          size="md" 
          label="Medium" 
          placeholder="Input moyen"
          v-model:value="mediumValue"
        />
        <Input 
          size="lg" 
          label="Large" 
          placeholder="Grand input"
          v-model:value="largeValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes tailles disponibles pour l\'input.'
      }
    }
  }
}

// États
export const States: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const defaultValue = ref('')
      const errorValue = ref('valeur incorrecte')
      const successValue = ref('valeur correcte')
      const warningValue = ref('attention')
      
      return { defaultValue, errorValue, successValue, warningValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 300px;">
        <Input 
          state="default"
          label="État par défaut" 
          placeholder="Entrez du texte"
          help-text="Texte d'aide pour guider l'utilisateur"
          v-model:value="defaultValue"
        />
        <Input 
          state="error"
          label="État d'erreur" 
          placeholder="Entrez du texte"
          error-message="Ce champ contient une erreur"
          v-model:value="errorValue"
        />
        <Input 
          state="success"
          label="État de succès" 
          placeholder="Entrez du texte"
          success-message="Valeur valide !"
          v-model:value="successValue"
        />
        <Input 
          state="warning"
          label="État d'avertissement" 
          placeholder="Entrez du texte"
          warning-message="Attention à cette valeur"
          v-model:value="warningValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différents états visuels de l\'input avec leurs messages associés.'
      }
    }
  }
}

// Préfixes et suffixes
export const PrefixesAndSuffixes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const priceValue = ref('')
      const emailValue = ref('')
      const searchValue = ref('')
      const phoneValue = ref('')
      const websiteValue = ref('')
      
      return {
        priceValue,
        emailValue,
        searchValue,
        phoneValue,
        websiteValue,
        CurrencyDollarIcon,
        AtSymbolIcon,
        MagnifyingGlassIcon,
        PhoneIcon,
        UserIcon
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 300px;">
        <Input 
          label="Email" 
          placeholder="nom"
          suffix="@entreprise.com"
          v-model:value="emailValue"
        />
        <Input 
          label="Recherche" 
          placeholder="Rechercher..."
          :prefix-icon="MagnifyingGlassIcon"
          v-model:value="searchValue"
        />
        <Input 
          label="Téléphone" 
          placeholder="123456789"
          prefix="+33"
          v-model:value="phoneValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Exemples d\'utilisation des préfixes et suffixes texte ou icône.'
      }
    }
  }
}

// Alignement du texte
export const TextAlignment: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const leftValue = ref('Aligné à gauche')
      const centerValue = ref('Centré')
      const rightValue = ref('Aligné à droite')
      
      return { leftValue, centerValue, rightValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
        <Input 
          label="Alignement à gauche" 
          text-align="left"
          v-model:value="leftValue"
        />
        <Input 
          label="Alignement centré" 
          text-align="center"
          v-model:value="centerValue"
        />
        <Input 
          label="Alignement à droite" 
          text-align="right"
          v-model:value="rightValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Différents alignements de texte possibles dans l\'input.'
      }
    }
  }
}

// Support RTL
export const RTLSupport: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const arabicValue = ref('النص العربي')
      const hebrewValue = ref('טקסט עברי')
      const priceValue = ref('')
      
      return { 
        arabicValue, 
        hebrewValue, 
        priceValue,
        CurrencyDollarIcon 
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 300px;">
        <Input 
          label="Texte arabe (RTL)"
          dir="rtl"
          placeholder="أدخل النص هنا"
          v-model:value="arabicValue"
        />
        <Input 
          label="Texte hébreu (RTL)"
          dir="rtl"
          placeholder="הכנס טקסט כאן"
          v-model:value="hebrewValue"
        />
        <Input 
          label="Prix (RTL avec suffixe)"
          dir="rtl"
          placeholder="0.00"
          suffix="$"
          :suffix-icon="CurrencyDollarIcon"
          v-model:value="priceValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Support des langues de droite à gauche (RTL) avec repositionnement automatique des préfixes/suffixes.'
      }
    }
  }
}

// États disabled et readonly
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const disabledValue = ref('Valeur désactivée')
      const readonlyValue = ref('Valeur en lecture seule')
      
      return { disabledValue, readonlyValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
        <Input 
          label="Input désactivé"
          :disabled="true"
          v-model:value="disabledValue"
        />
        <Input 
          label="Input en lecture seule"
          :readonly="true"
          help-text="Cette valeur ne peut pas être modifiée"
          v-model:value="readonlyValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'États désactivé et lecture seule de l\'input.'
      }
    }
  }
}

// Validation et accessibilité
export const ValidationAndAccessibility: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const emailValue = ref('')
      const passwordValue = ref('')
      const ageValue = ref('')
      
      return { 
        emailValue, 
        passwordValue, 
        ageValue,
        LockClosedIcon,
        AtSymbolIcon
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 350px;">
        <Input 
          type="email"
          label="Email"
          :required="true"
          placeholder="nom@exemple.com"
          :prefix-icon="AtSymbolIcon"
          help-text="Utilisé pour la connexion et les notifications"
          autocomplete="email"
          v-model:value="emailValue"
        />
        <Input 
          type="password"
          label="Mot de passe"
          :required="true"
          placeholder="••••••••"
          :prefix-icon="LockClosedIcon"
          :min-length="8"
          help-text="Minimum 8 caractères"
          autocomplete="new-password"
          v-model:value="passwordValue"
        />
        <Input 
          type="number"
          label="Âge"
          :required="true"
          placeholder="25"
          :min="0"
          :max="120"
          help-text="Votre âge en années"
          v-model:value="ageValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Exemples de validation et d\'attributs d\'accessibilité pour les formulaires.'
      }
    }
  }
}

// Playground interactif
export const Playground: Story = {
  args: {
    type: 'text',
    size: 'md',
    state: 'default',
    placeholder: 'Entrez votre texte...',
    label: 'Label du champ',
    disabled: false,
    readonly: false,
    required: false,
    textAlign: 'left',
    dir: 'ltr'
  },
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { 
        args, 
        value,
        MagnifyingGlassIcon,
       AtSymbolIcon
      }
    },
    template: `
      <div style="width: 300px;">
        <Input 
          v-bind="args"
          :prefix-icon="args.showPrefixIcon ? MagnifyingGlassIcon : undefined"
          :suffix-icon="args.showSuffixIcon ? AtSymbolIcon : undefined"
          :prefix="args.prefixText || undefined"
          :suffix="args.suffixText || undefined"
          v-model:value="value"
        />
        <p style="margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">
          Valeur: {{ value }}
        </p>
      </div>
    `
  }),
  argTypes: {
    showPrefixIcon: {
      control: { type: 'boolean' },
      description: 'Afficher une icône de préfixe'
    },
    showSuffixIcon: {
      control: { type: 'boolean' },
      description: 'Afficher une icône de suffixe'
    },
    prefixText: {
      control: { type: 'text' },
      description: 'Texte de préfixe'
    },
    suffixText: {
      control: { type: 'text' },
      description: 'Texte de suffixe'
    },
    helpText: {
      control: { type: 'text' },
      description: 'Texte d\'aide'
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Message d\'erreur'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Playground interactif pour tester toutes les propriétés de l\'input.'
      }
    }
  }
}