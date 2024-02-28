---
title: Supported and unsupported plugins
order: 5
---

# Supported plugins

## [Dataview](https://github.com/blacksmithgu/obsidian-dataview)

Dataview is supported and transformed into Markdown by the plugin. But, there are some problem with Dataview I can't fix. Moreover, I can't update the API properly (see [obsidian-dataview/issue#2080](https://github.com/blacksmithgu/obsidian-dataview/issues/2080)).

More over, Dataview seems to be in maintenance mode and will be replaced by Datacore. So, I will not fix the problem with Dataview until Datacore or a proper way to update Dataview is released.

Some bugs:

- `0` will be transformed into empty string
- `dv.paragraph` with collapside callout in it.

## [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)

`.excalidraw` files will be exported natively into `svg` file, you don't need to export the file manually.

# Unsupported plugin (for now)

## [Metabind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin)

For the moment, Metabind doesn't allow to export to Markdown. You can [make an FR on the official repository](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) to allow it.
