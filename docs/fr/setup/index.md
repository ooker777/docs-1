---
title: Plugin inclus
share: true
---

Le fichier `mkdocs.yml` contient également la configuration de [Mkdocs Plugin](https://www.mkdocs.org/dev-guide/plugins/). Si vous ajoutez le plugin, vous **devez** l'ajouter à votre `requirements.txt` car la build l'utilise pour construire le blog.

J'ai inclus :
- [Ezlinks (from mkdocs-ezlinked-plugin)](https://pypi.org/project/mkdocs-ezlinked-plugin/) : to support directly wikilinks
- [Mermaid2](https://github.com/fralau/mkdocs-mermaid2-plugin)
- [Awesome pages](https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin)
- [Tooltipster-links (from mkdocs-preview-links-plugin)](https://github.com/Mara-Li/mkdocs-preview-links-plugin)
- [Embed File](https://github.com/Mara-Li/mkdocs_embed_file_plugins), to support embedding file as in Obsidian (with the `![](file)` or `![[file]]` syntax)
- [Git revision date localized](https://github.com/timvink/mkdocs-git-revision-date-localized-plugin), to add a date listing 
- [Mkdocs Simple Hooks](https://pypi.org/project/mkdocs-simple-hooks/), to allow creating simple python script for mkdocs (including jinja template editing!). 
- [Mkdocs Encrypt Contents](https://github.com/CoinK0in/mkdocs-encryptcontent-plugin) will allow you to "hide" file in the site. [[Template/snippets and tools#Page encrypted|See here]] for more information.
- [Mkdocs Callout](https://pypi.org/project/mkdocs-callouts/)
- [Custom tags attributes](https://pypi.org/project/mkdocs-custom-tags-attributes/)

> [!info] Superfences & dataviewjs
> Vous remarquerez que j'ai ajouté une [`custom fences`](https://facelessuser.github.io/pymdown-extensions/extensions/superfences/) pour dataviewjs. Désolé, dataviewjs n'est pas encore supporté par mkdocs ni Obsidian Publisher. Ce "custom fence" cachera tous les blocs dataviewjs. 
> Elle empêchera donc l'affichage de blocs étranges dans votre fichier markdown. Si vous avez besoin de l'afficher comme du code, changez le langage (comme `js` par exemple).

