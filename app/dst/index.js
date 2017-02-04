!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),s=l.ipcRenderer,u=r(2),c=r(3),h=u.Component,f=r(4),p=r(15),d=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={items:["pug","scss","javascript","result"],index:0},s.on("open-item-from-menu",r.openItemFromMenu.bind(r)),r}return a(t,e),i(t,[{key:"render",value:function(){var e=this.state,t=e.items,r=e.index,n=t[r],o=70;return u.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",height:"100%"}},u.createElement(f,{width:o,items:t,index:r,onClickItem:this.onClickItem.bind(this)}),u.createElement(p,{language:n,dwidth:o}))}},{key:"openItemFromMenu",value:function(e,t){var r=t.index;this.setState({index:r})}},{key:"onClickItem",value:function(e){this.setState({index:e})}}]),t}(h);c.render(u.createElement(d,null),document.querySelector("main"))},function(e,t){e.exports=require("electron")},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(5),s=r(2),u=r(6),c=u.lblack,h=u.llblack,f=u.white,p=u.dwhite,d=s.Component,b=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.width,n=t.items,o=t.index,a=l.map(n,function(t,r){var n=r===o,a="null";return"pug"===t?a="Pug":"scss"===t?a="SCSS":"javascript"===t?a="JS":"result"===t&&(a="Result"),s.createElement("li",{onClick:e.onClickItem.bind(e,r),style:{color:n?f:p,padding:"2px 4px",fontSize:"0.8em",cursor:"pointer",marginRight:5,borderTopRightRadius:4,borderBottomRightRadius:4,backgroundColor:n?h:c}},"#",r+1," ",a)});return s.createElement("div",{style:{width:r,backgroundColor:c}},s.createElement("ul",{style:{listStyle:"none",padding:"10px 0",margin:0,webkitUserSelect:"none",fontFamily:"sans-serif"}},a))}},{key:"onClickItem",value:function e(t){var e=this.props.onClickItem;e(t)}}]),t}(d);e.exports=b},function(e,t){e.exports=_},function(e,t,r){"use strict";var n=r(7),o=n("rgb(30, 30, 30)"),a=o.lighten(.4),i=a.lighten(.4),l=n("rgb(212, 212, 212)"),s=l.darken(.4),u=n("rgb(0, 122, 204)"),c=o.toString(),h=a.toString(),f=i.toString(),p=l.toString(),d=s.toString(),b=u.toString();e.exports={black:c,lblack:h,llblack:f,white:p,dwhite:d,blue:b}},function(e,t,r){"use strict";function n(e,t){if(!(this instanceof n))return new n(e,t);if(t&&t in p&&(t=null),t&&!(t in h))throw new Error("Unknown model: "+t);var r,o;if(e)if(e instanceof n)this.model=e.model,this.color=e.color.slice(),this.valpha=e.valpha;else if("string"==typeof e){var a=c.get(e);if(null===a)throw new Error("Unable to parse color from string: "+e);this.model=a.model,o=h[this.model].channels,this.color=a.value.slice(0,o),this.valpha="number"==typeof a.value[o]?a.value[o]:1}else if(e.length){this.model=t||"rgb",o=h[this.model].channels;var i=f.call(e,0,o);this.color=u(i,o),this.valpha="number"==typeof e[o]?e[o]:1}else if("number"==typeof e)e&=16777215,this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;var l=Object.keys(e);"alpha"in e&&(l.splice(l.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);var s=l.sort().join("");if(!(s in d))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=d[s];var g=h[this.model].labels,v=[];for(r=0;r<g.length;r++)v.push(e[g[r]]);this.color=u(v)}else this.model="rgb",this.color=[0,0,0],this.valpha=1;if(b[this.model])for(o=h[this.model].channels,r=0;r<o;r++){var y=b[this.model][r];y&&(this.color[r]=y(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function o(e,t){return Number(e.toFixed(t))}function a(e){return function(t){return o(t,e)}}function i(e,t,r){return e=Array.isArray(e)?e:[e],e.forEach(function(e){(b[e]||(b[e]=[]))[t]=r}),e=e[0],function(n){var o;return arguments.length?(r&&(n=r(n)),o=this[e](),o.color[t]=n,o):(o=this[e]().color[t],r&&(o=r(o)),o)}}function l(e){return function(t){return Math.max(0,Math.min(e,t))}}function s(e){return Array.isArray(e)?e:[e]}function u(e,t){for(var r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}var c=r(8),h=r(12),f=[].slice,p=["keyword","gray","hex"],d={};Object.keys(h).forEach(function(e){d[f.call(h[e].labels).sort().join("")]=e});var b={};n.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(e){var t=this.model in c.to?this:this.rgb();t=t.round("number"==typeof e?e:1);var r=1===t.valpha?t.color:t.color.concat(this.valpha);return c.to[t.model](r)},percentString:function(e){var t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:t.color.concat(this.valpha);return c.to.rgb.percent(r)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var e={},t=h[this.model].channels,r=h[this.model].labels,n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray:function(){var e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject:function(){var e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round:function(e){return e=Math.max(e||0,0),new n(this.color.map(a(e)).concat(this.valpha),this.model)},alpha:function(e){return arguments.length?new n(this.color.concat(Math.max(0,Math.min(1,e))),this.model):this.valpha},red:i("rgb",0,l(255)),green:i("rgb",1,l(255)),blue:i("rgb",2,l(255)),hue:i(["hsl","hsv","hsl","hwb","hcg"],0,function(e){return(e%360+360)%360}),saturationl:i("hsl",1,l(100)),lightness:i("hsl",2,l(100)),saturationv:i("hsv",1,l(100)),value:i("hsv",2,l(100)),chroma:i("hcg",1,l(100)),gray:i("hcg",2,l(100)),white:i("hwb",1,l(100)),wblack:i("hwb",2,l(100)),cyan:i("cmyk",0,l(100)),magenta:i("cmyk",1,l(100)),yellow:i("cmyk",2,l(100)),black:i("cmyk",3,l(100)),x:i("xyz",0,l(100)),y:i("xyz",1,l(100)),z:i("xyz",2,l(100)),l:i("lab",0,l(100)),a:i("lab",1),b:i("lab",2),keyword:function(e){return arguments.length?new n(e):h[this.model].keyword(this.color)},hex:function(e){return arguments.length?new n(e):c.to.hex(this.rgb().round().color)},rgbNumber:function(){var e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity:function(){for(var e=this.rgb().color,t=[],r=0;r<e.length;r++){var n=e[r]/255;t[r]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(e){var t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level:function(e){var t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":""},dark:function(){var e=this.rgb().color,t=(299*e[0]+587*e[1]+114*e[2])/1e3;return t<128},light:function(){return!this.dark()},negate:function(){for(var e=this.rgb(),t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten:function(e){var t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken:function(e){var t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate:function(e){var t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate:function(e){var t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten:function(e){var t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken:function(e){var t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale:function(){var e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return n.rgb(t,t,t)},fade:function(e){return this.alpha(this.valpha-this.valpha*e)},opaquer:function(e){return this.alpha(this.valpha+this.valpha*e)},rotate:function(e){var t=this.hsl(),r=t.color[0];return r=(r+e)%360,r=r<0?360+r:r,t.color[0]=r,t},mix:function(e,t){var r=this.rgb(),o=e.rgb(),a=void 0===t?.5:t,i=2*a-1,l=r.alpha()-o.alpha(),s=((i*l===-1?i:(i+l)/(1+i*l))+1)/2,u=1-s;return n.rgb(s*r.red()+u*o.red(),s*r.green()+u*o.green(),s*r.blue()+u*o.blue(),r.alpha()*a+o.alpha()*(1-a))}},Object.keys(h).forEach(function(e){if(p.indexOf(e)===-1){var t=h[e].channels;n.prototype[e]=function(){if(this.model===e)return new n(this);if(arguments.length)return new n(arguments,e);var r="number"==typeof arguments[t]?t:this.valpha;return new n(s(h[this.model][e].raw(this.color)).concat(r),e)},n[e]=function(r){return"number"==typeof r&&(r=u(f.call(arguments),t)),new n(r,e)}}}),e.exports=n},function(e,t,r){function n(e,t,r){return Math.min(Math.max(t,e),r)}function o(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}var a=r(9),i=r(10),l={};for(var s in a)a.hasOwnProperty(s)&&(l[a[s]]=s);var u=e.exports={to:{}};u.get=function(e){var t,r,n=e.substring(0,3).toLowerCase();switch(n){case"hsl":t=u.get.hsl(e),r="hsl";break;case"hwb":t=u.get.hwb(e),r="hwb";break;default:t=u.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},u.get.rgb=function(e){if(!e)return null;var t,r,o=/^#([a-fA-F0-9]{3})$/,i=/^#([a-fA-F0-9]{6})$/,l=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,s=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,u=/(\D+)/,c=[0,0,0,1];if(t=e.match(o))for(t=t[1],r=0;r<3;r++)c[r]=parseInt(t[r]+t[r],16);else if(t=e.match(i))for(t=t[1],r=0;r<3;r++){var h=2*r;c[r]=parseInt(t.slice(h,h+2),16)}else if(t=e.match(l)){for(r=0;r<3;r++)c[r]=parseInt(t[r+1],0);t[4]&&(c[3]=parseFloat(t[4]))}else if(t=e.match(s)){for(r=0;r<3;r++)c[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(c[3]=parseFloat(t[4]))}else if(t=e.match(u))return"transparent"===t[1]?[0,0,0,0]:(c=a[t[1]])?(c[3]=1,c):null;for(r=0;r<c.length;r++)c[r]=n(c[r],0,255);return c[3]=n(c[3],0,1),c},u.get.hsl=function(e){if(!e)return null;var t=/^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=e.match(t);if(r){var o=parseFloat(r[4]),a=(parseFloat(r[1])%360+360)%360,i=n(parseFloat(r[2]),0,100),l=n(parseFloat(r[3]),0,100),s=n(isNaN(o)?1:o,0,1);return[a,i,l,s]}return null},u.get.hwb=function(e){if(!e)return null;var t=/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=e.match(t);if(r){var o=parseFloat(r[4]),a=(parseFloat(r[1])%360+360)%360,i=n(parseFloat(r[2]),0,100),l=n(parseFloat(r[3]),0,100),s=n(isNaN(o)?1:o,0,1);return[a,i,l,s]}return null},u.to.hex=function(e){return"#"+o(e[0])+o(e[1])+o(e[2])},u.to.rgb=function(){var e=i(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},u.to.rgb.percent=function(){var e=i(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},u.to.hsl=function(){var e=i(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},u.to.hwb=function(){var e=i(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},u.to.keyword=function(e){return l[e.slice(0,3)]}},function(e,t){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,r){"use strict";var n=r(11),o=Array.prototype.concat,a=Array.prototype.slice,i=e.exports=function(e){for(var t=[],r=0,i=e.length;r<i;r++){var l=e[r];n(l)?t=o.call(t,a.call(l)):t.push(l)}return t};i.wrap=function(e){return function(){return e(i(arguments))}}},function(e,t){"use strict";e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},function(e,t,r){function n(e){var t=function(t){return void 0===t||null===t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}function o(e){var t=function(t){if(void 0===t||null===t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var r=e(t);if("object"==typeof r)for(var n=r.length,o=0;o<n;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}var a=r(13),i=r(14),l={},s=Object.keys(a);s.forEach(function(e){l[e]={},Object.defineProperty(l[e],"channels",{value:a[e].channels}),Object.defineProperty(l[e],"labels",{value:a[e].labels});var t=i(e),r=Object.keys(t);r.forEach(function(r){var a=t[r];l[e][r]=o(a),l[e][r].raw=n(a)})}),e.exports=l},function(e,t,r){function n(e,t){return Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2)+Math.pow(e[2]-t[2],2)}var o=r(9),a={};for(var i in o)o.hasOwnProperty(i)&&(a[o[i]]=i);var l=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var s in l)if(l.hasOwnProperty(s)){if(!("channels"in l[s]))throw new Error("missing channels property: "+s);if(!("labels"in l[s]))throw new Error("missing channel labels property: "+s);if(l[s].labels.length!==l[s].channels)throw new Error("channel and label counts mismatch: "+s);var u=l[s].channels,c=l[s].labels;delete l[s].channels,delete l[s].labels,Object.defineProperty(l[s],"channels",{value:u}),Object.defineProperty(l[s],"labels",{value:c})}l.rgb.hsl=function(e){var t,r,n,o=e[0]/255,a=e[1]/255,i=e[2]/255,l=Math.min(o,a,i),s=Math.max(o,a,i),u=s-l;return s===l?t=0:o===s?t=(a-i)/u:a===s?t=2+(i-o)/u:i===s&&(t=4+(o-a)/u),t=Math.min(60*t,360),t<0&&(t+=360),n=(l+s)/2,r=s===l?0:n<=.5?u/(s+l):u/(2-s-l),[t,100*r,100*n]},l.rgb.hsv=function(e){var t,r,n,o=e[0],a=e[1],i=e[2],l=Math.min(o,a,i),s=Math.max(o,a,i),u=s-l;return r=0===s?0:u/s*1e3/10,s===l?t=0:o===s?t=(a-i)/u:a===s?t=2+(i-o)/u:i===s&&(t=4+(o-a)/u),t=Math.min(60*t,360),t<0&&(t+=360),n=s/255*1e3/10,[t,r,n]},l.rgb.hwb=function(e){var t=e[0],r=e[1],n=e[2],o=l.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(r,n));return n=1-1/255*Math.max(t,Math.max(r,n)),[o,100*a,100*n]},l.rgb.cmyk=function(e){var t,r,n,o,a=e[0]/255,i=e[1]/255,l=e[2]/255;return o=Math.min(1-a,1-i,1-l),t=(1-a-o)/(1-o)||0,r=(1-i-o)/(1-o)||0,n=(1-l-o)/(1-o)||0,[100*t,100*r,100*n,100*o]},l.rgb.keyword=function(e){var t=a[e];if(t)return t;var r,i=1/0;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l],u=n(e,s);u<i&&(i=u,r=l)}return r},l.keyword.rgb=function(e){return o[e]},l.rgb.xyz=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var o=.4124*t+.3576*r+.1805*n,a=.2126*t+.7152*r+.0722*n,i=.0193*t+.1192*r+.9505*n;return[100*o,100*a,100*i]},l.rgb.lab=function(e){var t,r,n,o=l.rgb.xyz(e),a=o[0],i=o[1],s=o[2];return a/=95.047,i/=100,s/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,t=116*i-16,r=500*(a-i),n=200*(i-s),[t,r,n]},l.hsl.rgb=function(e){var t,r,n,o,a,i=e[0]/360,l=e[1]/100,s=e[2]/100;if(0===l)return a=255*s,[a,a,a];r=s<.5?s*(1+l):s+l-s*l,t=2*s-r,o=[0,0,0];for(var u=0;u<3;u++)n=i+1/3*-(u-1),n<0&&n++,n>1&&n--,a=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,o[u]=255*a;return o},l.hsl.hsv=function(e){var t,r,n=e[0],o=e[1]/100,a=e[2]/100,i=o,l=Math.max(a,.01);return a*=2,o*=a<=1?a:2-a,i*=l<=1?l:2-l,r=(a+o)/2,t=0===a?2*i/(l+i):2*o/(a+o),[n,100*t,100*r]},l.hsv.rgb=function(e){var t=e[0]/60,r=e[1]/100,n=e[2]/100,o=Math.floor(t)%6,a=t-Math.floor(t),i=255*n*(1-r),l=255*n*(1-r*a),s=255*n*(1-r*(1-a));switch(n*=255,o){case 0:return[n,s,i];case 1:return[l,n,i];case 2:return[i,n,s];case 3:return[i,l,n];case 4:return[s,i,n];case 5:return[n,i,l]}},l.hsv.hsl=function(e){var t,r,n,o=e[0],a=e[1]/100,i=e[2]/100,l=Math.max(i,.01);return n=(2-a)*i,t=(2-a)*l,r=a*l,r/=t<=1?t:2-t,r=r||0,n/=2,[o,100*r,100*n]},l.hwb.rgb=function(e){var t,r,n,o,a=e[0]/360,i=e[1]/100,l=e[2]/100,s=i+l;s>1&&(i/=s,l/=s),t=Math.floor(6*a),r=1-l,n=6*a-t,0!==(1&t)&&(n=1-n),o=i+n*(r-i);var u,c,h;switch(t){default:case 6:case 0:u=r,c=o,h=i;break;case 1:u=o,c=r,h=i;break;case 2:u=i,c=r,h=o;break;case 3:u=i,c=o,h=r;break;case 4:u=o,c=i,h=r;break;case 5:u=r,c=i,h=o}return[255*u,255*c,255*h]},l.cmyk.rgb=function(e){var t,r,n,o=e[0]/100,a=e[1]/100,i=e[2]/100,l=e[3]/100;return t=1-Math.min(1,o*(1-l)+l),r=1-Math.min(1,a*(1-l)+l),n=1-Math.min(1,i*(1-l)+l),[255*t,255*r,255*n]},l.xyz.rgb=function(e){var t,r,n,o=e[0]/100,a=e[1]/100,i=e[2]/100;return t=3.2406*o+a*-1.5372+i*-.4986,r=o*-.9689+1.8758*a+.0415*i,n=.0557*o+a*-.204+1.057*i,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,t=Math.min(Math.max(0,t),1),r=Math.min(Math.max(0,r),1),n=Math.min(Math.max(0,n),1),[255*t,255*r,255*n]},l.xyz.lab=function(e){var t,r,n,o=e[0],a=e[1],i=e[2];return o/=95.047,a/=100,i/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,t=116*a-16,r=500*(o-a),n=200*(a-i),[t,r,n]},l.lab.xyz=function(e){var t,r,n,o=e[0],a=e[1],i=e[2];r=(o+16)/116,t=a/500+r,n=r-i/200;var l=Math.pow(r,3),s=Math.pow(t,3),u=Math.pow(n,3);return r=l>.008856?l:(r-16/116)/7.787,t=s>.008856?s:(t-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,t*=95.047,r*=100,n*=108.883,[t,r,n]},l.lab.lch=function(e){var t,r,n,o=e[0],a=e[1],i=e[2];return t=Math.atan2(i,a),r=360*t/2/Math.PI,r<0&&(r+=360),n=Math.sqrt(a*a+i*i),[o,n,r]},l.lch.lab=function(e){var t,r,n,o=e[0],a=e[1],i=e[2];return n=i/360*2*Math.PI,t=a*Math.cos(n),r=a*Math.sin(n),[o,t,r]},l.rgb.ansi16=function(e){var t=e[0],r=e[1],n=e[2],o=1 in arguments?arguments[1]:l.rgb.hsv(e)[2];if(o=Math.round(o/50),0===o)return 30;var a=30+(Math.round(n/255)<<2|Math.round(r/255)<<1|Math.round(t/255));return 2===o&&(a+=60),a},l.hsv.ansi16=function(e){return l.rgb.ansi16(l.hsv.rgb(e),e[2])},l.rgb.ansi256=function(e){var t=e[0],r=e[1],n=e[2];if(t===r&&r===n)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;var o=16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5);return o},l.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];var r=.5*(~~(e>50)+1),n=(1&t)*r*255,o=(t>>1&1)*r*255,a=(t>>2&1)*r*255;return[n,o,a]},l.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}e-=16;var r,n=Math.floor(e/36)/5*255,o=Math.floor((r=e%36)/6)/5*255,a=r%6/5*255;return[n,o,a]},l.rgb.hex=function(e){var t=((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2])),r=t.toString(16).toUpperCase();return"000000".substring(r.length)+r},l.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var r=t[0];3===t[0].length&&(r=r.split("").map(function(e){return e+e}).join(""));var n=parseInt(r,16),o=n>>16&255,a=n>>8&255,i=255&n;return[o,a,i]},l.rgb.hcg=function(e){var t,r,n=e[0]/255,o=e[1]/255,a=e[2]/255,i=Math.max(Math.max(n,o),a),l=Math.min(Math.min(n,o),a),s=i-l;return t=s<1?l/(1-s):0,r=s<=0?0:i===n?(o-a)/s%6:i===o?2+(a-n)/s:4+(n-o)/s+4,r/=6,r%=1,[360*r,100*s,100*t]},l.hsl.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=1,o=0;return n=r<.5?2*t*r:2*t*(1-r),n<1&&(o=(r-.5*n)/(1-n)),[e[0],100*n,100*o]},l.hsv.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=t*r,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},l.hcg.rgb=function(e){var t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];var o=[0,0,0],a=t%1*6,i=a%1,l=1-i,s=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return s=(1-r)*n,[255*(r*o[0]+s),255*(r*o[1]+s),255*(r*o[2]+s)]},l.hcg.hsv=function(e){var t=e[1]/100,r=e[2]/100,n=t+r*(1-t),o=0;return n>0&&(o=t/n),[e[0],100*o,100*n]},l.hcg.hsl=function(e){var t=e[1]/100,r=e[2]/100,n=r*(1-t)+.5*t,o=0;return n>0&&n<.5?o=t/(2*n):n>=.5&&n<1&&(o=t/(2*(1-n))),[e[0],100*o,100*n]},l.hcg.hwb=function(e){var t=e[1]/100,r=e[2]/100,n=t+r*(1-t);return[e[0],100*(n-t),100*(1-n)]},l.hwb.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=1-r,o=n-t,a=0;return o<1&&(a=(n-o)/(1-o)),[e[0],100*o,100*a]},l.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},l.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},l.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},l.gray.hsl=l.gray.hsv=function(e){return[0,0,e[0]]},l.gray.hwb=function(e){return[0,100,e[0]]},l.gray.cmyk=function(e){return[0,0,0,e[0]]},l.gray.lab=function(e){return[e[0],0,0]},l.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),r=(t<<16)+(t<<8)+t,n=r.toString(16).toUpperCase();return"000000".substring(n.length)+n},l.rgb.gray=function(e){var t=(e[0]+e[1]+e[2])/3;return[t/255*100]}},function(e,t,r){function n(){for(var e={},t=s.length,r=0;r<t;r++)e[s[r]]={distance:-1,parent:null};return e}function o(e){var t=n(),r=[e];for(t[e].distance=0;r.length;)for(var o=r.pop(),a=Object.keys(l[o]),i=a.length,s=0;s<i;s++){var u=a[s],c=t[u];c.distance===-1&&(c.distance=t[o].distance+1,c.parent=o,r.unshift(u))}return t}function a(e,t){return function(r){return t(e(r))}}function i(e,t){for(var r=[t[e].parent,e],n=l[t[e].parent][e],o=t[e].parent;t[o].parent;)r.unshift(t[o].parent),n=a(l[t[o].parent][o],n),o=t[o].parent;return n.conversion=r,n}var l=r(13),s=Object.keys(l);e.exports=function(e){for(var t=o(e),r={},n=Object.keys(t),a=n.length,l=0;l<a;l++){var s=n[l],u=t[s];null!==u.parent&&(r[s]=i(s,t))}return r}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),s=r(3),u=r(16),c=r(17),h=r(5),f=r(24),p=r(18),d=p.Editor,b=p.EditorModel,g=r(19),v=g.Balloon,y=g.BalloonModel,m=r(20),w=m.HTMLRender,k=m.HTMLRenderModel,M=c.Map,x=c.List,O=l.Component,j=function(e){function t(e){n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.editors=M({pug:new b({value:localStorage.getItem("jkfiddle-pug")||r(21),language:"pug"}),scss:new b({value:localStorage.getItem("jkfiddle-scss")||r(22),language:"scss"}),javascript:new b({value:localStorage.getItem("jkfiddle-javascript")||r(23),language:"javascript"})}),a.state={width:0,height:0,balloons:x()},window.addEventListener("resize",a.onResize.bind(a)),a}return a(t,e),i(t,[{key:"componentDidMount",value:function(){document.addEventListener("dragover",this.onDragOver.bind(this)),document.addEventListener("drop",this.onDrop.bind(this))}},{key:"resize",value:function(){var e=s.findDOMNode(this).getBoundingClientRect(),t=e.width,r=e.height;this.setState({width:t,height:r})}},{key:"onResize",value:function(){this.resize()}},{key:"render",value:function(){var e=this,t=this.props,r=t.language,n=t.dwidth,o=this.state,a=o.width,i=o.height,s=o.balloons,u=this.editors,c=u.get("pug").get("value"),h=u.get("scss").get("value"),f=u.get("javascript").get("value"),p=l.createElement(w,{onError:this.onError.bind(this),model:new k({pug:c,scss:h,js:f})}),b="result"===r?null:l.createElement(d,{model:u.get(r),onChange:this.onChangeEditor.bind(this),editorDidMount:this.resize.bind(this),width:a,height:i});return l.createElement("div",{style:{width:"calc(100% - "+n+"px)",height:"100%",overflowY:"hidden"}},"result"===r?p:b,l.createElement("div",{style:{position:"absolute",right:10,bottom:10}},s.map(function(t,r){return l.createElement(v,{model:t,remove:e.removeBalloon.bind(e,r)})})))}},{key:"onDragOver",value:function(e){e.preventDefault()}},{key:"onDrop",value:function(e){var t=this;e.preventDefault();var r=e.dataTransfer.files,n=this.editors,o=this.state.balloons,a=[];h.forEach(r,function(e){var r=e.path,o=u.basename(r),i=h.last(h.split(o,".")),l=h.some(["pug","scss","js"],function(e){if(e!==i)return!1;var l=f.readFileSync(r,"utf-8"),s="js"===e?"javascript":e,u=n.get(s);return t.editors=t.editors.set(s,u.set("value",l)),a.push(new y({body:"Uploaded "+o})),!0});l||a.push(new y({body:"."+i+" is not supported"}))}),a.length>0&&this.setState({balloons:o.concat(a)})}},{key:"onChangeEditor",value:function(e){var t=this.editors,r=e.get("language");this.editors=t.set(r,e)}},{key:"removeBalloon",value:function(e){var t=this.state.balloons;this.setState({balloons:t.filter(function(t,r){return r!==e})})}},{key:"onError",value:function(e){var t=this.state.balloons;this.setState({balloons:t.concat(e)})}}]),t}(O);e.exports=j},function(e,t){e.exports=require("path")},function(e,t){e.exports=Immutable},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();self.module=void 0,self.process.browser=!0;var s=r(5),u=r(17),c=r(16),h=r(2),f=h.Component,p=u.Record,d=u.Map,b=function(e){
function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(p({value:"",language:"",lineNumber:0,column:0})),g=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.id="editor-"+Date.now(),r.editor=null,r.$element=null,r}return a(t,e),l(t,[{key:"render",value:function(){var e=this.id;return h.createElement("div",{id:e})}},{key:"componentWillReceiveProps",value:function(e){var t=this.editor,r=this.props,n=s.cloneDeep(e),o=s.cloneDeep(r);s.forEach([o,n],function(e){s.forEach(s.toPairs(e),function(t){var r=i(t,2),n=r[0],o=r[1];"function"==typeof o&&delete e[n]})}),t&&u.is(d(n),d(o))||this.create(n)}},{key:"onDidChangeCursorPosition",value:function(){var e=this.editor,t=this.props,r=t.model,n=t.onChange,o=r.get("value"),a=e.getValue();if(o!==a){var i=r.get("language"),l=e.getPosition(),s=l.lineNumber,u=l.column;localStorage.setItem("jkfiddle-"+i,a),n(r.merge({language:i,value:a,lineNumber:s,column:u}))}}},{key:"create",value:function(e){var t=e.model,r=e.width,n=e.height,o=t.get("language"),a=t.get("value"),i=t.get("lineNumber"),l=t.get("column"),s=this.$element,u=this.editor;u&&u.dispose(),o="pug"===o?"jade":o,s.innerText="",s.style.width=r+"px",s.style.height=n+"px";var c=monaco.editor.create(s,{value:a,language:o,theme:"vs-dark"});c.focus(),c.setPosition({column:l,lineNumber:i}),c.onDidChangeCursorPosition(this.onDidChangeCursorPosition.bind(this)),this.editor=c}},{key:"componentDidMount",value:function(){var e=this,t=this.props.editorDidMount,r=this.id;amdRequire.config({baseUrl:"file://"+c.join(__dirname,"../../node_modules/monaco-editor/min")}),amdRequire(["vs/editor/editor.main"],function(){e.$element=document.getElementById(r),t()})}}]),t}(f);e.exports={EditorModel:b,Editor:g}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),s=r(17),u=r(6),c=u.blue,h=s.Record,f=l.Component,p=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(h({title:"",body:""})),d=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={opacity:1},r}return a(t,e),i(t,[{key:"fadeOut",value:function(){var e=this.state.opacity,t=this.props.remove,r=e-.01;r<0?t():(this.setState({opacity:r}),requestAnimationFrame(this.fadeOut.bind(this)))}},{key:"componentDidMount",value:function(){this.fadeOut()}},{key:"render",value:function(){var e=this.props.model,t=this.state.opacity;return l.createElement("div",{onClick:this.onClick.bind(this),style:{color:"white",fontSize:"12",fontFamily:"sans-serif",backgroundColor:c,padding:"5px 10px",marginBottom:5,borderRadius:4,cursor:"pointer",opacity:t}},l.createElement("div",null,e.get("title")),l.createElement("div",null,e.get("body")))}},{key:"onClick",value:function(){var e=this.props.remove;e()}}]),t}(f);e.exports={BalloonModel:p,Balloon:d}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(5),u=r(2),c=r(1),h=r(17),f=r(19),p=f.BalloonModel,d=h.Record,b=h.Map,g=u.Component,v=c.ipcRenderer,y=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(d({pug:"",scss:"",js:""})),m=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e){var t=e.model,r=this.props.model;return!h.is(b(t),b(r))}},{key:"render",value:function(){var e=this.props,t=e.model,r=e.onError,n=v.sendSync("compile",[t.get("pug"),t.get("scss"),t.get("js")]),o=i(n,3),a=o[0],l=a.status,c=a.result,h=o[1],f=h.status,d=h.result,b=o[2],g=b.status,y=b.result,m="";if(s.every([l,f,g],function(e){return"success"===e})){var w=document.createElement("html");w.innerHTML=c;var k=document.createElement("style");k.innerHTML=d,w.querySelector("head").appendChild(k);var M=document.createElement("script");M.innerHTML=y,w.querySelector("body").appendChild(M),m=w.innerHTML}else{var x=[];"error"===l&&x.push(new p({title:"Pug",body:c})),"error"===f&&x.push(new p({title:"SCSS",body:d})),"error"===g&&x.push(new p({title:"JS",body:y})),r(x)}return u.createElement("iframe",{srcDoc:m,style:{display:"block",border:"none",width:"100%",height:"100%"}})}}]),t}(g);e.exports={HTMLRenderModel:y,HTMLRender:m}},function(e,t){e.exports="doctype html\nhtml\n\thead\n\t\tmeta(charset='utf-8')\n\tbody\n\t\th1 Hello, World!"},function(e,t){e.exports="h1 {\n\tcolor: #f00;\n}\n"},function(e,t){e.exports="console.log('Hello, World!');"},function(e,t){e.exports=require("fs")}]);