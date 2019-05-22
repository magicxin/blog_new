(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{237:function(t,n,e){"use strict";e.r(n);var s=e(0),i=Object(s.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("首次提交的结构如下，这样的结构明显不会让人望而生畏了，目录也很简单。")]),t._v(" "),t._m(1),e("p",[t._v("可以看到，最初引入 jshint 作为代码审查工具，grunt 作为打包工具，从这里也可以看出测试、校验与打包工具是一个项目必不可少的。")]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("当前配置了两个打包工具，一个是 grunt ，一个是component。grunt 用做项目打包工具，component 作为模块打包工具处理静态资源。\n配置了三个命令：")]),t._v(" "),e("ul",[e("li",[t._v("grunt")]),t._v(" "),e("li",[t._v("grunt test")]),t._v(" "),e("li",[t._v("grunt watch\n执行 "),e("code",[t._v("grunt watch")]),t._v(" 时，监听了 src 目录下 js 文件和 component.json 的变化，如果发生变化，就执行 component build 任务。\n执行 "),e("code",[t._v("grunt test")]),t._v(" 时，执行 mocha 测试任务。\n执行 "),e("code",[t._v("grunt")]),t._v(" 时，分别执行 ['jshint', 'component_build', 'mocha'] ，构建生成目录。\n构建工具的使用不在这里分析，如想了解，移步"),e("a",{attrs:{href:"https://magicxin.github.io/blog_new/utils/grunt.html#%E9%9C%80%E8%A6%81%E5%81%9A%E7%9A%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("工具入门"),e("OutboundLink")],1),t._v("\n实际上，这里部署了项目的开发环境，测试环境，生产环境，建立了一套基础的前端工程结构。")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("目标是通过配置文件，实现以下功能：")]),t._v(" "),t._m(5),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"第一次提交"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一次提交","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一次提交")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("src\n├── main.js        # 核心代码 \ntest               # 测试相关 \n├── index.html\n├── test.js\n.gitignore         # git 忽略 \n.jshintrc          # jshint 设置\ncomponent.json     # \npackage.json       # 项目配置文件\nGruntfile.js       # grunt 打包配置\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"打包工具分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包工具分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 打包工具分析")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),n("p",[this._v("可以看到这些工具很多已经过时、停止更新，所以再继续使用这些工具并不合适，所以我会简单了解用到的工具，然后选择更适合的工具来做这些事。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"代码分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码分析")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("模板渲染")]),this._v(" "),n("li",[this._v("视图与模板绑定")]),this._v(" "),n("li",[this._v("数据拦截")]),this._v(" "),n("li",[this._v("事件绑定")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("实现思路："),n("br"),this._v("\n通过配置文件，创建一系列的过程节点标记，通过识别这些标记来重组 dom ，完成后消除过程节点，输出到界面。")])}],!1,null,null,null);n.default=i.exports}}]);