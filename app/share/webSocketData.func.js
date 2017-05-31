/**
 * Created by cyc on 2017/1/5.
 *
 * webSocket-Promise
 *
 * @param url
 * @param data
 * @returns {Promise}
 */
export default function ({
  url,
  data = ''
}) {

  return new Promise((resolve, reject) => {

    let
      realUrl
      ;

    //赋值realUrl
    if (data) {
      realUrl = url + '?' + data;
    } else {
      realUrl = url;
    }

    let
      ws = new WebSocket(realUrl);

    //console.log(ws);

    ws.onopen = () => {
      console.log("连接到webSocket");
      console.log(ws);
    };

    ws.onerror = () => {
      //连接失败
      reject(new Error('连接失败'));
    };

    ws.onclose = () => {
      console.log('关闭webSocket');
    };

    //消息接收
    ws.onmessage = e => {
      if (e.data) {
        //console.log(e.data);

        //返回数据
        resolve(e.data);

        //断开连接
        ws.onclose();
      } else {
        reject(new Error(e));
      }
    };
  });
};