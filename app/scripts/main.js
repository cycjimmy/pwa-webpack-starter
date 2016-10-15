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
var Demo = (function () {
    function Demo(element) {
        this.element = element;
    }
    Demo.prototype.load = function () {
        this.element.innerHTML = '加载完成！';
    };
    return Demo;
}());
window.onload = function () {
    var demo = new Demo(document.getElementById('show_load'));
    demo.load();
    //下面代码遍历所有元素加上随机外框色，方面页面元素查看
    [].forEach.call(document.querySelectorAll("*"), function (a) {
        a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    });
};
