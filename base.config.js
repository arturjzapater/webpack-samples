const path = require('path')

module.exports = {
    entry: './src/base.js',
    output: {
        filename: 'client.js',
        path: path.resolve('dist/base'),
    },
    mode: 'production',
}