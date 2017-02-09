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
gulp-temp
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
 │   ├─images/        # Pictures folder
 │   │   ├──icons/    # Svg icons folder (processed)
 │   │   └──...       # Other pictures
 │   ├─view/          # Static pug template folder
 │   │   └──... 
 │   └─favicon.ico    # Icon file
 ├─webpack/           # Webpack configuration folder
 │   └─...            # Webpack configuration files
 ├─gulpfile.js        # Gulp file entry
 └─...
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



