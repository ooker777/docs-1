---
date: 2023-06-21
tags: [Plugin]
title: "[PLUGIN]: v6.1.0"
description: "Quickly load preset from a repository & secure your GitHub Token."
---

The beta cycle is ended!

The update include two things:
- A way to secure your GitHub token ;
- The possibility to load preset from a repository.

## GitHub Token

Now, the GitHub Token is stored in an external file, which is saved by default in the plugin folder. The token key is no longer present in the `data.json` file, ensuring that the token is not shared when the file is shared.

By default, this external file is named `env` and can be found in `.obsidian/plugins/obsidian-mkdocs-publisher` (also known as `configDir/plugins/pluginID/env`). You have the option to change this path by clicking the button on the right side of the GitHub token.
![[GitHub Token security & Presets.png]]

The only requirement is that the file must be located within your Obsidian vault. It can be stored in any format, with or without an extension, such as JSON.

The file should be structured as follows:

```env
GITHUB_TOKEN=TOKEN
```

## Presets

Because I think accessibility is important, I added a new button: « Load Preset ».

This new button will download [all file from the `presets` folder from this repository](https://github.com/ObsidianPublisher/plugin-presets), and you can choose to load the settings you want, to quickly start with the plugin!

### How to add your preset

- Fork the project
- Add your `data.json` file in [the preset folder](./presets) folder, under an understandable name.
- Add your documentation in the README
- Start a Pull-Request.

### Presets list

- [mkdocs.json](./presets/mkdocs.json): For [[Configuration example#[Mkdocs Publisher](https //obsidian-publisher.netlify.app)|Mkdocs Publisher]].
