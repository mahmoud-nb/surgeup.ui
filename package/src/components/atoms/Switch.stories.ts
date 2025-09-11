import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, computed } from 'vue'
import Switch from './Switch.vue'

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
      control: { type: 'boolean' },
      description: 'Désactive le switch'
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Switch en lecture seule'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Champ requis'
    },
    value: {
      control: { type: 'boolean' },
      description: 'État du switch (activé/désactivé)'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Histoire par défaut
export const Default: Story = {
  args: {
    label: 'Notifications',
    message: 'Activer les notifications push',
    size: 'md',
    state: 'default',
    value: false
  },
  render: (args) => ({
    components: { Switch },
    setup() {
      const value = ref(args.value || false)
      return { args, value }
    },
    template: '<Switch v-bind="args" v-model:value="value" />'
  })
}

// Tailles
export const Sizes: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const smallValue = ref(false)
      const mediumValue = ref(true)
      const largeValue = ref(false)
      
      return { smallValue, mediumValue, largeValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 300px;">
        <Switch 
          size="sm"
          label="Small"
          rightLabel="Petit"
          v-model:value="smallValue"
        />
        <Switch 
          size="md"
          label="Medium"
          rightLabel="Moyen"
          v-model:value="mediumValue"
        />
        <Switch 
          size="lg"
          label="Large"
          rightLabel="Grand"
          v-model:value="largeValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes tailles disponibles pour le Switch.'
      }
    }
  }
}

// États
export const States: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const defaultValue = ref(false)
      const errorValue = ref(true)
      const successValue = ref(true)
      const warningValue = ref(true)
      
      return { defaultValue, errorValue, successValue, warningValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 350px;">
        <Switch 
          state="default"
          label="État par défaut"
          rightLabel="Normal"
          message="Fonctionnement normal"
          v-model:value="defaultValue"
        />
        <Switch 
          state="error"
          label="État d'erreur"
          rightLabel="Erreur"
          message="Une erreur s'est produite"
          v-model:value="errorValue"
        />
        <Switch 
          state="success"
          label="État de succès"
          rightLabel="Succès"
          message="Configuration sauvegardée !"
          v-model:value="successValue"
        />
        <Switch 
          state="warning"
          label="État d'avertissement"
          rightLabel="Attention"
          message="Cette action nécessite une confirmation"
          v-model:value="warningValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différents états visuels du Switch avec leurs messages associés.'
      }
    }
  }
}

// Positionnement des labels
export const LabelPositioning: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const noLabelsValue = ref(false)
      const rightLabelValue = ref(true)
      const leftLabelValue = ref(false)
      const bothLabelsValue = ref(true)
      
      return { 
        noLabelsValue, 
        rightLabelValue, 
        leftLabelValue, 
        bothLabelsValue 
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <div>
          <h4 style="margin: 0 0 1rem 0;">Aucun label latéral (aligné à gauche)</h4>
          <Switch 
            label="Notifications"
            message="Switch aligné à gauche"
            v-model:value="noLabelsValue"
          />
        </div>
        
        <div>
          <h4 style="margin: 0 0 1rem 0;">Label à droite (aligné à côté)</h4>
          <Switch 
            label="Mode sombre"
            rightLabel="Activé"
            message="Switch aligné à côté du label"
            v-model:value="rightLabelValue"
          />
        </div>
        
        <div>
          <h4 style="margin: 0 0 1rem 0;">Label à gauche (aligné à côté)</h4>
          <Switch 
            label="Sauvegarde auto"
            leftLabel="Désactivée"
            message="Switch aligné à côté du label"
            v-model:value="leftLabelValue"
          />
        </div>
        
        <div>
          <h4 style="margin: 0 0 1rem 0;">Labels des deux côtés (centré)</h4>
          <Switch 
            label="Visibilité du profil"
            leftLabel="Privé"
            rightLabel="Public"
            message="Switch centré entre les labels"
            v-model:value="bothLabelsValue"
          />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Démonstration du positionnement automatique du Switch selon les labels fournis.'
      }
    }
  }
}

// États disabled et readonly
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const disabledValue = ref(true)
      const readonlyValue = ref(false)
      const requiredValue = ref(false)
      
      return { disabledValue, readonlyValue, requiredValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 350px;">
        <Switch 
          label="Switch désactivé"
          rightLabel="Désactivé"
          :disabled="true"
          message="Ce switch est désactivé"
          v-model:value="disabledValue"
        />
        <Switch 
          label="Switch en lecture seule"
          rightLabel="Lecture seule"
          :readonly="true"
          message="Cette valeur ne peut pas être modifiée"
          v-model:value="readonlyValue"
        />
        <Switch 
          label="Champ requis"
          rightLabel="Requis"
          :required="true"
          message="Ce paramètre est obligatoire"
          v-model:value="requiredValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'États désactivé, lecture seule et requis du Switch.'
      }
    }
  }
}

// Panneau de paramètres
export const SettingsPanel: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const settings = ref({
        notifications: true,
        darkMode: false,
        autoSave: true,
        publicProfile: false,
        emailUpdates: true
      })
      
      return { settings }
    },
    template: `
      <div style="max-width: 500px; padding: 2rem; background: #f9fafb; border-radius: 0.5rem;">
        <h2 style="margin: 0 0 2rem 0; color: #111827;">Paramètres</h2>
        
        <div style="margin-bottom: 2rem;">
          <h3 style="margin: 0 0 1rem 0; color: #374151; font-weight: 600;">Interface</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <Switch 
              label="Mode sombre"
              leftLabel="Clair"
              rightLabel="Sombre"
              message="Basculer entre les thèmes clair et sombre"
              v-model:value="settings.darkMode"
            />
            <Switch 
              label="Sauvegarde automatique"
              rightLabel="Activée"
              message="Sauvegarder automatiquement vos modifications"
              v-model:value="settings.autoSave"
            />
          </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
          <h3 style="margin: 0 0 1rem 0; color: #374151; font-weight: 600;">Confidentialité</h3>
          <Switch 
            label="Profil public"
            leftLabel="Privé"
            rightLabel="Public"
            message="Contrôler la visibilité de votre profil"
            v-model:value="settings.publicProfile"
          />
        </div>
        
        <div>
          <h3 style="margin: 0 0 1rem 0; color: #374151; font-weight: 600;">Notifications</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <Switch 
              label="Notifications push"
              rightLabel="Activées"
              message="Recevoir des notifications en temps réel"
              v-model:value="settings.notifications"
            />
            <Switch 
              label="Mises à jour par email"
              rightLabel="Activées"
              message="Recevoir les nouveautés par email"
              v-model:value="settings.emailUpdates"
            />
          </div>
        </div>
        
        <div style="margin-top: 2rem; padding: 1rem; background: white; border-radius: 0.375rem; border: 1px solid #e5e7eb;">
          <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: #6b7280;">État actuel :</h4>
          <pre style="font-size: 0.75rem; color: #374151; margin: 0;">{{ JSON.stringify(settings, null, 2) }}</pre>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Exemple d\'un panneau de paramètres utilisant plusieurs Switch avec différents styles de labels.'
      }
    }
  }
}

// Validation conditionnelle
export const ConditionalValidation: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const termsAccepted = ref(false)
      const privacyAccepted = ref(false)
      const marketingAccepted = ref(false)
      
      const canProceed = computed(() => {
        return termsAccepted.value && privacyAccepted.value
      })
      
      const getState = (isRequired, value) => {
        if (!isRequired) return 'default'
        return value ? 'success' : 'error'
      }
      
      const getMessage = (isRequired, value, successMsg, errorMsg) => {
        if (!isRequired) return undefined
        return value ? successMsg : errorMsg
      }
      
      return { 
        termsAccepted, 
        privacyAccepted, 
        marketingAccepted, 
        canProceed,
        getState,
        getMessage
      }
    },
    template: `
      <div style="max-width: 400px; padding: 2rem; background: #f9fafb; border-radius: 0.5rem;">
        <h2 style="margin: 0 0 2rem 0; color: #111827;">Consentements</h2>
        
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <Switch 
            label="Conditions d'utilisation"
            rightLabel="J'accepte"
            :required="true"
            :state="getState(true, termsAccepted)"
            :message="getMessage(
              true, 
              termsAccepted,
              'Conditions acceptées',
              'Vous devez accepter les conditions d\\'utilisation'
            )"
            v-model:value="termsAccepted"
          />
          
          <Switch 
            label="Politique de confidentialité"
            rightLabel="J'accepte"
            :required="true"
            :state="getState(true, privacyAccepted)"
            :message="getMessage(
              true,
              privacyAccepted,
              'Politique acceptée',
              'Vous devez accepter la politique de confidentialité'
            )"
            v-model:value="privacyAccepted"
          />
          
          <Switch 
            label="Communications marketing"
            rightLabel="J'accepte"
            message="Recevoir des offres et actualités (optionnel)"
            v-model:value="marketingAccepted"
          />
          
          <button 
            type="submit" 
            :disabled="!canProceed"
            :style="{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: canProceed ? '#3b82f6' : '#9ca3af',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: '500',
              cursor: canProceed ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s'
            }"
          >
            {{ canProceed ? 'Continuer' : 'Veuillez accepter les conditions requises' }}
          </button>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Exemple de validation conditionnelle avec Switch requis et optionnels.'
      }
    }
  }
}

// Playground interactif
export const Playground: Story = {
  args: {
    label: 'Label du Switch',
    leftLabel: '',
    rightLabel: '',
    message: '',
    size: 'md',
    state: 'default',
    disabled: false,
    readonly: false,
    required: false,
    value: false
  },
  render: (args) => ({
    components: { Switch },
    setup() {
      const value = ref(args.value || false)
      return { args, value }
    },
    template: `
      <div style="width: 400px;">
        <Switch 
          v-bind="args"
          :leftLabel="args.leftLabel || undefined"
          :rightLabel="args.rightLabel || undefined"
          :message="args.message || undefined"
          v-model:value="value"
        />
        <p style="margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">
          Valeur: {{ value }}
        </p>
      </div>
    `
  }),
  argTypes: {
    leftLabel: {
      control: { type: 'text' },
      description: 'Label affiché à gauche du switch'
    },
    rightLabel: {
      control: { type: 'text' },
      description: 'Label affiché à droite du switch'
    },
    message: {
      control: { type: 'text' },
      description: 'Message affiché (style déterminé par le state)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Playground interactif pour tester toutes les propriétés du Switch.'
      }
    }
  }
}

// Tests d'accessibilité
export const AccessibilityTests: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const keyboardValue = ref(false)
      const ariaValue = ref(true)
      const contrastValue = ref(false)
      
      return { keyboardValue, ariaValue, contrastValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 500px;">
        <h3 style="margin: 0;">Tests d'accessibilité</h3>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Navigation au clavier</h4>
          <p style="font-size: 0.875rem; color: #6b7280; margin: 0 0 0.5rem 0;">
            Utilisez Tab pour naviguer et Espace/Entrée pour basculer
          </p>
          <Switch 
            label="Navigation clavier"
            rightLabel="Testez-moi"
            message="Utilisez le clavier pour interagir"
            v-model:value="keyboardValue"
          />
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Support des lecteurs d'écran</h4>
          <Switch 
            label="Switch accessible"
            leftLabel="Désactivé"
            rightLabel="Activé"
            ariaLabel="Basculer l'état de la fonctionnalité"
            ariaDescribedBy="switch-help"
            message="Switch avec attributs ARIA complets"
            v-model:value="ariaValue"
          />
          <p id="switch-help" style="font-size: 0.875rem; color: #6b7280; margin: 0.25rem 0 0 0;">
            Ce switch contrôle une fonctionnalité importante du système
          </p>
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Contraste et visibilité</h4>
          <Switch 
            label="Test de contraste"
            rightLabel="Contraste élevé"
            state="error"
            message="Switch avec contraste élevé pour l'accessibilité"
            v-model:value="contrastValue"
          />
        </div>
        
        <div style="padding: 1rem; background: #f3f4f6; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h4 style="margin: 0 0 0.5rem 0; color: #1f2937;">Fonctionnalités d'accessibilité ✅</h4>
          <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem; color: #4b5563;">
            <li>Rôle ARIA "switch" avec aria-checked</li>
            <li>Navigation au clavier (Tab, Espace, Entrée)</li>
            <li>Labels associés correctement</li>
            <li>Messages avec aria-live</li>
            <li>Focus visible et contrasté</li>
            <li>Tailles minimales respectées (44px)</li>
            <li>Support du mode sombre</li>
            <li>Contraste élevé et réduction d'animations</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Tests et exemples pour vérifier l\'accessibilité du composant Switch.'
      }
    }
  }
}