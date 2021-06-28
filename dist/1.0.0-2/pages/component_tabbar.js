// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=38)}({0:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e){return Array.isArray(e)?e:Array.from(e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s={isNullOrUndefined:function(e){return void 0===e||null===e},isFunction:function(e){return!s.isNullOrUndefined(e)&&"function"==typeof e},isObject:function(e){return!s.isNullOrUndefined(e)&&"object"===(void 0===e?"undefined":o(e))},likeArray:function(e){return!s.isNullOrUndefined(e)&&"number"==typeof e.length},isJson:function(e){return s.isObject(e)&&!s.likeArray(e)},getObject:function(e,t){var n=e;if(0===s.count(e)||0===s.count(t))return"";var r=t.replace(/,/g,"|").replace(/\./g,"|").split("|");return s.each(r,function(e,t){n=void 0===n[t]?"":n[t]}),n},each:function(e,t){var n=void 0,r=void 0;if(s.likeArray(e)){if("number"==typeof e.length)for(n=0;n<e.length;n++)if(!1===t.call(e[n],n,e[n]))return e}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(e[r],r,e[r]))return e;return e},last:function(e){var t=!1;return"object"===(void 0===e?"undefined":o(e))&&e.length>0&&(t=e[e.length-1]),t},delLast:function(e){var t=[];return"object"===(void 0===e?"undefined":o(e))&&e.length>0&&s.each(e,function(n,r){n<e.length-1&&t.push(r)}),t},strExists:function(e,t){return e+="",t+="",-1!==e.indexOf(t)},leftExists:function(e,t){return e+="",t+="",e.substring(0,t.length)===t},rightExists:function(e,t){return e+="",t+="",e.substring(e.length-t.length)===t},getMiddle:function(e,t,n){return e+="",s.ishave(t)&&s.strExists(e,t)&&(e=e.substring(e.indexOf(t)+t.length)),s.ishave(n)&&s.strExists(e,n)&&(e=e.substring(0,e.indexOf(n))),e},subString:function(e,t,n){return e+="",s.ishave(n)||(n=e.length),e.substring(t,n)},randomString:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",n=t.length,r="",a=0;a<e;a++)r+=t.charAt(Math.floor(Math.random()*n));return r},ishave:function(e){return!(null===e||"null"===e||void 0===e||"undefined"===e||!e)},zeroFill:function(e,t,n){if(e+="",e.length>=t)return e;for(var r="",a=0;a<t;a++)r+="0";return n||void 0===n?(r+""+e).substr(-1*t):(e+""+r).substr(0,t)},formatDate:function(e,t){if(""===e&&(e="Y-m-d H:i:s"),void 0===t)t=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(t))t*=1e3;else if(/^(-)?\d{1,13}$/.test(t))t*=1e3;else if(/^(-)?\d{1,14}$/.test(t))t*=100;else if(/^(-)?\d{1,15}$/.test(t))t*=10;else{if(!/^(-)?\d{1,16}$/.test(t))return t;t*=1}var n=new Date(t);return parseInt(n.getFullYear())+""=="NaN"?t:(e=e.replace(/Y/g,n.getFullYear()),e=e.replace(/m/g,s.zeroFill(n.getMonth()+1,2)),e=e.replace(/d/g,s.zeroFill(n.getDate(),2)),e=e.replace(/H/g,s.zeroFill(n.getHours(),2)),e=e.replace(/i/g,s.zeroFill(n.getMinutes(),2)),e=e.replace(/s/g,s.zeroFill(n.getSeconds(),2)))},isDate:function(e){var t=/^(\d{4})-(\d{2})-(\d{2})$/,n=e+"";return""!==n&&!(!t.test(n)&&RegExp.$2<=12&&RegExp.$3<=31)},isMobile:function(e){return/^1(3|4|5|7|8)\d{9}$/.test(e)},formatMobile:function(e){return 0===s.count(e)?"":e.substring(0,3)+"****"+e.substring(e.length-4)},clone:function(e){if("object"!==(void 0===e?"undefined":o(e)))return e;if(null===e)return e;if(s.likeArray(e)){return i(e).slice(0)}return a(e,[])},count:function(e){try{if(void 0===e)return 0;if("number"==typeof e&&(e+=""),"number"==typeof e.length)return e.length;var t=0,n=void 0;for(n in e)t++;return t}catch(e){return 0}},runNum:function(e,t){var n=Number(e);if(n+""=="NaN"&&(n=0),/^[0-9]*[1-9][0-9]*$/.test(t)){n=n.toFixed(t);if(n.indexOf(".")<0){n+=".";for(var r=0;r<t;r++)n+="0"}}return n},formatSeconds:function(e){var t=parseInt(e),n=0,r=0;t>60&&(n=parseInt(t/60),t=parseInt(t%60),n>60&&(r=parseInt(n/60),n=parseInt(n%60)));var a=parseInt(t)+"秒";return n>0&&(a=parseInt(n)+"分"+a),r>0&&(a=parseInt(r)+"小时"+a),a},jsonParse:function(e,t){try{return JSON.parse(e)}catch(e){return t||{}}},jsonStringify:function(e,t){try{return JSON.stringify(e)}catch(e){return t||""}},removerNumberNaN:function(){for(var e=[],t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(t){isNaN(Number(t))||e.push(t)}),e},runMax:function(){return Math.max.apply(Math,r(s.removerNumberNaN.apply(s,arguments)))},runMin:function(){return Math.min.apply(Math,r(s.removerNumberNaN.apply(s,arguments)))},stringConnect:function(){for(var e=null,t="",n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return r.forEach(function(n){null===e?e=n:n&&(n&&t&&(t+=e),t+=n)}),t},bytesToSize:function(e){if(0===e)return"0 B";var t=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(1024));return void 0===t[n]?"0 B":s.runNum(e/Math.pow(1024,n),2)+" "+t[n]}};e.exports=s},1:function(e,t,n){"use strict";var r=n(0),a=app.requireModule("eeui"),i={jshome:"https://eeui.app/dist/1.0.0-2/pages/",openViewCode:function(e){i.openViewUrl("https://eeui.app/"+e+".html")},openViewUrl:function(e){a.openPage({url:i.jshome+"index_browser.js",pageType:"app",statusBarColor:"#3EB4FF",params:{title:"EEUI",url:e}})},checkVersion:function(e){return"function"==typeof a.getVersion&&(0,r.runNum)(a.getVersion())>=(0,r.runNum)(e)}};e.exports=i},38:function(e,t,n){var r,a,i=[];i.push(n(39)),r=n(40);var o=n(41);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),a=r=r.default),"function"==typeof a&&(a=a.options),a.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/component_tabbar.vue",a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-f3a30b38",a.style=a.style||{},i.forEach(function(e){for(var t in e)a.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),e.exports=r,e.exports.el="true",new Vue(e.exports)},39:function(e,t){e.exports={app:{flex:1},iconr:{width:"100",height:"100",color:"#ffffff"},tabbar:{width:"750",flex:1},"page-content":{width:"750",paddingTop:"200",justifyContent:"center",alignItems:"center"},"page-navbar":{width:"750",height:"90"},"page-navbar-title":{color:"#ffffff",fontSize:"28"},"page-content-image":{width:"480",height:"480",marginTop:"30",marginBottom:"30"}}},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=app.requireModule("eeui");t.default={methods:{viewCode:function(e){(0,r.openViewCode)(e)},pageSelected:function(e){a.toast({message:"切换到第"+(e.position+1)+"个标签页",gravity:"middle"})},tabReselect:function(e){a.toast({message:"第"+(e.position+1)+"个标签页被再次点击",gravity:"middle"}),a.toast()},refreshListener:function(e){var t=this;setTimeout(function(){a.toast({message:"刷新成功：第"+(e.position+1)+"个标签页",gravity:"middle"}),t.$refs.reflectName.setRefreshing(e.tabName,!1)},1e3)}}}},41:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["app"]},[n("tabbar",{ref:"reflectName",staticClass:["tabbar"],attrs:{eeui:{tabType:"bottom"}},on:{pageSelected:e.pageSelected,tabReselect:e.tabReselect,refreshListener:e.refreshListener}},[n("tabbar-page",{attrs:{eeui:{tabName:"name_1",title:"首页",selectedIcon:"md-home"}}},[n("navbar",{staticClass:["page-navbar"]},[n("navbar-item",{attrs:{type:"back"}}),n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["page-navbar-title"]},[e._v("首页")])]),n("navbar-item",{attrs:{type:"right"},on:{click:function(t){e.viewCode("component/tabbar")}}},[n("icon",{staticClass:["iconr"],attrs:{content:"md-code-working"}})],1)],1),n("div",{staticClass:["page-content"]},[n("text",{staticStyle:{fontSize:"24px"}},[e._v("页签里面可以放任何子组件，感谢你对eeui的支持")]),n("image",{staticClass:["page-content-image"],attrs:{src:"https://eeui.app/assets/images/cartoon/m2.png"}})])],1),n("tabbar-page",{attrs:{eeui:{tabName:"name_2",title:"好友",message:3,selectedIcon:"https://eeui.app/assets/images/cartoon/m8.png",unSelectedIcon:"https://eeui.app/assets/images/cartoon/m7.png"}}},[n("navbar",{staticClass:["page-navbar"]},[n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["page-navbar-title"]},[e._v("好友")])])],1),n("div",{staticClass:["page-content"]},[n("text",{staticStyle:{fontSize:"24px"}},[e._v("page 2，图标支持网络图片")])])],1),n("tabbar-page",{attrs:{eeui:{tabName:"name_3",title:"圈子",message:99,selectedIcon:"md-aperture"}}},[n("navbar",{staticClass:["page-navbar"]},[n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["page-navbar-title"]},[e._v("圈子")])])],1),n("div",{staticClass:["page-content"]},[n("text",{staticStyle:{fontSize:"24px"}},[e._v("page 3")])])],1),n("tabbar-page",{attrs:{eeui:{tabName:"name_4",title:"设置",dot:!0,selectedIcon:"md-cog"}}},[n("navbar",{staticClass:["page-navbar"]},[n("navbar-item",{attrs:{type:"title"}},[n("text",{staticClass:["page-navbar-title"]},[e._v("设置")])])],1),n("div",{staticClass:["page-content"]},[n("text",{staticStyle:{fontSize:"24px"}},[e._v("page 4")])])],1)],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});