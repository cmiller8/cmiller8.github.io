/*! jQuery v1.8.2 jquery.com | jquery.org/license */
!function(e,t){function n(e){var t=ht[e]={};return K.each(e.split(tt),function(e,n){t[n]=!0}),t}function r(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(mt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:gt.test(r)?K.parseJSON(r):r}catch(o){}K.data(e,n,r)}else r=t}return r}function i(e){var t;for(t in e)if(("data"!==t||!K.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function o(){return!1}function a(){return!0}function s(e){return!e||!e.parentNode||11===e.parentNode.nodeType}function u(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function l(e,t,n){if(t=t||0,K.isFunction(t))return K.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return K.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=K.grep(e,function(e){return 1===e.nodeType});if(Ht.test(t))return K.filter(t,r,!n);t=K.filter(t,r)}return K.grep(e,function(e){return K.inArray(e,t)>=0===n})}function c(e){var t=Pt.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function p(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function f(e,t){if(1===t.nodeType&&K.hasData(e)){var n,r,i,o=K._data(e),a=K._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)K.event.add(t,n,s[n][r])}a.data&&(a.data=K.extend({},a.data))}}function d(e,t){var n;1===t.nodeType&&(t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),K.support.html5Clone&&e.innerHTML&&!K.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Qt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.selected=e.defaultSelected:"input"===n||"textarea"===n?t.defaultValue=e.defaultValue:"script"===n&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(K.expando))}function h(e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName("*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll("*"):[]}function g(e){Qt.test(e.type)&&(e.defaultChecked=e.checked)}function m(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=vn.length;i--;)if(t=vn[i]+n,t in e)return t;return r}function y(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)}function v(e,t){for(var n,r,i=[],o=0,a=e.length;a>o;o++)n=e[o],n.style&&(i[o]=K._data(n,"olddisplay"),t?(!i[o]&&"none"===n.style.display&&(n.style.display=""),""===n.style.display&&y(n)&&(i[o]=K._data(n,"olddisplay",T(n.nodeName)))):(r=nn(n,"display"),!i[o]&&"none"!==r&&K._data(n,"olddisplay",r)));for(o=0;a>o;o++)n=e[o],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?i[o]||"":"none"));return e}function b(e,t,n){var r=pn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function x(e,t,n,r){for(var i=n===(r?"border":"content")?4:"width"===t?1:0,o=0;4>i;i+=2)"margin"===n&&(o+=K.css(e,n+yn[i],!0)),r?("content"===n&&(o-=parseFloat(nn(e,"padding"+yn[i]))||0),"margin"!==n&&(o-=parseFloat(nn(e,"border"+yn[i]+"Width"))||0)):(o+=parseFloat(nn(e,"padding"+yn[i]))||0,"padding"!==n&&(o+=parseFloat(nn(e,"border"+yn[i]+"Width"))||0));return o}function w(e,t,n){var r="width"===t?e.offsetWidth:e.offsetHeight,i=!0,o=K.support.boxSizing&&"border-box"===K.css(e,"boxSizing");if(0>=r||null==r){if(r=nn(e,t),(0>r||null==r)&&(r=e.style[t]),fn.test(r))return r;i=o&&(K.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+x(e,t,n||(o?"border":"content"),i)+"px"}function T(e){if(hn[e])return hn[e];var t=K("<"+e+">").appendTo(R.body),n=t.css("display");return t.remove(),("none"===n||""===n)&&(rn=R.body.appendChild(rn||K.extend(R.createElement("iframe"),{frameBorder:0,width:0,height:0})),on&&rn.createElement||(on=(rn.contentWindow||rn.contentDocument).document,on.write("<!doctype html><html><body>"),on.close()),t=on.body.appendChild(on.createElement(e)),n=nn(t,"display"),R.body.removeChild(rn)),hn[e]=n,n}function S(e,t,n,r){var i;if(K.isArray(t))K.each(t,function(t,i){n||wn.test(e)?r(e,i):S(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==K.type(t))r(e,t);else for(i in t)S(e+"["+i+"]",t[i],n,r)}function j(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i,o,a=t.toLowerCase().split(tt),s=0,u=a.length;if(K.isFunction(n))for(;u>s;s++)r=a[s],o=/^\+/.test(r),o&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[o?"unshift":"push"](n)}}function k(e,n,r,i,o,a){o=o||n.dataTypes[0],a=a||{},a[o]=!0;for(var s,u=e[o],l=0,c=u?u.length:0,p=e===$n;c>l&&(p||!s);l++)s=u[l](n,r,i),"string"==typeof s&&(!p||a[s]?s=t:(n.dataTypes.unshift(s),s=k(e,n,r,i,s,a)));return(p||!s)&&!a["*"]&&(s=k(e,n,r,i,"*",a)),s}function E(e,n){var r,i,o=K.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);i&&K.extend(!0,e,i)}function N(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)a=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}a=a||s}return a?(a!==l[0]&&l.unshift(a),r[a]):void 0}function D(e,t){var n,r,i,o,a=e.dataTypes.slice(),s=a[0],u={},l=0;if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),a[1])for(n in e.converters)u[n.toLowerCase()]=e.converters[n];for(;i=a[++l];)if("*"!==i){if("*"!==s&&s!==i){if(n=u[s+" "+i]||u["* "+i],!n)for(r in u)if(o=r.split(" "),o[1]===i&&(n=u[s+" "+o[0]]||u["* "+o[0]])){n===!0?n=u[r]:u[r]!==!0&&(i=o[0],a.splice(l--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+s+" to "+i}}}s=i}return{state:"success",data:t}}function C(){try{return new e.XMLHttpRequest}catch(t){}}function A(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function O(){return setTimeout(function(){Vn=t},0),Vn=K.now()}function F(e,t){K.each(t,function(t,n){for(var r=(er[t]||[]).concat(er["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function L(e,t,n){var r,i=0,o=Zn.length,a=K.Deferred().always(function(){delete s.elem}),s=function(){for(var t=Vn||O(),n=Math.max(0,u.startTime+u.duration-t),r=1-(n/u.duration||0),i=0,o=u.tweens.length;o>i;i++)u.tweens[i].run(r);return a.notifyWith(e,[u,r,n]),1>r&&o?n:(a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Vn||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=K.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){for(var n=0,r=t?u.tweens.length:0;r>n;n++)u.tweens[n].run(1);return t?a.resolveWith(e,[u,t]):a.rejectWith(e,[u,t]),this}}),l=u.props;for(_(l,u.opts.specialEasing);o>i;i++)if(r=Zn[i].call(u,e,l,u.opts))return r;return F(u,l),K.isFunction(u.opts.start)&&u.opts.start.call(e,u),K.fx.timer(K.extend(s,{anim:u,queue:u.opts.queue,elem:e})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function _(e,t){var n,r,i,o,a;for(n in e)if(r=K.camelCase(n),i=t[r],o=e[n],K.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=K.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function M(e,t,n){var r,i,o,a,s,u,l,c,p=this,f=e.style,d={},h=[],g=e.nodeType&&y(e);n.queue||(l=K._queueHooks(e,"fx"),null==l.unqueued&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,p.always(function(){p.always(function(){l.unqueued--,K.queue(e,"fx").length||l.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===K.css(e,"display")&&"none"===K.css(e,"float")&&(K.support.inlineBlockNeedsLayout&&"inline"!==T(e.nodeName)?f.zoom=1:f.display="inline-block")),n.overflow&&(f.overflow="hidden",K.support.shrinkWrapBlocks||p.done(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Gn.exec(o)){if(delete t[r],o===(g?"hide":"show"))continue;h.push(r)}if(a=h.length)for(s=K._data(e,"fxshow")||K._data(e,"fxshow",{}),g?K(e).show():p.done(function(){K(e).hide()}),p.done(function(){var t;K.removeData(e,"fxshow",!0);for(t in d)K.style(e,t,d[t])}),r=0;a>r;r++)i=h[r],u=p.createTween(i,g?s[i]:0),d[i]=s[i]||K.style(e,i),i in s||(s[i]=u.start,g&&(u.end=u.start,u.start="width"===i||"height"===i?1:0))}function H(e,t,n,r,i){return new H.prototype.init(e,t,n,r,i)}function $(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=yn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function q(e){return K.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var P,B,R=e.document,I=e.location,z=e.navigator,W=e.jQuery,X=e.$,U=Array.prototype.push,J=Array.prototype.slice,V=Array.prototype.indexOf,Q=Object.prototype.toString,G=Object.prototype.hasOwnProperty,Y=String.prototype.trim,K=function(e,t){return new K.fn.init(e,t,P)},Z=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,et=/\S/,tt=/\s+/,nt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rt=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,it=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ot=/^[\],:{}\s]*$/,at=/(?:^|:|,)(?:\s*\[)+/g,st=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,ut=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,lt=/^-ms-/,ct=/-([\da-z])/gi,pt=function(e,t){return(t+"").toUpperCase()},ft=function(){R.addEventListener?(R.removeEventListener("DOMContentLoaded",ft,!1),K.ready()):"complete"===R.readyState&&(R.detachEvent("onreadystatechange",ft),K.ready())},dt={};K.fn=K.prototype={constructor:K,init:function(e,n,r){var i,o,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:rt.exec(e),i&&(i[1]||!n)){if(i[1])return n=n instanceof K?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:R,e=K.parseHTML(i[1],a,!0),it.test(i[1])&&K.isPlainObject(n)&&this.attr.call(e,n,!0),K.merge(this,e);if(o=R.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=R,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return K.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return J.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=K.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,"find"===t?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return K.each(this,e,t)},ready:function(e){return K.ready.promise().done(e),this},eq:function(e){return e=+e,-1===e?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(J.apply(this,arguments),"slice",J.call(arguments).join(","))},map:function(e){return this.pushStack(K.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:[].sort,splice:[].splice},K.fn.init.prototype=K.fn,K.extend=K.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"!=typeof s&&!K.isFunction(s)&&(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(e=arguments[u]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(K.isPlainObject(i)||(o=K.isArray(i)))?(o?(o=!1,a=r&&K.isArray(r)?r:[]):a=r&&K.isPlainObject(r)?r:{},s[n]=K.extend(c,a,i)):i!==t&&(s[n]=i));return s},K.extend({noConflict:function(t){return e.$===K&&(e.$=X),t&&e.jQuery===K&&(e.jQuery=W),K},isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){if(e===!0?!--K.readyWait:!K.isReady){if(!R.body)return setTimeout(K.ready,1);K.isReady=!0,e!==!0&&--K.readyWait>0||(B.resolveWith(R,[K]),K.fn.trigger&&K(R).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray||function(e){return"array"===K.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):dt[Q.call(e)]||"object"},isPlainObject:function(e){if(!e||"object"!==K.type(e)||e.nodeType||K.isWindow(e))return!1;try{if(e.constructor&&!G.call(e,"constructor")&&!G.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||G.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return e&&"string"==typeof e?("boolean"==typeof t&&(n=t,t=0),t=t||R,(r=it.exec(e))?[t.createElement(r[1])]:(r=K.buildFragment([e],t,n?null:[]),K.merge([],(r.cacheable?K.clone(r.fragment):r.fragment).childNodes))):null},parseJSON:function(t){return t&&"string"==typeof t?(t=K.trim(t),e.JSON&&e.JSON.parse?e.JSON.parse(t):ot.test(t.replace(st,"@").replace(ut,"]").replace(at,""))?new Function("return "+t)():void K.error("Invalid JSON: "+t)):null},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&K.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&et.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(lt,"ms-").replace(ct,pt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,o=0,a=e.length,s=a===t||K.isFunction(e);if(r)if(s){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;a>o&&n.apply(e[o++],r)!==!1;);else if(s){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;a>o&&n.call(e[o],o,e[o++])!==!1;);return e},trim:Y&&!Y.call(" ")?function(e){return null==e?"":Y.call(e)}:function(e){return null==e?"":(e+"").replace(nt,"")},makeArray:function(e,t){var n,r=t||[];return null!=e&&(n=K.type(e),null==e.length||"string"===n||"function"===n||"regexp"===n||K.isWindow(e)?U.call(r,e):K.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(V)return V.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,n,r){var i,o,a=[],s=0,u=e.length,l=e instanceof K||u!==t&&"number"==typeof u&&(u>0&&e[0]&&e[u-1]||0===u||K.isArray(e));if(l)for(;u>s;s++)i=n(e[s],s,r),null!=i&&(a[a.length]=i);else for(o in e)i=n(e[o],o,r),null!=i&&(a[a.length]=i);return a.concat.apply([],a)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),K.isFunction(e)?(i=J.call(arguments,2),o=function(){return e.apply(n,i.concat(J.call(arguments)))},o.guid=e.guid=e.guid||K.guid++,o):t},access:function(e,n,r,i,o,a,s){var u,l=null==r,c=0,p=e.length;if(r&&"object"==typeof r){for(c in r)K.access(e,n,c,r[c],1,a,i);o=1}else if(i!==t){if(u=s===t&&K.isFunction(i),l&&(u?(u=n,n=function(e,t,n){return u.call(K(e),n)}):(n.call(e,i),n=null)),n)for(;p>c;c++)n(e[c],r,u?i.call(e[c],c,n(e[c],r)):i,s);o=1}return o?e:l?n.call(e):p?n(e[0],r):a},now:function(){return(new Date).getTime()}}),K.ready.promise=function(t){if(!B)if(B=K.Deferred(),"complete"===R.readyState)setTimeout(K.ready,1);else if(R.addEventListener)R.addEventListener("DOMContentLoaded",ft,!1),e.addEventListener("load",K.ready,!1);else{R.attachEvent("onreadystatechange",ft),e.attachEvent("onload",K.ready);var n=!1;try{n=null==e.frameElement&&R.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!K.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}K.ready()}}()}return B.promise(t)},K.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){dt["[object "+t+"]"]=t.toLowerCase()}),P=K(R);var ht={};K.Callbacks=function(e){e="string"==typeof e?ht[e]||n(e):K.extend({},e);var r,i,o,a,s,u,l=[],c=!e.once&&[],p=function(t){for(r=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&s>u;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}o=!1,l&&(c?c.length&&p(c.shift()):r?l=[]:f.disable())},f={add:function(){if(l){var t=l.length;!function n(t){K.each(t,function(t,r){var i=K.type(r);"function"!==i||e.unique&&f.has(r)?r&&r.length&&"string"!==i&&n(r):l.push(r)})}(arguments),o?s=l.length:r&&(a=t,p(r))}return this},remove:function(){return l&&K.each(arguments,function(e,t){for(var n;(n=K.inArray(t,l,n))>-1;)l.splice(n,1),o&&(s>=n&&s--,u>=n&&u--)}),this},has:function(e){return K.inArray(e,l)>-1},empty:function(){return l=[],this},disable:function(){return l=c=r=t,this},disabled:function(){return!l},lock:function(){return c=t,r||f.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],l&&(!i||c)&&(o?c.push(t):p(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!i}};return f},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return K.Deferred(function(n){K.each(t,function(t,r){var o=r[0],a=e[t];i[r[1]](K.isFunction(a)?function(){var e=a.apply(this,arguments);e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o+"With"](this===i?n:this,[e])}:n[o])}),e=null}).promise()},promise:function(e){return null!=e?K.extend(e,r):r}},i={};return r.pipe=r.then,K.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=a.fire,i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=J.call(arguments),a=o.length,s=1!==a||e&&K.isFunction(e.promise)?a:0,u=1===s?e:K.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?J.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&K.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),K.support=function(){var t,n,r,i,o,a,s,u,l,c,p,f=R.createElement("div");if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=f.getElementsByTagName("*"),r=f.getElementsByTagName("a")[0],r.style.cssText="top:1px;float:left;opacity:.5",!n||!n.length)return{};i=R.createElement("select"),o=i.appendChild(R.createElement("option")),a=f.getElementsByTagName("input")[0],t={leadingWhitespace:3===f.firstChild.nodeType,tbody:!f.getElementsByTagName("tbody").length,htmlSerialize:!!f.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:"on"===a.value,optSelected:o.selected,getSetAttribute:"t"!==f.className,enctype:!!R.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==R.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===R.compatMode,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,i.disabled=!0,t.optDisabled=!o.disabled;try{delete f.test}catch(d){t.deleteExpando=!1}if(!f.addEventListener&&f.attachEvent&&f.fireEvent&&(f.attachEvent("onclick",p=function(){t.noCloneEvent=!1}),f.cloneNode(!0).fireEvent("onclick"),f.detachEvent("onclick",p)),a=R.createElement("input"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","checked"),a.setAttribute("name","t"),f.appendChild(a),s=R.createDocumentFragment(),s.appendChild(f.lastChild),t.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=a.checked,s.removeChild(a),s.appendChild(f),f.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})u="on"+l,c=u in f,c||(f.setAttribute(u,"return;"),c="function"==typeof f[u]),t[l+"Bubbles"]=c;return K(function(){var n,r,i,o,a="padding:0;margin:0;border:0;display:block;overflow:hidden;",s=R.getElementsByTagName("body")[0];s&&(n=R.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",s.insertBefore(n,s.firstChild),r=R.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=r.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=c&&0===i[0].offsetHeight,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===r.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(r,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(r,null)||{width:"4px"}).width,o=R.createElement("div"),o.style.cssText=r.style.cssText=a,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),"undefined"!=typeof r.style.zoom&&(r.innerHTML="",r.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===r.offsetWidth,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==r.offsetWidth,n.style.zoom=1),s.removeChild(n),n=r=i=o=null)}),s.removeChild(f),n=r=i=o=a=s=f=null,t}();var gt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,mt=/([A-Z])/g;K.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(K.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?K.cache[e[K.expando]]:e[K.expando],!!e&&!i(e)},data:function(e,n,r,i){if(K.acceptData(e)){var o,a,s=K.expando,u="string"==typeof n,l=e.nodeType,c=l?K.cache:e,p=l?e[s]:e[s]&&s;if(p&&c[p]&&(i||c[p].data)||!u||r!==t)return p||(l?e[s]=p=K.deletedIds.pop()||K.guid++:p=s),c[p]||(c[p]={},l||(c[p].toJSON=K.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[p]=K.extend(c[p],n):c[p].data=K.extend(c[p].data,n)),o=c[p],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[K.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[K.camelCase(n)])):a=o,a}},removeData:function(e,t,n){if(K.acceptData(e)){var r,o,a,s=e.nodeType,u=s?K.cache:e,l=s?e[K.expando]:K.expando;if(u[l]){if(t&&(r=n?u[l]:u[l].data)){K.isArray(t)||(t in r?t=[t]:(t=K.camelCase(t),t=t in r?[t]:t.split(" ")));for(o=0,a=t.length;a>o;o++)delete r[t[o]];if(!(n?i:K.isEmptyObject)(r))return}(n||(delete u[l].data,i(u[l])))&&(s?K.cleanData([e],!0):K.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}},_data:function(e,t,n){return K.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&K.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),K.fn.extend({data:function(e,n){var i,o,a,s,u,l=this[0],c=0,p=null;if(e===t){if(this.length&&(p=K.data(l),1===l.nodeType&&!K._data(l,"parsedAttrs"))){for(a=l.attributes,u=a.length;u>c;c++)s=a[c].name,s.indexOf("data-")||(s=K.camelCase(s.substring(5)),r(l,s,p[s]));K._data(l,"parsedAttrs",!0)}return p}return"object"==typeof e?this.each(function(){K.data(this,e)}):(i=e.split(".",2),i[1]=i[1]?"."+i[1]:"",o=i[1]+"!",K.access(this,function(n){return n===t?(p=this.triggerHandler("getData"+o,[i[0]]),p===t&&l&&(p=K.data(l,e),p=r(l,e,p)),p===t&&i[1]?this.data(i[0]):p):(i[1]=n,void this.each(function(){var t=K(this);t.triggerHandler("setData"+o,i),K.data(this,e,n),t.triggerHandler("changeData"+o,i)}))},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){K.removeData(this,e)})}}),K.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=K._data(e,t),n&&(!r||K.isArray(n)?r=K._data(e,t,K.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=K.queue(e,t),r=n.length,i=n.shift(),o=K._queueHooks(e,t),a=function(){K.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return K._data(e,n)||K._data(e,n,{empty:K.Callbacks("once memory").add(function(){K.removeData(e,t+"queue",!0),K.removeData(e,n,!0)})})}}),K.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?K.queue(this[0],e):n===t?this:this.each(function(){var t=K.queue(this,e,n);K._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&K.dequeue(this,e)})},dequeue:function(e){return this.each(function(){K.dequeue(this,e)})},delay:function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=K.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=K._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var yt,vt,bt,xt=/[\t\r\n]/g,wt=/\r/g,Tt=/^(?:button|input)$/i,St=/^(?:button|input|object|select|textarea)$/i,jt=/^a(?:rea|)$/i,kt=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Et=K.support.getSetAttribute;K.fn.extend({attr:function(e,t){return K.access(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){K.removeAttr(this,e)})},prop:function(e,t){return K.access(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return e=K.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a,s;if(K.isFunction(e))return this.each(function(t){K(this).addClass(e.call(this,t,this.className))});if(e&&"string"==typeof e)for(t=e.split(tt),n=0,r=this.length;r>n;n++)if(i=this[n],1===i.nodeType)if(i.className||1!==t.length){for(o=" "+i.className+" ",a=0,s=t.length;s>a;a++)o.indexOf(" "+t[a]+" ")<0&&(o+=t[a]+" ");i.className=K.trim(o)}else i.className=e;return this},removeClass:function(e){var n,r,i,o,a,s,u;if(K.isFunction(e))return this.each(function(t){K(this).removeClass(e.call(this,t,this.className))});if(e&&"string"==typeof e||e===t)for(n=(e||"").split(tt),s=0,u=this.length;u>s;s++)if(i=this[s],1===i.nodeType&&i.className){for(r=(" "+i.className+" ").replace(xt," "),o=0,a=n.length;a>o;o++)for(;r.indexOf(" "+n[o]+" ")>=0;)r=r.replace(" "+n[o]+" "," ");i.className=e?K.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return this.each(K.isFunction(e)?function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var i,o=0,a=K(this),s=t,u=e.split(tt);i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else("undefined"===n||"boolean"===n)&&(this.className&&K._data(this,"__className__",this.className),this.className=this.className||e===!1?"":K._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(xt," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=K.isFunction(e),this.each(function(r){var o,a=K(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":K.isArray(o)&&(o=K.map(o,function(e){return null==e?"":e+""})),n=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=K.valHooks[o.type]||K.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(wt,""):null==r?"":r)}}}),K.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,i,o=e.selectedIndex,a=[],s=e.options,u="select-one"===e.type;if(0>o)return null;for(n=u?o:0,r=u?o+1:s.length;r>n;n++)if(i=s[n],!(!i.selected||(K.support.optDisabled?i.disabled:null!==i.getAttribute("disabled"))||i.parentNode.disabled&&K.nodeName(i.parentNode,"optgroup"))){if(t=K(i).val(),u)return t;a.push(t)}return u&&!a.length&&s.length?K(s[o]).val():a},set:function(e,t){var n=K.makeArray(t);return K(e).find("option").each(function(){this.selected=K.inArray(K(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return i&&K.isFunction(K.fn[n])?K(e)[n](r):"undefined"==typeof e.getAttribute?K.prop(e,n,r):(s=1!==u||!K.isXMLDoc(e),s&&(n=n.toLowerCase(),a=K.attrHooks[n]||(kt.test(n)?vt:yt)),r!==t?null===r?void K.removeAttr(e,n):a&&"set"in a&&s&&(o=a.set(e,r,n))!==t?o:(e.setAttribute(n,r+""),r):a&&"get"in a&&s&&null!==(o=a.get(e,n))?o:(o=e.getAttribute(n),null===o?t:o))},removeAttr:function(e,t){var n,r,i,o,a=0;if(t&&1===e.nodeType)for(r=t.split(tt);a<r.length;a++)i=r[a],i&&(n=K.propFix[i]||i,o=kt.test(i),o||K.attr(e,i,""),e.removeAttribute(Et?i:n),o&&n in e&&(e[n]=!1))},attrHooks:{type:{set:function(e,t){if(Tt.test(e.nodeName)&&e.parentNode)K.error("type property can't be changed");else if(!K.support.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return yt&&K.nodeName(e,"button")?yt.get(e,t):t in e?e.value:null},set:function(e,t,n){return yt&&K.nodeName(e,"button")?yt.set(e,t,n):void(e.value=t)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!K.isXMLDoc(e),a&&(n=K.propFix[n]||n,o=K.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):St.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:t}}}}),vt={get:function(e,n){var r,i=K.prop(e,n);return i===!0||"boolean"!=typeof i&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?K.removeAttr(e,n):(r=K.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},Et||(bt={name:!0,id:!0,coords:!0},yt=K.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(bt[n]?""!==r.value:r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=R.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},K.each(["width","height"],function(e,t){K.attrHooks[t]=K.extend(K.attrHooks[t],{set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0
}})}),K.attrHooks.contenteditable={get:yt.get,set:function(e,t,n){""===t&&(t="false"),yt.set(e,t,n)}}),K.support.hrefNormalized||K.each(["href","src","width","height"],function(e,n){K.attrHooks[n]=K.extend(K.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null===r?t:r}})}),K.support.style||(K.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),K.support.optSelected||(K.propHooks.selected=K.extend(K.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),K.support.enctype||(K.propFix.enctype="encoding"),K.support.checkOn||K.each(["radio","checkbox"],function(){K.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]=K.extend(K.valHooks[this],{set:function(e,t){return K.isArray(t)?e.checked=K.inArray(K(e).val(),t)>=0:void 0}})});var Nt=/^(?:textarea|input|select)$/i,Dt=/^([^\.]*|)(?:\.(.+)|)$/,Ct=/(?:^|\s)hover(\.\S+|)\b/,At=/^key/,Ot=/^(?:mouse|contextmenu)|click/,Ft=/^(?:focusinfocus|focusoutblur)$/,Lt=function(e){return K.event.special.hover?e:e.replace(Ct,"mouseenter$1 mouseleave$1")};K.event={add:function(e,n,r,i,o){var a,s,u,l,c,p,f,d,h,g,m;if(3!==e.nodeType&&8!==e.nodeType&&n&&r&&(a=K._data(e))){for(r.handler&&(h=r,r=h.handler,o=h.selector),r.guid||(r.guid=K.guid++),u=a.events,u||(a.events=u={}),s=a.handle,s||(a.handle=s=function(e){return"undefined"==typeof K||e&&K.event.triggered===e.type?t:K.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=K.trim(Lt(n)).split(" "),l=0;l<n.length;l++)c=Dt.exec(n[l])||[],p=c[1],f=(c[2]||"").split(".").sort(),m=K.event.special[p]||{},p=(o?m.delegateType:m.bindType)||p,m=K.event.special[p]||{},d=K.extend({type:p,origType:c[1],data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&K.expr.match.needsContext.test(o),namespace:f.join(".")},h),g=u[p],g||(g=u[p]=[],g.delegateCount=0,m.setup&&m.setup.call(e,i,f,s)!==!1||(e.addEventListener?e.addEventListener(p,s,!1):e.attachEvent&&e.attachEvent("on"+p,s))),m.add&&(m.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),o?g.splice(g.delegateCount++,0,d):g.push(d),K.event.global[p]=!0;e=null}},global:{},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=K.hasData(e)&&K._data(e);if(m&&(f=m.events)){for(t=K.trim(Lt(t||"")).split(" "),o=0;o<t.length;o++)if(a=Dt.exec(t[o])||[],s=u=a[1],l=a[2],s){for(d=K.event.special[s]||{},s=(r?d.delegateType:d.bindType)||s,h=f[s]||[],c=h.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null,p=0;p<h.length;p++)g=h[p],!(!i&&u!==g.origType||n&&n.guid!==g.guid||l&&!l.test(g.namespace)||r&&r!==g.selector&&("**"!==r||!g.selector)||(h.splice(p--,1),g.selector&&h.delegateCount--,!d.remove||!d.remove.call(e,g)));0===h.length&&c!==h.length&&((!d.teardown||d.teardown.call(e,l,m.handle)===!1)&&K.removeEvent(e,s,m.handle),delete f[s])}else for(s in f)K.event.remove(e,s+t[o],n,r,!0);K.isEmptyObject(f)&&(delete m.handle,K.removeData(e,"events",!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,o){if(!i||3!==i.nodeType&&8!==i.nodeType){var a,s,u,l,c,p,f,d,h,g,m=n.type||n,y=[];if(Ft.test(m+K.event.triggered))return;if(m.indexOf("!")>=0&&(m=m.slice(0,-1),s=!0),m.indexOf(".")>=0&&(y=m.split("."),m=y.shift(),y.sort()),(!i||K.event.customEvent[m])&&!K.event.global[m])return;if(n="object"==typeof n?n[K.expando]?n:new K.Event(m,n):new K.Event(m),n.type=m,n.isTrigger=!0,n.exclusive=s,n.namespace=y.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,p=m.indexOf(":")<0?"on"+m:"",!i){a=K.cache;for(u in a)a[u].events&&a[u].events[m]&&K.event.trigger(n,r,a[u].handle.elem,!0);return}if(n.result=t,n.target||(n.target=i),r=null!=r?K.makeArray(r):[],r.unshift(n),f=K.event.special[m]||{},f.trigger&&f.trigger.apply(i,r)===!1)return;if(h=[[i,f.bindType||m]],!o&&!f.noBubble&&!K.isWindow(i)){for(g=f.delegateType||m,l=Ft.test(g+m)?i:i.parentNode,c=i;l;l=l.parentNode)h.push([l,g]),c=l;c===(i.ownerDocument||R)&&h.push([c.defaultView||c.parentWindow||e,g])}for(u=0;u<h.length&&!n.isPropagationStopped();u++)l=h[u][0],n.type=h[u][1],d=(K._data(l,"events")||{})[n.type]&&K._data(l,"handle"),d&&d.apply(l,r),d=p&&l[p],d&&K.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=m,!(o||n.isDefaultPrevented()||f._default&&f._default.apply(i.ownerDocument,r)!==!1||"click"===m&&K.nodeName(i,"a")||!K.acceptData(i)||!p||!i[m]||("focus"===m||"blur"===m)&&0===n.target.offsetWidth||K.isWindow(i)||(c=i[p],c&&(i[p]=null),K.event.triggered=m,i[m](),K.event.triggered=t,!c||!(i[p]=c))),n.result}},dispatch:function(n){n=K.event.fix(n||e.event);var r,i,o,a,s,u,l,c,p,f=(K._data(this,"events")||{})[n.type]||[],d=f.delegateCount,h=J.call(arguments),g=!n.exclusive&&!n.namespace,m=K.event.special[n.type]||{},y=[];if(h[0]=n,n.delegateTarget=this,!m.preDispatch||m.preDispatch.call(this,n)!==!1){if(d&&(!n.button||"click"!==n.type))for(o=n.target;o!=this;o=o.parentNode||this)if(o.disabled!==!0||"click"!==n.type){for(s={},l=[],r=0;d>r;r++)c=f[r],p=c.selector,s[p]===t&&(s[p]=c.needsContext?K(p,this).index(o)>=0:K.find(p,this,null,[o]).length),s[p]&&l.push(c);l.length&&y.push({elem:o,matches:l})}for(f.length>d&&y.push({elem:this,matches:f.slice(d)}),r=0;r<y.length&&!n.isPropagationStopped();r++)for(u=y[r],n.currentTarget=u.elem,i=0;i<u.matches.length&&!n.isImmediatePropagationStopped();i++)c=u.matches[i],(g||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))&&(n.data=c.data,n.handleObj=c,a=((K.event.special[c.origType]||{}).handle||c.handler).apply(u.elem,h),a!==t&&(n.result=a,a===!1&&(n.preventDefault(),n.stopPropagation())));return m.postDispatch&&m.postDispatch.call(this,n),n.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||R,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),!e.which&&a!==t&&(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[K.expando])return e;var t,n,r=e,i=K.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=K.Event(r),t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||R),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){K.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?K.event.trigger(i,null,t):K.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},K.event.handle=K.event.dispatch,K.removeEvent=R.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&("undefined"==typeof e[r]&&(e[r]=null),e.detachEvent(r,n))},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?a:o):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),this[K.expando]=!0,void 0):new K.Event(e,t)},K.Event.prototype={preventDefault:function(){this.isDefaultPrevented=a;var e=this.originalEvent;e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=a;var e=this.originalEvent;e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=a,this.stopPropagation()},isDefaultPrevented:o,isPropagationStopped:o,isImmediatePropagationStopped:o},K.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){{var n,r=this,i=e.relatedTarget,o=e.handleObj;o.selector}return(!i||i!==r&&!K.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),K.support.submitBubbles||(K.event.special.submit={setup:function(){return K.nodeName(this,"form")?!1:void K.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=K.nodeName(n,"input")||K.nodeName(n,"button")?n.form:t;r&&!K._data(r,"_submit_attached")&&(K.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),K._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&K.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return K.nodeName(this,"form")?!1:void K.event.remove(this,"._submit")}}),K.support.changeBubbles||(K.event.special.change={setup:function(){return Nt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(K.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),K.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),K.event.simulate("change",this,e,!0)})),!1):void K.event.add(this,"beforeactivate._change",function(e){var t=e.target;Nt.test(t.nodeName)&&!K._data(t,"_change_attached")&&(K.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&K.event.simulate("change",this.parentNode,e,!0)}),K._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return K.event.remove(this,"._change"),!Nt.test(this.nodeName)}}),K.support.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)};K.event.special[t]={setup:function(){0===n++&&R.addEventListener(e,r,!0)},teardown:function(){0===--n&&R.removeEventListener(e,r,!0)}}}),K.fn.extend({on:function(e,n,r,i,a){var s,u;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],a);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=o;else if(!i)return this;return 1===a&&(s=i,i=function(e){return K().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=K.guid++)),this.each(function(){K.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,a;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,K(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(a in e)this.off(a,n,e[a]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=o),this.each(function(){K.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return K(this.context).on(e,this.selector,t,n),this},die:function(e,t){return K(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){K.event.trigger(e,t,this)})},triggerHandler:function(e,t){return this[0]?K.event.trigger(e,t,this[0],!0):void 0},toggle:function(e){var t=arguments,n=e.guid||K.guid++,r=0,i=function(n){var i=(K._data(this,"lastToggle"+e.guid)||0)%r;return K._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};for(i.guid=n;r<t.length;)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){K.fn[t]=function(e,n){return null==n&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},At.test(t)&&(K.event.fixHooks[t]=K.event.keyHooks),Ot.test(t)&&(K.event.fixHooks[t]=K.event.mouseHooks)}),function(e,t){function n(e,t,n,r){n=n||[],t=t||O;var i,o,a,s,u=t.nodeType;if(!e||"string"!=typeof e)return n;if(1!==u&&9!==u)return[];if(a=w(t),!a&&!r&&(i=nt.exec(e)))if(s=i[1]){if(9===u){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&T(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return H.apply(n,$.call(t.getElementsByTagName(e),0)),n;if((s=i[3])&&ft&&t.getElementsByClassName)return H.apply(n,$.call(t.getElementsByClassName(s),0)),n}return g(e.replace(Y,"$1"),t,n,r,a)}function r(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function i(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function o(e){return P(function(t){return t=+t,P(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function a(e,t,n){if(e===t)return n;for(var r=e.nextSibling;r;){if(r===t)return-1;r=r.nextSibling}return 1}function s(e,t){var r,i,o,a,s,u,l,c=I[C][e];if(c)return t?0:c.slice(0);for(s=e,u=[],l=b.preFilter;s;){(!r||(i=Z.exec(s)))&&(i&&(s=s.slice(i[0].length)),u.push(o=[])),r=!1,(i=et.exec(s))&&(o.push(r=new A(i.shift())),s=s.slice(r.length),r.type=i[0].replace(Y," "));for(a in b.filter)(i=st[a].exec(s))&&(!l[a]||(i=l[a](i,O,!0)))&&(o.push(r=new A(i.shift())),s=s.slice(r.length),r.type=a,r.matches=i);if(!r)break}return t?s.length:s?n.error(e):I(e,u).slice(0)}function u(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=_++;return t.first?function(t,n,o){for(;t=t[r];)if(i||1===t.nodeType)return e(t,n,o)}:function(t,n,a){if(a){for(;t=t[r];)if((i||1===t.nodeType)&&e(t,n,a))return t}else for(var s,u=L+" "+o+" ",l=u+y;t=t[r];)if(i||1===t.nodeType){if((s=t[C])===l)return t.sizset;if("string"==typeof s&&0===s.indexOf(u)){if(t.sizset)return t}else{if(t[C]=l,e(t,n,a))return t.sizset=!0,t;t.sizset=!1}}}}function l(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function c(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function p(e,t,n,r,i,o){return r&&!r[C]&&(r=p(r)),i&&!i[C]&&(i=p(i,o)),P(function(o,a,s,u){if(!o||!i){var l,p,f,d=[],g=[],m=a.length,y=o||h(t||"*",s.nodeType?[s]:s,[],o),v=!e||!o&&t?y:c(y,d,e,s,u),b=n?i||(o?e:m||r)?[]:a:v;if(n&&n(v,b,s,u),r)for(f=c(b,g),r(f,[],s,u),l=f.length;l--;)(p=f[l])&&(b[g[l]]=!(v[g[l]]=p));if(o)for(l=e&&b.length;l--;)(p=b[l])&&(o[d[l]]=!(a[d[l]]=p));else b=c(b===a?b.splice(m,b.length):b),i?i(null,a,b,u):H.apply(a,b)}})}function f(e){for(var t,n,r,i=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,c=u(function(e){return e===t},a,!0),d=u(function(e){return q.call(t,e)>-1},a,!0),h=[function(e,n,r){return!o&&(r||n!==E)||((t=n).nodeType?c(e,n,r):d(e,n,r))}];i>s;s++)if(n=b.relative[e[s].type])h=[u(l(h),n)];else{if(n=b.filter[e[s].type].apply(null,e[s].matches),n[C]){for(r=++s;i>r&&!b.relative[e[r].type];r++);return p(s>1&&l(h),s>1&&e.slice(0,s-1).join("").replace(Y,"$1"),n,r>s&&f(e.slice(s,r)),i>r&&f(e=e.slice(r)),i>r&&e.join(""))}h.push(n)}return l(h)}function d(e,t){var r=t.length>0,i=e.length>0,o=function(a,s,u,l,p){var f,d,h,g=[],m=0,v="0",x=a&&[],w=null!=p,T=E,S=a||i&&b.find.TAG("*",p&&s.parentNode||s),j=L+=null==T?1:Math.E;for(w&&(E=s!==O&&s,y=o.el);null!=(f=S[v]);v++){if(i&&f){for(d=0;h=e[d];d++)if(h(f,s,u)){l.push(f);break}w&&(L=j,y=++o.el)}r&&((f=!h&&f)&&m--,a&&x.push(f))}if(m+=v,r&&v!==m){for(d=0;h=t[d];d++)h(x,g,s,u);if(a){if(m>0)for(;v--;)!x[v]&&!g[v]&&(g[v]=M.call(l));g=c(g)}H.apply(l,g),w&&!a&&g.length>0&&m+t.length>1&&n.uniqueSort(l)}return w&&(L=j,E=T),x};return o.el=0,r?P(o):o}function h(e,t,r,i){for(var o=0,a=t.length;a>o;o++)n(e,t[o],r,i);return r}function g(e,t,n,r,i){{var o,a,u,l,c,p=s(e);p.length}if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!i&&b.relative[a[1].type]){if(t=b.find.ID(u.matches[0].replace(at,""),t,i)[0],!t)return n;e=e.slice(a.shift().length)}for(o=st.POS.test(e)?-1:a.length-1;o>=0&&(u=a[o],!b.relative[l=u.type]);o--)if((c=b.find[l])&&(r=c(u.matches[0].replace(at,""),rt.test(a[0].type)&&t.parentNode||t,i))){if(a.splice(o,1),e=r.length&&a.join(""),!e)return H.apply(n,$.call(r,0)),n;break}}return S(e,p)(r,t,i,n,rt.test(e)),n}function m(){}var y,v,b,x,w,T,S,j,k,E,N=!0,D="undefined",C=("sizcache"+Math.random()).replace(".",""),A=String,O=e.document,F=O.documentElement,L=0,_=0,M=[].pop,H=[].push,$=[].slice,q=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},P=function(e,t){return e[C]=null==t||t,e},B=function(){var e={},t=[];return P(function(n,r){return t.push(n)>b.cacheLength&&delete e[t.shift()],e[n]=r},e)},R=B(),I=B(),z=B(),W="[\\x20\\t\\r\\n\\f]",X="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",U=X.replace("w","w#"),J="([*^$|!~]?=)",V="\\["+W+"*("+X+")"+W+"*(?:"+J+W+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+U+")|)|)"+W+"*\\]",Q=":("+X+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+V+")|[^:]|\\\\.)*|.*))\\)|)",G=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)",Y=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g"),Z=new RegExp("^"+W+"*,"+W+"*"),et=new RegExp("^"+W+"*([\\x20\\t\\r\\n\\f>+~])"+W+"*"),tt=new RegExp(Q),nt=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,rt=/[\x20\t\r\n\f]*[+~]/,it=/h\d/i,ot=/input|select|textarea|button/i,at=/\\(?!\\)/g,st={ID:new RegExp("^#("+X+")"),CLASS:new RegExp("^\\.("+X+")"),NAME:new RegExp("^\\[name=['\"]?("+X+")['\"]?\\]"),TAG:new RegExp("^("+X.replace("w","w*")+")"),ATTR:new RegExp("^"+V),PSEUDO:new RegExp("^"+Q),POS:new RegExp(G,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),needsContext:new RegExp("^"+W+"*[>+~]|"+G,"i")},ut=function(e){var t=O.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},lt=ut(function(e){return e.appendChild(O.createComment("")),!e.getElementsByTagName("*").length}),ct=ut(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==D&&"#"===e.firstChild.getAttribute("href")}),pt=ut(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),ft=ut(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),dt=ut(function(e){e.id=C+0,e.innerHTML="<a name='"+C+"'></a><div name='"+C+"'></div>",F.insertBefore(e,F.firstChild);var t=O.getElementsByName&&O.getElementsByName(C).length===2+O.getElementsByName(C+0).length;return v=!O.getElementById(C),F.removeChild(e),t});try{$.call(F.childNodes,0)[0].nodeType}catch(ht){$=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){return n(t,null,null,[e]).length>0},x=n.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=x(t);return n},w=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},T=n.contains=F.contains?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&1===r.nodeType&&n.contains&&n.contains(r))}:F.compareDocumentPosition?function(e,t){return t&&!!(16&e.compareDocumentPosition(t))}:function(e,t){for(;t=t.parentNode;)if(t===e)return!0;return!1},n.attr=function(e,t){var n,r=w(e);return r||(t=t.toLowerCase()),(n=b.attrHandle[t])?n(e):r||pt?e.getAttribute(t):(n=e.getAttributeNode(t),n?"boolean"==typeof e[t]?e[t]?t:null:n.specified?n.value:null:null)},b=n.selectors={cacheLength:50,createPseudo:P,match:st,attrHandle:ct?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:v?function(e,t,n){if(typeof t.getElementById!==D&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==D&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==D&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:lt?function(e,t){return typeof t.getElementsByTagName!==D?t.getElementsByTagName(e):void 0}:function(e,t){var n=t.getElementsByTagName(e);if("*"===e){for(var r,i=[],o=0;r=n[o];o++)1===r.nodeType&&i.push(r);return i}return n},NAME:dt&&function(e,t){return typeof t.getElementsByName!==D?t.getElementsByName(name):void 0},CLASS:ft&&function(e,t,n){return typeof t.getElementsByClassName===D||n?void 0:t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(at,""),e[3]=(e[4]||e[5]||"").replace(at,""),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1]?(e[2]||n.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*("even"===e[2]||"odd"===e[2])),e[4]=+(e[6]+e[7]||"odd"===e[2])):e[2]&&n.error(e[0]),e},PSEUDO:function(e){var t,n;return st.CHILD.test(e[0])?null:(e[3]?e[2]=e[3]:(t=e[4])&&(tt.test(t)&&(n=s(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t),e.slice(0,3))}},filter:{ID:v?function(e){return e=e.replace(at,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace(at,""),function(t){var n=typeof t.getAttributeNode!==D&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(at,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=R[C][e];return t||(t=R(e,new RegExp("(^|"+W+")"+e+"("+W+"|$)"))),function(e){return t.test(e.className||typeof e.getAttribute!==D&&e.getAttribute("class")||"")}},ATTR:function(e,t,r){return function(i){var o=n.attr(i,e);return null==o?"!="===t:t?(o+="","="===t?o===r:"!="===t?o!==r:"^="===t?r&&0===o.indexOf(r):"*="===t?r&&o.indexOf(r)>-1:"$="===t?r&&o.substr(o.length-r.length)===r:"~="===t?(" "+o+" ").indexOf(r)>-1:"|="===t?o===r||o.substr(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r){return"nth"===e?function(e){var t,i,o=e.parentNode;if(1===n&&0===r)return!0;if(o)for(i=0,t=o.firstChild;t&&(1!==t.nodeType||(i++,e!==t));t=t.nextSibling);return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":for(;n=n.previousSibling;)if(1===n.nodeType)return!1;if("first"===e)return!0;n=t;case"last":for(;n=n.nextSibling;)if(1===n.nodeType)return!1;return!0}}},PSEUDO:function(e,t){var r,i=b.pseudos[e]||b.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return i[C]?i(t):i.length>1?(r=[e,e,"",t],b.setFilters.hasOwnProperty(e.toLowerCase())?P(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)r=q.call(e,o[a]),e[r]=!(n[r]=o[a])}):function(e){return i(e,0,r)}):i}},pseudos:{not:P(function(e){var t=[],n=[],r=S(e.replace(Y,"$1"));return r[C]?P(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:P(function(e){return function(t){return n(e,t).length>0}}),contains:P(function(e){return function(t){return(t.textContent||t.innerText||x(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!b.pseudos.empty(e)},empty:function(e){var t;for(e=e.firstChild;e;){if(e.nodeName>"@"||3===(t=e.nodeType)||4===t)return!1;e=e.nextSibling}return!0},header:function(e){return it.test(e.nodeName)},text:function(e){var t,n;return"input"===e.nodeName.toLowerCase()&&"text"===(t=e.type)&&(null==(n=e.getAttribute("type"))||n.toLowerCase()===t)},radio:r("radio"),checkbox:r("checkbox"),file:r("file"),password:r("password"),image:r("image"),submit:i("submit"),reset:i("reset"),button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},input:function(e){return ot.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return!(e!==t.activeElement||t.hasFocus&&!t.hasFocus()||!e.type&&!e.href)},active:function(e){return e===e.ownerDocument.activeElement},first:o(function(){return[0]}),last:o(function(e,t){return[t-1]}),eq:o(function(e,t,n){return[0>n?n+t:n]}),even:o(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:o(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:o(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:o(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},j=F.compareDocumentPosition?function(e,t){return e===t?(k=!0,0):(e.compareDocumentPosition&&t.compareDocumentPosition?4&e.compareDocumentPosition(t):e.compareDocumentPosition)?-1:1}:function(e,t){if(e===t)return k=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],o=[],s=e.parentNode,u=t.parentNode,l=s;if(s===u)return a(e,t);if(!s)return-1;if(!u)return 1;for(;l;)i.unshift(l),l=l.parentNode;for(l=u;l;)o.unshift(l),l=l.parentNode;n=i.length,r=o.length;for(var c=0;n>c&&r>c;c++)if(i[c]!==o[c])return a(i[c],o[c]);return c===n?a(e,o[c],-1):a(i[c],t,1)},[0,0].sort(j),N=!k,n.uniqueSort=function(e){var t,n=1;if(k=N,e.sort(j),k)for(;t=e[n];n++)t===e[n-1]&&e.splice(n--,1);return e},n.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},S=n.compile=function(e,t){var n,r=[],i=[],o=z[C][e];if(!o){for(t||(t=s(e)),n=t.length;n--;)o=f(t[n]),o[C]?r.push(o):i.push(o);o=z(e,d(i,r))}return o},O.querySelectorAll&&function(){var e,t=g,r=/'|\\/g,i=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,o=[":focus"],a=[":active",":focus"],u=F.matchesSelector||F.mozMatchesSelector||F.webkitMatchesSelector||F.oMatchesSelector||F.msMatchesSelector;ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||o.push("\\["+W+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||o.push(":checked")}),ut(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&o.push("[*^$]="+W+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||o.push(":enabled",":disabled")}),o=new RegExp(o.join("|")),g=function(e,n,i,a,u){if(!(a||u||o&&o.test(e))){var l,c,p=!0,f=C,d=n,h=9===n.nodeType&&e;if(1===n.nodeType&&"object"!==n.nodeName.toLowerCase()){for(l=s(e),(p=n.getAttribute("id"))?f=p.replace(r,"\\$&"):n.setAttribute("id",f),f="[id='"+f+"'] ",c=l.length;c--;)l[c]=f+l[c].join("");d=rt.test(e)&&n.parentNode||n,h=l.join(",")}if(h)try{return H.apply(i,$.call(d.querySelectorAll(h),0)),i}catch(g){}finally{p||n.removeAttribute("id")}}return t(e,n,i,a,u)},u&&(ut(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),a.push("!=",Q)}catch(n){}}),a=new RegExp(a.join("|")),n.matchesSelector=function(t,r){if(r=r.replace(i,"='$1']"),!(w(t)||a.test(r)||o&&o.test(r)))try{var s=u.call(t,r);if(s||e||t.document&&11!==t.document.nodeType)return s}catch(l){}return n(r,null,null,[t]).length>0})}(),b.pseudos.nth=b.pseudos.eq,b.filters=m.prototype=b.pseudos,b.setFilters=new m,n.attr=K.attr,K.find=n,K.expr=n.selectors,K.expr[":"]=K.expr.pseudos,K.unique=n.uniqueSort,K.text=n.getText,K.isXMLDoc=n.isXML,K.contains=n.contains}(e);var _t=/Until$/,Mt=/^(?:parents|prev(?:Until|All))/,Ht=/^.[^:#\[\.,]*$/,$t=K.expr.match.needsContext,qt={children:!0,contents:!0,next:!0,prev:!0};K.fn.extend({find:function(e){var t,n,r,i,o,a,s=this;if("string"!=typeof e)return K(e).filter(function(){for(t=0,n=s.length;n>t;t++)if(K.contains(s[t],this))return!0});for(a=this.pushStack("","find",e),t=0,n=this.length;n>t;t++)if(r=a.length,K.find(e,this[t],a),t>0)for(i=r;i<a.length;i++)for(o=0;r>o;o++)if(a[o]===a[i]){a.splice(i--,1);break}return a},has:function(e){var t,n=K(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(K.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(l(this,e,!1),"not",e)},filter:function(e){return this.pushStack(l(this,e,!0),"filter",e)},is:function(e){return!!e&&("string"==typeof e?$t.test(e)?K(e,this.context).index(this[0])>=0:K.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=$t.test(e)||"string"!=typeof e?K(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:K.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return o=o.length>1?K.unique(o):o,this.pushStack(o,"closest",e)},index:function(e){return e?"string"==typeof e?K.inArray(this[0],K(e)):K.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n="string"==typeof e?K(e,t):K.makeArray(e&&e.nodeType?[e]:e),r=K.merge(this.get(),n);return this.pushStack(s(n[0])||s(r[0])?r:K.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.fn.andSelf=K.fn.addBack,K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return K.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(n,r){var i=K.map(this,t,n);return _t.test(e)||(r=n),r&&"string"==typeof r&&(i=K.filter(r,i)),i=this.length>1&&!qt[e]?K.unique(i):i,this.length>1&&Mt.test(e)&&(i=i.reverse()),this.pushStack(i,e,J.call(arguments).join(","))}}),K.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?K.find.matchesSelector(t[0],e)?[t[0]]:[]:K.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!K(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var Pt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Bt=/ jQuery\d+="(?:null|\d+)"/g,Rt=/^\s+/,It=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,zt=/<([\w:]+)/,Wt=/<tbody/i,Xt=/<|&#?\w+;/,Ut=/<(?:script|style|link)/i,Jt=/<(?:script|object|embed|option|style)/i,Vt=new RegExp("<(?:"+Pt+")[\\s/>]","i"),Qt=/^(?:checkbox|radio)$/,Gt=/checked\s*(?:[^=]|=\s*.checked.)/i,Yt=/\/(java|ecma)script/i,Kt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Zt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},en=c(R),tn=en.appendChild(R.createElement("div"));
Zt.optgroup=Zt.option,Zt.tbody=Zt.tfoot=Zt.colgroup=Zt.caption=Zt.thead,Zt.th=Zt.td,K.support.htmlSerialize||(Zt._default=[1,"X<div>","</div>"]),K.fn.extend({text:function(e){return K.access(this,function(e){return e===t?K.text(this):this.empty().append((this[0]&&this[0].ownerDocument||R).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(K.isFunction(e))return this.each(function(t){K(this).wrapAll(e.call(this,t))});if(this[0]){var t=K(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(K.isFunction(e)?function(t){K(this).wrapInner(e.call(this,t))}:function(){var t=K(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=K.isFunction(e);return this.each(function(n){K(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!s(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=K.clean(arguments);return this.pushStack(K.merge(e,this),"before",this.selector)}},after:function(){if(!s(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=K.clean(arguments);return this.pushStack(K.merge(this,e),"after",this.selector)}},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||K.filter(e,[n]).length)&&(!t&&1===n.nodeType&&(K.cleanData(n.getElementsByTagName("*")),K.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)for(1===e.nodeType&&K.cleanData(e.getElementsByTagName("*"));e.firstChild;)e.removeChild(e.firstChild);return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return K.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Bt,""):t;if(!("string"!=typeof e||Ut.test(e)||!K.support.htmlSerialize&&Vt.test(e)||!K.support.leadingWhitespace&&Rt.test(e)||Zt[(zt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(It,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(K.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return s(this[0])?this.length?this.pushStack(K(K.isFunction(e)?e():e),"replaceWith",e):this:K.isFunction(e)?this.each(function(t){var n=K(this),r=n.html();n.replaceWith(e.call(this,t,r))}):("string"!=typeof e&&(e=K(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;K(this).remove(),t?K(t).before(e):K(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,o,a,s,u=0,l=e[0],c=[],f=this.length;if(!K.support.checkClone&&f>1&&"string"==typeof l&&Gt.test(l))return this.each(function(){K(this).domManip(e,n,r)});if(K.isFunction(l))return this.each(function(i){var o=K(this);e[0]=l.call(this,i,n?o.html():t),o.domManip(e,n,r)});if(this[0]){if(i=K.buildFragment(e,this,c),a=i.fragment,o=a.firstChild,1===a.childNodes.length&&(a=o),o)for(n=n&&K.nodeName(o,"tr"),s=i.cacheable||f-1;f>u;u++)r.call(n&&K.nodeName(this[u],"table")?p(this[u],"tbody"):this[u],u===s?a:K.clone(a,!0,!0));a=o=null,c.length&&K.each(c,function(e,t){t.src?K.ajax?K.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):K.error("no ajax"):K.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Kt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),K.buildFragment=function(e,n,r){var i,o,a,s=e[0];return n=n||R,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,1===e.length&&"string"==typeof s&&s.length<512&&n===R&&"<"===s.charAt(0)&&!Jt.test(s)&&(K.support.checkClone||!Gt.test(s))&&(K.support.html5Clone||!Vt.test(s))&&(o=!0,i=K.fragments[s],a=i!==t),i||(i=n.createDocumentFragment(),K.clean(e,n,i,r),o&&(K.fragments[s]=a&&i)),{fragment:i,cacheable:o}},K.fragments={},K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(n){var r,i=0,o=[],a=K(n),s=a.length,u=1===this.length&&this[0].parentNode;if((null==u||u&&11===u.nodeType&&1===u.childNodes.length)&&1===s)return a[t](this[0]),this;for(;s>i;i++)r=(i>0?this.clone(!0):this).get(),K(a[i])[t](r),o=o.concat(r);return this.pushStack(o,e,a.selector)}}),K.extend({clone:function(e,t,n){var r,i,o,a;if(K.support.html5Clone||K.isXMLDoc(e)||!Vt.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(tn.innerHTML=e.outerHTML,tn.removeChild(a=tn.firstChild)),!(K.support.noCloneEvent&&K.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(d(e,a),r=h(e),i=h(a),o=0;r[o];++o)i[o]&&d(r[o],i[o]);if(t&&(f(e,a),n))for(r=h(e),i=h(a),o=0;r[o];++o)f(r[o],i[o]);return r=i=null,a},clean:function(e,t,n,r){var i,o,a,s,u,l,p,f,d,h,m,y=t===R&&en,v=[];for(t&&"undefined"!=typeof t.createDocumentFragment||(t=R),i=0;null!=(a=e[i]);i++)if("number"==typeof a&&(a+=""),a){if("string"==typeof a)if(Xt.test(a)){for(y=y||c(t),p=t.createElement("div"),y.appendChild(p),a=a.replace(It,"<$1></$2>"),s=(zt.exec(a)||["",""])[1].toLowerCase(),u=Zt[s]||Zt._default,l=u[0],p.innerHTML=u[1]+a+u[2];l--;)p=p.lastChild;if(!K.support.tbody)for(f=Wt.test(a),d="table"!==s||f?"<table>"!==u[1]||f?[]:p.childNodes:p.firstChild&&p.firstChild.childNodes,o=d.length-1;o>=0;--o)K.nodeName(d[o],"tbody")&&!d[o].childNodes.length&&d[o].parentNode.removeChild(d[o]);!K.support.leadingWhitespace&&Rt.test(a)&&p.insertBefore(t.createTextNode(Rt.exec(a)[0]),p.firstChild),a=p.childNodes,p.parentNode.removeChild(p)}else a=t.createTextNode(a);a.nodeType?v.push(a):K.merge(v,a)}if(p&&(a=p=y=null),!K.support.appendChecked)for(i=0;null!=(a=v[i]);i++)K.nodeName(a,"input")?g(a):"undefined"!=typeof a.getElementsByTagName&&K.grep(a.getElementsByTagName("input"),g);if(n)for(h=function(e){return!e.type||Yt.test(e.type)?r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e):void 0},i=0;null!=(a=v[i]);i++)K.nodeName(a,"script")&&h(a)||(n.appendChild(a),"undefined"!=typeof a.getElementsByTagName&&(m=K.grep(K.merge([],a.getElementsByTagName("script")),h),v.splice.apply(v,[i+1,0].concat(m)),i+=m.length));return v},cleanData:function(e,t){for(var n,r,i,o,a=0,s=K.expando,u=K.cache,l=K.support.deleteExpando,c=K.event.special;null!=(i=e[a]);a++)if((t||K.acceptData(i))&&(r=i[s],n=r&&u[r])){if(n.events)for(o in n.events)c[o]?K.event.remove(i,o):K.removeEvent(i,o,n.handle);u[r]&&(delete u[r],l?delete i[s]:i.removeAttribute?i.removeAttribute(s):i[s]=null,K.deletedIds.push(r))}}}),function(){var e,t;K.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=K.uaMatch(z.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),K.browser=t,K.sub=function(){function e(t,n){return new e.fn.init(t,n)}K.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function n(n,r){return r&&r instanceof K&&!(r instanceof e)&&(r=e(r)),K.fn.init.call(this,n,r,t)},e.fn.init.prototype=e.fn;var t=e(R);return e}}();var nn,rn,on,an=/alpha\([^)]*\)/i,sn=/opacity=([^)]*)/,un=/^(top|right|bottom|left)$/,ln=/^(none|table(?!-c[ea]).+)/,cn=/^margin/,pn=new RegExp("^("+Z+")(.*)$","i"),fn=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),dn=new RegExp("^([-+])=("+Z+")","i"),hn={},gn={position:"absolute",visibility:"hidden",display:"block"},mn={letterSpacing:0,fontWeight:400},yn=["Top","Right","Bottom","Left"],vn=["Webkit","O","Moz","ms"],bn=K.fn.toggle;K.fn.extend({css:function(e,n){return K.access(this,function(e,n,r){return r!==t?K.style(e,n,r):K.css(e,n)},e,n,arguments.length>1)},show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(e,t){var n="boolean"==typeof e;return K.isFunction(e)&&K.isFunction(t)?bn.apply(this,arguments):this.each(function(){(n?e:y(this))?K(this).show():K(this).hide()})}}),K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=nn(e,"opacity");return""===n?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":K.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=K.camelCase(n),l=e.style;if(n=K.cssProps[u]||(K.cssProps[u]=m(l,u)),s=K.cssHooks[n]||K.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=dn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(K.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"===a&&!K.cssNumber[u]&&(r+="px"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=K.camelCase(n);return n=K.cssProps[u]||(K.cssProps[u]=m(e.style,u)),s=K.cssHooks[n]||K.cssHooks[u],s&&"get"in s&&(o=s.get(e,!0,i)),o===t&&(o=nn(e,n)),"normal"===o&&n in mn&&(o=mn[n]),r||i!==t?(a=parseFloat(o),r||K.isNumeric(a)?a||0:o):o},swap:function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=o[i];return r}}),e.getComputedStyle?nn=function(t,n){var r,i,o,a,s=e.getComputedStyle(t,null),u=t.style;return s&&(r=s[n],""===r&&!K.contains(t.ownerDocument,t)&&(r=K.style(t,n)),fn.test(r)&&cn.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=r,r=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),r}:R.documentElement.currentStyle&&(nn=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],o=e.style;return null==i&&o&&o[t]&&(i=o[t]),fn.test(i)&&!un.test(t)&&(n=o.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),o.left="fontSize"===t?"1em":i,i=o.pixelLeft+"px",o.left=n,r&&(e.runtimeStyle.left=r)),""===i?"auto":i}),K.each(["height","width"],function(e,t){K.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&ln.test(nn(e,"display"))?K.swap(e,gn,function(){return w(e,t,r)}):w(e,t,r):void 0},set:function(e,n,r){return b(e,n,r?x(e,t,r,K.support.boxSizing&&"border-box"===K.css(e,"boxSizing")):0)}}}),K.support.opacity||(K.cssHooks.opacity={get:function(e,t){return sn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=K.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,t>=1&&""===K.trim(o.replace(an,""))&&n.removeAttribute&&(n.removeAttribute("filter"),r&&!r.filter)||(n.filter=an.test(o)?o.replace(an,i):o+" "+i)}}),K(function(){K.support.reliableMarginRight||(K.cssHooks.marginRight={get:function(e,t){return K.swap(e,{display:"inline-block"},function(){return t?nn(e,"marginRight"):void 0})}}),!K.support.pixelPosition&&K.fn.position&&K.each(["top","left"],function(e,t){K.cssHooks[t]={get:function(e,n){if(n){var r=nn(e,t);return fn.test(r)?K(e).position()[t]+"px":r}}}})}),K.expr&&K.expr.filters&&(K.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!K.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||nn(e,"display"))},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)}),K.each({margin:"",padding:"",border:"Width"},function(e,t){K.cssHooks[e+t]={expand:function(n){var r,i="string"==typeof n?n.split(" "):[n],o={};for(r=0;4>r;r++)o[e+yn[r]+t]=i[r]||i[r-2]||i[0];return o}},cn.test(e)||(K.cssHooks[e+t].set=b)});var xn=/%20/g,wn=/\[\]$/,Tn=/\r?\n/g,Sn=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,jn=/^(?:select|textarea)/i;K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?K.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||jn.test(this.nodeName)||Sn.test(this.type))}).map(function(e,t){var n=K(this).val();return null==n?null:K.isArray(n)?K.map(n,function(e){return{name:t.name,value:e.replace(Tn,"\r\n")}}):{name:t.name,value:n.replace(Tn,"\r\n")}}).get()}}),K.param=function(e,n){var r,i=[],o=function(e,t){t=K.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,function(){o(this.name,this.value)});else for(r in e)S(r,e[r],n,o);return i.join("&").replace(xn,"+")};var kn,En,Nn=/#.*$/,Dn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,An=/^(?:GET|HEAD)$/,On=/^\/\//,Fn=/\?/,Ln=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,_n=/([?&])_=[^&]*/,Mn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Hn=K.fn.load,$n={},qn={},Pn=["*/"]+["*"];try{En=I.href}catch(Bn){En=R.createElement("a"),En.href="",En=En.href}kn=Mn.exec(En.toLowerCase())||[],K.fn.load=function(e,n,r){if("string"!=typeof e&&Hn)return Hn.apply(this,arguments);if(!this.length)return this;var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),K.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),K.ajax({url:e,type:o,dataType:"html",data:n,complete:function(e,t){r&&s.each(r,a||[e.responseText,t,e])}}).done(function(e){a=arguments,s.html(i?K("<div>").append(e.replace(Ln,"")).find(i):e)}),this},K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K.each(["get","post"],function(e,n){K[n]=function(e,r,i,o){return K.isFunction(r)&&(o=o||i,i=r,r=t),K.ajax({type:n,url:e,data:r,success:i,dataType:o})}}),K.extend({getScript:function(e,n){return K.get(e,t,n,"script")},getJSON:function(e,t,n){return K.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?E(e,K.ajaxSettings):(t=e,e=K.ajaxSettings),E(e,t),e},ajaxSettings:{url:En,isLocal:Cn.test(kn[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Pn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:j($n),ajaxTransport:j(qn),ajax:function(e,n){function r(e,n,r,a){var l,p,v,b,w,S=n;2!==x&&(x=2,u&&clearTimeout(u),s=t,o=a||"",T.readyState=e>0?4:0,r&&(b=N(f,T,r)),e>=200&&300>e||304===e?(f.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(K.lastModified[i]=w),w=T.getResponseHeader("Etag"),w&&(K.etag[i]=w)),304===e?(S="notmodified",l=!0):(l=D(f,b),S=l.state,p=l.data,v=l.error,l=!v)):(v=S,(!S||e)&&(S="error",0>e&&(e=0))),T.status=e,T.statusText=(n||S)+"",l?g.resolveWith(d,[p,S,T]):g.rejectWith(d,[T,S,v]),T.statusCode(y),y=t,c&&h.trigger("ajax"+(l?"Success":"Error"),[T,f,l?p:v]),m.fireWith(d,[T,S]),c&&(h.trigger("ajaxComplete",[T,f]),--K.active||K.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,p,f=K.ajaxSetup({},n),d=f.context||f,h=d!==f&&(d.nodeType||d instanceof K)?K(d):K.event,g=K.Deferred(),m=K.Callbacks("once memory"),y=f.statusCode||{},v={},b={},x=0,w="canceled",T={readyState:0,setRequestHeader:function(e,t){if(!x){var n=e.toLowerCase();e=b[n]=b[n]||e,v[e]=t}return this},getAllResponseHeaders:function(){return 2===x?o:null},getResponseHeader:function(e){var n;if(2===x){if(!a)for(a={};n=Dn.exec(o);)a[n[1].toLowerCase()]=n[2];n=a[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return x||(f.mimeType=e),this},abort:function(e){return e=e||w,s&&s.abort(e),r(0,e),this}};if(g.promise(T),T.success=T.done,T.error=T.fail,T.complete=m.add,T.statusCode=function(e){if(e){var t;if(2>x)for(t in e)y[t]=[y[t],e[t]];else t=e[T.status],T.always(t)}return this},f.url=((e||f.url)+"").replace(Nn,"").replace(On,kn[1]+"//"),f.dataTypes=K.trim(f.dataType||"*").toLowerCase().split(tt),null==f.crossDomain&&(l=Mn.exec(f.url.toLowerCase())||!1,f.crossDomain=l&&l.join(":")+(l[3]?"":"http:"===l[1]?80:443)!==kn.join(":")+(kn[3]?"":"http:"===kn[1]?80:443)),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=K.param(f.data,f.traditional)),k($n,f,n,T),2===x)return T;if(c=f.global,f.type=f.type.toUpperCase(),f.hasContent=!An.test(f.type),c&&0===K.active++&&K.event.trigger("ajaxStart"),!f.hasContent&&(f.data&&(f.url+=(Fn.test(f.url)?"&":"?")+f.data,delete f.data),i=f.url,f.cache===!1)){var S=K.now(),j=f.url.replace(_n,"$1_="+S);f.url=j+(j===f.url?(Fn.test(f.url)?"&":"?")+"_="+S:"")}(f.data&&f.hasContent&&f.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),f.ifModified&&(i=i||f.url,K.lastModified[i]&&T.setRequestHeader("If-Modified-Since",K.lastModified[i]),K.etag[i]&&T.setRequestHeader("If-None-Match",K.etag[i])),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Pn+"; q=0.01":""):f.accepts["*"]);for(p in f.headers)T.setRequestHeader(p,f.headers[p]);if(!f.beforeSend||f.beforeSend.call(d,T,f)!==!1&&2!==x){w="abort";for(p in{success:1,error:1,complete:1})T[p](f[p]);if(s=k(qn,f,n,T)){T.readyState=1,c&&h.trigger("ajaxSend",[T,f]),f.async&&f.timeout>0&&(u=setTimeout(function(){T.abort("timeout")},f.timeout));try{x=1,s.send(v,r)}catch(E){if(!(2>x))throw E;r(-1,E)}}else r(-1,"No Transport");return T}return T.abort()},active:0,lastModified:{},etag:{}});var Rn=[],In=/\?/,zn=/(=)\?(?=&|$)|\?\?/,Wn=K.now();K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rn.pop()||K.expando+"_"+Wn++;return this[e]=!0,e}}),K.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.data,l=n.url,c=n.jsonp!==!1,p=c&&zn.test(l),f=c&&!p&&"string"==typeof u&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&zn.test(u);return"jsonp"===n.dataTypes[0]||p||f?(o=n.jsonpCallback=K.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,a=e[o],p?n.url=l.replace(zn,"$1"+o):f?n.data=u.replace(zn,"$1"+o):c&&(n.url+=(In.test(l)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||K.error(o+" was not called"),s[0]},n.dataTypes[0]="json",e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Rn.push(o)),s&&K.isFunction(a)&&a(s[0]),s=a=t}),"script"):void 0}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return K.globalEval(e),e}}}),K.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),K.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=R.head||R.getElementsByTagName("head")[0]||R.documentElement;return{send:function(i,o){n=R.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){(i||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Xn,Un=e.ActiveXObject?function(){for(var e in Xn)Xn[e](0,1)}:!1,Jn=0;K.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&C()||A()}:C,function(e){K.extend(K.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(K.ajaxSettings.xhr()),K.support.ajax&&K.ajaxTransport(function(n){if(!n.crossDomain||K.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p,f;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=K.noop,Un&&delete Xn[a]),i)4!==u.readyState&&u.abort();else{s=u.status,c=u.getAllResponseHeaders(),p={},f=u.responseXML,f&&f.documentElement&&(p.xml=f);try{p.text=u.responseText}catch(e){}try{l=u.statusText}catch(d){l=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(h){i||o(-1,h)}p&&o(s,l,p,c)},n.async?4===u.readyState?setTimeout(r,0):(a=++Jn,Un&&(Xn||(Xn={},K(e).unload(Un)),Xn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var Vn,Qn,Gn=/^(?:toggle|show|hide)$/,Yn=new RegExp("^(?:([-+])=|)("+Z+")([a-z%]*)$","i"),Kn=/queueHooks$/,Zn=[M],er={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(K.cssNumber[e]?"":"px"),"px"!==r&&s){s=K.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,K.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};K.Animation=K.extend(L,{tweener:function(e,t){K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],er[n]=er[n]||[],er[n].unshift(t)},prefilter:function(e,t){t?Zn.unshift(e):Zn.push(e)}}),K.Tween=H,H.prototype={constructor:H,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(K.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.pos=t=this.options.duration?K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,!1,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},K.each(["toggle","show","hide"],function(e,t){var n=K.fn[t];K.fn[t]=function(r,i,o){return null==r||"boolean"==typeof r||!e&&K.isFunction(r)&&K.isFunction(i)?n.apply(this,arguments):this.animate($(t,!0),r,i,o)}}),K.fn.extend({fadeTo:function(e,t,n,r){return this.filter(y).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=K.isEmptyObject(e),o=K.speed(t,n,r),a=function(){var t=L(this,K.extend({},e),o);i&&t.stop(!0)};return i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=K.timers,a=K._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Kn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem===this&&(null==e||o[n].queue===e)&&(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&K.dequeue(this,e)})}}),K.each({slideDown:$("show"),slideUp:$("hide"),slideToggle:$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){K.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),K.speed=function(e,t,n){var r=e&&"object"==typeof e?K.extend({},e):{complete:n||!n&&t||K.isFunction(e)&&e,duration:e,easing:n&&t||t&&!K.isFunction(t)&&t};return r.duration=K.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in K.fx.speeds?K.fx.speeds[r.duration]:K.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){K.isFunction(r.old)&&r.old.call(this),r.queue&&K.dequeue(this,r.queue)},r},K.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},K.timers=[],K.fx=H.prototype.init,K.fx.tick=function(){for(var e,t=K.timers,n=0;n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||K.fx.stop()},K.fx.timer=function(e){e()&&K.timers.push(e)&&!Qn&&(Qn=setInterval(K.fx.tick,K.fx.interval))},K.fx.interval=13,K.fx.stop=function(){clearInterval(Qn),Qn=null},K.fx.speeds={slow:600,fast:200,_default:400},K.fx.step={},K.expr&&K.expr.filters&&(K.expr.filters.animated=function(e){return K.grep(K.timers,function(t){return e===t.elem}).length});var tr=/^(?:body|html)$/i;K.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){K.offset.setOffset(this,e,t)});var n,r,i,o,a,s,u,l={top:0,left:0},c=this[0],p=c&&c.ownerDocument;if(p)return(r=p.body)===c?K.offset.bodyOffset(c):(n=p.documentElement,K.contains(n,c)?("undefined"!=typeof c.getBoundingClientRect&&(l=c.getBoundingClientRect()),i=q(p),o=n.clientTop||r.clientTop||0,a=n.clientLeft||r.clientLeft||0,s=i.pageYOffset||n.scrollTop,u=i.pageXOffset||n.scrollLeft,{top:l.top+s-o,left:l.left+u-a}):l)},K.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return K.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(K.css(e,"marginTop"))||0,n+=parseFloat(K.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=K.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=K(e),s=a.offset(),u=K.css(e,"top"),l=K.css(e,"left"),c=("absolute"===r||"fixed"===r)&&K.inArray("auto",[u,l])>-1,p={},f={};c?(f=a.position(),i=f.top,o=f.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),K.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+i),null!=t.left&&(p.left=t.left-s.left+o),"using"in t?t.using.call(e,p):a.css(p)}},K.fn.extend({position:function(){if(this[0]){var e=this[0],t=this.offsetParent(),n=this.offset(),r=tr.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(K.css(e,"marginTop"))||0,n.left-=parseFloat(K.css(e,"marginLeft"))||0,r.top+=parseFloat(K.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(K.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||R.body;e&&!tr.test(e.nodeName)&&"static"===K.css(e,"position");)e=e.offsetParent;return e||R.body})}}),K.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);K.fn[e]=function(i){return K.access(this,function(e,i,o){var a=q(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:void(a?a.scrollTo(r?K(a).scrollLeft():o,r?o:K(a).scrollTop()):e[i]=o)},e,i,arguments.length,null)}}),K.each({Height:"height",Width:"width"},function(e,n){K.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){K.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return K.access(this,function(n,r,i){var o;return K.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?K.css(n,r,i,s):K.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=K,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return K})}(window),/**
 * jQuery Once Plugin v1.2
 * http://plugins.jquery.com/project/once
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
function(e){var t={},n=0;/**
   * Filters elements by whether they have not yet been processed.
   *
   * @param id
   *   (Optional) If this is a string, then it will be used as the CSS class
   *   name that is applied to the elements for determining whether it has
   *   already been processed. The elements will get a class in the form of
   *   "id-processed".
   *
   *   If the id parameter is a function, it will be passed off to the fn
   *   parameter and the id will become a unique identifier, represented as a
   *   number.
   *
   *   When the id is neither a string or a function, it becomes a unique
   *   identifier, depicted as a number. The element's class will then be
   *   represented in the form of "jquery-once-#-processed".
   *
   *   Take note that the id must be valid for usage as an element's class name.
   * @param fn
   *   (Optional) If given, this function will be called for each element that
   *   has not yet been processed. The function's return value follows the same
   *   logic as $.each(). Returning true will continue to the next matched
   *   element in the set, while returning false will entirely break the
   *   iteration.
   */
e.fn.once=function(r,i){"string"!=typeof r&&(// Generate a numeric ID if the id passed can't be used as a CSS class.
r in t||(t[r]=++n),// When the fn parameter is not passed, we interpret it from the id.
i||(i=r),r="jquery-once-"+t[r]);// Remove elements from the set that have already been processed.
var o=r+"-processed",a=this.not("."+o).addClass(o);return e.isFunction(i)?a.each(i):a},/**
   * Filters elements that have been processed once already.
   *
   * @param id
   *   A required string representing the name of the class which should be used
   *   when filtering the elements. This only filters elements that have already
   *   been processed by the once function. The id should be the same id that
   *   was originally passed to the once() function.
   * @param fn
   *   (Optional) If given, this function will be called for each element that
   *   has not yet been processed. The function's return value follows the same
   *   logic as $.each(). Returning true will continue to the next matched
   *   element in the set, while returning false will entirely break the
   *   iteration.
   */
e.fn.removeOnce=function(t,n){var r=t+"-processed",i=this.filter("."+r).removeClass(r);return e.isFunction(n)?i.each(n):i}}(jQuery),function(e){"use strict";function t(t){var n=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(n))}function n(t){var n=t.target,r=e(n);if(!r.is("[type=submit],[type=image]")){var i=r.closest("[type=submit]");if(0===i.length)return;n=i[0]}var o=this;if(o.clk=n,"image"==n.type)if(void 0!==t.offsetX)o.clk_x=t.offsetX,o.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var a=r.offset();o.clk_x=t.pageX-a.left,o.clk_y=t.pageY-a.top}else o.clk_x=t.pageX-n.offsetLeft,o.clk_y=t.pageY-n.offsetTop;setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function r(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var i={};i.fileapi=void 0!==e("<input type='file'/>").get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function n(n){var r,i,o=e.param(n,t.traditional).split("&"),a=o.length,s=[];for(r=0;a>r;r++)o[r]=o[r].replace(/\+/g," "),i=o[r].split("="),s.push([decodeURIComponent(i[0]),decodeURIComponent(i[1])]);return s}function a(r){for(var i=new FormData,o=0;r.length>o;o++)i.append(r[o].name,r[o].value);if(t.extraData){var a=n(t.extraData);for(o=0;a.length>o;o++)a[o]&&i.append(a[o][0],a[o][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var n=e.ajaxSettings.xhr();return n.upload&&n.upload.addEventListener("progress",function(e){var n=0,r=e.loaded||e.position,i=e.total;e.lengthComputable&&(n=Math.ceil(100*(r/i))),t.uploadProgress(e,r,i,n)},!1),n}),s.data=null;var l=s.beforeSend;return s.beforeSend=function(e,t){t.data=i,l&&l.call(this,e,t)},e.ajax(s)}function s(n){function i(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(n){r("cannot get iframe.contentWindow document: "+n)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(n){r("cannot get iframe.contentDocument: "+n),t=e.document}return t}function a(){function t(){try{var e=i(y).readyState;r("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(n){r("Server abort: ",n," (",n.name,")"),s(E),T&&clearTimeout(T),T=void 0}}var n=p.attr2("target"),o=p.attr2("action");S.setAttribute("target",h),(!u||/post/i.test(u))&&S.setAttribute("method","POST"),o!=f.url&&S.setAttribute("action",f.url),f.skipEncodingOverride||u&&!/post/i.test(u)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(T=setTimeout(function(){w=!0,s(k)},f.timeout));var a=[];try{if(f.extraData)for(var l in f.extraData)f.extraData.hasOwnProperty(l)&&a.push(e.isPlainObject(f.extraData[l])&&f.extraData[l].hasOwnProperty("name")&&f.extraData[l].hasOwnProperty("value")?e('<input type="hidden" name="'+f.extraData[l].name+'">').val(f.extraData[l].value).appendTo(S)[0]:e('<input type="hidden" name="'+l+'">').val(f.extraData[l]).appendTo(S)[0]);f.iframeTarget||m.appendTo("body"),y.attachEvent?y.attachEvent("onload",s):y.addEventListener("load",s,!1),setTimeout(t,15);try{S.submit()}catch(c){var d=document.createElement("form").submit;d.apply(S)}}finally{S.setAttribute("action",o),n?S.setAttribute("target",n):p.removeAttr("target"),e(a).remove()}}function s(t){if(!v.aborted&&!O){if(A=i(y),A||(r("cannot access response document"),t=E),t===k&&v)return v.abort("timeout"),void j.reject(v,"timeout");if(t==E&&v)return v.abort("server abort"),void j.reject(v,"error","server abort");if(A&&A.location.href!=f.iframeSrc||w){y.detachEvent?y.detachEvent("onload",s):y.removeEventListener("load",s,!1);var n,o="success";try{if(w)throw"timeout";var a="xml"==f.dataType||A.XMLDocument||e.isXMLDoc(A);if(r("isXml="+a),!a&&window.opera&&(null===A.body||!A.body.innerHTML)&&--F)return r("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=A.body?A.body:A.documentElement;v.responseText=u?u.innerHTML:null,v.responseXML=A.XMLDocument?A.XMLDocument:A,a&&(f.dataType="xml"),v.getResponseHeader=function(e){var t={"content-type":f.dataType};return t[e.toLowerCase()]},u&&(v.status=Number(u.getAttribute("status"))||v.status,v.statusText=u.getAttribute("statusText")||v.statusText);var l=(f.dataType||"").toLowerCase(),c=/(json|script|text)/.test(l);if(c||f.textarea){var p=A.getElementsByTagName("textarea")[0];if(p)v.responseText=p.value,v.status=Number(p.getAttribute("status"))||v.status,v.statusText=p.getAttribute("statusText")||v.statusText;else if(c){var h=A.getElementsByTagName("pre")[0],g=A.getElementsByTagName("body")[0];h?v.responseText=h.textContent?h.textContent:h.innerText:g&&(v.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"==l&&!v.responseXML&&v.responseText&&(v.responseXML=L(v.responseText));try{C=M(v,l,f)}catch(b){o="parsererror",v.error=n=b||o}}catch(b){r("error caught: ",b),o="error",v.error=n=b||o}v.aborted&&(r("upload aborted"),o=null),v.status&&(o=v.status>=200&&300>v.status||304===v.status?"success":"error"),"success"===o?(f.success&&f.success.call(f.context,C,"success",v),j.resolve(v.responseText,"success",v),d&&e.event.trigger("ajaxSuccess",[v,f])):o&&(void 0===n&&(n=v.statusText),f.error&&f.error.call(f.context,v,o,n),j.reject(v,"error",n),d&&e.event.trigger("ajaxError",[v,f,n])),d&&e.event.trigger("ajaxComplete",[v,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,v,o),O=!0,f.timeout&&clearTimeout(T),setTimeout(function(){f.iframeTarget?m.attr("src",f.iframeSrc):m.remove(),v.responseXML=null},100)}}}var l,c,f,d,h,m,y,v,b,x,w,T,S=p[0],j=e.Deferred();if(j.abort=function(e){v.abort(e)},n)for(c=0;g.length>c;c++)l=e(g[c]),o?l.prop("disabled",!1):l.removeAttr("disabled");if(f=e.extend(!0,{},e.ajaxSettings,t),f.context=f.context||f,h="jqFormIO"+(new Date).getTime(),f.iframeTarget?(m=e(f.iframeTarget),x=m.attr2("name"),x?h=x:m.attr2("name",h)):(m=e('<iframe name="'+h+'" src="'+f.iframeSrc+'" />'),m.css({position:"absolute",top:"-1000px",left:"-1000px"})),y=m[0],v={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var n="timeout"===t?"timeout":"aborted";r("aborting upload... "+n),this.aborted=1;try{y.contentWindow.document.execCommand&&y.contentWindow.document.execCommand("Stop")}catch(i){}m.attr("src",f.iframeSrc),v.error=n,f.error&&f.error.call(f.context,v,n,t),d&&e.event.trigger("ajaxError",[v,f,n]),f.complete&&f.complete.call(f.context,v,n)}},d=f.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[v,f]),f.beforeSend&&f.beforeSend.call(f.context,v,f)===!1)return f.global&&e.active--,j.reject(),j;if(v.aborted)return j.reject(),j;b=S.clk,b&&(x=b.name,x&&!b.disabled&&(f.extraData=f.extraData||{},f.extraData[x]=b.value,"image"==b.type&&(f.extraData[x+".x"]=S.clk_x,f.extraData[x+".y"]=S.clk_y)));var k=1,E=2,N=e("meta[name=csrf-token]").attr("content"),D=e("meta[name=csrf-param]").attr("content");D&&N&&(f.extraData=f.extraData||{},f.extraData[D]=N),f.forceSync?a():setTimeout(a,10);var C,A,O,F=50,L=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},M=function(t,n,r){var i=t.getResponseHeader("content-type")||"",o="xml"===n||!n&&i.indexOf("xml")>=0,a=o?t.responseXML:t.responseText;return o&&"parsererror"===a.documentElement.nodeName&&e.error&&e.error("parsererror"),r&&r.dataFilter&&(a=r.dataFilter(a,n)),"string"==typeof a&&("json"===n||!n&&i.indexOf("json")>=0?a=_(a):("script"===n||!n&&i.indexOf("javascript")>=0)&&e.globalEval(a)),a};return j}if(!this.length)return r("ajaxSubmit: skipping submit process - no element selected"),this;var u,l,c,p=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),l=t.url||this.attr2("action"),c="string"==typeof l?e.trim(l):"",c=c||window.location.href||"",c&&(c=(c.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:c,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var f={};if(this.trigger("form-pre-serialize",[this,t,f]),f.veto)return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return r("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var h,g=[],m=this.formToArray(t.semantic,g);if(t.data&&(t.extraData=t.data,h=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(m,this,t)===!1)return r("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[m,this,t,f]),f.veto)return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var y=e.param(m,d);h&&(y=y?y+"&"+h:h),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+y,t.data=null):t.data=y;var v=[];if(t.resetForm&&v.push(function(){p.resetForm()}),t.clearForm&&v.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var b=t.success||function(){};v.push(function(n){var r=t.replaceTarget?"replaceWith":"html";e(t.target)[r](n).each(b,arguments)})}else t.success&&v.push(t.success);if(t.success=function(e,n,r){for(var i=t.context||this,o=0,a=v.length;a>o;o++)v[o].apply(i,[e,n,r||p,p])},t.error){var x=t.error;t.error=function(e,n,r){var i=t.context||this;x.apply(i,[e,n,r,p])}}if(t.complete){var w=t.complete;t.complete=function(e,n){var r=t.context||this;w.apply(r,[e,n,p])}}var T=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),S=T.length>0,j="multipart/form-data",k=p.attr("enctype")==j||p.attr("encoding")==j,E=i.fileapi&&i.formdata;r("fileAPI :"+E);var N,D=(S||k)&&!E;t.iframe!==!1&&(t.iframe||D)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){N=s(m)}):N=s(m):N=(S||k)&&E?a(m):e.ajax(t),p.removeData("jqxhr").data("jqxhr",N);for(var C=0;g.length>C;C++)g[C]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(i){if(i=i||{},i.delegation=i.delegation&&e.isFunction(e.fn.on),!i.delegation&&0===this.length){var o={s:this.selector,c:this.context};return!e.isReady&&o.s?(r("DOM not ready, queuing ajaxForm"),e(function(){e(o.s,o.c).ajaxForm(i)}),this):(r("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return i.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,n).on("submit.form-plugin",this.selector,i,t).on("click.form-plugin",this.selector,i,n),this):this.ajaxFormUnbind().bind("submit.form-plugin",i,t).bind("click.form-plugin",i,n)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,n){var r=[];if(0===this.length)return r;var o=this[0],a=t?o.getElementsByTagName("*"):o.elements;if(!a)return r;var s,u,l,c,p,f,d;for(s=0,f=a.length;f>s;s++)if(p=a[s],l=p.name,l&&!p.disabled)if(t&&o.clk&&"image"==p.type)o.clk==p&&(r.push({name:l,value:e(p).val(),type:p.type}),r.push({name:l+".x",value:o.clk_x},{name:l+".y",value:o.clk_y}));else if(c=e.fieldValue(p,!0),c&&c.constructor==Array)for(n&&n.push(p),u=0,d=c.length;d>u;u++)r.push({name:l,value:c[u]});else if(i.fileapi&&"file"==p.type){n&&n.push(p);var h=p.files;if(h.length)for(u=0;h.length>u;u++)r.push({name:l,value:h[u],type:p.type});else r.push({name:l,value:"",type:p.type})}else null!==c&&void 0!==c&&(n&&n.push(p),r.push({name:l,value:c,type:p.type,required:p.required}));if(!t&&o.clk){var g=e(o.clk),m=g[0];l=m.name,l&&!m.disabled&&"image"==m.type&&(r.push({name:l,value:g.val()}),r.push({name:l+".x",value:o.clk_x},{name:l+".y",value:o.clk_y}))}return r},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var n=[];return this.each(function(){var r=this.name;if(r){var i=e.fieldValue(this,t);if(i&&i.constructor==Array)for(var o=0,a=i.length;a>o;o++)n.push({name:r,value:i[o]});else null!==i&&void 0!==i&&n.push({name:this.name,value:i})}}),e.param(n)},e.fn.fieldValue=function(t){for(var n=[],r=0,i=this.length;i>r;r++){var o=this[r],a=e.fieldValue(o,t);null===a||void 0===a||a.constructor==Array&&!a.length||(a.constructor==Array?e.merge(n,a):n.push(a))}return n},e.fieldValue=function(t,n){var r=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===n&&(n=!0),n&&(!r||t.disabled||"reset"==i||"button"==i||("checkbox"==i||"radio"==i)&&!t.checked||("submit"==i||"image"==i)&&t.form&&t.form.clk!=t||"select"==o&&-1==t.selectedIndex))return null;if("select"==o){var a=t.selectedIndex;if(0>a)return null;for(var s=[],u=t.options,l="select-one"==i,c=l?a+1:u.length,p=l?a:0;c>p;p++){var f=u[p];if(f.selected){var d=f.value;if(d||(d=f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value),l)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var n=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var r=this.type,i=this.tagName.toLowerCase();n.test(r)||"textarea"==i?this.value="":"checkbox"==r||"radio"==r?this.checked=!1:"select"==i?this.selectedIndex=-1:"file"==r?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(r)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var n=this.type;if("checkbox"==n||"radio"==n)this.checked=t;else if("option"==this.tagName.toLowerCase()){var r=e(this).parent("select");t&&r[0]&&"select-one"==r[0].type&&r.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1}("undefined"!=typeof jQuery?jQuery:window.Zepto);var Drupal=Drupal||{settings:{},behaviors:{},locale:{}};// Allow other JavaScript libraries to use $.
jQuery.noConflict(),function(e){/**
 * Override jQuery.fn.init to guard against XSS attacks.
 *
 * See http://bugs.jquery.com/ticket/9521
 */
var t=e.fn.init;e.fn.init=function(e,n,r){// If the string contains a "#" before a "<", treat it as invalid HTML.
if(e&&"string"==typeof e){var i=e.indexOf("#");if(i>=0){var o=e.indexOf("<");if(o>i)throw"Syntax error, unrecognized expression: "+e}}return t.call(this,e,n,r)},e.fn.init.prototype=t.prototype,/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-JavaScript UIs. Behaviors are registered in the Drupal.behaviors
 * object using the method 'attach' and optionally also 'detach' as follows:
 * @code
 *    Drupal.behaviors.behaviorName = {
 *      attach: function (context, settings) {
 *        ...
 *      },
 *      detach: function (context, settings, trigger) {
 *        ...
 *      }
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/Ajax in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use
 * @code
 *   $(selector).once('behavior-name', function () {
 *     ...
 *   });
 * @endcode
 * to ensure the behavior is attached only once to a given element. (Doing so
 * enables the reprocessing of given elements, which may be needed on occasion
 * despite the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 * @param settings
 *   An object containing settings for the current context. If none given, the
 *   global Drupal.settings object is used.
 */
Drupal.attachBehaviors=function(t,n){t=t||document,n=n||Drupal.settings,// Execute all of them.
e.each(Drupal.behaviors,function(){e.isFunction(this.attach)&&this.attach(t,n)})},/**
 * Detach registered behaviors from a page element.
 *
 * Developers implementing AHAH/Ajax in their solutions should call this
 * function before page content is about to be removed, feeding in an element
 * to be processed, in order to allow special behaviors to detach from the
 * content.
 *
 * Such implementations should look for the class name that was added in their
 * corresponding Drupal.behaviors.behaviorName.attach implementation, i.e.
 * behaviorName-processed, to ensure the behavior is detached only from
 * previously processed elements.
 *
 * @param context
 *   An element to detach behaviors from. If none is given, the document element
 *   is used.
 * @param settings
 *   An object containing settings for the current context. If none given, the
 *   global Drupal.settings object is used.
 * @param trigger
 *   A string containing what's causing the behaviors to be detached. The
 *   possible triggers are:
 *   - unload: (default) The context element is being removed from the DOM.
 *   - move: The element is about to be moved within the DOM (for example,
 *     during a tabledrag row swap). After the move is completed,
 *     Drupal.attachBehaviors() is called, so that the behavior can undo
 *     whatever it did in response to the move. Many behaviors won't need to
 *     do anything simply in response to the element being moved, but because
 *     IFRAME elements reload their "src" when being moved within the DOM,
 *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
 *     take some action.
 *   - serialize: When an Ajax form is submitted, this is called with the
 *     form as the context. This provides every behavior within the form an
 *     opportunity to ensure that the field elements have correct content
 *     in them before the form is serialized. The canonical use-case is so
 *     that WYSIWYG editors can update the hidden textarea to which they are
 *     bound.
 *
 * @see Drupal.attachBehaviors
 */
Drupal.detachBehaviors=function(t,n,r){t=t||document,n=n||Drupal.settings,r=r||"unload",// Execute all of them.
e.each(Drupal.behaviors,function(){e.isFunction(this.detach)&&this.detach(t,n,r)})},/**
 * Encode special characters in a plain-text string for display as HTML.
 *
 * @ingroup sanitization
 */
Drupal.checkPlain=function(e){var t,n,r={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};e=String(e);for(t in r)r.hasOwnProperty(t)&&(n=new RegExp(t,"g"),e=e.replace(n,r[t]));return e},/**
 * Replace placeholders with sanitized values in a string.
 *
 * @param str
 *   A string with placeholders.
 * @param args
 *   An object of replacements pairs to make. Incidences of any key in this
 *   array are replaced with the corresponding value. Based on the first
 *   character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *
 * @see Drupal.t()
 * @ingroup sanitization
 */
Drupal.formatString=function(e,t){// Transform arguments before inserting them.
for(var n in t){switch(n.charAt(0)){// Escaped only.
case"@":t[n]=Drupal.checkPlain(t[n]);break;// Pass-through.
case"!":break;// Escaped and placeholder.
case"%":default:t[n]=Drupal.theme("placeholder",t[n])}e=e.replace(n,t[n])}return e},/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   See Drupal.formatString().
 *
 * @param options
 *   - 'context' (defaults to the empty context): The context the source string
 *     belongs to.
 *
 * @return
 *   The translated string.
 */
Drupal.t=function(e,t,n){// Fetch the localized version of the string.
return n=n||{},n.context=n.context||"",Drupal.locale.strings&&Drupal.locale.strings[n.context]&&Drupal.locale.strings[n.context][e]&&(e=Drupal.locale.strings[n.context][e]),t&&(e=Drupal.formatString(e,t)),e},/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   See Drupal.formatString().
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @param options
 *   The options to pass to the Drupal.t() function.
 * @return
 *   A translated string.
 */
Drupal.formatPlural=function(e,t,n,r,i){var r=r||{};r["@count"]=e;// Determine the index of the plural form.
var o=Drupal.locale.pluralFormula?Drupal.locale.pluralFormula(r["@count"]):1==r["@count"]?0:1;return 0==o?Drupal.t(t,r,i):1==o?Drupal.t(n,r,i):(r["@count["+o+"]"]=r["@count"],delete r["@count"],Drupal.t(n.replace("@count","@count["+o+"]"),r,i))},/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML for text that should be emphasized and
 * displayed as a placeholder inside a sentence, call
 * Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme=function(e){var t=Array.prototype.slice.apply(arguments,[1]);return(Drupal.theme[e]||Drupal.theme.prototype[e]).apply(this,t)},/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight=function(){Drupal.unfreezeHeight(),e('<div id="freeze-height"></div>').css({position:"absolute",top:"0px",left:"0px",width:"1px",height:e("body").css("height")}).appendTo("body")},/**
 * Unfreeze the body height.
 */
Drupal.unfreezeHeight=function(){e("#freeze-height").remove()},/**
 * Encodes a Drupal path for use in a URL.
 *
 * For aesthetic reasons slashes are not escaped.
 */
Drupal.encodePath=function(e,t){return t=t||location.href,encodeURIComponent(e).replace(/%2F/g,"/")},/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection=function(e){if("number"!=typeof e.selectionStart&&document.selection){// The current selection.
var t=document.selection.createRange(),n=t.duplicate();// Select all text.
n.moveToElementText(e),// Now move 'dummy' end point to end point of original range.
n.setEndPoint("EndToEnd",t);// Now we can calculate start and end points.
var r=n.text.length-t.text.length,i=r+t.text.length;return{start:r,end:i}}return{start:e.selectionStart,end:e.selectionEnd}},/**
 * Build an error message from an Ajax response.
 */
Drupal.ajaxError=function(t,n){var r,i,o,a,s,u;r=t.status?"\n"+Drupal.t("An AJAX HTTP error occurred.")+"\n"+Drupal.t("HTTP Result Code: !status",{"!status":t.status}):"\n"+Drupal.t("An AJAX HTTP request terminated abnormally."),r+="\n"+Drupal.t("Debugging information follows."),o="\n"+Drupal.t("Path: !uri",{"!uri":n}),i="";// In some cases, when statusCode == 0, xmlhttp.statusText may not be defined.
// Unfortunately, testing for it with typeof, etc, doesn't seem to catch that
// and the test causes an exception. So we need to catch the exception here.
try{i="\n"+Drupal.t("StatusText: !statusText",{"!statusText":e.trim(t.statusText)})}catch(l){}a="";// Again, we don't have a way to know for sure whether accessing
// xmlhttp.responseText is going to throw an exception. So we'll catch it.
try{a="\n"+Drupal.t("ResponseText: !responseText",{"!responseText":e.trim(t.responseText)})}catch(l){}// Make the responseText more readable by stripping HTML tags and newlines.
// We don't need readyState except for status == 0.
return a=a.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,""),a=a.replace(/[\n]+\s+/g,"\n"),s=0==t.status?"\n"+Drupal.t("ReadyState: !readyState",{"!readyState":t.readyState}):"",u=r+o+i+a+s},// Class indicating that JS is enabled; used for styling purpose.
e("html").addClass("js"),// 'js enabled' cookie.
document.cookie="has_js=1; path=/",/**
 * Additions to jQuery.support.
 */
e(function(){/**
   * Boolean indicating whether or not position:fixed is supported.
   */
if(void 0===jQuery.support.positionFixed){var t=e("<div />").css("position","fixed").css("top","10px").appendTo(document.body);jQuery.support.positionFixed=10===t[0].offsetTop,t.remove()}}),//Attach all behaviors.
e(function(){Drupal.attachBehaviors(document,Drupal.settings)}),/**
 * The default themes.
 */
Drupal.theme.prototype={/**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
placeholder:function(e){return'<em class="placeholder">'+Drupal.checkPlain(e)+"</em>"}}}(jQuery),function($){/**
 * Provides Ajax page updating via jQuery $.ajax (Asynchronous JavaScript and XML).
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with #ajax['path'] and
 * #ajax['wrapper'] properties. If set, this file will automatically be included
 * to provide Ajax capabilities.
 */
Drupal.ajax=Drupal.ajax||{},/**
 * Attaches the Ajax behavior to each Ajax form element.
 */
Drupal.behaviors.AJAX={attach:function(e,t){// Load all Ajax behaviors specified in the settings.
for(var n in t.ajax)if(!$("#"+n+".ajax-processed").length){var r=t.ajax[n];"undefined"==typeof r.selector&&(r.selector="#"+n),$(r.selector).each(function(){r.element=this,Drupal.ajax[n]=new Drupal.ajax(n,this,r)}),$("#"+n).addClass("ajax-processed")}// Bind Ajax behaviors to all items showing the class.
$(".use-ajax:not(.ajax-processed)").addClass("ajax-processed").each(function(){var e={};// Clicked links look better with the throbber than the progress bar.
e.progress={type:"throbber"},// For anchor tags, these will go to the target of the anchor rather
// than the usual location.
$(this).attr("href")&&(e.url=$(this).attr("href"),e.event="click");var t=$(this).attr("id");Drupal.ajax[t]=new Drupal.ajax(t,this,e)}),// This class means to submit the form to the action using Ajax.
$(".use-ajax-submit:not(.ajax-processed)").addClass("ajax-processed").each(function(){var e={};// Ajax submits specified in this manner automatically submit to the
// normal form action.
e.url=$(this.form).attr("action"),// Form submit button clicks need to tell the form what was clicked so
// it gets passed in the POST request.
e.setClick=!0,// Form buttons use the 'click' event rather than mousedown.
e.event="click",// Clicked form buttons look better with the throbber than the progress bar.
e.progress={type:"throbber"};var t=$(this).attr("id");Drupal.ajax[t]=new Drupal.ajax(t,this,e)})}},/**
 * Ajax object.
 *
 * All Ajax objects on a page are accessible through the global Drupal.ajax
 * object and are keyed by the submit button's ID. You can access them from
 * your module's JavaScript file to override properties or functions.
 *
 * For example, if your Ajax enabled button has the ID 'edit-submit', you can
 * redefine the function that is called to insert the new content like this
 * (inside a Drupal.behaviors attach block):
 * @code
 *    Drupal.behaviors.myCustomAJAXStuff = {
 *      attach: function (context, settings) {
 *        Drupal.ajax['edit-submit'].commands.insert = function (ajax, response, status) {
 *          new_content = $(response.data);
 *          $('#my-wrapper').append(new_content);
 *          alert('New content was appended to #my-wrapper');
 *        }
 *      }
 *    };
 * @endcode
 */
Drupal.ajax=function(e,t,n){var r={url:"system/ajax",event:"mousedown",keypress:!0,selector:"#"+e,effect:"none",speed:"none",method:"replaceWith",progress:{type:"throbber",message:Drupal.t("Please wait...")},submit:{js:!0}};$.extend(this,r,n),this.element=t,this.element_settings=n,// Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
// the server detect when it needs to degrade gracefully.
// There are five scenarios to check for:
// 1. /nojs/
// 2. /nojs$ - The end of a URL string.
// 3. /nojs? - Followed by a query (with clean URLs enabled).
//      E.g.: path/nojs?destination=foobar
// 4. /nojs& - Followed by a query (without clean URLs enabled).
//      E.g.: ?q=path/nojs&destination=foobar
// 5. /nojs# - Followed by a fragment.
//      E.g.: path/nojs#myfragment
this.url=n.url.replace(/\/nojs(\/|$|\?|&|#)/g,"/ajax$1"),this.wrapper="#"+n.wrapper,// If there isn't a form, jQuery.ajax() will be used instead, allowing us to
// bind Ajax to links as well.
this.element.form&&(this.form=$(this.element.form));// Set the options for the ajaxSubmit function.
// The 'this' variable will not persist inside of the options object.
var i=this;i.options={url:i.url,data:i.submit,beforeSerialize:function(e,t){return i.beforeSerialize(e,t)},beforeSubmit:function(e,t,n){return i.ajaxing=!0,i.beforeSubmit(e,t,n)},beforeSend:function(e,t){return i.ajaxing=!0,i.beforeSend(e,t)},success:function(e,t){// Sanity check for browser support (object expected).
// When using iFrame uploads, responses must be returned as a string.
return"string"==typeof e&&(e=$.parseJSON(e)),i.success(e,t)},complete:function(e,t){return i.ajaxing=!1,"error"==t||"parsererror"==t?i.error(e,i.url):void 0},dataType:"json",type:"POST"},// Bind the ajaxSubmit function to the element event.
$(i.element).bind(n.event,function(e){return i.eventResponse(this,e)}),// If necessary, enable keyboard submission so that Ajax behaviors
// can be triggered through keyboard input as well as e.g. a mousedown
// action.
n.keypress&&$(i.element).keypress(function(e){return i.keypressResponse(this,e)}),// If necessary, prevent the browser default action of an additional event.
// For example, prevent the browser default action of a click, even if the
// AJAX behavior binds to mousedown.
n.prevent&&$(i.element).bind(n.prevent,!1)},/**
 * Handle a key press.
 *
 * The Ajax object will, if instructed, bind to a key press response. This
 * will test to see if the key press is valid to trigger this event and
 * if it is, trigger it for us and prevent other keypresses from triggering.
 * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
 * and 32. RETURN is often used to submit a form when in a textfield, and 
 * SPACE is often used to activate an element without submitting. 
 */
Drupal.ajax.prototype.keypressResponse=function(e,t){// Create a synonym for this to reduce code confusion.
var n=this;// Detect enter key and space bar and allow the standard response for them,
// except for form elements of type 'text' and 'textarea', where the 
// spacebar activation causes inappropriate activation if #ajax['keypress'] is 
// TRUE. On a text-type widget a space should always be a space.
// Detect enter key and space bar and allow the standard response for them,
// except for form elements of type 'text' and 'textarea', where the 
// spacebar activation causes inappropriate activation if #ajax['keypress'] is 
// TRUE. On a text-type widget a space should always be a space.
return 13==t.which||32==t.which&&"text"!=e.type&&"textarea"!=e.type?($(n.element_settings.element).trigger(n.element_settings.event),!1):void 0},/**
 * Handle an event that triggers an Ajax response.
 *
 * When an event that triggers an Ajax response happens, this method will
 * perform the actual Ajax call. It is bound to the event using
 * bind() in the constructor, and it uses the options specified on the
 * ajax object.
 */
Drupal.ajax.prototype.eventResponse=function(e){// Create a synonym for this to reduce code confusion.
var t=this;// Do not perform another ajax command if one is already in progress.
if(t.ajaxing)return!1;try{t.form?(// If setClick is set, we must set this to ensure that the button's
// value is passed.
t.setClick&&(// Mark the clicked button. 'form.clk' is a special variable for
// ajaxSubmit that tells the system which element got clicked to
// trigger the submit. Without it there would be no 'op' or
// equivalent.
e.form.clk=e),t.form.ajaxSubmit(t.options)):(t.beforeSerialize(t.element,t.options),$.ajax(t.options))}catch(n){// Unset the ajax.ajaxing flag here because it won't be unset during
// the complete response.
t.ajaxing=!1,alert("An error occurred while attempting to process "+t.options.url+": "+n.message)}// For radio/checkbox, allow the default event. On IE, this means letting
// it actually check the box.
// For radio/checkbox, allow the default event. On IE, this means letting
// it actually check the box.
return"undefined"==typeof e.type||"checkbox"!=e.type&&"radio"!=e.type?!1:!0},/**
 * Handler for the form serialization.
 *
 * Runs before the beforeSend() handler (see below), and unlike that one, runs
 * before field data is collected.
 */
Drupal.ajax.prototype.beforeSerialize=function(e,t){// Allow detaching behaviors to update field values before collecting them.
// This is only needed when field values are added to the POST data, so only
// when there is a form such that this.form.ajaxSubmit() is used instead of
// $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
// isn't called, but don't rely on that: explicitly check this.form.
if(this.form){var n=this.settings||Drupal.settings;Drupal.detachBehaviors(this.form,n,"serialize")}// Prevent duplicate HTML ids in the returned markup.
// @see drupal_html_id()
t.data["ajax_html_ids[]"]=[],$("[id]").each(function(){t.data["ajax_html_ids[]"].push(this.id)}),// Allow Drupal to return new JavaScript and CSS files to load without
// returning the ones already loaded.
// @see ajax_base_page_theme()
// @see drupal_get_css()
// @see drupal_get_js()
t.data["ajax_page_state[theme]"]=Drupal.settings.ajaxPageState.theme,t.data["ajax_page_state[theme_token]"]=Drupal.settings.ajaxPageState.theme_token;for(var r in Drupal.settings.ajaxPageState.css)t.data["ajax_page_state[css]["+r+"]"]=1;for(var r in Drupal.settings.ajaxPageState.js)t.data["ajax_page_state[js]["+r+"]"]=1},/**
 * Modify form values prior to form submission.
 */
Drupal.ajax.prototype.beforeSubmit=function(){},/**
 * Prepare the Ajax request before it is sent.
 */
Drupal.ajax.prototype.beforeSend=function(xmlhttprequest,options){// For forms without file inputs, the jQuery Form plugin serializes the form
// values, and then calls jQuery's $.ajax() function, which invokes this
// handler. In this circumstance, options.extraData is never used. For forms
// with file inputs, the jQuery Form plugin uses the browser's normal form
// submission mechanism, but captures the response in a hidden IFRAME. In this
// circumstance, it calls this handler first, and then appends hidden fields
// to the form to submit the values in options.extraData. There is no simple
// way to know which submission mechanism will be used, so we add to extraData
// regardless, and allow it to be ignored in the former case.
if(this.form){options.extraData=options.extraData||{},// Let the server know when the IFRAME submission mechanism is used. The
// server can use this information to wrap the JSON response in a TEXTAREA,
// as per http://jquery.malsup.com/form/#file-upload.
options.extraData.ajax_iframe_upload="1";// The triggering element is about to be disabled (see below), but if it
// contains a value (e.g., a checkbox, textfield, select, etc.), ensure that
// value is included in the submission. As per above, submissions that use
// $.ajax() are already serialized prior to the element being disabled, so
// this is only needed for IFRAME submissions.
var v=$.fieldValue(this.element);null!==v&&(options.extraData[this.element.name]=Drupal.checkPlain(v))}// Insert progressbar or throbber.
if(// Disable the element that received the change to prevent user interface
// interaction while the Ajax request is in progress. ajax.ajaxing prevents
// the element from triggering a new request, but does not prevent the user
// from changing its value.
$(this.element).addClass("progress-disabled").attr("disabled",!0),"bar"==this.progress.type){var progressBar=new Drupal.progressBar("ajax-progress-"+this.element.id,eval(this.progress.update_callback),this.progress.method,eval(this.progress.error_callback));this.progress.message&&progressBar.setProgress(-1,this.progress.message),this.progress.url&&progressBar.startMonitoring(this.progress.url,this.progress.interval||1500),this.progress.element=$(progressBar.element).addClass("ajax-progress ajax-progress-bar"),this.progress.object=progressBar,$(this.element).after(this.progress.element)}else"throbber"==this.progress.type&&(this.progress.element=$('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>'),this.progress.message&&$(".throbber",this.progress.element).after('<div class="message">'+this.progress.message+"</div>"),$(this.element).after(this.progress.element))},/**
 * Handler for the form redirection completion.
 */
Drupal.ajax.prototype.success=function(e,t){// Remove the progress element.
this.progress.element&&$(this.progress.element).remove(),this.progress.object&&this.progress.object.stopMonitoring(),$(this.element).removeClass("progress-disabled").removeAttr("disabled"),Drupal.freezeHeight();for(var n in e)e.hasOwnProperty(n)&&e[n].command&&this.commands[e[n].command]&&this.commands[e[n].command](this,e[n],t);// Reattach behaviors, if they were detached in beforeSerialize(). The
// attachBehaviors() called on the new content from processing the response
// commands is not sufficient, because behaviors from the entire form need
// to be reattached.
if(this.form){var r=this.settings||Drupal.settings;Drupal.attachBehaviors(this.form,r)}Drupal.unfreezeHeight(),// Remove any response-specific settings so they don't get used on the next
// call by mistake.
this.settings=null},/**
 * Build an effect object which tells us how to apply the effect when adding new HTML.
 */
Drupal.ajax.prototype.getEffect=function(e){var t=e.effect||this.effect,n=e.speed||this.speed,r={};return"none"==t?(r.showEffect="show",r.hideEffect="hide",r.showSpeed=""):"fade"==t?(r.showEffect="fadeIn",r.hideEffect="fadeOut",r.showSpeed=n):(r.showEffect=t+"Toggle",r.hideEffect=t+"Toggle",r.showSpeed=n),r},/**
 * Handler for the form redirection error.
 */
Drupal.ajax.prototype.error=function(e,t){// Reattach behaviors, if they were detached in beforeSerialize().
if(alert(Drupal.ajaxError(e,t)),// Remove the progress element.
this.progress.element&&$(this.progress.element).remove(),this.progress.object&&this.progress.object.stopMonitoring(),// Undo hide.
$(this.wrapper).show(),// Re-enable the element.
$(this.element).removeClass("progress-disabled").removeAttr("disabled"),this.form){var n=e.settings||this.settings||Drupal.settings;Drupal.attachBehaviors(this.form,n)}},/**
 * Provide a series of commands that the server can request the client perform.
 */
Drupal.ajax.prototype.commands={/**
   * Command to insert new content into the DOM.
   */
insert:function(e,t){// Get information from the response. If it is not there, default to
// our presets.
var n=$(t.selector?t.selector:e.wrapper),r=t.method||e.method,i=e.getEffect(t),o=$("<div></div>").html(t.data),a=o.contents();// If removing content from the wrapper, detach behaviors first.
switch(// For legacy reasons, the effects processing code assumes that new_content
// consists of a single top-level element. Also, it has not been
// sufficiently tested whether attachBehaviors() can be successfully called
// with a context object that includes top-level text nodes. However, to
// give developers full control of the HTML appearing in the page, and to
// enable Ajax content to be inserted in places where DIV elements are not
// allowed (e.g., within TABLE, TR, and SPAN parents), we check if the new
// content satisfies the requirement of a single top-level element, and
// only use the container DIV created above when it doesn't. For more
// information, please see http://drupal.org/node/736066.
(1!=a.length||1!=a.get(0).nodeType)&&(a=o),r){case"html":case"replaceWith":case"replaceAll":case"empty":case"remove":var s=t.settings||e.settings||Drupal.settings;Drupal.detachBehaviors(n,s)}// Attach all JavaScript behaviors to the new content, if it was successfully
// added to the page, this if statement allows #ajax['wrapper'] to be
// optional.
if(// Add the new content to the page.
n[r](a),// Immediately hide the new content if we're using any effects.
"show"!=i.showEffect&&a.hide(),// Determine which effect to use and what content will receive the
// effect, then show the new content.
$(".ajax-new-content",a).length>0?($(".ajax-new-content",a).hide(),a.show(),$(".ajax-new-content",a)[i.showEffect](i.showSpeed)):"show"!=i.showEffect&&a[i.showEffect](i.showSpeed),a.parents("html").length>0){// Apply any settings from the returned JSON if available.
var s=t.settings||e.settings||Drupal.settings;Drupal.attachBehaviors(a,s)}},/**
   * Command to remove a chunk from the page.
   */
remove:function(e,t){var n=t.settings||e.settings||Drupal.settings;Drupal.detachBehaviors($(t.selector),n),$(t.selector).remove()},/**
   * Command to mark a chunk changed.
   */
changed:function(e,t){$(t.selector).hasClass("ajax-changed")||($(t.selector).addClass("ajax-changed"),t.asterisk&&$(t.selector).find(t.asterisk).append(' <span class="ajax-changed">*</span> '))},/**
   * Command to provide an alert.
   */
alert:function(e,t){alert(t.text,t.title)},/**
   * Command to provide the jQuery css() function.
   */
css:function(e,t){$(t.selector).css(t.argument)},/**
   * Command to set the settings that will be used for other commands in this response.
   */
settings:function(e,t){t.merge?$.extend(!0,Drupal.settings,t.settings):e.settings=t.settings},/**
   * Command to attach data using jQuery's data API.
   */
data:function(e,t){$(t.selector).data(t.name,t.value)},/**
   * Command to apply a jQuery method.
   */
invoke:function(e,t){var n=$(t.selector);n[t.method].apply(n,t.arguments)},/**
   * Command to restripe a table.
   */
restripe:function(e,t){// :even and :odd are reversed because jQuery counts from 0 and
// we count from 1, so we're out of sync.
// Match immediate children of the parent element to allow nesting.
$("> tbody > tr:visible, > tr:visible",$(t.selector)).removeClass("odd even").filter(":even").addClass("odd").end().filter(":odd").addClass("even")},/**
   * Command to update a form's build ID.
   */
updateBuildId:function(e,t){$('input[name="form_build_id"][value="'+t.old+'"]').val(t["new"])}}}(jQuery),function(e){/**
 * Retrieves the summary for the first element.
 */
e.fn.drupalGetSummary=function(){var t=this.data("summaryCallback");return this[0]&&t?e.trim(t(this[0])):""},/**
 * Sets the summary for all matched elements.
 *
 * @param callback
 *   Either a function that will be called each time the summary is
 *   retrieved or a string (which is returned each time).
 */
e.fn.drupalSetSummary=function(e){var t=this;// To facilitate things, the callback should always be a function. If it's
// not, we wrap it into an anonymous function which just returns the value.
if("function"!=typeof e){var n=e;e=function(){return n}}return this.data("summaryCallback",e).unbind("formUpdated.summary").bind("formUpdated.summary",function(){t.trigger("summaryUpdated")}).trigger("summaryUpdated")},/**
 * Sends a 'formUpdated' event each time a form element is modified.
 */
Drupal.behaviors.formUpdated={attach:function(t){// These events are namespaced so that we can remove them later.
var n="change.formUpdated click.formUpdated blur.formUpdated keyup.formUpdated";e(t).find(":input").andSelf().filter(":input").unbind(n).bind(n,function(){e(this).trigger("formUpdated")})}},/**
 * Prepopulate form fields with information from the visitor cookie.
 */
Drupal.behaviors.fillUserInfoFromCookie={attach:function(){e("form.user-info-from-cookie").once("user-info-from-cookie",function(){var t=this;e.each(["name","mail","homepage"],function(){var n=e("[name="+this+"]",t),r=e.cookie("Drupal.visitor."+this);n.length&&r&&n.val(r)})})}}}(jQuery),/*
    json2.js
    2012-10-08

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/
/*jslint evil: true, regexp: true */
/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/
// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){// Format integers to have at least two digits.
return 10>e?"0"+e:e}function quote(e){// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.
return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){// Produce a string from holder[key].
var n,// The loop counter.
r,// The member key.
i,// The member value.
o,a,s=gap,u=t[e];// What happens next depends on the value's type.
switch(// If the value has a toJSON method, call it to obtain a replacement value.
u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.
"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":// JSON numbers must be finite. Encode non-finite numbers as null.
return isFinite(u)?String(u):"null";case"boolean":case"null":// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.
return String(u);// If the type is 'object', we might be dealing with an object or an array or
// null.
case"object":// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.
if(!u)return"null";// Is the value an array?
if(// Make an array to hold the partial results of stringifying this object value.
gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(u)){for(// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.
o=u.length,n=0;o>n;n+=1)a[n]=str(n,u)||"null";// Join all of the elements together, separated with commas, and wrap them in
// brackets.
return i=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+s+"]":"["+a.join(",")+"]",gap=s,i}// If the replacer is an array, use it to select the members to be stringified.
if(rep&&"object"==typeof rep)for(o=rep.length,n=0;o>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],i=str(r,u),i&&a.push(quote(r)+(gap?": ":":")+i));else// Otherwise, iterate through all of the keys in the object.
for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(i=str(r,u),i&&a.push(quote(r)+(gap?": ":":")+i));// Join all of the member texts together, separated with commas,
// and wrap them in braces.
return i=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+s+"}":"{"+a.join(",")+"}",gap=s,i}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={// table of character substitutions
"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;// If the JSON object does not yet have a stringify method, give it one.
"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,n){// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.
var r;// If the space parameter is a number, make an indent string containing that
// many spaces.
if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.
rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.
return str("",{"":e})}),// If the JSON object does not yet have a parse method, give it one.
"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.
var n,r,i=e[t];if(i&&"object"==typeof i)for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),void 0!==r?i[n]=r:delete i[n]);return reviver.call(e,t,i)}// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.
var j;// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.
// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
if(// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.
text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.
// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.
return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;// If the text is not JSON parseable, then a SyntaxError is thrown.
throw new SyntaxError("JSON.parse")})}(),/*
 * jQuery postMessage - v0.5 - 9/11/2009
 * http://benalman.com/projects/jquery-postmessage-plugin/
 *
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
function(e){var t,n,r,i,o=1,a=this,s=!1,u="postMessage",l="addEventListener",c=a[u]&&!e.browser.opera;e[u]=function(t,n,r){n&&(t="string"==typeof t?t:e.param(t),r=r||parent,c?r[u](t,n.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):n&&(r.location=n.replace(/#.*$/,"")+"#"+ +new Date+o++ +"&"+t))},e.receiveMessage=i=function(o,u,p){c?(o&&(r&&i(),r=function(t){return"string"==typeof u&&t.origin!==u||e.isFunction(u)&&u(t.origin)===s?s:void o(t)}),a[l]?a[o?l:"removeEventListener"]("message",r,s):a[o?"attachEvent":"detachEvent"]("onmessage",r)):(t&&clearInterval(t),t=null,o&&(p="number"==typeof u?u:"number"==typeof p?p:100,t=setInterval(function(){var e=document.location.hash,t=/^#?\d+&/;e!==n&&t.test(e)&&(n=e,o({data:e.replace(t,"")}))},p)))}}(jQuery),/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(e){"function"==typeof define&&define.amd?// AMD. Register as anonymous module.
define(["jquery"],e):// Browser globals.
e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function r(e){return t(s.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(// This is a quoted cookie as according to RFC2068, unescape...
e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{// Replace server-side written pluses with spaces.
// If we can't decode the cookie, ignore it, it's unusable.
e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{// If we can't parse the cookie, ignore it, it's unusable.
return s.json?JSON.parse(e):e}catch(t){}}function o(t,n){var r=s.raw?t:i(t);return e.isFunction(n)?n(r):r}var a=/\+/g,s=e.cookie=function(i,a,u){// Write
if(void 0!==a&&!e.isFunction(a)){if(u=e.extend({},s.defaults,u),"number"==typeof u.expires){var l=u.expires,c=u.expires=new Date;c.setDate(c.getDate()+l)}return document.cookie=[t(i),"=",r(a),u.expires?"; expires="+u.expires.toUTCString():"",// use expires attribute, max-age is not supported by IE
u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var p=i?void 0:{},f=document.cookie?document.cookie.split("; "):[],d=0,h=f.length;h>d;d++){var g=f[d].split("="),m=n(g.shift()),y=g.join("=");if(i&&i===m){// If second argument (value) is a function it's a converter...
p=o(y,a);break}// Prevent storing a cookie that we couldn't decode.
i||void 0===(y=o(y))||(p[m]=y)}return p};s.defaults={},e.removeCookie=function(t,n){// Must not alter options, thus extending a fresh object...
return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}}),// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/returnExports.js
function(e,t){"function"==typeof define&&define.amd?// AMD. Register as an anonymous module.
define(t):"object"==typeof exports?// Node. Does not work with strict CommonJS, but
// only CommonJS-like enviroments that support module.exports,
// like Node.
module.exports=t():// Browser globals (root is window)
e.returnExports=t()}(this,function(){/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */
//
// Function
// ========
//
// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5
function e(){}//
// Util
// ======
//
// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer
function t(e){// isNaN
return e=+e,e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}function n(e){var t=typeof e;return null===e||"undefined"===t||"boolean"===t||"number"===t||"string"===t}function r(e){var t,r,i;if(n(e))return e;if(r=e.valueOf,"function"==typeof r&&(t=r.call(e),n(t)))return t;if(i=e.toString,"function"==typeof i&&(t=i.call(e),n(t)))return t;throw new TypeError}Function.prototype.bind||(Function.prototype.bind=function(t){// .length is 1
// 1. Let Target be the this value.
var n=this;// 2. If IsCallable(Target) is false, throw a TypeError exception.
if("function"!=typeof n)throw new TypeError("Function.prototype.bind called on incompatible "+n);for(var r=f.call(arguments,1),i=function(){if(this instanceof u){// 15.3.4.5.2 [[Construct]]
// When the [[Construct]] internal method of a function object,
// F that was created using the bind function is called with a
// list of arguments ExtraArgs, the following steps are taken:
// 1. Let target be the value of F's [[TargetFunction]]
//   internal property.
// 2. If target has no [[Construct]] internal method, a
//   TypeError exception is thrown.
// 3. Let boundArgs be the value of F's [[BoundArgs]] internal
//   property.
// 4. Let args be a new list containing the same values as the
//   list boundArgs in the same order followed by the same
//   values as the list ExtraArgs in the same order.
// 5. Return the result of calling the [[Construct]] internal
//   method of target providing args as the arguments.
var e=n.apply(this,r.concat(f.call(arguments)));return Object(e)===e?e:this}// 15.3.4.5.1 [[Call]]
// When the [[Call]] internal method of a function object, F,
// which was created using the bind function is called with a
// this value and a list of arguments ExtraArgs, the following
// steps are taken:
// 1. Let boundArgs be the value of F's [[BoundArgs]] internal
//   property.
// 2. Let boundThis be the value of F's [[BoundThis]] internal
//   property.
// 3. Let target be the value of F's [[TargetFunction]] internal
//   property.
// 4. Let args be a new list containing the same values as the
//   list boundArgs in the same order followed by the same
//   values as the list ExtraArgs in the same order.
// 5. Return the result of calling the [[Call]] internal method
//   of target providing boundThis as the this value and
//   providing args as the arguments.
// equiv: target.call(this, ...boundArgs, ...args)
return n.apply(t,r.concat(f.call(arguments)))},o=Math.max(0,n.length-r.length),a=[],s=0;o>s;s++)a.push("$"+s);// XXX Build a dynamic function with desired amount of arguments is the only
// way to set the length property of a function.
// In environments where Content Security Policies enabled (Chrome extensions,
// for ex.) all use of eval or Function costructor throws an exception.
// However in all of these environments Function.prototype.bind exists
// and so this code will never be executed.
var u=Function("binder","return function("+a.join(",")+"){return binder.apply(this,arguments)}")(i);// TODO
// 18. Set the [[Extensible]] internal property of F to true.
// TODO
// 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
// 20. Call the [[DefineOwnProperty]] internal method of F with
//   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
//   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
//   false.
// 21. Call the [[DefineOwnProperty]] internal method of F with
//   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
//   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
//   and false.
// TODO
// NOTE Function objects created using Function.prototype.bind do not
// have a prototype property or the [[Code]], [[FormalParameters]], and
// [[Scope]] internal properties.
// XXX can't delete prototype in pure-js.
// 22. Return F.
// Clean up dangling references.
return n.prototype&&(e.prototype=n.prototype,u.prototype=new e,e.prototype=null),u});// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally.
// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// us it in defining shortcuts.
var i,o,a,s,u,l=Function.prototype.call,c=Array.prototype,p=Object.prototype,f=c.slice,d=l.bind(p.toString),h=l.bind(p.hasOwnProperty);//
// Array
// =====
//
// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
// Default value for second param
// [bugfix, ielt9, old browsers]
// IE < 9 bug: [1,2].splice(0).join("") == "" but should be "12"
if((u=h(p,"__defineGetter__"))&&(i=l.bind(p.__defineGetter__),o=l.bind(p.__defineSetter__),a=l.bind(p.__lookupGetter__),s=l.bind(p.__lookupSetter__)),2!=[1,2].splice(0).length){var g=Array.prototype.splice,m=Array.prototype.push,y=Array.prototype.unshift;//IE 6/7
Array.prototype.splice=function(){// test IE < 9 to splice bug - see issue #138
function e(e){for(var t=[];e--;)t.unshift(e);return t}var t,n=[];// add one element
//20
// add one element
return n.splice.bind(n,0,0).apply(null,e(20)),n.splice.bind(n,0,0).apply(null,e(26)),t=n.length,n.splice(5,0,"XXX"),t+1==n.length?!0:void 0}()?function(e,t){return arguments.length?g.apply(this,[void 0===e?0:e,void 0===t?this.length-e:t].concat(f.call(arguments,2))):[]}:function(e,t){var n,r=f.call(arguments,2),i=r.length;if(!arguments.length)return[];if(void 0===e&&(// default
e=0),void 0===t&&(// default
t=this.length-e),i>0){if(0>=t){if(e==this.length)// tiny optimisation #1
return m.apply(this,r),[];if(0==e)// tiny optimisation #2
return y.apply(this,r),[]}// Array.prototype.splice implementation
// delete part
// right part
// left part
// delete all items from this array and replace it to 'left part' + _Array_slice_.call(arguments, 2) + 'right part'
return n=f.call(this,e,e+t),r.push.apply(r,f.call(this,e+t,this.length)),r.unshift.apply(r,f.call(this,0,e)),r.unshift(0,this.length),g.apply(this,r),n}return g.call(this,e,t)}}// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) == undefined but should be "1"
if(1!=[].unshift(0)){var y=Array.prototype.unshift;Array.prototype.unshift=function(){return y.apply(this,arguments),this.length}}// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
Array.isArray||(Array.isArray=function(e){return"[object Array]"==d(e)});// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.
// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach
// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var v=Object("a"),b="a"!=v[0]||!(0 in v),x=function(e){// Check node 0.6.21 bug where third parameter is not boxed
var t=!0;return e&&e.call("foo",function(e,n,r){"object"!=typeof r&&(t=!1)}),!!e&&t};//
// Object
// ======
//
// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14
if(Array.prototype.forEach&&x(Array.prototype.forEach)||(Array.prototype.forEach=function(e){var t=M(this),n=b&&"[object String]"==d(this)?this.split(""):t,r=arguments[1],i=-1,o=n.length>>>0;// If no callback function or if callback is not a callable function
if("[object Function]"!=d(e))throw new TypeError;for(;++i<o;)i in n&&// Invoke the callback function with call, passing arguments:
// context, property value, property key, thisArg object
// context
e.call(r,n[i],i,t)}),// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
Array.prototype.map&&x(Array.prototype.map)||(Array.prototype.map=function(e){var t=M(this),n=b&&"[object String]"==d(this)?this.split(""):t,r=n.length>>>0,i=Array(r),o=arguments[1];// If no callback function or if callback is not a callable function
if("[object Function]"!=d(e))throw new TypeError(e+" is not a function");for(var a=0;r>a;a++)a in n&&(i[a]=e.call(o,n[a],a,t));return i}),// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
Array.prototype.filter&&x(Array.prototype.filter)||(Array.prototype.filter=function(e){var t,n=M(this),r=b&&"[object String]"==d(this)?this.split(""):n,i=r.length>>>0,o=[],a=arguments[1];// If no callback function or if callback is not a callable function
if("[object Function]"!=d(e))throw new TypeError(e+" is not a function");for(var s=0;i>s;s++)s in r&&(t=r[s],e.call(a,t,s,n)&&o.push(t));return o}),// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
Array.prototype.every&&x(Array.prototype.every)||(Array.prototype.every=function(e){var t=M(this),n=b&&"[object String]"==d(this)?this.split(""):t,r=n.length>>>0,i=arguments[1];// If no callback function or if callback is not a callable function
if("[object Function]"!=d(e))throw new TypeError(e+" is not a function");for(var o=0;r>o;o++)if(o in n&&!e.call(i,n[o],o,t))return!1;return!0}),// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
Array.prototype.some&&x(Array.prototype.some)||(Array.prototype.some=function(e){var t=M(this),n=b&&"[object String]"==d(this)?this.split(""):t,r=n.length>>>0,i=arguments[1];// If no callback function or if callback is not a callable function
if("[object Function]"!=d(e))throw new TypeError(e+" is not a function");for(var o=0;r>o;o++)if(o in n&&e.call(i,n[o],o,t))return!0;return!1}),// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=M(this),n=b&&"[object String]"==d(this)?this.split(""):t,r=n.length>>>0;// If no callback function or if callback is not a callable function
if("[object Function]"!=d(e))throw new TypeError(e+" is not a function");// no value to return if no initial value and an empty array
if(!r&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,o=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in n){i=n[o++];break}// if array contains no values, no initial value to return
if(++o>=r)throw new TypeError("reduce of empty array with no initial value")}for(;r>o;o++)o in n&&(i=e.call(void 0,i,n[o],o,t));return i}),// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e){var t=M(this),n=b&&"[object String]"==d(this)?this.split(""):t,r=n.length>>>0;// If no callback function or if callback is not a callable function
if("[object Function]"!=d(e))throw new TypeError(e+" is not a function");// no value to return if no initial value, empty array
if(!r&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var i,o=r-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in n){i=n[o--];break}// if array contains no values, no initial value to return
if(--o<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>o)return i;do o in this&&(i=e.call(void 0,i,n[o],o,t));while(o--);return i}),// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(e){var n=b&&"[object String]"==d(this)?this.split(""):M(this),r=n.length>>>0;if(!r)return-1;var i=0;for(arguments.length>1&&(i=t(arguments[1])),// handle negative indices
i=i>=0?i:Math.max(0,r+i);r>i;i++)if(i in n&&n[i]===e)return i;return-1}),// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(e){var n=b&&"[object String]"==d(this)?this.split(""):M(this),r=n.length>>>0;if(!r)return-1;var i=r-1;for(arguments.length>1&&(i=Math.min(i,t(arguments[1]))),// handle negative indices
i=i>=0?i:r-Math.abs(i);i>=0;i--)if(i in n&&e===n[i])return i;return-1}),!Object.keys){// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
var w=!0,T=function(){}.propertyIsEnumerable("prototype"),S=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],j=S.length;for(var k in{toString:null})w=!1;Object.keys=function H(e){var t="[object Function]"===d(e),n=null!==e&&"object"==typeof e;if(!n&&!t)throw new TypeError("Object.keys called on a non-object");var H=[],r=T&&t;for(var i in e)r&&"prototype"===i||!h(e,i)||H.push(i);if(w)for(var o=e.constructor,a=o&&o.prototype===e,s=0;j>s;s++){var u=S[s];a&&"constructor"===u||!h(e,u)||H.push(u)}return H}}//
// Date
// ====
//
// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var E=-621987552e5,N="-000001";Date.prototype.toISOString&&-1!==new Date(E).toISOString().indexOf(N)||(Date.prototype.toISOString=function(){var e,t,n,r,i;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(r=this.getUTCFullYear(),i=this.getUTCMonth(),// see https://github.com/es-shims/es5-shim/issues/111
r+=Math.floor(i/12),i=(i%12+12)%12,// the date time string format is specified in 15.9.1.15.
e=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],r=(0>r?"-":r>9999?"+":"")+("00000"+Math.abs(r)).slice(r>=0&&9999>=r?-4:-6),t=e.length;t--;)n=e[t],// pad months, days, hours, minutes, and seconds to have two
// digits.
10>n&&(e[t]="0"+n);// pad milliseconds to have three digits.
return r+"-"+e.slice(0,2).join("-")+"T"+e.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"});// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var D=!1;try{D=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(E).toJSON().indexOf(N)&&Date.prototype.toJSON.call({// generic
toISOString:function(){return!0}})}catch(C){}D||(Date.prototype.toJSON=function(){// When the toJSON method is called with argument key, the following
// steps are taken:
// 1.  Let O be the result of calling ToObject, giving it the this
// value as its argument.
// 2. Let tv be toPrimitive(O, hint Number).
var e,t=Object(this),n=r(t);// 3. If tv is a Number and is not finite, return null.
if("number"==typeof n&&!isFinite(n))return null;// 5. If IsCallable(toISO) is false, throw a TypeError exception.
if(// 4. Let toISO be the result of calling the [[Get]] internal method of
// O with argument "toISOString".
e=t.toISOString,"function"!=typeof e)throw new TypeError("toISOString property is not callable");// 6. Return the result of calling the [[Call]] internal method of
//  toISO with O as the this value and an empty argument list.
return e.call(t)}),// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
(!Date.parse||isNaN(Date.parse("2000-01-01T00:00:00.000Z")))&&(// XXX global assignment won't work in embeddings that use
// an alternate object for the context.
Date=function(e){// Date.length === 7
function t(n,r,i,o,a,s,u){var l=arguments.length;if(this instanceof e){var c=1==l&&String(n)===n?// isString(Y)
// We explicitly pass it through parse:
new e(t.parse(n)):// We have to manually make calls depending on argument
// length here
l>=7?new e(n,r,i,o,a,s,u):l>=6?new e(n,r,i,o,a,s):l>=5?new e(n,r,i,o,a):l>=4?new e(n,r,i,o):l>=3?new e(n,r,i):l>=2?new e(n,r):l>=1?new e(n):new e;// Prevent mixups with unfixed Date object
return c.constructor=t,c}return e.apply(this,arguments)}function n(e,t){var n=t>1?1:0;return o[t]+Math.floor((e-1969+n)/4)-Math.floor((e-1901+n)/100)+Math.floor((e-1601+n)/400)+365*(e-1970)}function r(t){return Number(new e(1970,0,1,0,0,0,t))}// 15.9.1.15 Date Time String Format.
var i=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),o=[0,31,59,90,120,151,181,212,243,273,304,334,365];// Copy any custom methods a 3rd party library may have added
for(var a in e)t[a]=e[a];// Copy "native" methods explicitly; they may be non-enumerable
// Upgrade Date.parse to handle simplified ISO 8601 strings
return t.now=e.now,t.UTC=e.UTC,t.prototype=e.prototype,t.prototype.constructor=t,t.parse=function(t){var o=i.exec(t);if(o){// parse months, days, hours, minutes, seconds, and milliseconds
// provide default values if necessary
// parse the UTC offset component
var a,s=Number(o[1]),u=Number(o[2]||1)-1,l=Number(o[3]||1)-1,c=Number(o[4]||0),p=Number(o[5]||0),f=Number(o[6]||0),d=Math.floor(1e3*Number(o[7]||0)),// When time zone is missed, local offset should be used
// (ES 5.1 bug)
// see https://bugs.ecmascript.org/show_bug.cgi?id=112
h=Boolean(o[4]&&!o[8]),g="-"===o[9]?1:-1,m=Number(o[10]||0),y=Number(o[11]||0);// detect invalid offsets
return(p>0||f>0||d>0?24:25)>c&&60>p&&60>f&&1e3>d&&u>-1&&12>u&&24>m&&60>y&&l>-1&&l<n(s,u+1)-n(s,u)&&(a=60*(24*(n(s,u)+l)+c+m*g),a=1e3*(60*(a+p+y*g)+f)+d,h&&(a=r(a)),a>=-864e13&&864e13>=a)?a:0/0}return e.parse.apply(this,arguments)},t}(Date)),// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
Date.now||(Date.now=function(){return(new Date).getTime()}),//
// Number
// ======
//
// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
Number.prototype.toFixed&&"0.000"===8e-5.toFixed(3)&&"0"!==.9.toFixed(0)&&"1.25"===1.255.toFixed(2)&&"1000000000000000128"===0xde0b6b3a7640080.toFixed(0)||// Hide these variables and functions
!function(){function e(e,t){for(var n=-1;++n<a;)t+=e*s[n],s[n]=t%o,t=Math.floor(t/o)}function t(e){for(var t=a,n=0;--t>=0;)n+=s[t],s[t]=Math.floor(n/e),n=n%e*o}function n(){for(var e=a,t="";--e>=0;)if(""!==t||0===e||0!==s[e]){var n=String(s[e]);""===t?t=n:t+="0000000".slice(0,7-n.length)+n}return t}function r(e,t,n){return 0===t?n:t%2===1?r(e,t-1,n*e):r(e*e,t/2,n)}function i(e){for(var t=0;e>=4096;)t+=12,e/=4096;for(;e>=2;)t+=1,e/=2;return t}var o,a,s;o=1e7,a=6,s=[0,0,0,0,0,0],Number.prototype.toFixed=function(o){var a,s,u,l,c,p,f,d;if(// Test for NaN and round fractionDigits down
a=Number(o),a=a!==a?0:Math.floor(a),0>a||a>20)throw new RangeError("Number.toFixed called with invalid number of decimals");// Test for NaN
if(s=Number(this),s!==s)return"NaN";// If it is too big or small, return the string value of the number
if(-1e21>=s||s>=1e21)return String(s);if(u="",0>s&&(u="-",s=-s),l="0",s>1e-21)// -18 < e < 122
// x = z / 2 ^ e
if(// 1e-21 < x < 1e21
// -70 < log2(x) < 70
c=i(s*r(2,69,1))-69,p=0>c?s*r(2,-c,1):s/r(2,c,1),p*=4503599627370496,// Math.pow(2, 52);
c=52-c,c>0){for(e(0,p),f=a;f>=7;)e(1e7,0),f-=7;for(e(r(10,f,1),0),f=c-1;f>=23;)t(1<<23),f-=23;t(1<<f),e(1,1),t(2),l=n()}else e(0,p),e(1<<-c,0),l=n()+"0.00000000000000000000".slice(2,2+a);return a>0?(d=l.length,l=a>=d?u+"0.0000000000000000000".slice(0,a-d+2)+l:u+l.slice(0,d-a)+"."+l.slice(d-a)):l=u+l,l}}();//
// String
// ======
//
// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14
// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]
var A=String.prototype.split;// ECMA-262, 3rd B.2.3
// Note an ECMAScript standart, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
if(2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var e=void 0===/()??/.exec("")[1];// NPCG: nonparticipating capturing group
String.prototype.split=function(t,n){var r=this;if(void 0===t&&0===n)return[];// If `separator` is not a regex, use native split
if("[object RegExp]"!==Object.prototype.toString.call(t))return A.apply(this,arguments);var i,o,a,s,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.extended?"x":"")+(// Proposed for ES6
t.sticky?"y":""),// Firefox 3+
c=0,// Make `global` and avoid `lastIndex` issues by working with a copy
t=new RegExp(t.source,l+"g");// ToUint32(limit)
for(r+="",// Type-convert
e||(// Doesn't need flags gy, but they don't hurt
i=new RegExp("^"+t.source+"$(?!\\s)",l)),/* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
n=void 0===n?-1>>>0:// Math.pow(2, 32) - 1
n>>>0;(o=t.exec(r))&&(// `separator.lastIndex` is not reliable cross-browser
a=o.index+o[0].length,!(a>c&&(u.push(r.slice(c,o.index)),// Fix browsers whose `exec` methods don't consistently return `undefined` for
// nonparticipating capturing groups
!e&&o.length>1&&o[0].replace(i,function(){for(var e=1;e<arguments.length-2;e++)void 0===arguments[e]&&(o[e]=void 0)}),o.length>1&&o.index<r.length&&Array.prototype.push.apply(u,o.slice(1)),s=o[0].length,c=a,u.length>=n)));)t.lastIndex===o.index&&t.lastIndex++;return c===r.length?(s||!t.test(""))&&u.push(""):u.push(r.slice(c)),u.length>n?u.slice(0,n):u}}():"0".split(void 0,0).length&&(String.prototype.split=function(e,t){return void 0===e&&0===t?[]:A.apply(this,arguments)}),"".substr&&"b"!=="0b".substr(-1)){var O=String.prototype.substr;/**
     *  Get the substring of a string
     *  @param  {integer}  start   where to start the substring
     *  @param  {integer}  length  how many characters to return
     *  @return {string}
     */
String.prototype.substr=function(e,t){return O.call(this,0>e&&(e=this.length+e)<0?0:e,t)}}// ES5 15.5.4.20
// whitespace from: http://es5.github.io/#x15.5.4.20
var F="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||F.trim()){// http://blog.stevenlevithan.com/archives/faster-trim-javascript
// http://perfectionkills.com/whitespace-deviations/
F="["+F+"]";var L=new RegExp("^"+F+F+"*"),_=new RegExp(F+F+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(L,"").replace(_,"")}}// ES-5 15.1.2.2
(8!==parseInt(F+"08")||22!==parseInt(F+"0x16"))&&(parseInt=function(e){var t=/^0[xX]/;return function(n,r){return n=String(n).trim(),+r||(r=t.test(n)?16:10),e(n,r)}}(parseInt));// ES5 9.9
// http://es5.github.com/#x9.9
var M=function(e){if(null==e)// this matches both null and undefined
throw new TypeError("can't convert "+e+" to object");return Object(e)}}),/* global AnalyticsGoogle: object */
function(){"use strict";var e;e={google:null,scribe:null,/**
     * Tracking across all services
     */
track:function(e,t){var n,r=0,i=0;if(this.isTrackingEnabled()===!1)return void("function"==typeof t&&t());// The callback inside this function will be triggered after the last request
// successfully went through
n=function(){r++,t&&i===r&&t()};try{i+=this.trackGoogle(e,n),i+=this.trackScribe(e,n)}catch(o){// Fail silently and trigger the callback
t&&t()}// If no tracking request were made then the callback must be executed
0===i&&t&&t()},/**
     * Track event to Google
     *
     * @return number of events that will be tracked
     */
trackGoogle:function(e,t){var n,r=[];if(null===this.google)return 0;// Manipulate the events and make it comprehensive to the Google service
for(var i=0;i<e.length;i++)if(!(e[i].length<3)){n={category:e[i][0],type:e[i][1],action:e[i][2]};// in case there are more than 3 parameters
for(var o=3;o<e[i].length;o++)n.action+="-"+e[i][o];this.google.isEventValid(n)===!0&&r.push(n)}return this.google.trackEvents(r,t),this.google.getTotalTrackEvents(r)},/**
     * Track event to scribe
     *
     * @return number of events that will be tracked
     */
trackScribe:function(e,t){var n,r=[];if(null===this.scribe)return 0;// Manipulate the events and make it comprehensive to the Scribe service
for(var i=0;i<e.length;i++)5===e[i].length&&(n={page:e[i][0],section:e[i][1],component:e[i][2],element:e[i][3],action:e[i][4]},this.scribe.isEventValid(n)===!0&&r.push(n));return this.scribe.trackEvents(r,t),this.scribe.getTotalTrackEvents(r)},/**
     * Whether DoNotTrack is enabled or not
     */
isTrackingEnabled:function(){return"yes"!==window.navigator.doNotTrack&&"1"!==window.navigator.doNotTrack&&"1"!==window.navigator.msDoNotTrack&&("undefined"==typeof doNotTrack||"1"!==doNotTrack)},/**
     * Initialize all tracking services
     */
initialize:function(e){this.isTrackingEnabled()!==!1&&(e.google&&this.initializeGoogle(e.google),e.scribe&&this.initializeScribe(e.scribe))},/**
     * Initialize Google tracking service
     */
initializeGoogle:function(e){this.google=new TwtrAnalyticsGoogle(e)},/**
     * Initialize Scribe tracking service
     */
initializeScribe:function(e){this.scribe=new TwtrAnalyticsScribe(e)}},window.TwtrAnalytics=e}(),function(){"use strict";var e;e=function(e){var t=this,n=[],r=[],i=!1,o=[];/**
     * Set a custom var
     */
this.setCustomVar=function(e,t){u(function(n,r,i){ga(i+".set",e,t)})},/**
     * Track a set of events
     * Callback is only triggered if the event is valid.
     */
this.trackEvents=function(e,n){return u(function(r,i,o){for(var a=0;a<e.length;a++)t.isEventValid(e[a])!==!1?ga(o+".send","event",e[a].category,e[a].type,e[a].action,{hitCallback:n}):console.warn("Could not GA track event - category, type and/or action parameters are missing.")}),!0},/**
     * Check if a single event is valid
     */
this.isEventValid=function(e){return!(!e.category||!e.type||!e.action)},/**
     * Based on a number of events return the number of queries
     * that will be made to Google Analytics
     */
this.getTotalTrackEvents=function(e){return e.length*n.length};/**
     * Create the accounts
     */
var a=function(){u(function(e,t,n){ga("create",t,"auto",{allowLinker:!0,name:n})}),ga("require","linker"),ga("linker:autoLink",o)},s=function(){u(function(e,t,n){i?ga(n+".send","pageview",i):ga(n+".send","pageview")})},u=function(e){for(var t=0;t<r.length;t++)e(t,n[t],r[t])},l=function(e){!function(e,t,n,r,i,o,a){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,o=t.createElement(n),a=t.getElementsByTagName(n)[0],o.async=1,o.src=r,a.parentNode.insertBefore(o,a)}(window,document,"script",e,"ga")},c=function(e){n=e;for(var t=0;t<e.length;t++)r.push(String.fromCharCode(97+t))},p=function(e){var n;l(e.options.trackerUrl),c(e.accounts),o=e.options.domains,i=e.options.customUrl,// Send data to GA
a();for(n in e.options.customVars)t.setCustomVar(n,e.options.customVars[n]);1==e.options.displayAdvertisingFeatures?u(function(e,t,n){ga(n+".require","displayfeatures")}):"undefined"!=typeof console&&console.log&&console.log("Tailored ads opt-out is enabled."),s()};p(e)},window.TwtrAnalyticsGoogle=e}(),function(){"use strict";var e;e=function(e){var t,n,r,i=null;/**
     * Track a set of events
     * Callback is only triggered if the event is valid.
     */
this.trackEvents=function(e,n){var r,i;for(r=0;r<e.length;r++)this.isEventValid(e[r])!==!1?(i={client:t,page:e[r].page,section:e[r].section,component:e[r].component,element:e[r].element,action:e[r].action},a(i,n)):console.warn("Could not scribe event - page, section, component, element and/or action parameters are missing.")},/**
     * Check if a single event is valid
     */
this.isEventValid=function(e){return r&&e.page&&void 0!==e.component&&void 0!==e.section&&void 0!==e.element&&void 0!==e.action},/**
     * Return the number of potential queries made to scribe based on a set of events
     */
this.getTotalTrackEvents=function(e){// Fail silently
// Fail silently
return r?e.length:0};/**
     * Send page view
     */
var o=function(){var e,n;// The function is not used properly
return null===i?!1:(e=i(),e.page&&void 0!==e.section?(n={client:t,page:e.page,section:e.section,component:e.component,element:e.element,action:"impression"},a(n)):!1)},a=function(e,t){// Fail silently
// Fail silently
return r?(r.scribe(e),t&&t(),!0):!1},s=function(){n=new ScribeTransport({useAjax:!1,// the scribe API will be called using an <img> tag GET request
bufferEvents:!1,// scribe events will not be buffered
flushOnUnload:!0})},u=function(){void 0===n&&s(),r=new ClientEvent(n)},l=function(e){return window.ScribeTransport&&window.ClientEvent&&e.client?(t=e.client,e.pageViewCallback&&(i=e.pageViewCallback),s(),u(),o(),!0):!1};l(e)},window.TwtrAnalyticsScribe=e}(),function(e,t){"use strict";t.behaviors.helper_analytics={settings:{},initialized:!1,attach:function(){var e=this;return this.initialized?!0:(e.initializeSettings(),"undefined"!=typeof TwtrAnalytics&&"undefined"!=typeof twttr&&void 0!==twttr.conversion&&void 0!==twttr.ready&&twttr.ready(function(){TwtrAnalytics.isTrackingEnabled()===!0&&e.initializeTrackingPixel()}),"undefined"!=typeof TwtrAnalytics&&e.initializeAnalytics(),void(this.initialized=!0))},initializeSettings:function(){var t=e("#drupal-settings");0!==t.length&&(this.settings=e.parseJSON(t.html()))},initializeTrackingPixel:function(){var t;this.settings.analyticsSettings.trackingPixel&&(t=this.settings.analyticsSettings.trackingPixel,"undefined"!=typeof t.pixel_ids&&e.each(t.pixel_ids,function(e){twttr.conversion.trackPid(e)}))},initializeAnalytics:function(){this.settings.analyticsSettings&&(this.initializeAnalyticsScribeSettings(),TwtrAnalytics.initialize({google:this.settings.analyticsSettings.google,scribe:this.settings.analyticsSettings.scribe}))},initializeAnalyticsScribeSettings:function(){return this.settings.analyticsSettings.scribe?void(this.settings.analyticsSettings.scribe.pageViewCallback=function(){var t,n,r,i,o,a,s,u;return t=e(e(document.body).attr("data-analytics-page")?document.body:"[data-analytics-page]"),t.length?(n=t.first().data("analytics-page"),r="",a="",u="",this.settings.analyticsSettings.scribe.scribeSectionWithImpression&&(i=t.first().find("[data-analytics-section]"),i.length&&(r=i.first().data("analytics-section"),o=i.first().find("[data-analytics-component]"),o.length&&(a=o.first().data("analytics-component"),s=o.first().find("[data-analytics-element]"),s.length&&(u=s.first().data("analytics-element"))))),{page:n,section:r,component:a,element:u}):{}}.bind(this)):!1}}}(jQuery,Drupal,window),/*global window */
function(e,t){"use strict";var n=!1;t.behaviors.helper_eu_cookie_notice={attach:function(){return n?!0:(this.checkCookie()===!1&&this.checkLocation(),void(n=!0))},checkCookie:function(){return"1"===e.cookie("eu_cn")},setCookie:function(){e.cookie("eu_cn","1",{expires:365,path:"/",domain:"twitter.com"})},checkLocation:function(){e.ajax({type:"GET",cache:!1,url:"/i/gazebo/ajax/notice/cookies",dataType:"json",success:this.checkLocationSuccess.bind(this)})},checkLocationSuccess:function(e){// request from eu
void 0!==e.eu_cn&&e.eu_cn===!0&&this.displayNotice(e.message,e.selector),// request from outside eu
void 0!==e.eu_cn&&e.eu_cn===!1&&null!==e.country_code_alpha2&&this.setCookie()},displayNotice:function(t,n){// show the message
e(n).prepend(t),// add functionality for the 'x' close button
this.bindDismissal()},bindDismissal:function(){var t=this;e(".alert.cookie-notice").bind("closed",function(){t.dismissNotice()}),e(".Message--euCookie .close").on("click",function(){t.dismissNotice(),e(this).closest(".Message--euCookie").hide()})},dismissNotice:function(){this.setCookie()}}}(jQuery,Drupal),jQuery(function(){"use strict";// Toggle the content tray up and down
jQuery(".Accordion-group-heading-toggle").click(function(e){var t=jQuery(this),n=jQuery(t.attr("data-parent")),r=jQuery(".Accordion-group-body",n);t.toggleClass("is-collapsed"),r.toggleClass("is-collapsed"),e.preventDefault()})});;
!function(t,e){/*
    Transport mechanism for sending log data to an API endpoint.

    Options:
    * useAjax - Defaults to true, if false, the scribe API will be called using an <img> tag GET request
    * sync - If AJAX is enabled, the scribe API will be called with a synchronous AJAX request. Defaults to false.
    * bufferEvents - Scribe events will be buffered, reducing the number of scribe API calls. Defaults to true for
                     browsers that support sessionStorage. Will be set to false if bufferSize is 0.
    * bufferSize - The multiple of 2083 characters to store in the scribe buffer
    * bufferKey - specify a sessionStorage key for your buffered scribe events, defaults to SESSION_BUFFER_KEY
    * url - The scribe API url to send scribe events to. If not set, it will use the default endpoint SCRIBE_API_ENDPOINT.
    * debug - Enable debugging of scribe events in the scribe console.
    * flushOnUnload - Flush the scribe buffer when the page unloads. Defaults to true.
    * metrics - Enable recording of scribe reliability metrics. Used only on twitter.com.
    * encodeParameters - an optional function used to map the scribe event data into a request parameter hash
  */
function i(t){this.SESSION_BUFFER_KEY="ScribeTransport",this.SCRIBE_API_ENDPOINT="/i/jot",// initialize operating settings for ScribeTransport
this.options={},t&&(this.updateOptions(t),this.registerEventHandlers(t))}function s(i){// default global scribe data
this.scribeContext={},this.scribeData={},/**
     * Records a client_event (see http://go/scribe)
     * @param object a hash of event_name terms, see http://go/clienteventnamespace for details.
     * @param object the data sent with the client_event
     */
this.scribe=function(s,o){var n=i||t.scribeTransport;if(!n)throw new Error("You must create a global scribeTransport variable or pass one into this constructor.");if(!s||"object"!=typeof s||o&&"object"!=typeof o)throw new Error("Invalid terms or data hash argument when calling ClientEvent.scribe().");// Build up context
if(this.scribeContext){var r="function"==typeof this.scribeContext?this.scribeContext():this.scribeContext;s=e.extend({},r,s)}// properly snake-case
for(var a in s)s[a]=s[a]&&(""+s[a]).toLowerCase().replace(/_?[^a-z0-9_]+_?/g,"_");n.options.debug&&e.each(["client","action"],function(t,e){if(!s[e])throw new Error("You must specify a "+e+" term in your client_event.")});//  Build up data
var o=e.extend({},o);if(this.scribeData){var u="function"==typeof this.scribeData?this.scribeData():this.scribeData;o=e.extend({},u,o)}o.event_namespace=s,o.triggered_on=o.triggered_on||+new Date,o.format_version=o.format_version||2,n.send(o,"client_event")}}function o(i,s){this.experiments=i||{},// cached list of impressions to prevent re-scribing of DDG impressions
this.impressions={},// private method that should not be called directly
this.scribeExperiment=function(i,o,n){//  Build up context
var r=e.extend({page:"ddg",section:i.experiment_key,component:"",element:""},o);n=n||{},n.experiment_key=i.experiment_key,n.bucket=i.bucket,n.version=i.version,(s||t.clientEvent).scribe(r,n)},/**
     * Records a client_event for usage by Duck Duck Goose, the A/B testing platform (see http://go/ddg)
     * @param String the experiment name or alias impression being logged
     */
this.impression=function(t){var e=this.experiments[t],i="web";e&&(t=e.experiment_key,this.impressions[t]||(e.client_name&&(i=e.client_name),this.scribeExperiment(e,{client:i,action:"experiment"}),this.impressions[t]=!0))},/**
     * Scribes a custom tracked event for Duck Duck Goose, the A/B testing platform (see http://go/ddg). Custom events are events
     * that are only recorded for the purpose of an experiment. For more general events, you should scribe a client_event and
     * track the client_event in the DDG interface.
     * @param String the experiment name or alias impression being logged
     * @param String the name of the event being tracked
     */
this.track=function(t,e,i){if(!e)throw new Error("You must specify an event name to track custom DDG events. Event names should be lower-case, snake_cased strings.");var s=this.experiments[t];s&&this.scribeExperiment(s,{element:e,action:"track"},i)},/**
     * Returns the current bucket that the user is in. If the user isn't in the experiment, returns an empty string.
     * @param String the experiment name or alias that the user is bucketed in
     */
this.bucket=function(t){var e=this.experiments[t];return e?e.bucket:""}}i.prototype={flush:function(t,i){if(t&&t.length){if(// if no sync flag passed in, use options value if set
void 0===i&&(i=!!this.options.sync),this.options.useAjax){// use xhr POST to send request
var s={url:this.options.url,data:e.extend(this.ajaxParams(t),this.options.requestParameters),type:"POST",dataType:"json",async:!i,headers:{"X-Twitter-Polling":!0}};this.options.debug&&(this.options.debugHandler&&(s.success=this.options.debugHandler),s.data.debug="1"),e.ajax(s)}else{var o=this.options.debug?"&debug=1":"";(new Image).src=this.options.url+"?q="+(+new Date).toString().slice(-4)+o+"&"+this.imageParams(t)}this.reset()}},ajaxParams:function(t){if("string"==typeof t)return{log:"["+t+"]"};var e=this.options.encodeParameters;return e&&"function"==typeof e?e.apply(this,arguments):{log:JSON.stringify(t)}},imageParams:function(t){if("string"==typeof t)return"log=%5B"+t+"%5D";var e=this.options.encodeParameters;return e&&"function"==typeof e?e.apply(this,arguments):"log="+encodeURIComponent(JSON.stringify(t))},reset:function(){this.options.bufferEvents&&(this.skipUnloadFlush=!1,sessionStorage.removeItem(this.options.bufferKey))},getBuffer:function(){return sessionStorage.getItem(this.options.bufferKey)||""},logWithStorageException:function(t,e){var i={category:"client_scribe_storage_error",error:t.message,url:document.location.href,product_name:"swift",event_name:"storage_quota_exceeded",type:"js_error"};this.addCategoryField(i,i.category),this.flush(this.appendData(e,this.encodeEventData(i)))},storeData:function(t,e){try{sessionStorage.setItem(t,e)}catch(i){if("QuotaExceededError"!==i.name&&// IE10+, W3C standard, newer WebKit
"QuotaExceededError"!==i.message&&// IE9
"NS_ERROR_DOM_QUOTA_REACHED"!==i.name&&// Firefox
"QUOTA_EXCEEDED_ERR"!==i.name&&// Older WebKit. Unclear if sessionStorage ever has limits, though.
-2147024882!==i.number)throw i;// IE8
this.logWithStorageException(i,e)}},encodeEventData:function(t){var e=JSON.stringify(t);return this.options.useAjax||(e=encodeURIComponent(e)),e},appendData:function(t,e){return t+(t?this.SEPARATOR+e:e)},addToBuffer:function(t){var e=this.getBuffer(),i=this.encodeEventData(t),s=this.appendData(e,i);this.options.bufferSize&&this.fullBuffer(s)?this.options.useAjax?this.flush(s):(this.flush(e),this.storeData(this.options.bufferKey,i)):this.storeData(this.options.bufferKey,s)},addCategoryField:function(t,e){// specially encode Scribe category so it doesn't override a normal category field
t._category_=e},send:function(t,i,s){// if missing category, data, or client-side scribe is darkmoded, don't enqueue
!i||!t||this.options.bufferSize<0||(this.addCategoryField(t,i),!s&&this.options.bufferEvents&&this.options.bufferSize?this.addToBuffer(t):this.flush([t],s),// Send to Scribe Console
this.options.debug&&e(document).trigger("scribedata."+this.options.bufferKey,t),// event triggered every time a scribe event is enqueued, used for debugging purposes
this.options.metrics&&"debug"!=t.event_info&&e(document).trigger("debugscribe",t))},fullBuffer:function(t){// keep buffer sizes relative to the max IE URL
return t.length>=(this.options.useAjax?2083*this.options.bufferSize:2050-this.options.url.length)},updateOptions:function(i){// perform feature detection on sessionStorage. Using a
// try/catch to preserve testability in jasmine using file:// urls.
if(this.options=e.extend({},this.options,i),this.options.requestParameters||(this.options.requestParameters={}),void 0===this.options.flushOnUnload&&(this.options.flushOnUnload=!0),this.options.bufferKey||(this.options.bufferKey=this.SESSION_BUFFER_KEY),// if zero length buffer size, don't use the buffer
0===this.options.bufferSize&&(this.options.bufferEvents=!1),void 0===this.options.useAjax&&(this.options.useAjax=!0),this.options.bufferEvents||void 0==this.options.bufferEvents)try{sessionStorage.setItem(this.SESSION_BUFFER_KEY+".init","test");var s="test"==sessionStorage.getItem(this.SESSION_BUFFER_KEY+".init");sessionStorage.removeItem(this.SESSION_BUFFER_KEY+".init"),this.options.bufferEvents=s}catch(o){this.options.bufferEvents=!1}// set default debug handler if debug option set
if(this.options.debug&&!this.options.debugHandler){var n=this;this.options.debugHandler=i.debugHandler||function(t){e(document).trigger("handlescribe."+n.options.bufferKey,t)}}var r="https:"===t.location.protocol?"https:":"http:";this.options.url=void 0===this.options.url?this.options.useAjax?this.SCRIBE_API_ENDPOINT:"https://twitter.com"+this.SCRIBE_API_ENDPOINT:this.options.url.replace(/^[a-z]+:/g,r).replace(/\/$/,""),//default buffer size of 20
this.options.bufferEvents&&void 0===this.options.bufferSize&&(this.options.bufferSize=20)},// added to enable unit testing
appHost:function(){return t.location.host},registerEventHandlers:function(){var i=this,s=e(document);if(this.options.bufferEvents&&(s.on("flushscribe."+i.options.bufferKey,function(){i.flush(i.getBuffer(),!0)}),this.options.flushOnUnload)){var o=function(e){i.skipUnloadFlush=!e||!e.match(/http/)||!!e.match(new RegExp("^https?://"+i.appHost(),"gi")),i.skipUnloadFlush&&// need to unset skip flag since link could not
t.setTimeout(function(){i.skipUnloadFlush=!1},3e3)};s.on("mouseup."+this.options.bufferKey,"a",function(t){this.getAttribute("target")||t.button||t.metaKey||t.shiftKey||t.altKey||t.ctrlKey||o(this.getAttribute("href"))}),s.on("submit."+this.options.bufferKey,"form",function(){o(this.getAttribute("action"))}),// move this out and into swift on the monorail
s.on("uiNavigate."+this.options.bufferKey,function(t,e){o(e.url)}),e(t).on("unload."+this.options.bufferKey,function(){i.skipUnloadFlush||i.flush(i.getBuffer(),!0),i.skipUnloadFlush=!1})}this.SEPARATOR=this.options.useAjax?",":encodeURIComponent(",")},destroy:function(){this.flush(this.getBuffer()),e(document).off("flushscribe."+this.options.bufferKey),e(t).off("unload."+this.options.bufferKey),e(document).off("mouseup."+this.options.bufferKey),e(document).off("submit."+this.options.bufferKey),e(document).off("uiNavigate."+this.options.bufferKey)}},t.scribeTransport=new i,t.clientEvent=new s,t.ddg=new o,t.ScribeTransport=i,t.ClientEvent=s,t.DDG=o}(window,jQuery);;
