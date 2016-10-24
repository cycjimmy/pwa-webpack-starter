/**
 * Created by cyc on 2016/10/20.
 */


import $ from 'jquery';

//缓存服务器数据变量
let SERVER_DATA = {
  "author": {},
  "time": {}
};

//缓存常量
let STATICS_DATA = {
  "relativeDir": ''
};


//取得url相对路径根目录
const GetUrlRelativeDir = ()=> {
  let
    url = document.location.toString(),
    arrUrl = url.split("//"),
    start = arrUrl[1].indexOf("/"),
    final = arrUrl[1].lastIndexOf("/"),
    relativeDir = arrUrl[1].substring(start, final);

  console.log(relativeDir);
  return relativeDir;
};

//设置相对路径根目录
STATICS_DATA.relativeDir = GetUrlRelativeDir();


//取得服务器json数据
const getData = (fileName, fn)=> {
  $.getJSON(STATICS_DATA.relativeDir + '/data/' + fileName + '.json')
    .done(fn);
};


getData('data', function (json) {
  //console.log("收到数据");

  //赋值
  SERVER_DATA.author.author = json.author || '';
  SERVER_DATA.time.time = json.time || '';

  imputTemplates('tpl', '#tpl', SERVER_DATA.author);
  imputTemplates('tpl1', '#tpl1', SERVER_DATA.time);
});











