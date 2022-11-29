/*! For license information please see main.js.LICENSE.txt */
!function(){var e={465:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FORMAT_PLAIN=t.FORMAT_HTML=t.FORMATS=void 0;var r="html";t.FORMAT_HTML=r;var n="plain";t.FORMAT_PLAIN=n;var o=[r,n];t.FORMATS=o},814:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LINE_ENDINGS=void 0,t.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},920:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SUPPORTED_PLATFORMS=void 0,t.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},320:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UNIT_WORDS=t.UNIT_WORD=t.UNIT_SENTENCES=t.UNIT_SENTENCE=t.UNIT_PARAGRAPHS=t.UNIT_PARAGRAPH=t.UNITS=void 0;var r="words";t.UNIT_WORDS=r;var n="word";t.UNIT_WORD=n;var o="sentences";t.UNIT_SENTENCES=o;var i="sentence";t.UNIT_SENTENCE=i;var a="paragraphs";t.UNIT_PARAGRAPHS=a;var u="paragraph";t.UNIT_PARAGRAPH=u;var c=[r,n,o,i,a,u];t.UNITS=c},464:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WORDS=void 0,t.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},830:function(e,t,r){"use strict";Object.defineProperty(t,"Ap",{enumerable:!0,get:function(){return o.default}});r(465),r(320),r(464);var n,o=(n=r(391))&&n.__esModule?n:{default:n}},391:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(465),i=r(814),a=(n=r(887))&&n.__esModule?n:{default:n},u=r(477);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.FORMAT_PLAIN,n=arguments.length>2?arguments[2]:void 0;if(c(this,e),this.format=r,this.suffix=n,f(this,"generator",void 0),-1===o.FORMATS.indexOf(r.toLowerCase()))throw new Error("".concat(r," is an invalid format. Please use ").concat(o.FORMATS.join(" or "),"."));this.generator=new a.default(t)}var t,r;return t=e,(r=[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,u.isReactNative)()&&(0,u.isNode)()&&(0,u.isWindows)()?i.LINE_ENDINGS.WIN32:i.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(e){return this.format===o.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{key:"formatStrings",value:function(e){var t=this;return e.map((function(e){return t.formatString(e)}))}},{key:"generateWords",value:function(e){return this.formatString(this.generator.generateRandomWords(e))}},{key:"generateSentences",value:function(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{key:"generateParagraphs",value:function(e){var t=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,u.makeArrayOfStrings)(e,t)).join(this.getLineEnding())}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),d=l;t.default=d},887:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(464),o=r(477);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.sentencesPerParagraph,o=void 0===r?{max:7,min:3}:r,a=t.wordsPerSentence,c=void 0===a?{max:15,min:5}:a,s=t.random,f=(t.seed,t.words),l=void 0===f?n.WORDS:f;if(i(this,e),u(this,"sentencesPerParagraph",void 0),u(this,"wordsPerSentence",void 0),u(this,"random",void 0),u(this,"words",void 0),o.min>o.max)throw new Error("Minimum number of sentences per paragraph (".concat(o.min,") cannot exceed maximum (").concat(o.max,")."));if(c.min>c.max)throw new Error("Minimum number of words per sentence (".concat(c.min,") cannot exceed maximum (").concat(c.max,")."));this.sentencesPerParagraph=o,this.words=l,this.wordsPerSentence=c,this.random=s||Math.random}var t,r;return t=e,(r=[{key:"generateRandomInteger",value:function(e,t){return Math.floor(this.random()*(t-e+1)+e)}},{key:"generateRandomWords",value:function(e){var t=this,r=this.wordsPerSentence,n=r.min,i=r.max,a=e||this.generateRandomInteger(n,i);return(0,o.makeArrayOfLength)(a).reduce((function(e,r){return"".concat(t.pluckRandomWord()," ").concat(e)}),"").trim()}},{key:"generateRandomSentence",value:function(e){return"".concat((0,o.capitalize)(this.generateRandomWords(e)),".")}},{key:"generateRandomParagraph",value:function(e){var t=this,r=this.sentencesPerParagraph,n=r.min,i=r.max,a=e||this.generateRandomInteger(n,i);return(0,o.makeArrayOfLength)(a).reduce((function(e,r){return"".concat(t.generateRandomSentence()," ").concat(e)}),"").trim()}},{key:"pluckRandomWord",value:function(){var e=this.words.length-1,t=this.generateRandomInteger(0,e);return this.words[t]}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),s=c;t.default=s},100:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)}},477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"capitalize",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"isNode",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"isReactNative",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"isWindows",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"makeArrayOfLength",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"makeArrayOfStrings",{enumerable:!0,get:function(){return c.default}});var n=s(r(100)),o=s(r(324)),i=s(r(384)),a=s(r(940)),u=s(r(271)),c=s(r(991));function s(e){return e&&e.__esModule?e:{default:e}}},324:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return!!e.exports}},384:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){var e=!1;try{e="ReactNative"===navigator.product}catch(t){e=!1}return e}},940:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(920);t.default=function(){var e=!1;try{e=process.platform===n.SUPPORTED_PLATFORMS.WIN32}catch(t){e=!1}return e}},271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map((function(e,t){return t}))}},991:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(271))&&n.__esModule?n:{default:n};t.default=function(e,t){return(0,o.default)(e).map((function(){return t()}))}},316:function(e,t,r){var n=r(872).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),u=new R(n||[]);return a(i,"_invoke",{value:O(e,r,u)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var h={};function v(){}function m(){}function y(){}var g={};l(g,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(L([])));w&&w!==r&&i.call(w,c)&&(g=w);var _=y.prototype=v.prototype=Object.create(g);function P(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,a,u,c){var s=p(e[o],e,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&i.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,u,c)}),(function(e){r("throw",e,u,c)})):t.resolve(l).then((function(e){f.value=e,u(f)}),(function(e){return r("throw",e,u,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}})}function O(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=p(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:T}}function T(){return{value:void 0,done:!0}}return m.prototype=y,a(_,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,f,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,f,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},P(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(d(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},P(_),l(_,f,"Generator"),l(_,c,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},872:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},93:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(316)();e.exports=o;try{regeneratorRuntime=o}catch(e){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function i(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,o(e,t,"get"))}var a=r(93),u=r.n(a),c=JSON.parse('{"id":"acode.plugin.loremipsum"}'),s=r(830);function f(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}var l=acode.require("prompt"),d=acode.require("select"),p=new WeakMap,h=new WeakMap,v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,h,{get:m,set:void 0}),f(this,p,{writable:!0,value:void 0})}var r,a,c,v,y,g;return r=e,a=[{key:"init",value:(g=t(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this,r=p,n=new s.Ap,function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(t,o(t,r,"set"),n),this.quickRun=this.quickRun.bind(this),i(this,h).forEach((function(e){editorManager.editor.commands.addCommand(e)}));case 3:case"end":return e.stop()}var t,r,n}),e,this)}))),function(){return g.apply(this,arguments)})},{key:"quickRun",value:(y=t(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("Words",10);case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:r=i(this,p).generateWords(+t),editorManager.editor.insert(r);case 7:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})},{key:"run",value:(v=t(u().mark((function e(){var t,r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("Lorem Ipsum",["Words","Sentences","Paragraphs"],{default:"Words"});case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,l(t,10);case 7:if(r=e.sent){e.next=10;break}return e.abrupt("return");case 10:n=i(this,p)["generate".concat(t)](+r),editorManager.editor.insert(n);case 12:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"destroy",value:(c=t(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(this,h).forEach((function(e){editorManager.editor.commands.removeCommand(e)}));case 1:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})}],a&&n(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();function m(){return[{name:"quicklorem",description:"Quick Lorem Ipsum",exec:this.quickRun.bind(this)},{name:"lorem",description:"Lorem Ipsum",exec:this.run.bind(this)}]}if(window.acode){var y=new v;acode.setPluginInit(c.id,(function(e,t,r){var n=r.cacheFileUrl,o=r.cacheFile;e.endsWith("/")||(e+="/"),y.baseUrl=e,y.init(t,o,n)})),acode.setPluginUnmount(c.id,(function(){y.destroy()}))}}()}();