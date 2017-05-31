// global css
import './theme/main.scss';

// Web App Manifest
import '../static/manifest.json';

import FastClick from 'fastclick';
import webInitialize from './share/webInitialize.afunc';

// offline-plugin runtime
import OfflinePluginRuntime from 'offline-plugin/runtime';

if (!DEVELOPMENT) {
  OfflinePluginRuntime.install({
    onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
    onUpdated: () => window.swUpdate = true,
  });
}

if (DEVELOPMENT) {
  console.log('Development Mode');
}
if (PRODUCTION) {
  console.log('Production Mode');
}

// contextMenu preventDefault
document.addEventListener('contextmenu', e => {
  window.event.returnValue = false;
  e.preventDefault();
  return false;
});

// Promise extend
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => {
      throw reason;
    })
  );
};

// web page init
document.addEventListener('DOMContentLoaded', () => {
  // bind fastClick
  FastClick.attach(document.body);

  // web init
  webInitialize();
}, false);