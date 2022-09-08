---
title: Per files settings
---
## Using yaml object

```yaml
links:
  mdlinks: boolean #convert to markdownlinks 
  convert: boolean #transform to simple string with keeping alt text or file name/ title (it removes the [[]] or []())
embed:
  send: boolean #prevent sending embed
  remove: boolean #remove embed citation completely (replace to empty string the ![[]] or ![]())
attachment: 
  send: boolean #prevent sending attachment
  folder: string #change default folder for attachment
dataview: boolean #force/prevent dataview queries conversion
hardbreak: boolean #same but for hardbreak
```

## Using simple name

```yaml
mdlinks: boolean #convert to markdown links
links: boolean #remove [[]] or []() and keep just alt text or filename/title
removeEmbed: boolean #remove totally the citation of an embed notes (replace to empty string the ![[]] or ![]())
attachmentLinks: string #ovverride default folder for attachments
attachment: boolean #prevent sending attachment
dataview: boolean
hardbreak: boolean
```

Default value is derivated from your settings :  (`settings.keys` refer to your settings)
```yaml
links:
  mdlinks: settings.wikilinks
  convert: true
embed: 
  send: settings.embed
  remove: false
attachment:
  send: settings.attachment
  folder: settings.default_folder_image || settings.default_folder || filepath
dataview: settings.dataview
hardbreak: settings.hardbreak
```
