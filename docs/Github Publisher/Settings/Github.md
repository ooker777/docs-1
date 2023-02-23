---
title: Github Configuration
---

- **Repo name**: The repository where the files will be sent.
- **GitHub username**: Your GitHub username.
- **GitHub Token**:[^1] Get your [GitHub Token here](https://github.com/settings/tokens/new?scopes=repo). The correct settings should already be applied. To avoid generating a new token every few months, select the “No expiration” option. Click the “Generate token” button and copy the token you are presented with on the next page.
- **Branch name**: The branch where the files will be sent. By default, it is set to `main`, but you can change it to whatever you want, as long as the branch exists.
- Automatic branch merging can be disabled.

It is possible to use per-file configuration to change the repository name, username, and branch. You can find more information about it [[Per files settings|here]].

### GitHub Workflow

Also, you can configure your GitHub Workflow here : 
- You can edit the pull-request "commit" message, allowing to prevent CI or Netlify with `[skip ci]` or `[skip netlify]`. Note that there will be always the PR number appended after the message.
- You can run a GitHub Actions workflow that have a `workflow_dispatche`.

[^1]: A GitHub account and connection is required to create a token.