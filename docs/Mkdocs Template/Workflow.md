---
share: true
title: Github Actions
---

There are many GitHub Actions here! If you're not familiar with GitHub Actions, it's a feature that allows you to automate software workflows, including building, testing, and deploying code, as well as managing code reviews, branches, and issues.

In this case, the GitHub Actions (or workflows) are used to build the Obsidian to Mkdocs (or Mkdocs Obsidian Publisher) project using a file in the repository.

One such action is the `mkdocs_build.yml` file, located in `.github/workflows/mkdocs_build.yml`. This file is used to build the Mkdocs site. It runs the installations of the requirements and the commands for building the GitHub page. This workflow will only run for the main or master branch, and if the push includes files from:

- `docs`
- `requirements.txt`
- `README.md`
- `overrides`
- `mkdocs.yml`

Another action is the `update_requirements.yml` file, also located in `.github/workflows/`.
This action is triggered each day and it's used to update the `requirement.txt` file in case of update. The workflow allows cleaning the unused media to gain build time and also space. If you don't want to remove these medias, you need to change the [the 10th line]([https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/abb7e00fc5b01d7f52962f4656363770f189edee/.github/workflows/update_requirements](https://github.com/ObsidianPublisher/publisher-template-gh-pages/blob/abb7e00fc5b01d7f52962f4656363770f189edee/.github/workflows/update_requirements)

> [!info] Activated : `create_index.yml` Allows you to quickly create a new "category" / blog listing in your repository by creating a new specified folder with the name of the category. To create a new category, follow these steps:
>
> 1. Go to the "Actions" tab
> 2. Click on "Index Creation"
> 3. Click on "Run Workflow"
> 4. Fill out the form:
>
> - **Folder name** : The name of the folder you want to create, it will be the "new category".
> - **Parent folder** : The _optional_ path of the folder you want to create the new category in. For example, `main_category/draft` will create the `docs/main_category/draft/folder_name` folder.
> - **Description** : An _optional_ category description.
> - You can also:
>     - **Hide the table of contents** in the index file.
>     - **Hide the navigation panel** in the index file.
>     - Perform a **dry-run**: It will only show the result of the operation, but will not create the folder and the index file.

You can also create workflow conditional runs with the `if` keyword. For example, you can target merging events by prepending them with `[PUBLISHER]` and create workflows based on pull requests.

> [!info] Using the if keyword Target the merging event name with: `if: startsWith(github.event.head_commit.message, '[PUBLISHER]')`. You can use the keyword `if` for steps or entire jobs.

> [!info] About workflow run 
> If you use workflows (every workflow) on a **private** repository, you should be aware that you have a limited amount of workflow run time, 2000 minutes (3000 minutes with a pro account).
>
> - Mkdocs Build takes around ~2 minutes (more for larger repositories)
> - Updating requirements (each 24 hours) takes ~30 seconds 
> Finally, you can run ~1000 blog builds per month (1500 for pro), which is around 32 builds per day. Note: The pip cache will typically speed up the process, so the Publisher action should take less than 1-1.5 minutes for small builds.