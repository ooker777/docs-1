---
title: Installation
---

Mkdocs Obsidian is a combination of an Obsidian plugin and a Material mkdocs template that allows you to create a personal wiki site based on your Obsidian Vault.

If you are familiar with GitHub Pages, you can easily use the [Mkdocs Material Template](https://www.squidfunk.github.io/mkdocs-material/) by directly templating it using the [template](https://github.com/ObsidianPublisher/mkdocs-template/generate).


## Installation steps

To use the Mkdocs Obsidian plugin and create a personal wiki site based on your Obsidian vault, you can follow these steps:

1. Create a GitHub account (if you don't have one already)
2. [Template the blog](https://github.com/ObsidianPublisher/mkdocs-template/generate)
4. In parallel, download the Obsidian plugin by using the [BRAT](https://github.com/TfTHacker/obsidian42-brat) or the community plugins panel.
5. Configure the plugin's options by setting the repository name, GitHub username, GitHub token, and branch name.
6. Add the `share: true` key in the frontmatter of the notes you want to publish.
7. Customize the folder options (if desired)
8. Run the commands through the file menu or commands palette.
9. Make sure to allow push access on GitHub.
11. You can deploy your site using GitHub Pages, Netlify, Vercel...

> [!INFO] [[Plugin/Configuration example|See here for advanced configuration within obsidian]]

## Configure the template

> [!Warning]
> Configuration is mandatory. Do not configure the template will lead to crash during build and errors.

There is two way to edit the template for creating the website :
- Manually, with editing `mkdocs.yml` and creating appropriate workflows files,
- Automatically, through a Github Action.

### Automatic configuration

1. First go into SETTINGS
  - In `Pages` : If you want to use the template with Github Pages, you need to activate the GitHub Pages in your repository settings, and use **action** to trigger the page build.
  ![](https://i.imgur.com/VHPLooc.png)
  - In `Actions` -> `General` : Allow Github Actions to read and write, and allow GitHub Actions to create and approve pull requests, as follows:
  ![](https://i.imgur.com/w79NrA8.png)
  Don't forget to save the changes!
  - Create a [personal access token](https://github.com/settings/tokens/new?description=PUBLISHER%20TEMPLATE&scopes=repo,workflow), copy it and register it as a secrets :
  ![](https://i.imgur.com/CW7YTms.png)
  ![](https://i.imgur.com/9SCSooJ.png)
  This key will also be used by the update workflows.
  - If you choose to rely on netlify or vercel, [you need to configure the keys](https://obsidian-publisher.netlify.app/template/advanced_workflow/).
2. Go into the Actions tabs
3. Click on the Generate website workflow and `Run workflow`. A popup will appear, and fill the informations.
  ![](https://i.imgur.com/QZj8bk0.png)
  ![](https://i.imgur.com/n8wyvSp.png)
  Each informations corresponding to the [mkdocs.yml configuration file](https://www.mkdocs.org/user-guide/configuration/).
  By default, the workflows will send you a pull requests, so you can review the generation before the merging. You can automatically merge with the last options.
  ![](https://i.imgur.com/SvPPyHc.png)
4. Go into the pull-request tab. Verify all files, and if it's okay for you, you can merge the PR.
  ![](https://i.imgur.com/zKtGagJ.png)

### Manual configuration

[The configuration of mkdocs.yml is explained here](https://www.mkdocs.org/user-guide/configuration/).

1. First, edit the `mkdocs.yml` files with editing:
- `site_name` : The name of your website
- `site_description` : The description of your website
- `site_author` : The author of your website
- `site_url` : The url of your website
- `language` : [The language of your website](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/)
- In extra:
    - `comments` : If you want to enable comments, you need to set it to `true` and [configure the comments](https://obsidian-publisher.netlify.app/advanced/customization/?h=comments#comments)
    - `generate_graph` : Set it to `true` if **you use GitHub Pages** and you want to generate the graph view. Set it to `false` if you use Netlify or Vercel. [See here on how to configure the graph with Netlify/vercel](https://obsidian-publisher.netlify.app/template/advanced_workflow/)
    - `auto_h1` : Disable the automatic generation of h1 if no h1 is found
2. Create [keys if you use Vercel /Netlify](https://obsidian-publisher.netlify.app/template/advanced_workflow/).
3. [Grab the `.env` and `deploy.yml` corresponding to your methods of deployment](https://github.com/ObsidianPublisher/actions/tree/main/template):
    - `.env` must be placed at `.github/`
    - `deploy.yml` must be placed at `.github/workflows/`
4. For **Vercel** or **Netlify** ONLY, create a `requirements_actions.txt` file at the root of your repository, and add the following lines:
    ```
    obsidiantools==0.10.0
    pyvis==0.3.1
    ```
5. **For Netlify ONLY** : Create a `runtime.txt` file with `3.8` in it.



## Upgrading

To keep your template up to date, you should follow these steps:
1. Add a star to the [ObsidianPublisher/template_overrides](https://github.com/ObsidianPublisher/template_overrides) repository to stay informed about updates.
2. Regularly check for new releases, which will contain:
    - The upgraded files in a `zip` file named `changed_files.zip`
    - All important files (excluding `mkdocs.yml`) in a `zip` file named `release.zip`
    - A list of edited files in the CHANGELOG
3. You can also set up a [Github Actions](https://github.com/features/actions) workflow to automatically update the template files every 24 hours.

Note that, you should not edit or configure the files that are provided with the template.

See [[Actions#Update ()|here]] for more information about the update workflow.