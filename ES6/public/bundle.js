(()=>{"use strict";function e(o){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(o)}function o(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function t(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){return(r=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function c(o,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function l(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,o,t){return o&&l(e.prototype,o),t&&l(e,t),e}var f=new(function(e){!function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&r(e,o)}(l,e);var o,t,n=(o=l,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=u(o);if(t){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)});function l(){var e;return i(this,l),(e=n.call(this)).usuario="Diego",e}return a(l,[{key:"mostraUsuario",value:function(){console.log(this.usuario)}}]),l}(function(){function e(){i(this,e),this.data=[]}return a(e,[{key:"add",value:function(e){this.data.push(e),console.log(this.data)}}]),e}()));document.getElementById("novotodo").onclick=function(){f.add("Novo Tudo")},f.mostraUsuario();var s=function(){function e(){i(this,e)}return a(e,null,[{key:"soma",value:function(e,o){return e+o}}]),e}();console.log(s.soma(1,2));var p=[1,3,4,5,8,9],y=p.map((function(e,o){return e+o}));console.log(y),p.reduce((function(e,o){return e+o})),p.filter((function(e){return e%2==0})),p.find((function(e){return 4===e})),p.map((function(e){return e+2})),p.map((function(e){return e+2})),console.log(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return e+o}(3,4));var d={nomeDesestruturacao:"Will",idade:26,endereco:{cidade:"Belém",estado:"PA"}},b=d.nomeDesestruturacao,g=d.idade,m=d.endereco,O=m.cidade;m.estado,console.log(b),console.log(O),console.log(g),function(e){console.log(e.nome)}(d),function(e){var o=e.nome,t=e.idade;console.log(o,t)}(d);var v={nomeUsuario:"Will",idade:26,endereco:{cidade:"Belém",estado:"PA"}},h=v.nomeUsuario,j=function(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(v,["nomeUsuario"]);console.log(h),console.log(j);var P=[1,2,3,4],w=P[0],S=P[1],D=P.slice(2);console.log(w),console.log(S),console.log(D),console.log(function(){for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];return o.reduce((function(e,o){return e+o}))}(1,50,3));var _=[].concat([1,2,3],[4,5,6]);console.log(_);var k=t(t({},{nomeUsuario:"Will",idade:26,endereco:{cidade:"Belém",estado:"PA"}}),{},{nomeUsuario:"Pedrinho"});console.log(k),console.log("{Meu nome é ".concat("Will"," e tenho ").concat(23," anos}")),console.log(300),console.log(-100),console.log(-100)})();