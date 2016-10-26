import {SERVER_DATA} from './variable/SERVER_DATA';
import {STATICS_DATA} from './variable/STATICS_DATA';


import Demo from './component/Demo.component';
import Templates from './share/Templates';

import GetUrlRelativeDir from './func/getUrlRelativeDir.func';
import getData from './func/getData.func';

import tpl from './templates/tpl';
import tpl1 from './templates/tpl1';


//设置相对路径根目录
STATICS_DATA.relativeDir = GetUrlRelativeDir();



window.onload = () => {
  let demo = new Demo(document.getElementById('show_load'));
  demo.load();

  getData('data', function (json) {
    console.log("收到数据");
    //赋值
    SERVER_DATA.author.author = json.author || '';
    SERVER_DATA.time.time = json.time || '';

    new Templates(tpl,'#tpl',SERVER_DATA.author).load();
    new Templates(tpl1,'#tpl1',SERVER_DATA.time).load();
  });
};
