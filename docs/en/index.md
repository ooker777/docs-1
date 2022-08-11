---
share: true
title: Home
hide:
  - navigation
  - toc
---

Mkdocs Obsidian is an association between an Obsidian plugin and a Material mkdocs template to get a personal wiki site based on your Obsidian Vault.

<p align="center">
	<a href="https://github.com/Mara-Li/mkdocs_obsidian_publish"><img src="https://img.shields.io/github/license/Mara-Li/YAFPA-python"></img></a>
	<a href="https://obsidian.md/"><img src="https://img.shields.io/badge/Auxiliary%20Tool-Obsidian-blueviolet"></img></a>
	<a href="https://github.com/Mara-Li/mkdocs_obsidian_template/wiki/Q&A/"><img src="https://img.shields.io/badge/-Q%26A-blue?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMkM2LjQ4NiAyIDIgNi40ODYgMiAxMnM0LjQ4NiAxMCAxMCAxMCAxMC00LjQ4NiAxMC0xMFMxNy41MTQgMiAxMiAyem0wIDE4Yy00LjQxMSAwLTgtMy41ODktOC04czMuNTg5LTggOC04IDggMy41ODkgOCA4LTMuNTg5IDgtOCA4eiIvPjxwYXRoIGQ9Ik0xMSAxMWgydjZoLTJ6bTAtNGgydjJoLTJ6Ii8+PC9zdmc+"></img></a>
</p>
<p align="center">
	<a href="https://obsidian-publisher.netlify.app">Documentation</a><br/>
	<a href="https://www.mara-li.fr">Owlly Seed (My Blog ; In French)</a><br/>
	<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ObsidianPublisher/obsidian-mkdocs-publisher-template"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
</p>

The plugins can be accessed with a github actions and a Obsidian's plugin.

## Main links
- [Obsidian Plugin](https://github.com/obsidianPublisher/obsidian-github-publisher)
- [Template](https://github.com/obsidianPublisher/obsidian-mkdocs-publisher-template)

### Support 
- [x] Wikilinks (`[[Links]]`)
- [x] File transclusion/embed, both wikilinks and markdown links
- [x] Obsidian callout and custom callout
- [x] Folder notes and their citation
- [x] Custom attributes
- [x] Sharing state and custom folder hierarchy.
- [x] Mobile and desktop
- [x] File mini preview on Hover
 
 ---
## Github actions & Obsidian's plugin
### TLDR
1. Install the plugins through Obsidian Community or [BRAT](https://github.com/TfTHacker/obsidian42-brat)
2. [Template](https://github.com/obsidianPublisher/mkdocs_obsidian_template) the blog and configure it 
3. Configure the plugin's options : 
	- Repo name
	- Your github username
	- The github token ([from here](https://github.com/settings/tokens/new?scopes=repo))
	- The share key
4. Add the sharing key in `true` in Obsidian's note frontmatter 
5. Customize (or not) the folder options 
6. Run the commands throught the file menu or commands palette.

> [!INFO] [[Obsidian Github Publisher/Configuration example|See here for advanced configuration within obsidian]]

---

## Quick blog installation tutorial
1. Click on [use this template](https://github.com/obsidianPublisher/obsidian-mkdocs-publisher-template/generate)[^1]
2. Use the name of your choice.
3. Click on [code](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories) → SSH ; Copy the link
4. Run (in terminal):
```bash
git clone [[PASTE THE LINK HERE]] publish_blog
pip install -r requirements.txt
```

Also, don't forget to configure GitHub to allow push! [Check here for information about setting-up Git!](https://docs.github.com/en/get-started/quickstart/set-up-git)

Alternatively, you can use the Netlify app to deploy your blog ! Just click here : [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ObsidianPublisher/obsidian-mkdocs-publisher-template) 
Don't forget to update the `mkdocs.yml` !

<p align="center">
	<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
</p>

[^1]: You must be connected to copy the template ! You can test locally through clone > https : `git clone https://github.com/Mara-Li/mkdocs_obsidian_template.git` or [with downloading the ZIP](https://github.com/Mara-Li/mkdocs_obsidian_template/archive/refs/heads/main.zip)

