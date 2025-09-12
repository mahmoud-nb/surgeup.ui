import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, computed } from 'vue'
import Textarea from './Textarea.vue'

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant Textarea flexible avec compteur de caractères, ajustement automatique de hauteur et conformité aux normes W3C d\'accessibilité.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille du textarea'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'État visuel du textarea'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Désactive le textarea'
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Textarea en lecture seule'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Champ requis'
    },
    autoResize: {
      control: { type: 'boolean' },
      description: 'Ajustement automatique de la hauteur'
    },
    showCounter: {
      control: { type: 'boolean' },
      description: 'Afficher le compteur de caractères'
    },
    spellcheck: {
      control: { type: 'boolean' },
      description: 'Vérification orthographique'
    },
    wrap: {
      control: { type: 'select' },
      options: ['soft', 'hard', 'off'],
      description: 'Mode de retour à la ligne'
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Nombre de lignes par défaut'
    },
    minRows: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Nombre minimum de lignes (auto-resize)'
    },
    maxRows: {
      control: { type: 'number', min: 2, max: 30 },
      description: 'Nombre maximum de lignes (auto-resize)'
    },
    maxLength: {
      control: { type: 'number', min: 10, max: 5000 },
      description: 'Nombre maximum de caractères'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Histoire par défaut
export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Entrez votre description...',
    message: 'Décrivez votre projet en quelques phrases',
    size: 'md',
    state: 'default',
    rows: 3
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Textarea v-bind="args" v-model:value="value" />'
  })
}

// Tailles
export const Sizes: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const smallValue = ref('')
      const mediumValue = ref('')
      const largeValue = ref('')
      
      return { smallValue, mediumValue, largeValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 400px;">
        <Textarea 
          size="sm"
          label="Small"
          placeholder="Petit textarea"
          :rows="2"
          v-model:value="smallValue"
        />
        <Textarea 
          size="md"
          label="Medium"
          placeholder="Textarea moyen"
          :rows="3"
          v-model:value="mediumValue"
        />
        <Textarea 
          size="lg"
          label="Large"
          placeholder="Grand textarea"
          :rows="4"
          v-model:value="largeValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes tailles disponibles pour le Textarea.'
      }
    }
  }
}

// États
export const States: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const defaultValue = ref('')
      const errorValue = ref('Texte avec erreur')
      const successValue = ref('Texte validé avec succès')
      const warningValue = ref('Texte nécessitant attention')
      
      return { defaultValue, errorValue, successValue, warningValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 400px;">
        <Textarea 
          state="default"
          label="État par défaut"
          placeholder="Entrez du texte"
          message="Texte d'aide pour guider l'utilisateur"
          v-model:value="defaultValue"
        />
        <Textarea 
          state="error"
          label="État d'erreur"
          placeholder="Entrez du texte"
          message="Ce champ contient une erreur"
          v-model:value="errorValue"
        />
        <Textarea 
          state="success"
          label="État de succès"
          placeholder="Entrez du texte"
          message="Contenu valide !"
          v-model:value="successValue"
        />
        <Textarea 
          state="warning"
          label="État d'avertissement"
          placeholder="Entrez du texte"
          message="Attention au contenu"
          v-model:value="warningValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différents états visuels du Textarea avec leurs messages associés.'
      }
    }
  }
}

// Compteur de caractères
export const CharacterCounter: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const shortValue = ref('')
      const mediumValue = ref('')
      const longValue = ref('')
      
      return { shortValue, mediumValue, longValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 400px;">
        <Textarea 
          label="Message court (100 caractères)"
          :maxLength="100"
          :showCounter="true"
          placeholder="Message bref..."
          message="Idéal pour les notifications"
          v-model:value="shortValue"
        />
        <Textarea 
          label="Commentaire (500 caractères)"
          :maxLength="500"
          :showCounter="true"
          :rows="4"
          placeholder="Votre commentaire..."
          message="Partagez votre avis détaillé"
          v-model:value="mediumValue"
        />
        <Textarea 
          label="Article (2000 caractères)"
          :maxLength="2000"
          :showCounter="true"
          :autoResize="true"
          :minRows="6"
          :maxRows="15"
          placeholder="Rédigez votre article..."
          message="Contenu long avec auto-resize"
          v-model:value="longValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Textarea avec compteur de caractères et différentes limites.'
      }
    }
  }
}

// Auto-resize
export const AutoResize: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const autoValue = ref('')
      const limitedValue = ref('')
      
      return { autoValue, limitedValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 400px;">
        <Textarea 
          label="Auto-resize libre"
          :autoResize="true"
          :minRows="2"
          :maxRows="10"
          placeholder="Tapez du texte et voyez la hauteur s'ajuster..."
          message="La hauteur s'ajuste automatiquement au contenu"
          v-model:value="autoValue"
        />
        <Textarea 
          label="Auto-resize avec limite"
          :autoResize="true"
          :minRows="3"
          :maxRows="6"
          :maxLength="300"
          :showCounter="true"
          placeholder="Hauteur limitée entre 3 et 6 lignes..."
          message="Auto-resize avec contraintes de hauteur"
          v-model:value="limitedValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Textarea avec ajustement automatique de la hauteur selon le contenu.'
      }
    }
  }
}

// Validation en temps réel
export const RealTimeValidation: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const content = ref('')
      const errors = ref<string[]>([])
      
      const validateContent = (text: string) => {
        const newErrors: string[] = []
        
        if (text.length > 0 && text.length < 10) {
          newErrors.push('Le message doit contenir au moins 10 caractères')
        }
        
        const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length
        if (text.length > 0 && wordCount < 3) {
          newErrors.push('Le message doit contenir au moins 3 mots')
        }
        
        return newErrors
      }
      
      const state = computed(() => {
        if (!content.value) return 'default'
        return errors.value.length > 0 ? 'error' : 'success'
      })
      
      const message = computed(() => {
        if (errors.value.length > 0) {
          return errors.value[0]
        }
        if (content.value && errors.value.length === 0) {
          return 'Message valide !'
        }
        return 'Rédigez votre message (minimum 10 caractères, 3 mots)'
      })
      
      // Validation en temps réel
      const validateRealTime = (newValue: string) => {
        errors.value = validateContent(newValue)
      }
      
      return { 
        content, 
        state, 
        message,
        validateRealTime
      }
    },
    template: `
      <div style="width: 400px;">
        <Textarea 
          label="Message avec validation"
          :required="true"
          :maxLength="200"
          :showCounter="true"
          :autoResize="true"
          :state="state"
          :message="message"
          placeholder="Écrivez votre message..."
          v-model:value="content"
          @input="validateRealTime(content)"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Textarea avec validation en temps réel et feedback immédiat.'
      }
    }
  }
}

// États disabled et readonly
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const disabledValue = ref('Ce contenu est désactivé et ne peut pas être modifié.')
      const readonlyValue = ref('Ce contenu est en lecture seule. Vous pouvez le lire mais pas le modifier.')
      const requiredValue = ref('')
      
      return { disabledValue, readonlyValue, requiredValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 400px;">
        <Textarea 
          label="Textarea désactivé"
          :disabled="true"
          message="Ce champ est temporairement indisponible"
          v-model:value="disabledValue"
        />
        <Textarea 
          label="Textarea en lecture seule"
          :readonly="true"
          message="Consultation uniquement"
          v-model:value="readonlyValue"
        />
        <Textarea 
          label="Champ requis"
          :required="true"
          placeholder="Ce champ est obligatoire"
          message="Veuillez remplir ce champ"
          v-model:value="requiredValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'États désactivé, lecture seule et requis du Textarea.'
      }
    }
  }
}

// Formulaire de contact
export const ContactForm: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const subject = ref('')
      const message = ref('')
      
      const isValid = computed(() => {
        return subject.value.length >= 5 && message.value.length >= 20
      })
      
      const subjectState = computed(() => {
        if (!subject.value) return 'default'
        return subject.value.length >= 5 ? 'success' : 'error'
      })
      
      const messageState = computed(() => {
        if (!message.value) return 'default'
        return message.value.length >= 20 ? 'success' : 'error'
      })
      
      const subjectMessage = computed(() => {
        if (subject.value.length > 0 && subject.value.length < 5) {
          return 'Minimum 5 caractères'
        }
        return undefined
      })
      
      const messageMessage = computed(() => {
        if (message.value.length > 0 && message.value.length < 20) {
          return 'Minimum 20 caractères'
        }
        return 'Décrivez votre demande en détail'
      })
      
      return { 
        subject, 
        message, 
        isValid, 
        subjectState, 
        messageState,
        subjectMessage,
        messageMessage
      }
    },
    template: `
      <div style="max-width: 500px; padding: 2rem; background: #f9fafb; border-radius: 0.5rem;">
        <h2 style="margin: 0 0 2rem 0; color: #111827;">Nous contacter</h2>
        
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.375rem;">
              Sujet *
            </label>
            <input 
              type="text"
              :value="subject"
              @input="subject = $event.target.value"
              placeholder="Sujet de votre message"
              style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem;"
              :style="{ borderColor: subjectState === 'error' ? '#ef4444' : subjectState === 'success' ? '#10b981' : '#d1d5db' }"
            />
            <p v-if="subjectMessage" style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #ef4444;">
              {{ subjectMessage }}
            </p>
          </div>
          
          <Textarea 
            label="Message"
            :required="true"
            :maxLength="2000"
            :showCounter="true"
            :autoResize="true"
            :minRows="4"
            :maxRows="12"
            :state="messageState"
            :message="messageMessage"
            placeholder="Décrivez votre demande..."
            v-model:value="message"
          />
          
          <button 
            type="submit" 
            :disabled="!isValid"
            :style="{
              padding: '0.75rem 1.5rem',
              backgroundColor: isValid ? '#3b82f6' : '#9ca3af',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: '500',
              cursor: isValid ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s'
            }"
          >
            Envoyer le message
          </button>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Exemple d\'un formulaire de contact utilisant le Textarea avec validation.'
      }
    }
  }
}

// Éditeur de texte
export const TextEditor: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const content = ref('')
      
      const wordCount = computed(() => {
        return content.value.trim().split(/\s+/).filter(word => word.length > 0).length
      })
      
      const characterCount = computed(() => content.value.length)
      
      const estimatedReadingTime = computed(() => {
        const wordsPerMinute = 200
        return Math.ceil(wordCount.value / wordsPerMinute)
      })
      
      return { 
        content, 
        wordCount, 
        characterCount, 
        estimatedReadingTime 
      }
    },
    template: `
      <div style="max-width: 600px; padding: 2rem; background: #f9fafb; border-radius: 0.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb;">
          <h3 style="margin: 0; color: #111827;">Éditeur de texte</h3>
          <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: #6b7280;">
            <span>{{ wordCount }} mots</span>
            <span>{{ characterCount }} caractères</span>
            <span>~{{ estimatedReadingTime }} min</span>
          </div>
        </div>
        
        <Textarea 
          label="Contenu"
          :autoResize="true"
          :minRows="8"
          :maxRows="20"
          :maxLength="5000"
          :showCounter="true"
          placeholder="Commencez à écrire votre article..."
          message="Rédigez votre contenu. L'éditeur s'adapte automatiquement."
          :spellcheck="true"
          v-model:value="content"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Exemple d\'un éditeur de texte simple avec statistiques en temps réel.'
      }
    }
  }
}

// Feedback avec validation
export const FeedbackValidation: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const feedback = ref('')
      const errors = ref<string[]>([])
      
      const validateContent = (text: string) => {
        const newErrors: string[] = []
        
        if (text.length > 0 && text.length < 10) {
          newErrors.push('Le message doit contenir au moins 10 caractères')
        }
        
        const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length
        if (text.length > 0 && wordCount < 3) {
          newErrors.push('Le message doit contenir au moins 3 mots')
        }
        
        return newErrors
      }
      
      const state = computed(() => {
        if (!feedback.value) return 'default'
        return errors.value.length > 0 ? 'error' : 'success'
      })
      
      const message = computed(() => {
        if (errors.value.length > 0) {
          return errors.value[0]
        }
        if (feedback.value && errors.value.length === 0) {
          return 'Message valide !'
        }
        return 'Rédigez votre feedback (minimum 10 caractères, 3 mots)'
      })
      
      const validateRealTime = (newValue: string) => {
        errors.value = validateContent(newValue)
      }
      
      return { 
        feedback, 
        state, 
        message,
        validateRealTime,
        errors
      }
    },
    template: `
      <div style="max-width: 500px; padding: 2rem; background: #f9fafb; border-radius: 0.5rem;">
        <h3 style="margin: 0 0 1.5rem 0; color: #111827;">Feedback produit</h3>
        
        <Textarea 
          label="Votre avis"
          :required="true"
          :maxLength="500"
          :showCounter="true"
          :autoResize="true"
          :minRows="3"
          :maxRows="8"
          :state="state"
          :message="message"
          placeholder="Partagez votre expérience avec ce produit..."
          v-model:value="feedback"
          @input="validateRealTime(feedback)"
        />
        
        <div style="margin-top: 1.5rem; display: flex; justify-content: flex-end;">
          <button 
            type="submit" 
            :disabled="errors.length > 0 || !feedback.trim()"
            :style="{
              padding: '0.75rem 1.5rem',
              backgroundColor: (errors.length === 0 && feedback.trim()) ? '#3b82f6' : '#9ca3af',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: '500',
              cursor: (errors.length === 0 && feedback.trim()) ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s'
            }"
          >
            Envoyer le feedback
          </button>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Textarea avec validation en temps réel et feedback immédiat.'
      }
    }
  }
}

// Playground interactif
export const Playground: Story = {
  args: {
    label: 'Label du Textarea',
    placeholder: 'Entrez votre texte...',
    message: '',
    size: 'md',
    state: 'default',
    disabled: false,
    readonly: false,
    required: false,
    autoResize: false,
    showCounter: false,
    spellcheck: true,
    wrap: 'soft',
    rows: 3,
    minRows: 2,
    maxRows: 10,
    maxLength: undefined
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div style="width: 400px;">
        <Textarea 
          v-bind="args"
          v-model:value="value"
        />
        <div style="margin-top: 1rem; padding: 1rem; background: #f3f4f6; border-radius: 0.5rem;">
          <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: #6b7280;">Valeur actuelle :</h4>
          <pre style="font-size: 0.75rem; color: #374151; margin: 0; white-space: pre-wrap;">{{ value || '(vide)' }}</pre>
          <p style="margin: 0.5rem 0 0 0; font-size: 0.75rem; color: #6b7280;">
            Longueur : {{ value.length }} caractères
          </p>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Playground interactif pour tester toutes les propriétés du Textarea.'
      }
    }
  }
}

// Tests d'accessibilité
export const AccessibilityTests: Story = {
  render: () => ({
    components: { Textarea },
    setup() {
      const keyboardValue = ref('')
      const ariaValue = ref('')
      const contrastValue = ref('Texte avec contraste élevé pour l\'accessibilité')
      
      return { keyboardValue, ariaValue, contrastValue }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 500px;">
        <h3 style="margin: 0;">Tests d'accessibilité</h3>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Navigation au clavier</h4>
          <p style="font-size: 0.875rem; color: #6b7280; margin: 0 0 0.5rem 0;">
            Utilisez Tab pour naviguer et testez la saisie
          </p>
          <Textarea 
            label="Navigation clavier"
            placeholder="Testez la navigation au clavier"
            message="Utilisez le clavier pour interagir"
            :autoResize="true"
            v-model:value="keyboardValue"
          />
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Support des lecteurs d'écran</h4>
          <Textarea 
            label="Textarea accessible"
            :maxLength="300"
            :showCounter="true"
            ariaLabel="Zone de texte pour commentaires"
            ariaDescribedBy="textarea-help"
            placeholder="Rédigez votre commentaire..."
            message="Textarea avec attributs ARIA complets"
            v-model:value="ariaValue"
          />
          <p id="textarea-help" style="font-size: 0.875rem; color: #6b7280; margin: 0.25rem 0 0 0;">
            Cette zone de texte permet de saisir des commentaires avec limite de caractères
          </p>
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Contraste et visibilité</h4>
          <Textarea 
            state="error"
            label="Test de contraste"
            :maxLength="100"
            :showCounter="true"
            message="Erreur avec contraste élevé pour l'accessibilité"
            v-model:value="contrastValue"
          />
        </div>
        
        <div style="padding: 1rem; background: #f3f4f6; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h4 style="margin: 0 0 0.5rem 0; color: #1f2937;">Fonctionnalités d'accessibilité ✅</h4>
          <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem; color: #4b5563;">
            <li>Labels associés correctement avec for/id</li>
            <li>Attributs ARIA complets (label, describedby, invalid, required)</li>
            <li>Messages d'état avec aria-live</li>
            <li>Compteur accessible avec annonces vocales</li>
            <li>Focus visible et contrasté</li>
            <li>Support du mode sombre</li>
            <li>Contraste élevé et réduction d'animations</li>
            <li>Validation en temps réel accessible</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Tests et exemples pour vérifier l\'accessibilité du composant Textarea.'
      }
    }
  }
}