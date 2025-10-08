# Dialog

Versatile Dialog component for displaying modals (centered) or drawers (side, top/bottom, full screen). It offers complete accessibility management, focus trap, and customization options to adapt to various use cases.

## Usage examples

### Centered Modal (display="center")

<div class="component-demo">
  <div class="demo-section">
    <h4>Confirmation Modal</h4>
    <div class="demo-buttons">
      <SuButton @click="showCenterModal = true">Open Modal</SuButton>
      <SuDialog v-model:modelValue="showCenterModal" display="center" title="Confirmation" description="Do you really want to delete this item?" width="400px">
        <template #default>
          <p>This action is irreversible. Please confirm your choice.</p>
        </template>
        <template #footer>
          <SuButton variant="secondary" @click="showCenterModal = false">Cancel</SuButton>
          <SuButton variant="primary" @click="showCenterModal = false">Confirm</SuButton>
        </template>
      </SuDialog>
    </div>
  </div>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { SuDialog, SuButton } from '@surgeui/ds-vue'

const showCenterModal = ref(false)
</script>

<template>
  <SuButton @click="showCenterModal = true">Open Modal</SuButton>
  <SuDialog v-model:modelValue="showCenterModal" display="center" title="Confirmation" description="Do you really want to delete this item?" width="400px">
    <template #default>
      <p>This action is irreversible. Please confirm your choice.</p>
    </template>
    <template #footer>
      <SuButton variant="secondary" @click="showCenterModal = false">Cancel</SuButton>
      <SuButton variant="primary" @click="showCenterModal = false">Confirm</SuButton>
    </template>
  </SuDialog>
</template>
```

### Left Side Drawer (display="left")

<div class="component-demo">
  <div class="demo-section">
    <h4>Side Menu</h4>
    <div class="demo-buttons">
      <SuButton @click="showLeftDrawer = true">Open Left Drawer</SuButton>
      <SuDialog v-model:modelValue="showLeftDrawer" display="left" title="Navigation Menu" width="300px">
        <template #default>
          <SuLinksGroup direction="vertical" gap="md">
            <SuLink href="/dashboard">Dashboard</SuLink>
            <SuLink href="/profile">My Profile</SuLink>
            <SuLink href="/settings">Settings</SuLink>
            <SuLink href="/logout">Logout</SuLink>
          </SuLinksGroup>
        </template>
        <template #footer>
          <SuButton variant="outline" @click="showLeftDrawer = false">Close</SuButton>
        </template>
      </SuDialog>
    </div>
  </div>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { SuDialog, SuButton, SuLinksGroup, SuLink } from '@surgeui/ds-vue'

const showLeftDrawer = ref(false)
</script>

<template>
  <SuButton @click="showLeftDrawer = true">Open Left Drawer</SuButton>
  <SuDialog v-model:modelValue="showLeftDrawer" display="left" title="Navigation Menu" width="300px">
    <template #default>
      <SuLinksGroup direction="vertical" gap="md">
        <SuLink href="/dashboard">Dashboard</SuLink>
        <SuLink href="/profile">My Profile</SuLink>
        <SuLink href="/settings">Settings</SuLink>
        <SuLink href="/logout">Logout</SuLink>
      </SuLinksGroup>
    </template>
    <template #footer>
      <SuButton variant="outline" @click="showLeftDrawer = false">Close</SuButton>
    </template>
  </SuDialog>
</template>
```

### Right Side Drawer (display="right")

<div class="component-demo">
  <div class="demo-section">
    <h4>Product Details Panel</h4>
    <div class="demo-buttons">
      <SuButton @click="showRightDrawer = true">Open Right Drawer</SuButton>
      <SuDialog v-model:modelValue="showRightDrawer" display="right" title="Product Details" width="450px">
        <template #default>
          <h3>Product X</h3>
          <p>Detailed description of Product X. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="https://via.placeholder.com/300x200" alt="Product X" style="max-width: 100%; height: auto; margin-top: 1rem;">
        </template>
        <template #footer>
          <SuButton variant="primary" @click="showRightDrawer = false">Add to Cart</SuButton>
        </template>
      </SuDialog>
    </div>
  </div>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { SuDialog, SuButton } from '@surgeui/ds-vue'

const showRightDrawer = ref(false)
</script>

<template>
  <SuButton @click="showRightDrawer = true">Open Right Drawer</SuButton>
  <SuDialog v-model:modelValue="showRightDrawer" display="right" title="Product Details" width="450px">
    <template #default>
      <h3>Product X</h3>
      <p>Detailed description of Product X. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <img src="https://via.placeholder.com/300x200" alt="Product X" style="max-width: 100%; height: auto; margin-top: 1rem;">
    </template>
    <template #footer>
      <SuButton variant="primary" @click="showRightDrawer = false">Add to Cart</SuButton>
    </template>
  </SuDialog>
</template>
```

### Top Drawer (display="top")

<div class="component-demo">
  <div class="demo-section">
    <h4>Notification Bar</h4>
    <div class="demo-buttons">
      <SuButton @click="showTopDrawer = true">Open Top Drawer</SuButton>
      <SuDialog v-model:modelValue="showTopDrawer" display="top" title="New Notification" height="100px">
        <template #default>
          <p>You have 3 new unread messages!</p>
        </template>
        <template #footer>
          <SuButton variant="primary" @click="showTopDrawer = false">View Messages</SuButton>
        </template>
      </SuDialog>
    </div>
  </div>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { SuDialog, SuButton } from '@surgeui/ds-vue'

const showTopDrawer = ref(false)
</script>

<template>
  <SuButton @click="showTopDrawer = true">Open Top Drawer</SuButton>
  <SuDialog v-model:modelValue="showTopDrawer" display="top" title="New Notification" height="100px">
    <template #default>
      <p>You have 3 new unread messages!</p>
    </template>
    <template #footer>
      <SuButton variant="primary" @click="showTopDrawer = false">View Messages</SuButton>
    </template>
  </SuDialog>
</template>
```

### Bottom Drawer (display="bottom")

<div class="component-demo">
  <div class="demo-section">
    <h4>Quick Actions</h4>
    <div class="demo-buttons">
      <SuButton @click="showBottomDrawer = true">Open Bottom Drawer</SuButton>
      <SuDialog v-model:modelValue="showBottomDrawer" display="bottom" title="Quick Actions" height="250px">
        <template #default>
          <SuButtonsGroup direction="vertical" gap="md">
            <SuButton variant="primary">Take Photo</SuButton>
            <SuButton variant="secondary">Upload File</SuButton>
            <SuButton variant="outline">Share</SuButton>
          </SuButtonsGroup>
        </template>
        <template #footer>
          <SuButton variant="ghost" @click="showBottomDrawer = false">Close</SuButton>
        </template>
      </SuDialog>
    </div>
  </div>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { SuDialog, SuButton, SuButtonsGroup } from '@surgeui/ds-vue'

const showBottomDrawer = ref(false)
</script>

<template>
  <SuButton @click="showBottomDrawer = true">Open Bottom Drawer</SuButton>
  <SuDialog v-model:modelValue="showBottomDrawer" display="bottom" title="Quick Actions" height="250px">
    <template #default>
      <SuButtonsGroup direction="vertical" gap="md">
        <SuButton variant="primary">Take Photo</SuButton>
        <SuButton variant="secondary">Upload File</SuButton>
        <SuButton variant="outline">Share</SuButton>
      </SuButtonsGroup>
    </template>
    <template #footer>
      <SuButton variant="ghost" @click="showBottomDrawer = false">Close</SuButton>
    </template>
  </SuDialog>
</template>
```

### Full Screen (display="full")

<div class="component-demo">
  <div class="demo-section">
    <h4>Complex Form</h4>
    <div class="demo-buttons">
      <SuButton @click="showFullScreen = true">Open Full Screen</SuButton>
      <SuDialog v-model:modelValue="showFullScreen" display="full" title="Complete Registration Form">
        <template #default>
          <SuFormFields gap="lg" sectionGap="xl">
            <SuInput label="Full Name" placeholder="Your name" required />
            <SuInput type="email" label="Email" placeholder="your@example.com" required />
            <SuPassword label="Password" showProgress required />
            <SuTextarea label="Bio" placeholder="Tell us about yourself..." autoResize maxLength="500" showCounter />
            <SuFileUpload label="Profile Picture" accept="image/*" />
          </SuFormFields>
        </template>
        <template #footer>
          <SuButton variant="secondary" @click="showFullScreen = false">Cancel</SuButton>
          <SuButton variant="primary">Submit</SuButton>
        </template>
      </SuDialog>
    </div>
  </div>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { SuDialog, SuButton, SuFormFields, SuInput, SuPassword, SuTextarea, SuFileUpload } from '@surgeui/ds-vue'

const showFullScreen = ref(false)
</script>

<template>
  <SuButton @click="showFullScreen = true">Open Full Screen</SuButton>
  <SuDialog v-model:modelValue="showFullScreen" display="full" title="Complete Registration Form">
    <template #default>
      <SuFormFields gap="lg" sectionGap="xl">
        <SuInput label="Full Name" placeholder="Your name" required />
        <SuInput type="email" label="Email" placeholder="your@example.com" required />
        <SuPassword label="Password" showProgress required />
        <SuTextarea label="Bio" placeholder="Tell us about yourself..." autoResize maxLength="500" showCounter />
        <SuFileUpload label="Profile Picture" accept="image/*" />
      </SuFormFields>
    </template>
    <template #footer>
      <SuButton variant="secondary" @click="showFullScreen = false">Cancel</SuButton>
      <SuButton variant="primary">Submit</SuButton>
    </template>
  </SuDialog>
</template>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Controls the open/close state of the Dialog (used with `v-model`) |
| `display` | `'center' \| 'left' \| 'right' \| 'top' \| 'bottom' \| 'full'` | `'center'` | Display mode of the Dialog |
| `title` | `string` | `undefined` | Title of the Dialog (displayed in the `head` slot by default and for `aria-labelledby`) |
| `description` | `string` | `undefined` | Description of the Dialog (used for `aria-describedby` if `title` is not provided or if the `head` slot is used without a title) |
| `closeOnOverlayClick` | `boolean` | `true` | Allows closing the Dialog by clicking on the overlay |
| `closeOnEscape` | `boolean` | `true` | Allows closing the Dialog with the `Escape` key |
| `width` | `string` | `auto` | Custom width of the Dialog (e.g., `'500px'`, `'80%'`) |
| `height` | `string` | `auto` | Custom height of the Dialog (e.g., `'400px'`, `'90vh'`) |
| `zIndex` | `number` | `1000` | Z-index of the Dialog and its overlay |
| `disableScroll` | `boolean` | `true` | Disables page body scrolling when the Dialog is open |

### Accessibility Attributes

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabel` | `string` | `undefined` | Accessible label for the Dialog |
| `ariaLabelledBy` | `string` | `undefined` | ID of the element that labels the Dialog (takes precedence over `title`) |
| `ariaDescribedBy` | `string` | `undefined` | ID of the element that describes the Dialog (takes precedence over `description`) |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `update:modelValue` | `(value: boolean) => void` | Emitted when the open/close state changes |
| `open` | `() => void` | Emitted when the Dialog is opened |
| `close` | `() => void` | Emitted when the Dialog is closed |

### Slots

| Slot | Description |
|------|-------------|
| `head` | Content for the Dialog header (can contain a title, close button, etc.) |
| `default` | Main content of the Dialog |
| `footer` | Content for the Dialog footer (often used for action buttons) |

## Accessibility

The Dialog component is designed to comply with WCAG 2.1 AA standards:

### ✅ Accessibility Features

- **ARIA Role**: `role="dialog"` and `aria-modal="true"` to indicate to screen readers that it is a modal window.
- **Focus Management**: Implements a "focus trap" to ensure that focus remains within the Dialog when open, preventing the user from accidentally navigating outside.
- **Initial Focus**: Focus is automatically moved to the first focusable element within the Dialog upon opening.
- **Focus Restoration**: Focus is restored to the element that triggered the Dialog's opening after it closes.
- **Labels and Descriptions**: Uses `aria-labelledby` (via the `title` prop or `ariaLabelledBy`) and `aria-describedby` (via the `description` prop or `ariaDescribedBy`) to provide semantic context to screen readers.
- **Accessible Closing**: The Dialog can be closed with the `Escape` key (if `closeOnEscape` is `true`).
- **Scroll Disablement**: Page body scrolling is disabled when the Dialog is open to prevent unwanted interactions with underlying content.
- **Smooth Transitions**: Animations are designed to be smooth and respect `prefers-reduced-motion`.

### 🎯 Best Practices

- **Always provide a `title` or `ariaLabel`**: This is crucial for accessibility so that screen reader users understand the purpose of the Dialog.
- **Place primary actions in the `footer`**: This helps with UI consistency and predictability.
- **Avoid nested Dialogs**: If possible, design your UI to avoid opening one Dialog on top of another, as this can complicate focus management and user experience.

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Navigate between focusable elements inside the Dialog |
| `Shift + Tab` | Navigate between focusable elements in reverse order |
| `Escape` | Close the Dialog (if `closeOnEscape` is `true`) |

## Styling and Customization

The `Dialog` component uses CSS transitions for smooth opening and closing. The `display` prop applies specific styles to position the Dialog correctly.

- **`display="center"`**: Centered modal, with a scale animation.
- **`display="left"` / `display="right"`**: Side drawers, with a horizontal translation animation.
- **`display="top"` / `display="bottom"`**: Vertical drawers, with a vertical translation animation.
- **`display="full"`**: Full screen, with a slight scale animation.

You can customize the width (`width`) and height (`height`) for `center`, `left`, `right`, `top`, `bottom` modes. For `full` mode, the Dialog always occupies 100% of the width and height.
