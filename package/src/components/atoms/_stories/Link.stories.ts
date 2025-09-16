import type { Meta, StoryObj } from '@storybook/vue3'
import { ArrowTopRightOnSquareIcon, HomeIcon, UserIcon, CogIcon } from '@heroicons/vue/24/outline'
import Link from '../Link.vue'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant Link flexible pour les liens internes et externes avec support des icônes, variantes et accessibilité complète.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'URL de destination (liens externes)'
    },
    to: {
      control: 'text',
      description: 'Route de destination (Vue Router)'
    },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_self', '_parent', '_top'],
      description: 'Cible du lien'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'muted'],
      description: 'Variante visuelle du lien'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille du lien'
    },
    underline: {
      control: { type: 'select' },
      options: ['always', 'hover', 'never'],
      description: 'Comportement du soulignement'
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive le lien'
    },
    external: {
      control: 'boolean',
      description: 'Marque le lien comme externe'
    },
    icon: {
      control: false,
      description: 'Icône à afficher'
    },
    iconDisplay: {
      control: { type: 'select' },
      options: ['left', 'right', 'only'],
      description: 'Position de l\'icône'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: '<Link v-bind="args">Lien par défaut</Link>'
  })
}

export const External: Story = {
  args: {
    href: 'https://vuejs.org',
    external: true
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: '<Link v-bind="args">Site officiel Vue.js</Link>'
  })
}

export const WithIcon: Story = {
  args: {
    href: '/home',
    icon: HomeIcon,
    iconDisplay: 'left'
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args, HomeIcon }
    },
    template: '<Link v-bind="args" :icon="HomeIcon">Accueil</Link>'
  })
}

export const IconOnly: Story = {
  args: {
    href: '/profile',
    icon: UserIcon,
    iconDisplay: 'only',
    ariaLabel: 'Profil utilisateur'
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args, UserIcon }
    },
    template: '<Link v-bind="args" :icon="UserIcon" />'
  })
}

export const Variants: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <Link variant="default" href="#">Lien par défaut</Link>
        <Link variant="primary" href="#">Lien primaire</Link>
        <Link variant="secondary" href="#">Lien secondaire</Link>
        <Link variant="muted" href="#">Lien discret</Link>
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Link size="sm" href="#">Small</Link>
        <Link size="md" href="#">Medium</Link>
        <Link size="lg" href="#">Large</Link>
      </div>
    `
  })
}

export const Underlines: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <Link underline="always" href="#">Toujours souligné</Link>
        <Link underline="hover" href="#">Souligné au survol</Link>
        <Link underline="never" href="#">Jamais souligné</Link>
      </div>
    `
  })
}

export const Disabled: Story = {
  args: {
    href: '#',
    disabled: true
  },
  render: (args) => ({
    components: { Link },
    setup() {
      return { args }
    },
    template: '<Link v-bind="args">Lien désactivé</Link>'
  })
}

export const Navigation: Story = {
  render: () => ({
    components: { Link },
    setup() {
      return { HomeIcon, UserIcon, CogIcon }
    },
    template: `
      <nav style="display: flex; gap: 2rem;">
        <Link href="/" :icon="HomeIcon" iconDisplay="left">Accueil</Link>
        <Link href="/profile" :icon="UserIcon" iconDisplay="left">Profil</Link>
        <Link href="/settings" :icon="CogIcon" iconDisplay="left">Paramètres</Link>
      </nav>
    `
  })
}

export const ExternalLinks: Story = {
  render: () => ({
    components: { Link },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <Link href="https://vuejs.org" external>Documentation Vue.js</Link>
        <Link href="https://github.com/vuejs/vue" external variant="secondary">Code source Vue</Link>
        <Link href="mailto:contact@example.com" external variant="muted">Nous contacter</Link>
      </div>
    `
  })
}