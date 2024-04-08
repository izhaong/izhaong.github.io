(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{536:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"nacos简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos简介"}},[s._v("#")]),s._v(" Nacos简介")]),s._v(" "),a("p",[s._v("在 Spring Cloud Netflix 阶段我们采用 Eureka 做作为我们的服务注册与发现服务器，现利用 Spring Cloud Alibaba 提供的 Nacos 组件替代该方案。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nacos.io/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nacos 官网"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。")]),s._v(" "),a("p",[s._v("Nacos 帮助您更敏捷和容易地构建、交付和管理微服务平台。 Nacos 是构建以“服务”为中心的现代应用架构 (例如微服务范式、云原生范式) 的服务基础设施。")]),s._v(" "),a("p",[a("strong",[s._v("nacos注册中心工作流程")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153617-1691741920914-b18f7a62-0b6f-4e08-8cae-b9f75da20c3d.png",alt:"img"}})]),s._v(" "),a("h4",{attrs:{id:"_3-2-2-nacos安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-nacos安装"}},[s._v("#")]),s._v(" 3.2.2 Nacos安装")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("docker run --restart=always --env MODE=standalone --name nacos -d -p 8848:8848 nacos/nacos-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看nacos日志信息：docker logs nacos")]),s._v(" "),a("p",[s._v("访问地址")]),s._v(" "),a("p",[s._v("http://ip:8848/nacos")]),s._v(" "),a("p",[s._v("nacos的默认端口号是8848，珠穆朗玛峰的高度也是8848米呦！默认账号密码是nacos/nacos"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153617-1691742215642-058e91b3-1fef-436e-b133-34065351f4dc.png",alt:"img"}})]),s._v(" "),a("h4",{attrs:{id:"_3-2-3-nacos注册中心使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-nacos注册中心使用"}},[s._v("#")]),s._v(" 3.2.3 Nacos注册中心使用")]),s._v(" "),a("p",[s._v("1）在资源中导入nacos演示工程")]),s._v(" "),a("p",[s._v("2）顶级父工程添加依赖包")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("\x3c!-- nacos注册中心依赖包 --\x3e\n<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n</dependency>\n\x3c!-- 监控检查--\x3e\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("2）"),a("strong",[s._v("nacos-web")]),s._v("工程添加配置文件"),a("strong",[s._v("bootstrap.yml")])]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('spring:\n  application:\n    name: nacos-web\n  cloud:\n    nacos:\n      discovery:\n        server-addr: 192.168.200.128:8848\nserver:\n  port: 9100\n#健康检查\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: "*"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("3）"),a("strong",[s._v("nacos-web")]),s._v("工程添加启动类")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("@SpringBootApplication\n@EnableDiscoveryClient\npublic class NacosWebApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(NacosWebApplication.class,args);\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("4）"),a("strong",[s._v("nacos-web")]),s._v("工程新建"),a("strong",[s._v("InfoController")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InfoController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${server.port}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"${key:''}\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/echo/{message}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PathVariable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello Nacos Discovery "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('", i am from port "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/config"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello Nacos Config get "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("5）启动服务并查看效果"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153759-1691742275056-f139ce31-7f84-4c86-b881-a7f42d7e3f5b-20230917153759798.png",alt:"img"}})]),s._v(" "),a("p",[s._v("6）修改端口，查看nacos集群支持"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153752-1691742279082-ff1c35da-b303-45a9-8b4e-02b652b6ca0d-20230917153752299.png",alt:"img"}}),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153617-1691742292750-c10e75d2-83c6-4035-999a-d7a51aab98e0.png",alt:"img"}})]),s._v(" "),a("h4",{attrs:{id:"_3-2-5-nacos配置中心使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-nacos配置中心使用"}},[s._v("#")]),s._v(" 3.2.5 Nacos配置中心使用")]),s._v(" "),a("h5",{attrs:{id:"_3-2-5-1-基础使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-1-基础使用"}},[s._v("#")]),s._v(" 3.2.5.1 基础使用")]),s._v(" "),a("p",[s._v("1）顶级父工程添加依赖")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("\x3c!-- nacos配置中心依赖包 --\x3e\n<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>c \n</dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("2）核心配置信息")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("注意：\n    配置文件必须是bootstrap.properties或者bootstrap.yml，如果配置application.properties或者application.yml会导致加载不到配置.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('spring:\n  application:\n    name: nacos-web\n  cloud:\n    nacos:\n      discovery:\n        server-addr: 192.168.200.140:8848\n      config:\n        server-addr: 192.168.200.140:8848\n        file-extension: yml #指定文件扩展名，默认为properties\nserver:\n  port: 9100\n#全局健康检查\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: "*"\n#日志\nlogging:\n  level:\n    org.springframework.web: debug\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[a("strong",[s._v("新建配置")])]),s._v(" "),a("p",[s._v("配置文件名称 ： 默认和 spring.application.name一致")]),s._v(" "),a("p",[s._v("文件后缀 ：默认是 properties")]),s._v(" "),a("p",[s._v("nacos支持6种文件格式"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/714491/1691744915090-b132aa30-ea10-410d-8753-339b4717e140.png",alt:"img"}})]),s._v(" "),a("p",[s._v("测试config接口")]),s._v(" "),a("p",[s._v("http://127.0.0.1:9100/config")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('@GetMapping(value = "/config")\npublic String config() {\n    return "Hello Nacos Config get "+key ;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h5",{attrs:{id:"_3-2-5-2-动态刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-2-动态刷新"}},[s._v("#")]),s._v(" 3.2.5.2 动态刷新")]),s._v(" "),a("p",[s._v("Nacos Config Starter 默认为所有获取数据成功的 Nacos 的配置项添加了监听功能，在监听到服务端配置发生变化时会实时触发 org.springframework.cloud.context.refresh.ContextRefresher 的 refresh 方法 。")]),s._v(" "),a("p",[s._v("如果需要对 Bean 进行动态刷新，参照 Spring 和 Spring Cloud 规范。推荐给类添加 @RefreshScope 进行自动刷新")]),s._v(" "),a("h5",{attrs:{id:"_3-2-5-4-多环境支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-4-多环境支持"}},[s._v("#")]),s._v(" 3.2.5.4 多环境支持")]),s._v(" "),a("p",[s._v("我们在做项目开发的时候，可能会存在多种环境，并且每一种环境所设置的配置都是不同的，所以我们可能会在线上手工修改这些配置信息。同时 Spring 中为我们提供了 "),a("strong",[s._v("Profile")]),s._v(" 这个功能。我们只需要在启动的时候添加一个虚拟机参数，激活自己环境所要用的 Profile 就可以了。")]),s._v(" "),a("p",[s._v("操作起来很简单，只需要为不同的环境编写专门的配置文件，如：application-dev.yml、application-prod.yml， 启动项目时只需要增加一个命令参数 --spring.profiles.active=环境名称 即可。")]),s._v(" "),a("p",[s._v("测试环境 test")]),s._v(" "),a("p",[s._v("开发环境 dev")]),s._v(" "),a("p",[s._v("生产环境 prod")]),s._v(" "),a("p",[a("strong",[s._v("支持不同环境配置")])]),s._v(" "),a("p",[s._v("nacos可以同时支持多环境配置。只需要在nacos配置中心中根据dataId进行区分即可。dataId 完整的拼接格式如下")]),s._v(" "),a("p",[s._v("在 Nacos Config Starter 中，dataId 完整的拼接格式如下")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("${prefix}-${spring.profiles.active}.${file-extension}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("prefix 默认为 spring.application.name 的值，也可以通过配置项 spring.cloud.nacos.config.prefix来配置。")]),s._v(" "),a("li",[s._v("spring.profiles.active 即为当前环境对应的 profile")]),s._v(" "),a("li",[s._v("file-extension 为配置内容的数据格式，可以通过配置项 spring.cloud.nacos.config.file-extension来配置。 目前只支持 properties 类型。")])]),s._v(" "),a("p",[s._v("1）修改bootstrap.yml")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("spring:\n  profiles:\n    active: dev #开发环境\n  application:\n    name: nacos-web\n  cloud:\n    nacos:\n      discovery:\n        server-addr: 192.168.200.140:8848\n      config:\n        server-addr: 192.168.200.140:8848\n        file-extension: yml #后缀\n        prefix: nacos-web  #前缀\nserver:\n  port: 9100\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("2）nacos中新增配置信息"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153618-1691744965346-3c0d3391-f8dc-4d86-9808-3446f68368e7.png",alt:"img"}})]),s._v(" "),a("h5",{attrs:{id:"_3-2-5-5-配置共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-5-配置共享"}},[s._v("#")]),s._v(" 3.2.5.5 配置共享")]),s._v(" "),a("h6",{attrs:{id:"_3-2-5-5-1-不同环境下配置信息共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-5-1-不同环境下配置信息共享"}},[s._v("#")]),s._v(" 3.2.5.5.1 不同环境下配置信息共享")]),s._v(" "),a("p",[s._v("在开发中，虽然可以在不同环境下使用不同的配置文件，但是有一些配置是通用的，需要在不同的环境下，都进行生效。")]),s._v(" "),a("ol",[a("li",[s._v("当开发环境为：dev时。"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153647-1691745024394-b95f706c-76ab-4631-92e3-93f8a27ea172-20230917153647757.png",alt:"img"}})]),s._v(" "),a("li",[s._v("当开发环境为：test时。"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153650-1691745026836-6f94263e-9cdf-4a7d-8dc6-995411cac7a5-20230917153650546.png",alt:"img"}})])]),s._v(" "),a("p",[s._v("根据上述测试，可以发现，不同的开发环境下都会去加载"),a("strong",[s._v("nacos-web.yml")]),s._v("，也就是没有指定特定环境的文件。那么对于通用配置就可以设置在这个文件中。")]),s._v(" "),a("p",[s._v("更新"),a("strong",[s._v("nacos")]),s._v("配置中心的"),a("strong",[s._v("nacos-web.yml")]),s._v("。"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153619-1691745032201-92c3f96a-2af2-460c-a264-8faf4bd9a913.png",alt:"img"}})]),s._v(" "),a("p",[a("strong",[s._v("InfoController")]),s._v("中获取该值"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153619-1691745040548-8bb8cfea-6759-4be9-a35f-71c25a4a9470.png",alt:"img"}})]),s._v(" "),a("p",[s._v("环境为test：访问并获取结果"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153619-1691745044016-8850cf26-6a72-45d8-a626-7686b4e697fb.png",alt:"img"}})]),s._v(" "),a("p",[s._v("环境为dev：访问并获取结果"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153705-1691745046975-c07bd8ae-b5c4-461b-b4e6-25bf7d829fdd-20230917153705336.png",alt:"img"}})]),s._v(" "),a("h6",{attrs:{id:"_3-2-5-5-2-不同应用间配置信息共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-5-2-不同应用间配置信息共享"}},[s._v("#")]),s._v(" 3.2.5.5.2 不同应用间配置信息共享")]),s._v(" "),a("p",[s._v("在实际项目中，常常需要不同应用间配置共享。比如redis连接信息，很多服务都需要，那么就可以把这部分信息交给Nacos进行管理并且实现配置共享，从而实现配置的重用。")]),s._v(" "),a("p",[s._v("1）Nacos中新建"),a("strong",[s._v("common.yml")]),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153619-1691745316753-6672585e-a796-45e2-8201-0bd05767495d.png",alt:"img"}})]),s._v(" "),a("p",[s._v("2）修改"),a("strong",[s._v("nacos-web")]),s._v("工程配置文件，添加")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('spring:\n  application:\n    name: nacos-web\n  cloud:\n    nacos:\n      discovery:\n        server-addr: 192.168.200.128:8848\n      config:\n        server-addr: 192.168.200.128:8848\n        file-extension: yml #指定文件扩展名，默认为properties\n        prefix: nacos-web\n        \n        \n        #添加共享配置的dataId,如多个使用逗号分隔，并且越靠后，优先级越高\n        #文件后缀名不能少，只支持yaml，yml，properies\n        shared-dataids: common.yml\n        #哪些共享配置支持动态刷新，如多个使用逗号分隔\n        refreshable-dataids: common.yml\n        \n        \n  profiles:\n    active: dev #开发环境\nserver:\n  port: 9100\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: "*"\n#日志\nlogging:\n  level:\n    org.springframework.web: debug\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("3）"),a("strong",[s._v("InfoController")]),s._v("中获取该值"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153728-1691745383455-bff2b509-3de7-45cd-95be-06f562925942-20230917153723208.png",alt:"img"}})]),s._v(" "),a("p",[s._v("4）导入demo工程")]),s._v(" "),a("p",[s._v("5）"),a("strong",[s._v("Nacos")]),s._v("中创建example工程对应配置文件"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153717-1691745389280-29a214a6-7514-4681-839a-7a1cd19862df-20230917153717118.png",alt:"img"}})]),s._v(" "),a("p",[s._v("web工程访问结果如下："),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153620-1691745395284-6dc16875-c90c-4a6e-8f2b-9594d1ea4365.png",alt:"img"}})]),s._v(" "),a("p",[s._v("example访问结果如下：")]),s._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-153738-1691745398762-4b7f6b9e-bf13-4c18-a1d5-b18e67c723f2-20230917153738553.png",alt:"img"}})])])])}),[],!1,null,null,null);a.default=e.exports}}]);