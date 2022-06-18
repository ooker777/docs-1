When you send a file using the Obsidian Plugin, the template will handle the conversion to mkdocs. This don't need any configuration, because a lot of things are handled directly by Obsidian.

These things include :
- [[Template/customization#Folder note|folder note]]
- Categorization and custom tree creation 
- Obviously, the sharing of file (that's the goal of the plugin...)

> [!warning] About same repo & vault
> If you use your vault directly in a repo, the conversion by Obs2mk will break your files. The script is **not** for these strategies. 
> Example break:
> - Hashtags : `**2022/01**{: #2022/01 .hash}`
> - Callout converted to Admonition Mkdocs Callout
> - Your frontmatter
> - Links and internal path

> [!note] 
> The python script use the `minimal` configuration, and this configuration can be customized using a file named `configuration.yml` added in the root repo. 
> Here, you can disable the callout conversion and the hashtags conversion with:
> ```yaml
> minimal:
> 	convert:
> 		admonition: false
> 		hashtags: false
> ```
> Obviously, you can set one `true` and another `false`.