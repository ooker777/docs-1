The plugins can be used as a github action using `--GA` option : `obs2mk —GA --keep file [FILEPATH]`

!!! notes
    - The `--GA` option remove the `git pull` and `git push`.
    - The `--GA` use a specific configuration file that will be in [`source/.github-actions`](https://github.com/Mara-Li/mkdocs_obsidian_template/blob/main/source/.github-actions)

The `.github-actions` use the same settings as the [[usage#Script's Configuration|script configuration]] but only for :
- The `index_key`
- The `default_blog` folder
- The `category` key

Here is an example of worflow using `--GA` : 

```yml
name: ci
on:
  workflow_dispatch

jobs:
  obs2mk:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v3
        with:
          python-version: 3.10.2
  
      - name: obs2mk source files
        run: |
          pip install git+https://github.com/Mara-Li/mkdocs_obsidian_publish.git@github-actions
          for f in ${{ github.workspace}}/source/*
          do
            echo $f
            if [[ "$f" == *md ]] 
            then
              obs2mk --GA --keep file "$f"
            fi
          done
          obs2mk --GA clean
      - name: clean source files
        run: rm ${{github.workspace}}/source/*
      - name: Push new files
        run: |
          git pull
          git config --global user.name 'github-actions'
          git config --global user.email 'github-actions@users.noreply.github.com'
          git add . 
          git commit -am "Updated blog 🎉"
          git push
      - name: Install Python dependencies
        uses: py-actions/py-dependency-install@v3
        with: 
          path: requirements.txt
      - name: Build mkdocs
        run: mkdocs gh-deploy --force --clean

```

You can update the building mkdocs page as follow :
```yml
name: mkdocs build

on:
  push:
    paths:
      - 'README.md'
      - 'overrides/**'
      - 'docs/**'
      - 'mkdocs.yml'
      - 'requirements.txt'
jobs:
  mkdocs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v3
        with:
          python-version: 3.10.2
      - name: Install Python dependencies
        uses: py-actions/py-dependency-install@v3
        with: 
          path: requirements.txt
      - run: mkdocs gh-deploy --force --clean
```
