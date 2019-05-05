(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{172:function(t,s,e){"use strict";e.r(s);var i=e(0),r=Object(i.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("img",{attrs:{src:t.$withBase("/system-architect/three-database.png"),alt:"three-database"}}),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("好的关系型数据库设计应减少数据冗余、消除异常，所以关系型数据库数据库设计要遵循一定的规则，这个规则就是范式。目前关系数据库有六种范式：第一范式（1NF）、第二范式（2NF）\n、第三范式（3NF）、巴德斯科范式（BCNF）、第四范式(4NF）和第五范式（5NF，又称完美范式）。一般规范化需要做到满足第三范式。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),e("p",[t._v("在1NF基础上，任何非主属性不依赖于其它非主属性，在2NF基础上消除传递依赖。")]),t._v(" "),t._m(22),t._v(" "),e("p",[t._v("在1NF基础上，任何非主属性不能对主键子集依赖，在3NF基础上消除对主码子集的依赖，即每个表中只有一个候选键。")]),t._v(" "),t._m(23),t._v(" "),e("p",[t._v("消除表中的多值依赖。")]),t._v(" "),e("p",[t._v("因为规则越高表越多，增加了查询复杂度，降低了查询性能。因此通常使用第三范式平衡。")]),t._v(" "),t._m(24),t._v(" "),e("p",[t._v("事务是一系列对数据库更稳更新操作组成的程序执行逻辑单元。\n事务有四个特性，简称 ACID：")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),e("img",{attrs:{src:t.$withBase("/system-architect/transzction.png"),alt:"transzction"}}),t._v(" "),t._m(27),t._v(" "),e("p",[t._v("原子性，代表着事务的执行必须是一个最小的执行单元，必须满足：")]),t._v(" "),t._m(28),t._v(" "),e("p",[t._v("事务中的操作全部成功，事务才能执行成功。")]),t._v(" "),t._m(29),t._v(" "),e("p",[t._v("一致性可以理解为数据上的守恒。不能因为 A => B B发生了变化而 A 没有变化。")]),t._v(" "),t._m(30),t._v(" "),e("p",[t._v("事务与事务之间各自具有完整的数据空间，相互不影响。")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),e("p",[t._v("事务的持久性是指事务一旦提交后，数据库中的数据必须被永久的保存下来。即使服务器系统崩溃或服务器宕机等故障。\n只要数据库重新启动，那么一定能够将其恢复到事务成功结束后的状态。")]),t._v(" "),t._m(34),t._v(" "),e("p",[t._v("事务的并发控制的方式主要是封锁。")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),e("p",[t._v("撤销事务（UNDO）、重做事务（UNDO）。")]),t._v(" "),t._m(39),t._v(" "),e("p",[t._v("需要数据库管理员装入数据库副本和日记文件副本，再由系统进行撤销和重做。")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),e("p",[t._v("对现实世界需要处理的对象及业务进行分析处理，使用数据流图（DFD）生成图像化描述，并使用规范表格进行描述，最后生成需求说明书。")]),t._v(" "),t._m(46),t._v(" "),e("p",[t._v("概念结构分析也被称作建模，最常用的方式是 E-R 模型设计。")]),t._v(" "),t._m(47),t._v(" "),e("p",[t._v("逻辑结构设计主要任务是确定数据模型，将 E-R 图转化为制定数据模型，确定完整性约束，确定用户视图。")]),t._v(" "),t._m(48),t._v(" "),e("p",[t._v("数据库在物理设备上的存储结构及存取方法被称为数据库的物理结构。数据库的物理结构设计是利用 DBMS 提供的方法，以较优的存储结构和存取路径\n、合理的数据存放位置及存储分配，设计出高效可实现的数据库的物理结构。")]),t._v(" "),t._m(49),t._v(" "),e("p",[t._v("数据库应用程序设计是 DBMS 的二次开发。开发人员使用开发语言 （主要是SQL）来进行开发。")]),t._v(" "),t._m(50),t._v(" "),e("p",[t._v("数据库转储和恢复，安全性完整性控制，性能监督、分析改造，数据库的重组和重构等。")]),t._v(" "),t._m(51),t._v(" "),e("p",[t._v("存储在数据库中的所有数据值均正确的状态。防止数据库中存在不符合语义规定的数据和防止因错误信息的输入输出造成无效操作或错误信息。")]),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),e("p",[t._v("设X和Y均为关系R的属性集的子集，F是R上的函数依赖集，若对R的任一属性集B，一旦X→B，必有B⊆Y，且对R的任一满足以上条件的属性集Y1 ，\n必有Y⊆Y1，此时称Y为属性集X在函数依赖集F下的闭包，记作x+。")]),t._v(" "),t._m(55),t._v(" "),e("p",[t._v("然后怎么求闭包呢？")]),t._v(" "),t._m(56),t._m(57),t._v(" "),e("p",[t._v("对于给定的关系R（A1，A2，…An）和函数依赖集F，可将其属性分为4类：")]),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),e("p",[t._v("可能成为候选键的有 L 类，LR 类和 N 类。")]),t._v(" "),t._m(61),t._v(" "),e("p",[t._v("如果函数依赖集F满足下列条件，则称F为最小函数依赖集或最小覆盖。")]),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),t._m(64),t._v(" "),e("p",[t._v("具体操作：若左侧为 AB ，右侧为 CD ，则可分解为 AB→C ， AB→D；去掉其中的一个依赖 AB→C ，然后计算 AB 的闭包 Y，看 Y 是否包含 C，如果包含，AB→C 就是多余依赖；最后判断是否含有左侧依赖。")]),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),t._m(67)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础概念")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("strong",[t._v("元组")]),t._v("：表中的一行就是一个元组。")]),t._v(" "),e("li",[e("strong",[t._v("分量")]),t._v("：元组的某个属性值。在一个关系数据库中，它是一个操作原子，即关系数据库在做任何操作的时候，属性是“不可分的”。否则就不是关系数据库了。")]),t._v(" "),e("li",[e("strong",[t._v("码")]),t._v("：表中可以唯一确定一个元组的某个属性（或者属性组），如果这样的码有不止一个，那么大家都叫候选码，我们从候选码中挑一个出来做老大，它就叫主码。")]),t._v(" "),e("li",[e("strong",[t._v("全码")]),t._v("：如果一个码包含了所有的属性，这个码就是全码。")]),t._v(" "),e("li",[e("strong",[t._v("主属性")]),t._v("：一个属性只要在任何一个候选码中出现过，这个属性就是主属性。")]),t._v(" "),e("li",[e("strong",[t._v("非主属性")]),t._v("：与上面相反，没有在任何候选码中出现过，这个属性就是非主属性。")]),t._v(" "),e("li",[e("strong",[t._v("外码")]),t._v("：一个属性（或属性组），它不是码，但是它别的表的码，它就是外码。")]),t._v(" "),e("li",[e("strong",[t._v("函数依赖")]),t._v("：设R(U)是属性集U上的关系模式。X,Y是U的子集，若对于R(U)的任意一个可能的关系r，r中不可能存在两个元组在X上的属性值相等，而在Y上的属性值不等，则成X函数确定Y或者Y函数依赖与X，   记作：X→Y。")]),t._v(" "),e("li",[e("strong",[t._v("等价")]),t._v("：设有两个命题p和q，如果由p作为条件能使得结论q成立，则称p是q的充分条件；若由q能使p成立则称p是q的必要条件；如果p与q能互推（即无论是由q推出p还是p推出q都成立），则称p是q的充分必要条件，简称充要条件，也称p与q等价。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"关系数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关系数据库","aria-hidden":"true"}},[this._v("#")]),this._v(" 关系数据库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"数据库的结构与模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库的结构与模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库的结构与模式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("数据库的标准结构是"),s("strong",[this._v("三级结构模式")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("外模式：面向用户与应用程序员的用户级")]),this._v(" "),s("li",[this._v("概念模式（模式）：面向建立和维护数据库人员的概念级")]),this._v(" "),s("li",[this._v("内模式：面向系统程序员的物理级")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其中概念模式和内模式只能有一个，而外模式可以有多个。因为我们在存储数据时，"),s("strong",[this._v("模式")]),this._v("是只能以一种结构存储，例如创建学生表。"),s("strong",[this._v("内模式")]),this._v("\n对应我们存储的路径、存储方式、索引方式，所以只能有一种。而外模式对应的是视图，视图是针对基本表而言的，也可以叫虚表，它是抽象出来的\n数据集，可以针对不同的业务生成不同种类的数据集。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"两级映像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两级映像","aria-hidden":"true"}},[this._v("#")]),this._v(" 两级映像")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("外模式/模式映象")]),this._v(" "),s("li",[this._v("模式/内模式映像")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一个模式对应多个外模式，每一个外模式对应一个外模式/模式映象，当模式改变时，数据库管理员改变外模式/模式映象而应用程序无需修改，保证\n"),s("strong",[this._v("逻辑独立性")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一个模式对应一个内模式，当内模式改变时，数据库管理员改变模式/内模式映像无需改变模式，应用程序也无需修改，保证"),s("strong",[this._v("物理独立性")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"数据模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据模型","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据模型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("是数据库结构的基础。数据模型的三要素是"),s("strong",[this._v("数据结构")]),this._v("、"),s("strong",[this._v("数据操作")]),this._v("、"),s("strong",[this._v("数据的约束条件")]),this._v("。常用的数据模型有概念数据模型、基本数据模型\n以及面向对象模型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"实体-联系-e-r模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实体-联系-e-r模型","aria-hidden":"true"}},[this._v("#")]),this._v(" 实体-联系 E-R模型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("E-R 数据模型的三个基本概念："),s("strong",[this._v("实体集、联系集和属性")]),this._v("。在用E-R模型设计数据库时，可以避免两个缺陷：数据冗余和不完整。但是，为了更加合理、科学的设计数据库，又出现了规范化。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"范式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范式","aria-hidden":"true"}},[this._v("#")]),this._v(" 范式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"第一范式（1nf）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一范式（1nf）","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一范式（1NF）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("第一范式要满足数据表中每一个属性都是原子性的")]),this._v("，不能是集合、数组等非原子性数据项。简单而言，就是数据不可再分。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"第二范式（2nf）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二范式（2nf）","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二范式（2NF）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("第二范式要在第一范式基础上满足实体属性完全依赖主键")]),this._v("。旨在消除非主属性对主码的部分函数依赖。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"第三范式（3nf）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三范式（3nf）","aria-hidden":"true"}},[this._v("#")]),this._v(" 第三范式（3NF）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"bc范式（bcnf）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bc范式（bcnf）","aria-hidden":"true"}},[this._v("#")]),this._v(" BC范式（BCNF）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"第四范式（4nf）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四范式（4nf）","aria-hidden":"true"}},[this._v("#")]),this._v(" 第四范式（4NF）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务","aria-hidden":"true"}},[this._v("#")]),this._v(" 事务")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("原子性（Atomicity）")]),this._v(" "),s("li",[this._v("一致性（Consistency）")]),this._v(" "),s("li",[this._v("隔离性（Isolation）")]),this._v(" "),s("li",[this._v("持久性（Duration）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("图片摘自网络")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"原子性（atomicity）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原子性（atomicity）","aria-hidden":"true"}},[this._v("#")]),this._v(" 原子性（Atomicity）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("全部执行成功")]),this._v(" "),s("li",[this._v("全部执行失败")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"一致性（consistency）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一致性（consistency）","aria-hidden":"true"}},[this._v("#")]),this._v(" 一致性（Consistency）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"隔离性-（isolation）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隔离性-（isolation）","aria-hidden":"true"}},[this._v("#")]),this._v(" 隔离性 （Isolation）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"隔离性级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隔离性级别","aria-hidden":"true"}},[this._v("#")]),this._v(" 隔离性级别")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("读未提及（READ_UNCOMMITTED）")]),this._v(" "),s("li",[this._v("读已提交（READ_COMMITTED）")]),this._v(" "),s("li",[this._v("可重复读（REPEATABLE_READ）")]),this._v(" "),s("li",[this._v("顺序读（SERIALIZABLE）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"持久性（duration）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久性（duration）","aria-hidden":"true"}},[this._v("#")]),this._v(" 持久性（Duration）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"并发控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发控制","aria-hidden":"true"}},[this._v("#")]),this._v(" 并发控制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("排他锁 X")]),this._v(" "),s("li",[this._v("共享锁 S")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"数据库的备份与恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库的备份与恢复","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库的备份与恢复")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("数据的转储分为"),s("strong",[this._v("静态转储、动态转储、海量转储和增量转储")]),this._v("。数据库的四类故障是"),s("strong",[this._v("事务故障、系统故障、介质故障和计算机病毒")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"事务故障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务故障","aria-hidden":"true"}},[this._v("#")]),this._v(" 事务故障")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"介质故障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介质故障","aria-hidden":"true"}},[this._v("#")]),this._v(" 介质故障")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"关系数据库设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关系数据库设计","aria-hidden":"true"}},[this._v("#")]),this._v(" 关系数据库设计")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"数据库设计方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库设计方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("数据库设计方法分为四类："),s("strong",[this._v("直观设计法、规范设计法、计算机辅助设计法、自动化设计法")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"数据库设计流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库设计流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("数据库设计分为"),s("strong",[this._v("需求分析、概念结构分析、逻辑结构设计、物理结构设计、应用程序设计和运行维护 6 个阶段")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 需求分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"概念结构分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念结构分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 概念结构分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"逻辑结构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑结构设计","aria-hidden":"true"}},[this._v("#")]),this._v(" 逻辑结构设计")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"物理结构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#物理结构设计","aria-hidden":"true"}},[this._v("#")]),this._v(" 物理结构设计")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"数据库应用程序设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库应用程序设计","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库应用程序设计")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"运行维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行维护","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行维护")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"完整性约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整性约束","aria-hidden":"true"}},[this._v("#")]),this._v(" 完整性约束")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("实体完整性（实体完整性是对关系中的记录唯一性，也就是主键的约束。准确地说，实体完整性是指关系中的主属性值不能为Null且不能有")]),this._v(" "),s("li",[this._v("参照完整性（参照完整性是对关系数据库中建立关联关系的数据表间数据参照引用的约束，也就是对外键的约束。准确地说，参照完整性是指\n关系中的外键必须是另一个关系的主键有效值，或者是NULL。参考完整性维护表间数据的有效性,完整性,通常通过建立外部键联系另一表的主键实\n现,还可以用触发器来维护参考完整性）")]),this._v(" "),s("li",[this._v("用户定义的完整性。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"数据库数学逻辑计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库数学逻辑计算","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库数学逻辑计算")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[this._v("#")]),this._v(" 闭包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("反复读了几遍之后，觉得定义还是最准确的，最好不要用其他的方式代入理解。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("设有关系模式R(U，F)，其中U={A，B，C，D，E，I}，F={A→D，AB→E，BI→E，CD→I，E→C}，计算(AE)+\n(1) 令X={AE}，X(0)=AE\n(2) 分别寻找 A 、E 的推导。 A→D， E→C；所以 X(1) = X(0)DC = ACDE，X(1)≠X(0)，同时可以标记 A→D， E→C 不可重复用。\n(3) 寻找非 A 、E 使用过的推导，并且是 X(1) 的子集。  CD→I；所以 X(2) = X(1)I = ACDEI 函数依赖中已没有 X(2) 的子集，计算结束。\n(AE)+ = ACDEI\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"候选码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#候选码","aria-hidden":"true"}},[this._v("#")]),this._v(" 候选码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("L类  仅出现在函数依赖左部的属性。")]),this._v(" "),s("li",[this._v("R 类  仅出现在函数依赖右部的属性。")]),this._v(" "),s("li",[this._v("N 类  在函数依赖左右两边均未出现的属性。")]),this._v(" "),s("li",[this._v("LR类  在函数依赖左右两边均出现的属性。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("定理")]),t._v("：对于给定的关系模式R及其函数依赖集F，若X（X∈R）是L类属性，则X必为R的任何候选码的成员。")]),t._v(" "),e("li",[e("strong",[t._v("推论")]),t._v("：对于给定的关系模式R及其函数依赖集F，若X（X∈R）是L类属性，且X+包含了R的全部属性；则X必为R的唯一候选码。")]),t._v(" "),e("li",[e("strong",[t._v("定理")]),t._v("：对于给定的关系模式R及其函数依赖集F，若X（X∈R）是R类属性，则X不在任何候选码中。")]),t._v(" "),e("li",[e("strong",[t._v("定理")]),t._v("：对于给定的关系模式R及其函数依赖集F，若X（X∈R）是N类属性，则X必为R的任何候选码的成员。")]),t._v(" "),e("li",[e("strong",[t._v("推论")]),t._v("：对于给定的关系模式R及其函数依赖集F，若X（X∈R）是L类和N类组成的属性集，且X+包含了R的全部属性；则X是R的唯一候选码。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"候选键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#候选键","aria-hidden":"true"}},[this._v("#")]),this._v(" 候选键")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"最小函数依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最小函数依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 最小函数依赖")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("F中的任何一个函数依赖的右部仅含有一个属性；")]),this._v(" "),s("li",[this._v("F中不存在这样一个函数依赖X→A，使得F与F-{X→A}等价；")]),this._v(" "),s("li",[this._v("F中不存在这样一个函数依赖X→A，X有真子集Z使得F-{X→A}∪{Z→A}与F等价。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"去掉函数依赖步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去掉函数依赖步骤","aria-hidden":"true"}},[this._v("#")]),this._v(" 去掉函数依赖步骤")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("用分解的法则，使F中的任何一个函数依赖的右部仅含有一个属性；")]),this._v(" "),s("li",[this._v("去掉多余的函数依赖：从第一个函数依赖X→Y开始将其从F中去掉，然后在剩下的函数依赖中求X的闭包X+，看X+是否包含Y，若是，则去掉X→Y；否则不能去掉，依次做下去。直到找不到冗余的函数依赖；")]),this._v(" "),s("li",[this._v("去掉各依赖左部多余的属性。一个一个地检查函数依赖左部非单个属性的依赖。例如XY→A，若要判Y为多余的，则以X→A代替XY→A是否等价？若A属于(X)+，则Y是多余属性，可以去掉。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("业余时间可以了解离散数学，最近篇幅大都与离散数学相关。F-{X→A} 代表两集合相减，属于 F 不属于 {X→A} 的部分。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"分布式数据库系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式数据库系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 分布式数据库系统")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"商业智能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#商业智能","aria-hidden":"true"}},[this._v("#")]),this._v(" 商业智能")])}],!1,null,null,null);r.options.__file="database.md";s.default=r.exports}}]);