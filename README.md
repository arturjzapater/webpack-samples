# README

This is just a short collection of sample configurations for webpack that I built to get acquainted with the tool.

## What is in this repo

[base.config.js](base.config.js) is a basic configuration to bundle JavaScript. It only configures an entry point and an output. It requires the output bundle to be manually imported in the HTML file.

[loaders.config.js](loaders.config.js) is a configuration that uses style loaders to manage CSS and bundle it with JavaScript. It also requires the output bundle to be manually imported.

[plugins.config.js](plugins.config.js) uses several plugins to minify and extract CSS and automatically import JavaScript and CSS files into the HTML file.

[media.config.js](media.config.js) is like [plugins.config.js](plugins.config.js) but it also uses `file-loader` to load images onto the output folder.

[wbabel.config.js](wbabel.config.js) is a configuration set to extract CSS and automatically inject CSS and JavaScript into the HTML file. It also processes JavaScript with Babel and uses the babel plugin for the pipeline operator.

## How to use it

If you feel like downloading and playing with this repo, you just need to clone it, install its dependencies with your favourite package manager and change whatever you want.

There are a few scripts already configured that you can use:

To start the server:

```bash
npm start
```

To build a bundle using each configuration (note that you will have to create `index.html` files in `dist/base` and `dist/loaders` that require a `client.js` file):

```bash
npm run build:all
```

If you want to create the bundle for only one configuration, simply change `all` for the configuration name:

```bash
npm run build:base
npm run build:loaders
npm run build:plugins
npm run build:media
```
