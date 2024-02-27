---
title: Quartz
---

-> [PRESET](https://github.com/ObsidianPublisher/plugin-presets):

- [YAML based](https://github.com/ObsidianPublisher/plugin-presets/blob/main/presets/quartz-yaml-based.json)
- [Obsidian path based](https://github.com/ObsidianPublisher/plugin-presets/blob/main/presets/quartz-yaml-based.json)

## [Quartz](https://quartz.jzhao.xyz/)

See the official documentation on how to configure Quartz.

For the template, a special template that add a "little" more features is available [here](https://github.com/ObsidianPublisher/Publisher-Quartz).

The template includes:

- File and folder icons
- Mobile navigation

### File & Folder icons configuration

- Use [Iconize Assistant](https://github.com/Lisandra-dev/iconize-assistant) to save icon path into the frontmatter of the file.
- Configure the plugin to send icons file (using override attachment) into `\_assets/icons : Replace path of attachment for svg files: `/(._)\/(._)\/(.\*)\.(svg)$/`->`quartz/static/icons/$2/{{name}}`
- In the file [quartz.layout.ts], add this:
  ```ts
  const iconsOptions: IconFolderOptions = {
    rootIconFolder: "quartz/static/icons",
    default: {
      file: "file",
    },
  }
  ```
  > [!warning] Don't forget to add the default icon (named `file.svg`) in the `quartz/static/icons` folder.
- Edit `Component.ExlorerBurger()` as follow:
  ```
  Component.ExplorerBurger({
  	//keep your old settings; add only iconSettings
  	iconSettings: iconsOptions,
  }),
  ```
- Edit `Component.ArticleTitle()` as follow: `Component.ArticleTitle(iconsOptions)`

### Mobile navigation

The mobile navigation is instable and rely on a specific layout. Don't change the layout, order, or place of the components.
