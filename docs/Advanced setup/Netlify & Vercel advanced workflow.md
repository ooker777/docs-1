## Introduction

As I stated in [[Compatibility of publishing solution|compatibility of publishing solution]]:
- [[Compatibility of publishing solution#Netlify|Netlify]] is limited to Python 3.8, blocking `obsidiantools` to an older version ; 
- [[Compatibility of publishing solution#Vercel|Vercel]] crash when running the `on_env` because of `pyvis`, used to generate the obsidian graph.

Obsiously, these two error can be stopped with removing the use of the graph, but I think it's not a good idea.

Instead, I searched and found some solution to run these two, using Github Action. 

It's pretty difficult to set-up this, so please, beware!

> [!info] You need to [download this github action, named `advanced_deploy.yml`](https://github.com/ObsidianPublisher/follow_template/blob/main/.github/workflows/advanced_deploy.yml) and this workflows **must replace** the old building workflow.

> [!warning] Secrets keys
> Each workflows needs you to configure [encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets). Please, follow [this tutorial](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) to set them.

First, in the two cases, you need to create a new `requirements-actions.txt` file (at the root), with this:
```
obsidiantools==0.10.0
pyvis==0.3.1
```

> [!danger] You need to remove the `graph.html` if you add it to your git-ignore. It needs to be pushed!

## Vercel

> [!important] Update your `.github/.env` file with adding these keys:
> ```
> GENERATE_GRAPH=true
> WORKFLOW_TYPE='vercel'
> ACTIONS_REQUIREMENTS=true
> ```

First, create a new vercel project, with adding the template in it. After that, you need to disconnect (or remove) the repository.

Don't forget to configure the deployement for mkdocs. For that, go to the **settings** section, and check if everything looks like that : 
![[vercel_config.png]]

You need to grab : 
- Your `VERCEL_TOKEN` : [here](https://vercel.com/account/tokens)
- Your `VERCEL_PROJECT_ID` : [here](https://vercel.com/lisandra-dev/test-vercel/settings/general), scrolling to `PROJECT_ID`
- Your `VERCEL_ORG_ID` : [here](https://vercel.com/account), scrolling to `Your ID` section.

These key must be registered as secrets.

Normally, each time you push to your repository, the building append, generate the graph, and build your vercel project.

> [!info] Build time take (in my testing repo) takes $2.14~min$.

## Netlify

As before, you needs to create a Netlify repository and set-it. You must keep the repository and the auto deploy. 
If you **want** to prevent the auto-publishing at each push, you **need** to prepend each commit by `[skip netlify]`. 

> [!warning] **You need** to update your Github Publisher settings and add `[skip netlify]` at **Github configuration -> Github Workflow -> Commit message**.

The only thing you need to do is to create a **build hooks**, in **Site settings -> build & deploy -> scroll until to see build hooks**. 
Click on **Add build hook** and set this: 
![[netlify_build_hooks.png]]
Save and copy the links.

Now, register this hooks as a Github Secrets, named `NETLIFY_HOOK`.

Now, each time you will push, the action `advanced_deploy` will be triggered, and deploy.

> [!info] The complete workflow takes (with my testing repo) $42s$ (github action) + $35s$ of Netlify build $= 1.30~min$
