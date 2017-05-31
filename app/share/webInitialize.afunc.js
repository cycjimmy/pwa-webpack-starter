/**
 * Created by cyc on 2017/2/7.
 *
 *  web init
 */


import {getUrlRelativeDir} from './awesome.func';
// import xhrData from './xhrData.func';

// component
import FooterComponent from '../component/Footer.component';
import MainComponent from '../component/Main.component';

export default () => {

  return Promise.all([
    // set relativeDir
    (() => {
      sessionStorage.setItem('relativeDir', JSON.stringify(getUrlRelativeDir()) || '');
    })(),

    // load main
    new MainComponent().load(),

    // load footer
    new FooterComponent().load(),
  ])
    // .then(() => {
    //   return new xhrData({
    //     //type: 'GET',
    //     funcName: 'getData',
    //     data: "a getData require",
    //     dataType: 'json',
    //   });
    // })
    // .then(data => {
    //   console.log("收到数据", data);
    // })
    .catch(err => console.error('Failed to init', err));
};

