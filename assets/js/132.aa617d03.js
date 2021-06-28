(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{646:function(t,a,s){"use strict";s.r(a);var n=s(43),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"navigator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator","aria-hidden":"true"}},[t._v("#")]),t._v(" navigator")]),t._v(" "),s("p",[t._v("众所周知，在浏览器里，我们可以通过前进或者回退按钮来切换页面，iOS/Android 的 "),s("code",[t._v("navigator")]),t._v(" 模块就是用来实现类似的效果的。除了前进、回退功能，该模块还允许我们指定在切换页面的时候是否应用动画效果。")]),t._v(" "),s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h2",{attrs:{id:"push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push","aria-hidden":"true"}},[t._v("#")]),t._v(" push")]),t._v(" "),s("p",[t._v("把一个weex页面URL压入导航堆栈中，可指定在页面跳转时是否需要动画，以及操作完成后需要执行的回调函数")]),t._v(" "),s("h4",{attrs:{id:"push-options-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push-options-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" push(options, callback)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@options")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("url")])]),t._v(", string，要压入的 Weex 页面的 URL")]),t._v(" "),s("li",[s("strong",[s("code",[t._v("animated")])]),t._v(" boolean，页面压入时是否需要动画效果，默认是 “true”。")])])]),t._v(" "),s("li",[s("strong",[t._v("@callback")]),t._v(", 执行完该操作后的回调函数。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" navigator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'navigator'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnavigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://dotwe.org/raw/dist/519962541fcf6acd911986357ad9c2ed.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'callback: '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"pop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pop","aria-hidden":"true"}},[t._v("#")]),t._v(" pop")]),t._v(" "),s("p",[t._v("把一个 Weex 页面 URL 弹出导航堆栈中，可指定在页面弹出时是否需要动画，以及操作完成后需要执行的回调函数。")]),t._v(" "),s("h4",{attrs:{id:"pop-options-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pop-options-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" pop(options, callback)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@options")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("animated")])]),t._v(", boolean，弹出页面时是否需要动画效果，默认是 “true”。")])])]),t._v(" "),s("li",[s("strong",[t._v("@callback")]),t._v(", 执行完该操作后的回调函数。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" navigator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'navigator'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnavigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  animated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'callback: '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[s("code",[t._v("animated")]),t._v(" 二级参数目前仅支持字符串的 "),s("code",[t._v('"true"')]),t._v(" 和 "),s("code",[t._v('"false"')]),t._v("，传入布尔值类型会导致程序崩溃，未来版本会修复这个问题")])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://dotwe.org/vue/5546f1dbd7537a6729cb03c687e885a8",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=r.exports}}]);