# Ezlinked

Ezlinked, a Python plugin to convert [[wikilinks]] to [MDlinks]() has 2 known bugs:

- [Incorrect path doesn't stay incorrectly, but automatically is replaced with a different path](https://github.com/Lisandra-dev/mkdocs-ezlinked-plugin/issues/3 "Incorrect path doesn't stay incorrectly, but automatically is replaced with a different path · Issue #3 · Lisandra-dev/mkdocs-ezlinked-plugin")
- [Expecting `[[./a/index]]` to return `<a href="a/"`, get `<a href="a/index"`](https://github.com/Lisandra-dev/mkdocs-ezlinked-plugin/issues/2 "Expecting `[[./a/index]]` to return `&lt;a href=&quot;a/&quot;`, get `&lt;a href=&quot;a/index&quot;` · Issue #2 · Lisandra-dev/mkdocs-ezlinked-plugin")]]

It is advised to convert all wikilinks to mdlinks and remove ezlinks in `mkdocs.yml`

# Dataview

If in your note there is an empty inline DQL like this:
```markdown
text before `=` text middle `random word`
```
Then the output will be:
```markdown
`=` text middle `
```

You can work around this by adding a space before the equal sign (` =`) or use a different unicode character (`＝`). See [Issue #235](https://github.com/ObsidianPublisher/obsidian-github-publisher/issues/235 "[Plugin][Bug]: Failed to parse expression when inline DV · Issue #235 · ObsidianPublisher/obsidian-github-publisher").