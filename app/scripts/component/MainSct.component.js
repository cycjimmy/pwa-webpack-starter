/**
 * Created by cyc on 2017/2/7.
 */


import Templates from '../share/Templates';
import * as mainSct from './mainSct.pug';
import * as mainSctStyle from './mainSct.style.scss';

import * as indexSvgIcon from '../../../static/images/icons/index.svg';

//服务
//...

export default class MainSctComponent {
  constructor() {
    this.context = document.querySelector('main');         //上下文
  }

  load() {
    //新建一个容器oPopup
    let
      eContext = this.context
      ;

    //加载流程
    return new Promise(resolve => {
      let
        style = mainSctStyle;

      //将insidePageFrame放入insidePage
      new Templates(mainSct, eContext, {indexSvgIcon, style}).load();

      setTimeout(() => {
        resolve(); //加载完传出状态
      }, 0);
    });

  };
}