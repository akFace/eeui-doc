(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{307:function(t,e,n){},319:function(t,e,n){"use strict";var s=n(307);n.n(s).a},323:function(t,e,n){"use strict";n.r(e);n(305);var s={name:"VProgress",data:function(){return{rand:"",loadIng:""}},methods:{start:function(){var t=this,e=Math.random();this.rand=e,setTimeout(function(){t.rand===e&&(t.loadIng="start")},10)},finish:function(){var t=this;setTimeout(function(){"start"===t.loadIng&&(t.loadIng="end",setTimeout(function(){"end"===t.loadIng&&(t.loadIng="finish")},300))},10)},end:function(){this.finish()}}},a=(n(319),n(43)),i=Object(a.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"myLoading",staticClass:"eeui-loading",class:"eeui-loading-"+this.loadIng})},[],!1,null,"fe2fd586",null);e.default=i.exports},327:function(t,e){t.exports={leftExists:function(t,e,n){return t+="",e+="",!0!==n&&(t=t.toLowerCase(),e=e.toLowerCase()),t.substring(0,e.length)===e},savaToLocal:function(t,e,n,s){try{void 0===s&&(s="__seller__");var a=window.localStorage[s];a?(a=JSON.parse(a))[t]||(a[t]={}):(a={})[t]={},a[t][e]=n,window.localStorage[s]=JSON.stringify(a)}catch(t){}},loadFromlLocal:function(t,e,n,s){void 0===s&&(s="__seller__");var a=window.localStorage[s];return a&&(a=JSON.parse(a)[t])&&a[e]||n},each:function(t,e){var n,s;if(null===t)return t;if(t.length){if("number"==typeof t.length)for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(s in t)if(t.hasOwnProperty(s)&&!1===e.call(t[s],s,t[s]))return t;return t},count:function(t){try{if(void 0===t)return 0;if("number"==typeof t&&(t+=""),"number"==typeof t.length)return t.length;var e,n=0;for(e in t)n++;return n}catch(t){return 0}},randNum:function(t,e){var n=e-t,s=Math.random();return t+Math.round(s*n)},pluginsTypes:function(){return[{name:"component",title:"界面组件"},{name:"module",title:"功能模块"},{name:"media",title:"多媒体"},{name:"sensor",title:"传感器"},{name:"device",title:"设备访问"},{name:"network",title:"网络通信"},{name:"geolocation",title:"地理定位"},{name:"opensdk",title:"开放SDK"}]}}},389:function(t,e,n){},502:function(t,e,n){"use strict";var s=n(389);n.n(s).a},537:function(t,e,n){"use strict";n.r(e);n(94),n(169),n(69),n(44),n(66),n(95),n(305);var s=n(327),a=n(343),i=n.n(a),r={components:{VProgress:n(323).default},data:function(){return{pluginsTypes:Object(s.pluginsTypes)(),key:"",type:"all",loadError:"",lists:[],nextPage:1}},mounted:function(){this.initTypeOrKey(),this.load()},watch:{type:function(t){t&&(window.location.replace("#"+("all"===t?"":t)),this.key="",this.nextPage=1,this.lists=[],this.load())}},methods:{initTypeOrKey:function(){var t=this,e=this.$route.hash+"";if(0===e.indexOf("#")&&(e=e.substr(1)),e){var n=!1;Object(s.each)(this.pluginsTypes,function(s,a){if(e===a.name)return t.key="",t.type=e,n=!0}),n||(this.key=decodeURIComponent(e),this.type="")}},search:function(){window.location.replace("#"+this.key),this.type=this.key?"":"all",this.nextPage=1,this.lists=[],this.load()},load:function(){var t=this;this.loadError="";var e=setTimeout(function(){t.$refs.myLoading.start()},50);i.a.get("https://console.eeui.app/api/plugin?__Access-Control-Allow-Origin=1",{params:{where:{name:this.key,type:this.type},page:this.nextPage,pagesize:30}}).then(function(n){if(clearInterval(e),t.$refs.myLoading.end(),200!==n.status)return t.nextPage=0,void(t.loadError="网络繁忙，请稍后再试......");var s=n.data;1===s.ret?(1===s.data.currentPage&&(t.lists=[]),s.data.lists.forEach(function(e){t.lists.push(e)}),t.nextPage=s.data.hasMorePages?s.data.currentPage+1:0):(t.nextPage=0,t.loadError=s.msg)})},detail:function(t){this.$router.push({path:"detail.html",hash:t})},opendoc:function(){this.$router.push({path:"/plugin/dev/create.html"})}}},o=(n(502),n(43)),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markets-main"},[n("v-progress",{ref:"myLoading"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"markets-body"},[n("div",{staticClass:"title"},[t._v("\n            EEUI.APP 插件市场\n            "),n("Tag",{staticClass:"tag",attrs:{value:"1.x"}})],1),t._v(" "),n("div",{staticClass:"search-opendoc"},[n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{type:"text",placeholder:"搜索插件"},domProps:{value:t.key},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.key=e.target.value)}}}),t._v(" "),n("em",{on:{click:t.search}})])]),t._v(" "),n("div",{staticClass:"type"},[n("div",{class:["all"===t.type?"active":""],on:{click:function(e){t.type="all"}}},[t._v("　全部　")]),t._l(t.pluginsTypes,function(e,s){return n("div",{key:s,class:[t.type===e.name?"active":""],on:{click:function(n){t.type=e.name}}},[t._v(t._s(e.title))])})],2),t._v(" "),n("div",{staticClass:"lists"},t._l(t.lists,function(e,s){return n("div",{key:s,staticClass:"item",on:{click:function(n){return t.detail(e.name)}}},[n("div",{staticClass:"card-title"},[n("div",{staticClass:"name"},[n("span",[t._v(t._s(e.title)+" | "+t._s(e.name))]),t._v(" "),1===e.android?n("div",{staticClass:"logo-android"}):t._e(),t._v(" "),1===e.ios?n("div",{staticClass:"logo-apple"}):t._e()])]),t._v(" "),n("div",{staticClass:"up"},[n("div",{staticClass:"author"},[n("img",{attrs:{src:e.userimg}}),t._v(" "),n("span",[t._v(t._s(e.username))]),t._v(" "),1===e.userid?n("div",{staticClass:"volcano"},[t._v("官方")]):n("div",{staticClass:"purple"},[t._v("开发者")])])]),t._v(" "),n("div",{staticClass:"desc"},[n("span",[t._v(t._s(e.desc))])]),t._v(" "),n("div",{staticClass:"low"},[n("div",{staticClass:"rate"},t._l(5,function(t){return n("em",{key:t})}),0),t._v(" "),n("button",{staticClass:"install"},[t._v("安装")])])])}),0),t._v(" "),t.nextPage>1?n("button",{staticClass:"more",on:{click:t.load}},[t._v("点击加载更多...")]):t.loadError?n("div",{staticClass:"error"},[t._v(t._s(t.loadError))]):t._e()])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"markets-tis"},[this._v("注意：本页面插件 "),e("strong",[this._v("仅支持1.x（"),e("u",[this._v("不支持2.x")]),this._v("）")]),this._v("主程序版本，"),e("a",{attrs:{href:"../"}},[this._v("立即前往2.x插件市场>>")])])}],!1,null,"1f1b5c39",null);e.default=l.exports}}]);