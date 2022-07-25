---
share: true
---

## [Mkdocs Publisher](https://obsidian-publisher.netlify.app)
### Quick installation tutorial
1. Click on [use this template](https://github.com/obsidianPublisher/obsidian-mkdocs-publisher-template/generate)[^1]
2. Use the name of your choice
3. Set and edit the `configuration.yml` in the root of the repository.

### Plugin configuration

1. Folder reception settings : 
    - Reception settings : `YAML frontmatter`
    - Default folder : `docs/notes`
    - Choose your frontmatter key: `category` (you can change it!)
    - Root folder : `docs`
2. Links conversion
   - [x] Folder note
   - [x] Internal links
   - [ ] Wikilinks (the template support them by default!) 
3. Embed
   - [x] Image
   - [x] Embedded notes
   - Default folder : `docs/assets/images`
4. Github Workflow
    - Leave blank the GitHub actions
    - [x] Auto-clean up 
    - Excluded folder : `docs/assets/logo, docs/assets/js, docs/assets/css, docs/tags.md`[^3]
5. Embed settings : 
    - [x] Image
    - [x] Embed notes
    - Choose `docs/assets/img`
6. ✅ Folder notes

The files (and the images) will be sent on your GitHub repository template, in the specified folder. 

### Useful informations
#### Links
- [Obsidian Plugin](https://github.com/obsidianPublisher/obsidian-github-publisher)
- [Template](https://github.com/obsidianPublisher/obsidian-mkdocs-publisher-template)

#### How to...
- [Configure the blog](https://obsidian-publisher.netlify.appdocumentation/create%20the%20blog/)
- [Customize the blog](https://obsidian-publisher.netlify.appdocumentation/blog%20customization/)
- [Copy the link ?](https://obsidian-publisher.netlify.appdocumentation/useful%20plugins/#metacopy)
- [Update the template](https://obsidian-publisher.netlify.appdocumentation/Q%26A/#2-update-the-template)

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

[^1]: You must be connected to copy the template ! You can test locally through clone > https : `git clone https://github.com/Mara-Li/mkdocs_obsidian_template.git` or [with downloading the ZIP](https://github.com/Mara-Li/mkdocs_obsidian_template/archive/refs/heads/main.zip)
[^2]: You need to be connected to generate it.
[^3]: Normally, only file supported by obsidian are deleted, but some image exists only on the blog (for logo, for example). To prevent bad surprise, exclude these folder here.