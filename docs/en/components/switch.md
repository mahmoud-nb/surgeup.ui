# Switch

Switch component for on/off toggle actions. Compliant with W3C standards with complete accessibility support and intelligent label positioning.

## Usage examples

### Basic Switch

<div class="component-demo">
  <div class="demo-section">
    <h4>Simple switch</h4>
    <div class="demo-inputs">
      <SuSwitch 
        label="Notifications"
        message="Enable push notifications"
      />
    </div>
  </div>
</div>

```vue
<script setup>
const notifications = ref(false)
</script>

<template>
  <SuSwitch 
    label="Notifications"
    message="Enable push notifications"
    v-model="notifications"
  />
</template>
```

### Switch with side labels

<div class="component-demo">
  <div class="demo-section">
    <h4>With single label (aligned beside)</h4>
    <div class="demo-inputs">
      <SuSwitch 
        label="Dark mode"
        rightLabel="Enabled"
        message="Switch to dark theme"
      />
    </div>
  </div>
</div>

```vue
<template>
  <SuSwitch 
    label="Dark mode"
    rightLabel="Enabled"
    message="Switch to dark theme"
    v-model="darkMode"
  />
</template>
```

### Switch with labels on both sides

<div class="component-demo">
  <div class="demo-section">
    <h4>With left and right labels (centered)</h4>
    <div class="demo-inputs">
      <SuSwitch 
        label="Profile visibility"
        leftLabel="Private"
        rightLabel="Public"
        message="Control who can see your profile"
      />
    </div>
  </div>
</div>

```vue
<template>
  <SuSwitch 
    label="Profile visibility"
    leftLabel="Private"
    rightLabel="Public"
    message="Control who can see your profile"
    v-model="isPublic"
  />
</template>
```

### Sizes

<div class="component-demo">
  <div class="demo-section">
    <h4>Available sizes</h4>
    <div class="demo-inputs">
      <SuSwitch 
        size="sm"
        label="Small"
        rightLabel="Small"
      />
      <SuSwitch 
        size="md"
        label="Medium"
        rightLabel="Medium"
      />
      <SuSwitch 
        size="lg"
        label="Large"
        rightLabel="Large"
      />
    </div>
  </div>
</div>

```vue
<template>
  <SuSwitch size="sm" label="Small" rightLabel="Small" />
  <SuSwitch size="md" label="Medium" rightLabel="Medium" />
  <SuSwitch size="lg" label="Large" rightLabel="Large" />
</template>
```

### States and validation

<div class="component-demo">
  <div class="demo-section">
    <h4>Validation states</h4>
    <div class="demo-inputs">
      <SuSwitch 
        label="Default state"
        rightLabel="Normal"
        message="Normal operation"
      />
      <SuSwitch 
        state="error"
        label="Error state"
        rightLabel="Error"
        message="An error occurred"
        :value="true"
      />
      <SuSwitch 
        state="success"
        label="Success state"
        rightLabel="Success"
        message="Configuration saved!"
        :value="true"
      />
      <SuSwitch 
        state="warning"
        label="Warning state"
        rightLabel="Warning"
        message="This action requires confirmation"
        :value="true"
      />
    </div>
  </div>
</div>

```vue
<template>
  <SuSwitch 
    state="default"
    label="Default state"
    message="Normal operation"
  />
  <SuSwitch 
    state="error"
    label="Error state"
    message="An error occurred"
  />
  <SuSwitch 
    state="success"
    label="Success state"
    message="Configuration saved!"
  />
  <SuSwitch 
    state="warning"
    label="Warning state"
    message="This action requires confirmation"
  />
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `boolean` | `false` | Switch state (on/off) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Switch size |
| `state` | `'default' \| 'error' \| 'success' \| 'warning'` | `'default'` | Switch visual state |
| `disabled` | `boolean` | `false` | Disable the switch |
| `readonly` | `boolean` | `false` | Read-only switch |
| `required` | `boolean` | `false` | Required field |
| `label` | `string` | `undefined` | Main switch label |
| `leftLabel` | `string` | `undefined` | Label displayed to the left of switch |
| `rightLabel` | `string` | `undefined` | Label displayed to the right of switch |
| `message` | `string` | `undefined` | Displayed message |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `@update:modelValue` | `(value: boolean) => void` | Emitted when state changes (v-model) |
| `@change` | `(value: boolean) => void` | Emitted on change |
| `@focus` | `(event: FocusEvent) => void` | Emitted on focus |
| `@blur` | `(event: FocusEvent) => void` | Emitted on blur |
| `@keydown` | `(event: KeyboardEvent) => void` | Emitted on key press |

## Label positioning

The Switch component automatically adapts positioning based on provided labels:

### 🎯 Positioning logic

- **No side label**: Switch aligned to the left
- **Single label** (`leftLabel` OR `rightLabel`): Switch aligned next to label
- **Two labels** (`leftLabel` AND `rightLabel`): Switch centered between labels

```vue
<!-- Switch to the left -->
<SuSwitch label="Notifications" />

<!-- Switch next to label -->
<SuSwitch label="Dark mode" rightLabel="Enabled" />

<!-- Switch centered -->
<SuSwitch label="Visibility" leftLabel="Private" rightLabel="Public" />
```

## Accessibility

The Switch component follows WCAG 2.1 AA standards and W3C best practices:

### ✅ Accessibility features

- **ARIA role**: `role="switch"` with `aria-checked`
- **Keyboard navigation**: Support for Space and Enter keys
- **Associated labels**: Each switch has a properly associated label
- **State messages**: Messages with `aria-live` for screen readers
- **Color contrast**: WCAG AA compliant contrast ratios (4.5:1 minimum)
- **Visible focus**: Clear and contrasted focus indicator
- **Minimum sizes**: Respects minimum touch target sizes (44px)
- **Dark mode**: Automatically adapted contrast
- **High contrast**: Support for `prefers-contrast: high`
- **Reduced motion**: Respects `prefers-reduced-motion`

### 🎯 Best practices

```vue
<!-- Switch with complete accessibility -->
<SuSwitch 
  label="Push notifications"
  rightLabel="Enabled"
  :required="true"
  message="Receive real-time notifications"
  ariaLabel="Enable push notifications"
  v-model="pushNotifications"
/>

<!-- Switch with error handling -->
<SuSwitch 
  label="Synchronization"
  leftLabel="Disabled"
  rightLabel="Enabled"
  :state="hasError ? 'error' : 'default'"
  :message="hasError ? 'Synchronization error' : 'Automatic data synchronization'"
  v-model="syncEnabled"
/>

<!-- Switch with validation -->
<SuSwitch 
  label="Accept terms"
  rightLabel="I accept"
  :required="true"
  :state="!termsAccepted ? 'error' : 'success'"
  :message="!termsAccepted ? 'You must accept the terms' : 'Terms accepted'"
  v-model="termsAccepted"
/>
```

## Keyboard navigation

| Key | Action |
|-----|--------|
| `Tab` | Navigate to/from switch |
| `Space` | Toggle switch state |
| `Enter` | Toggle switch state |

## Advanced usage examples

### Settings panel

```vue
<script setup>
import { ref } from 'vue'

const settings = ref({
  notifications: true,
  darkMode: false,
  autoSave: true,
  publicProfile: false,
  emailUpdates: true
})
</script>

<template>
  <div class="settings-panel">
    <h2>Settings</h2>
    
    <div class="settings-group">
      <h3>Interface</h3>
      <SuSwitch 
        label="Dark mode"
        leftLabel="Light"
        rightLabel="Dark"
        message="Switch between light and dark themes"
        v-model="settings.darkMode"
      />
      <SuSwitch 
        label="Auto save"
        rightLabel="Enabled"
        message="Automatically save your changes"
        v-model="settings.autoSave"
      />
    </div>
    
    <div class="settings-group">
      <h3>Privacy</h3>
      <SuSwitch 
        label="Public profile"
        leftLabel="Private"
        rightLabel="Public"
        message="Control your profile visibility"
        v-model="settings.publicProfile"
      />
    </div>
    
    <div class="settings-group">
      <h3>Notifications</h3>
      <SuSwitch 
        label="Push notifications"
        rightLabel="Enabled"
        message="Receive real-time notifications"
        v-model="settings.notifications"
      />
      <SuSwitch 
        label="Email updates"
        rightLabel="Enabled"
        message="Receive news by email"
        v-model="settings.emailUpdates"
      />
    </div>
  </div>
</template>

<style scoped>
.settings-panel {
  max-width: 500px;
  margin: 0 auto;
}

.settings-group {
  margin-bottom: 2rem;
}

.settings-group h3 {
  margin-bottom: 1rem;
  color: #374151;
  font-weight: 600;
}

.settings-group > * + * {
  margin-top: 1rem;
}
</style>
```