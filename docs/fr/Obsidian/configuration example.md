---
share: true
title: Exemple de configuration
---

## [Mkdocs Publisher](https://obsidian-publisher.netlify.app)
### Tutoriel pour une installation rapide !
1. Cliquer sur ["use this template"](https://github.com/obsidianPublisher/obsidian-mkdocs-publisher-template/generate)[^1]
2. Utiliser le nom de votre choix
1. Définissez et éditez le fichier `configuration.yml` à la racine du dépôt.

### Configuration du plugin

1. Paramètres de réception des dossiers :
    - Paramètres de réception : `clé de métadonnée`
    - Dossier par défaut : `docs/notes`
    - Clé de métadonnée: `category` (vous pouvez la changer !)
    - Dossier racine : `docs`
2. Conversion des liens
   - [x] Note de dossier ("folder note")
   - [x] Liens internes
   - [ ] Wikilinks (la template les supporte par défaut!)   
3. Transclusion
   - [x] Transférer les images
   - [x] Transférer les notes transclues 
   - Dossier d'images par défaut : `docs/assets/images`
4. Github Workflow
    - Laissez en blanc les actions GitHub
    - [x] Auto-nettoyage 
    - Dossier exclus : `docs/assets/meta, docs/assets/js, docs/assets/css, docs/tags.md`[^3]
5. Paramètre du plugin :
   Seuls les paramètres de suppression d'une partie du lien doivent être éditer pour fonctionner avec la template : `docs/, .md`


Les fichiers (et les images) seront envoyés sur votre modèle de dépôt GitHub, dans le dossier spécifié.

### Informations utiles
#### Liens
- [Obsidian Plugin](https://github.com/obsidianPublisher/obsidian-github-publisher)
- [Template](https://github.com/obsidianPublisher/obsidian-mkdocs-publisher-template)

#### Comment...
- [Configurer le blog](https://obsidian-publisher.netlify.appdocumentation/create%20the%20blog/)
- [Customiser le blog](https://obsidian-publisher.netlify.appdocumentation/blog%20customization/)
- [Copier les liens](https://obsidian-publisher.netlify.appdocumentation/useful%20plugins/#metacopy)
- [Mettre à jour la template](https://obsidian-publisher.netlify.appdocumentation/Q%26A/#2-update-the-template)

#### Support
- [x] Wikilinks (`[[Links]]`)
- [x] Transclusion/embed de fichiers, tant pour les liens wikilinks que pour les liens markdowns
- [x] Callout d'obsidian & les callouts personnalisés
- [x] Folder notes et leur "citation"
- [x] Attributs customisés
- [x] État de partage et hiérarchie de dossiers personnalisée.
- [x] Mobile et PC
- [x] Mini aperçu du fichier au survol

#### Limitations

![[../template/limitations.md]]

---
## [Digital Garden](https://github.com/TuanManhCao/digital-garden)

1. Paramètres de réception du dossier : 
    - Paramètres de réception : `Obsidian Path`.
    - Dossier par défaut : `posts`
2. Workflow : 
    - Laisser vide
    - Activer le nettoyage automatique
3. Paramètres des images :
    - Transférer l'image intégrée sur true
    - Transférer les notes transclues sur false
    - Dossier par défaut : `posts/Attachments`.

[^1]: You must be connected to copy the template ! You can test locally through clone > https : `git clone https://github.com/Mara-Li/mkdocs_obsidian_template.git` or [with downloading the ZIP](https://github.com/Mara-Li/mkdocs_obsidian_template/archive/refs/heads/main.zip)
[^2]: You need to be connected to generate it.
[^3]: Normally, only file supported by obsidian are deleted, but some image exists only on the blog (for logo, for example). To prevent bad surprise, exclude these folder here.