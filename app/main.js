// global css
import '../static/sass/main.scss';

import FastClick from 'fastclick';
import webInitialize from './share/webInitialize.afunc';

//初始化
document.addEventListener('DOMContentLoaded', () => {
  //绑定fastClick
  FastClick.attach(document.body);

  //网页初始化
  webInitialize();
}, false);

