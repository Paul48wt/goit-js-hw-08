!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,y=Math.max,m=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,u,a,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(O,t),s?b(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function O(){var e=p();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?b(e):(r=i=void 0,a)}function w(){var e=p(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(O,t),b(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,g(n)&&(s=!!n.leading,u=(d="maxWait"in n)?y(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function g(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=a.test(e);return o||f.test(e)?c(e.slice(2),o?2:8):u.test(e)?NaN:+e}var j={},h=document.querySelector(".feedback-form"),O=document.querySelector("button");document.querySelector("input"),document.querySelector("textarea");O.addEventListener("click",(function(e){e.preventDefault(),h.reset()})),h.addEventListener("input",(function(e){j[e.target.name]=e.target.value,n.save(T,j)}));var T="feedback-form-state"}();
//# sourceMappingURL=03-feedback.bfd4faa5.js.map
