# 认识 Node.js
- Node 是一个服务器端 JavaScript 解释器
- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境
- Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
- Node.js 的包管理器 npm，是全球最大的开源库生态系统
- Node.js 是一门动态语言，运行在服务端的 Javascript

# 环境搭建
- [下载安装文件](https://nodejs.org/en/download/)
- 下载完后进行安装，建议安装到默认路径，注意不要有中文路径
- 配置环境变量
- 在命令窗口中输入 node -v，如果正常显示版本号则表示安装成功

# REPL(交互式解释器)
在命令窗口输入 node 后回车，便可进入到 REPL 模式，在这个模式里可以输入 Javascript 的脚本语法，node 会自动将语法执行。类似于在浏览器的开发人员工具的控制台。不同的在于 REPL 是在服务端解析 Javascript，而控制台是在客户端解析 Javascript。按 CTRL + C 可退出 REPL 模式。

# 运行 Node.js
REPL 只适用于一些简单的 Javascript 语法，对于稍复杂的程序，可以直接写到 js 文件当中。在前端可以直接在 html 页面中通过 script 标签引入 js 然后在浏览器运行，则可以通过浏览器来解析 js 文件。在 node 环境下，可通过命令窗口输入命令： node *.js ，便可直接执行 js 文件。

# 模块
模块系统是 Node.js 最基本也是最常用的。一般情况模块可分为四类：
- 原生模块
    - [url 模块](https://github.com/dk-lan/nodejs/tree/master/module/url)
    - [querystring 模块](https://github.com/dk-lan/nodejs/tree/master/module/querystring)
    - [http 模块](https://github.com/dk-lan/nodejs/tree/master/module/http)
    - [events 模块](https://github.com/dk-lan/nodejs/tree/master/module/events)
- [文件模块](https://github.com/dk-lan/nodejs/tree/master/module/fs)
- 第三方模块
    - [express](https://github.com/dk-lan/nodejs/tree/master/module/express)
    - [websocket](https://github.com/dk-lan/nodejs/tree/master/module/websocket)
    - [socket.io](https://github.com/dk-lan/nodejs/tree/master/module/socketio)
- [自定义模块](https://github.com/dk-lan/nodejs/tree/master/module/defined)