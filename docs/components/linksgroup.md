# LinksGroup

Composant LinksGroup pour organiser et aligner des liens avec un espacement contrôlé. Supporte la propagation des props `size`, `variant` et `underline` aux liens enfants et la gestion spéciale des bordures pour les liens connectés.

## Exemples d'utilisation

### LinksGroup de base

<div class="component-demo">
  <div class="demo-section">
    <h4>Groupe simple avec gap par défaut</h4>
    <div class="demo-buttons">
      <SuLinksGroup>
        <SuLink href="/home">Accueil</SuLink>
        <SuLink href="/about">À propos</SuLink>
        <SuLink href="/contact">Contact</SuLink>
      </SuLinksGroup>
    </div>
  </div>
</div>

```vue
<template>
  <SuLinksGroup>
    <SuLink href="/home">Accueil</SuLink>
    <SuLink href="/about">À propos</SuLink>
    <SuLink href="/contact">Contact</SuLink>
  </SuLinksGroup>
</template>
```

### Espacement (gap)

<div class="component-demo">
  <div class="demo-section">
    <h4>Différents espacements</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Gap Small</strong></p>
        <SuLinksGroup gap="sm">
          <SuLink href="/page1">Page 1</SuLink>
          <SuLink href="/page2">Page 2</SuLink>
          <SuLink href="/page3">Page 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Gap Medium (défaut)</strong></p>
        <SuLinksGroup gap="md">
          <SuLink href="/page1">Page 1</SuLink>
          <SuLink href="/page2">Page 2</SuLink>
          <SuLink href="/page3">Page 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Gap Large</strong></p>
        <SuLinksGroup gap="lg">
          <SuLink href="/page1">Page 1</SuLink>
          <SuLink href="/page2">Page 2</SuLink>
          <SuLink href="/page3">Page 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Gap None (connecté)</strong></p>
        <SuLinksGroup gap="none">
          <SuLink href="/first">Premier</SuLink>
          <SuLink href="/middle">Milieu</SuLink>
          <SuLink href="/last">Dernier</SuLink>
        </SuLinksGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- Espacement petit -->
    <SuLinksGroup gap="sm">
      <SuLink href="/page1">Page 1</SuLink>
      <SuLink href="/page2">Page 2</SuLink>
      <SuLink href="/page3">Page 3</SuLink>
    </SuLinksGroup>
    
    <!-- Espacement moyen (défaut) -->
    <SuLinksGroup gap="md">
      <SuLink href="/page1">Page 1</SuLink>
      <SuLink href="/page2">Page 2</SuLink>
      <SuLink href="/page3">Page 3</SuLink>
    </SuLinksGroup>
    
    <!-- Espacement large -->
    <SuLinksGroup gap="lg">
      <SuLink href="/page1">Page 1</SuLink>
      <SuLink href="/page2">Page 2</SuLink>
      <SuLink href="/page3">Page 3</SuLink>
    </SuLinksGroup>
    
    <!-- Liens connectés -->
    <SuLinksGroup gap="none">
      <SuLink href="/first">Premier</SuLink>
      <SuLink href="/middle">Milieu</SuLink>
      <SuLink href="/last">Dernier</SuLink>
    </SuLinksGroup>
  </div>
</template>
```

### Propagation de la taille

<div class="component-demo">
  <div class="demo-section">
    <h4>Taille forcée sur tous les liens</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Taille Small forcée</strong></p>
        <SuLinksGroup size="sm">
          <SuLink href="/link1">Petit lien 1</SuLink>
          <SuLink href="/link2">Petit lien 2</SuLink>
          <SuLink href="/link3">Petit lien 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Taille Medium forcée</strong></p>
        <SuLinksGroup size="md">
          <SuLink href="/link1">Lien moyen 1</SuLink>
          <SuLink href="/link2">Lien moyen 2</SuLink>
          <SuLink href="/link3">Lien moyen 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Taille Large forcée</strong></p>
        <SuLinksGroup size="lg">
          <SuLink href="/link1">Grand lien 1</SuLink>
          <SuLink href="/link2">Grand lien 2</SuLink>
          <SuLink href="/link3">Grand lien 3</SuLink>
        </SuLinksGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- Tous les liens seront en taille small -->
    <SuLinksGroup size="sm">
      <SuLink href="/link1">Petit lien 1</SuLink>
      <SuLink href="/link2">Petit lien 2</SuLink>
      <SuLink href="/link3">Petit lien 3</SuLink>
    </SuLinksGroup>
    
    <!-- Tous les liens seront en taille large -->
    <SuLinksGroup size="lg">
      <SuLink href="/link1">Grand lien 1</SuLink>
      <SuLink href="/link2">Grand lien 2</SuLink>
      <SuLink href="/link3">Grand lien 3</SuLink>
    </SuLinksGroup>
  </div>
</template>
```

### Propagation de la variante

<div class="component-demo">
  <div class="demo-section">
    <h4>Variante forcée sur tous les liens</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Variante Primary forcée</strong></p>
        <SuLinksGroup variant="primary">
          <SuLink href="/link1">Lien 1</SuLink>
          <SuLink href="/link2">Lien 2</SuLink>
          <SuLink href="/link3">Lien 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Variante Secondary forcée</strong></p>
        <SuLinksGroup variant="secondary">
          <SuLink href="/link1">Lien 1</SuLink>
          <SuLink href="/link2">Lien 2</SuLink>
          <SuLink href="/link3">Lien 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Variante Muted forcée</strong></p>
        <SuLinksGroup variant="muted">
          <SuLink href="/link1">Lien 1</SuLink>
          <SuLink href="/link2">Lien 2</SuLink>
          <SuLink href="/link3">Lien 3</SuLink>
        </SuLinksGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- Tous les liens seront primary -->
    <SuLinksGroup variant="primary">
      <SuLink href="/link1">Lien 1</SuLink>
      <SuLink href="/link2">Lien 2</SuLink>
      <SuLink href="/link3">Lien 3</SuLink>
    </SuLinksGroup>
    
    <!-- Tous les liens seront muted -->
    <SuLinksGroup variant="muted">
      <SuLink href="/link1">Lien 1</SuLink>
      <SuLink href="/link2">Lien 2</SuLink>
      <SuLink href="/link3">Lien 3</SuLink>
    </SuLinksGroup>
  </div>
</template>
```

### Séparateurs

<div class="component-demo">
  <div class="demo-section">
    <h4>Différents séparateurs</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Séparateur point (•)</strong></p>
        <SuLinksGroup separator="dot" variant="muted">
          <SuLink href="/home">Accueil</SuLink>
          <SuLink href="/about">À propos</SuLink>
          <SuLink href="/contact">Contact</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Séparateur slash (/)</strong></p>
        <SuLinksGroup separator="slash" variant="secondary">
          <SuLink href="/">Accueil</SuLink>
          <SuLink href="/products">Produits</SuLink>
          <SuLink href="/products/laptops">Ordinateurs portables</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Séparateur pipe (|)</strong></p>
        <SuLinksGroup separator="pipe" variant="primary">
          <SuLink href="/privacy">Confidentialité</SuLink>
          <SuLink href="/terms">Conditions</SuLink>
          <SuLink href="/cookies">Cookies</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Séparateur flèche (→)</strong></p>
        <SuLinksGroup separator="arrow" variant="default">
          <SuLink href="/step1">Étape 1</SuLink>
          <SuLink href="/step2">Étape 2</SuLink>
          <SuLink href="/step3">Étape 3</SuLink>
        </SuLinksGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <!-- Breadcrumb avec slash -->
  <SuLinksGroup separator="slash" variant="muted" size="sm">
    <SuLink href="/">Accueil</SuLink>
    <SuLink href="/products">Produits</SuLink>
    <SuLink href="/products/laptops">Ordinateurs portables</SuLink>
  </SuLinksGroup>
  
  <!-- Navigation avec points -->
  <SuLinksGroup separator="dot" variant="secondary">
    <SuLink href="/home">Accueil</SuLink>
    <SuLink href="/about">À propos</SuLink>
    <SuLink href="/contact">Contact</SuLink>
  </SuLinksGroup>
  
  <!-- Étapes avec flèches -->
  <SuLinksGroup separator="arrow" variant="primary">
    <SuLink href="/step1">Étape 1</SuLink>
    <SuLink href="/step2">Étape 2</SuLink>
    <SuLink href="/step3">Étape 3</SuLink>
  </SuLinksGroup>
</template>
```

### Direction verticale

<div class="component-demo">
  <div class="demo-section">
    <h4>Navigation verticale</h4>
    <div class="demo-buttons">
      <SuLinksGroup direction="vertical" variant="secondary">
        <SuLink href="/dashboard">Tableau de bord</SuLink>
        <SuLink href="/projects">Projets</SuLink>
        <SuLink href="/team">Équipe</SuLink>
        <SuLink href="/settings">Paramètres</SuLink>
      </SuLinksGroup>
    </div>
  </div>
</div>

```vue
<template>
  <SuLinksGroup direction="vertical" variant="secondary">
    <SuLink href="/dashboard">Tableau de bord</SuLink>
    <SuLink href="/projects">Projets</SuLink>
    <SuLink href="/team">Équipe</SuLink>
    <SuLink href="/settings">Paramètres</SuLink>
  </SuLinksGroup>
</template>
```

### Liens connectés avec variantes

<div class="component-demo">
  <div class="demo-section">
    <h4>Liens connectés avec différentes variantes</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Primary connecté</strong></p>
        <SuLinksGroup gap="none" variant="primary">
          <SuLink href="/section1">Section 1</SuLink>
          <SuLink href="/section2">Section 2</SuLink>
          <SuLink href="/section3">Section 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Secondary connecté</strong></p>
        <SuLinksGroup gap="none" variant="secondary">
          <SuLink href="/option-a">Option A</SuLink>
          <SuLink href="/option-b">Option B</SuLink>
          <SuLink href="/option-c">Option C</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Navigation d'icônes</strong></p>
        <SuLinksGroup gap="none" variant="muted" size="sm">
          <SuLink href="/home" :icon="HomeIcon" iconDisplay="only" aria-label="Accueil" />
          <SuLink href="/profile" :icon="UserIcon" iconDisplay="only" aria-label="Profil" />
          <SuLink href="/settings" :icon="CogIcon" iconDisplay="only" aria-label="Paramètres" />
        </SuLinksGroup>
      </div>
    </div>
  </div>
</div>

```vue
<script setup>
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div>
    <!-- Liens connectés primary -->
    <SuLinksGroup gap="none" variant="primary">
      <SuLink href="/section1">Section 1</SuLink>
      <SuLink href="/section2">Section 2</SuLink>
      <SuLink href="/section3">Section 3</SuLink>
    </SuLinksGroup>
    
    <!-- Navigation d'icônes -->
    <SuLinksGroup gap="none" variant="muted" size="sm">
      <SuLink href="/home" :icon="HomeIcon" iconDisplay="only" aria-label="Accueil" />
      <SuLink href="/profile" :icon="UserIcon" iconDisplay="only" aria-label="Profil" />
      <SuLink href="/settings" :icon="CogIcon" iconDisplay="only" aria-label="Paramètres" />
    </SuLinksGroup>
  </div>
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `'sm' \| 'md' \| 'lg' \| 'none'` | `'md'` | Espacement entre les liens |
| `size` | `'sm' \| 'md' \| 'lg'` | `undefined` | Taille forcée pour tous les liens |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'muted'` | `undefined` | Variante forcée pour tous les liens |
| `underline` | `'always' \| 'hover' \| 'never'` | `undefined` | Soulignement forcé pour tous les liens |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction du groupe |

### Attributs d'accessibilité

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabel` | `string` | `undefined` | Label accessible pour le groupe |
| `ariaDescribedBy` | `string` | `undefined` | ID de l'élément de description |
| `role` | `string` | `undefined` | Rôle ARIA personnalisé (ex: 'navigation', 'group') |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Liens à afficher dans le groupe |

## Comportement des props

### 🔄 Propagation automatique

Quand `size`, `variant` ou `underline` sont définies sur le `LinksGroup`, elles **surchargent** automatiquement les props des liens enfants :

```vue
<!-- Les liens auront TOUS la taille 'lg', la variante 'primary' et underline 'never' -->
<SuLinksGroup size="lg" variant="primary" underline="never">
  <SuLink size="sm" variant="muted" underline="always" href="/link1">Lien 1</SuLink>  <!-- Devient lg + primary + never -->
  <SuLink href="/link2">Lien 2</SuLink>                                              <!-- Devient lg + primary + never -->
  <SuLink variant="secondary" href="/link3">Lien 3</SuLink>                          <!-- Devient lg + primary + never -->
</SuLinksGroup>
```

### 🎯 Validation du contenu

Le composant vérifie automatiquement que seuls des composants `Link` sont passés dans le slot :

- ✅ **Composants Link** : Traités et stylés normalement
- ⚠️ **Autres composants** : Avertissement dans la console et élément ignoré
- ✅ **Commentaires/texte** : Ignorés silencieusement (comportement normal de Vue)

## Espacement et bordures

### 📏 Valeurs de gap

- `gap="sm"` : 0.25rem (4px)
- `gap="md"` : 0.5rem (8px) - **défaut**
- `gap="lg"` : 0.75rem (12px)
- `gap="none"` : 0px avec bordures connectées

### 🔗 Gap "none" - Liens connectés

Quand `gap="none"`, les liens sont visuellement connectés :

- **Bordures superposées** : `margin-left: -1px` pour éviter les bordures doubles
- **Border-radius adapté** :
  - Premier lien : coins gauches arrondis uniquement
  - Liens du milieu : aucun coin arrondi
  - Dernier lien : coins droits arrondis uniquement
  - Lien unique : tous les coins arrondis
- **Z-index intelligent** : Focus, hover et active ont un z-index supérieur

## Direction

### 📐 Horizontal vs Vertical

- **Horizontal** (défaut) : Liens alignés en ligne
- **Vertical** : Liens empilés en colonne

Pour `gap="none"` en mode vertical :
- Les marges deviennent `margin-top: -1px`
- Les border-radius s'adaptent (haut/bas au lieu de gauche/droite)

## Accessibilité

Le composant LinksGroup respecte les normes WCAG 2.1 AA :

### ✅ Fonctionnalités d'accessibilité

- **Rôles ARIA** : Support des rôles `navigation`, `group`, etc.
- **Labels de groupe** : `aria-label` pour décrire le groupe
- **Navigation au clavier** : Préserve la navigation Tab entre les liens
- **Focus visible** : Gestion du z-index pour la visibilité du focus
- **Descriptions** : Support d'`aria-describedby` pour les descriptions

### 🎯 Bonnes pratiques

```vue
<!-- Navigation principale -->
<SuLinksGroup 
  gap="lg" 
  role="navigation" 
  aria-label="Navigation principale"
>
  <SuLink href="/">Accueil</SuLink>
  <SuLink href="/products">Produits</SuLink>
  <SuLink href="/about">À propos</SuLink>
</SuLinksGroup>

<!-- Breadcrumb -->
<SuLinksGroup 
  gap="sm" 
  variant="muted"
  size="sm"
  role="navigation" 
  aria-label="Fil d'ariane"
>
  <SuLink href="/">Accueil</SuLink>
  <SuLink href="/products">Produits</SuLink>
  <SuLink href="/products/laptops">Ordinateurs portables</SuLink>
</SuLinksGroup>

<!-- Footer links -->
<SuLinksGroup gap="md" variant="secondary" aria-label="Liens du footer">
  <SuLink href="/privacy">Confidentialité</SuLink>
  <SuLink href="/terms">Conditions</SuLink>
  <SuLink href="/contact">Contact</SuLink>
</SuLinksGroup>
```

## Exemples d'usage avancés

### Navigation principale

```vue
<script setup>
import { HomeIcon, ShoppingBagIcon, InformationCircleIcon, PhoneIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header>
    <nav role="navigation" aria-label="Navigation principale">
      <SuLinksGroup gap="lg" variant="primary" size="md">
        <SuLink href="/" :icon="HomeIcon" iconDisplay="left">
          Accueil
        </SuLink>
        <SuLink href="/products" :icon="ShoppingBagIcon" iconDisplay="left">
          Produits
        </SuLink>
        <SuLink href="/about" :icon="InformationCircleIcon" iconDisplay="left">
          À propos
        </SuLink>
        <SuLink href="/contact" :icon="PhoneIcon" iconDisplay="left">
          Contact
        </SuLink>
      </SuLinksGroup>
    </nav>
  </header>
</template>
```

### Sidebar de navigation

```vue
<script setup>
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  UsersIcon, 
  CogIcon 
} from '@heroicons/vue/24/outline'
</script>

<template>
  <aside>
    <nav role="navigation" aria-label="Navigation latérale">
      <SuLinksGroup 
        direction="vertical" 
        gap="sm" 
        variant="secondary"
        size="md"
      >
        <SuLink to="/dashboard" :icon="ChartBarIcon" iconDisplay="left">
          Tableau de bord
        </SuLink>
        <SuLink to="/reports" :icon="DocumentTextIcon" iconDisplay="left">
          Rapports
        </SuLink>
        <SuLink to="/team" :icon="UsersIcon" iconDisplay="left">
          Équipe
        </SuLink>
        <SuLink to="/settings" :icon="CogIcon" iconDisplay="left">
          Paramètres
        </SuLink>
      </SuLinksGroup>
    </nav>
  </aside>
</template>
```

### Footer avec liens groupés

```vue
<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h4>Produit</h4>
        <SuLinksGroup 
          direction="vertical" 
          gap="sm" 
          variant="muted" 
          size="sm"
          underline="never"
        >
          <SuLink href="/features">Fonctionnalités</SuLink>
          <SuLink href="/pricing">Tarifs</SuLink>
          <SuLink href="/integrations">Intégrations</SuLink>
          <SuLink href="/api">API</SuLink>
        </SuLinksGroup>
      </div>
      
      <div class="footer-section">
        <h4>Support</h4>
        <SuLinksGroup 
          direction="vertical" 
          gap="sm" 
          variant="muted" 
          size="sm"
          underline="never"
        >
          <SuLink href="/help">Centre d'aide</SuLink>
          <SuLink href="/contact">Contact</SuLink>
          <SuLink href="/status">Statut</SuLink>
          <SuLink href="https://github.com/company" external>GitHub</SuLink>
        </SuLinksGroup>
      </div>
      
      <div class="footer-section">
        <h4>Légal</h4>
        <SuLinksGroup 
          direction="vertical" 
          gap="sm" 
          variant="muted" 
          size="sm"
          underline="never"
        >
          <SuLink href="/privacy">Confidentialité</SuLink>
          <SuLink href="/terms">Conditions</SuLink>
          <SuLink href="/cookies">Cookies</SuLink>
        </SuLinksGroup>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
  background-color: #f9fafb;
}

.footer-section h4 {
  margin-bottom: 1rem;
  color: #374151;
  font-weight: 600;
}
</style>
```

### Breadcrumb intelligent

```vue
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  const crumbs = [{ name: 'Accueil', path: '/' }]
  
  let currentPath = ''
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`
    crumbs.push({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: currentPath
    })
  })
  
  return crumbs
})
</script>

<template>
  <nav role="navigation" aria-label="Fil d'ariane">
    <SuLinksGroup gap="sm" variant="muted" size="sm">
      <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
        <SuLink 
          v-if="index < breadcrumbs.length - 1"
          :to="crumb.path"
        >
          {{ crumb.name }}
        </SuLink>
        <span v-else style="color: #374151; font-weight: 500;">
          {{ crumb.name }}
        </span>
        <span v-if="index < breadcrumbs.length - 1" style="color: #9ca3af; margin: 0 0.25rem;">
          /
        </span>
      </template>
    </SuLinksGroup>
  </nav>
</template>
```

## Contrôle du contenu du slot

Le composant `LinksGroup` vérifie automatiquement le contenu de son slot :

### ✅ Éléments acceptés
- Composants `Link` du design system
- Commentaires Vue (ignorés)
- Nœuds de texte vides (ignorés)

### ⚠️ Éléments rejetés
- Autres composants ou éléments HTML
- Avertissement dans la console de développement
- Élément ignoré dans le rendu

### 🔍 Exemple de validation

```vue
<!-- ✅ Correct -->
<SuLinksGroup>
  <SuLink href="/link1">Lien 1</SuLink>
  <SuLink href="/link2">Lien 2</SuLink>
  <!-- Commentaire ignoré -->
</SuLinksGroup>

<!-- ⚠️ Avertissement dans la console -->
<SuLinksGroup>
  <SuLink href="/valid">Lien valide</SuLink>
  <a href="/invalid">Élément non-Link</a> <!-- Ignoré avec avertissement -->
  <SuLink href="/valid2">Autre lien valide</SuLink>
</SuLinksGroup>
```

Cette approche garantit la cohérence visuelle tout en informant les développeurs des problèmes potentiels.