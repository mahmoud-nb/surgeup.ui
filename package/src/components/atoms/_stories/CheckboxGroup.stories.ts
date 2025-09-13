import type { Meta, StoryObj } from '@storybook/vue3'
import { StarIcon, BuildingOfficeIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'
import CheckboxGroup from '../CheckboxGroup.vue'

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
    options: {
      control: 'object',
      description: 'Liste des options checkbox'
    },
    value: {
      control: 'object',
      description: 'Valeurs sélectionnées'
    },
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
    disabled: {
      control: 'boolean',
      description: 'Désactive tout le groupe'
    },
    required: {
      control: 'boolean',
      description: 'Au moins une sélection requise'
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
    maxSelections: {
      control: 'number',
      description: 'Nombre maximum de sélections'
    },
    maxHeight: {
      control: 'text',
      description: 'Hauteur maximale avec scroll automatique'
    },
    label: {
      control: 'text',
      description: 'Label du groupe'
    },
    message: {
      control: 'text',
      description: 'Message affiché'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4', disabled: true }
]

const techOptions = [
  { value: 'js', label: 'JavaScript', description: 'Langage de programmation web' },
  { value: 'ts', label: 'TypeScript', description: 'JavaScript avec typage statique' },
  { value: 'vue', label: 'Vue.js', description: 'Framework JavaScript progressif' },
  { value: 'react', label: 'React', description: 'Bibliothèque JavaScript pour les interfaces' }
]

const permissionOptions = [
  { value: 'read', label: 'Lecture', icon: StarIcon },
  { value: 'write', label: 'Écriture', icon: BuildingOfficeIcon },
  { value: 'admin', label: 'Administration', icon: GlobeAltIcon }
]

const longSkillsList = [
  { value: 'skill1', label: 'JavaScript' },
  { value: 'skill2', label: 'TypeScript' },
  { value: 'skill3', label: 'Vue.js' },
  { value: 'skill4', label: 'React' },
  { value: 'skill5', label: 'Angular' },
  { value: 'skill6', label: 'Node.js' },
  { value: 'skill7', label: 'Python' },
  { value: 'skill8', label: 'Java' },
  { value: 'skill9', label: 'C#' },
  { value: 'skill10', label: 'PHP' },
  { value: 'skill11', label: 'Ruby' },
  { value: 'skill12', label: 'Go' },
  { value: 'skill13', label: 'Rust' },
  { value: 'skill14', label: 'Swift' },
  { value: 'skill15', label: 'Kotlin' }
]

export const Default: Story = {
  args: {
    options: basicOptions,
    label: 'Sélection multiple',
    value: []
  }
}

export const WithValue: Story = {
  args: {
    options: basicOptions,
    label: 'Avec valeurs pré-sélectionnées',
    value: ['option1', 'option3']
  }
}

export const BlockCard: Story = {
  args: {
    options: techOptions,
    displayType: 'block-card',
    label: 'Technologies',
    value: []
  }
}

export const InlineCard: Story = {
  args: {
    options: [
      { value: 'email', label: 'Email', description: 'Notifications par email' },
      { value: 'sms', label: 'SMS', description: 'Notifications par SMS' },
      { value: 'push', label: 'Push', description: 'Notifications push' }
    ],
    displayType: 'inline-card',
    direction: 'horizontal',
    label: 'Notifications',
    value: []
  }
}

export const WithIcons: Story = {
  args: {
    options: permissionOptions,
    displayType: 'block-card',
    label: 'Permissions',
    value: []
  },
  render: (args) => ({
    components: { CheckboxGroup },
    setup() {
      return { args, permissionOptions }
    },
    template: '<CheckboxGroup v-bind="args" :options="permissionOptions" />'
  })
}

export const MaxSelections: Story = {
  args: {
    options: [
      { value: 'skill1', label: 'JavaScript' },
      { value: 'skill2', label: 'Python' },
      { value: 'skill3', label: 'Java' },
      { value: 'skill4', label: 'C#' },
      { value: 'skill5', label: 'PHP' }
    ],
    maxSelections: 2,
    label: 'Compétences principales',
    message: 'Sélectionnez maximum 2 compétences',
    value: []
  }
}

export const ScrollableList: Story = {
  args: {
    options: longSkillsList,
    maxHeight: '150px',
    label: 'Compétences (avec scroll)',
    message: 'Liste avec hauteur limitée et scroll automatique',
    value: []
  }
}

export const States: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      return { basicOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <CheckboxGroup 
          :options="basicOptions"
          label="État par défaut"
          message="Sélectionnez vos options"
        />
        <CheckboxGroup 
          :options="basicOptions"
          state="error"
          label="État d'erreur"
          message="Veuillez sélectionner au moins une option"
          :required="true"
        />
        <CheckboxGroup 
          :options="basicOptions"
          state="success"
          label="État de succès"
          message="Sélection valide !"
          :value="['option1']"
        />
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { CheckboxGroup },
    setup() {
      return { basicOptions }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <CheckboxGroup size="sm" :options="basicOptions" label="Small" />
        <CheckboxGroup size="md" :options="basicOptions" label="Medium" />
        <CheckboxGroup size="lg" :options="basicOptions" label="Large" />
      </div>
    `
  })
}

export const Horizontal: Story = {
  args: {
    options: [
      { value: 'monday', label: 'Lundi' },
      { value: 'tuesday', label: 'Mardi' },
      { value: 'wednesday', label: 'Mercredi' },
      { value: 'thursday', label: 'Jeudi' },
      { value: 'friday', label: 'Vendredi' }
    ],
    direction: 'horizontal',
    label: 'Jours de travail',
    value: []
  }
}

export const Disabled: Story = {
  args: {
    options: basicOptions,
    disabled: true,
    label: 'Groupe désactivé',
    value: ['option1']
  }
}

export const Required: Story = {
  args: {
    options: [
      { value: 'terms', label: 'J\'accepte les conditions d\'utilisation' },
      { value: 'privacy', label: 'J\'accepte la politique de confidentialité' }
    ],
    required: true,
    label: 'Acceptation',
    message: 'Veuillez accepter les conditions',
    value: []
  }
}