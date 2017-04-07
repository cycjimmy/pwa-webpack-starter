/**
 * Created by cyc on 2017/2/7.
 */


import Templates from '../share/Templates';
import * as main from './main.pug';
import * as mainStyle from './main.scss';
import * as indexIcons from '../../static/images/icons/index.svg';
import * as logoSvg from '../../static/images/myLogo.svg';
import * as info from '../info.json';

// service
import MainService from './Main.service';


export default class MainSctComponent {
  constructor() {
    this.context = document.querySelector('main');         //上下文
  }

  load() {
    //新建一个容器oPopup
    let
      eContext = this.context
    ;

    // load flow
    return new Promise(resolve => {
      let
        style = mainStyle
      ;

      //将insidePageFrame放入insidePage
      new Templates(main, eContext, {
        info,
        style,
        indexIcons,
        logoSvg,
      }).load();

      setTimeout(() => {
        resolve();
      }, 0);
    })
      .then(()=>{
      return new Promise(resolve=>{

        // load service
        new MainService(eContext).load();


        setTimeout(() => {
          resolve();
        }, 0);
      });
    });

  };
}