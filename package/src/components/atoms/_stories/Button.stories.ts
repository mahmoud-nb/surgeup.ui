import type { Meta, StoryObj } from '@storybook/vue3'
import { PlusIcon, ArrowRightIcon, HeartIcon, TrashIcon } from '@heroicons/vue/24/outline'
import Button from '../Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant bouton flexible avec plusieurs variantes, tailles et états. Supporte les interactions au clavier et les états de chargement.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Variante visuelle du bouton'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille du bouton'
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive le bouton'
    },
    loading: {
      control: 'boolean',
      description: 'Affiche un spinner de chargement'
    },
    block: {
      control: 'boolean',
      description: 'Prend toute la largeur disponible'
    },
    iconBefore: {
      control: false,
      description: 'Icône à afficher avant le texte'
    },
    iconAfter: {
      control: false,
      description: 'Icône à afficher après le texte'
    },
    iconOnly: {
      control: false,
      description: 'Icône seule (nécessite aria-label)'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Primary Button</Button>'
  })
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Secondary Button</Button>'
  })
}

export const Outline: Story = {
  args: {
    variant: 'outline'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Outline Button</Button>'
  })
}

export const Ghost: Story = {
  args: {
    variant: 'ghost'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Ghost Button</Button>'
  })
}

export const WithIconBefore: Story = {
  args: {
    variant: 'primary',
    iconBefore: PlusIcon
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args, PlusIcon }
    },
    template: '<Button v-bind="args" :iconBefore="PlusIcon">Ajouter</Button>'
  })
}

export const WithIconAfter: Story = {
  args: {
    variant: 'secondary',
    iconAfter: ArrowRightIcon
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args, ArrowRightIcon }
    },
    template: '<Button v-bind="args" :iconAfter="ArrowRightIcon">Suivant</Button>'
  })
}

export const IconOnly: Story = {
  args: {
    variant: 'outline',
    iconOnly: HeartIcon,
    ariaLabel: 'Aimer'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args, HeartIcon }
    },
    template: '<Button v-bind="args" :iconOnly="HeartIcon" />'
  })
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Chargement...</Button>'
  })
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Disabled Button</Button>'
  })
}

export const Block: Story = {
  args: {
    variant: 'primary',
    block: true
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Block Button</Button>'
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `
  })
}

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    `
  })
}