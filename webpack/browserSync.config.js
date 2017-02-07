/**
 * Created by cyc on 2017/2/7.
 */

const
  getDataAjax = require('../mock/getData.ajax')
  ;


module.exports = options => {
  return Object.assign({
    server: {
      //https: true,
    },
    ghostMode: false,
    logLevel: "debug",
    middleware: [
      {
        route: "/getData",
        handle: getDataAjax(),
      },
    ],
  }, options);

};