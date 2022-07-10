---
share: true
---

## [Mkdocs Publisher](https://obsidianmkdocs.github.io/obsidian_mkdocs_publisher_docs/)
### Quick installation tutorial
1. Click on [use this template](https://github.com/obsidianMkdocs/obsidian-mkdocs-publisher-template/generate)[^1]
2. Use the name of your choice
3. Set and edit the `configuration.yml` in the root of the repository.

### Plugin configuration

1. Folder reception settings : 
    - Reception settings : `YAML frontmatter`
    - Default folder : `docs/notes`
    - Choose your frontmatter key, same as in `configuration.yml`, by default: `category`
    - Root folder : `docs`
2. Workflow
    - Leave blank the GitHub actions
    - [x] Auto-clean up 
    - Excluded folder : `docs/assets/logo, docs/assets/js, docs/assets/css, docs/tags.md`[^3]
3. Embed settings : 
    - [x] Image
    - [x] Embed notes
    - Choose `docs/assets/img`
4. ✅ Folder notes

The files (and the image) will be sent on your GitHub repository template, in the specified folder. The conversion will be done by the [github actions](https://github.com/Mara-Li/obsidian-mkdocs-publisher-template/blob/main/.github/workflows/ci.yml) when the branch were merged. 

### Useful informations
#### Links
- [Obsidian Plugin](https://github.com/obsidianMkdocs/obsidian-github-publisher)
- [Python package](https://github.com/obsidianMkdocs/obsidian-mkdocs-publisher-python)
- [Template](https://github.com/obsidianMkdocs/obsidian-mkdocs-publisher-template)

#### How to...
- [Configure the blog](https://obsidianmkdocs.github.io/obsidian_mkdocs_publisher_docs/documentation/create%20the%20blog/)
- [Customize the blog](https://obsidianmkdocs.github.io/obsidian_mkdocs_publisher_docs/documentation/blog%20customization/)
- [Copy the link ?](https://obsidianmkdocs.github.io/obsidian_mkdocs_publisher_docs/documentation/useful%20plugins/#metacopy)
- [Update the template](https://obsidianmkdocs.github.io/obsidian_mkdocs_publisher_docs/documentation/Q%26A/#2-update-the-template)

#### Support
- [x] Wikilinks (`[[Links]]`)
- [x] File transclusion/embed, both wikilinks and markdown links
- [x] Obsidian callout and custom callout
- [x] Folder notes and their citation
- [x] Custom attributes
- [x] Sharing state and custom folder hierarchy.
- [x] Mobile and desktop
- [x] File mini preview on Hover

#### Limitations

![[../template/limitations.md]]

---
## [Digital Garden](https://github.com/TuanManhCao/digital-garden)

1. Folder reception settings : 
    - Reception settings : `Obsidian Path`
    - Default folder : `posts`
2. Workflow : 
    - Leave blank
    - Turn on autoclean
3. Images settings :
    - Transfer embed image on true
    - Transfer embedded notes on false
    - Default folder : `posts/Attachments`