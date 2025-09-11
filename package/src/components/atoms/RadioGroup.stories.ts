import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { 
  UserIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  StarIcon,
  CogIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'
import RadioGroup from './RadioGroup.vue'
import type { RadioOption } from '@/types'

const meta: Meta<typeof RadioGroup> = {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant RadioGroup pour la sélection unique avec deux styles d\'affichage : classique ou en cartes. Support complet de l\'accessibilité selon les normes W3C.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille des éléments'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'État visuel'
    },
    displayType: {
      control: { type: 'select' },
      options: ['default', 'inline-card', 'block-card'],
      description: 'Type d\'affichage'
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Direction du groupe'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Désactive tout le groupe'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Champ requis'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Options de base
const basicOptions: RadioOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4', disabled: true }
]

// Options avec icônes
const iconOptions: RadioOption[] = [
  { value: 'user', label: 'Particulier', icon: UserIcon },
  { value: 'business', label: 'Entreprise', icon: BuildingOfficeIcon },
  { value: 'organization', label: 'Organisation', icon: GlobeAltIcon }
]

// Options avec descriptions
const detailedOptions: RadioOption[] = [
  { 
    value: 'basic', 
    label: 'Plan Basic', 
    description: 'Fonctionnalités de base pour débuter',
    icon: StarIcon 
  },
  { 
    value: 'pro', 
    label: 'Plan Pro', 
    description: 'Fonctionnalités avancées pour les professionnels',
    icon: BuildingOfficeIcon 
  },
  { 
    value: 'enterprise', 
    label: 'Plan Enterprise', 
    description: 'Solution complète pour les grandes entreprises',
    icon: GlobeAltIcon 
  }
]

// Histoire par défaut
export const Default: Story = {
  args: {
    options: basicOptions,
    label: 'Sélection unique',
    name: 'default-radio',
    size: 'md',
    state: 'default',
    displayType: 'default'
  },
  render: (args) => ({
    components: { RadioGroup },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<RadioGroup v-bind="args" v-model:value="value" />'
  })
}

// Tailles
export const Sizes: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const smallValue = ref('')
      const mediumValue = ref('')
      const largeValue = ref('')
      
      return { 
        smallValue, 
        mediumValue, 
        largeValue,
        basicOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 300px;">
        <RadioGroup 
          :options="basicOptions"
          size="sm" 
          label="Small" 
          name="size-sm"
          v-model:value="smallValue"
        />
        <RadioGroup 
          :options="basicOptions"
          size="md" 
          label="Medium" 
          name="size-md"
          v-model:value="mediumValue"
        />
        <RadioGroup 
          :options="basicOptions"
          size="lg" 
          label="Large" 
          name="size-lg"
          v-model:value="largeValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes tailles disponibles pour le RadioGroup.'
      }
    }
  }
}

// États
export const States: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const defaultValue = ref('')
      const errorValue = ref('')
      const successValue = ref('option1')
      const warningValue = ref('option2')
      
      return { 
        defaultValue, 
        errorValue, 
        successValue, 
        warningValue,
        basicOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 300px;">
        <RadioGroup 
          :options="basicOptions"
          state="default"
          label="État par défaut" 
          name="state-default"
          message="Sélectionnez une option"
          v-model:value="defaultValue"
        />
        <RadioGroup 
          :options="basicOptions"
          state="error"
          label="État d'erreur" 
          name="state-error"
          message="Veuillez faire une sélection"
          :required="true"
          v-model:value="errorValue"
        />
        <RadioGroup 
          :options="basicOptions"
          state="success"
          label="État de succès" 
          name="state-success"
          message="Sélection valide !"
          v-model:value="successValue"
        />
        <RadioGroup 
          :options="basicOptions"
          state="warning"
          label="État d'avertissement" 
          name="state-warning"
          message="Attention à cette sélection"
          v-model:value="warningValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différents états visuels du RadioGroup avec leurs messages associés.'
      }
    }
  }
}

// Style carte en bloc
export const BlockCards: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const planValue = ref('')
      
      return { 
        planValue,
        detailedOptions
      }
    },
    template: `
      <div style="width: 400px;">
        <RadioGroup 
          :options="detailedOptions"
          displayType="block-card"
          label="Plan d'abonnement" 
          name="plan-block"
          message="Choisissez le plan qui correspond à vos besoins"
          v-model:value="planValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup avec style carte en bloc, idéal pour des options avec descriptions.'
      }
    }
  }
}

// Style carte inline
export const InlineCards: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const sizeValue = ref('')
      
      const sizeOptions = [
        { value: 'small', label: 'Small', description: 'Jusqu\'à 5 utilisateurs' },
        { value: 'medium', label: 'Medium', description: 'Jusqu\'à 25 utilisateurs' },
        { value: 'large', label: 'Large', description: 'Utilisateurs illimités' }
      ]
      
      return { 
        sizeValue,
        sizeOptions
      }
    },
    template: `
      <div style="width: 500px;">
        <RadioGroup 
          :options="sizeOptions"
          displayType="inline-card"
          direction="horizontal"
          label="Taille d'équipe" 
          name="team-size"
          v-model:value="sizeValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup avec style carte inline, parfait pour des options courtes en ligne.'
      }
    }
  }
}

// Avec icônes
export const WithIcons: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const accountValue = ref('')
      
      return { 
        accountValue,
        iconOptions
      }
    },
    template: `
      <div style="width: 350px;">
        <RadioGroup 
          :options="iconOptions"
          displayType="block-card"
          label="Type de compte" 
          name="account-type"
          v-model:value="accountValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup avec icônes pour enrichir visuellement les options.'
      }
    }
  }
}

// Direction horizontale
export const HorizontalDirection: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const acceptanceValue = ref('')
      
      const acceptanceOptions = [
        { value: 'yes', label: 'Oui' },
        { value: 'no', label: 'Non' },
        { value: 'maybe', label: 'Peut-être' }
      ]
      
      return { 
        acceptanceValue,
        acceptanceOptions
      }
    },
    template: `
      <div style="width: 400px;">
        <RadioGroup 
          :options="acceptanceOptions"
          direction="horizontal"
          label="Acceptez-vous les conditions ?" 
          name="acceptance"
          v-model:value="acceptanceValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup avec disposition horizontale pour des options courtes.'
      }
    }
  }
}

// États disabled
export const DisabledState: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const disabledValue = ref('option2')
      
      return { 
        disabledValue,
        basicOptions
      }
    },
    template: `
      <div style="width: 300px;">
        <RadioGroup 
          :options="basicOptions"
          :disabled="true"
          label="RadioGroup désactivé" 
          name="disabled"
          message="Ce groupe est désactivé"
          v-model:value="disabledValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup dans un état désactivé.'
      }
    }
  }
}

// Playground interactif
export const Playground: Story = {
  args: {
    options: basicOptions,
    size: 'md',
    state: 'default',
    displayType: 'default',
    direction: 'vertical',
    label: 'Label du RadioGroup',
    name: 'playground',
    disabled: false,
    required: false
  },
  render: (args) => ({
    components: { RadioGroup },
    setup() {
      const value = ref('')
      return { 
        args, 
        value,
        basicOptions,
        iconOptions,
        detailedOptions
      }
    },
    template: `
      <div style="width: 400px;">
        <RadioGroup 
          v-bind="args"
          :options="args.useIconOptions ? iconOptions : args.useDetailedOptions ? detailedOptions : basicOptions"
          v-model:value="value"
        />
        <p style="margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">
          Valeur sélectionnée: {{ value }}
        </p>
      </div>
    `
  }),
  argTypes: {
    useIconOptions: {
      control: { type: 'boolean' },
      description: 'Utiliser les options avec icônes'
    },
    useDetailedOptions: {
      control: { type: 'boolean' },
      description: 'Utiliser les options avec descriptions'
    },
    message: {
      control: { type: 'text' },
      description: 'Message affiché (style déterminé par le state)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Playground interactif pour tester toutes les propriétés du RadioGroup.'
      }
    }
  }
}

// Tests d'accessibilité
export const AccessibilityTests: Story = {
  render: () => ({
    components: { RadioGroup },
    setup() {
      const keyboardValue = ref('')
      const ariaValue = ref('')
      const contrastValue = ref('option1')
      
      return { 
        keyboardValue,
        ariaValue,
        contrastValue,
        iconOptions,
        detailedOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 500px;">
        <h3 style="margin: 0;">Tests d'accessibilité</h3>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Navigation au clavier</h4>
          <p style="font-size: 0.875rem; color: #6b7280; margin: 0 0 0.5rem 0;">
            Utilisez Tab, flèches, Espace pour naviguer
          </p>
          <RadioGroup 
            :options="iconOptions"
            label="Navigation clavier"
            name="keyboard-test"
            v-model:value="keyboardValue"
          />
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Support des lecteurs d'écran</h4>
          <RadioGroup 
            :options="detailedOptions"
            displayType="block-card"
            label="Plans avec descriptions"
            name="aria-test"
            ariaLabel="Sélecteur de plans d'abonnement"
            ariaDescribedBy="plans-help"
            v-model:value="ariaValue"
          />
          <p id="plans-help" style="font-size: 0.875rem; color: #6b7280; margin: 0.25rem 0 0 0;">
            Sélectionnez le plan qui correspond à vos besoins
          </p>
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Contraste et visibilité</h4>
          <RadioGroup 
            :options="iconOptions"
            state="error"
            label="Test de contraste"
            name="contrast-test"
            message="Erreur avec contraste élevé"
            v-model:value="contrastValue"
          />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Tests et exemples pour vérifier l\'accessibilité du composant RadioGroup.'
      }
    }
  }
}