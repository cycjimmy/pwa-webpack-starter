/**
 * Created by cyc on 2016/11/3.
 *
 * 仿JQ选择器
 * 使用方法：
 * new QueryAll(选择器或元素，上下文(可选)).on(事件类别，回调函数)
 * new QueryAll(选择器或元素，上下文(可选)).addClass(样式名)
 * new QueryAll(选择器或元素，上下文(可选)).removeClass(样式名)
 * new QueryAll(选择器或元素，上下文(可选)).hasClass(样式名)
 *
 */

import {isString} from './awesome.func';


export default class QueryAll {

  constructor(selectorOrEls, content = document) {

    let elements = null;

    if (isString(selectorOrEls)) {
      elements = content.querySelectorAll(selectorOrEls);
    } else {
      elements = new Array(selectorOrEls);
    }

    if (Array.from) {
      this.nodeList = Array.from(elements);
    } else {
      this.nodeList = Array.prototype.slice.call(elements);
    }


  }

  //事件绑定
  on(eventType, fn) {
    this.nodeList.map((el) => {
      el.addEventListener(eventType, fn);
    });
  };


  //添加样式
  addClass(className) {
    this.nodeList.map((el) => {
      if (el.classList) {
        el.classList.add(className);
      } else {
        el.className += ' ' + className;
      }
    });
  };

  //删除样式
  removeClass(className) {
    this.nodeList.map((el) => {

      if (el.classList) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    });

  };

  //是否存在样式
  hasClass(className) {
    this.nodeList.map((el) => {

      if (el.classList) {
        el.classList.contains(className);
      } else {
        new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
      }

    });
  };

};

