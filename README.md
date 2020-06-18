# README

This is just a short collection of sample configurations for webpack that I build to get acquainted with the tool.

## What is in this repo

[base.config.js] is a basic configuration that simply bundles JavaScript. It requires the output bundle to be manually imported in the HTML file.

[loaders.config.js] is a configuration that uses style loaders to manage CSS and bundle it with JavaScript. It also require the output bundle to be manually imported.

[plugins.config.js] uses several plugins to minify and extract CSS and automatically import JavaScript and CSS files into the HTML file.

[media.config.js] is like [plugins.config.js] but it also uses `file-loader` to load images into the output folder.

## How to use it

If you feel like cloning and playing with this repo, you just need to clone it, install its dependencies with your favourite package manager and change whatever you want.

There are a few scripts already configured that you can use:

To start the server:

```bash
npm start
```

To build a bundle using each configuration, you can use:

```bash
npm run build:all
```