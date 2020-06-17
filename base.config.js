const path = require('path')

module.exports = {
    entry: './src/base/client.js',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist/base'),
    },
}