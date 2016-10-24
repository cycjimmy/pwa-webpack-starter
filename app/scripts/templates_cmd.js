/**
 * Created by cyc on 2016/10/19.
 */

const imputTemplates = (function (templateName, selector, data) {
  let
    tpl = document.querySelector(selector),
    tplHtml = window.templates[templateName](data);

  tpl.innerHTML = tplHtml;
});




