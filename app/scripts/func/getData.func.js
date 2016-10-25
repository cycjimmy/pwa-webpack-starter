import {STATICS_DATA} from '../variable/STATICS_DATA';
import $ from 'jquery';

//取得服务器json数据

//参数：json文件名，执行后方法
export default function (fileName, fn) {
  $.getJSON(STATICS_DATA.relativeDir + '/data/' + fileName + '.json')
    .done(fn);
};