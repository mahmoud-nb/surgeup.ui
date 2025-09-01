import type { Meta, StoryObj } from '@storybook/vue3'
import { 
  PlusIcon, 
  TrashIcon, 
  ArrowRightIcon, 
  HeartIcon, 
  ShareIcon,
  ArrowDownTrayIcon 
} from '@heroicons/vue/24/outline'
import Button from './Button.vue'

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
      control: { type: 'boolean' },
      description: 'Désactive le bouton'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Affiche un spinner de chargement'
    },
    block: {
      control: { type: 'boolean' },
      description: 'Prend toute la largeur disponible'
    },
    onClick: { action: 'clicked' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Histoire par défaut
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Bouton par défaut</Button>'
  })
}

// Variantes
export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes variantes visuelles disponibles pour le bouton.'
      }
    }
  }
}

// Tailles
export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes tailles disponibles pour le bouton.'
      }
    }
  }
}

// États
export const States: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Button>Normal</Button>
        <Button :disabled="true">Disabled</Button>
        <Button :loading="true">Loading</Button>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différents états du bouton : normal, désactivé et en chargement.'
      }
    }
  }
}

// Avec icônes
export const WithIcons: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return {
        PlusIcon,
        ArrowRightIcon,
        HeartIcon,
        TrashIcon
      }
    },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <Button variant="primary" :iconBefore="PlusIcon">Ajouter</Button>
        <Button variant="secondary" :iconAfter="ArrowRightIcon">Suivant</Button>
        <Button variant="outline" :iconOnly="HeartIcon" aria-label="Aimer" />
        <Button variant="ghost" :iconOnly="TrashIcon" aria-label="Supprimer" />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Boutons avec icônes avant, après ou seules. Les boutons avec icône seule nécessitent un aria-label.'
      }
    }
  }
}

// Pleine largeur
export const FullWidth: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="width: 300px;">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <Button :block="true">Bouton pleine largeur</Button>
          <Button variant="outline" :block="true">Outline pleine largeur</Button>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Boutons qui prennent toute la largeur de leur conteneur.'
      }
    }
  }
}

// Playground interactif
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    block: false
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { 
        args,
        PlusIcon,
        ArrowRightIcon,
        ShareIcon
      }
    },
    template: `
      <Button 
        v-bind="args"
        :iconBefore="args.iconBefore ? PlusIcon : undefined"
        :iconAfter="args.iconAfter ? ArrowRightIcon : undefined"
        :iconOnly="args.iconOnly ? ShareIcon : undefined"
        :aria-label="args.iconOnly ? 'Partager' : undefined"
      >
        {{ args.iconOnly ? '' : 'Texte du bouton' }}
      </Button>
    `
  }),
  argTypes: {
    iconBefore: {
      control: { type: 'boolean' },
      description: 'Afficher une icône avant le texte'
    },
    iconAfter: {
      control: { type: 'boolean' },
      description: 'Afficher une icône après le texte'
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Afficher seulement une icône'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Playground interactif pour tester toutes les propriétés du bouton.'
      }
    }
  }
}

// Tests d'accessibilité
export const AccessibilityTests: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return {
        HeartIcon,
        ShareIcon,
        ArrowDownTrayIcon
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <h3 style="margin: 0;">Tests d'accessibilité</h3>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Boutons avec icônes seules (avec aria-label)</h4>
          <div style="display: flex; gap: 0.5rem;">
            <Button variant="ghost" :iconOnly="HeartIcon" aria-label="Aimer cette publication" />
            <Button variant="outline" :iconOnly="ShareIcon" aria-label="Partager" />
            <Button variant="primary" :iconOnly="ArrowDownTrayIcon" aria-label="Télécharger le fichier" />
          </div>
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Bouton avec description</h4>
          <Button aria-describedby="save-help">Sauvegarder</Button>
          <p id="save-help" style="font-size: 0.875rem; color: #6b7280; margin: 0.25rem 0 0 0;">
            Sauvegarde automatique toutes les 30 secondes
          </p>
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Navigation au clavier</h4>
          <p style="font-size: 0.875rem; color: #6b7280; margin: 0 0 0.5rem 0;">
            Utilisez Tab pour naviguer et Entrée/Espace pour activer
          </p>
          <div style="display: flex; gap: 0.5rem;">
            <Button tabIndex="1">Premier</Button>
            <Button tabIndex="2">Deuxième</Button>
            <Button tabIndex="3">Troisième</Button>
          </div>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Tests et exemples pour vérifier l\'accessibilité du composant Button.'
      }
    }
  }
}