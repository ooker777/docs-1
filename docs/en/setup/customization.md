---
title: Customization
---


## Custom and tags attributes
### Tags

The plugin [Custom tags attributes](https://pypi.org/project/mkdocs-custom-tags-attributes/) will convert all `#tags` to `**tags**{: #tags .hash}` and add custom CSS to it. 
> [!example] `2022/01/01` will become `**2022/01/01**{: #2022/01 .hash}` : #2022/01/01

### Inline Markdown attributes

You can create [Inline Markdown Attribute](https://python-markdown.github.io/extensions/attr_list/) using hashtags. For example, to align some text to right :
1. Add 
```css
#right {
 display: inline-block;
 width: 100%;
 text-align: right;
 font-weight: normal;
}

#blue {
  color: blue;
}
```
2. Add `#right` on the last part of a line, and a `#blue` on random word : 
```md
Lorem ipsum dolor sit amet, consectetur adipiscing#blue elit. In mollis, libero porttitor gravida accumsan, justo metus pulvinar nulla, vitae dictum odio ligula non nisl. Vivamus id venenatis nulla. Nullam sed euismod ligula. Pellentesque tempor elit felis, lobortis vulputate risus gravida et. Curabitur auctor sed libero nec consectetur. Nam placerat rhoncus risus, euismod sagittis eros bibendum ac. Maecenas tellus libero, porttitor ac purus sit amet, viverra suscipit dolor. Proin id nisl velit. Ut at tincidunt libero, ac pharetra mi. Integer non luctus nisi.#right
```
It will appear as: 

Lorem ipsum dolor sit amet, consectetur adipiscing#blue elit. In mollis, libero porttitor gravida accumsan, justo metus pulvinar nulla, vitae dictum odio ligula non nisl. Vivamus id venenatis nulla. Nullam sed euismod ligula. Pellentesque tempor elit felis, lobortis vulputate risus gravida et. Curabitur auctor sed libero nec consectetur. Nam placerat rhoncus risus, euismod sagittis eros bibendum ac. Maecenas tellus libero, porttitor ac purus sit amet, viverra suscipit dolor. Proin id nisl velit. Ut at tincidunt libero, ac pharetra mi. Integer non luctus nisi.#right

Note that it can be some strange behavior caused by the functionment of [attribute list](https://python-markdown.github.io/extensions/attr_list/) but it mostly work for majority of use case.

You can get more information in the [mkdocs-custom-tags-attributes](https://pypi.org/project/mkdocs-custom-tags-attributes/) documentation.

## Folder note

You can create a folder note if you use a `category` front matter key that have the last folder with the same name as the file. For example : 
`category: folder1/folder2/filename`. The file `filename` will be renamed `index` and the folder will be named `filename`.


## Callout & Admonition

The script support custom admonition. For that, you first need to edit or create a new css file, with adding the support of the new custom callout, as follow in [Admonition's docs](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#customization).
For example, to add a `dictionnary` admonition:
```css
:root {
    --md-admonition-icon--dictionnary: url('data:image/svg+xml;charset=utf-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6v7L9.5 7.5 7 9V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12z"/></svg>')
}
.md-typeset .admonition.dictionnary,
.md-typeset details.dictionnary {
  border-color: rgb(43, 155, 70);
}
.md-typeset .dictionnary > .admonition-title,
.md-typeset .dictionnary > .summary {
  background-color: rgba(43, 155, 70, 0.1);
  border-color: rgb(43, 155, 70);
}
.md-typeset .dictionnary > .admonition-title::before,
.md-typeset .dictionnary > summary::before {
  background-color: rgb(43, 155, 70);
  -webkit-mask-image: var(--md-admonition-icon--dictionnary);
          mask-image: var(--md-admonition-icon--dictionnary);

```
It will give you : 

!!! dictionnary
    Here's a callout block.
    It supports **markdown** and [[wikilinks]]

The `dictionnary` will be recognized, and converted !

## Article list

![[Article_list.png]]
A new cool way to display your article/post is to use a special template.

To organize that you must use :
- Pagination indexes
- A `index.md` file in a folder ("a category" folder).

This `index` is on this form :

```md
---
template: blog.html
title: Folder Index
category: FolderName
hidden: True
---
A cool description
```

The `blog.html` use a file in `overrides/partials`.

If you want to hide a file from this list, you can use `hidden` key in the frontmatter. 

> [!Warning] Plugin
> The displayed date rely on a new plugin named [`mkdocs-git-revision-date-localized-plugin`](https://github.com/timvink/mkdocs-git-revision-date-localized-plugin). Don't forget to customize it!

> [!warning] To add a illustrative image, you need to add a frontmatter in the file. 
> 1. Internal Image : `image:`
> 		This image must be the image name (+ extension) and placed in `assets/img`
> 2. External image: `banner:`

Finally, it's possible to configure the display of the page number (pagination) and the translation of the words "posts in", with modifiying the `extra` key in the mkdocs configuration file `mkdocs.yml`, as follow :
```yml
extra:
  SEO: 'assets/meta/LOGO_SEO.png' #Allow to display an image for SEO if no image are found
  pagination: false #default: true
  pagination_translation: 'postes dans' #default: 'posts in'
```


> [!note] You can also use the github action `create_index` to create a new index for a new folder.
> For more information see [Workflow](../Getting Started/Workflow.md)

## Comments
In `overrides/partials`, you will spot a file named `comments.html`. This allow you to set up comments on your blog! It uses [Giscus](https://giscus.app) to set up this.

First, follow the tutorial on [Material Mkdocs](https://squidfunk.github.io/mkdocs-material/setup/adding-a-comment-system/). After, copy paste the script of Giscus, as :
```html
<script
  src="https://giscus.app/client.js"
  data-repo="<username>/<repository>"
  data-repo-id="..."
  data-category="..."
  data-category-id="..."
  data-mapping="pathname"
  data-reactions-enabled="1"
  data-emit-metadata="1"
  data-theme="dark-dimmed"
  data-lang="fr"
  crossorigin="anonymous"
  async
>
</script>
```

> [!note] For the theme, you can put `dark-dimmed`.

You need to put this text into the `comments.html` file you saw earlier, right after the `<h2>` part.

The final files looks like : 
```html
{% set local_comments = "comments" | value_in_frontmatter(page.meta) %}
{% set comments = config.extra["comments"] if local_comments is none else local_comments %}
{% if comments %}
<!-- Giscus -->
<h2 id="__comments">{{ lang.t("meta.comments") }}</h2>

<script
  src="https://giscus.app/client.js"
  data-repo="<username>/<repository>"
  data-repo-id="..."
  data-category="..."
  data-category-id="..."
  data-mapping="pathname"
  data-reactions-enabled="1"
  data-emit-metadata="1"
  data-theme="dark-dimmed"
  data-lang="en"
  crossorigin="anonymous"
  async
>
</script>

<script>
    var giscus = document.querySelector("script[src*=giscus]")

    /* Set palette on initial load */
    var palette = __md_get("__palette")
    if (palette && typeof palette.color === "object") {
        var theme = palette.color.scheme === "slate" ? "dark_dimmed" : "light"
        giscus.setAttribute("data-theme", theme)
    }

    /* Register event handlers after documented loaded */
    document.addEventListener("DOMContentLoaded", function () {
        var ref = document.querySelector("[data-md-component=palette]")
        ref.addEventListener("change", function () {
            var palette = __md_get("__palette")
            if (palette && typeof palette.color === "object") {
                var theme = palette.color.scheme === "slate" ? "dark_dimmed" : "light"

                /* Instruct Giscus to change theme */
                var frame = document.querySelector(".giscus-frame")
                frame.contentWindow.postMessage(
                    { giscus: { setConfig: { theme } } },
                    "https://giscus.app"
                )
            }
        })
    })
</script>
{% endif %}
```

You can disable or enable comments on a specific page by adding `comments: false` in the frontmatter, and disable/enable globally using the same key in `extra` of `mkdocs.yml` ([here](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/59d39757d85cd418a2fd57fdc06128713a8cf95e/mkdocs.yml#L138)).

- If you disable globally with `comments: false`, you can **enable** it on a specific page by adding `comments: true` in the frontmatter.
- Otherwise, if you enable globally with `comments: true`, you can **disable** it on a specific page by adding `comments: false` in the frontmatter.

> [!warning] Without the extra key in `mkdocs.yml`, the building will fail. 

> [!important] You need to check if your `overrides/hooks/on_env.py` file possess the following code :
> ```python
> def value_in_frontmatter(key, metadata):
>    """Check if a key exists in the frontmatter.
>
>    Args:
>        key (any): the key to check
>        metadata (any): the frontmatter
>
>    Returns:
>        bool: true if exists
>    """
>    if key in metadata:
>        return metadata[key]
>    else:
>        return None
> def on_env(env, config, files, **kwargs):
>    env.filters["value_in_frontmatter"] = value_in_frontmatter
>    #... other code #
>    return env
> ```


## Graph view

> [!important] If you won't add a graph view, you need to edit your [`mkdocs.yml`](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/59d39757d85cd418a2fd57fdc06128713a8cf95e/mkdocs.yml#L139) file and **set** the key `generate_graph` to `false`. 
> By default, the graph will be generated.

I success to create a semi-interactive graph-view using python. It doesn't allow you to click on article/post, but you can see a view of your blog.

> [!note] Notes
> [obsidiantools](https://github.com/mfarragher/obsidiantools) support actually only 3.9. If you use Netlify to build your blog, you will be forced to use an older version because Netlify only support 3.8. These version won't be perfect.

To use it, you need to install `obsidiantools` and `pyvis` (for the graph view).

```bash
pip install obsidiantools
pip install pyvis
```

(Don't forget to add it to `requirements.txt`)

Then, you need to add this to [`overrides/hooks/on_env`](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/main/overrides/hooks/on_env.py) : 
```py
import obsidiantools.api as otools
from pyvis.network import Network

def obsidian_graph():
    """Generates a graph of the Obsidian vault."""
    log = logging.getLogger("mkdocs.plugins." + __name__)
    log.info("[OBSIDIAN GRAPH] Generating graph...")
    vault_path = Path(Path.cwd(), 'docs')
    vault = otools.Vault(vault_path).connect().gather()
    graph = vault.graph
    net = Network(height="750px", width="750px", font_color="#7c7c7c", bgcolor="transparent")
    net.from_nx(graph)
    try:
        net.save_graph(str(Path.cwd() / "docs" / "assets" / "graph.html"))
    except OSError:
        pass
    shutil.rmtree(Path.cwd() / "lib")
    log.info("[OBSIDIAN GRAPH] Graph generated!")
    return ""

def on_env(env, config, files, **kwargs):
    if config['extra'].get('generate_graph', True):
        obsidian_graph()
	...
	return on_env
```

The file `graph.html` will be generated in `docs/assets/`. I advice you to exclude this file from git with adding the path to the `.gitignore` file.

Secondly, edit [`utils.js` file](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/main/docs/assets/js/utils.js) and adding this :
```js
window.onload = function () {
    let frameElement = document.querySelector('iframe');
    let doc = frameElement.contentDocument || frameElement.contentWindow.document;
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'css/template/utils.css';
    css.type = 'text/css';
    doc.head.appendChild(css);
    const theme = document.querySelector('[data-md-color-scheme]');
    if (theme.getAttribute('data-md-color-scheme') === 'default') {
        doc.body.setAttribute('class', 'light')
    }
    else {
        doc.body.setAttribute('class', 'dark')
    }
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes') {
                doc.body.setAttribute('class', mkDocsChirpyTranslator[theme.dataset.mdColorScheme])
            }
        })
    }
    )
    observer.observe(theme, {
        attributes: true,
        attributeFilter: ['data-md-color-scheme'],
    })
}
```

Add this to the [`utils.css` file](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/main/docs/assets/css/utils.css):
```css
#mynetwork {
    border: none !important;
}
.card {
    border: none !important;
    background-color: transparent !important;
}
```

And create a new file `graph.md` in `docs/` with this content :
```md
<iframe id="test"
        title='test'
        src="../assets/graph.html"
        class="graph"
        width="750px"
        height="750px"
        allowtransparency="true"
        style="border: 0px; margin: 0px; padding: 0px; overflow: hidden;"
        scrolling="no">
</iframe>
```

![TADA](https://user-images.githubusercontent.com/30244939/205411586-ced48127-908c-45a6-b02f-9d3cb85cc8f6.png)



> [!warning] About creating a graph for each file
> I don't think it's a good idea because : 
> - The number of generated file will be huge.
> - The build time will explode.

