/**
 * Utilitaires pour l'accessibilité
 */

/**
 * Génère un ID unique pour les éléments
 */
let idCounter = 0
export function generateId(prefix: string = 'su'): string {
  return `${prefix}-${++idCounter}-${Date.now().toString(36)}`
}

/**
 * Vérifie si un élément est focusable
 */
export function isFocusable(element: HTMLElement): boolean {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])'
  ]
  
  return focusableSelectors.some(selector => element.matches(selector))
}

/**
 * Gère le focus trap dans un conteneur
 */
export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = container.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>
  
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }
  }
  
  container.addEventListener('keydown', handleKeydown)
  
  // Focus le premier élément
  firstElement?.focus()
  
  // Retourne une fonction de nettoyage
  return () => {
    container.removeEventListener('keydown', handleKeydown)
  }
}

/**
 * Annonce un message aux lecteurs d'écran
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  // Supprime l'élément après l'annonce
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Vérifie si les animations sont réduites
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Vérifie si le mode de contraste élevé est activé
 */
export function prefersHighContrast(): boolean {
  return window.matchMedia('(prefers-contrast: high)').matches
}

/**
 * Calcule le ratio de contraste entre deux couleurs
 */
export function getContrastRatio(_color1: string, _color2: string): number {
  // Implémentation simplifiée - dans un vrai projet, utiliser une librairie comme chroma-js
  // Cette fonction devrait calculer le vrai ratio de contraste WCAG
  return 4.5 // Placeholder
}

/**
 * Valide qu'un ratio de contraste respecte WCAG
 */
export function isContrastValid(ratio: number, level: 'AA' | 'AAA' = 'AA'): boolean {
  const minRatio = level === 'AAA' ? 7 : 4.5
  return ratio >= minRatio
}