module.exports = {}

module.exports.onload = async (plugin) => {
    plugin.addCommand({
        id: 'space-quote',
        name: 'Ajuster les espaces avant les citations',
        checkCallback: async (checking) => {
            const actualOpenedFile = plugin.app.workspace.getActiveFile();
            if (actualOpenedFile && actualOpenedFile.extension === 'md') {
                if (!checking) {
                    let contents = await plugin.app.vault.read(actualOpenedFile);
                    contents = contents.replace(/^(>+)\s*/gm, `$1 `)
                    await plugin.app.vault.modify(actualOpenedFile, contents);
                }
                return true;
            }
            return false;
        }
    });
    plugin.addCommand({
        id: 'hard-break',
        name: 'Markdown : Ajouter des espaces avant les retours à la ligne',
        checkCallback: async (checking) => {
            const actualOpenedFile = plugin.app.workspace.getActiveFile();
            if (actualOpenedFile && actualOpenedFile.extension === 'md') {
                if (!checking) {
                    let contents = await plugin.app.vault.read(actualOpenedFile);
                    contents = contents.replace(/^(.+)\n/gm, `$1  \n`)
                    //replace more than 2 spaces by 2 spaces
                    contents = contents.replace(/ {3,}/gm, `  `)
                    //remove solo /n
                    contents = contents.replace(/^\n$/gm, `  \n`)
                    await plugin.app.vault.modify(actualOpenedFile, contents);
                }
                return true;
            }
            return false;
        }
    });
};