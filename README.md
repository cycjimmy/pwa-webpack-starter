# gulp-temp (a gulp template starter)

Personal front-end automation solutions for webpage.

## Installation
```shell
$ npm install
# or
$ yarn install
```

## Main directory structure
```text
/app                # Project entry
/gulp               # Gulp task
  ...
/mock               # Mock data entry
  /api              
    ...
  /webSocket
    ...
/static             # Static file
  /icons            # Svg icons entry (raw)
    /...
  /images           # Pictures
    /icons          # Svg icons(processed)
    ...             # Other pictures
  /sass             # Static style file
    ...
  /view             # Static pug template
    ...
  favicon.ico       # Icon file
/webpack            # Webpack configuration file
  ...
gulpfile.js         # Gulp entry
...
```

## task
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



