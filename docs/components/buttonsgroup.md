# ButtonsGroup

Composant ButtonsGroup pour organiser et aligner des boutons avec un espacement contrôlé. Supporte la propagation des props `size` et `variant` aux boutons enfants et la gestion spéciale des bordures pour les boutons connectés.

## Exemples d'utilisation

### ButtonsGroup de base

<div class="component-demo">
  <div class="demo-section">
    <h4>Groupe simple avec gap par défaut</h4>
    <div class="demo-buttons">
      <SuButtonsGroup>
        <SuButton>Premier</SuButton>
        <SuButton>Deuxième</SuButton>
        <SuButton>Troisième</SuButton>
      </SuButtonsGroup>
    </div>
  </div>
</div>

```vue
<template>
  <SuButtonsGroup>
    <SuButton>Premier</SuButton>
    <SuButton>Deuxième</SuButton>
    <SuButton>Troisième</SuButton>
  </SuButtonsGroup>
</template>
```

### Espacement (gap)

<div class="component-demo">
  <div class="demo-section">
    <h4>Différents espacements</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Gap Small</strong></p>
        <SuButtonsGroup gap="sm">
          <SuButton>Action 1</SuButton>
          <SuButton>Action 2</SuButton>
          <SuButton>Action 3</SuButton>
        </SuButtonsGroup>
      </div>
      <div>
        <p><strong>Gap Medium (défaut)</strong></p>
        <SuButtonsGroup gap="md">
          <SuButton>Action 1</SuButton>
          <SuButton>Action 2</SuButton>
          <SuButton>Action 3</SuButton>
        </SuButtonsGroup>
      </div>
      <div>
        <p><strong>Gap Large</strong></p>
        <SuButtonsGroup gap="lg">
          <SuButton>Action 1</SuButton>
          <SuButton>Action 2</SuButton>
          <SuButton>Action 3</SuButton>
        </SuButtonsGroup>
      </div>
      <div>
        <p><strong>Gap None (connecté)</strong></p>
        <SuButtonsGroup gap="none">
          <SuButton>Premier</SuButton>
          <SuButton>Milieu</SuButton>
          <SuButton>Dernier</SuButton>
        </SuButtonsGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- Espacement petit -->
    <SuButtonsGroup gap="sm">
      <SuButton>Action 1</SuButton>
      <SuButton>Action 2</SuButton>
      <SuButton>Action 3</SuButton>
    </SuButtonsGroup>
    
    <!-- Espacement moyen (défaut) -->
    <SuButtonsGroup gap="md">
      <SuButton>Action 1</SuButton>
      <SuButton>Action 2</SuButton>
      <SuButton>Action 3</SuButton>
    </SuButtonsGroup>
    
    <!-- Espacement large -->
    <SuButtonsGroup gap="lg">
      <SuButton>Action 1</SuButton>
      <SuButton>Action 2</SuButton>
      <SuButton>Action 3</SuButton>
    </SuButtonsGroup>
    
    <!-- Boutons connectés -->
    <SuButtonsGroup gap="none">
      <SuButton>Premier</SuButton>
      <SuButton>Milieu</SuButton>
      <SuButton>Dernier</SuButton>
    </SuButtonsGroup>
  </div>
</template>
```

### Propagation de la taille

<div class="component-demo">
  <div class="demo-section">
    <h4>Taille forcée sur tous les boutons</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Taille Small forcée</strong></p>
        <SuButtonsGroup size="sm">
          <SuButton>Petit 1</SuButton>
          <SuButton>Petit 2</SuButton>
          <SuButton>Petit 3</SuButton>
        </SuButtonsGroup>
      </div>
      <div>
        <p><strong>Taille Medium forcée</strong></p>
        <SuButtonsGroup size="md">
          <SuButton>Moyen 1</SuButton>
          <SuButton>Moyen 2</SuButton>
          <SuButton>Moyen 3</SuButton>
        </SuButtonsGroup>
      </div>
      <div>
        <p><strong>Taille Large forcée</strong></p>
        <SuButtonsGroup size="lg">
          <SuButton>Grand 1</SuButton>
          <SuButton>Grand 2</SuButton>
          <SuButton>Grand 3</SuButton>
        </SuButtonsGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- Tous les boutons seront en taille small -->
    <SuButtonsGroup size="sm">
      <SuButton>Petit 1</SuButton>
      <SuButton>Petit 2</SuButton>
      <SuButton>Petit 3</SuButton>
    </SuButtonsGroup>
    
    <!-- Tous les boutons seront en taille large -->
    <SuButtonsGroup size="lg">
      <SuButton>Grand 1</SuButton>
      <SuButton>Grand 2</SuButton>
      <SuButton>Grand 3</SuButton>
    </SuButtonsGroup>
  </div>
</template>
```

### Propagation de la variante

<div class="component-demo">
  <div class="demo-section">
    <h4>Variante forcée sur tous les boutons</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Variante Primary forcée</strong></p>
        <SuButtonsGroup variant="primary">
          <SuButton>Action 1</SuButton>
          <SuButton>Action 2</SuButton>
          <SuButton>Action 3</SuButton>
        </SuButtonsGroup>
      </div>
      <div>
        <p><strong>Variante Outline forcée</strong></p>
        <SuButtonsGroup variant="outline">
          <SuButton>Action 1</SuButton>
          <SuButton>Action 2</SuButton>
          <SuButton>Action 3</SuButton>
        </SuButtonsGroup>
      </div>
      <div>
        <p><strong>Variante Ghost forcée</strong></p>
        <SuButtonsGroup variant="ghost">
          <SuButton>Action 1</SuButton>
          <SuButton>Action 2</SuButton>
          <SuButton>Action 3</SuButton>
        </SuButtonsGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- Tous les boutons seront primary -->
    <SuButtonsGroup variant="primary">
      <SuButton>Action 1</SuButton>
      <SuButton>Action 2</SuButton>
      <SuButton>Action 3</SuButton>
    </SuButtonsGroup>
    
    <!-- Tous les boutons seront outline -->
    <SuButtonsGroup variant="outline">
      <SuButton>Action 1</SuButton>
      <SuButton>Action 2</SuButton>
      <SuButton>Action 3</SuButton>
    </SuButtonsGroup>
  </div>
</template>
```

### Boutons connectés avec variantes

<div class="component-demo">
  <div class="demo-section">
    <h4>Boutons connectés avec différentes variantes</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Primary connecté</strong></p>
        <SuButtonsGroup gap="none" variant="primary">
          <SuButton>Gauche</SuButton>
          <SuButton>Centre</SuButton>
          <SuButton>Droite</SuButton>
        </SuButtonsGroup>
      </div>
      <div>
        <p><strong>Outline connecté</strong></p>
        <SuButtonsGroup gap="none" variant="outline">
          <SuButton>Option A</SuButton>
          <SuButton>Option B</SuButton>
          <SuButton>Option C</SuButton>
        </SuButtonsGroup>
      </div>
      <div>
        <p><strong>Toolbar d'icônes</strong></p>
        <SuButtonsGroup gap="none" variant="secondary" size="sm">
          <SuButton :icon="PlusIcon" iconDisplay="only" aria-label="Ajouter" />
          <SuButton :icon="CogIcon" iconDisplay="only" aria-label="Paramètres" />
          <SuButton :icon="TrashIcon" iconDisplay="only" aria-label="Supprimer" />
        </SuButtonsGroup>
      </div>
    </div>
  </div>
</div>

```vue
<script setup>
import { PlusIcon, CogIcon, TrashIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div>
    <!-- Boutons connectés primary -->
    <SuButtonsGroup gap="none" variant="primary">
      <SuButton>Gauche</SuButton>
      <SuButton>Centre</SuButton>
      <SuButton>Droite</SuButton>
    </SuButtonsGroup>
    
    <!-- Toolbar d'icônes -->
    <SuButtonsGroup gap="none" variant="secondary" size="sm">
      <SuButton :icon="PlusIcon" iconDisplay="only" aria-label="Ajouter" />
      <SuButton :icon="CogIcon" iconDisplay="only" aria-label="Paramètres" />
      <SuButton :icon="TrashIcon" iconDisplay="only" aria-label="Supprimer" />
    </SuButtonsGroup>
  </div>
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `'sm' \| 'md' \| 'lg' \| 'none'` | `'md'` | Espacement entre les boutons |
| `size` | `'sm' \| 'md' \| 'lg'` | `undefined` | Taille forcée pour tous les boutons |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `undefined` | Variante forcée pour tous les boutons |

### Attributs d'accessibilité

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabel` | `string` | `undefined` | Label accessible pour le groupe |
| `ariaDescribedBy` | `string` | `undefined` | ID de l'élément de description |
| `role` | `string` | `undefined` | Rôle ARIA personnalisé (ex: 'toolbar', 'group') |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Boutons à afficher dans le groupe |

## Comportement des props

### 🔄 Propagation automatique

Quand `size` ou `variant` sont définies sur le `ButtonsGroup`, elles **surchargent** automatiquement les props des boutons enfants :

```vue
<!-- Les boutons auront TOUS la taille 'lg' et la variante 'primary' -->
<SuButtonsGroup size="lg" variant="primary">
  <SuButton size="sm" variant="outline">Bouton 1</SuButton>  <!-- Devient lg + primary -->
  <SuButton>Bouton 2</SuButton>                              <!-- Devient lg + primary -->
  <SuButton variant="ghost">Bouton 3</SuButton>              <!-- Devient lg + primary -->
</SuButtonsGroup>
```

### 🎯 Validation du contenu

Le composant vérifie automatiquement que seuls des composants `Button` sont passés dans le slot :

- ✅ **Composants Button** : Traités et stylés normalement
- ⚠️ **Autres composants** : Avertissement dans la console et élément ignoré
- ✅ **Commentaires/texte** : Ignorés silencieusement (comportement normal de Vue)

## Espacement et bordures

### 📏 Valeurs de gap

- `gap="sm"` : 0.25rem (4px)
- `gap="md"` : 0.5rem (8px) - **défaut**
- `gap="lg"` : 0.75rem (12px)
- `gap="none"` : 0px avec bordures connectées

### 🔗 Gap "none" - Boutons connectés

Quand `gap="none"`, les boutons sont visuellement connectés :

- **Bordures superposées** : `margin-left: -1px` pour éviter les bordures doubles
- **Border-radius adapté** :
  - Premier bouton : coins gauches arrondis uniquement
  - Boutons du milieu : aucun coin arrondi
  - Dernier bouton : coins droits arrondis uniquement
  - Bouton unique : tous les coins arrondis
- **Z-index intelligent** : Focus, hover et active ont un z-index supérieur

## Accessibilité

Le composant ButtonsGroup respecte les normes WCAG 2.1 AA :

### ✅ Fonctionnalités d'accessibilité

- **Rôles ARIA** : Support des rôles `toolbar`, `group`, etc.
- **Labels de groupe** : `aria-label` pour décrire le groupe
- **Navigation au clavier** : Préserve la navigation Tab entre les boutons
- **Focus visible** : Gestion du z-index pour la visibilité du focus
- **Descriptions** : Support d'`aria-describedby` pour les descriptions

### 🎯 Bonnes pratiques

```vue
<!-- Toolbar d'actions -->
<SuButtonsGroup 
  gap="sm" 
  role="toolbar" 
  aria-label="Actions de formatage"
>
  <SuButton aria-label="Gras">B</SuButton>
  <SuButton aria-label="Italique">I</SuButton>
  <SuButton aria-label="Souligné">U</SuButton>
</SuButtonsGroup>

<!-- Navigation par pages -->
<SuButtonsGroup 
  gap="none" 
  variant="outline"
  role="group" 
  aria-label="Navigation par pages"
>
  <SuButton>Page 1</SuButton>
  <SuButton>Page 2</SuButton>
  <SuButton>Page 3</SuButton>
</SuButtonsGroup>

<!-- Actions CRUD -->
<SuButtonsGroup gap="sm" aria-label="Actions sur l'élément">
  <SuButton variant="primary" :icon="PlusIcon">Créer</SuButton>
  <SuButton variant="secondary" :icon="CogIcon">Modifier</SuButton>
  <SuButton variant="outline" :icon="TrashIcon">Supprimer</SuButton>
</SuButtonsGroup>
```

## Exemples d'usage avancés

### Toolbar de formatage

```vue
<script setup>
import { ref } from 'vue'
import { 
  BoldIcon, 
  ItalicIcon, 
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon
} from '@heroicons/vue/24/outline'

const formatting = ref({
  bold: false,
  italic: false,
  underline: false,
  align: 'left'
})
</script>

<template>
  <div>
    <div class="editor-toolbar">
      <!-- Groupe de formatage de texte -->
      <SuButtonsGroup 
        gap="none" 
        variant="ghost" 
        size="sm"
        role="toolbar"
        aria-label="Formatage du texte"
      >
        <SuButton 
          :icon="BoldIcon" 
          iconDisplay="only"
          :aria-pressed="formatting.bold"
          aria-label="Gras"
          @click="formatting.bold = !formatting.bold"
        />
        <SuButton 
          :icon="ItalicIcon" 
          iconDisplay="only"
          :aria-pressed="formatting.italic"
          aria-label="Italique"
          @click="formatting.italic = !formatting.italic"
        />
        <SuButton 
          :icon="UnderlineIcon" 
          iconDisplay="only"
          :aria-pressed="formatting.underline"
          aria-label="Souligné"
          @click="formatting.underline = !formatting.underline"
        />
      </SuButtonsGroup>
      
      <!-- Groupe d'alignement -->
      <SuButtonsGroup 
        gap="none" 
        variant="outline" 
        size="sm"
        role="toolbar"
        aria-label="Alignement du texte"
      >
        <SuButton 
          :icon="AlignLeftIcon" 
          iconDisplay="only"
          :aria-pressed="formatting.align === 'left'"
          aria-label="Aligner à gauche"
          @click="formatting.align = 'left'"
        />
        <SuButton 
          :icon="AlignCenterIcon" 
          iconDisplay="only"
          :aria-pressed="formatting.align === 'center'"
          aria-label="Centrer"
          @click="formatting.align = 'center'"
        />
        <SuButton 
          :icon="AlignRightIcon" 
          iconDisplay="only"
          :aria-pressed="formatting.align === 'right'"
          aria-label="Aligner à droite"
          @click="formatting.align = 'right'"
        />
      </SuButtonsGroup>
    </div>
  </div>
</template>

<style scoped>
.editor-toolbar {
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}
</style>
```

### Actions CRUD

```vue
<script setup>
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

const handleCreate = () => console.log('Créer')
const handleEdit = () => console.log('Modifier')
const handleDelete = () => console.log('Supprimer')
</script>

<template>
  <div>
    <div class="crud-actions">
      <h3>Actions disponibles</h3>
      
      <!-- Actions principales -->
      <SuButtonsGroup gap="sm" aria-label="Actions principales">
        <SuButton 
          variant="primary" 
          :icon="PlusIcon" 
          iconDisplay="left"
          @click="handleCreate"
        >
          Créer
        </SuButton>
        <SuButton 
          variant="secondary" 
          :icon="PencilIcon" 
          iconDisplay="left"
          @click="handleEdit"
        >
          Modifier
        </SuButton>
        <SuButton 
          variant="outline" 
          :icon="TrashIcon" 
          iconDisplay="left"
          @click="handleDelete"
        >
          Supprimer
        </SuButton>
      </SuButtonsGroup>
    </div>
  </div>
</template>
```

### Navigation par pages

```vue
<script setup>
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const currentPage = ref(2)
const totalPages = 5

const goToPage = (page) => {
  currentPage.value = page
}

const previousPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages) currentPage.value++
}
</script>

<template>
  <div>
    <nav aria-label="Navigation par pages">
      <SuButtonsGroup 
        gap="none" 
        variant="outline"
        role="group"
        aria-label="Pages"
      >
        <SuButton 
          :icon="ChevronLeftIcon" 
          iconDisplay="only"
          :disabled="currentPage === 1"
          aria-label="Page précédente"
          @click="previousPage"
        />
        
        <SuButton 
          v-for="page in totalPages"
          :key="page"
          :aria-pressed="currentPage === page"
          :variant="currentPage === page ? 'primary' : undefined"
          @click="goToPage(page)"
        >
          {{ page }}
        </SuButton>
        
        <SuButton 
          :icon="ChevronRightIcon" 
          iconDisplay="only"
          :disabled="currentPage === totalPages"
          aria-label="Page suivante"
          @click="nextPage"
        />
      </SuButtonsGroup>
    </nav>
  </div>
</template>
```

## Contrôle du contenu du slot

Le composant `ButtonsGroup` vérifie automatiquement le contenu de son slot :

### ✅ Éléments acceptés
- Composants `Button` du design system
- Commentaires Vue (ignorés)
- Nœuds de texte vides (ignorés)

### ⚠️ Éléments rejetés
- Autres composants ou éléments HTML
- Avertissement dans la console de développement
- Élément ignoré dans le rendu

### 🔍 Exemple de validation

```vue
<!-- ✅ Correct -->
<SuButtonsGroup>
  <div>
    <SuButton>Bouton 1</SuButton>
    <SuButton>Bouton 2</SuButton>
    <!-- Commentaire ignoré -->
  </div>
</SuButtonsGroup>

<!-- ⚠️ Avertissement dans la console -->
<SuButtonsGroup>
  <div>
    <SuButton>Bouton valide</SuButton>
    <div>Élément non-bouton</div> <!-- Ignoré avec avertissement -->
    <SuButton>Autre bouton valide</SuButton>
  </div>
</SuButtonsGroup>
```

Cette approche garantit la cohérence visuelle tout en informant les développeurs des problèmes potentiels.