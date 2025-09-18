# Input

Flexible Input component with complete HTML type support, prefixes/suffixes, text alignment, RTL/LTR direction and accessibility according to W3C standards.

## Usage examples

### Input types

<div class="component-demo">
  <div class="demo-section">
    <h4>Supported input types</h4>
    <div class="demo-inputs">
      <SuInput type="text" label="Text" placeholder="Enter text" />
      <SuInput type="email" label="Email" placeholder="name@example.com" />
      <SuInput type="password" label="Password" placeholder="••••••••" />
      <SuInput type="number" label="Number" placeholder="123" />
      <SuInput type="tel" label="Phone" placeholder="+1 234 567 8900" />
      <SuInput type="url" label="URL" placeholder="https://example.com" />
      <SuInput type="search" label="Search" placeholder="Search..." />
      <SuInput type="date" label="Date" />
    </div>
  </div>
</div>

```vue
<template>
  <SuInput type="text" label="Text" placeholder="Enter text" />
  <SuInput type="email" label="Email" placeholder="name@example.com" />
  <SuInput type="password" label="Password" placeholder="••••••••" />
  <SuInput type="number" label="Number" placeholder="123" />
  <SuInput type="tel" label="Phone" placeholder="+1 234 567 8900" />
  <SuInput type="url" label="URL" placeholder="https://example.com" />
  <SuInput type="search" label="Search" placeholder="Search..." />
  <SuInput type="date" label="Date" />
</template>
```

### Prefixes and suffixes

<div class="component-demo">
  <div class="demo-section">
    <h4>Text prefixes and suffixes</h4>
    <div class="demo-inputs">
      <SuInput label="Price" placeholder="0.00" suffix="$" type="number" />
      <SuInput label="Email" placeholder="name" suffix="@company.com" />
      <SuInput label="Website" placeholder="mysite" prefix="https://" suffix=".com" />
      <SuInput label="Phone" placeholder="123456789" prefix="+1" />
    </div>
  </div>
</div>

```vue
<template>
  <SuInput label="Price" placeholder="0.00" suffix="$" type="number" />
  <SuInput label="Email" placeholder="name" suffix="@company.com" />
  <SuInput label="Website" placeholder="mysite" prefix="https://" suffix=".com" />
  <SuInput label="Phone" placeholder="123456789" prefix="+1" />
</template>
```

### Prefixes and suffixes with icons

<div class="component-demo">
  <div class="demo-section">
    <h4>Prefixes and suffixes with icons</h4>
    <div class="demo-inputs">
      <SuInput label="Search" placeholder="Search..." :prefixIcon="MagnifyingGlassIcon" />
      <SuInput label="Email" placeholder="your@email.com" :prefixIcon="AtSymbolIcon" />
      <SuInput label="Password" placeholder="••••••••" type="password" :prefixIcon="LockClosedIcon" />
      <SuInput label="User" placeholder="Username" :prefixIcon="UserIcon" />
    </div>
  </div>
</div>

```vue
<script setup>
import { 
  MagnifyingGlassIcon, 
  AtSymbolIcon, 
  LockClosedIcon, 
  UserIcon 
} from '@heroicons/vue/24/outline'
</script>

<template>
  <SuInput label="Search" placeholder="Search..." :prefixIcon="MagnifyingGlassIcon" />
  <SuInput label="Email" placeholder="your@email.com" :prefixIcon="AtSymbolIcon" />
  <SuInput label="Password" placeholder="••••••••" type="password" :prefixIcon="LockClosedIcon" />
  <SuInput label="User" placeholder="Username" :prefixIcon="UserIcon" />
</template>
```

### Sizes

<div class="component-demo">
  <div class="demo-section">
    <h4>Available sizes</h4>
    <div class="demo-inputs">
      <SuInput size="sm" label="Small" placeholder="Small input" />
      <SuInput size="md" label="Medium" placeholder="Medium input" />
      <SuInput size="lg" label="Large" placeholder="Large input" />
    </div>
  </div>
</div>

```vue
<template>
  <SuInput size="sm" label="Small" placeholder="Small input" />
  <SuInput size="md" label="Medium" placeholder="Medium input" />
  <SuInput size="lg" label="Large" placeholder="Large input" />
</template>
```

### States and validation

<div class="component-demo">
  <div class="demo-section">
    <h4>Validation states</h4>
    <div class="demo-inputs">
      <SuInput 
        label="Default state" 
        placeholder="Enter text"
        message="Help text to guide the user"
      />
      <SuInput 
        state="error"
        label="Error state" 
        placeholder="Enter text"
        message="This field contains an error"
        value="incorrect value"
      />
      <SuInput 
        state="success"
        label="Success state" 
        placeholder="Enter text"
        message="Valid value!"
        value="correct value"
      />
      <SuInput 
        state="warning"
        label="Warning state" 
        placeholder="Enter text"
        message="Be careful with this value"
        value="warning"
      />
    </div>
  </div>
</div>

```vue
<template>
  <SuInput 
    label="Default state" 
    placeholder="Enter text"
    message="Help text to guide the user"
  />
  <SuInput 
    state="error"
    label="Error state" 
    placeholder="Enter text"
    message="This field contains an error"
  />
  <SuInput 
    state="success"
    label="Success state" 
    placeholder="Enter text"
    message="Valid value!"
  />
  <SuInput 
    state="warning"
    label="Warning state" 
    placeholder="Enter text"
    message="Be careful with this value"
  />
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `InputType` | `'text'` | HTML input type |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Input visual state |
| `disabled` | `boolean` | `false` | Disable the input |
| `readonly` | `boolean` | `false` | Read-only input |
| `required` | `boolean` | `false` | Required field |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `value` | `string \| number` | `undefined` | Input value |
| `prefix` | `string` | `undefined` | Text prefix |
| `suffix` | `string` | `undefined` | Text suffix |
| `prefixIcon` | `Component` | `undefined` | Prefix icon |
| `suffixIcon` | `Component` | `undefined` | Suffix icon |
| `textAlign` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `dir` | `'ltr' \| 'rtl' \| 'auto'` | `'auto'` | Text direction |
| `label` | `string` | `undefined` | Input label |
| `message` | `string` | `undefined` | Additional message |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `@update:modelValue` | `(value: string \| number) => void` | Emitted when value changes (v-model) |
| `@input` | `(event: Event) => void` | Emitted on input |
| `@change` | `(event: Event) => void` | Emitted on change |
| `@focus` | `(event: FocusEvent) => void` | Emitted on focus |
| `@blur` | `(event: FocusEvent) => void` | Emitted on blur |
| `@keydown` | `(event: KeyboardEvent) => void` | Emitted on key press |
| `@keyup` | `(event: KeyboardEvent) => void` | Emitted on key release |
| `@prefix-click` | `(event: MouseEvent) => void` | Emitted when prefix is clicked |
| `@prefix-icon-click` | `(event: MouseEvent) => void` | Emitted when prefix icon is clicked |
| `@suffix-click` | `(event: MouseEvent) => void` | Emitted when suffix is clicked |
| `@suffix-icon-click` | `(event: MouseEvent) => void` | Emitted when suffix icon is clicked |

## Accessibility

The Input component follows WCAG 2.1 AA standards and W3C best practices:

### ✅ Accessibility features

- **Associated labels**: Each input has a properly associated label via `for`/`id`
- **ARIA attributes**: Complete support for ARIA attributes
- **State messages**: Error/success/warning messages with `aria-live`
- **Color contrast**: WCAG AA compliant contrast ratios (4.5:1 minimum)
- **Visible focus**: Clear and contrasted focus indicator
- **Minimum sizes**: Respects minimum touch target sizes
- **RTL support**: Complete support for right-to-left languages
- **Dark mode**: Adapted contrast in dark mode
- **High contrast**: Support for `prefers-contrast: high`
- **Reduced motion**: Respects `prefers-reduced-motion`

### 🎯 Best practices

```vue
<!-- Input with validation and accessibility -->
<SuInput 
  type="email"
  label="Email address"
  :required="true"
  placeholder="name@example.com"
  message="Used for login and notifications"
  autocomplete="email"
  v-model="email"
/>

<!-- Input with error handling -->
<SuInput 
  type="password"
  label="Password"
  :required="true"
  :state="hasError ? 'error' : 'default'"
  :message="hasError ? 'Password must contain at least 8 characters' : undefined"
  :minLength="8"
  autocomplete="new-password"
  v-model="password"
/>
```