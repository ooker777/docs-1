---
share: true
title: Foire aux questions
---

## 1. Dépôt privé

Comme j'autorise ce repo à être un modèle, il vous permet de créer un dépôt privé !

> [!Note]
> Fork ne vous permet pas de créer un dépôt privé, c'est pourquoi vous devez utiliser le modèle.

## 2. Mettre à jour le modèle

L'utilisation d'un template (à la place de fork) empêche d'obtenir la mise à jour que je fais parfois. Donc, pour garder un œil dessus, vous devez créer une **branche** basée sur la template. 

Dans le dossier cloné, (dans votre blog) faites : 
```
git remote add Template git@github.com:Mara-Li/obsidian-mkdocs-publisher-template.git
git fetch Template
git checkout -b template Template/main
```
Ensuite, pour récupérer la mise à jour : 
```
git checkout template
git pull
```

Vous pouvez fusionner la branche, ou juste récupérer le fichier mis à jour avec la commande checkout : 
```git
git checkout main
git checkout template chemin/vers/le/fichier/quevousvoulez 
```

Il est aussi possible de merge (fusionner) les branches avec : 
```
git checkout main
git merge Template/main
```

N'oubliez pas de commit et de push !

