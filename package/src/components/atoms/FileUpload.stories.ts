import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FileUpload from './FileUpload.vue'
import type { UploadedFile } from '@/types'

const meta: Meta<typeof FileUpload> = {
  title: 'Atoms/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant FileUpload pour le téléchargement de fichiers avec support du drag & drop, validation des formats et tailles, et accessibilité complète selon les normes W3C.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille du composant'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'État visuel du composant'
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Autoriser la sélection multiple'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Désactive le composant'
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Mode lecture seule'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Champ requis'
    },
    allowPreview: {
      control: { type: 'boolean' },
      description: 'Afficher les aperçus d\'images'
    },
    showFileList: {
      control: { type: 'boolean' },
      description: 'Afficher la liste des fichiers'
    },
    maxSize: {
      control: { type: 'number' },
      description: 'Taille maximale par fichier en octets'
    },
    maxFiles: {
      control: { type: 'number' },
      description: 'Nombre maximum de fichiers'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Histoire par défaut
export const Default: Story = {
  args: {
    label: 'Documents',
    placeholder: 'Sélectionnez vos documents ou glissez-les ici',
    message: 'Glissez-déposez ou cliquez pour parcourir',
    size: 'md',
    state: 'default'
  },
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<UploadedFile[]>([])
      return { args, files }
    },
    template: '<FileUpload v-bind="args" v-model:value="files" />'
  })
}

// Tailles
export const Sizes: Story = {
  render: () => ({
    components: { FileUpload },
    setup() {
      const smallFiles = ref<UploadedFile[]>([])
      const mediumFiles = ref<UploadedFile[]>([])
      const largeFiles = ref<UploadedFile[]>([])
      
      return { smallFiles, mediumFiles, largeFiles }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <FileUpload 
          size="sm"
          label="Small"
          placeholder="Petit upload"
          v-model:value="smallFiles"
        />
        <FileUpload 
          size="md"
          label="Medium"
          placeholder="Upload moyen"
          v-model:value="mediumFiles"
        />
        <FileUpload 
          size="lg"
          label="Large"
          placeholder="Grand upload"
          v-model:value="largeFiles"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes tailles disponibles pour le FileUpload.'
      }
    }
  }
}

// États
export const States: Story = {
  render: () => ({
    components: { FileUpload },
    setup() {
      const defaultFiles = ref<UploadedFile[]>([])
      const errorFiles = ref<UploadedFile[]>([])
      const successFiles = ref<UploadedFile[]>([])
      const warningFiles = ref<UploadedFile[]>([])
      
      return { defaultFiles, errorFiles, successFiles, warningFiles }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <FileUpload 
          state="default"
          label="État par défaut"
          placeholder="Sélectionnez des fichiers"
          message="Glissez-déposez ou cliquez pour parcourir"
          v-model:value="defaultFiles"
        />
        <FileUpload 
          state="error"
          label="État d'erreur"
          placeholder="Fichiers non valides"
          message="Erreur : format de fichier non supporté"
          v-model:value="errorFiles"
        />
        <FileUpload 
          state="success"
          label="État de succès"
          placeholder="Fichiers téléchargés"
          message="Tous les fichiers ont été téléchargés avec succès"
          v-model:value="successFiles"
        />
        <FileUpload 
          state="warning"
          label="État d'avertissement"
          placeholder="Attention aux fichiers"
          message="Certains fichiers dépassent la taille recommandée"
          v-model:value="warningFiles"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différents états visuels du FileUpload avec leurs messages associés.'
      }
    }
  }
}

// Upload multiple
export const MultipleUpload: Story = {
  render: () => ({
    components: { FileUpload },
    setup() {
      const multipleFiles = ref<UploadedFile[]>([])
      const limitedFiles = ref<UploadedFile[]>([])
      
      return { multipleFiles, limitedFiles }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <FileUpload 
          :multiple="true"
          label="Upload multiple"
          placeholder="Sélectionnez plusieurs fichiers"
          message="Vous pouvez sélectionner plusieurs fichiers à la fois"
          v-model:value="multipleFiles"
        />
        <FileUpload 
          :multiple="true"
          :maxFiles="3"
          label="Upload limité (max 3)"
          placeholder="Maximum 3 fichiers"
          message="Vous pouvez sélectionner jusqu'à 3 fichiers"
          v-model:value="limitedFiles"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'FileUpload avec sélection multiple et limitation du nombre de fichiers.'
      }
    }
  }
}

// Types de fichiers spécifiques
export const FileTypes: Story = {
  render: () => ({
    components: { FileUpload },
    setup() {
      const imageFiles = ref<UploadedFile[]>([])
      const documentFiles = ref<UploadedFile[]>([])
      const videoFiles = ref<UploadedFile[]>([])
      
      return { imageFiles, documentFiles, videoFiles }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <FileUpload 
          accept="image/jpeg,image/png,image/gif"
          label="Images uniquement"
          placeholder="JPG, PNG, GIF seulement"
          message="Formats acceptés : JPEG, PNG, GIF"
          v-model:value="imageFiles"
        />
        <FileUpload 
          accept=".pdf,.doc,.docx"
          label="Documents"
          placeholder="PDF et documents Word"
          message="Formats acceptés : PDF, DOC, DOCX"
          v-model:value="documentFiles"
        />
        <FileUpload 
          accept="video/*"
          :maxSize="50 * 1024 * 1024"
          label="Vidéos"
          placeholder="Tous formats vidéo (max 50MB)"
          message="Tous les formats vidéo sont acceptés"
          v-model:value="videoFiles"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'FileUpload avec restrictions par type de fichier et taille.'
      }
    }
  }
}

// Validation de taille
export const SizeValidation: Story = {
  render: () => ({
    components: { FileUpload },
    setup() {
      const smallFiles = ref<UploadedFile[]>([])
      const largeFiles = ref<UploadedFile[]>([])
      
      const handleError = (error: string, file?: File) => {
        console.error('Erreur upload:', error, file)
        alert(`Erreur: ${error}`)
      }
      
      return { smallFiles, largeFiles, handleError }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <FileUpload 
          :maxSize="1024 * 1024"
          label="Fichiers légers (max 1MB)"
          placeholder="Fichiers de moins de 1MB"
          message="Taille maximale : 1MB par fichier"
          v-model:value="smallFiles"
          @error="handleError"
        />
        <FileUpload 
          :maxSize="100 * 1024 * 1024"
          label="Gros fichiers (max 100MB)"
          placeholder="Fichiers volumineux acceptés"
          message="Taille maximale : 100MB par fichier"
          v-model:value="largeFiles"
          @error="handleError"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'FileUpload avec validation de taille et gestion des erreurs.'
      }
    }
  }
}

// États disabled et readonly
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { FileUpload },
    setup() {
      const disabledFiles = ref<UploadedFile[]>([])
      const readonlyFiles = ref<UploadedFile[]>([])
      const requiredFiles = ref<UploadedFile[]>([])
      
      return { disabledFiles, readonlyFiles, requiredFiles }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; width: 400px;">
        <FileUpload 
          label="Upload désactivé"
          :disabled="true"
          placeholder="Upload non disponible"
          message="Cette fonctionnalité est temporairement désactivée"
          v-model:value="disabledFiles"
        />
        <FileUpload 
          label="Upload en lecture seule"
          :readonly="true"
          placeholder="Consultation uniquement"
          message="Vous pouvez voir les fichiers mais pas en ajouter"
          v-model:value="readonlyFiles"
        />
        <FileUpload 
          label="Upload requis"
          :required="true"
          placeholder="Fichiers obligatoires"
          message="Au moins un fichier doit être téléchargé"
          v-model:value="requiredFiles"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'États désactivé, lecture seule et requis du FileUpload.'
      }
    }
  }
}

// Formulaire de candidature
export const ApplicationForm: Story = {
  render: () => ({
    components: { FileUpload },
    setup() {
      const cv = ref<UploadedFile[]>([])
      const lettreMotivation = ref<UploadedFile[]>([])
      const portfolio = ref<UploadedFile[]>([])
      
      const handleError = (error: string, file?: File) => {
        console.error('Erreur upload:', error, file)
        alert(`Erreur: ${error}`)
      }
      
      const handleCVUpload = (file: UploadedFile) => {
        console.log('CV uploadé:', file)
      }
      
      return { cv, lettreMotivation, portfolio, handleError, handleCVUpload }
    },
    template: `
      <div style="max-width: 500px; padding: 2rem; background: #f9fafb; border-radius: 0.5rem;">
        <h2 style="margin: 0 0 2rem 0; color: #111827;">Candidature</h2>
        
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <FileUpload 
            label="CV (obligatoire)"
            accept=".pdf,.doc,.docx"
            :maxSize="5 * 1024 * 1024"
            :maxFiles="1"
            :required="true"
            placeholder="Téléchargez votre CV"
            message="Format PDF ou Word, maximum 5MB"
            v-model:value="cv"
            @upload="handleCVUpload"
            @error="handleError"
          />
          
          <FileUpload 
            label="Lettre de motivation"
            accept=".pdf,.doc,.docx"
            :maxSize="5 * 1024 * 1024"
            :maxFiles="1"
            placeholder="Téléchargez votre lettre de motivation"
            message="Format PDF ou Word, maximum 5MB"
            v-model:value="lettreMotivation"
            @error="handleError"
          />
          
          <FileUpload 
            label="Portfolio (optionnel)"
            accept="image/*,.pdf"
            :maxSize="20 * 1024 * 1024"
            :maxFiles="10"
            :multiple="true"
            placeholder="Images de vos réalisations ou PDF"
            message="Images et PDF acceptés, maximum 10 fichiers de 20MB chacun"
            v-model:value="portfolio"
            @error="handleError"
          />
          
          <button 
            type="submit"
            style="padding: 0.75rem 1.5rem; background-color: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-weight: 500; cursor: pointer;"
          >
            Envoyer la candidature
          </button>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Exemple d\'un formulaire de candidature utilisant plusieurs FileUpload avec différentes contraintes.'
      }
    }
  }
}

// Upload avec progression simulée
export const WithProgress: Story = {
  render: () => ({
    components: { FileUpload },
    setup() {
      const files = ref<UploadedFile[]>([])
      
      const simulateUpload = async (file: UploadedFile) => {
        // Simuler un upload avec progression
        file.status = 'uploading'
        file.progress = 0
        
        const interval = setInterval(() => {
          if (file.progress !== undefined) {
            file.progress += 10
            
            if (file.progress >= 100) {
              clearInterval(interval)
              file.status = 'success'
              file.progress = undefined
            }
          }
        }, 200)
      }
      
      const handleFileUpload = (file: UploadedFile) => {
        simulateUpload(file)
      }
      
      return { files, handleFileUpload }
    },
    template: `
      <div style="width: 400px;">
        <FileUpload 
          :multiple="true"
          label="Upload avec progression"
          placeholder="Téléchargez vos fichiers"
          message="La progression sera affichée pour chaque fichier"
          v-model:value="files"
          @upload="handleFileUpload"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'FileUpload avec simulation de progression d\'upload pour chaque fichier.'
      }
    }
  }
}

// Playground interactif
export const Playground: Story = {
  args: {
    label: 'Label du FileUpload',
    placeholder: 'Sélectionnez des fichiers ou glissez-les ici',
    message: '',
    size: 'md',
    state: 'default',
    multiple: false,
    disabled: false,
    readonly: false,
    required: false,
    allowPreview: true,
    showFileList: true,
    maxSize: 10 * 1024 * 1024,
    maxFiles: 5
  },
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<UploadedFile[]>([])
      
      const handleError = (error: string, file?: File) => {
        console.error('Erreur:', error, file)
      }
      
      const handleUpload = (file: UploadedFile) => {
        console.log('Fichier uploadé:', file)
      }
      
      return { args, files, handleError, handleUpload }
    },
    template: `
      <div style="width: 400px;">
        <FileUpload 
          v-bind="args"
          v-model:value="files"
          @error="handleError"
          @upload="handleUpload"
        />
        <div style="margin-top: 1rem; padding: 1rem; background: #f3f4f6; border-radius: 0.5rem;">
          <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: #6b7280;">Fichiers sélectionnés :</h4>
          <pre style="font-size: 0.75rem; color: #374151; margin: 0; white-space: pre-wrap;">{{ JSON.stringify(files.map(f => ({ name: f.name, size: f.size, type: f.type, status: f.status })), null, 2) }}</pre>
        </div>
      </div>
    `
  }),
  argTypes: {
    accept: {
      control: { type: 'text' },
      description: 'Types de fichiers acceptés (MIME types ou extensions)'
    },
    dragText: {
      control: { type: 'text' },
      description: 'Texte affiché pendant le drag'
    },
    browseText: {
      control: { type: 'text' },
      description: 'Texte du bouton de parcours'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Playground interactif pour tester toutes les propriétés du FileUpload.'
      }
    }
  }
}

// Tests d'accessibilité
export const AccessibilityTests: Story = {
  render: () => ({
    components: { FileUpload },
    setup() {
      const keyboardFiles = ref<UploadedFile[]>([])
      const ariaFiles = ref<UploadedFile[]>([])
      const contrastFiles = ref<UploadedFile[]>([])
      
      return { keyboardFiles, ariaFiles, contrastFiles }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 500px;">
        <h3 style="margin: 0;">Tests d'accessibilité</h3>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Navigation au clavier</h4>
          <p style="font-size: 0.875rem; color: #6b7280; margin: 0 0 0.5rem 0;">
            Utilisez Tab pour naviguer et Entrée/Espace pour ouvrir le sélecteur
          </p>
          <FileUpload 
            label="Navigation clavier"
            placeholder="Testez la navigation au clavier"
            message="Utilisez le clavier pour interagir"
            v-model:value="keyboardFiles"
          />
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Support des lecteurs d'écran</h4>
          <FileUpload 
            :multiple="true"
            label="Upload accessible"
            ariaLabel="Zone de téléchargement pour documents"
            ariaDescribedBy="upload-help"
            placeholder="Glissez vos documents ici"
            message="FileUpload avec attributs ARIA complets"
            v-model:value="ariaFiles"
          />
          <p id="upload-help" style="font-size: 0.875rem; color: #6b7280; margin: 0.25rem 0 0 0;">
            Cette zone permet de télécharger des documents par glisser-déposer ou sélection
          </p>
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Contraste et visibilité</h4>
          <FileUpload 
            state="error"
            label="Test de contraste"
            placeholder="Zone avec contraste élevé"
            message="Erreur avec contraste élevé pour l'accessibilité"
            v-model:value="contrastFiles"
          />
        </div>
        
        <div style="padding: 1rem; background: #f3f4f6; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
          <h4 style="margin: 0 0 0.5rem 0; color: #1f2937;">Fonctionnalités d'accessibilité ✅</h4>
          <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem; color: #4b5563;">
            <li>Navigation au clavier complète (Tab, Entrée, Espace)</li>
            <li>Zone de drop avec rôle button et aria-label</li>
            <li>Attributs ARIA pour labels et descriptions</li>
            <li>Annonces vocales avec aria-live</li>
            <li>Focus visible et contrasté</li>
            <li>Boutons de suppression accessibles</li>
            <li>Messages d'état pour les lecteurs d'écran</li>
            <li>Support du mode sombre et contraste élevé</li>
          </ul>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Tests et exemples pour vérifier l\'accessibilité du composant FileUpload.'
      }
    }
  }
}