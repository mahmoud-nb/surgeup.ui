import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { 
  UserIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  FlagIcon,
  StarIcon,
  HeartIcon,
  CogIcon,
} from '@heroicons/vue/24/outline'
import SelectBox from './SelectBox.vue'
import type { SelectOption, SelectGroup } from '@/types'

const meta: Meta<typeof SelectBox> = {
  title: 'Atoms/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant SelectBox personnalisé avec support de la sélection multiple, recherche intégrée, groupes d\'options et accessibilité complète.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille du SelectBox'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'État visuel du SelectBox'
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
    multiple: {
      control: { type: 'boolean' },
      description: 'Sélection multiple'
    },
    searchable: {
      control: { type: 'boolean' },
      description: 'Recherche intégrée'
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Bouton d\'effacement'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Désactive le SelectBox'
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'SelectBox en lecture seule'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Champ requis'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'État de chargement'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Options de base
const basicOptions: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4', disabled: true },
  { value: 'option5', label: 'Option 5' }
]

// Options avec icônes
const iconOptions: SelectOption[] = [
  { value: 'user', label: 'Utilisateur', icon: UserIcon },
  { value: 'company', label: 'Entreprise', icon: BuildingOfficeIcon },
  { value: 'global', label: 'Global', icon: GlobeAltIcon },
  { value: 'settings', label: 'Paramètres', icon: CogIcon }
]

// Options avec descriptions
const detailedOptions: SelectOption[] = [
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

// Options groupées
const groupedOptions: SelectGroup[] = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Pomme', icon: HeartIcon },
      { value: 'banana', label: 'Banane' },
      { value: 'orange', label: 'Orange' }
    ]
  },
  {
    label: 'Légumes',
    options: [
      { value: 'carrot', label: 'Carotte' },
      { value: 'broccoli', label: 'Brocoli' },
      { value: 'spinach', label: 'Épinard' }
    ]
  },
  {
    label: 'Produits laitiers',
    options: [
      { value: 'milk', label: 'Lait' },
      { value: 'cheese', label: 'Fromage' },
      { value: 'yogurt', label: 'Yaourt' }
    ]
  }
]

// Pays avec drapeaux
const countryOptions: SelectOption[] = [
  { value: 'fr', label: 'France', icon: FlagIcon },
  { value: 'us', label: 'États-Unis', icon: FlagIcon },
  { value: 'de', label: 'Allemagne', icon: FlagIcon },
  { value: 'es', label: 'Espagne', icon: FlagIcon },
  { value: 'it', label: 'Italie', icon: FlagIcon },
  { value: 'uk', label: 'Royaume-Uni', icon: FlagIcon },
  { value: 'ca', label: 'Canada', icon: FlagIcon },
  { value: 'jp', label: 'Japon', icon: FlagIcon },
  { value: 'au', label: 'Australie', icon: FlagIcon },
  { value: 'br', label: 'Brésil', icon: FlagIcon }
]

// Histoire par défaut
export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Sélectionnez une option...',
    size: 'md',
    state: 'default'
  },
  render: (args) => ({
    components: { SelectBox },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<SelectBox v-bind="args" v-model:value="value" />'
  })
}

// Tailles
export const Sizes: Story = {
  render: () => ({
    components: { SelectBox },
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
      <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
        <SelectBox 
          :options="basicOptions"
          size="sm" 
          label="Small" 
          placeholder="Petit SelectBox"
          v-model:value="smallValue"
        />
        <SelectBox 
          :options="basicOptions"
          size="md" 
          label="Medium" 
          placeholder="SelectBox moyen"
          v-model:value="mediumValue"
        />
        <SelectBox 
          :options="basicOptions"
          size="lg" 
          label="Large" 
          placeholder="Grand SelectBox"
          v-model:value="largeValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes tailles disponibles pour le SelectBox.'
      }
    }
  }
}

// États
export const States: Story = {
  render: () => ({
    components: { SelectBox },
    setup() {
      const defaultValue = ref('')
      const errorValue = ref('option2')
      const successValue = ref('option1')
      const warningValue = ref('option3')
      
      return { 
        defaultValue, 
        errorValue, 
        successValue, 
        warningValue,
        basicOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 300px;">
        <SelectBox 
          :options="basicOptions"
          state="default"
          label="État par défaut" 
          placeholder="Sélectionnez une option"
          helpText="Texte d'aide pour guider l'utilisateur"
          v-model:value="defaultValue"
        />
        <SelectBox 
          :options="basicOptions"
          state="error"
          label="État d'erreur" 
          placeholder="Sélectionnez une option"
          errorMessage="Cette sélection contient une erreur"
          v-model:value="errorValue"
        />
        <SelectBox 
          :options="basicOptions"
          state="success"
          label="État de succès" 
          placeholder="Sélectionnez une option"
          successMessage="Sélection valide !"
          v-model:value="successValue"
        />
        <SelectBox 
          :options="basicOptions"
          state="warning"
          label="État d'avertissement" 
          placeholder="Sélectionnez une option"
          warningMessage="Attention à cette sélection"
          v-model:value="warningValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Les différents états visuels du SelectBox avec leurs messages associés.'
      }
    }
  }
}

// Sélection multiple
export const MultipleSelection: Story = {
  render: () => ({
    components: { SelectBox },
    setup() {
      const multipleValue = ref(['option1', 'option3'])
      const limitedValue = ref(['apple'])
      
      return { 
        multipleValue,
        limitedValue,
        basicOptions,
        detailedOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 400px;">
        <SelectBox 
          :options="basicOptions"
          :multiple="true"
          :clearable="true"
          label="Sélection multiple" 
          placeholder="Sélectionnez plusieurs options"
          helpText="Vous pouvez sélectionner plusieurs options"
          v-model:value="multipleValue"
        />
        <SelectBox 
          :options="detailedOptions"
          :multiple="true"
          :maxSelectedItems="2"
          :clearable="true"
          label="Sélection limitée (max 2)" 
          placeholder="Maximum 2 sélections"
          helpText="Vous pouvez sélectionner jusqu'à 2 options"
          v-model:value="limitedValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'SelectBox avec sélection multiple et limitation du nombre d\'éléments sélectionnables.'
      }
    }
  }
}

// Recherche intégrée
export const SearchableSelect: Story = {
  render: () => ({
    components: { SelectBox },
    setup() {
      const searchValue = ref('')
      const multiSearchValue = ref([])
      
      return { 
        searchValue,
        multiSearchValue,
        countryOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 300px;">
        <SelectBox 
          :options="countryOptions"
          :searchable="true"
          :clearable="true"
          label="Pays (avec recherche)" 
          placeholder="Rechercher un pays..."
          searchPlaceholder="Tapez pour rechercher..."
          v-model:value="searchValue"
        />
        <SelectBox 
          :options="countryOptions"
          :searchable="true"
          :multiple="true"
          :clearable="true"
          label="Pays multiples (avec recherche)" 
          placeholder="Sélectionnez des pays..."
          v-model:value="multiSearchValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'SelectBox avec fonctionnalité de recherche intégrée pour filtrer les options.'
      }
    }
  }
}

// Options avec icônes
export const WithIcons: Story = {
  render: () => ({
    components: { SelectBox },
    setup() {
      const iconValue = ref('')
      const detailedValue = ref('')
      
      return { 
        iconValue,
        detailedValue,
        iconOptions,
        detailedOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 350px;">
        <SelectBox 
          :options="iconOptions"
          label="Avec icônes" 
          placeholder="Sélectionnez un type..."
          v-model:value="iconValue"
        />
        <SelectBox 
          :options="detailedOptions"
          :searchable="true"
          label="Avec icônes et descriptions" 
          placeholder="Choisissez un plan..."
          v-model:value="detailedValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'SelectBox avec icônes et descriptions pour enrichir l\'affichage des options.'
      }
    }
  }
}

// Options groupées
export const GroupedOptions: Story = {
  render: () => ({
    components: { SelectBox },
    setup() {
      const groupedValue = ref('')
      const multiGroupedValue = ref([])
      
      return { 
        groupedValue,
        multiGroupedValue,
        groupedOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 300px;">
        <SelectBox 
          :groups="groupedOptions"
          :searchable="true"
          label="Options groupées" 
          placeholder="Sélectionnez un produit..."
          v-model:value="groupedValue"
        />
        <SelectBox 
          :groups="groupedOptions"
          :multiple="true"
          :searchable="true"
          :clearable="true"
          label="Sélection multiple groupée" 
          placeholder="Sélectionnez des produits..."
          v-model:value="multiGroupedValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'SelectBox avec options organisées en groupes pour une meilleure navigation.'
      }
    }
  }
}

// Alignement et direction
export const AlignmentAndDirection: Story = {
  render: () => ({
    components: { SelectBox },
    setup() {
      const leftValue = ref('option1')
      const centerValue = ref('option2')
      const rightValue = ref('option3')
      const rtlValue = ref('')
      
      return { 
        leftValue, 
        centerValue, 
        rightValue,
        rtlValue,
        basicOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 300px;">
        <SelectBox 
          :options="basicOptions"
          label="Alignement à gauche" 
          textAlign="left"
          v-model:value="leftValue"
        />
        <SelectBox 
          :options="basicOptions"
          label="Alignement centré" 
          textAlign="center"
          v-model:value="centerValue"
        />
        <SelectBox 
          :options="basicOptions"
          label="Alignement à droite" 
          textAlign="right"
          v-model:value="rightValue"
        />
        <SelectBox 
          :options="basicOptions"
          label="Direction RTL (droite à gauche)"
          dir="rtl"
          placeholder="اختر خيارا..."
          v-model:value="rtlValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Différents alignements de texte et support de la direction RTL.'
      }
    }
  }
}

// États disabled et readonly
export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { SelectBox },
    setup() {
      const disabledValue = ref('option2')
      const readonlyValue = ref('option1')
      const loadingValue = ref('')
      
      return { 
        disabledValue, 
        readonlyValue,
        loadingValue,
        basicOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 300px;">
        <SelectBox 
          :options="basicOptions"
          label="SelectBox désactivé"
          :disabled="true"
          v-model:value="disabledValue"
        />
        <SelectBox 
          :options="basicOptions"
          label="SelectBox en lecture seule"
          :readonly="true"
          helpText="Cette valeur ne peut pas être modifiée"
          v-model:value="readonlyValue"
        />
        <SelectBox 
          :options="basicOptions"
          label="SelectBox en chargement"
          :loading="true"
          placeholder="Chargement des options..."
          v-model:value="loadingValue"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'États désactivé, lecture seule et chargement du SelectBox.'
      }
    }
  }
}

// Validation et accessibilité
export const ValidationAndAccessibility: Story = {
  render: () => ({
    components: { SelectBox },
    setup() {
      const requiredValue = ref('')
      const validatedValue = ref('')
      const accessibleValue = ref('')
      
      return { 
        requiredValue,
        validatedValue,
        accessibleValue,
        iconOptions,
        detailedOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 350px;">
        <SelectBox 
          :options="iconOptions"
          label="Champ requis"
          :required="true"
          placeholder="Sélection obligatoire"
          helpText="Ce champ est obligatoire"
          v-model:value="requiredValue"
        />
        <SelectBox 
          :options="detailedOptions"
          label="Avec validation"
          :state="validatedValue ? 'success' : 'error'"
          :errorMessage="!validatedValue ? 'Veuillez faire une sélection' : undefined"
          :successMessage="validatedValue ? 'Sélection valide' : undefined"
          placeholder="Choisissez une option..."
          v-model:value="validatedValue"
        />
        <SelectBox 
          :options="iconOptions"
          label="Accessibilité complète"
          ariaLabel="Sélecteur de type d'utilisateur"
          ariaDescribedBy="user-type-help"
          placeholder="Type d'utilisateur..."
          v-model:value="accessibleValue"
        />
        <p id="user-type-help" style="font-size: 0.875rem; color: #6b7280; margin: 0;">
          Sélectionnez le type d'utilisateur pour personnaliser l'expérience
        </p>
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
    options: basicOptions,
    size: 'md',
    state: 'default',
    placeholder: 'Sélectionnez une option...',
    label: 'Label du SelectBox',
    multiple: false,
    searchable: false,
    clearable: false,
    disabled: false,
    readonly: false,
    required: false,
    loading: false,
    textAlign: 'left',
    dir: 'ltr'
  },
  render: (args) => ({
    components: { SelectBox },
    setup() {
      const value = ref(args.multiple ? [] : '')
      return { 
        args, 
        value,
        basicOptions,
        iconOptions,
        detailedOptions
      }
    },
    template: `
      <div style="width: 350px;">
        <SelectBox 
          v-bind="args"
          :options="args.useIconOptions ? iconOptions : args.useDetailedOptions ? detailedOptions : basicOptions"
          v-model:value="value"
        />
        <p style="margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">
          Valeur: {{ JSON.stringify(value) }}
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
    helpText: {
      control: { type: 'text' },
      description: 'Texte d\'aide'
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Message d\'erreur'
    },
    maxSelectedItems: {
      control: { type: 'number' },
      description: 'Nombre maximum d\'éléments sélectionnables (mode multiple)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Playground interactif pour tester toutes les propriétés du SelectBox.'
      }
    }
  }
}

// Tests d'accessibilité
export const AccessibilityTests: Story = {
  render: () => ({
    components: { SelectBox },
    setup() {
      const keyboardValue = ref('')
      const screenReaderValue = ref([])
      const contrastValue = ref('option1')
      
      return { 
        keyboardValue,
        screenReaderValue,
        contrastValue,
        iconOptions,
        detailedOptions
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <h3 style="margin: 0;">Tests d'accessibilité</h3>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Navigation au clavier</h4>
          <p style="font-size: 0.875rem; color: #6b7280; margin: 0 0 0.5rem 0;">
            Utilisez Tab, Entrée/Espace, flèches, Échap, Home/End
          </p>
          <SelectBox 
            :options="iconOptions"
            :searchable="true"
            label="Navigation clavier"
            placeholder="Testez la navigation..."
            v-model:value="keyboardValue"
          />
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Support des lecteurs d'écran</h4>
          <SelectBox 
            :options="detailedOptions"
            :multiple="true"
            :searchable="true"
            label="Sélection multiple accessible"
            ariaLabel="Sélecteur de plans avec descriptions"
            ariaDescribedBy="plans-help"
            placeholder="Choisissez vos plans..."
            v-model:value="screenReaderValue"
          />
          <p id="plans-help" style="font-size: 0.875rem; color: #6b7280; margin: 0.25rem 0 0 0;">
            Sélectionnez un ou plusieurs plans. Utilisez les flèches pour naviguer.
          </p>
        </div>
        
        <div>
          <h4 style="margin: 0.5rem 0;">Contraste et visibilité</h4>
          <SelectBox 
            :options="iconOptions"
            :clearable="true"
            label="Test de contraste"
            state="error"
            errorMessage="Erreur avec contraste élevé"
            v-model:value="contrastValue"
          />
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Tests et exemples pour vérifier l\'accessibilité du composant SelectBox.'
      }
    }
  }
}