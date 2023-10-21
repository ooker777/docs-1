---
title: Plugin Settings
---

Some options that require detailed explanation:

## Sharing config
### Share key
Set the share key and set it to `true` in the YAML frontmatter of a note to allow sharing it. By default, it is `share`. For example:

```markdown
---
share: true
---

This note will be shared.
```

### Excluded folders

Even if the share key is set to `true` in notes inside excluded folders, they won't be shared. This is useful if you forget to remove the `share` (or turn it to `false`) and move a file in your archive.

You can use regex here, but you need to enclose the regex between `/`, e.g. `/unshar.*/`.

The path should be relative to the root (e.g. `./excluded`). If only the name is provided, it will exclude all folders **containing** the keyword.

## Menu
Add the command to share the file on the file menu (right-click on a file in the explorer or using the three dots) and editor menu (right-click on an open edited note)

## Link building & copy
Add the link's shared note in your clipboard after sharing : 
- You can set the baselink (note : this can be edited by per-file settings `baselink`).
- You can also delete some part of the created link. If you need to remove multiple part, just separate the part with a comma. For example, if you want to remove the extension and the index : `index, .md`
- You have the option to enable a new command in the command palette to create a link to the current opened file. If you want to add in the right-click menu, you can use the [commander](https://github.com/phibr0/obsidian-commander) plugin. 

## Others 
### Show what files are edited, added, or deleted after uploaded
This is how the modal look like:
![](https://i.imgur.com/qPqF1L6.png)

## Logs
1. You can notify all error in a notice, instead of the console. This option is useful if you don't know how to use the console, and if you debug on mobile.


> [!note] The right-click menu command can also send the file under your cursor if it's a link!

---

> [!info] There are a lot of options that can be edited in the frontmatter. [[Per files settings|See here for more information]].
