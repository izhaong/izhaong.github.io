(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{503:function(s,t,a){"use strict";a.r(t);var n=a(4),l=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"qiankun-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qiankun-js"}},[s._v("#")]),s._v(" qiankun.js")]),s._v(" "),t("ul",[t("li",[s._v("qiankun 基于single-spa\n"),t("ul",[t("li",[s._v("基于single-spa基础上进行了封装,扩展了js沙箱样式隔离等")]),s._v(" "),t("li",[s._v("提供基座模式,基座用于注册、承载、启动子应用,子应用可以为独立的前端项目")]),s._v(" "),t("li",[s._v("提供了 单实例,多实例,应用通信,应用隔离等功能")])])])]),s._v(" "),t("h3",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),t("p",[s._v("qiankun采用了运行时加载子应用，通过监听url change事件，在路由变化时，去匹配子应用进行加载挂载渲染，同时要求子应用必须暴露出三个生命周期钩子函数：")]),s._v(" "),t("ul",[t("li",[s._v("bootstrap：对应初始化，启动")]),s._v(" "),t("li",[s._v("mount：对应挂载渲染")]),s._v(" "),t("li",[s._v("unmount：对应卸载")])]),s._v(" "),t("p",[s._v("其内部是通过 "),t("strong",[s._v("import-html-entry")]),s._v(" ，来加载子应用，也就是 "),t("strong",[s._v("HTML Entry")]),s._v(" 的方式，通过设置html作为资源入口，加载远程html 解析DOM，从而获取js、css等静态资源来实现微前端的渲染。")]),s._v(" "),t("p",[s._v("首先，当我们配置子应用的 entry 后，qiankun 会去通过 fetch 获取到子应用的 html 字符串拿到 html 字符串后，会通过一大堆正则去匹配获取 html 中对应的 js（内联、外联）、css（内联、外联）、注释、入口脚本 entry 等等。processTpl 方法会返回我们加载子应用所需要的四个组成部分：")]),s._v(" "),t("ul",[t("li",[s._v("template：html 模板")]),s._v(" "),t("li",[s._v("script：js 脚本（内联、外联）")]),s._v(" "),t("li",[s._v("styles：css 样式表（内联、外联）")]),s._v(" "),t("li",[s._v("entry：子应用入口 js 脚本文件 然后 会分别去获取外联js，外联css，并进行处理， 总结来讲， "),t("strong",[s._v("css全部处理成内联style，js会被一段匿名eval函数包裹")]),s._v("，并且绑定window.proxy对象。具体流程如下")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/Users/izhaong/izhaong/Project_me/Blog/izhaong.com-localFile/109900.%E5%BE%AE%E5%89%8D%E7%AB%AF/acfc59e2b2eb453c98ed93df6b085eac~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"乾坤加载子应用.drawio.png"}})]),s._v(" "),t("p",[s._v("接下来我们看下子应用在基座挂载后的DOM结构，从DOM结构中可以看出，qiankun是以HTML方式嵌入，且外联js也已经被import-html-entry处理。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/Users/izhaong/izhaong/Project_me/Blog/izhaong.com-localFile/109900.%E5%BE%AE%E5%89%8D%E7%AB%AF/6bdf6b4317bd4bb9b4f3eed6839367e0~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"乾坤DOM结构脱敏.png"}})]),s._v(" "),t("p",[s._v("我们再看下子应用在基座挂载后的CSS，从乾坤注入的注释可以看出，外联css已经被处理成内联css嵌入。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/Users/izhaong/izhaong/Project_me/Blog/izhaong.com-localFile/109900.%E5%BE%AE%E5%89%8D%E7%AB%AF/302219a95a554f85a3c7804ba9ccd63f~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"css脱敏.png"}})]),s._v(" "),t("h4",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])}),[],!1,null,null,null);t.default=l.exports}}]);