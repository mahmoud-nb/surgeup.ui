# LinksGroup

LinksGroup component for organizing and aligning links with controlled spacing. Supports propagation of `size`, `variant` and `underline` props to child links and special border handling for connected links.

## Usage examples

### Basic LinksGroup

<div class="component-demo">
  <div class="demo-section">
    <h4>Simple group with default gap</h4>
    <div class="demo-buttons">
      <SuLinksGroup>
        <SuLink href="/home">Home</SuLink>
        <SuLink href="/about">About</SuLink>
        <SuLink href="/contact">Contact</SuLink>
      </SuLinksGroup>
    </div>
  </div>
</div>

```vue
<template>
  <SuLinksGroup>
    <SuLink href="/home">Home</SuLink>
    <SuLink href="/about">About</SuLink>
    <SuLink href="/contact">Contact</SuLink>
  </SuLinksGroup>
</template>
```

### Spacing (gap)

<div class="component-demo">
  <div class="demo-section">
    <h4>Different spacings</h4>
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
        <p><strong>Gap Medium (default)</strong></p>
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
        <p><strong>Gap None (connected)</strong></p>
        <SuLinksGroup gap="none">
          <SuLink href="/first">First</SuLink>
          <SuLink href="/middle">Middle</SuLink>
          <SuLink href="/last">Last</SuLink>
        </SuLinksGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- Small spacing -->
    <SuLinksGroup gap="sm">
      <SuLink href="/page1">Page 1</SuLink>
      <SuLink href="/page2">Page 2</SuLink>
      <SuLink href="/page3">Page 3</SuLink>
    </SuLinksGroup>
    
    <!-- Medium spacing (default) -->
    <SuLinksGroup gap="md">
      <SuLink href="/page1">Page 1</SuLink>
      <SuLink href="/page2">Page 2</SuLink>
      <SuLink href="/page3">Page 3</SuLink>
    </SuLinksGroup>
    
    <!-- Large spacing -->
    <SuLinksGroup gap="lg">
      <SuLink href="/page1">Page 1</SuLink>
      <SuLink href="/page2">Page 2</SuLink>
      <SuLink href="/page3">Page 3</SuLink>
    </SuLinksGroup>
    
    <!-- Connected links -->
    <SuLinksGroup gap="none">
      <SuLink href="/first">First</SuLink>
      <SuLink href="/middle">Middle</SuLink>
      <SuLink href="/last">Last</SuLink>
    </SuLinksGroup>
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
        <SuLinksGroup size="sm">
          <SuLink href="/link1">Small link 1</SuLink>
          <SuLink href="/link2">Small link 2</SuLink>
          <SuLink href="/link3">Small link 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Medium size forced</strong></p>
        <SuLinksGroup size="md">
          <SuLink href="/link1">Medium link 1</SuLink>
          <SuLink href="/link2">Medium link 2</SuLink>
          <SuLink href="/link3">Medium link 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Large size forced</strong></p>
        <SuLinksGroup size="lg">
          <SuLink href="/link1">Large link 1</SuLink>
          <SuLink href="/link2">Large link 2</SuLink>
          <SuLink href="/link3">Large link 3</SuLink>
        </SuLinksGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- All links will be small size -->
    <SuLinksGroup size="sm">
      <SuLink href="/link1">Small link 1</SuLink>
      <SuLink href="/link2">Small link 2</SuLink>
      <SuLink href="/link3">Small link 3</SuLink>
    </SuLinksGroup>
    
    <!-- All links will be large size -->
    <SuLinksGroup size="lg">
      <SuLink href="/link1">Large link 1</SuLink>
      <SuLink href="/link2">Large link 2</SuLink>
      <SuLink href="/link3">Large link 3</SuLink>
    </SuLinksGroup>
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
        <SuLinksGroup variant="primary">
          <SuLink href="/link1">Link 1</SuLink>
          <SuLink href="/link2">Link 2</SuLink>
          <SuLink href="/link3">Link 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Secondary variant forced</strong></p>
        <SuLinksGroup variant="secondary">
          <SuLink href="/link1">Link 1</SuLink>
          <SuLink href="/link2">Link 2</SuLink>
          <SuLink href="/link3">Link 3</SuLink>
        </SuLinksGroup>
      </div>
      <div>
        <p><strong>Muted variant forced</strong></p>
        <SuLinksGroup variant="muted">
          <SuLink href="/link1">Link 1</SuLink>
          <SuLink href="/link2">Link 2</SuLink>
          <SuLink href="/link3">Link 3</SuLink>
        </SuLinksGroup>
      </div>
    </div>
  </div>
</div>

```vue
<template>
  <div>
    <!-- All links will be primary -->
    <SuLinksGroup variant="primary">
      <SuLink href="/link1">Link 1</SuLink>
      <SuLink href="/link2">Link 2</SuLink>
      <SuLink href="/link3">Link 3</SuLink>
    </SuLinksGroup>
    
    <!-- All links will be muted -->
    <SuLinksGroup variant="muted">
      <SuLink href="/link1">Link 1</SuLink>
      <SuLink href="/link2">Link 2</SuLink>
      <SuLink href="/link3">Link 3</SuLink>
    </SuLinksGroup>
  </div>
</template>
```

### Vertical direction

<div class="component-demo">
  <div class="demo-section">
    <h4>Vertical navigation</h4>
    <div class="demo-buttons">
      <SuLinksGroup direction="vertical" variant="secondary">
        <SuLink href="/dashboard">Dashboard</SuLink>
        <SuLink href="/projects">Projects</SuLink>
        <SuLink href="/team">Team</SuLink>
        <SuLink href="/settings">Settings</SuLink>
      </SuLinksGroup>
    </div>
  </div>
</div>

```vue
<template>
  <SuLinksGroup direction="vertical" variant="secondary">
    <SuLink href="/dashboard">Dashboard</SuLink>
    <SuLink href="/projects">Projects</SuLink>
    <SuLink href="/team">Team</SuLink>
    <SuLink href="/settings">Settings</SuLink>
  </SuLinksGroup>
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `'sm' \| 'md' \| 'lg' \| 'none'` | `'md'` | Spacing between links |
| `size` | `'sm' \| 'md' \| 'lg'` | `undefined` | Forced size for all links |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'muted'` | `undefined` | Forced variant for all links |
| `underline` | `'always' \| 'hover' \| 'never'` | `undefined` | Forced underline for all links |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Group direction |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Links to display in the group |

## Accessibility

The LinksGroup component follows WCAG 2.1 AA standards:

### ✅ Accessibility features

- **ARIA roles**: Support for `navigation`, `group`, etc. roles
- **Group labels**: `aria-label` to describe the group
- **Keyboard navigation**: Preserves Tab navigation between links
- **Visible focus**: Z-index management for focus visibility
- **Descriptions**: Support for `aria-describedby` for descriptions

### 🎯 Best practices

```vue
<!-- Main navigation -->
<SuLinksGroup 
  gap="lg" 
  role="navigation" 
  aria-label="Main navigation"
>
  <SuLink href="/">Home</SuLink>
  <SuLink href="/products">Products</SuLink>
  <SuLink href="/about">About</SuLink>
</SuLinksGroup>

<!-- Breadcrumb -->
<SuLinksGroup 
  gap="sm" 
  variant="muted"
  size="sm"
  role="navigation" 
  aria-label="Breadcrumb"
>
  <SuLink href="/">Home</SuLink>
  <SuLink href="/products">Products</SuLink>
  <SuLink href="/products/laptops">Laptops</SuLink>
</SuLinksGroup>

<!-- Footer links -->
<SuLinksGroup gap="md" variant="secondary" aria-label="Footer links">
  <SuLink href="/privacy">Privacy</SuLink>
  <SuLink href="/terms">Terms</SuLink>
  <SuLink href="/contact">Contact</SuLink>
</SuLinksGroup>
```