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
repo: 
  branch: string #change default branch 
  repo: string #change default repository
  owner: string #change default owner (it's your github Username)
autoclean: boolean #disable auto cleaning
```

For multiple Repo :
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
multipleRepo: 
  - repo:
      branch: string #change default branch 
      repo: string #change default repository
      owner: string #change default owner (it's your github Username)
      autoclean: boolean #enable auto cleaning
  - repo:
      branch: string #change default branch 
      repo: string #change default repository
      owner: string #change default owner (it's your github Username)
      autoclean: boolean #enable auto cleaning
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
repo: string #owner/repo/branch or owner/repo or repo
autoclean: boolean #disable auto cleaning
```

For multiple Repo :
```yaml
mdlinks: boolean #convert to markdown links
links: boolean #remove [[]] or []() and keep just alt text or filename/title
removeEmbed: boolean #remove totally the citation of an embed notes (replace to empty string the ![[]] or ![]())
attachmentLinks: string #ovverride default folder for attachments
attachment: boolean #prevent sending attachment
dataview: boolean
hardbreak: boolean
multipleRepo: list of string 
    - owner/repo/branch/autoclean or owner/repo or repo
    - owner/repo/branch/autoclean or owner/repo or repo
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
repo: #same for multipleRepo
  branch: settings.branch
  repo: settings.repo
  owner: settings.owner
autoclean: settings.auto_clean
```
