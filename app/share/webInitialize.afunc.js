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

  ]);
};

