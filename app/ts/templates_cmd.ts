/**
 * Created by cyc on 2016/10/19.
 */
declare var templates: any;


const imputTemplates = (function (templateName: string, selector: string, data: any) {
  let
    tpl: any = document.querySelector(selector),
    tplHtml: string = window.templates[templateName](data);

  tpl.innerHTML = tplHtml;
});

imputTemplates('tpl', '#tpl', {author: 'cycjimmy'});
imputTemplates('tpl1', '#tpl1', {time: '2016'});

