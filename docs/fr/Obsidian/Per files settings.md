---
title: Paramètre par fichier
---

## En utilisant des objets YAML

```yaml
links:
  mdlinks: boolean #converti en lien markdown
  convert: boolean #transforme les liens en simple string et ne conserve que leur texte alt ou le titre/file name (cela retire le [[]]/[]())
embed:
  send: boolean #empêche l'envoie des notes transcluent
  remove: boolean #supprime les citations de note totalement en supprimant entièrement le ![[]] ou ![]() 
attachment: 
  send: boolean #empêche l'envoie des pièces-jointes
  folder: string #change le dossier par défaut
dataview: boolean #permet d'empêcher ou autorise la conversion des dataviews queries
hardbreak: boolean #écrase le paramètres pour les hard space en markdown.
```

## En utilisant les noms simples

```yaml
links: boolean #transforme les liens en simple string et ne conserve que leur texte alt ou le titre/file name (cela retire le [[]]/[]())
mdlinks: boolean #converti en lien markdown
embed: boolean #empêche l'envoie des notes transcluent
removeEmbed: boolean #supprime les citations de note totalement en supprimant entièrement le ![[]] ou ![]()
attachmentLinks: string #change le dossier des pièces-jointes par défaut
attachment: boolean #empêche l'envoie des pièces-jointes
dataview: boolean #permet d'empêcher ou autorise la conversion des dataviews queries
hardbreak: boolean #écrase le paramètres pour les hard space en markdown.
```

Les valeurs par défauts sont dérivés de vos paramètres (`settings.clé` se réfère à eux)

```yaml
links:
  mdlinks: settings.wikilinks
  convert: true
embed: 
  send: settings.embed
  remove: false
attachment:
  send: settings.attachment
  folder: settings.default_folder_image || settings.default_folder || filepath
dataview: settings.dataview
hardbreak: settings.hardbreak

