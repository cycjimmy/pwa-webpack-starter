//test ts
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
};
