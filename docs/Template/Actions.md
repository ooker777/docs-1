---
share: true
title: Github Actions
---

The repository [ObsidianPublisher/actions](https://github.com/ObsidianPublisher/actions) own every Github actions that will be reused in the templates. 

> [!warning] Don't download the actions in `.github/workflows` folder.
> You need to download and use the file in `template` folder.

## General 

You can also create workflow conditional runs with the `if` keyword. For example, you can target merging events by prepending them with `[PUBLISHER]` and create workflows based on pull requests.

> [!info] Using the if keyword Target the merging event name with: `if: startsWith(github.event.head_commit.message, '[PUBLISHER]')`. You can use the keyword `if` for steps or entire jobs.

> [!info] About workflow run 
> If you use workflows (every workflow) on a **private** repository, you should be aware that you have a limited amount of workflow run time, 2000 minutes (3000 minutes with a pro account).
>
> - Mkdocs Build takes around ~2 minutes (more for larger repositories)
> - Updating requirements (each 24 hours) takes ~30 seconds 
> Finally, you can run ~1000 blog builds per month (1500 for pro), which is around 32 builds per day. Note: The pip cache will typically speed up the process, so the Publisher action should take less than 1-1.5 minutes for small builds.

## Maintenance workflow

Some workflows needs a `.github/env` file to work. The `env` file will work as follow:
```env
WORKFLOW_TYPE='gh-pages' | 'netlify' | 'vercel'
CLEAN=true
AUTO_MERGE=false
DRY_RUN=false
```

### Update

This action allows to update the last version of the [template](https://github.com/ObsidianPublisher/sync_template). 

The action needs a `GH_TOKEN` secret in your repository settings. This token should have the `repo` and `workflows` scope. You can create a token [here](https://github.com/settings/tokens/new?description=PUBLISHER%20TEMPLATE&scopes=repo,workflow).

[See here to know how to register it as a secret](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).

This action will update your template by replacing the old files with the new ones. After the upgrade, the action will create a pull request in your repository, which you can review and either accept or reject.

This allows you to review the changes before they are applied to your template.
The `AUTO_MERGE` key in `.github/.env` can be set to `true` to automatically merge the pull request.

### Index

It Allows you to quickly create a new "category" / blog listing in your repository by creating a new specified folder with the name of the category. To create a new category, follow these steps:
 1. Go to the "Actions" tab
 2. Click on "Index Creation"
 3. Click on "Run Workflow"
 4. Fill out the form:

 - **Folder name** : The name of the folder you want to create, it will be the "new category".
 - **Parent folder** : The _optional_ path of the folder you want to create the new category in. For example, `main_category/draft` will create the `docs/main_category/draft/folder_name` older.
 - **Description** : An _optional_ category description.
 - You can also:
     - **Hide the table of contents** in the index file.
     - **Hide the navigation panel** in the index file.
     - Perform a **dry-run**: It will only show the result of the operation, but will not create the folder and the index file.

> [!bug] The workflows won't activate the other actions, so you need to run them manually if you need.

## Maintenance

This workflows will, every 24 hours or on demand:
- Update the requirements and the cache
- Clean unused images, if `CLEAN` is set to `true` in `.github/.env`. Also, the DRY_RUN key can be set to true to only show the result of the operation, but not actually delete the images.

## Deploy

The deploy workflow will build your site and deploy it to the specified platform. 

> [!note] If you use Vercel & Netlify, **without** the graph view, you don't need theses files.

See [[advanced_workflow|advanced workflow]] for more information.

### Github Pages

You need to download [`deploy.yml` from there](https://github.com/ObsidianPublisher/actions/blob/main/template/gh-pages/deploy.yml) and the [attached `.env` file.](https://github.com/ObsidianPublisher/actions/blob/main/template/gh-pages/.env)

You also need to activate the Github Pages in your repository and use an action to trigger the pages. 

The configuration needs to be like this:

![[github_actions_pages.png]]