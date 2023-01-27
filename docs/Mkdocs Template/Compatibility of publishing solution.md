
# Netlify  

> [!success] Pros  
> - Faster. Really faster. Optimized  
> - No need to use a `gh-pages` branch  
> - Better links & link customization  

> [!missing] Cons  
> - Limited to 300/min/build per month  
> - Limited to python 3.8  

> [!warning] Python 3.8  
> `obsidiantools` package, allowing to create the [[Advanced setup/customization.md#Graph view|graph]], ended support with this version.  
> In conclusion, the graph created won't be accurate.  
> Moreover, some plugins can end the support with it.  

---  

# GitHub Pages  

> [!success] Pros  
> - Support all python version  
> - A lot of option (as you can create your own workflow)  
> - Allow private repo (with some limitation)  

> [!missing] Cons  
> - Long. Really, pretty, long.  
> - Private repo limitation ⇒ 3000 min/build (more than public of netlify…)  
> - Complicated to use & understand.  

---  

# Vercel  

> [!warning]  
> For the moment, Vercel is not supported : Python is compiled without `sqlite3`, and the graph generation use a tools that use it.  
> This absence conclude to a build fail.    
> You can use it if you don't use the graph view.  
  