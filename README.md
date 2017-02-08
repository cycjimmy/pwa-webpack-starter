# gulp-temp (a gulp template start)

Personal front-end automation solutions for webpage.

## Installation
```shell
$ npm install
# or
$ yarn install
```

## Main directory structure
  ```text
  /app                # 工程入口
  /gulp               # gulp task
    ...
  /mock               # 模拟数据入口
    /api              
      ...
    /webSocket
      ...
  /static             # 静态文件
    /icons            # svg图标入口(未加工)
      /...
    /images           # 静态图片
      /icons          # svg图标(加工后)
      ...             # 其他图片
    /view             # 静态pug模板
      ...
    favicon.ico       # 图标文件
  /webpack            # webpack配置文件
    ...
  gulpfile.js         # gulp入口

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



