(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{351:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(5);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(p,e);var t,n,r,l,f=(t=p,function(){var e,n=u(t);if(c()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function p(){var e;return o(this,p),(e=f.apply(this,arguments)).active=!1,e}return n=p,(r=[{key:"shouldUpdate",value:function(){return this.active}}])&&i(n.prototype,r),l&&i(n,l),p}(r.a);f([Object(r.e)({type:Boolean})],p.prototype,"active",void 0)},352:function(e,t,n){"use strict";var r=n(5),o=n(12),i=n(32),a=new WeakMap,c=Object(i.b)((function(e){return function(t){if(!(t instanceof i.a))throw new Error("unsafeHTML can only be used in text bindings");var n=a.get(t);if(void 0===n||!Object(o.f)(e)||e!==n.value||t.value!==n.fragment){var r=document.createElement("template");r.innerHTML=e;var c=document.importNode(r.content,!0);t.setValue(c),a.set(t,{value:e,fragment:c})}}})),u=r.b`:host{display:grid;grid-template-areas:"article article article article article";grid-template-columns:2fr 5fr 1fr 1fr 1fr;grid-gap:48px;margin:64px 0;box-sizing:border-box}:host *{box-sizing:border-box}article{position:relative;grid-area:article;padding:32px;font-size:1.1rem;background-color:#f7f7f7}article:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}blockquote{position:relative;display:block;padding:16px 32px 0 32px;margin:0;background-color:#faebd7;z-index:1}blockquote:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMgMyIgd2lkdGg9IjMiIGhlaWdodD0iMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMyAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzI0MkE0OTtmaWxsOiM0RUM4RjA7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:0}@media only screen and (min-width:640px){:host{grid-template-areas:"article article article article";grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:48px}article{padding:32px 32px 32px 128px}}@media only screen and (min-width:1024px){:host{grid-template-areas:"article article article . .";grid-template-columns:2fr 5fr 1fr 1fr 1fr;padding-right:32px}}`;function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      <article>\n        ","\n      </article>\n    "]);return s=function(){return e},e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(m,e);var t,n,o,i,a=(t=m,function(){var e,n=b(t);if(d()){var r=b(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function m(){var e;return l(this,m),(e=a.apply(this,arguments)).content="",e}return n=m,i=[{key:"styles",get:function(){return[u]}}],(o=[{key:"render",value:function(){return console.log("content",this.content),Object(r.d)(s(),c(this.content))}}])&&f(n.prototype,o),i&&f(n,i),m}(r.a);h([Object(r.e)({type:String})],y.prototype,"content",void 0),y=h([Object(r.c)("app-content")],y)},353:function(e,t,n){"use strict";var r=n(5),o=r.b`:host{display:block}:host *{box-sizing:border-box}h1,h2,h4{margin:0}h4{margin-bottom:1em}section{display:grid;grid-template-areas:"header header header header header" "image image image image image" "address address address address ." ". . . . ." "phone phone phone phone ." "times times times times .";grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-gap:24px}header{grid-area:header;display:flex;flex-direction:column;justify-content:flex-end}h1,h2{padding-left:32px}h2{color:#7b7b7b}h1{display:flex;flex-direction:column;font-size:2em;letter-spacing:.067em}h1 span{margin-right:auto}img{position:relative;grid-area:image;display:inline-block;width:100%;height:auto;max-height:316px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}img:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.address{position:relative;grid-area:address;padding:24px;font-style:normal;background-color:#f7f7f7}.phone{position:relative;grid-area:phone;padding:24px;background-color:#f7f7f7}.address:before,.phone:before,.times:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(12px,12px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzIDMiIHdpZHRoPSczJyBoZWlnaHQ9JzMnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMgMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyNDJBNDk7fQo8L3N0eWxlPgo8Zz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMC41Ii8+CjwvZz4KPC9zdmc+Cg==);background-repeat:repeat;background-position:bottom right;z-index:-1}.times{position:relative;grid-area:times;padding:24px}.times.open{background-color:#b7e4cf}.times.closed{background-color:#e34262}.times .time-state{position:absolute;top:-10%;right:-120px;bottom:0;height:32px;width:120px;font-size:32px;font-weight:600;transform:rotate(90deg);transform-origin:top left;transform-style:preserve-3D}.times .time-row{display:flex;max-width:200px}.times .time-row time{margin-left:auto}@media only screen and (min-width:376px){section{grid-template-areas:"header header header header ." ". image image image image" "address address address . ." ". . . . ." ". phone phone phone ." "times times times . .";grid-template-columns:1fr 1fr 1fr 1fr}}@media only screen and (min-width:640px){section{grid-template-areas:"header header header ." "image image image ." ". address address ." "phone phone times times";grid-template-columns:1fr 1fr 1fr 1fr}h1,h2{padding-left:128px}.times .time-state{top:-20%}}@media only screen and (min-width:1024px){section{grid-template-areas:"header header . . . " "header header times times ." "image image times times ." "image image phone phone ." "image image address address ." "image image address address .";grid-template-columns:2fr 5fr 1fr 1fr 1fr;grid-gap:32px}.times .time-state{top:-25%}}`;function i(){var e=u(['\n        <div class="phone">\n        <h4>Terminvereinbarungen</h4>\n        <p>Rufen Sie einfach an:<br>\n        <b>0221 / 79 50 14</b></p>\n        </div>\n        ']);return i=function(){return e},e}function a(){var e=u(['\n        <a class="phone" href="tel:+49221795014">\n          <h4>Terminvereinbarungen</h4>\n          <p>Rufen Sie einfach an:<br>\n          <b>0221 / 79 50 14</b></p>\n        </a>\n        ']);return a=function(){return e},e}function c(){var e=u(['\n      <section>\n        <header>\n          <h2>Zahnärzte</h2>\n          <h1>Dr. Karina Hilgner<br><span></span>Dr. Benjamin Vogt</h1>\n        </header>\n        <img class="image" src="https://www.jansenhilgner.de/s/cc_images/teaserbox_2475391191.jpg?t=1495791926">\n        <address class="address">\n          <h4>Anschrift</h4>\n          Zahnarztpraxis Hilgner & Vogt<br>\n          Weilerweg 33<br>\n          50765 Köln\n        </address>\n        ','\n        <div class="times ','">\n          <h4>Öffnungszeiten</h4>\n          <span class="time-row"><b>Mo-Do:</b><time>08:00 - 20:00 Uhr</time></span>\n          <span class="time-row"><b>Fr:</b><time>07:00 - 19:00 Uhr</time></span>\n          <span class="time-state">',"</span>\n        </div>\n      </section>\n    "]);return c=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":b(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(m,e);var t,n,u,b,g=(t=m,function(){var e,n=p(t);if(f()){var r=p(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function m(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=g.call(this))._date=new Date,e._businessOpen=!1,setInterval((function(){e._date=new Date,e._checkOpen(),console.log("date",e._date,e._date.getDay())}),1e3),e}return n=m,b=[{key:"styles",get:function(){return[o]}}],(u=[{key:"render",value:function(){var e=this._businessOpen?"open":"closed";return Object(r.d)(c(),this._businessOpen?Object(r.d)(a()):Object(r.d)(i()),e,e)}},{key:"_checkOpen",value:function(){var e=this._date.getDay(),t=this._date.getHours(),n=this._date.getMinutes(),r=this._date.getSeconds();return console.log("".concat(e,":").concat(t,":").concat(n,":").concat(r)),6===e||7===e?(console.log("closed sa-so"),this._businessOpen=!1):e>=1&&e<=4&&t>=8||t<20?(console.log("open mo-do"),this._businessOpen=!0):5===e&&t>=7||t<19?(console.log("open fr"),this._businessOpen=!0):(console.log("closed ruhezeit"),this._businessOpen=!1)}}])&&s(n.prototype,u),b&&s(n,b),m}(r.a);g([Object(r.e)({type:Date})],m.prototype,"_date",void 0),g([Object(r.e)({type:Boolean})],m.prototype,"_businessOpen",void 0),m=g([Object(r.c)("section-intro")],m)},355:function(e,t){e.exports="<h1 id=zahnärzte>Zahnärzte</h1> <h2 id=dr-karina-hilgner-zahnärztin>Dr. Karina Hilgner Zahnärztin</h2> <p>1981<br>Abitur in Polen, Tarnowski Gory</p> <p>1983<br>Abitur in Deutschland, Geilenkirchen</p> <p>1983<br>Studium der Zahnmedizin an der Heinrich-Heine-Universität Düsseldorf</p> <p>1989<br>Staatsexamen und Approbation als Zahnarzt</p> <p>1989<br>Assistenzzeit in Düsseldorf und Mönchengladbach</p> <p>1992<br>Niederlassung in eigener Praxis in Köln Volkhoven-Weiler</p> <p>1996<br>Promotion</p> <h4 id=mitgliedschaften>Mitgliedschaften</h4> <ul> <li><p>Zahnärztekammer Nordrhein</p> </li> <li><p>Dt. Gesellschaft für Zahn-, Mund- und Kieferheilkunde</p> </li> <li><p>Dt. Gesellschaft für Kinderheilkunde</p> </li> <li><p>Zahnärzteinitiative Köln</p> </li> </ul> "},356:function(e,t){e.exports="<h2 id=dr-benjamin-vogt>Dr. Benjamin Vogt</h2> <p>Verheiratet, 3 Kinder</p> <p>2011 Abitur, Marienschule Opladen, Gymnasium des Erzbistums Köln</p> <p>2012-2017 Studium der Zahnmedizin in Regelstudienzeit an der Universität zu Köln</p> <p>2017-2019 Assistenzzeit in Monheim und Köln</p> <p>2019 Promotion zum Dr. med. dent. </p> <p>2019-2020 Angestellter Zahnarzt in Köln</p> <p>2020 Niederlassung in eigener Praxis in Köln Volkhoven-Weiler</p> "},358:function(e,t,n){"use strict";n.r(t),n.d(t,"ViewAbout",(function(){return y}));var r=n(5),o=n(351),i=(n(353),n(352),n(355)),a=n.n(i),c=n(356),u=n.n(c);function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n      <app-content content=","></app-content>\n      <app-content content=","></app-content>\n    "]);return s=function(){return e},e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(m,e);var t,n,o,i,c=(t=m,function(){var e,n=b(t);if(d()){var r=b(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function m(){return l(this,m),c.apply(this,arguments)}return n=m,(o=[{key:"render",value:function(){return Object(r.d)(s(),a.a,u.a)}}])&&f(n.prototype,o),i&&f(n,i),m}(o.a);y=h([Object(r.c)("view-about")],y)}}]);