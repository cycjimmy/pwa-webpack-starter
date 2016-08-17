## gulp-temp (a gulp template)

gulp自动化webAPP

## 使用
```c
git clone https://github.com/cycjimmy/gulp-temp.git MyApp
cd MyApp
npm install
npm start
```

## 目录结构
同文件目录，略

## 插件列表
* browser-sync
* del
* gulp
* gulp-autoprefixer
* gulp-cache
* gulp-cssnano
* gulp-gh-pages
* gulp-if
* gulp-imagemin
* gulp-sass
* gulp-svgstore
* gulp-uglify
* gulp-useref
* run-sequence

## 任务
* **sass**

    编译sass,自动加前缀,输出css
    ```c
    gulp sass
    ```

* **browserSync**

    自动刷新web服务器
    ```c
    gulp browserSync
    ```

* **svgstore**

    合并svg(同svg精灵)
    ```c
    gulp svgstore
    ```

* **watch**

    监听scss文件变化，监听html文件变化，监听JS文件变化，并刷新浏览器
    ```c
    gulp watch
    ```

* **default**

    默认任务，自动执行**sass**，**browserSync**，**watch**
    ```c
    gulp svgstore
    ```

* **build**

    将文件打包压缩到dist目录
    ```c
    gulp build
    ```    

* **deploy**

    将dist目录部署到ghPages
    ```c
    gulp deploy
    ```