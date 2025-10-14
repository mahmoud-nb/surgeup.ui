# LinkGroup

LinkGroup component for organizing and aligning links with controlled spacing. Supports propagation of `size`, `variant` and `underline` props to child links and special border handling for connected links.

## Usage examples

### Basic LinkGroup

<div class="component-demo">
  <div class="demo-section">
    <h4>Simple group with default gap</h4>
    <div class="demo-buttons">
      <SuLinkGroup>
        <SuLink href="/home">Home</SuLink>
        <SuLink href="/about">About</SuLink>
        <SuLink href="/contact">Contact</SuLink>
      </SuLinkGroup>
    </div>
  </div>
</div>

```vue
<template>
  <SuLinkGroup>
    <SuLink href="/home">Home</SuLink>
    <SuLink href="/about">About</SuLink>
    <SuLink href="/contact">Contact</SuLink>
  </SuLinkGroup>
</template>
```

### Spacing (gap)

<div class="component-demo">
  <div class="demo-section">
    <h4>Different spacings</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Gap Small</strong></p>
        <SuLinkGroup gap="sm">
          <SuLink href="/page1">Page 1</SuLink>
          <SuLink href="/page2">Page 2</SuLink>
          <SuLink href="/page3">Page 3</SuLink>
        </SuLinkGroup>
      </div>
      <div>
        <p><strong>Gap Medium (default)</strong></p>
        <SuLinkGroup gap="md">
          <SuLink href="/page1">Page 1</SuLink>
          <SuLink href="/page2">Page 2</SuLink>
          <SuLink href="/page3">Page 3</SuLink>
        </SuLinkGroup>
      </div>
      <div>
        <p><strong>Gap Large</strong></p>
        <SuLinkGroup gap="lg">
          <SuLink href="/page1">Page 1</SuLink>
          <SuLink href="/page2">Page 2</SuLink>
          <SuLink href="/page3">Page 3</SuLink>
        </SuLinkGroup>
      </div>
      <div>
        <p><strong>Gap None (connected)</strong></p>
        <SuLinkGroup gap="none">
          <SuLink href="/first">First</SuLink>
          <SuLink href="/middle">Middle</SuLink>
          <SuLink href="/last">Last</SuLink>
        </SuLinkGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- Small spacing -->
    <SuLinkGroup gap="sm">
      <SuLink href="/page1">Page 1</SuLink>
      <SuLink href="/page2">Page 2</SuLink>
      <SuLink href="/page3">Page 3</SuLink>
    </SuLinkGroup>
    
    <!-- Medium spacing (default) -->
    <SuLinkGroup gap="md">
      <SuLink href="/page1">Page 1</SuLink>
      <SuLink href="/page2">Page 2</SuLink>
      <SuLink href="/page3">Page 3</SuLink>
    </SuLinkGroup>
    
    <!-- Large spacing -->
    <SuLinkGroup gap="lg">
      <SuLink href="/page1">Page 1</SuLink>
      <SuLink href="/page2">Page 2</SuLink>
      <SuLink href="/page3">Page 3</SuLink>
    </SuLinkGroup>
    
    <!-- Connected links -->
    <SuLinkGroup gap="none">
      <SuLink href="/first">First</SuLink>
      <SuLink href="/middle">Middle</SuLink>
      <SuLink href="/last">Last</SuLink>
    </SuLinkGroup>
  </div>
</template>
```

### Size propagation

<div class="component-demo">
  <div class="demo-section">
    <h4>Forced size on all links</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Small size forced</strong></p>
        <SuLinkGroup size="sm">
          <SuLink href="/link1">Small link 1</SuLink>
          <SuLink href="/link2">Small link 2</SuLink>
          <SuLink href="/link3">Small link 3</SuLink>
        </SuLinkGroup>
      </div>
      <div>
        <p><strong>Medium size forced</strong></p>
        <SuLinkGroup size="md">
          <SuLink href="/link1">Medium link 1</SuLink>
          <SuLink href="/link2">Medium link 2</SuLink>
          <SuLink href="/link3">Medium link 3</SuLink>
        </SuLinkGroup>
      </div>
      <div>
        <p><strong>Large size forced</strong></p>
        <SuLinkGroup size="lg">
          <SuLink href="/link1">Large link 1</SuLink>
          <SuLink href="/link2">Large link 2</SuLink>
          <SuLink href="/link3">Large link 3</SuLink>
        </SuLinkGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- All links will be small size -->
    <SuLinkGroup size="sm">
      <SuLink href="/link1">Small link 1</SuLink>
      <SuLink href="/link2">Small link 2</SuLink>
      <SuLink href="/link3">Small link 3</SuLink>
    </SuLinkGroup>
    
    <!-- All links will be large size -->
    <SuLinkGroup size="lg">
      <SuLink href="/link1">Large link 1</SuLink>
      <SuLink href="/link2">Large link 2</SuLink>
      <SuLink href="/link3">Large link 3</SuLink>
    </SuLinkGroup>
  </div>
</template>
```

### Variant propagation

<div class="component-demo">
  <div class="demo-section">
    <h4>Forced variant on all links</h4>
    <div class="demo-buttons-vertical">
      <div>
        <p><strong>Primary variant forced</strong></p>
        <SuLinkGroup variant="primary">
          <SuLink href="/link1">Link 1</SuLink>
          <SuLink href="/link2">Link 2</SuLink>
          <SuLink href="/link3">Link 3</SuLink>
        </SuLinkGroup>
      </div>
      <div>
        <p><strong>Secondary variant forced</strong></p>
        <SuLinkGroup variant="secondary">
          <SuLink href="/link1">Link 1</SuLink>
          <SuLink href="/link2">Link 2</SuLink>
          <SuLink href="/link3">Link 3</SuLink>
        </SuLinkGroup>
      </div>
      <div>
        <p><strong>Muted variant forced</strong></p>
        <SuLinkGroup variant="muted">
          <SuLink href="/link1">Link 1</SuLink>
          <SuLink href="/link2">Link 2</SuLink>
          <SuLink href="/link3">Link 3</SuLink>
        </SuLinkGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- All links will be primary -->
    <SuLinkGroup variant="primary">
      <SuLink href="/link1">Link 1</SuLink>
      <SuLink href="/link2">Link 2</SuLink>
      <SuLink href="/link3">Link 3</SuLink>
    </SuLinkGroup>
    
    <!-- All links will be muted -->
    <SuLinkGroup variant="muted">
      <SuLink href="/link1">Link 1</SuLink>
      <SuLink href="/link2">Link 2</SuLink>
      <SuLink href="/link3">Link 3</SuLink>
    </SuLinkGroup>
  </div>
</template>
```

### Vertical direction

<div class="component-demo">
  <div class="demo-section">
    <h4>Vertical navigation</h4>
    <div class="demo-buttons">
      <SuLinkGroup direction="vertical" variant="secondary">
        <SuLink href="/dashboard">Dashboard</SuLink>
        <SuLink href="/projects">Projects</SuLink>
        <SuLink href="/team">Team</SuLink>
        <SuLink href="/settings">Settings</SuLink>
      </SuLinkGroup>
    </div>
  </div>
</div>

```vue
<template>
  <SuLinkGroup direction="vertical" variant="secondary">
    <SuLink href="/dashboard">Dashboard</SuLink>
    <SuLink href="/projects">Projects</SuLink>
    <SuLink href="/team">Team</SuLink>
    <SuLink href="/settings">Settings</SuLink>
  </SuLinkGroup>
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `'sm' \| 'md' \| 'lg' \| 'none'` | `'md'` | Spacing between links |
| `separator` | `'none' \| 'dot' \| 'slash' \| 'pipe' \| 'arrow'` | `'none'` | Separator between links |
| `size` | `'sm' \| 'md' \| 'lg'` | `undefined` | Forced size for all links |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'muted'` | `undefined` | Forced variant for all links |
| `underline` | `'always' \| 'hover' \| 'never'` | `undefined` | Forced underline for all links |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Group direction |

### Accessibility attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabel` | `string` | `undefined` | Accessible label for the group |
| `ariaDescribedBy` | `string` | `undefined` | ID of the description element |
| `role` | `string` | `undefined` | Custom ARIA role (e.g. 'navigation', 'group') |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Links to display in the group |

## Separators

Separators allow adding characters between links to improve readability:

### 🎯 Separator types

- **`none`** : No separator (default)
- **`dot`** : Middle dot (•)
- **`slash`** : Forward slash (/)
- **`pipe`** : Vertical bar (|)
- **`arrow`** : Right arrow (→)

```vue
<!-- Breadcrumb with slash -->
<SuLinkGroup separator="slash" variant="muted">
  <SuLink href="/">Home</SuLink>
  <SuLink href="/products">Products</SuLink>
  <SuLink href="/products/laptops">Laptops</SuLink>
</SuLinkGroup>

<!-- Navigation with dots -->
<SuLinkGroup separator="dot" variant="secondary">
  <SuLink href="/home">Home</SuLink>
  <SuLink href="/about">About</SuLink>
  <SuLink href="/contact">Contact</SuLink>
</SuLinkGroup>
```

### 📱 Responsive behavior

Separators are automatically hidden in vertical mode to avoid visual clutter.

## Prop behavior

### 🔄 Automatic propagation

When `size`, `variant` or `underline` are defined on `LinkGroup`, they **override** the props of child links automatically:

```vue
<!-- All links will have 'lg' size, 'primary' variant and 'never' underline -->
<SuLinkGroup size="lg" variant="primary" underline="never">
  <SuLink size="sm" variant="muted" underline="always" href="/link1">Link 1</SuLink>  <!-- Becomes lg + primary + never -->
  <SuLink href="/link2">Link 2</SuLink>                                              <!-- Becomes lg + primary + never -->
  <SuLink variant="secondary" href="/link3">Link 3</SuLink>                          <!-- Becomes lg + primary + never -->
</SuLinkGroup>
```

### 🎯 Content validation

The component automatically checks that only `Link` components are passed in the slot:

- ✅ **Link components**: Processed and styled normally
- ⚠️ **Other components**: Warning in console and element ignored
- ✅ **Comments/text**: Silently ignored (normal Vue behavior)

## Spacing and borders

### 📏 Gap values

- `gap="sm"` : 0.25rem (4px)
- `gap="md"` : 0.5rem (8px) - **default**
- `gap="lg"` : 0.75rem (12px)
- `gap="none"` : 0px with connected borders

### 🔗 Gap "none" - Connected links

When `gap="none"`, links are visually connected:

- **Overlapping borders**: `margin-left: -1px` to avoid double borders
- **Adapted border-radius**:
  - First link: left corners rounded only
  - Middle links: no rounded corners
  - Last link: right corners rounded only
  - Single link: all corners rounded
- **Smart z-index**: Focus, hover and active have higher z-index

## Direction

### 📐 Horizontal vs Vertical

- **Horizontal** (default): Links aligned in row
- **Vertical**: Links stacked in column

For `gap="none"` in vertical mode:
- Margins become `margin-top: -1px`
- Border-radius adapts (top/bottom instead of left/right)

## Accessibility

The LinkGroup component follows WCAG 2.1 AA standards:

### ✅ Accessibility features

- **ARIA roles**: Support for `navigation`, `group`, etc. roles
- **Group labels**: `aria-label` to describe the group
- **Keyboard navigation**: Preserves Tab navigation between links
- **Visible focus**: Z-index management for focus visibility
- **Descriptions**: Support for `aria-describedby` for descriptions

### 🎯 Best practices

```vue
<!-- Main navigation -->
<SuLinkGroup 
  gap="lg" 
  role="navigation" 
  aria-label="Main navigation"
>
  <SuLink href="/">Home</SuLink>
  <SuLink href="/products">Products</SuLink>
  <SuLink href="/about">About</SuLink>
</SuLinkGroup>

<!-- Breadcrumb -->
<SuLinkGroup 
  gap="sm" 
  variant="muted"
  size="sm"
  separator="slash"
  role="navigation" 
  aria-label="Breadcrumb"
>
  <SuLink href="/">Home</SuLink>
  <SuLink href="/products">Products</SuLink>
  <SuLink href="/products/laptops">Laptops</SuLink>
</SuLinkGroup>

<!-- Footer links -->
<SuLinkGroup gap="md" separator="dot" variant="secondary" aria-label="Footer links">
  <SuLink href="/privacy">Privacy</SuLink>
  <SuLink href="/terms">Terms</SuLink>
  <SuLink href="/contact">Contact</SuLink>
</SuLinkGroup>
```