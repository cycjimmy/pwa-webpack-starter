/**
 * Created by cyc on 2017/2/7.
 */
//网页初始化工作
import {getUrlRelativeDir} from './awesome.func';
import Templates from './Templates';
import xhrData from './xhrData.func';
import * as tpl from '../templates/tpl.pug';
import * as tpl1 from '../templates/tpl1.pug';

import * as snoopyPic from '../../../static/images/snoopy.jpg';

//组件
import DemoComponent from '../component/Demo.component';
import MainSctComponent from '../component/MainSct.component';

//服务

//测试


export default () => {

  return Promise.all([
    //设置相对路径
    (() => {
      sessionStorage.setItem('relativeDir', JSON.stringify(getUrlRelativeDir()) || '');
    })(),

    new MainSctComponent().load(),

    new xhrData({
      //type: 'GET',
      funcName: 'getData',
      data: "a getData require",
      dataType: 'json',
    })
      .then(data => {
        console.log("收到数据" + data);
        //赋值
        sessionStorage.setItem('author', JSON.stringify(data.author) || '');
        sessionStorage.setItem('time', JSON.stringify(data.time) || '');

        let
          author = data.author
          , time = data.time
          , imgSrc = snoopyPic
          ;

        new Templates(tpl, '#tpl', {author, time}).load();
        new Templates(tpl1, '#tpl1', {imgSrc}).load();
      }, err => {
        console.error(err);
      }),
  ])
    .then(() => {
      return Promise.all([
        //网页初始化完成
        (() => {
          let demo = new DemoComponent(document.getElementById('show_load'));
          demo.load();
        })(),

      ]);
    });
};

