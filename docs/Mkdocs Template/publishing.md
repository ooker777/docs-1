---
title: How to publish
---

[[Compatibility of publishing solution|Pros & cons of some publishing solution, including Github Pages, Netlify, Vercel...]]  

## Publishing  

You can publish your site using:  

- [Netlify](https://www.netlify.com/) by using the template available at [ObsidianPublisher/publisher-template-netlify](https://github.com/ObsidianPublisher/publisher-template-netlify)  
- [Github Pages](https://pages.github.com/) by using the template available at [ObsidianPublisher/publisher-template-gh-pages](https://github.com/ObsidianPublisher/publisher-template-gh-pages)  

### Through Github Pages  

The blog can be published using GitHub Pages. With the new version, you don't need to use a `gh-pages` branch anymore. The configuration should be set up as follows:  
![[../../assets/img/gh_page_config.png]]  

> [!bug] The workflow isn't running!  
>  
> - Check the run and error logs in the `Actions` tab.  
> - Verify that the actions have the correct read and write permissions in `Settings → Actions → General → Workflow permissions`.  
>  ![image](https://user-images.githubusercontent.com/30244939/166161294-0f4f70c2-fda5-4465-89b0-d6b1b5e6995d.png)  
>> [!warning] In case of workflow problems  
>> In issue #4, we discovered that sometimes, GitHub Actions may refuse to run without reason. If this happens to you, please contact GitHub Support for assistance.  

### Through Netlify  

Netlify.app is a great tool to deploy your blog. It's a free service that allows you to deploy your blog on the web, and the build will be faster than GitHub Pages.  

To deploy your blog, you can click here : [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ObsidianPublisher/publisher-template-netlify)  

Alternatively, you can follow these steps:  
- Create an account on Netlify  
- Add a new site using the existing repository  
- For configuration, use:  
  - Leave the repository field blank  
  - Use `mkdocs build` as the build command  
  - Use `site` as the publish directory  

![config_netlify](https://i.imgur.com/ESc9vLu.png)  
- Add an environment variable with `PYTHON_VERSION` set to `3.8` or include a `runtime.txt` file in the root of your repository with the same value.  
- To improve deployment time and reduce bandwidth usage, you can disable deployment previews in the site settings by navigating to Settings > Build & Deploy > Deploy Preview and unchecking the box.  
![picture 1](https://i.imgur.com/DNS0DdX.png)  
  

> [!note] It may be necessary to delete your `gh-pages` branch in GitHub to remove GitHub Pages.  
  