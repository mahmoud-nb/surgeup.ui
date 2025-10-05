# ⚠️ Note sur le composant Password

## 🐛 Problème identifié

Les pages de documentation du composant Password (`docs/components/password.md` et `docs/en/components/password.md`) causent des **erreurs SSR (Server-Side Rendering)** lors du build VitePress.

### Erreur rencontrée :

```
Cannot destructure property 'validation' of 'undefined' as it is undefined.
```

## 🔍 Cause du problème

Le composant Password utilise un slot avec des propriétés (`validation`, `details`) qui ne sont pas correctement initialisées lors du rendu côté serveur (SSR).

Exemple problématique :

```vue
<SuPassword>
  <template #default="{ validation, details }">
    {{ validation.isValid ? 'Valide' : 'Invalide' }}
  </template>
</SuPassword>
```

En SSR, `validation` est `undefined`, ce qui cause l'erreur lors de la destructuration.

## ✅ Solutions possibles

### Solution 1 : Désactiver SSR pour la page (Temporaire)

Ajouter le frontmatter YAML en haut des fichiers `password.md` :

```markdown
---
ssr: false
---

# Password
...
```

**Problème :** VitePress ne respecte pas toujours ce paramètre selon la configuration.

### Solution 2 : Utiliser ClientOnly (Recommandé)

Envelopper les composants Password dans un wrapper `ClientOnly` :

```vue
<ClientOnly>
  <SuPassword>
    <template #default="{ validation }">
      {{ validation?.isValid ? 'Valide' : 'Invalide' }}
    </template>
  </SuPassword>
</ClientOnly>
```

### Solution 3 : Corriger le composant Password (Meilleure solution)

Modifier le composant Password pour gérer le SSR :

```typescript
// Dans Password.vue
const validation = computed(() => {
  // Vérifier si on est côté client
  if (typeof window === 'undefined') {
    return {
      isValid: false,
      score: 0,
      satisfied: [],
      unsatisfied: [],
      details: {}
    }
  }

  // Logique normale
  // ...
})
```

## 📊 Impact actuel

**État actuel :** Les pages Password sont présentes mais peuvent causer des erreurs de build.

**Workaround appliqué :**
- Le build fonctionne actuellement
- Si les erreurs reviennent, les pages devront être désactivées temporairement

## 🔧 Pour réactiver les pages Password

### Étape 1 : Tester localement

```bash
npm run build:docs
```

### Étape 2 : Si erreur SSR

Ajouter le frontmatter :

```bash
# docs/components/password.md
---
ssr: false
---

# Password
...
```

```bash
# docs/en/components/password.md
---
ssr: false
---

# Password
...
```

### Étape 3 : Rebuild et vérifier

```bash
npm run build:docs
```

### Étape 4 : Si toujours en erreur

Désactiver temporairement les pages :

```bash
mv docs/components/password.md docs/components/password.md.disabled
mv docs/en/components/password.md docs/en/components/password.md.disabled
```

## 🎯 TODO : Correction permanente

Pour corriger définitivement ce problème :

1. **Corriger le composant Password** pour gérer le SSR
   - Ajouter des valeurs par défaut pour SSR
   - Vérifier `typeof window !== 'undefined'`
   - Initialiser `validation` avec des valeurs sûres

2. **Corriger les exemples de documentation**
   - Utiliser l'optional chaining : `validation?.isValid`
   - Envelopper dans `<ClientOnly>` si nécessaire
   - Fournir des valeurs de fallback

3. **Tester le build SSR**
   - Vérifier que le build fonctionne
   - Tester les pages dans le navigateur
   - Vérifier qu'il n'y a pas d'hydratation mismatch

## 📝 Notes techniques

### Pourquoi VitePress fait du SSR ?

VitePress génère des fichiers HTML statiques en faisant du rendu côté serveur pour :
- Améliorer le SEO
- Accélérer le chargement initial
- Fournir du contenu sans JavaScript

### Pourquoi le composant Password pose problème ?

Le composant Password :
1. Utilise des refs et computed qui nécessitent le DOM
2. Expose des propriétés via slots qui peuvent être undefined en SSR
3. N'a pas de valeurs par défaut pour le SSR

### Comment d'autres composants évitent ce problème ?

Les autres composants (Button, Input, etc.) :
- Ont des valeurs par défaut simples
- N'utilisent pas de slots complexes avec état
- Sont plus "statiques" et SSR-friendly

## 🔗 Références

- [VitePress SSR Configuration](https://vitepress.dev/guide/ssr-compat)
- [Vue SSR Guide](https://vuejs.org/guide/scaling-up/ssr.html)
- [ClientOnly Component](https://vitepress.dev/guide/using-vue#clientonly)

## ✅ Statut actuel

- [x] Build fonctionne sans les pages Password
- [ ] Composant Password corrigé pour SSR
- [ ] Pages Password réactivées
- [ ] Tests SSR passent
