/**
 *
 *  xhr-Promise封装
 *
 */

// 参数：
// funcName：后端方法名
// setting对象：{
//   type：类型
//   url:用户自定义地址
//   dataType:data类型
//   data:传值内容
//   timeout:超时设定
//   ontimeoutFn:超时处理
// }

export default function (funcName, {
  type = 'POST',
  url = '',
  dataType = '',
  data = '',
  timeout = 1500,
  ontimeoutFn = () => {
  },
},) {

  return new Promise((resolve, reject) => {

    let
      relativeDir = JSON.parse(sessionStorage.getItem('relativeDir')) || '',
      realUrl = relativeDir + '/' + funcName,
      pushData = data,
      xhr = new XMLHttpRequest();

    if(url){
      realUrl = url;
    }

    xhr.open(type, realUrl, true);
    xhr.onreadystatechange = handler;
    xhr.timeout = timeout;                          //0：没有时间限制
    xhr.ontimeout = ontimeoutFn;

    //判断用哪个type
    if (dataType === 'json') {
      xhr.responseType = "json";
      xhr.setRequestHeader("Accept", "application/json");
    } else {
      xhr.setRequestHeader("Accept", "*/*");
    }

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

    //console.log(pushData);

    xhr.send(pushData);

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        //console.log(this.response);
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
  });

};
