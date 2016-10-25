import {Demo} from './component/Demo';

window.onload = () => {
  let demo = new Demo(document.getElementById('show_load'));
  demo.load();
};
