// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=42)}({42:function(e,t,r){var n,o,a=[];a.push(r(43)),n=r(44);var s=r(45);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/component_tabbar2.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-3fb87b7e",o.style=o.style||{},a.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,a),e.exports=n,e.exports.el="true",new Vue(e.exports)},43:function(e,t){e.exports={app:{flex:1},tabbar:{flex:1,width:"750"}}},44:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tabPages:[{title:"首页",url:"http://dotwe.org/raw/dist/b5fd96d8d790f0100bdfc20b93eedf09.bundle.wx"},{title:"好友",url:"http://dotwe.org/raw/dist/ba938c9aaebe41e5f60b98f90bd0bf61.bundle.wx",message:9},{title:"圈子",url:"http://dotwe.org/raw/dist/fb6f016b0116969b6b503e1d3a35285f.bundle.wx",message:18},{title:"设置",url:"http://dotwe.org/raw/dist/ad0045a7cff0b3a680d9de6dd4806e81.bundle.wx",dot:!0}]}}}},45:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["app"]},[r("tabbar",{ref:"reflectName",staticClass:["tabbar"],attrs:{eeui:{tabType:"top",textBold:2},tabPages:e.tabPages}})])},staticRenderFns:[]},e.exports.render._withStripped=!0}});