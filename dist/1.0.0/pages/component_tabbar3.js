// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(e){function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=125)}({125:function(e,t,r){var n,s,o=[];o.push(r(50)),n=r(13);var a=r(86);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/component_tabbar3.vue",s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-3fc692ff",s.style=s.style||{},o.forEach(function(e){for(var t in e)s.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,o),e.exports=n,e.exports.el="true",new Vue(e.exports)},13:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tabPages:[{title:"首页",selectedIcon:"tb-home",url:"http://dotwe.org/raw/dist/b5fd96d8d790f0100bdfc20b93eedf09.bundle.wx"},{title:"好友",selectedIcon:"https://eeui.app/assets/images/cartoon/m7.png",unSelectedIcon:"https://eeui.app/assets/images/cartoon/m8.png",url:"http://dotwe.org/raw/dist/ba938c9aaebe41e5f60b98f90bd0bf61.bundle.wx",message:9},{title:"圈子",selectedIcon:"md-aperture",url:"http://dotwe.org/raw/dist/fb6f016b0116969b6b503e1d3a35285f.bundle.wx",message:18},{title:"设置",selectedIcon:"md-settings",unSelectedIcon:"md-settings",url:"http://dotwe.org/raw/dist/ad0045a7cff0b3a680d9de6dd4806e81.bundle.wx",dot:!0}]}}}},50:function(e,t){e.exports={app:{flex:1},tabbar:{flex:1,width:"750"}}},86:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["app"]},[r("tabbar",{ref:"reflectName",staticClass:["tabbar"],attrs:{eeui:{tabType:"bottom"},tabPages:e.tabPages}})])},staticRenderFns:[]},e.exports.render._withStripped=!0}});