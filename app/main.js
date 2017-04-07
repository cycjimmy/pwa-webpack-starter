// global css
import './theme/main.scss';

// Web App Manifest
import '../static/manifest.json';

import FastClick from 'fastclick';
import webInitialize from './share/webInitialize.afunc';


// offline-plugin
if (PRODUCTION) {
  System.import('offline-plugin/runtime')
    .then(OfflinePluginRuntime => {
      OfflinePluginRuntime.install({
        onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
        onUpdated: () => window.swUpdate = true,
      });
    });
}

// mockJs
if (!PRODUCTION) {

  import('mockjs').then(Mock => {
    console.log(Mock);

  });
  // System.import('mockjs')
  //   .then(Mock => {
  //     console.log(Mock);
  //
  //   });
}


// init
document.addEventListener('DOMContentLoaded', () => {
  // bind fastClick
  FastClick.attach(document.body);

  // web init
  webInitialize();
}, false);