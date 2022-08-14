---
share: true
title: Home
hide:
  - navigation
  - toc
---

Mkdocs Obsidian est une association entre un module Obsidian et un modèle Material mkdocs pour obtenir un wiki personnel basé sur votre coffre Obsidian.

<p align="center">
	<a href="https://github.com/Mara-Li/mkdocs_obsidian_publish"><img src="https://img.shields.io/github/license/Mara-Li/YAFPA-python"></img></a>
	<a href="https://obsidian.md/"><img src="https://img.shields.io/badge/Auxiliary%20Tool-Obsidian-blueviolet"></img></a>
	<a href="https://github.com/Mara-Li/mkdocs_obsidian_template/wiki/Q&A/"><img src="https://img.shields.io/badge/-Q%26A-blue?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMkM2LjQ4NiAyIDIgNi40ODYgMiAxMnM0LjQ4NiAxMCAxMCAxMCAxMC00LjQ4NiAxMC0xMFMxNy41MTQgMiAxMiAyem0wIDE4Yy00LjQxMSAwLTgtMy41ODktOC04czMuNTg5LTggOC04IDggMy41ODkgOCA4LTMuNTg5IDgtOCA4eiIvPjxwYXRoIGQ9Ik0xMSAxMWgydjZoLTJ6bTAtNGgydjJoLTJ6Ii8+PC9zdmc+"></img></a>
</p>
<p align="center">
	<a href="https://obsidian-publisher.netlify.app">Documentation</a><br/>
	<a href="https://www.mara-li.fr">Owlly Seed (Mon blog ; en français)</a><br/>
	<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ObsidianPublisher/obsidian-mkdocs-publisher-template"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
</p>

Les plugins sont accessibles avec une action github et un module d'Obsidian.

## Liens principaux
- [Module Obsidian](https://github.com/obsidianPublisher/obsidian-github-publisher)
- [Modèle](https://github.com/obsidianPublisher/obsidian-mkdocs-publisher-template)

### Support 
- [x] Wikilinks (`[[Liens]]`)
- [x] Transclusion/embed de fichiers, tant pour les liens wikilinks que pour les liens markdowns
- [x] Callout d'obsidian & les callouts personnalisés
- [x] Folder notes et leur "citation"
- [x] Attributs customisés
- [x] État de partage et hiérarchie de dossiers personnalisée.
- [x] Mobile et PC
- [x] Mini aperçu du fichier au survol 

---
## Github actions & Obsidian's plugin
### TLDR
1. Installation via les modules communautaire ou [BRAT](https://github.com/TfTHacker/obsidian42-brat)
2. [Templater](https://github.com/obsidianPublisher/mkdocs_obsidian_template) le blog et configurez-le.
3. Configurer les options du plugins : 
	- Nom du dépôt
	- Votre pseudonyme GitHub
	- Le Token GitHub ([from here](https://github.com/settings/tokens/new?scopes=repo))
	- La clé de partage
4. Ajouter la clé à l'état `true` dans vos fichiers Obsidian
5. Personnalisez (ou non) les options de dossiers
6. Exécutez les commandes par le biais du menu fichier ou de la palette de commandes.

> [!example] [Regardez ici pour plus d'explication](https://obsidian-publisher.netlify.app/fr/obsidian%20github%20publisher/configuration%20example/)

---

## Tutoriel d'installation rapide d'un blog
1. Cliquez sur [use this template](https://github.com/obsidianPublisher/obsidian-mkdocs-publisher-template/generate)[^1]
2. Utilisez le nom de votre choix
3. Cliquez sur [code](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories) → SSH → Copiez le lien
4. Lancer (dans un terminal):
	```bash
	git clone [[PASTE THE LINK HERE]] publish_blog
	pip install -r requirements.txt
	```

N'oubliez pas non plus de configurer GitHub pour autoriser le push ! (Voir ici pour des informations sur la configuration de Git) (https://docs.github.com/en/get-started/quickstart/set-up-git)

De manière alternative, vous pouvez utiliser Netlify pour créer et déployer le blog. Pour cela, vous devez juste cliquer ici : 
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ObsidianPublisher/obsidian-mkdocs-publisher-template)

N'oubliez pas de configurer le fichier `mkdocs.yml` !

<p align="center">
	<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
</p>

[^1]: Vous devez être connecté pour copier le template ! Vous pouvez tester localement par clone > https : `git clone https://github.com/Mara-Li/mkdocs_obsidian_template.git` ou [en téléchargeant le ZIP](https://github.com/Mara-Li/mkdocs_obsidian_template/archive/refs/heads/main.zip)
