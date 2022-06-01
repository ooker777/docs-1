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