const path              = require('path');                          // NodeJS core path library

const processScriptData = require('./processScriptData');
const processJsonData   = require('./processJsonData');


module.exports = function gatherComponentData(file) {
    const srcDir = path.parse(file.path).dir;
    const name = path.parse(file.path).base.replace(/\..*$/, '');
    const destDir = path.join(path.parse(file.path).dir, '..', name);
    const type = path.parse(path.resolve(destDir, '..')).name.toLowerCase();
    const vmName = `${name}ViewModel`;
    const scriptData = processScriptData(path.resolve(srcDir, `${name}.es`));
    const mdFile = path.resolve(srcDir, `${name}.doc.md`);
    const vm = processJsonData(path.resolve(process.cwd(), `Cwel/dist/docs/csdoc/${vmName}.json`));
    const modelData = processJsonData(path.resolve(process.cwd(), `${srcDir}/default.json`));

    return {
        name,
        type,
        dirPath: destDir,
        script: scriptData,
        mdFile,
        modelData,
        vm,
    };
};
