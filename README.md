## gulp-temp (a gulp template)

gulp自动化 webpage

## 使用
```shell
$ git clone https://github.com/cycjimmy/gulp-temp.git MyApp
$ npm install
$ npm start
```

## 目录结构
同文件目录，略

## 插件列表
* browser-sync
* gulp-webpack
* gulp-sass
* gulp-autoprefixer
* gulp-cssnano
* gulp-gh-pages
* gulp-imagemin
* gulp-svgstore

## 任务说明
### 主要任务
* **pack**

    打包js模块
    ```shell
    $ gulp pack
    ```
    
* **sass**

    编译sass,自动加前缀,输出css
    ```shell
    $ gulp sass
    ```

* **svgstore**

    合并svg(同svg精灵)
    ```shell
    $ gulp svgstore
    ```
    
* **browserSync**

    自动刷新web服务器
    ```shell
    $ gulp browserSync
    ```

* **deploy**

    将dist目录部署到gh-pages
    ```shell
    $ gulp deploy
    ```

### 组合任务
* **default**

    默认任务，自动执行**sass**，**ts**, **browserSync**，**watch**
    ```shell
    $ gulp
    ```

* **watch**

    监听文件变化，并刷新浏览器
    ```shell
    $ gulp watch
    ```

* **build**

    将文件打包压缩到build目录
    ```shell
    $ gulp build
    ```    


