//test ts

class Demo {
	element: HTMLElement;

	constructor(element: HTMLElement) {
		this.element = element;
	}

	load(){
		this.element.innerHTML = '加载完成！';
	}
}

window.onload = () => {
	var demo = new Demo(document.getElementById('show_load'));
	demo.load();
};