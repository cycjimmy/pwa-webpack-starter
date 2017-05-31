# Pwa Webpack Starter

Personal front-end solutions for progressive web app

## Rename from "gulp-temp" (a gulp template starter)
Front-end automation solutions for webApp

## Based on
webpack2, gulp, babel, sass, pug, offline plugin and lots of awesome modules and plugins

## Installation
```shell
$ npm install
# or
$ yarn install
```

## Main directory structure
```text
pwa-webpack-starter
 │
 ├─app/               # Project entry folder
 │   └─...
 ├─gulp/              # Gulp tasks folder
 │   └─...
 ├─mock/              # Mock data entry folder
 │   ├─api/
 │   └─webSocket/
 ├─static/            # Static folder
 │   ├─icons/         # Svg icons entry folder (raw)
 │   ├─logos/         # Logos for Manifest
 │   ├─images/        # Pictures folder
 │   │   ├──icons/    # Svg icons folder (processed)
 │   │   └──...       # Other pictures
 │   ├─view/          # Static pug template folder
 │   │   └──... 
 │   ├─favicon.ico    # Icon file
 │   └─manifest.json  # Manifest file
 ├─webpack/           # Webpack configuration folder
 │   └─...            # Webpack configuration files
 ├─gulpfile.js        # Gulp file entry
 └─...
```

## Main Tasks
```shell
# Run in development
$ npm start

# Build for production
$ npm run build

# svg icon
$ npm run svg

# deploy to gh-pages
$ npm run deploy
```



