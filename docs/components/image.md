# Image

Composant Image avec support des ratios d'aspect, sources multiples, lazy loading, fallback et accessibilité complète. Optimisé pour les performances et la compatibilité responsive.

## Exemples d'utilisation

### Image de base

<div class="component-demo">
  <div class="demo-section">
    <h4>Image simple</h4>
    <div class="demo-inputs">
      <SuImage 
        src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Paysage naturel"
        width="400"
        height="300"
      />
    </div>
  </div>
</div>

```vue
<template>
  <SuImage 
    src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
    alt="Paysage naturel"
    width="400"
    height="300"
  />
</template>
```

### Ratios d'aspect

<div class="component-demo">
  <div class="demo-section">
    <h4>Différents ratios</h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
      <div>
        <p><strong>16:9 (cinéma)</strong></p>
        <SuImage 
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Ratio 16:9"
          ratio="16/9"
        />
      </div>
      <div>
        <p><strong>4:3 (classique)</strong></p>
        <SuImage 
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Ratio 4:3"
          ratio="4/3"
        />
      </div>
      <div>
        <p><strong>1:1 (carré)</strong></p>
        <SuImage 
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Ratio 1:1"
          ratio="1/1"
        />
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <!-- Ratio cinéma -->
  <SuImage 
    src="image.jpg"
    alt="Image cinéma"
    ratio="16/9"
  />
  
  <!-- Ratio classique -->
  <SuImage 
    src="image.jpg"
    alt="Image classique"
    ratio="4/3"
  />
  
  <!-- Ratio carré -->
  <SuImage 
    src="image.jpg"
    alt="Image carrée"
    ratio="1/1"
  />
  
  <!-- Ratio personnalisé -->
  <SuImage 
    src="image.jpg"
    alt="Image personnalisée"
    :ratio="2.5"
  />
</template>
```

### Modes d'ajustement (object-fit)

<div class="component-demo">
  <div class="demo-section">
    <h4>Object-fit</h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">
      <div>
        <p><strong>Cover</strong></p>
        <SuImage 
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Cover"
          ratio="1/1"
          fit="cover"
        />
      </div>
      <div>
        <p><strong>Contain</strong></p>
        <SuImage 
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Contain"
          ratio="1/1"
          fit="contain"
        />
      </div>
      <div>
        <p><strong>Fill</strong></p>
        <SuImage 
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Fill"
          ratio="1/1"
          fit="fill"
        />
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <!-- Couvre tout l'espace (peut rogner) -->
  <SuImage 
    src="image.jpg"
    alt="Image cover"
    ratio="16/9"
    fit="cover"
  />
  
  <!-- Contient entièrement (peut laisser des espaces) -->
  <SuImage 
    src="image.jpg"
    alt="Image contain"
    ratio="16/9"
    fit="contain"
  />
  
  <!-- Remplit en déformant si nécessaire -->
  <SuImage 
    src="image.jpg"
    alt="Image fill"
    ratio="16/9"
    fit="fill"
  />
</template>
```

### Positionnement

<div class="component-demo">
  <div class="demo-section">
    <h4>Object-position</h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 1rem;">
      <div>
        <p><strong>Center</strong></p>
        <SuImage 
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Position center"
          ratio="1/1"
          fit="cover"
          position="center"
        />
      </div>
      <div>
        <p><strong>Top</strong></p>
        <SuImage 
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Position top"
          ratio="1/1"
          fit="cover"
          position="top"
        />
      </div>
      <div>
        <p><strong>Left</strong></p>
        <SuImage 
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Position left"
          ratio="1/1"
          fit="cover"
          position="left"
        />
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <!-- Centré -->
  <SuImage 
    src="image.jpg"
    alt="Image centrée"
    ratio="16/9"
    fit="cover"
    position="center"
  />
  
  <!-- En haut -->
  <SuImage 
    src="image.jpg"
    alt="Image en haut"
    ratio="16/9"
    fit="cover"
    position="top"
  />
  
  <!-- Coin supérieur gauche -->
  <SuImage 
    src="image.jpg"
    alt="Image coin supérieur gauche"
    ratio="16/9"
    fit="cover"
    position="top-left"
  />
</template>
```

### Lazy loading

<div class="component-demo">
  <div class="demo-section">
    <h4>Chargement différé</h4>
    <div class="demo-inputs">
      <SuImage 
        src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Image avec lazy loading"
        ratio="16/9"
        lazy
        placeholder
      />
    </div>
  </div>
</div>

```vue
<template>
  <!-- Lazy loading automatique -->
  <SuImage 
    src="image.jpg"
    alt="Image lazy"
    lazy
    placeholder
  />
  
  <!-- Contrôle manuel du loading -->
  <SuImage 
    src="image.jpg"
    alt="Image eager"
    loading="eager"
  />
</template>
```

### Avec fallback

<div class="component-demo">
  <div class="demo-section">
    <h4>Image de secours</h4>
    <div class="demo-inputs">
      <SuImage 
        src="https://invalid-url-that-will-fail.jpg"
        fallback="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Image avec fallback"
        ratio="16/9"
        placeholder
      />
    </div>
  </div>
</div>

```vue
<template>
  <SuImage 
    src="image-qui-peut-echouer.jpg"
    fallback="image-de-secours.jpg"
    alt="Image avec fallback"
    ratio="16/9"
  />
</template>
```

### Sources multiples (responsive)

<div class="component-demo">
  <div class="demo-section">
    <h4>Sources adaptatives</h4>
    <div class="demo-inputs">
      <SuImage 
        src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Image responsive"
        ratio="16/9"
        :sources="[
          {
            srcset: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
            media: '(min-width: 768px)'
          },
          {
            srcset: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400',
            media: '(max-width: 767px)'
          }
        ]"
      />
    </div>
  </div>
</div>

```vue
<template>
  <SuImage 
    src="image-default.jpg"
    alt="Image responsive"
    :sources="[
      {
        srcset: 'image-large.jpg',
        media: '(min-width: 1024px)'
      },
      {
        srcset: 'image-medium.jpg',
        media: '(min-width: 768px)'
      }
    ]"
  />
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | **requis** | URL de l'image principale |
| `alt` | `string` | **requis** | Texte alternatif pour l'accessibilité |
| `fallback` | `string` | `undefined` | Image de fallback en cas d'erreur |
| `sources` | `ImageSource[]` | `[]` | Sources multiples pour le tag picture |
| `ratio` | `'auto' \| '16/9' \| '4/3' \| '1/1' \| number` | `'auto'` | Ratio d'aspect de l'image |
| `fit` | `'cover' \| 'contain' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'` | Mode d'ajustement de l'image |
| `position` | `'center' \| 'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'center'` | Position de l'image |
| `lazy` | `boolean` | `false` | Activer le lazy loading |
| `loading` | `'eager' \| 'lazy'` | `'lazy'` | Stratégie de chargement |
| `width` | `string \| number` | `undefined` | Largeur de l'image |
| `height` | `string \| number` | `undefined` | Hauteur de l'image |
| `placeholder` | `boolean` | `true` | Afficher un placeholder pendant le chargement |
| `placeholderColor` | `string` | `'#f3f4f6'` | Couleur du placeholder |

### Types

#### ImageSource
```typescript
interface ImageSource {
  srcset: string
  type?: string
  media?: string
}
```

### Attributs d'accessibilité

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabel` | `string` | `undefined` | Label accessible |
| `ariaDescribedBy` | `string` | `undefined` | ID de l'élément de description |
| `ariaHidden` | `boolean` | `undefined` | Masquer aux lecteurs d'écran |
| `role` | `string` | `undefined` | Rôle ARIA personnalisé |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `@load` | `(event: Event) => void` | Émis quand l'image est chargée |
| `@error` | `(event: Event) => void` | Émis si l'image échoue à se charger |

### Méthodes exposées

| Méthode | Type | Description |
|---------|------|-------------|
| `reload()` | `() => void` | Recharge l'image |
| `imageRef` | `Ref<HTMLImageElement>` | Référence à l'élément image |

## Ratios d'aspect

Le composant supporte plusieurs ratios prédéfinis et des ratios personnalisés :

### 📐 Ratios prédéfinis

- `'auto'` : Utilise les dimensions naturelles de l'image
- `'16/9'` : Format cinéma/vidéo (1.777...)
- `'4/3'` : Format classique photo (1.333...)
- `'1/1'` : Format carré

### 🔢 Ratios personnalisés

```vue
<!-- Ratio personnalisé avec nombre -->
<SuImage 
  src="image.jpg"
  alt="Ratio personnalisé"
  :ratio="2.5"
/>

<!-- Ratio ultra-wide -->
<SuImage 
  src="image.jpg"
  alt="Ultra-wide"
  :ratio="21/9"
/>
```

## Object-fit et object-position

### 🖼️ Modes d'ajustement (fit)

- **`cover`** : L'image couvre tout l'espace (peut rogner)
- **`contain`** : L'image est entièrement visible (peut laisser des espaces)
- **`fill`** : L'image remplit l'espace (peut déformer)
- **`none`** : Taille naturelle de l'image
- **`scale-down`** : Comme `none` ou `contain`, selon la plus petite

### 📍 Positionnement (position)

- **Positions simples** : `center`, `top`, `bottom`, `left`, `right`
- **Positions composées** : `top-left`, `top-right`, `bottom-left`, `bottom-right`

```vue
<!-- Image centrée qui couvre l'espace -->
<SuImage 
  src="portrait.jpg"
  alt="Portrait"
  ratio="1/1"
  fit="cover"
  position="top"
/>

<!-- Image qui garde ses proportions -->
<SuImage 
  src="landscape.jpg"
  alt="Paysage"
  ratio="16/9"
  fit="contain"
  position="center"
/>
```

## Sources multiples et responsive

### 📱 Images adaptatives

Le composant supporte le tag `<picture>` pour des images optimisées selon l'appareil :

```vue
<template>
  <SuImage 
    src="image-default.jpg"
    alt="Image responsive"
    :sources="[
      {
        srcset: 'image-large.webp',
        type: 'image/webp',
        media: '(min-width: 1024px)'
      },
      {
        srcset: 'image-medium.webp',
        type: 'image/webp',
        media: '(min-width: 768px)'
      },
      {
        srcset: 'image-large.jpg',
        media: '(min-width: 1024px)'
      },
      {
        srcset: 'image-medium.jpg',
        media: '(min-width: 768px)'
      }
    ]"
  />
</template>
```

### 🎯 Cas d'usage

- **Performance** : Servir des images WebP aux navigateurs compatibles
- **Responsive** : Images adaptées à la taille d'écran
- **Densité** : Images haute résolution pour les écrans Retina

## Lazy loading

### ⚡ Optimisation des performances

Le lazy loading améliore les performances en chargeant les images seulement quand elles sont visibles :

```vue
<!-- Lazy loading automatique -->
<SuImage 
  src="image.jpg"
  alt="Image lazy"
  lazy
  placeholder
/>

<!-- Contrôle manuel -->
<SuImage 
  src="image.jpg"
  alt="Image eager"
  loading="eager"
/>
```

### 🎨 Placeholder personnalisé

```vue
<!-- Placeholder coloré -->
<SuImage 
  src="image.jpg"
  alt="Image avec placeholder bleu"
  placeholder
  placeholderColor="#dbeafe"
/>

<!-- Sans placeholder -->
<SuImage 
  src="image.jpg"
  alt="Image sans placeholder"
  :placeholder="false"
/>
```

## Gestion d'erreur et fallback

### 🛡️ Images de secours

Le composant gère automatiquement les erreurs de chargement :

```vue
<!-- Avec image de fallback -->
<SuImage 
  src="image-principale.jpg"
  fallback="image-par-defaut.jpg"
  alt="Image avec fallback"
/>

<!-- Gestion d'événement personnalisée -->
<SuImage 
  src="image.jpg"
  alt="Image avec gestion d'erreur"
  @error="handleImageError"
  @load="handleImageLoad"
/>
```

## Accessibilité

Le composant Image respecte les normes WCAG 2.1 AA :

### ✅ Fonctionnalités d'accessibilité

- **Alt text obligatoire** : La prop `alt` est requise pour l'accessibilité
- **Attributs ARIA** : Support complet des attributs ARIA
- **États de chargement** : Feedback accessible pendant le chargement
- **Gestion d'erreur** : Messages d'erreur accessibles
- **Lazy loading** : Compatible avec les lecteurs d'écran
- **Placeholder** : Descriptions appropriées pendant le chargement

### 🎯 Bonnes pratiques

```vue
<!-- Image décorative -->
<SuImage 
  src="decoration.jpg"
  alt=""
  aria-hidden="true"
/>

<!-- Image informative -->
<SuImage 
  src="chart.jpg"
  alt="Graphique montrant l'évolution des ventes de 2020 à 2024"
  aria-describedby="chart-description"
/>
<div id="chart-description">
  Le graphique montre une croissance constante...
</div>

<!-- Image avec rôle spécifique -->
<SuImage 
  src="logo.jpg"
  alt="Logo de l'entreprise"
  role="img"
/>
```

## Exemples d'usage avancés

### Galerie d'images

```vue
<script setup>
const images = [
  { src: 'image1.jpg', alt: 'Description 1' },
  { src: 'image2.jpg', alt: 'Description 2' },
  { src: 'image3.jpg', alt: 'Description 3' }
]
</script>

<template>
  <div class="gallery">
    <SuImage 
      v-for="image in images"
      :key="image.src"
      :src="image.src"
      :alt="image.alt"
      ratio="1/1"
      fit="cover"
      lazy
      placeholder
      class="gallery-item"
    />
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-item {
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s;
}

.gallery-item:hover {
  transform: scale(1.05);
}
</style>
```

### Avatar utilisateur

```vue
<script setup>
const user = {
  name: 'John Doe',
  avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
}
</script>

<template>
  <div class="user-profile">
    <SuImage 
      :src="user.avatar"
      :fallback="'/default-avatar.jpg'"
      :alt="`Photo de profil de ${user.name}`"
      ratio="1/1"
      fit="cover"
      position="center"
      width="80"
      height="80"
      class="avatar"
    />
    <h3>{{ user.name }}</h3>
  </div>
</template>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  border-radius: 50%;
  border: 2px solid #e5e7eb;
}
</style>
```

### Image responsive avec art direction

```vue
<template>
  <SuImage 
    src="landscape-default.jpg"
    alt="Paysage adaptatif"
    :sources="[
      {
        srcset: 'landscape-desktop.jpg',
        media: '(min-width: 1024px)'
      },
      {
        srcset: 'landscape-tablet.jpg',
        media: '(min-width: 768px)'
      },
      {
        srcset: 'landscape-mobile.jpg',
        media: '(max-width: 767px)'
      }
    ]"
    ratio="16/9"
    fit="cover"
    lazy
  />
</template>
```

### Hero section

```vue
<template>
  <section class="hero">
    <SuImage 
      src="hero-background.jpg"
      alt="Image d'arrière-plan de la section hero"
      :sources="[
        {
          srcset: 'hero-background-2x.webp',
          type: 'image/webp',
          media: '(min-resolution: 2dppx)'
        },
        {
          srcset: 'hero-background.webp',
          type: 'image/webp'
        }
      ]"
      ratio="21/9"
      fit="cover"
      position="center"
      class="hero-image"
    />
    
    <div class="hero-content">
      <h1>Titre de la section</h1>
      <p>Description de la section hero</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
}
</style>
```

## Performance et optimisation

### 🚀 Bonnes pratiques

- **Lazy loading** : Utilisez `lazy` pour les images en dessous du pli
- **Sources multiples** : Optimisez avec WebP et différentes résolutions
- **Ratios fixes** : Évitez le layout shift avec des ratios définis
- **Alt text** : Toujours fournir un texte alternatif approprié
- **Fallback** : Prévoyez une image de secours pour les cas d'erreur

### 📊 Optimisations intégrées

- **Transition fluide** : Animation douce lors du chargement
- **Placeholder intelligent** : Évite le layout shift
- **Gestion d'erreur** : Fallback automatique en cas d'échec
- **Lazy loading natif** : Utilise l'API native du navigateur
- **Responsive** : Support complet des images adaptatives