(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08e135fe"],{"676c":function(e,t,a){},"79ec":function(e,t,a){"use strict";a.r(t);var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-header page-header-small"},[a("parallax",{staticClass:"page-header-image",staticStyle:{"background-image":"url('img/bg6.jpg')"}}),e._m(0)],1),a("div",{staticClass:"section section-about-us"},[a("div",{staticClass:"container"},[e._m(1),a("div",{staticClass:"separator separator-primary"}),a("div",{staticClass:"section"},e._l(e.proyectos,function(t){return a("div",{key:t.id,staticClass:"row portafolio-i"},[a("div",{staticClass:"col-md-7",class:t.id%2==0?"order-last":"",attrs:{"data-sal":"zoom-out","data-sal-duration":"750","data-sal-delay":"550"}},[a("img",{attrs:{src:t.img,alt:""}})]),a("div",{staticClass:"col-md-5",class:t.id%2==0?"text-right":"",attrs:{"data-sal":"zoom-out","data-sal-duration":"750","data-sal-delay":"200"}},[a("h3",{staticClass:"mb-1"},[e._v(e._s(t.titulo))]),a("strong",[e._v(e._s(t.tipo))]),a("p",{staticClass:"mt-3"},[e._v(e._s(t.desc))]),a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"proyecto",params:{id:t.id}}}},[e._v("Ver Proyecto")])],1)])}),0),e._m(2)])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-center"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("Aquí es donde se ve lo bueno.")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 ml-auto mr-auto text-center"},[a("h2",{staticClass:"title"},[e._v("Un vistazo a los trabajos realizados")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section text-right"},[a("h4",[e._v("...y los que aún vienen.")])])}],i=a("bd86"),s=(a("ffc1"),a("551c"),a("2af9")),c=a("8f17"),l=a.n(c),u={name:"Portafolio",bodyClass:"landing-page",components:(n={},Object(i["a"])(n,s["c"].name,s["c"]),Object(i["a"])(n,s["g"].name,s["g"]),n),data:function(){return{proyectos:[{img:"/img/proyectos/plastomex.png",titulo:"Plastomex",tipo:"Sitio web - [SPA]",desc:"Sitio web de tipo Single Page Aplication (SPA) para la empresa Plastomex",id:1},{img:"/img/proyectos/jefferson.png",titulo:"Intituto Jefferson Morelia",tipo:"Sitio web",desc:"Sitio web precompilado en Nunjucks, con alimentación de información por enlaces esxternos y JSON",id:2},{img:"/img/proyectos/avopelle.png",titulo:"Avopelle",tipo:"E-commerce",desc:"Sitio web autoadministrable por el cms Wordpress, con trabajo de optimización de rendimiento",id:3},{img:"/img/proyectos/lcconsultoria.png",titulo:"LC Consultoría",tipo:"Landing Page",desc:"Página web tipo landing, para generar presencia web a la empresa, exponer sus obras y proporcionar medios de contactos [En desarrollo]",id:4},{img:"/img/proyectos/plataforma1.png",titulo:"Plataforma Interna",tipo:"Plataforma de administración interna para una agencia ",desc:"Es una plataforma divididad en Front-End (dashboard) y Back-End (cms). Autoadministrable y configurable según las necesidades de la agencia. Realizada con software OpenSource ",id:5}]}},mounted:function(){l()({threshold:.5,once:!0})}},d=u,f=(a("c110"),a("2877")),p=Object(f["a"])(d,r,o,!1,null,null,null);t["default"]=p.exports},"8f17":function(e,t,a){!function(t,a){e.exports=a()}(window,function(){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="dist/",a(a.s=0)}([function(e,t,a){"use strict";function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(a,!0).forEach(function(t){o(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t),a(1);var i={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},s=[],c=null,l=function(e,t){var a=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(a)},u=function(){document.body.classList.add(i.disabledClassName)},d=function(){return i.disabled||"function"==typeof i.disabled&&i.disabled()},f=function(e,t){e.forEach(function(e){e.intersectionRatio>=i.threshold?(function(e){e.target.classList.add(i.animateClassName),l(i.enterEventName,e)}(e),i.once&&t.unobserve(e.target)):i.once||function(e){e.target.classList.remove(i.animateClassName),l(i.exitEventName,e)}(e)})},p=function(){u(),c.disconnect(),c=null},m=function(){document.body.classList.remove(i.disabledClassName),c=new IntersectionObserver(f,{rootMargin:i.rootMargin,threshold:i.threshold}),(s=[].filter.call(document.querySelectorAll(i.selector),function(e){return!function(e){return e.classList.contains(i.animateClassName)}(e,i.animateClassName)})).forEach(function(e){return c.observe(e)})};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;if(e!==i&&(i=r({},i,{},e)),!window.IntersectionObserver)throw u(),Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");return d()?u():m(),{elements:s,disable:p,enable:m}}},function(e,t,a){}]).default})},c110:function(e,t,a){"use strict";var n=a("676c"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-08e135fe.297828e1.js.map