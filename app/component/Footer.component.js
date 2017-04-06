/**
 * Created by cyc on 2017/2/8.
 */


import Templates from '../share/Templates';
import * as footer from './footer.pug';
import * as footerStyle from './footer.scss';
import * as indexIcons from '../../static/images/icons/index.svg';

export default class FooterComponent {
  constructor() {
    this.context = document.querySelector('footer');         //上下文
  }

  load() {
    let
      eContext = this.context
      , sEnvironment
    ;

    // 开发环境
    if (DEVELOPMENT) {
      sEnvironment = 'Development';
    }

    // 生产环境
    if (PRODUCTION) {
      sEnvironment = 'Production';
    }

    //加载流程
    return new Promise(resolve => {
      let
        style = footerStyle;

      new Templates(footer, eContext, {
        style,
        indexIcons,
        sEnvironment,
      }).load();

      setTimeout(() => {
        resolve(); //加载完传出状态
      }, 0);
    });

  };
}