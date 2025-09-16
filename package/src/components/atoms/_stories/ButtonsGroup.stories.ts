import type { Meta, StoryObj } from '@storybook/vue3'
import { PlusIcon, TrashIcon, ArrowRightIcon, CogIcon,  } from '@heroicons/vue/24/outline'
import ButtonsGroup from '../ButtonsGroup.vue'
import Button from '../Button.vue'

const meta: Meta<typeof ButtonsGroup> = {
  title: 'Atoms/ButtonsGroup',
  component: ButtonsGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Composant ButtonsGroup pour organiser et aligner des boutons avec un espacement contrôlé. Supporte la propagation des props size et variant aux boutons enfants.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'none'],
      description: 'Espacement entre les boutons'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Taille forcée pour tous les boutons'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Variante forcée pour tous les boutons'
    },
    ariaLabel: {
      control: 'text',
      description: 'Label accessible pour le groupe'
    },
    role: {
      control: 'text',
      description: 'Rôle ARIA personnalisé'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ButtonsGroup, Button },
    template: `
      <ButtonsGroup>
        <Button>Premier</Button>
        <Button>Deuxième</Button>
        <Button>Troisième</Button>
      </ButtonsGroup>
    `
  })
}

export const WithGaps: Story = {
  render: () => ({
    components: { ButtonsGroup, Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Gap Small</h4>
          <ButtonsGroup gap="sm">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Gap Medium (défaut)</h4>
          <ButtonsGroup gap="md">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Gap Large</h4>
          <ButtonsGroup gap="lg">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Gap None (connecté)</h4>
          <ButtonsGroup gap="none">
            <Button>Premier</Button>
            <Button>Milieu</Button>
            <Button>Dernier</Button>
          </ButtonsGroup>
        </div>
      </div>
    `
  })
}

export const ConnectedButtons: Story = {
  render: (args) => ({
    components: { ButtonsGroup, Button },
    setup() {
      return { args, PlusIcon, CogIcon, TrashIcon }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Boutons connectés - Primary</h4>
          <ButtonsGroup gap="none" variant="primary">
            <Button>Gauche</Button>
            <Button>Centre</Button>
            <Button>Droite</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Boutons connectés - Outline</h4>
          <ButtonsGroup gap="none" variant="outline">
            <Button>Option A</Button>
            <Button>Option B</Button>
            <Button>Option C</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Avec icônes</h4>
          <ButtonsGroup gap="none" variant="secondary">
            <Button :icon="PlusIcon" iconDisplay="only" aria-label="Ajouter" />
            <Button :icon="CogIcon" iconDisplay="only" aria-label="Paramètres" />
            <Button :icon="TrashIcon" iconDisplay="only" aria-label="Supprimer" />
          </ButtonsGroup>
        </div>
      </div>
    `
  })
}

export const ForcedSize: Story = {
  render: () => ({
    components: { ButtonsGroup, Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Taille Small forcée</h4>
          <ButtonsGroup size="sm">
            <Button>Petit 1</Button>
            <Button>Petit 2</Button>
            <Button>Petit 3</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Taille Medium forcée</h4>
          <ButtonsGroup size="md">
            <Button>Moyen 1</Button>
            <Button>Moyen 2</Button>
            <Button>Moyen 3</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Taille Large forcée</h4>
          <ButtonsGroup size="lg">
            <Button>Grand 1</Button>
            <Button>Grand 2</Button>
            <Button>Grand 3</Button>
          </ButtonsGroup>
        </div>
      </div>
    `
  })
}

export const ForcedVariant: Story = {
  render: () => ({
    components: { ButtonsGroup, Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Variante Primary forcée</h4>
          <ButtonsGroup variant="primary">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Variante Secondary forcée</h4>
          <ButtonsGroup variant="secondary">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Variante Outline forcée</h4>
          <ButtonsGroup variant="outline">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Variante Ghost forcée</h4>
          <ButtonsGroup variant="ghost">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </ButtonsGroup>
        </div>
      </div>
    `
  })
}

export const CombinedProps: Story = {
  render: () => ({
    components: { ButtonsGroup, Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Small + Primary + Connected</h4>
          <ButtonsGroup gap="none" size="sm" variant="primary">
            <Button>Gauche</Button>
            <Button>Centre</Button>
            <Button>Droite</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Large + Outline + Gap Medium</h4>
          <ButtonsGroup gap="md" size="lg" variant="outline">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
            <Button>Action 3</Button>
          </ButtonsGroup>
        </div>
      </div>
    `
  })
}

export const ActionGroups: Story = {
  render: () => ({
    components: { ButtonsGroup, Button },
    setup() {
      return { PlusIcon, CogIcon, TrashIcon, ArrowRightIcon }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Actions CRUD</h4>
          <ButtonsGroup gap="sm">
            <Button variant="primary" :icon="PlusIcon" iconDisplay="left">Créer</Button>
            <Button variant="secondary" :icon="CogIcon" iconDisplay="left">Modifier</Button>
            <Button variant="outline" :icon="TrashIcon" iconDisplay="left">Supprimer</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Navigation</h4>
          <ButtonsGroup gap="none" variant="outline">
            <Button>Précédent</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button :icon="ArrowRightIcon" iconDisplay="right">Suivant</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Toolbar d'icônes</h4>
          <ButtonsGroup gap="none" variant="ghost" size="sm">
            <Button :icon="PlusIcon" iconDisplay="only" aria-label="Ajouter" />
            <Button :icon="CogIcon" iconDisplay="only" aria-label="Paramètres" />
            <Button :icon="TrashIcon" iconDisplay="only" aria-label="Supprimer" />
          </ButtonsGroup>
        </div>
      </div>
    `
  })
}

export const WithAccessibility: Story = {
  render: () => ({
    components: { ButtonsGroup, Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Groupe avec rôle toolbar</h4>
          <ButtonsGroup 
            gap="sm" 
            role="toolbar" 
            aria-label="Actions de formatage"
          >
            <Button aria-label="Gras">B</Button>
            <Button aria-label="Italique">I</Button>
            <Button aria-label="Souligné">U</Button>
          </ButtonsGroup>
        </div>
        
        <div>
          <h4 style="margin-bottom: 0.5rem;">Groupe de navigation</h4>
          <ButtonsGroup 
            gap="none" 
            variant="outline"
            role="group" 
            aria-label="Navigation par pages"
          >
            <Button>Page 1</Button>
            <Button>Page 2</Button>
            <Button>Page 3</Button>
          </ButtonsGroup>
        </div>
      </div>
    `
  })
}