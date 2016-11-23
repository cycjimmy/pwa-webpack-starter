import FastClick from 'fastclick';

import Demo from './component/Demo.component';
import Templates from './share/Templates';

import {getUrlRelativeDir} from './share/awesome.func';
import xhrData from './share/xhrData.func';


import tpl from './templates/tpl';
import tpl1 from './templates/tpl1';


//获取相对路径
sessionStorage.setItem('relativeDir', JSON.stringify(getUrlRelativeDir()) || '');


//初始化
document.addEventListener('DOMContentLoaded', function () {
  //绑定fastClick
  FastClick.attach(document.body);

  //网页初始化
  let demo = new Demo(document.getElementById('show_load'));
  demo.load();


  xhrData('getData', {
    type: 'GET',
    url: 'http://localhost:4444/getData',
  })
    .then((data) => {
      console.log("收到数据" + data);
      //赋值

      let json = JSON.parse(data);
      sessionStorage.setItem('author', JSON.stringify(json.author) || '');
      sessionStorage.setItem('time', JSON.stringify(json.time) || '');

      let
        author = json.author,
        time = json.time;


      new Templates(tpl, '#tpl', {author}).load();
      new Templates(tpl1, '#tpl1', {time}).load();
    }, (err) => {
      console.error(err);
    });

}, false);

