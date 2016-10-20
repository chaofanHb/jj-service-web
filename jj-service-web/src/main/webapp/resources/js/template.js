/*TMODJS:{"version":"1.0.0"}*/
!function(){function a(a,b){return(/string|function/.test(typeof b)?h:g)(a,b)}function b(a,c){return"string"!=typeof a&&(c=typeof a,"number"===c?a+="":a="function"===c?b(a.call(a)):""),a}function c(a){return l[a]}function d(a){return b(a).replace(/&(?![\w#]+;)|[<>"']/g,c)}function e(a,b){if(m(a))for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)}function f(a,b){var c=/(\/)[^/]+\1\.\.\1/,d=("./"+a).replace(/[^/]+$/,""),e=d+b;for(e=e.replace(/\/\.\//g,"/");e.match(c);)e=e.replace(c,"/");return e}function g(b,c){var d=a.get(b)||i({filename:b,name:"Render Error",message:"Template not found"});return c?d(c):d}function h(a,b){if("string"==typeof b){var c=b;b=function(){return new k(c)}}var d=j[a]=function(c){try{return new b(c,a)+""}catch(d){return i(d)()}};return d.prototype=b.prototype=n,d.toString=function(){return b+""},d}function i(a){var b="{Template Error}",c=a.stack||"";if(c)c=c.split("\n").slice(0,2).join("\n");else for(var d in a)c+="<"+d+">\n"+a[d]+"\n\n";return function(){return"object"==typeof console&&console.error(b+"\n\n"+c),b}}var j=a.cache={},k=this.String,l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},m=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},n=a.utils={$helpers:{},$include:function(a,b,c){return a=f(c,a),g(a,b)},$string:b,$escape:d,$each:e},o=a.helpers=n.$helpers;a.get=function(a){return j[a.replace(/^\.\//,"")]},a.helper=function(a,b){o[a]=b},"function"==typeof define?define(function(){return a}):"undefined"!=typeof exports?module.exports=a:this.template=a,/*v:1*/
a("aboutDescription",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$each,e=a.data,f=(a.$value,a.$index,b.$escape),g="";return c&&(g+=" ",d(e,function(a){g+=' <span class="item"><img src="',g+=f(a.logo),g+='" alt="',g+=f(a.name),g+='" /></span> '}),g+=" "),g+=" ",new k(g)}),/*v:47*/
a("bugAudit",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.data,e=(a.$value,a.$index,b.$escape),f="";return f+='<div> <ul class="tabCon_item"> ',c(d,function(a){f+=" ",0==d[0].status&&(f+=' <li> <h2 class="tabC_tit">',f+=e(a.topic),f+='</h2> <p class="tabC_main">',f+=e(a.content),f+='</p> <p class="tabC_money"> <span class="alipay">',f+=e(a.alipay),f+="</span> </p> </li> "),f+=" "}),f+=' </ul> </div> <!--div> <ul class="tabCon_item"> ',c(d,function(a){f+=" ",1==d[0].status&&(f+=' <li> <h2 class="tabC_tit">',f+=e(a.topic),f+='</h2> <p class="tabC_main">',f+=e(a.content),f+='</p> <p class="tabC_money"> <span class="alipay">',f+=e(a.alipay),f+='</span> </p> <p class="yes">\u72b6\u6001:\u5ba1\u6838\u6210\u529f</p> </li> '),f+=" "}),f+=" ",c(d,function(a){f+=" ",3==d[0].status&&(f+=' <li> <h2 class="tabC_tit">',f+=e(a.topic),f+='</h2> <p class="tabC_main">',f+=e(a.content),f+='</p> <p class="no">\u72b6\u6001:\u5ba1\u6838\u5931\u8d25</p> </li> '),f+=" "}),f+=' </ul> </div> <div> <ul class="tabCon_item"> ',c(d,function(a){f+=" ",2==d[0].status&&(f+=' <li> <h2 class="tabC_tit">',f+=e(a.topic),f+='</h2> <p class="tabC_main">',f+=e(a.content),f+='</p> <p class="tabC_money"> <span class="alipay">',f+=e(a.alipay),f+='</span> <span class="money">\u5956\u52b1\uff1a',f+=e(a.money),f+="\u5143</span> </p> </li> "),f+=" "}),f+=" </ul> </div--> ",new k(f)}),/*v:27*/
a("info",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$escape,e=a.data,f="";return c&&(f+=' <div class="item pure-u-1 pure-u-sm-1-2 beijing"> <div class="title">',f+=d(e.name),f+='</div> <div class="address"><strong>\u603b\u90e8\uff1a</strong>',f+=d(e.address),f+='</div> <div class="phone">',f+=d(e.telephone),f+='</div> <img class="map pure-img" src="',f+=d(e.addrPict),f+='"> </div> '),f+=" ",new k(f)}),/*v:3*/
a("infoCeo",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$each,e=a.data,f=(a.$value,a.$index,b.$escape),g="";return c&&(g+=" ",d(e,function(a){g+=' <div class="container fixed pure-g" > <div class="logo pure-u-1 pure-u-sm-1-3"> <img class="pure-img u-margin-center" src="',g+=f(a.picture),g+='"> </div> <div class="pure-u-1 pure-u-sm-1-2"> <div class="title"> ',g+=f(a.name),g+=" <small>",g+=f(a.position),g+='</small> </div> <div class="content"> ',g+=f(a.description),g+=" </div> </div> </div> "}),g+=" "),new k(g)}),/*v:4*/
a("infoEmail",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$escape,e=a.data,f="";return c&&(f+=' <a href="',f+=d(e.email),f+='" target="_self"> ',f+=d(e.email),f+=" </a> "),new k(f)}),/*v:3*/
a("logo",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$escape,e=a.data,f="";return c&&(f+=' <img src="',f+=d(e.logo),f+='"> '),new k(f)}),/*v:3*/
a("partner",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$each,e=a.data,f=(a.$value,a.$index,b.$escape),g="";return g+=" ",c&&(g+=' <ul class="list container u-clearfix"> ',d(e,function(a){g+=' <li class="item"><img src="',g+=f(a.logo),g+='" alt="',g+=f(a.name),g+='"></li> '}),g+=" </ul> "),g+=" ",new k(g)}),/*v:15*/
a("position",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$each,e=a.data,f=(a.$value,a.$index,b.$escape),g=b.$string,h="";return c&&(h+=" ",d(e,function(a){h+=' <li class="item"> <div class="info pure-g"> <div class="pure-u-1 pure-u-sm-1-3 title">',h+=f(a.name),h+='</div> <div class="pure-u-1-2 pure-u-sm-1-3 u-text-center category">',h+=f(a.department),h+='</div> <div class="pure-u-1-2 pure-u-sm-1-3 u-text-center location">',h+=f(a.area),h+='</div> </div> <div class="content"><p><strong>\u5c97\u4f4d\u804c\u8d23</strong></p> <ul> <li>',h+=g(a.duty),h+="</li> </ul><p><strong>\u804c\u4f4d\u8981\u6c42\uff1a</strong></p><ul> <li>",h+=g(a.claim),h+='</li> </ul> <p class="u-text-center"> <a class="pure-button button-xl button-red mail-link" href="mailto:team@xiongniujr.com" target="_self">\u5e94\u8058\u6b64\u804c\u4f4d \u203a</a> </p> </div> </li> '}),h+=" "),h+=" ",new k(h)}),/*v:21*/
a("product",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$each,e=a.data,f=(a.$value,a.$index,b.$escape),g=b.$string,h="";return c&&(h+=' <div class="blocks container"> ',d(e,function(a){h+=' <div class="item pure-g"> <a class="anchor-links"></a> <div class="pure-u-1 pure-u-sm-1-5"> <div class="icon"> <img src="',h+=f(a.picture),h+='" width="172" height="172"> </div> </div> <div class="pure-u-1 pure-u-sm-4-5 pt20"> <p>',h+=g(a.name),h+="</p> <p>",h+=g(a.description),h+="</p> </div> </div> "}),h+=" </div> "),h+=" ",new k(h)}),/*v:2*/
a("serveLogo",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$each,e=a.data,f=(a.$value,a.$index,b.$escape),g="";return c&&(g+=" ",d(e,function(a){g+=' <span class="item"><img src="',g+=f(a.logo),g+='" alt="',g+=f(a.name),g+='" /></span> '}),g+=" "),g+=" ",new k(g)}),/*v:9*/
a("work",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$each,e=a.data,f=(a.$value,a.$index,b.$escape),g="";return c&&(g+=' <div class="blocks container"> ',d(e,function(a){g+=' <div class="pure-u-1 pure-u-sm-1-2 item"> <p class="title">',g+=f(a.name),g+='</p> <img class="pure-img thumb" src="',g+=f(a.picture),g+='" alt="',g+=f(a.name),g+='" width="392"> <p class="u-clearfix"> <a class="url" href="',g+=f(a.url),g+='" target="_blank" rel="external">',g+=f(a.url),g+='</a> </p> <p class="description"> ',g+=f(a.description),g+=" </p> </div> "}),g+=" </div> "),g+=" ",new k(g)}),/*v:4*/
a("xnInfo",function(a){"use strict";var b=this,c=(b.$helpers,a.success),d=b.$escape,e=a.data,f="";return c&&(f+=' <div class="logo pure-u-1 pure-u-sm-1-3"> <img class="pure-img u-margin-center" src="',f+=d(e.url),f+='"> </div> <div class="pure-u-1 pure-u-sm-1-2"> <div class="content" > ',f+=d(e.description),f+=" </div> </div> "),new k(f)})}();