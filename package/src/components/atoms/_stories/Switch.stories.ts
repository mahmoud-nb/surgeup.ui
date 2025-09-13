import type { Meta, StoryObj } from '@storybook/vue3'
import Switch from '../Switch.vue'

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant Switch (interrupteur) pour les actions de basculement on/off. Conforme aux normes W3C avec support complet de l\'accessibilité et positionnement intelligent des labels.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'boolean',
      description: 'État du switch (activé/désactivé)'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille du switch'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'État visuel du switch'
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive le switch'
    },
    readonly: {
      control: 'boolean',
      description: 'Switch en lecture seule'
    },
    required: {
      control: 'boolean',
      description: 'Champ requis'
    },
    label: {
      control: 'text',
      description: 'Label principal du switch'
    },
    leftLabel: {
      control: 'text',
      description: 'Label affiché à gauche du switch'
    },
    rightLabel: {
      control: 'text',
      description: 'Label affiché à droite du switch'
    },
    message: {
      control: 'text',
      description: 'Message affiché'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Notifications',
    message: 'Activer les notifications push'
  }
}

export const WithValue: Story = {
  args: {
    label: 'Mode sombre',
    value: true,
    message: 'Interface en mode sombre'
  }
}

export const WithRightLabel: Story = {
  args: {
    label: 'Mode sombre',
    rightLabel: 'Activé',
    message: 'Basculer vers le thème sombre'
  }
}

export const WithBothLabels: Story = {
  args: {
    label: 'Visibilité du profil',
    leftLabel: 'Privé',
    rightLabel: 'Public',
    message: 'Contrôler qui peut voir votre profil'
  }
}

export const States: Story = {
  render: () => ({
    components: { Switch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <Switch 
          label="État par défaut"
          rightLabel="Normal"
          message="Fonctionnement normal"
        />
        <Switch 
          state="error"
          label="État d'erreur"
          rightLabel="Erreur"
          message="Une erreur s'est produite"
          :value="true"
        />
        <Switch 
          state="success"
          label="État de succès"
          rightLabel="Succès"
          message="Configuration sauvegardée !"
          :value="true"
        />
        <Switch 
          state="warning"
          label="État d'avertissement"
          rightLabel="Attention"
          message="Cette action nécessite une confirmation"
          :value="true"
        />
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Switch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <Switch 
          size="sm"
          label="Small"
          rightLabel="Petit"
        />
        <Switch 
          size="md"
          label="Medium"
          rightLabel="Moyen"
        />
        <Switch 
          size="lg"
          label="Large"
          rightLabel="Grand"
        />
      </div>
    `
  })
}

export const Disabled: Story = {
  args: {
    label: 'Switch désactivé',
    rightLabel: 'Désactivé',
    disabled: true,
    value: true,
    message: 'Ce switch est désactivé'
  }
}

export const Readonly: Story = {
  args: {
    label: 'Switch en lecture seule',
    rightLabel: 'Lecture seule',
    readonly: true,
    value: false,
    message: 'Cette valeur ne peut pas être modifiée'
  }
}

export const Required: Story = {
  args: {
    label: 'Champ requis',
    rightLabel: 'Requis',
    required: true,
    message: 'Ce paramètre est obligatoire'
  }
}

export const SettingsPanel: Story = {
  render: () => ({
    components: { Switch },
    template: `
      <div style="max-width: 500px; margin: 0 auto;">
        <h3 style="margin-bottom: 2rem;">Paramètres</h3>
        
        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 1rem; color: #374151; font-weight: 600;">Interface</h4>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <Switch 
              label="Mode sombre"
              leftLabel="Clair"
              rightLabel="Sombre"
              message="Basculer entre les thèmes clair et sombre"
            />
            <Switch 
              label="Sauvegarde automatique"
              rightLabel="Activée"
              message="Sauvegarder automatiquement vos modifications"
            />
          </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 1rem; color: #374151; font-weight: 600;">Confidentialité</h4>
          <Switch 
            label="Profil public"
            leftLabel="Privé"
            rightLabel="Public"
            message="Contrôler la visibilité de votre profil"
          />
        </div>
        
        <div>
          <h4 style="margin-bottom: 1rem; color: #374151; font-weight: 600;">Notifications</h4>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <Switch 
              label="Notifications push"
              rightLabel="Activées"
              message="Recevoir des notifications en temps réel"
            />
            <Switch 
              label="Mises à jour par email"
              rightLabel="Activées"
              message="Recevoir les nouveautés par email"
            />
          </div>
        </div>
      </div>
    `
  })
}