(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{496:function(s,t,a){s.exports=a.p+"assets/img/BroadcastChannel.53d53290.png"},613:function(s,t,a){"use strict";a.r(t);var n=a(43),e=Object(n.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[n("code",[s._v("BroadcastChannel")]),s._v(" 接口在 "),n("span",{staticClass:"api-version"},[s._v("v0.9+")]),s._v(" 及以上的版本中可用。")])]),s._v(" "),n("p",[s._v("在 "),n("RouterLink",{attrs:{to:"/guide/platform-difference.html"}},[s._v("Weex 和 Web 的平台差异")]),s._v("中提到过，不同的 Weex 页面使用的是不同的执行环境，即使全局变量也是互相隔离的，然而使用 "),n("code",[s._v("BroadcastChannel")]),s._v(" 是可以实现跨页面通信的。")],1),s._v(" "),n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[s._v("#")]),s._v(" API")]),s._v(" "),n("blockquote",[n("p",[n("em",[s._v("BroadcastChannel")]),s._v(" 是 "),n("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/comms.html#broadcasting-to-other-browsing-contexts",target:"_blank",rel:"noopener noreferrer"}},[s._v("W3C 规范"),n("OutboundLink")],1),s._v("中的一部分，其中依赖的 "),n("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/comms.html#messageevent",target:"_blank",rel:"noopener noreferrer"}},[s._v("MessageEvent"),n("OutboundLink")],1),s._v(" 对象也是。")])]),s._v(" "),n("p",[n("code",[s._v("BroadcastChannel")]),s._v(" 的构造函数只接受一个参数，那就是“频道名称”（channel name）。")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bc "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'007'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),n("p",[n("code",[s._v("BroadcastChannel")]),s._v(" 接口的定义如下：")]),s._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastChannel")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("postMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onmessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MessageEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("ul",[n("li",[n("code",[s._v("name")]),s._v(": 监听的频道名称，用来区分不同的频道（跨频道不可通信）。")]),s._v(" "),n("li",[n("code",[s._v("postMessage")]),s._v(": 用于在当前频道中广播消息。")]),s._v(" "),n("li",[n("code",[s._v("onmessage")]),s._v(": 消息事件的处理函数。在频道中接收到广播消息之后，会给所有订阅者派发消息事件。")]),s._v(" "),n("li",[n("code",[s._v("close")]),s._v(": 关闭当前频道。")])]),s._v(" "),n("p",[s._v("消息对象（"),n("code",[s._v("MessageEvent")]),s._v("）的类型定义如下：")]),s._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageEvent")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "message"')]),s._v("\n  data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h2",{attrs:{id:"通信过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通信过程","aria-hidden":"true"}},[s._v("#")]),s._v(" 通信过程")]),s._v(" "),n("p",[n("img",{attrs:{src:a(496),alt:"BroadcastChannel"}})]),s._v(" "),n("p",[s._v("就像使用无线电一样，每个页面通过创建一个具有相同频道名称的 BroadcastChannel 对象来加入特定频道。 然后实现 "),n("code",[s._v("onmessage")]),s._v(" 接口来监听消息事件。通过调用 BroadcastChannel 对象上的 "),n("code",[s._v("postMessage()")]),s._v(" 方法可以在频道中广播一条消息给所有订阅者。")]),s._v(" "),n("p",[s._v("事实上，这是在特定频道的所有用户之间的全双工（双向）通信，每个订阅者都可以在频道中彼此收发任何消息，即使消息的发送者也能收到自己发出的消息事件。不同频道之间的通信过程是不会互相影响的。")]),s._v(" "),n("p",[s._v("调用 BroadcastChannel 对象的 "),n("code",[s._v("close()")]),s._v(" 方法可以离开一个频道，这个方法只关闭自己，并不影响其他订阅者。当某个 Weex 页面被销毁时，其中的所有订阅者将在 "),n("code",[s._v("destroyInstance")]),s._v(" 中强制关闭。如果某个频道的所有用户都关闭了，这个频道对象将会被销毁，所占内存页能被回收。")]),s._v(" "),n("h2",{attrs:{id:"使用范例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用范例","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用范例")]),s._v(" "),n("p",[s._v("在页面 A 中：")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Steve "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Avengers'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSteve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Assemble!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),n("p",[s._v("在页面 B 中：")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Hulk "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Avengers'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),n("p",[s._v("在页面 C 中：")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Stark "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Avengers'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nStark"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onmessage")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Assemble!")]),s._v("\n  Stark"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'I am Tony and I am leaving now.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("页面 A 、B 、C 都创建一个监听了 "),n("code",[s._v("'Avengers'")]),s._v(" 频道的 BroadcastChannel 对象，它们可以用这个对象实现互相通信。")]),s._v(" "),n("p",[s._v("当 Steve 发布了 "),n("code",[s._v("'Assemble!'")]),s._v(" 消息时，Stark 将收到一个消息事件，其 "),n("code",[s._v("data")]),s._v(" 字段等于 "),n("code",[s._v("'Assemble!'")]),s._v("，然后也向频道中回复一条消息。但是 Hulk 并不会收到这些消息，因为他没有实现"),n("code",[s._v("onmessage")]),s._v(" 方法，相当于没有接收频道中的消息，所以他实际上不是一个订阅者。")]),s._v(" "),n("blockquote",[n("p",[s._v("注释: Hulk 不会收到他自己发送的消息")])]),s._v(" "),n("h2",{attrs:{id:"注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("消息事件中的对象并没有深度复制。")]),s._v("（这个特性可能会修改）")])]),s._v(" "),n("p",[s._v("在页面 A 中：")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" list "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\na"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" list "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),n("p",[s._v("在页面 B 中：")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BroadcastChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onmessage")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the `event.data.list` is a reference of `list` in page A")]),s._v("\n  event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("在这个例子中，页面 B 中的 "),n("code",[s._v("event.data.list")]),s._v(" 实际上是页面 A 中 "),n("code",[s._v("list")]),s._v(" 对象的引用。在页面 B 中给列表添加一项 "),n("code",[s._v("'C'")]),s._v("，也将影响到页面 A 中的 "),n("code",[s._v("list")]),s._v(" 对象。")]),s._v(" "),n("p",[s._v("相比于深度复制，这个行为可以减少页面中的内存消耗。开发者在使用时不应该存储或修改 "),n("code",[s._v("event")]),s._v(" 对象。")])])},[],!1,null,null,null);t.default=e.exports}}]);