(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{186:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"转换放法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换放法","aria-hidden":"true"}},[t._v("#")]),t._v(" 转换放法")]),t._v(" "),s("h2",{attrs:{id:"tostring-tolocalstring-与-valueof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tostring-tolocalstring-与-valueof","aria-hidden":"true"}},[t._v("#")]),t._v(" toString() toLocalString() 与 valueOf()")]),t._v(" "),s("p",[t._v("每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也被称作隐式类型转换")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "12"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "null"')]),t._v("\n")])])]),s("h2",{attrs:{id:"不同数据类型下的表现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同数据类型下的表现","aria-hidden":"true"}},[t._v("#")]),t._v(" 不同数据类型下的表现")]),t._v(" "),s("h3",{attrs:{id:"null-undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null-undefined","aria-hidden":"true"}},[t._v("#")]),t._v(" Null Undefined")]),t._v(" "),s("p",[t._v("因为 toString() 是 Object 对象方法，null 指向空，内存中也没有生成任何对象。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// VM29413:1 Uncaught TypeError: Cannot read property 'toString' ")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// of null at <anonymous>:1:6")]),t._v("\n\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("但是 nullable（比如 number?） 是可以使用 toString() 的，因为虽然可以是 null ，但实际上此时的 null 是有类型的，只不过值是空。\n强制类型转换 String() 兼容 Null 和 Undefined ，其余的转换结果是相同的。")])]),t._v(" "),s("p",[t._v("undefined 和 null 原理是一样的。")]),t._v(" "),s("h3",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[t._v("#")]),t._v(" String")]),t._v(" "),s("p",[t._v("字符串在使用 toString() 没有任何问题，因为返回的就是它本身的值。")]),t._v(" "),s("h3",{attrs:{id:"number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number","aria-hidden":"true"}},[t._v("#")]),t._v(" Number")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught SyntaxError: Invalid or unexpected token")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n")])])]),s("p",[t._v("对于 1 来说，javascript 引擎无法判断这里的 "),s("code",[t._v(".")]),t._v(" 是 float 型的 "),s("code",[t._v(".")]),t._v(" 还是对象的操作符 "),s("code",[t._v(".")]),t._v(" 。1 （空格）和 "),s("code",[t._v("()")]),t._v(" 运算符效果相似，他们都会\n返回表达式的值，然后会被包装成为 Number 类，Number 类重写了 Object 的 toString 方法。对于 1.. ， javascript 的 float 类型允许存在\n"),s("code",[t._v("1.")]),t._v(" 这种写法，这样就可以判断出第二个 "),s("code",[t._v(".")]),t._v(" 一定是对象的操作符 "),s("code",[t._v(".")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tue")]),t._v("\n")])])]),s("p",[t._v("javascript 引擎可以直接识别出 "),s("code",[t._v("true")]),t._v("、"),s("code",[t._v("false")]),t._v("，并转换为包装类型 "),s("code",[t._v("Boolean")]),t._v("，Boolean 类重写了 Object 的 toString 方法。")]),t._v(" "),s("h3",{attrs:{id:"object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object","aria-hidden":"true"}},[t._v("#")]),t._v(" Object")])])}],!1,null,null,null);e.options.__file="transfer.md";a.default=e.exports}}]);