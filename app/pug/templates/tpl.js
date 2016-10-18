function pug_escape(e){
  var a=""+e,
    t=pug_match_html.exec(a);
  if(!t)return e;var r,c,n,s="";
  for(r=t.index,c=0;r<a.length;r++){
    switch(a.charCodeAt(r)){
      case 34:n="&quot;";
        break;
      case 38:n="&amp;";
        break;
      case 60:n="&lt;";
        break;
      case 62:n="&gt;";
      break;
      default:continue
    }
    c!==r&&(s+=a.substring(c,r)),
      c=r+1,
      s+=n
  }

    return c!==r?s+a.substring(c,r):s}


var pug_match_html=/["&<>]/;
function template(locals) {
  var pug_html = "",
    pug_mixins = {},
    pug_interp;
  var pug_indent = [];
pug_html = pug_html + "\n\u003Cul class=\"foo\"\u003E\n  \u003Cli\u003E\u003C\u002Fli\u003E";
var msg = "not my inside voice";
{
pug_html = pug_html + "\n  \u003Cp\u003EThis is " + (pug_escape(null == (pug_interp = msg.toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\n\u003C\u002Ful\u003E";;return pug_html;}