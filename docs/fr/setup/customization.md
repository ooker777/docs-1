---
title: Personnalisation
---

## Attributs customisés et tags
### Tags

Le plugin markdown [Custom tags attributes](https://pypi.org/project/mkdocs-custom-tags-attributes/) convertira tous les `#tags` en `**tags**{ : #tags .hash}` et y ajoutera un CSS personnalisé. 
> [!example] `2022/01/01` deviendra `**2022/01/01**{: #2022/01 .hash}` : #2022/01/01

### Attributs Markdown en ligne

Vous pouvez créer des [Attributs Markdown en ligne](https://python-markdown.github.io/extensions/attr_list/) à l'aide de hashtags. Par exemple, pour aligner un texte à droite :
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
2. Ajouter `#right` sur la dernière partie d'une ligne, et un `#blue` sur un mot aléatoire : 
```md
Lorem ipsum dolor sit amet, consectetur adipiscing#blue elit. In mollis, libero porttitor gravida accumsan, justo metus pulvinar nulla, vitae dictum odio ligula non nisl. Vivamus id venenatis nulla. Nullam sed euismod ligula. Pellentesque tempor elit felis, lobortis vulputate risus gravida et. Curabitur auctor sed libero nec consectetur. Nam placerat rhoncus risus, euismod sagittis eros bibendum ac. Maecenas tellus libero, porttitor ac purus sit amet, viverra suscipit dolor. Proin id nisl velit. Ut at tincidunt libero, ac pharetra mi. Integer non luctus nisi.#right
```
Cela apparaîtra comme : 

Lorem ipsum dolor sit amet, consectetur adipiscing#blue elit. In mollis, libero porttitor gravida accumsan, justo metus pulvinar nulla, vitae dictum odio ligula non nisl. Vivamus id venenatis nulla. Nullam sed euismod ligula. Pellentesque tempor elit felis, lobortis vulputate risus gravida et. Curabitur auctor sed libero nec consectetur. Nam placerat rhoncus risus, euismod sagittis eros bibendum ac. Maecenas tellus libero, porttitor ac purus sit amet, viverra suscipit dolor. Proin id nisl velit. Ut at tincidunt libero, ac pharetra mi. Integer non luctus nisi.#right

Notez qu'il peut y avoir un comportement étrange causé par le fonctionnement de [attribute list](https://python-markdown.github.io/extensions/attr_list/) mais cela fonctionne pour la majorité des cas d'utilisation.

Vous pouvez obtenir plus d'informations dans la documentation de [mkdocs-custom-tags-attributes (en anglais)](https://pypi.org/project/mkdocs-custom-tags-attributes/).

## Folder note

Vous pouvez créer une note de dossier si vous utilisez une clé d'entrée `category` qui a le dernier dossier avec le même nom que le fichier. Par exemple : 
`category : folder1/folder2/filename`. Le fichier `filename` sera renommé `index` et le dossier sera nommé `filename`.

> [!info] Si vous utilisez folder note dans obs2mk sans Obsidian Plugin, vous devez configurer une clé d'index. [Voir ici pour plus d'informations](Python/customization.md#Folder%20note)

## Callout & Admonition

Le script supporte les admonitions personnalisées. Pour cela, vous devez d'abord éditer ou ajouter un nouveau fichier css en ajoutant le support de votre nouveau callout customisé comme indiqué dans [Admonition's docs](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#customization).
Par exemple, pour ajouter une admonition `dictionnary` :
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
Cela vous donnera :

!!! dictionnary
    Here's a callout block.
    It supports **markdown** and [[wikilinks]]

Le `dictionnaire` sera reconnu, et converti !

## Liste d'article

![[Article_list.png]]
Une nouvelle façon d'afficher votre article/poste est d'utiliser un modèle spécial.

Pour organiser cela, vous devez utiliser :
- Des index de pagination
- Un fichier `index.md` dans un dossier (dossier "une catégorie").

Cet `index` est sous cette forme :
```md
---
template: blog.html
title: Folder Index
category: FolderName
hidden: True
---
Une chouette description
```

Le `blog.html` utilise un fichier dans `overrides/partials`.

Si vous voulez cacher un fichier de cette liste, vous pouvez utiliser la clé `hidden` dans le frontmatter. 

> [!Warning] Plugin
> La date affichée dépend d'un nouveau plugin nommé [`mkdocs-git-revision-date-localized-plugin`](https://github.com/timvink/mkdocs-git-revision-date-localized-plugin). N'oubliez pas de le personnaliser !

> [!warning] Pour afficher une image illustrative, veuillez ajouter une clé de métadonnée dans le frontmatter
> 1. Image située dans le blog : `image:`
> 		Cette image doit être le nom de l'image (+ extension) et placée dans `assets/img`.
> 2. Image externe: `banner:`

Enfin, il est possible de configurer l'affichage du nombre de page (pagination) et la traduction du mot "posts in", en modifiant `extra` dans le fichier de configuration mkdocs `mkdocs.yml` :
```yml
extra:
  SEO: 'assets/meta/LOGO_SEO.png' #permet d'afficher une image de logo dans les SEO
  pagination: false #defaut: true
  pagination_translation: 'postes dans' #defaut: 'posts in'
```


> [!note] Vous pouvez aussi utiliser la github action `create_index` pour créer un nouvel index pour un nouveau dossier.
> Pour plus d'information voir [Workflow](../Getting%20Started/Workflow.md)

## Commentaires

Dans `overrides/partials`, vous noterez la présence du fichier nommé `comments.html`. Ce fichier permet de configurer des **commentaires** sur votre blog ! Cela use [Giscus](https://giscus.app/fr) pour le configurer.

D'abord, suivez le tutoriel (en anglais) sur la documentation de [Material Mkdocs](https://squidfunk.github.io/mkdocs-material/setup/adding-a-comment-system/). Après cela, copié le script de Giscus, tel que : 
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

> [!note] Pour le thème, vous pouvez utiliser `dark-dimmed`.

Vous devez coller ce texte dans le fichier `comments.html` (que vous avez vu plus tôt), tout de suite après la partie `<h2>`

Le fichier final ressemblera à ça : 

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
  data-lang="fr"
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
<!-- Giscus -->
{% endif %}
```

Vous pouvez activer ou désactiver les commentaires sur une page spécifique en rajoutant `comments: false` dans le frontmatter de la page, tout en activant ou désactivant de manière globale les commentaires dans [le fichier `mkdocs.yml`, avec la clé `comments` dans la partie `extra`.](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/59d39757d85cd418a2fd57fdc06128713a8cf95e/mkdocs.yml#L138)

- Si vous désactivez globallement avec `comments: false` vous pouvez activer pour une page spécifique avec la clé `comments: true` dans le frontmatter.
- Dans le cas contraire, vous pouvez désactiver pour une page spécifique avec la clé `comments: false` dans le frontmatter.

> [!warning] Sans la clé `comments` de la partie `extra` de `mkdocs.yml`, le build échouera !

> [!important] Vous devez vérifier que votre fichier `overrides/hooks/on_env.py` contient le code suivant :
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


## Vue graphique

> [!important] Si vous ne souhaitez pas ajouter une vue graphique, vous avez besoin d'éditer le fichier [`mkdocs.yml`](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/59d39757d85cd418a2fd57fdc06128713a8cf95e/mkdocs.yml#L139) et mettre la clé `generate_graph` à `false`.
> En effet, par défaut, le graph sera généré !

J'ai réussi à créer une vue graphique semi-interactive en python. Elle ne permet pas de cliquer sur les articles/post, mais vous pouvez avoir une vue de votre blog.

> [!warning] Notes
> [obsidiantools](https://github.com/mfarragher/obsidiantools) supporte actuellement python qu'à partir de la version 3.9, ce qui signifie que si vous utilisez Netlify pour build votre blog, vous devez utiliser une ancienne version (car Netlify ne supporte que python 3.8). Les anciennes versions ne sont pas parfaite.

Pour l'utiliser, vous devez installer `obsidiantools` et `pyyaml` :
```bash
pip install obsidiantools
pip install pyvis
```

N'oubliez pas de les rajouter à vos `requirements.txt` !

Ensuite, vous devez ajouter ceci à [`overrides/hooks/on_env`](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/main/overrides/hooks/on_env.py) : 
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

Le fichier `graph.html` sera généré dans le dossier `docs/assets`. Je vous conseille de l'exclure via le fichier `.gitignore`, en rajoutant le chemin du fichier dedans.

Ensuite, vous devez éditer le [fichier `utils.js`](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/main/docs/assets/js/utils.js) en rajoutant ceci : 
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

Enfin, pour adapter le thème, vous devez aller [éditer le fichier `utils.css`](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/main/docs/assets/css/utils.css) et rajouter ceci :
```css
#mynetwork {
    border: none !important;
}
.card {
    border: none !important;
    background-color: transparent !important;
}
```

Pour finir, il suffit de créer un fichier `graph.md` dans le dossier `docs` et d'y rajouter ceci :
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

> [!warning] À propos de la création d'une vue graphique pour chaque fichier :
> Je ne pense pas que ce soit une bonne idée car : 
> - Le nombre de fichier généré serait énorme ; 
> - Le temps de build serait extrêmement important. 

