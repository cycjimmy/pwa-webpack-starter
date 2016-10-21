(function () {
  var doc = document.documentElement;

  doc.classList.remove('no-scripts');
  doc.classList.add('js');
}());

(function () {
  if (!window.localStorage.getItem('hasVisited')) {
    document.querySelector('.Tour').classList.add('is-active');
    window.localStorage.setItem('hasVisited', 'true');
  }
}());


class Demo {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  load() {
    this.element.innerHTML = '加载完成！';
  }
}

window.onload = () => {
  let demo = new Demo(document.getElementById('show_load'));
  demo.load();

  //下面代码遍历所有元素加上随机外框色，方面页面元素查看
  [].forEach.call(document.querySelectorAll("*"), function (a: any) {
    a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
  });

};
