/**
 * Created by cyc on 2017/2/7.
 *
 * 网页初始化
 */


import {getUrlRelativeDir} from './awesome.func';
import xhrData from './xhrData.func';

//组件
import FooterComponent from '../component/Footer.component';
import MainComponent from '../component/Main.component';

export default () => {

  return Promise.all([
    //设置相对路径
    (() => {
      sessionStorage.setItem('relativeDir', JSON.stringify(getUrlRelativeDir()) || '');
    })(),

    //加载主体
    new MainComponent().load(),

    //加载底部
    new FooterComponent().load(),

  ])
    .then(() => {
      return Promise.all([
        new xhrData({
          //type: 'GET',
          funcName: 'getData',
          data: "a getData require",
          dataType: 'json',
        })
          .then(data => {
            //console.log("收到数据" + data);
            let
              eEnvironment = document.querySelector('#environment')
            ;
            eEnvironment.textContent = data.environment;
          }, err => {
            console.error(err);
          }),

      ]);
    });
};

