export default class Templates {

  //参数：模板名，选择器，data
  constructor(template, selector, data) {
    this.element = document.querySelector(selector);
    this.template = template;
    this.jsonData = data;
  }

  load() {
    this.element.innerHTML = this.template(this.jsonData);
  }
}