/**
 * Created by cyc on 16/11/16.
 * 模拟后端AJAX
 *
 */

const
  fms = require('fms'),
  data = require('./data.json');


fms.run({
  port: 4444,
  //URL替换
  urlRewrite: [],
});


//模拟getData方法
fms.ajax({
  url: '/getData',
  type: 'get',
  timeout: 500,
  dataType: 'json',
  res: {
    ok: data,
    err: {
      msg: "err",
    },
  },
});






