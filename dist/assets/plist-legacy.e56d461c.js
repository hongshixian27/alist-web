!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,a=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(c){u=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.5b9784ac.js","./useT-legacy.48d38145.js","./File-legacy.374f878d.js","./useUtil-legacy.e97de047.js","./api-legacy.9aeb0991.js","./icon-legacy.7816f7d2.js","./index-legacy.19a581b9.js","./Layout-legacy.378eb480.js","./useTitle-legacy.ef70dfe6.js","./Markdown-legacy.23931882.js","./index-legacy.ef8a97ef.js","./FolderTree-legacy.3a45aa9c.js","./obj-legacy.97e43e8b.js"],(function(n){"use strict";var t,r,i,a,o,u;return{setters:[function(e){t=e.d,r=e.e,i=e.B,a=e.o},function(e){o=e.u},function(e){u=e.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){n("default",(function(){var n=o(),c=e(t(!1),2),l=c[0],f=c[1];return r(u,{get children(){return r(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+a.raw_url},onClick:function(){f(!0)},get children(){return n("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
