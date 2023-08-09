## Embed

You can choose to send embedded files in two ways:

- <u>Attachments</u>: The file will be copied to the repository in an optional settled folder.
- <u>Notes</u>: Only shared files will be copied in the repository, in their respected folder (following your settings).

Additionally, you can choose to send files based on a metadata field. This means that if a specific field in the file's frontmatter (or using a Inline Dataview) is set to a certain value, the file will be sent to the repository.

> [!example]
> ```
> ---
> banner: my_image.png
> ---
> ```
> If you set the metadata `banner`, the image will be sent to the default attachment folder. All attachments supported by Obsidian (plus Markdown files) are supported. 
> This means that you can send images, pdfs, audio files and any other types of files that are supported by Obsidian and are embedded in your notes. 


This feature allows you to easily share all the necessary resources in your notes with your remote repository.

You can also change the look of the embedded links, if you set the transfer of these note to true:
- "No change" : Will keep the original link, as in Obsidian ; 
- "Remove link completely" will delete the citation completely and keep only the text ;
- "Transform to link" will remove the `!` before the link. 

Using this last option add a new option, where you can add something before the link. By default, it's `->`. So, you will have, as result: `![[link]]` to `-> [[link]]`


> [!warning] Outside of a blog's solution that support file embedding, the content's of the embedded notes won't be added to your note. 