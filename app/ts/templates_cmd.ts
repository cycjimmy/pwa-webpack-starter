/**
 * Created by cyc on 2016/10/19.
 */

declare var templates: any;

// class Templates {
//   constructor() {
//   }
//
//   imputTemplates(templateName: string, selector: string, data: any) {
//     let tpl = document.querySelector(selector);
//     let tplHtml = window.templates[templateName](data);
//     //console.log(tplHtml);
//     tpl.innerHTML = tplHtml;
//   }
// }
//
//
// let templates: Templates = new Templates();
// templates.imputTemplates('tpl', '#tpl', {author: 'cycjimmy'});
// templates.imputTemplates('tpl1', '#tpl1', {time: '2016'});


let tpl = document.querySelector('#tpl');
let tplHtml = window.templates.tpl({author: 'cycjimmy'});
console.log(tplHtml);
tpl.innerHTML = tplHtml;

let tpl1 = document.querySelector('#tpl1');
let tpl1Html = window.templates.tpl1({time: '2016'});
console.log(tpl1Html);
tpl1.innerHTML = tpl1Html;
