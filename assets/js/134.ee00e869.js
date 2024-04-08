(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{473:function(e,s,n){"use strict";n.r(s);var t=n(4),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("code",[e._v("*node.js*")]),s("em",[e._v(": 听过")]),s("code",[e._v("*Electron*")]),s("em",[e._v("的都知道他使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序, 在现在的以单页面应用程序为主的前端环境来看, 毫无疑问需要用的")]),s("code",[e._v("*node.js*")]),s("em",[e._v("环境")])]),e._v(" "),s("p",[e._v("Electron 有两种进程：主进程和渲染进程。")]),e._v(" "),s("ul",[s("li",[e._v("主进程通过创建 "),s("strong",[e._v("BrowserWindow")]),e._v(" 实例来"),s("code",[e._v("创建")]),e._v(" 网页。 每一个 "),s("code",[e._v("BrowserWindow")]),e._v(" 实例在其渲染过程中运行网页， 当一个 "),s("code",[e._v("BrowserWindow")]),e._v(" 实例被销毁时，对应的渲染过程也会被终止。")]),e._v(" "),s("li",[e._v("主进程 "),s("strong",[e._v("管理")]),e._v(" 所有网页及其对应的渲染进程。")])]),e._v(" "),s("hr"),e._v(" "),s("ul",[s("li",[e._v("渲染进程只能"),s("strong",[e._v("管理")]),e._v("相应的网页， 一个渲染进程的崩溃不会影响其他渲染进程。")]),e._v(" "),s("li",[e._v("渲染进程通过 IPC 与主进程"),s("strong",[e._v("通信")]),e._v("在网在页上执行 GUI 操作。 出于安全和可能的资源泄漏考虑，直接从渲染器进程中调用与本地 GUI 有关的 API 受到限制。")])]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("进程之间的通信可以通过 Inter-Process Communication(IPC) 模块进行："),s("code",[e._v("ipcMain")]),e._v(" 和 "),s("code",[e._v("ipcRenderer")])]),e._v(" "),s("h2",{attrs:{id:"打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[e._v("#")]),e._v(" 打包")]),e._v(" "),s("ul",[s("li",[e._v("第一种 最简打包")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install electron-packager -g\nelectron-packager .\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"vue-electron"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-electron"}},[e._v("#")]),e._v(" vue + electron")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("electron-vue 上次更新时间是4年前 毫无疑问再大前端这个领域是过时的了, 这里使用插件创建")]),s("code",[e._v("**Vue CLI Plugin Electron Builder**")]),e._v(" https://nklayman.github.io/vue-cli-plugin-electron-builder/")])]),e._v(" "),s("li",[s("p",[e._v("创建完成后就按正常vue项目开始基建")])]),e._v(" "),s("li",[s("p",[e._v("导入"),s("code",[e._v("normalize.css")]),e._v(" "),s("code",[e._v("npm i normalize.css -S")])])])]),e._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[e._v('// 全局css\nimport "normalize.css/normalize.css"; // a modern alternative to CSS resets\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[s("p",[e._v("使用"),s("code",[e._v("element-ui")]),e._v("框架")])]),e._v(" "),s("li",[s("ul",[s("li",[s("code",[e._v("npm i element-ui -S")])]),e._v(" "),s("li",[s("code",[e._v("main.js 引入")])])])])]),e._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[e._v('import ElementUI from "element-ui";\nimport "element-ui/lib/theme-chalk/index.css";\n\nVue.use(ElementUI);\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);