/**
 * Composable pour générer des IDs uniques
 */

let idCounter = 0

export function useId(prefix: string = 'su'): string {
  return `${prefix}-${++idCounter}-${Date.now().toString(36)}`
}