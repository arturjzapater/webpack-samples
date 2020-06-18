const path = require('path')

module.exports = {
    entry: './src/base.js',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist/base'),
    },
    mode: 'production',
}