// global css
import './theme/main.scss';

// Web App Manifest
import '../static/manifest.json';

import FastClick from 'fastclick';
import webInitialize from './share/webInitialize.afunc';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';


if (PRODUCTION) {
  OfflinePluginRuntime.install({
    onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
    onUpdated: () => window.swUpdate = true,
  });
}

// init
document.addEventListener('DOMContentLoaded', () => {
  // bind fastClick
  FastClick.attach(document.body);

  // web init
  webInitialize();
}, false);