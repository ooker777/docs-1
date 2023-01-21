---
title: Installation
---

Mkdocs Obsidian is a combination of an Obsidian plugin and a Material mkdocs template that allows you to create a personal wiki site based on your Obsidian Vault.

If you are familiar with GitHub Pages, you can easily use the [Mkdocs Material Template](https://www.squidfunk.github.io/mkdocs-material/) by directly templating it using the [GitHub template](https://github.com/ObsidianPublisher/publisher-template-gh-pages/generate).

Alternatively, if you prefer to use Netlify, you can also template this [Netlify repository](https://github.com/ObsidianPublisher/publisher-template-netlify/generate) and use it to deploy your personal wiki site.

## Installation steps

To use the Mkdocs Obsidian plugin and create a personal wiki site based on your Obsidian vault, you can follow these steps:

1. Create a GitHub account (if you don't have one already)
2. Template the blog by using one of the following options:
	- [GH Pages version](https://github.com/ObsidianPublisher/publisher-template-gh-pages/generate)
	- [Netlify version](https://github.com/ObsidianPublisher/publisher-template-netlify/generate)

3. Clone the repository by following the instructions [here](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)
4. In parallel, download the Obsidian plugin by using the [BRAT](https://github.com/TfTHacker/obsidian42-brat) or the community plugins panel.
5. Configure the plugin's options by setting the repository name, GitHub username, GitHub token, and branch name.
6. Add the `share: true` key in the frontmatter of the notes you want to publish.
7. Customize the folder options (if desired)
8. Run the commands through the file menu or commands palette.
9. Update the `mkdocs.yml` file with your repository information.
10. Make sure to allow push access on GitHub.
11. Run `pip install -r requirements.txt` to install necessary packages
12. You can deploy your site using GitHub Pages or Netlify.

> [!INFO] [[Obsidian Github Publisher/Configuration example|See here for advanced configuration within obsidian]]

## Upgrading

To keep your template up to date, you should follow these steps:

1. Add a star to the [ObsidianPublisher/follow_template](https://github.com/ObsidianPublisher/follow_template) repository to stay informed about updates.
2. Regularly check for new releases, which will contain:
    - The upgraded files in a `zip` file named `changed_files.zip`
    - All important files (excluding `mkdocs.yml`) in a `zip` file named `release.zip`
    - A list of edited files in the CHANGELOG
3. You can also set up a [Github Actions](https://github.com/features/actions) workflow to automatically update the template files every 24 hours.

Note that, you should not edit or configure the files that are provided with the template.

```yaml
name: Get lastest release from template
on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * *'
env:
  AUTO_MERGE: false #set to true to enable auto merging
  OVERWRITE: true #set to false to keep an old version of this workflow
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Get release from template
        uses: robinraju/release-downloader@main
        with:
          latest: true
          fileName: "release.zip"
          repository: "ObsidianPublisher/follow_template"
      - name: Unzip changed files
        run: |
          mv .github/workflows/auto_update.yml .github/workflows/auto_update.bak.yml
          unzip -o release.zip
          rm release.zip
      - name: Delete old auto_update.yml
        if: env.OWERWRITE == 'true'
        run: |
          rm .github/workflows/auto_update.bak.yml
      - name: Restaure old auto_update.yml
        if: env.OVERWRITE == 'false'
        run: |
          rm .github/workflows/auto_update.yml
          mv .github/workflows/auto_update.bak.yml .github/workflows/auto_update.yml
      - name: Create Pull Request
        id: cpr
        uses: peter-evans/create-pull-request@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          commit-message: Update from template
          title: "[BUMP] Update from template"
          body: |
            files changed:
            ```
            $(git diff --name-only HEAD^ HEAD)
            ```
          labels: |
            update
          branch: update_repo
          delete-branch: true
      - name: AutoMerging 
        if: steps.cpr.outputs.pull-request-operation == 'created' && env.AUTO_MERGE == 'true'
        uses: peter-evans/enable-pull-request-automerge@main
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          pull-request-number: ${{ steps.cpr.outputs.pull-request-number }}
          merge-method: squash
```

This action will automatically download the `release.zip` file from the latest release of the template repository, which contains all the template files.

It will then upgrade your template by replacing the old files with the new ones. After the upgrade, the action will create a pull request in your repository, which you can review and either accept or reject.

This allows you to review the changes before they are applied to your template.

