---
share: true
title: Snippets and tools
---

I, as working on my blog, created some cool snippets or useful tools.

## CSS snippets

### Grid CSS snippets

> [!info] The snippets is in [`docs/assets/css/template/utils.css`](https://github.com/ObsidianPublisher/follow_template/blob/main/docs/assets/css/template/utils.css)

Automatically convert the [grid callout layout (from ITS)](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/S%20-%20Callouts.css) to mkdocs

![[../assets/img/example_grid_layout.png]]

### Add a image banner to mkdocs

![image](https://user-images.githubusercontent.com/30244939/163732766-d08b102f-508b-496e-a99f-68f865b2080b.png)

You can add a cool image banner with editing one of your stylesheet and adding :
```css
.md-header {
    background: var(--md-primary-fg-color) url(image_links) left center/cover no-repeat;
}
```
Don't forget to edit the `image_link` with the real links ! Personnaly, I use an unsplash image.

> [!warning] Don't edit the file in the `assets/css/template` folder! These file will be overwrite when updated.

## Plugins

> [!note] Note
> Don't forget to add the plugin in your `requirements.txt`

### [Mkdocs Callouts](https://pypi.org/project/mkdocs-callouts/)

> [!info] Bundled with the template

> [!info] Plugin's info
> A simple plugin that converts Obsidian style callouts and turns them into mkdocs supported Admonitions.
> - Plugin link : https://pypi.org/project/mkdocs-callouts/
> - Installation : `pip install mkdocs-callouts`

Use this plugin if you don't want to use the script (in github actions or in general). It supports "callouts in callout", custom callouts…

### Page encrypted

> [!note] The basic configuration for Material & this template are already included in the `mkdocs.yml` and in `utils.css`

> [!info] Plugin's info
> This plugin allows you to have password protected articles and pages in MKdocs.
> - Plugin link : https://pypi.org/project/mkdocs-encryptcontent-plugin/
> - Installation : `pip install mkdocs-encryptcontent-plugin`

To add a unique page encrypted, just add `password: your_secret_password` in your markdown file.

> [!warning] Security
> Obviously, if you use this in a public repo, it's totally useless to add this security (the file can be viewed enterely in GitHub). Don't use this plugin to share sensible information!

## Custom tags attributes

> [!info] Bundled with the template

> [!info] Custom tags attribute
> Adding [attribute list](https://python-markdown.github.io/extensions/attr_list/) using only hashtags in your text.
> *Links:* [Custom tags attributes](https://pypi.org/project/mkdocs-custom-tags-attributes/)
> *Installation:* `pip install mkdocs-custom-tags-attributes`

