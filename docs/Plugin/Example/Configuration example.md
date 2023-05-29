---
share: true
title: Configuration example
---

## [Mkdocs Publisher](https://obsidian-publisher.netlify.app)

### Quick installation tutorial

1. Click on:[^1]
    - If you want to use Github Pages : [use this template](https://github.com/ObsidianPublisher/template-gh-pages/generate)
    - If you want to use Netlify : [use this template](https://github.com/ObsidianPublisher/template-netlify-vercel/generate)
2. Use the name of your choice
3. Set and edit the `mkdocs.yml` in the root of the repository.

### Plugin configuration

The majority of the settings are optional and help you to manage your repository.

The mandatory settings are :
1. In [[Upload|Upload configuration]] :
	- <u>Folder behavior: </u> YAML frontmatter or Obsidian Path
	- <u>Root folder: </u> `docs`
	- <u>Folder note:</u> `index.md`
	- <u>Excluded files</u> : (*Only if you use the auto-clean up function*) : `docs/assets/js, docs/assets/meta, docs/assets/css, tags.md, graph.md`
2. [[Content|Content's conversion]] :
	- <u>Internal Links : </u> Toggle on
3. [[Embed files]] :
	- <u>Transfer attachments:</u>✅
	- <u>Default attachment folder:</u> `docs/assets/img`
		The images must be in the `docs/` folder, but you can change the `assets/img` part as you want.

#### Support

- [x] Wiki links (`[[Links]]`)
- [x] File transclusion/embed, both wiki links and markdown links
- [x] Obsidian callout and custom callouts
- [x] Folder notes and their citations
- [x] Custom attributes
- [x] Sharing state and custom folder hierarchies
- [x] Mobile and desktop compatibility
- [x] File mini preview on hover
- [x] Graph view 🎉 (using [obsidiantools](https://github.com/mfarragher/obsidiantools))

#### Limitations

![[limitations]]

