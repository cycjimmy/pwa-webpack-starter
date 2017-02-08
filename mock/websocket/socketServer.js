/**
 * Created by cyc on 2016/11/14.
 *
 * 模拟WebSocketServer
 *
 *
 */


const
  WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({
    port: 3333
  }),
  data = require('../api/data.json');

wss.on('connection', function connection(ws) {
  console.log('Socket已启动');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    //收到请求发送数据
    //ws.send(data);
  });


  ws.on('open', function open() {
    console.log('connected...');

  });

  ws.on('close', function close() {
    console.log('disconnected...');
  });

  // 连接即发送数据
  ws.send(data);


});