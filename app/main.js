// global css
import './theme/main.scss';

// Web App Manifest
import '../static/manifest.json';

import FastClick from 'fastclick';
import webInitialize from './share/webInitialize.afunc';

// offline-plugin runtime
import('offline-plugin/runtime')
  .then(OfflinePluginRuntime => {
    if (!DEVELOPMENT) {
      OfflinePluginRuntime.install({
        onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
        onUpdated: () => window.swUpdate = true,
      });
    }
  })
  .catch(err => console.error('Failed to load OfflinePluginRuntime', err));

// web page init
document.addEventListener('DOMContentLoaded', () => {
  // bind fastClick
  FastClick.attach(document.body);

  // web init
  webInitialize();
}, false);