```yml
default: #change the name if you need a new configuration setting  
  configuration:  
    input: #your obsidian vault in absolute path
    output: #Your mkdocs site in absolute path
  frontmatter:  #change these if you need
    category:  
      default value: #default folder/category if no category key is present
      key: #category  
    index: #(i)  
    share: #share  
  weblink: #links to your website
```

If you need a new configuration, just copy/paste after the other configuration, without forgetting to change the `default` to your `configuration_name`

>[!info] Update for minimal configuration
As of the update to v4.0.2, the script doesn't need minimal configuration for running with GitHub actions.  You can safely deleting it.

Some explanation here. It's a [YAML](https://en.wikipedia.org/wiki/YAML) file. If you use the script in terminal you **need** to configure it. No worry! Normally, the script ask you some information.

Thus :
- `input` : corresponding to your vault, in an absolute path.
- `output` : your mkdocs repository folder, in an absolute path. 
- `frontmatter` : 
	- `category` : 
		- `default value` : The default folder for new notes that don't have this key in the front matter.
		- `key` : If you want to change the category key for other things. For example, `folder`.
	- `index` : for [folder note](../blog%20customization.md#Folder%20note) : citation will be broken, but this key prevents problem!
	- `share` : if you wish to use another key to authorize the file to be shared. 
