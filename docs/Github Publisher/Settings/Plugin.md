---
title: Plugin Settings
---

You can configure:

- The share key used by the plugin. By default, it is `share`.
- Folders excluded. The share key can't work here. Useful if you forget to remove the `share` (or turn it to `false`) and move a file in your archive…
	You can use regex here, but you need to enclose the regex between `/`.
- Add the command to share the file on the file menu (right-click on a file in the explorer or using the three dots) and editor menu (right-click on an open edited note)
- Add the link's shared note in your clipboard after sharing. You can configure the path created here, with removing some parts.
	As it supports multiple parts, you can separate them using a comma. For example, you can remove `docs` and the extension using: `docs/, .md`


> [!note] The right-click menu command can also send the file under your cursor if it's a link!

---

> [!info] There are a lot of options that can be edited in the frontmatter. [[Per files settings|See here for more information]].
