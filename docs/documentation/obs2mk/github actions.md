The plugins can be used as a github action using `--GA` option : `obs2mk —GA --keep file [FILEPATH]`

!!! notes
    - The `--GA` option remove the `git pull` and `git push`.
    - The `--GA` use a specific configuration file that will be in [`source/.github-actions`](https://github.com/Mara-Li/mkdocs_obsidian_template/blob/main/source/.github-actions)

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
          git config --global user.name 'mara-li'
          git config --global user.email 'mara-li@users.noreply.github.com'
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
  push

jobs:
  path-filter:
    runs-on: ubuntu-latest
    outputs:
      filtering: ${{ steps.filter.outputs.changes }}
    steps:
      - uses: actions/checkout@v2
      - uses: dorny/paths-filter@v2
        id: filter
        with:
          filters: |
            changes:
              - 'README.md'
              - 'overrides/**'
              - 'docs/**'
              - 'mkdocs.yml'
              - 'requirements.txt'
  mkdocs:
    runs-on: ubuntu-latest
    needs: path-filter
    if: needs.path-filter.outputs.filtering == 'true'
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
