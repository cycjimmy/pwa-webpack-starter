

class Demo {

  constructor(element) {
    this.element = element;
  }

  load() {
    this.element.innerHTML = '加载完成！';
  }
}


window.onload = () => {
  let demo = new Demo(document.getElementById('show_load'));
  demo.load();


};
