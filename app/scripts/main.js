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
    //type: 'GET',
    data: "a getData require",
    dataType:'json',
  })
    .then((data) => {
      console.log("收到数据" + data);
      //赋值
      sessionStorage.setItem('author', JSON.stringify(data.author) || '');
      sessionStorage.setItem('time', JSON.stringify(data.time) || '');

      let
        author = data.author,
        time = data.time;

      new Templates(tpl, '#tpl', {author}).load();
      new Templates(tpl1, '#tpl1', {time}).load();
    }, (err) => {
      console.error(err);
    });

}, false);

