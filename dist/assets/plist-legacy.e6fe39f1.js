!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,c,i=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(a){u=!0,c=a}finally{try{o||null==t.return||t.return()}finally{if(u)throw c}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.ee34998a.js","./useT-legacy.d8c8e399.js","./File-legacy.3da862f5.js","./useUtil-legacy.09c1943b.js","./api-legacy.91728d8b.js","./icon-legacy.14955c6e.js","./index-legacy.47ccf92e.js","./Layout-legacy.2419f1f9.js","./useTitle-legacy.f741ebb0.js","./Markdown-legacy.e57a2707.js","./index-legacy.96f2e986.js","./FolderTree-legacy.bd1cc464.js","./obj-legacy.97e43e8b.js"],(function(n){"use strict";var t,r,c,i,o,u;return{setters:[function(e){t=e.d,r=e.e,c=e.B,i=e.o},function(e){o=e.u},function(e){u=e.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){n("default",(function(){var n=o(),a=e(t(!1),2),l=a[0],f=a[1];return r(u,{get children(){return r(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+i.raw_url},onClick:function(){f(!0)},get children(){return n("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();