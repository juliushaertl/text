/*! For license information please see text-viewer.js.LICENSE.txt */
!function(){var e,t,n,i,r={48583:function(e,t,n){"use strict";var i=n(27418);function r(e,t){if(e===t)return 0;for(var n=e.length,i=t.length,r=0,a=Math.min(n,i);r<a;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0}function a(e){return n.g.Buffer&&"function"==typeof n.g.Buffer.isBuffer?n.g.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var o=n(89539),c=Object.prototype.hasOwnProperty,f=Array.prototype.slice,l="foo"===function(){}.name;function h(e){return Object.prototype.toString.call(e)}function u(e){return!a(e)&&("function"==typeof n.g.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var s=e.exports=y,g=/\s*function\s+([^\(\s]*)\s*/;function d(e){if(o.isFunction(e)){if(l)return e.name;var t=e.toString().match(g);return t&&t[1]}}function p(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function b(e){if(l||!o.isFunction(e))return o.inspect(e);var t=d(e);return"[Function"+(t?": "+t:"")+"]"}function m(e,t,n,i,r){throw new s.AssertionError({message:n,actual:e,expected:t,operator:i,stackStartFunction:r})}function y(e,t){e||m(e,!0,t,"==",s.ok)}function v(e,t,n,i){if(e===t)return!0;if(a(e)&&a(t))return 0===r(e,t);if(o.isDate(e)&&o.isDate(t))return e.getTime()===t.getTime();if(o.isRegExp(e)&&o.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(u(e)&&u(t)&&h(e)===h(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(a(e)!==a(t))return!1;var c=(i=i||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===i.expected.indexOf(t)||(i.actual.push(e),i.expected.push(t),function(e,t,n,i){if(null==e||null==t)return!1;if(o.isPrimitive(e)||o.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var r=w(e),a=w(t);if(r&&!a||!r&&a)return!1;if(r)return v(e=f.call(e),t=f.call(t),n);var c,l,h=E(e),u=E(t);if(h.length!==u.length)return!1;for(h.sort(),u.sort(),l=h.length-1;l>=0;l--)if(h[l]!==u[l])return!1;for(l=h.length-1;l>=0;l--)if(!v(e[c=h[l]],t[c],n,i))return!1;return!0}(e,t,n,i))}return n?e===t:e==t}function w(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function x(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function j(e,t,n,i){var r;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(i=n,n=null),r=function(e){var t;try{e()}catch(e){t=e}return t}(t),i=(n&&n.name?" ("+n.name+").":".")+(i?" "+i:"."),e&&!r&&m(r,n,"Missing expected exception"+i);var a="string"==typeof i,c=!e&&r&&!n;if((!e&&o.isError(r)&&a&&x(r,n)||c)&&m(r,n,"Got unwanted exception"+i),e&&r&&n&&!x(r,n)||!e&&r)throw r}s.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=function(e){return p(b(e.actual),128)+" "+e.operator+" "+p(b(e.expected),128)}(this),this.generatedMessage=!0);var t=e.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var i=n.stack,r=d(t),a=i.indexOf("\n"+r);if(a>=0){var o=i.indexOf("\n",a+1);i=i.substring(o+1)}this.stack=i}}},o.inherits(s.AssertionError,Error),s.fail=m,s.ok=y,s.equal=function(e,t,n){e!=t&&m(e,t,n,"==",s.equal)},s.notEqual=function(e,t,n){e==t&&m(e,t,n,"!=",s.notEqual)},s.deepEqual=function(e,t,n){v(e,t,!1)||m(e,t,n,"deepEqual",s.deepEqual)},s.deepStrictEqual=function(e,t,n){v(e,t,!0)||m(e,t,n,"deepStrictEqual",s.deepStrictEqual)},s.notDeepEqual=function(e,t,n){v(e,t,!1)&&m(e,t,n,"notDeepEqual",s.notDeepEqual)},s.notDeepStrictEqual=function e(t,n,i){v(t,n,!0)&&m(t,n,i,"notDeepStrictEqual",e)},s.strictEqual=function(e,t,n){e!==t&&m(e,t,n,"===",s.strictEqual)},s.notStrictEqual=function(e,t,n){e===t&&m(e,t,n,"!==",s.notStrictEqual)},s.throws=function(e,t,n){j(!0,e,t,n)},s.doesNotThrow=function(e,t,n){j(!1,e,t,n)},s.ifError=function(e){if(e)throw e},s.strict=i((function e(t,n){t||m(t,!0,n,"==",e)}),s,{equal:s.strictEqual,deepEqual:s.deepStrictEqual,notEqual:s.notStrictEqual,notDeepEqual:s.notDeepStrictEqual}),s.strict.strict=s.strict;var E=Object.keys||function(e){var t=[];for(var n in e)c.call(e,n)&&t.push(n);return t}},27004:function(e,t,n){"use strict";Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var i={name:"ViewerComponent",components:{EditorWrapper:function(){return Promise.all([n.e("vendors"),n.e("editor")]).then(n.bind(n,45567))}},props:{filename:{type:String,default:null},fileid:{type:Number,default:null},active:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!0},shareToken:{type:String,default:null},mime:{type:String,default:null}},beforeMount:function(){void 0!==this.$parent.$parent&&this.$parent.$parent.onResize&&window.removeEventListener("resize",this.$parent.$parent.onResize)}};t.Z=i},74411:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openMimetypesPlainText=t.openMimetypesMarkdown=t.openMimetypes=void 0;var n=["text/markdown"];t.openMimetypesMarkdown=n;var i=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/csv","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"];t.openMimetypesPlainText=i;var r=[].concat(n,i);t.openMimetypes=r},25108:function(e,t,n){var i=n(89539),r=n(48583);function a(){return(new Date).getTime()}var o,c=Array.prototype.slice,f={};o=void 0!==n.g&&n.g.console?n.g.console:"undefined"!=typeof window&&window.console?window.console:{};for(var l=[[function(){},"log"],[function(){o.log.apply(o,arguments)},"info"],[function(){o.log.apply(o,arguments)},"warn"],[function(){o.warn.apply(o,arguments)},"error"],[function(e){f[e]=a()},"time"],[function(e){var t=f[e];if(!t)throw new Error("No such label: "+e);delete f[e];var n=a()-t;o.log(e+": "+n+"ms")},"timeEnd"],[function(){var e=new Error;e.name="Trace",e.message=i.format.apply(null,arguments),o.error(e.stack)},"trace"],[function(e){o.log(i.inspect(e)+"\n")},"dir"],[function(e){if(!e){var t=c.call(arguments,1);r.ok(!1,i.format.apply(null,t))}},"assert"]],h=0;h<l.length;h++){var u=l[h],s=u[0],g=u[1];o[g]||(o[g]=s)}e.exports=o},96197:function(e,t,n){"use strict";var i=n(23645),r=n.n(i)()(!0);r.push([e.id,"\n#editor-container {\n\theight: calc(100% - 50px);\n\ttop: 50px;\n}\n","",{version:3,sources:["webpack://src/components/ViewerComponent.vue"],names:[],mappings:";AAwEA;CACA,yBAAA;CACA,SAAA;AACA",sourcesContent:['\x3c!--\n  - @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>\n  -\n  - @author Julius Härtl <jus@bitgrid.net>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n\n<template>\n\t<EditorWrapper :file-id="fileid"\n\t\t:relative-path="filename"\n\t\t:active="active"\n\t\t:autofocus="autofocus"\n\t\t:share-token="shareToken"\n\t\t:mime="mime" />\n</template>\n\n<script>\nexport default {\n\tname: \'ViewerComponent\',\n\tcomponents: {\n\t\tEditorWrapper: () => import(/* webpackChunkName: "editor" */\'./EditorWrapper\'),\n\t},\n\tprops: {\n\t\tfilename: {\n\t\t\ttype: String,\n\t\t\tdefault: null,\n\t\t},\n\t\tfileid: {\n\t\t\ttype: Number,\n\t\t\tdefault: null,\n\t\t},\n\t\tactive: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t\tautofocus: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: true,\n\t\t},\n\t\tshareToken: {\n\t\t\ttype: String,\n\t\t\tdefault: null,\n\t\t},\n\t\tmime: {\n\t\t\ttype: String,\n\t\t\tdefault: null,\n\t\t},\n\t},\n\tbeforeMount() {\n\t\t// FIXME Dirty fix to avoid recreating the component on stable16\n\t\tif (typeof this.$parent.$parent !== \'undefined\' && this.$parent.$parent.onResize) {\n\t\t\twindow.removeEventListener(\'resize\', this.$parent.$parent.onResize)\n\t\t}\n\t},\n}\n<\/script>\n<style>\n#editor-container {\n\theight: calc(100% - 50px);\n\ttop: 50px;\n}\n</style>\n'],sourceRoot:""}]),t.Z=r},23645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(o=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),f="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(f," */")),a=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var o,c,f;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var f=[].concat(e[c]);i&&r[f[0]]||(n&&(f[2]?f[2]="".concat(n," and ").concat(f[2]):f[2]=n),t.push(f))}},t}},35717:function(e){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}},27418:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,c,f=r(e),l=1;l<arguments.length;l++){for(var h in o=Object(arguments[l]))n.call(o,h)&&(f[h]=o[h]);if(t){c=t(o);for(var u=0;u<c.length;u++)i.call(o,c[u])&&(f[c[u]]=o[c[u]])}}return f}},34155:function(e){var t,n,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,f=[],l=!1,h=-1;function u(){l&&c&&(l=!1,c.length?f=c.concat(f):h=-1,f.length&&s())}function s(){if(!l){var e=o(u);l=!0;for(var t=f.length;t;){for(c=f,f=[];++h<t;)c&&c[h].run();h=-1,t=f.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function d(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new g(e,t)),1!==f.length||l||o(s)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},93379:function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function c(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function f(e,t){for(var n={},i=[],r=0;r<e.length;r++){var a=e[r],f=t.base?a[0]+t.base:a[0],l=n[f]||0,h="".concat(f," ").concat(l);n[f]=l+1;var u=c(h),s={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(s)):o.push({identifier:h,updater:b(s,t),references:1}),i.push(h)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var h,u=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function s(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function g(e,t,n){var i=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var d=null,p=0;function b(e,t){var n,i,r;if(t.singleton){var a=p++;n=d||(d=l(t)),i=s.bind(null,n,a,!1),r=s.bind(null,n,a,!0)}else n=l(t),i=g.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=f(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=c(n[i]);o[r].references--}for(var a=f(e,t),l=0;l<n.length;l++){var h=c(n[l]);0===o[h].references&&(o[h].updater(),o.splice(h,1))}n=a}}}},20384:function(e){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},89539:function(e,t,n){var i=n(34155),r=n(25108),a=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(f(arguments[n]));return t.join(" ")}n=1;for(var i=arguments,r=i.length,o=String(e).replace(a,(function(e){if("%%"===e)return"%";if(n>=r)return e;switch(e){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return e}})),c=i[n];n<r;c=i[++n])b(c)||!x(c)?o+=" "+c:o+=" "+f(c);return o},t.deprecate=function(e,a){if(v(n.g.process))return function(){return t.deprecate(e,a).apply(this,arguments)};if(!0===i.noDeprecation)return e;var o=!1;return function(){if(!o){if(i.throwDeprecation)throw new Error(a);i.traceDeprecation?r.trace(a):r.error(a),o=!0}return e.apply(this,arguments)}};var o,c={};function f(e,n){var i={seen:[],stylize:h};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),p(n)?i.showHidden=n:n&&t._extend(i,n),v(i.showHidden)&&(i.showHidden=!1),v(i.depth)&&(i.depth=2),v(i.colors)&&(i.colors=!1),v(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=l),u(i,e,i.depth)}function l(e,t){var n=f.styles[t];return n?"["+f.colors[n][0]+"m"+e+"["+f.colors[n][1]+"m":e}function h(e,t){return e}function u(e,n,i){if(e.customInspect&&n&&O(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(i,e);return y(r)||(r=u(e,r,i)),r}var a=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(m(t))return e.stylize(""+t,"number");if(p(t))return e.stylize(""+t,"boolean");if(b(t))return e.stylize("null","null")}(e,n);if(a)return a;var o=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(n)),E(n)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return s(n);if(0===o.length){if(O(n)){var f=n.name?": "+n.name:"";return e.stylize("[Function"+f+"]","special")}if(w(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return s(n)}var l,h="",x=!1,S=["{","}"];(d(n)&&(x=!0,S=["[","]"]),O(n))&&(h=" [Function"+(n.name?": "+n.name:"")+"]");return w(n)&&(h=" "+RegExp.prototype.toString.call(n)),j(n)&&(h=" "+Date.prototype.toUTCString.call(n)),E(n)&&(h=" "+s(n)),0!==o.length||x&&0!=n.length?i<0?w(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=x?function(e,t,n,i,r){for(var a=[],o=0,c=t.length;o<c;++o)C(t,String(o))?a.push(g(e,t,n,i,String(o),!0)):a.push("");return r.forEach((function(r){r.match(/^\d+$/)||a.push(g(e,t,n,i,r,!0))})),a}(e,n,i,c,o):o.map((function(t){return g(e,n,i,c,t,x)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,h,S)):S[0]+h+S[1]}function s(e){return"["+Error.prototype.toString.call(e)+"]"}function g(e,t,n,i,r,a){var o,c,f;if((f=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]}).get?c=f.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):f.set&&(c=e.stylize("[Setter]","special")),C(i,r)||(o="["+r+"]"),c||(e.seen.indexOf(f.value)<0?(c=b(n)?u(e,f.value,null):u(e,f.value,n-1)).indexOf("\n")>-1&&(c=a?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),v(o)){if(a&&r.match(/^\d+$/))return c;(o=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+c}function d(e){return Array.isArray(e)}function p(e){return"boolean"==typeof e}function b(e){return null===e}function m(e){return"number"==typeof e}function y(e){return"string"==typeof e}function v(e){return void 0===e}function w(e){return x(e)&&"[object RegExp]"===S(e)}function x(e){return"object"==typeof e&&null!==e}function j(e){return x(e)&&"[object Date]"===S(e)}function E(e){return x(e)&&("[object Error]"===S(e)||e instanceof Error)}function O(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function A(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(v(o)&&(o=i.env.NODE_DEBUG||""),e=e.toUpperCase(),!c[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var n=i.pid;c[e]=function(){var i=t.format.apply(t,arguments);r.error("%s %d: %s",e,n,i)}}else c[e]=function(){};return c[e]},t.inspect=f,f.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},f.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=p,t.isNull=b,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=y,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=v,t.isRegExp=w,t.isObject=x,t.isDate=j,t.isError=E,t.isFunction=O,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(20384);var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(){var e=new Date,t=[A(e.getHours()),A(e.getMinutes()),A(e.getSeconds())].join(":");return[e.getDate(),T[e.getMonth()],t].join(" ")}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){r.log("%s - %s",k(),t.format.apply(t,arguments))},t.inherits=n(35717),t._extend=function(e,t){if(!t||!x(t))return e;for(var n=Object.keys(t),i=n.length;i--;)e[n[i]]=t[n[i]];return e}},5757:function(e,t,n){"use strict";n.r(t),n.d(t,{__esModule:function(){return i.X},default:function(){return l}});var i=n(27004),r=i.Z,a=n(93379),o=n.n(a),c=n(96197),f={insert:"head",singleton:!1},l=(o()(c.Z,f),c.Z.locals,(0,n(51900).Z)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("EditorWrapper",{attrs:{"file-id":e.fileid,"relative-path":e.filename,active:e.active,autofocus:e.autofocus,"share-token":e.shareToken,mime:e.mime}})}),[],!1,null,null,null).exports)},51900:function(e,t,n){"use strict";function i(e,t,n,i,r,a,o,c){var f,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=f):r&&(f=c?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),f)if(l.functional){l._injectStyles=f;var h=l.render;l.render=function(e,t){return f.call(t),h(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,f):[f]}return{exports:e,options:l}}n.d(t,{Z:function(){return i}})}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=r,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var r=Object.create(null);o.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&i&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},o.d(r,a),r},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+".js?v="+{vendors:"f5aacd94042575bbd740",editor:"819aad547fa412e3c982","editor-rich":"99976ffcfa9484885ad7","editor-guest":"7b83846190803d731868","editor-collab":"77ebe100cb3c4f0c3183","highlight/1c":"7d282cc82de070398bd8","highlight/abnf":"709134e50c86bb624876","highlight/accesslog":"f8164133972d9628c564","highlight/actionscript":"489f87583deb20596790","highlight/ada":"2a366228ef79b4832ff6","highlight/angelscript":"3d39e18b851bec41349a","highlight/apache":"380f65a665c359057837","highlight/applescript":"d8e0acc05b8604e7866b","highlight/arcade":"a1b6ebc930223c9d880c","highlight/arduino":"4417d461a80d0a1235a0","highlight/armasm":"25e453f9690f2dded89d","highlight/asciidoc":"8a42384a9922d46c4324","highlight/aspectj":"5b22b6e3e4568fd9dc96","highlight/autohotkey":"235c4a3915da039c8b76","highlight/autoit":"1d0d6d512bea8273a7e0","highlight/avrasm":"ae4be3e698449fe6d03c","highlight/awk":"70ddeebe8c3d96df68c2","highlight/axapta":"7a3bc8e0a633162abf9f","highlight/bash":"def12808b7ebb3b5d90f","highlight/basic":"09ded4fa69b5612e03eb","highlight/bnf":"84091d301f810ad8c28b","highlight/brainfuck":"3ac15716a742b3a92ef8","highlight/c":"de0c5ddbd29558452b24","highlight/c-like":"8c0dd514422969a21370","highlight/cal":"a7fd3467c69aebf20cc6","highlight/capnproto":"2ed48fc1a949d882c530","highlight/ceylon":"7f68cbe3dfd91016c8da","highlight/clean":"fa45094e6e9d4616a7fa","highlight/clojure":"d4c64664b265bc25007e","highlight/clojure-repl":"816aba0df48eb13e8ce9","highlight/cmake":"7b38b525d5c481084e72","highlight/coffeescript":"7c72fc0536eaa9c459f2","highlight/coq":"c49a0bdd333a3b84166e","highlight/cos":"fdb9c025492d71411bc1","highlight/cpp":"62401d62e4c5cfd3009b","highlight/crmsh":"6300348ae06d690a0c12","highlight/crystal":"2ebf27cdec1e24d834fa","highlight/csharp":"dff71c67015a6de54f0e","highlight/csp":"f37fcf20ca14675b2753","highlight/css":"1df534b9e2a46fb0f1c1","highlight/d":"d7157ea671384f90ab8e","highlight/dart":"ee2a51c69d52c9cea172","highlight/delphi":"6b61e3a6c49d43cbb723","highlight/diff":"549ac271d33b36a84313","highlight/django":"6a2c6d780e1427813095","highlight/dns":"3d3863cfc36424046a3a","highlight/dockerfile":"eabc8c0032de9254d904","highlight/dos":"f390dc7fba7a837a9185","highlight/dsconfig":"7d02dd820ca8d458dfaa","highlight/dts":"c036aea14aec8331db7b","highlight/dust":"52f94027d127b3e192b1","highlight/ebnf":"e5116f5a72381033f065","highlight/elixir":"551c8c530476c07f0a9b","highlight/elm":"981ceeffd7bff5e0f04d","highlight/erb":"4448f16fbbacc2667a06","highlight/erlang":"6a5be706a73419ee7215","highlight/erlang-repl":"ed7cb8d7beefff3295df","highlight/excel":"d5d66a444f77d81e9e66","highlight/fix":"9c2674d1072c895fb62c","highlight/flix":"d7aebc175cbdb1095227","highlight/fortran":"420360300daa7c8697ea","highlight/fsharp":"f7a3cd6327aba4f787cf","highlight/gams":"6c2e2c4f3c2e7aff5141","highlight/gauss":"94a23af6799afe98cff3","highlight/gcode":"ff8f21341392b9c18a2c","highlight/gherkin":"2309d76c027ab4021270","highlight/glsl":"37b898873f6b9db08c4d","highlight/gml":"8317408a68befde4d2e7","highlight/go":"bdaf1f8fad1050a18092","highlight/golo":"7c262a6021f4c7306c97","highlight/gradle":"52fe506a04b78a38c8f5","highlight/groovy":"eaf6557160a9fd774c98","highlight/haml":"23f24bcbd587af59564b","highlight/handlebars":"befd800069885aef283c","highlight/haskell":"b29d5fe480afa08cfefd","highlight/haxe":"f01125d86900f48773c5","highlight/hsp":"f2bafa39ba4daf78a22c","highlight/htmlbars":"09bce92292b9b2b0e495","highlight/http":"cd7a316963d3c8642215","highlight/hy":"43941802578485b7a118","highlight/inform7":"89c7a35bbad82ba49ccb","highlight/ini":"af3af3cf2da702f05b38","highlight/irpf90":"74a3e6b610b6b7340400","highlight/isbl":"2675cf7985c2240ec326","highlight/java":"5e58e7ac09a7f8992f86","highlight/javascript":"dbe4a6d4f905291bb856","highlight/jboss-cli":"9d64f9fffe7ea293ace9","highlight/json":"1acd0fcc25b86684dca1","highlight/julia":"a028ffb49a64790be6bf","highlight/julia-repl":"de2514179d088bf0f55b","highlight/kotlin":"9afccc946db043ab3a8b","highlight/lasso":"7cd64c18818fe0ef1ac5","highlight/latex":"20250b3436176fbd9074","highlight/ldif":"2a5176f9b2960dd66b2c","highlight/leaf":"f59b21f5522317a0672f","highlight/less":"76af1a8ca7c90a73d786","highlight/lisp":"ac738f980d2cb5c2b123","highlight/livecodeserver":"e1c038ed16d2f6e82d5f","highlight/livescript":"7e55189e928ff87a8c01","highlight/llvm":"a96446d50530346eeff7","highlight/lsl":"7d459d9d5ba5cf322e28","highlight/lua":"b6203ed75c3a7f1e7b7b","highlight/makefile":"13eda450412bffaaab64","highlight/markdown":"6b96804b5ba5f891830e","highlight/mathematica":"fe4b9e88f517eaa9eca8","highlight/matlab":"3477cbed48353a9fb658","highlight/maxima":"3a8ba5519666ea0536cd","highlight/mel":"5cad8718a53f9256a492","highlight/mercury":"ddd4aba14a8e414899b9","highlight/mipsasm":"cbfd774e98bf2357e334","highlight/mizar":"208ddd19641076d75823","highlight/mojolicious":"1936b1496047a1d89ced","highlight/monkey":"bdd1f3c5571eb1535422","highlight/moonscript":"7e8aac5f850c37e402c6","highlight/n1ql":"48a887a40a64496f2128","highlight/nginx":"8e0307498e885ad7be69","highlight/nim":"c4d41d6c4b5e492a8bfa","highlight/nix":"bb986ee4f4cc1db8c00d","highlight/node-repl":"83e0c1a26b02bbff27f7","highlight/nsis":"b4c4229f5981ff81541f","highlight/objectivec":"9a0bb67ad00e9d5c6417","highlight/ocaml":"e6eea4c7a741365788f2","highlight/openscad":"cf83e0db5416a4ac8ce7","highlight/oxygene":"bebb196e162478c5ceee","highlight/parser3":"663e1fdf6cc8c10b7a14","highlight/perl":"54878fee4376806286cd","highlight/pf":"015ad07af10030e7fc3f","highlight/pgsql":"85c7fd49383eb35d4505","highlight/php":"61e692bfc98fe65d0947","highlight/php-template":"5a01c2f8bbed51178231","highlight/plaintext":"881f09d45fddbbe3c069","highlight/pony":"574e9b6a6935c6725442","highlight/powershell":"c0112c1d48c05db792e6","highlight/processing":"20ef5de80b25d25c21da","highlight/profile":"a91b41490a27636166a1","highlight/prolog":"4babdc74fb00505ad9a0","highlight/properties":"6ce7a96a53bfaf4e9956","highlight/protobuf":"94c477bc4a6496ddc7bd","highlight/puppet":"50537485855ed409920f","highlight/purebasic":"dbb890717445d764d66b","highlight/python":"cdc080ffd6ce0ef62708","highlight/python-repl":"cf674d48fc212b1270ef","highlight/q":"b5fd11104e3e476e34ca","highlight/qml":"75e36dfe768cccc7b8dc","highlight/r":"893f9dba2cfc35abe484","highlight/reasonml":"4f0f3313f78343939e72","highlight/rib":"b831a3bb92ad4c096d26","highlight/roboconf":"ace810a096a66616efd5","highlight/routeros":"7d398992342a933f9806","highlight/rsl":"7fb6c20daeadbc471f77","highlight/ruby":"84cbde1692685630f590","highlight/ruleslanguage":"07a84a321f78e855728d","highlight/rust":"7c1d25423fb8f16efc62","highlight/sas":"77c6134803130373b2bd","highlight/scala":"418d0a379c237958e7c4","highlight/scheme":"c931e4733e4ce106f4e2","highlight/scilab":"d4178345d195d76892fc","highlight/scss":"ea1ebcbf5f03f516237f","highlight/shell":"0e26421cfc1231262f39","highlight/smali":"f88bfb0cc373fa6570f6","highlight/smalltalk":"6dc682a0b37d07f84ec5","highlight/sml":"c5205369da4dee7cfb61","highlight/sqf":"5a4899499f6d6d170731","highlight/sql":"1231c81514a68c5c7a94","highlight/sql_more":"3f9ff487015bd5ddd085","highlight/stan":"6ca2a48cbbdad4bcc7a9","highlight/stata":"09cbfc831f93e102571c","highlight/step21":"3a5a8ef81fae1f6e6ae0","highlight/stylus":"bd1839ca153e4a0b49b7","highlight/subunit":"7b03d4c7b12b42efee84","highlight/swift":"2a329c8ccda0bab4534c","highlight/taggerscript":"aa3baca476753c2e2060","highlight/tap":"87257d4d347411e198b6","highlight/tcl":"d755b1f2172c036cd206","highlight/thrift":"1004ad125e1f2c618e0b","highlight/tp":"d29583972d641e0500b9","highlight/twig":"a0e8f23880e5ac57d587","highlight/typescript":"750275dc5cedb64b3c95","highlight/vala":"8ccce9633751981e2e01","highlight/vbnet":"80a0ae23b7c93a680ca7","highlight/vbscript":"a4d0ee0131e2488ed913","highlight/vbscript-html":"885a29f49b33c1704494","highlight/verilog":"af1bc992a0ac77480f5c","highlight/vhdl":"4628bd3a69be53d73610","highlight/vim":"2650cc07e7715a75cc59","highlight/x86asm":"26af7939125744ef1327","highlight/xl":"9438996c7c28dbed7141","highlight/xml":"a414722ec11d19187a9a","highlight/xquery":"5571a4285c2090180ee9","highlight/yaml":"2d6d1328232358e02d68","highlight/zephir":"11f0514b4b08d7619fe0","files-modal":"5e6160ac7ddcad919551"}[e]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},i="text:",o.l=function(e,t,r,a){if(n[e])n[e].push(t);else{var c,f;if(void 0!==r)for(var l=document.getElementsByTagName("script"),h=0;h<l.length;h++){var u=l[h];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+r){c=u;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",i+r),c.src=e),n[e]=[t];var s=function(t,i){c.onerror=c.onload=null,clearTimeout(g);var r=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(i)})),t)return t(i)},g=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),f&&document.head.appendChild(c)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.j="viewer",o.p="/js/",function(){var e={viewer:0};o.f.j=function(t,n){var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(n,r){i=e[t]=[n,r]}));n.push(i[2]=r);var a=o.p+o.u(t),c=new Error;o.l(a,(function(n){if(o.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,i[1](c)}}),"chunk-"+t,t)}};var t=function(t,n){var i,r,a=n[0],c=n[1],f=n[2],l=0;for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(f)f(o);for(t&&t(n);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[a[l]]=0},n=self.webpackChunktext=self.webpackChunktext||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){"use strict";var e,t=o(25108),n=(e=o(5757))&&e.__esModule?e:{default:e},i=o(74411);function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}o.nc=btoa(OC.requestToken),o.p=OC.linkTo("text","js/"),document.addEventListener("DOMContentLoaded",(function(){void 0!==OCA.Viewer?OCA.Viewer.registerHandler({id:"text",mimes:[].concat(r(i.openMimetypesMarkdown),r(i.openMimetypesPlainText)),component:n.default,group:null}):t.error("Viewer app is not installed")}))}()}();
//# sourceMappingURL=text-viewer.js.map?v=69968afe3ae444895a7b