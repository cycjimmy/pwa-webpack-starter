/**
 * Created by cyc on 2016/11/24.
 *
 * 中间件模拟ajax
 *
 */


const
  data = require('./data.json');

module.exports = function () {
  return function (req, res, next) {
    let
      timeout = 500,            //延迟执行
      apiName = '[getData]';    //api名称

    //设置响应头文件
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json;charset=UTF-8");

    //收到浏览器数据
    req.on('data', function (e) {

      //打印信息
      console.log(
        apiName + ' Receive a require' + '\n' +
        apiName + ' -----------------' + '\n' +
        apiName + ' Url:' + req.url + '\n' +
        apiName + ' Method:' + req.method + '\n' +
        apiName + ' Data:' + e + '\n'
      );

      //延迟执行
      setTimeout(function () {
        res.end(JSON.stringify(data));
        next();
      }, timeout);
    });

    //错误处理
    req.on('err', function (err) {
      //打印错误
      console.log(
        apiName + ' Error: ' + err + '\n'
      );

      res.end('Error:' + err);
      next();
    });


  };
};
