/**
 * Created by cyc on 2017/4/7.
 */

import QueryAll from '../share/QueryAll';
import * as mainStyle from './main.scss';

export default class MainService {
  constructor(element) {
    this.oMain = element;      //包裹层元素
  }

  load() {
    this.eventBind();
  };

  eventBind() {
    let
      oLogo = this.oMain.querySelector('.' + mainStyle.logo)   // logo wrap
      , oLogoImg = oLogo.firstElementChild                     // logo img
    ;

    new QueryAll(oLogoImg)
      .on('touchstart mouseover mousedown', () => {
        oLogoImg.classList.add(mainStyle.animationPaused);
        oLogo.classList.add(mainStyle.enlarge);
      })
      .on('touchmove touchend touchcancel mouseout mouseup', () => {
        if (oLogoImg.classList.contains(mainStyle.animationPaused)) {
          oLogoImg.classList.remove(mainStyle.animationPaused);
        }
        if (oLogo.classList.contains(mainStyle.enlarge)) {
          oLogo.classList.remove(mainStyle.enlarge);
        }
      });

  };
};