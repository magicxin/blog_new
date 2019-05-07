(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{225:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"开始-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始-typescript","aria-hidden":"true"}},[t._v("#")]),t._v(" 开始 Typescript")]),t._v(" "),s("h2",{attrs:{id:"初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化项目")]),t._v(" "),s("p",[t._v("当前按照 "),s("code",[t._v("vue-cli3")]),t._v(" 的方式初始化 Ts 项目，并引入了一些插件。")]),t._v(" "),s("h2",{attrs:{id:"could-not-find-a-declaration-file-for-module-module-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#could-not-find-a-declaration-file-for-module-module-name","aria-hidden":"true"}},[t._v("#")]),t._v(" Could not find a declaration file for module 'module-name'")]),t._v(" "),s("p",[t._v("TsLint 报错，因为 TsLint 要求三方库中必须含有 "),s("code",[t._v("index.d.ts")]),t._v(" 文件。\n解决方案：")]),t._v(" "),s("h3",{attrs:{id:"三方支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三方支持","aria-hidden":"true"}},[t._v("#")]),t._v(" 三方支持")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install -D @types/module-name\n")])])]),s("h3",{attrs:{id:"切换引入方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换引入方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 切换引入方式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const yourModuleName = require('module-name');\n")])])]),s("h3",{attrs:{id:"自己动手，改变包类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自己动手，改变包类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 自己动手，改变包类型")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 新建 module.d.ts\ndeclare module 'vue-awesome-swiper';\n// 之后再引入包就不报错了\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam?r=SearchResults")])]),t._v(" "),s("h3",{attrs:{id:"promise-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" Promise 类型")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"vue-引入图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-引入图片","aria-hidden":"true"}},[t._v("#")]),t._v(" vue 引入图片")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 js 中引入图片，在 promise 中返回")]),t._v("\nExpected property shorthand "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" object literal\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'李利民'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018 01-01'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      avatar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这里的写法")]),t._v("\n      where"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'吉林省泗水村'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确保有值")]),t._v("\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Prop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" avatar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-props","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 props")]),t._v(" "),s("h2",{attrs:{id:"watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch","aria-hidden":"true"}},[t._v("#")]),t._v(" watch")]),t._v(" "),s("h2",{attrs:{id:"使用-beforerouteenter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-beforerouteenter","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 beforeRouteEnter")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-property-decorator'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHooks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeRouteEnter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeRouteLeave'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeRouteUpdate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for vue-router 2.2+")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" beforeRouteEnter\n")])])]),s("h2",{attrs:{id:"property-files-does-not-exist-on-type-eventtarget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#property-files-does-not-exist-on-type-eventtarget","aria-hidden":"true"}},[t._v("#")]),t._v(" Property 'files' does not exist on type 'EventTarget'")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://stackoverflow.com/questions/43176560/property-files-does-not-exist-on-type-eventtarget-error-in-typescript\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);