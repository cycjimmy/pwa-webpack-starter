
export default class Demo {

  constructor(element) {
    this.element = element;
  }

  load() {
    this.element.innerHTML = '加载完成！';
  }
}