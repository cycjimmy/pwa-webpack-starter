/**
 * Created by cyc on 2016/11/23.
 */

// 单词首字母大写
const firstUpperCase = (str) => {
  return str.replace(/\b(\w)(\w*)/g, ($0, $1, $2)=> {
    return $1.toUpperCase() + $2.toLowerCase();
  });
};

//中线命名转变成驼峰命名法
const strToCamel = (str) => {
  let re = /-(\w)/g;
  return str.replace(re, ($0, $1) => {
    return $1.toUpperCase();
  });
};

//取得url相对路径根目录
const getUrlRelativeDir = () => {
  let
    relativeDir,
    url = document.location.toString(),
    arrUrl = url.split("//"),
    start = arrUrl[1].indexOf("/"),
    final = arrUrl[1].lastIndexOf("/");

  relativeDir = arrUrl[1].substring(start, final);

  //console.log(relativeDir);
  return relativeDir;
};

//判断是否字符串
const isString = (str) => {
  return (typeof str === 'string') && str.constructor === String;
};


export {
  firstUpperCase,
  strToCamel,
  getUrlRelativeDir,
  isString,
};