import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { 
  UserIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  StarIcon,
  CogIcon,
  BellIcon,
  MailIcon,
  DevicePhoneMobileIcon
} from '@heroicons/vue/24/outline'
import CheckboxGroup from './CheckboxGroup.vue'
import type { CheckboxOption } from '@/types'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Atoms/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant CheckboxGroup pour la sélection multiple avec deux styles d\'affichage : classique ou en cartes. Support complet de l\'accessibilité selon les normes W3C.'
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
      description: 'Au moins une sélection requise'
    },
    maxSelections: {
      control: { type: 'number' },
      description: 'Nombre maximum de sélections'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Options de base
const basicOptions: CheckboxOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4', disabled: true }
]

// Options avec icônes
const iconOptions: CheckboxOption[] = [
  { value: 'read', label: 'Lecture', icon: StarIcon },
  { value: 'write', label: 'Écriture', icon: BuildingOfficeIcon },
  { value: 'admin', label: 'Administration', icon: GlobeAltIcon }
]

// Options avec descriptions
const detailedOptions: CheckboxOption[] = [
  { 
    value: 'js', 
    label: 'JavaScript', 
    description: 'Langage de programmation web',
    icon: CogIcon 
  },
  { 
    value: 'ts', 
    label: 'TypeScript', 
    description: 'JavaScript avec typage statique',
    icon: StarIcon 
  },
  { 
    value: 'vue', 
    label: 'Vue.js', 
    description: 'Framework JavaScript progressif',
    icon: GlobeAltIcon 
  }
]

// Options de notifications
const notificationOptions: CheckboxOption[] = [
  { value: 'email', label: 'Email', icon: MailIcon, description: 'Recevoir des emails' },
  { value: 'push', label: 'Push', icon: BellIcon, description: 'Notifications push' },
  { value: 'sms', label: 'SMS', icon: DevicePhoneMobileIcon, description: 'Messages SMS' }
]

// Histoire par défaut
export const Default: Story = {
  args: {
    options: basicOptions,
    label: 'Sélection multiple',
    size: 'md',
    state: 'default',
    displayType: 'default'
  },
  render: (args) => ({
    components: { CheckboxGroup },
    setup() {
      const value = ref([])
      return { args, value }
    },
    template: '<CheckboxGroup v-bind="args" v-model:value="value" />'
  })
}

// Tailles
export const Sizes: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const smallValue = ref([])
      const mediumValue = ref([])
      const largeValue = ref([])
      
      return { 
        smallValue, 
        mediumValue, 
        largeValue,
        basicOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 300px;">
        <CheckboxGroup 
          :options="basicOptions"
          size="sm" 
          label="Small" 
          v-model:value="smallValue"
        />
        <CheckboxGroup 
          :options="basicOptions"
          size="md" 
          label="Medium" 
          v-model:value="mediumValue"
        />
        <CheckboxGroup 
          :options="basicOptions"
          size="lg" 
          label="Large" 
          v-model:value="largeValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes tailles disponibles pour le CheckboxGroup.'
      }
    }
  }
}

// États
export const States: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const defaultValue = ref([])
      const errorValue = ref([])
      const successValue = ref(['option1'])
      const warningValue = ref(['option2'])
      
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
        <CheckboxGroup 
          :options="basicOptions"
          state="default"
          label="État par défaut" 
          message="Sélectionnez une ou plusieurs options"
          v-model:value="defaultValue"
        />
        <CheckboxGroup 
          :options="basicOptions"
          state="error"
          label="État d'erreur" 
          message="Veuillez faire au moins une sélection"
          :required="true"
          v-model:value="errorValue"
        />
        <CheckboxGroup 
          :options="basicOptions"
          state="success"
          label="État de succès" 
          message="Sélections valides !"
          v-model:value="successValue"
        />
        <CheckboxGroup 
          :options="basicOptions"
          state="warning"
          label="État d'avertissement" 
          message="Attention à ces sélections"
          v-model:value="warningValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différents états visuels du CheckboxGroup avec leurs messages associés.'
      }
    }
  }
}

// Style carte en bloc
export const BlockCards: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const techValue = ref(['js'])
      
      return { 
        techValue,
        detailedOptions
      }
    },
    template: `
      <div style="width: 400px;">
        <CheckboxGroup 
          :options="detailedOptions"
          displayType="block-card"
          label="Technologies" 
          message="Sélectionnez vos technologies préférées"
          v-model:value="techValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup avec style carte en bloc, idéal pour des options avec descriptions.'
      }
    }
  }
}

// Style carte inline
export const InlineCards: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const notifValue = ref(['email'])
      
      return { 
        notifValue,
        notificationOptions
      }
    },
    template: `
      <div style="width: 500px;">
        <CheckboxGroup 
          :options="notificationOptions"
          displayType="inline-card"
          direction="horizontal"
          label="Notifications" 
          v-model:value="notifValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup avec style carte inline, parfait pour des options courtes en ligne.'
      }
    }
  }
}

// Avec icônes
export const WithIcons: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const permissionsValue = ref(['read'])
      
      return { 
        permissionsValue,
        iconOptions
      }
    },
    template: `
      <div style="width: 350px;">
        <CheckboxGroup 
          :options="iconOptions"
          displayType="block-card"
          label="Permissions" 
          v-model:value="permissionsValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup avec icônes pour enrichir visuellement les options.'
      }
    }
  }
}

// Limitation de sélections
export const MaxSelections: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const skillsValue = ref(['option1'])
      
      const skillOptions = [
        { value: 'skill1', label: 'JavaScript' },
        { value: 'skill2', label: 'Python' },
        { value: 'skill3', label: 'Java' },
        { value: 'skill4', label: 'C#' },
        { value: 'skill5', label: 'PHP' }
      ]
      
      return { 
        skillsValue,
        skillOptions
      }
    },
    template: `
      <div style="width: 300px;">
        <CheckboxGroup 
          :options="skillOptions"
          :maxSelections="2"
          label="Compétences principales" 
          message="Sélectionnez maximum 2 compétences"
          v-model:value="skillsValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup avec limitation du nombre de sélections possibles.'
      }
    }
  }
}

// Direction horizontale
export const HorizontalDirection: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const daysValue = ref(['monday', 'friday'])
      
      const dayOptions = [
        { value: 'monday', label: 'Lundi' },
        { value: 'tuesday', label: 'Mardi' },
        { value: 'wednesday', label: 'Mercredi' },
        { value: 'thursday', label: 'Jeudi' },
        { value: 'friday', label: 'Vendredi' }
      ]
      
      return { 
        daysValue,
        dayOptions
      }
    },
    template: `
      <div style="width: 500px;">
        <CheckboxGroup 
          :options="dayOptions"
          direction="horizontal"
          label="Jours de travail" 
          v-model:value="daysValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup avec disposition horizontale pour des options courtes.'
      }
    }
  }
}

// États disabled
export const DisabledState: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const disabledValue = ref(['option1', 'option3'])
      
      return { 
        disabledValue,
        basicOptions
      }
    },
    template: `
      <div style="width: 300px;">
        <CheckboxGroup 
          :options="basicOptions"
          :disabled="true"
          label="CheckboxGroup désactivé" 
          message="Ce groupe est désactivé"
          v-model:value="disabledValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup dans un état désactivé.'
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
    label: 'Label du CheckboxGroup',
    disabled: false,
    required: false,
    maxSelections: undefined
  },
  render: (args) => ({
    components: { CheckboxGroup },
    setup() {
      const value = ref([])
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
        <CheckboxGroup 
          v-bind="args"
          :options="args.useIconOptions ? iconOptions : args.useDetailedOptions ? detailedOptions : basicOptions"
          v-model:value="value"
        />
        <p style="margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">
          Valeurs sélectionnées: {{ JSON.stringify(value) }}
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
        story: 'Playground interactif pour tester toutes les propriétés du CheckboxGroup.'
      }
    }
  }
}

// Tests d'accessibilité
export const AccessibilityTests: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      const keyboardValue = ref([])
      const ariaValue = ref([])
      const contrastValue = ref(['read'])
      
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
            Utilisez Tab et Espace pour naviguer et sélectionner
          </p>
          <CheckboxGroup 
            :options="iconOptions"
            label="Navigation clavier"
            v-model:value="keyboardValue"
          />
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Support des lecteurs d'écran</h4>
          <CheckboxGroup 
            :options="detailedOptions"
            displayType="block-card"
            label="Technologies avec descriptions"
            ariaLabel="Sélecteur de technologies de développement"
            ariaDescribedBy="tech-help"
            v-model:value="ariaValue"
          />
          <p id="tech-help" style="font-size: 0.875rem; color: #6b7280; margin: 0.25rem 0 0 0;">
            Sélectionnez les technologies que vous maîtrisez
          </p>
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Contraste et visibilité</h4>
          <CheckboxGroup 
            :options="iconOptions"
            state="error"
            label="Test de contraste"
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
        story: 'Tests et exemples pour vérifier l\'accessibilité du composant CheckboxGroup.'
      }
    }
  }
}