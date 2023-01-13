---
share: true
title: Home
hide:
  - navigation
  - toc
---

Mkdocs Obsidian est une association entre un module Obsidian et un modèle Material mkdocs pour obtenir un wiki personnel basé sur votre coffre Obsidian.

<p align="center">
	<a href="https://obsidian.md/"><img src="https://img.shields.io/badge/Auxiliary%20Tool-Obsidian-blueviolet"></img></a><br>
	<a href='https://ko-fi.com/X8X54ZYAV' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a><br>
	<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ObsidianPublisher/publisher-template-gh-pages"><img src="https://www.netlify.com/img/deploy/button.svg"></a><br></p>

- [Module Obsidian](https://github.com/ObsidianPublisher/obsidian-github-publisher)
- [Github Discussion](https://github.com/ObsidianPublisher/obsidian-github-publisher/discussions)

### Support 
- [x] Wikilinks (`[[Liens]]`)
- [x] Transclusion/embed de fichiers, tant pour les liens wikilinks que pour les liens markdowns
- [x] Callout d'obsidian & les callouts personnalisés
- [x] Folder notes et leur "citation"
- [x] Attributs customisés
- [x] État de partage et hiérarchie de dossiers personnalisée.
- [x] Mobile et PC
- [x] Mini aperçu du fichier au survol 
- [x] Vue graphique 🎉 (En utilisant [Obsidiantools](https://github.com/mfarragher/obsidiantools))

---
## Github actions & Obsidian's plugin
### TLDR
1. Installation via les modules communautaire ou [BRAT](https://github.com/TfTHacker/obsidian42-brat)
2. [Templater](https://github.com/obsidianPublisher/mkdocs_obsidian_template) le blog et configurez-le.
3. Configurer les options du plugins : 
	- Nom du dépôt
	- Votre pseudonyme GitHub
	- Le Token GitHub ([d'ici](https://github.com/settings/tokens/new?scopes=repo))
	- La clé de partage
4. Ajouter la clé à l'état `true` dans vos fichiers Obsidian
5. Personnalisez (ou non) les options de dossiers
6. Exécutez les commandes par le biais du menu fichier ou de la palette de commandes.

> [!example] [Regardez ici pour plus d'explication](https://obsidian-publisher.netlify.app/fr/obsidian%20github%20publisher/configuration%20example/)

---

## Tutoriel d'installation rapide d'un blog
1. Cliquez sur ['use this template'](https://github.com/obsidianPublisher/publisher-template-gh-pages/generate)[^1]
2. Utilisez le nom de votre choix
3. Cliquez sur [code](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories) → SSH → Copiez le lien
4. Lancer (dans un terminal):
	```bash
	git clone [[PASTE THE LINK HERE]] publish_blog
	pip install -r requirements.txt
	```

N'oubliez pas non plus de configurer GitHub pour autoriser le push ! (Voir ici pour des informations sur la configuration de Git) (https://docs.github.com/en/get-started/quickstart/set-up-git)

De manière alternative, vous pouvez utiliser Netlify pour créer et déployer le blog. Pour cela, vous devez juste cliquer ici : 
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ObsidianPublisher/publisher-template-gh-pages)

N'oubliez pas de configurer le fichier `mkdocs.yml` !

<p align="center">
	<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
</p>

[^1]: Vous devez être connecté pour copier le template ! Vous pouvez tester localement par clone > https : `git clone https://github.com/ObsidianPublisher/publisher-template-gh-pages` ou [en téléchargeant le ZIP](https://github.com/ObsidianPublisher/publisher-template-gh-pages/archive/refs/heads/main.zip)
