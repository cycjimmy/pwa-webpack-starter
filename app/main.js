// global css
import './theme/main.scss';

import FastClick from 'fastclick';
import webInitialize from './share/webInitialize.afunc';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';



if(PRODUCTION){
  OfflinePluginRuntime.install();
}


// if(PRODUCTION){
//   /*
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./service-worker.js').then(() => {
//       console.log('Service worker registered!');
//     }).catch((error) => {
//       console.log('Error registering service worker: ', error);
//     });
//   } else {
//     console.log('serviceWorker Not supported by browser');
//   }
//   */
//
//
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./service-worker.js').then(reg=> {
//       reg.onupdatefound = ()=> {
//         let installingWorker = reg.installing;
//
//         installingWorker.onstatechange = ()=> {
//           switch (installingWorker.state) {
//             case 'installed':
//               if (navigator.serviceWorker.controller) {
//                 console.log('New or updated content is available.');
//               } else {
//                 console.log('Content is now available offline!');
//               }
//               break;
//
//             case 'redundant':
//               console.error('The installing service worker became redundant.');
//               break;
//           }
//         };
//       };
//     }).catch(e=> {
//       console.error('Error during service worker registration:', e);
//     });
//   }
// }



//初始化
document.addEventListener('DOMContentLoaded', () => {
  //绑定fastClick
  FastClick.attach(document.body);

  //网页初始化
  webInitialize();
}, false);

