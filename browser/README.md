# 网络协议
虽然已熟悉了从C端到后台到服务端的整体流程，但是对于协议层仍属于一知半解的状态，故在此记录深入网络协议层的
学习。
## 揭秘互联网
互联网的本质就是一系列网络协议。如果两个人打电话，那么需要两个人同时将普通话才能沟通；如果想要在两台操作系统间进行交互
，也需要这样一种语言进行沟通，它就是网络协议。作为协议需要有一定的标准，大家都按照这个标准来实现，那么 internet 的接入
和通讯就没有什么问题了。
## osi 七层协议与 tcp/ip 五层/四层协议

<img :src="$withBase('/browser/protocol.png')" alt="fps">

简单的来说， osi 七层协议是理论协议，真正的实现是 tcp/ip 四层协议。而实现的概念就是 tcp/ip 五层协议。
- osi : 应用层（Application）、表示层（Presentation）、会话层（Session）、传输层（Transport）、网络层（Network）、数据链路层（Data Link）、物理层（Physical）
- tcp/ip 5层 ： 应用层、运输层、网络层、数据链路层和物理层
- tcp/ip 4层 ： 应用层、运输层、网络层、网络接口层
### 物理层
基于电子特性发送电信号，高电压 => 1 ，低电压 => 0。
### 数据链路层
定义了电信号的分组方式，标准的方式 ethernet （以太网协议）
以太网协议规定：
- 一组电信号构成一个数据包，叫做‘帧’
- 每一数据帧分成：报头head和数据data两部分
- head
  - 发送者／源地址，6个字节
  - 接收者／目标地址，6个字节
  - 数据类型，6个字节
- data：(最短46字节，最长1500字节)
  - 数据包的具体内容
  
:::tip
head长度＋data长度＝最短64字节，最长1518字节，超过最大限制就分片发送。

mac地址：
head中包含的源和目标地址由来：ethernet规定接入internet的设备都必须具备网卡，发送端和接收端的地址便是指网卡的地址，即mac地址
mac地址：每块网卡出厂时都被烧制上一个世界唯一的mac地址，长度为48位2进制，通常由12位16进制数表示（前六位是厂商编号，后六位是流水线号）
。有了 mac 地址，两台计算机通过广播的方式来传递信息。
:::
### 网络层
然而这种广播的方式使用在一片局域网内，而互联网由无数个局域网构成，如果发出一个广播全世界的电脑都要收到显然是不现实的。
网络层引入了一套新的地址来区分不同的广播区域，这个新的协议地址就是 ip 地址。
#### ip 协议
ip 协议分为网络部分和主机部分，但是这两部分都无法辨识 ip 所处的子网。
#### ip 子网掩码
子网掩码是表示子网络特征的一个参数。它在形式上等同于IP地址，也是一个32位二进制数字，它的网络部分全部为1，主机部分全部为0。
IP协议的作用主要有两个，一个是为每一台计算机分配IP地址，另一个是确定哪些地址在同一个子网络。
#### ip 数据包
- head：长度为20到60字节
- data：最长为65,515字节
#### arp 协议
所有上层包数据最后都需要封装上以太头，通过一台协议发送。arp 协议通过广播的方式发送数据包，获取目标主机的mac地址。
### 传输层
建立计算机内部端口通讯。
:::tip
端口范围0-65535，0-1023为系统占用端口
:::
#### tcp 协议
可靠传输，TCP数据包没有长度限制，理论上可以无限长，但是为了保证网络的效率，通常TCP数据包的长度不会超过IP数据包的长度，以确保单个TCP数据包不必再分割。
#### udp 协议
不可靠传输，”报头”部分一共只有8个字节，总长度不超过65,535字节，正好放进一个IP数据包。
### 应用层
不同的协议规定电子邮件、网页、FTP数据的格式，这些协议构成应用层。

本文简单描述了网络协议的内容，旨在对网络协议有一个基本的概念，后续逐渐补充详细的深度解析。