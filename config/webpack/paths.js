import path from 'path';

module.exports = {
    root: path.resolve(__dirname, '../', '../'),
    outputPath: path.resolve(__dirname, '../', '../', 'build'),
    entryPath: path.resolve(__dirname, '../', '../', 'src/index.js'),
    templatePath: path.resolve(__dirname, '../', '../', 'src/index.html'),
    imagesFolder: 'images',
    fontsFolder: 'fonts',
    cssFolder: 'css',
    jsFolder: 'js',
    alias: {
        components: path.resolve(__dirname, '../../src/components/'),
        containers: path.resolve(__dirname, '../../src/containers/'),
        utils: path.resolve(__dirname, '../../src/utils'),
        actions: path.resolve(__dirname, '../../src/actions'),
        resources: path.resolve(__dirname, '../../resources'),
        types: path.resolve(__dirname, '../../src/types')
    }
};