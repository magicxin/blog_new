(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(t,r,e){"use strict";e.r(r);var a=e(0),i=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"blur-与-click-事件的冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blur-与-click-事件的冲突","aria-hidden":"true"}},[t._v("#")]),t._v(" blur 与 click 事件的冲突")]),t._v(" "),e("p",[t._v("在表单中，如果是 input 状态，点击会失效。这是因为 javascript 是单线程，同一时间只能处理一个事件。\n如果先触发了 blur 事件，那么 click 事件就不会执行。")]),t._v(" "),e("h2",{attrs:{id:"解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决办法","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),e("ul",[e("li",[t._v("利用 mousedown 事件发生在 blur 之前，将点击事件写到 mousedown 中。")]),t._v(" "),e("li",[t._v("将 blur 事件增加延迟执行。")]),t._v(" "),e("li",[t._v("在 mousedown 中阻止浏览器默认事件，不执行 blur，再执行 click。")])])])}],!1,null,null,null);r.default=i.exports}}]);