---
share: true
title: Dans Obsidian
---

>[!note] 
> Les actions github ne convertissent plus les hashtags et la conversion vers les callouts Admonition mkdocs. Maintenant, deux plugins mkdocs gèrent cela, donc vous n'avez plus besoin (normalement) d'utiliser obs2mk.
>
> Les plugins sont :
> - [Mkdocs Callouts](https://github.com/sondregronas/mkdocs-callouts)
> - [Custom Tags Attributes](https://github.com/Mara-Li/mkdocs-custom-tags-attributes)
>
> Ces deux plugins ne changeront jamais le fichier envoyé dans Github, car l'édition a lieu pendant la construction de la page. 


Le plugin modifie directement :
- [[Template/customization#Folder note|Folder note]]
- Catégorisation et création des chemins de fichiers personnalisés

>[!warning] Si vous utilisez votre coffre-fort directement dans un dépôt, l'envoi cassera vos fichiers ! Le module n'est pas pour ces stratégies.

## Stratégie : Python

Si vous souhaitez continuer à utiliser le workflow python, lisez ce qui suit. 

> [!warning] A propos du même repo et du même coffre-fort
> Si vous utilisez votre coffre-fort directement dans un repo, la conversion par Obs2mk cassera vos fichiers. Le script n'est **pas** pour ces stratégies. 
> Exemple de textes cassés :
> - Hashtags : `**2022/01**{ : #2022/01 .hash}`
> - Callout converti en Admonition Mkdocs Callout
> - Votre message d'accueil
> - Liens et chemins internes

> [!info] Configuration 
> Le script python utilise la configuration `minimal`, et cette configuration peut être personnalisée en utilisant un fichier nommé `configuration.yml` ajouté dans la racine du dépôt. 
> Ici, vous pouvez désactiver la conversion des callouts et la conversion des hashtags avec :
> ```yaml
> minimal :
>   convert :
>       admonition : false
>       hashtags : false
> ```
> Évidemment, vous pouvez en définir un `true` et un autre `false`.
>> [!note]
>> Si vous désactivez les deux, vous n'avez pas besoin de la conversion obs2mk (vous gagnerez BEAUCOUP de temps pour le partage). Il suffit de créer un workflow sur push pour construire la page mkdocs.
>> Pour ce faire, il suffit de supprimer le `if` dans le fichier `.github/workflow/mkdocs_build.yml`. 

