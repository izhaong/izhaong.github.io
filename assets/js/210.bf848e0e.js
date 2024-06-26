(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{549:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss/blogImg/041111.%E6%96%87%E4%BB%B6%E5%8F%8A%E6%96%87%E4%BB%B6%E5%A4%B9/2021/12/08/22-37-57-acc327dfe0d5328c1ad102179c70b641-1601436474394-e60c423f-36d3-4d0e-97b7-3558ea349b20-67b46b.gif",alt:"img"}})]),t._v(" "),a("h1",{attrs:{id:"linux-文件基本属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件基本属性"}},[t._v("#")]),t._v(" Linux 文件基本属性")]),t._v(" "),a("p",[t._v("在 Linux 中我们可以使用 "),a("strong",[t._v("ll")]),t._v(" 或者 "),a("strong",[t._v("ls –l")]),t._v(" 命令来显示一个文件的属性以及文件所属的用户和组，如：")]),t._v(" "),a("p",[t._v("[root@www /]# ls -l")]),t._v(" "),a("p",[t._v("total 64")]),t._v(" "),a("p",[t._v("dr-xr-xr-x  2 root root 4096 Dec 14  2012 bin")]),t._v(" "),a("p",[t._v("dr-xr-xr-x  4 root root 4096 Apr 19  2012 boot")]),t._v(" "),a("p",[t._v("……")]),t._v(" "),a("p",[t._v("实例中，"),a("strong",[t._v("bin")]),t._v(" 文件的第一个属性用 "),a("strong",[t._v("d")]),t._v(" 表示。"),a("strong",[t._v("d")]),t._v(" 在 Linux 中代表该文件是一个目录文件。")]),t._v(" "),a("p",[t._v("在 Linux 中第一个字符代表这个文件是目录、文件或链接文件等等。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当为 "),a("strong",[t._v("d")]),t._v(" 则是目录")])]),t._v(" "),a("li",[a("p",[t._v("当为 "),a("strong",[t._v("-")]),t._v(" 则是文件；")])]),t._v(" "),a("li",[a("p",[t._v("若是 "),a("strong",[t._v("l")]),t._v(" 则表示为链接文档(link file)；")])]),t._v(" "),a("li",[a("p",[t._v("若是 "),a("strong",[t._v("b")]),t._v(" 则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；")])]),t._v(" "),a("li",[a("p",[t._v("若是 "),a("strong",[t._v("c")]),t._v(" 则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。")])])]),t._v(" "),a("p",[t._v("接下来的字符中，以三个为一组，且均为 "),a("strong",[t._v("rwx")]),t._v(" 的三个参数的组合。其中， "),a("strong",[t._v("r")]),t._v(" 代表可读(read)、 "),a("strong",[t._v("w")]),t._v(" 代表可写(write)、 "),a("strong",[t._v("x")]),t._v(" 代表可执行(execute)。 要注意的是，这三个权限的位置不会改变，如果没有权限，就会出现减号 "),a("strong",[t._v("-")]),t._v(" 而已。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss/blogImg/041111.%E6%96%87%E4%BB%B6%E5%8F%8A%E6%96%87%E4%BB%B6%E5%A4%B9/2021/12/08/19-01-13-cf47db04e11a5e9127790c9063d215f8-1604112035649-afdc6484-fa40-4d7d-8634-3d6843921b70-dc16f2.jpeg",alt:"img"}})]),t._v(" "),a("p",[t._v("每个文件的属性由左边第一部分的 10 个字符来确定（如下图）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss/blogImg/041111.%E6%96%87%E4%BB%B6%E5%8F%8A%E6%96%87%E4%BB%B6%E5%A4%B9/2021/12/08/19-01-27-9e9f2ef604e80ba8a9e8f4970f21e6cf-1604112035670-31180760-baf4-4091-bd07-84f36d56db7a-037ea7.png",alt:"img"}})]),t._v(" "),a("h1",{attrs:{id:"linux-文件与目录管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件与目录管理"}},[t._v("#")]),t._v(" Linux 文件与目录管理")]),t._v(" "),a("h3",{attrs:{id:"用到的-linux-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用到的-linux-命令"}},[t._v("#")]),t._v(" 用到的 "),a("code",[t._v("Linux")]),t._v(" 命令")]),t._v(" "),a("h4",{attrs:{id:"处理目录的常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理目录的常用命令"}},[t._v("#")]),t._v(" 处理目录的常用命令")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("pwd (显示目前所在的目录)")])]),t._v(" "),a("li",[a("p",[t._v("rmdir (删除空的目录)")])]),t._v(" "),a("li",[a("p",[t._v("rm [-fir] 文件或目录")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("-f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；")]),t._v(" "),a("li",[t._v("-i ：互动模式，在删除前会询问使用者是否动作")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("-r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！")])])]),t._v(" "),a("li",[a("p",[t._v("mv (移动文件与目录，或修改名称)")])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；")]),t._v(" "),a("li",[t._v("-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("-u ：若目标文件已经存在，且 source 比较新，才会升级 (update)")])])])]),t._v(" "),a("h2",{attrs:{id:"systemctl-daemon-reload-子命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-daemon-reload-子命令"}},[t._v("#")]),t._v(" systemctl daemon-reload 子命令")]),t._v(" "),a("p",[t._v("daemon-reload 是一个很容易被误用的子命令，主要是因为它名字中包含的 daemon 一词很容易让它和 reload 子命令混淆。")]),t._v(" "),a("p",[t._v("我们在前文简略的介绍了 reload 子命令，它的作用是重新加载某个服务程序的配置文件。这里的程序指的是服务类型 unit 的配置中指定的程序，也就是我们常说的 daemon(提供某种服务的应用程序)。比如服务类型的 unit prometheus.service，提供服务的 daemon 程序在我的机器上是 /usr/local/share/prometheus/prometheus，所以 reload 子命令重新加载的是 prometheus 的配置文件。")]),t._v(" "),a("p",[t._v("如果把 daemon-reload 子命令中的 daemon 理解为 systemd 程序，就可以把这个命令解释为重新加载 systemd 程序的配置文件。而所有的 unit 配置文件都是作为 systemd 程序的配置文件存在的。这样得出的结论就是：")]),t._v(" "),a("ul",[a("li",[t._v("新添加 unit 配置文件时需要执行 daemon-reload 子命令")]),t._v(" "),a("li",[t._v("有 unit 的配置文件发生变化时也需要执行 daemon-reload 子命令")])]),t._v(" "),a("p",[t._v("daemon-reload 命令会做很多的事情，其中之一是重新生成依赖树(也就是 unit 之间的依赖关系)，所以当你修改了 unit 配置文件中的依赖关系后如果不执行 daemon-reload 命令是不会生效的。")]),t._v(" "),a("h1",{attrs:{id:"network-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network-namespace"}},[t._v("#")]),t._v(" Network Namespace")]),t._v(" "),a("p",[t._v("查看"),a("code",[t._v("ip netns list")])]),t._v(" "),a("p",[t._v("添加"),a("code",[t._v("ip netns add ***")])]),t._v(" "),a("p",[t._v("删除"),a("code",[t._v("ip netns delete ***")])]),t._v(" "),a("p",[t._v("查看信息"),a("code",[t._v("ip netns exec *** ip a")])]),t._v(" "),a("h2",{attrs:{id:"cenos7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cenos7"}},[t._v("#")]),t._v(" cenos7")]),t._v(" "),a("h3",{attrs:{id:"文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[t._v("#")]),t._v(" 文件")]),t._v(" "),a("h4",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),a("p",[t._v("首先查看CentOS7 系统有没有安装wget：\n"),a("code",[t._v("[root@test redis]# rpm -qa|grep wget")]),t._v("\n如果安装了会提示当前安装的版本：\n"),a("code",[t._v("wget-1.14-15.el7_4.1.x86_64")]),t._v("\n没安装的话可以通过以下命令安装："),a("code",[t._v("yum install -y wget")])]),t._v(" "),a("p",[t._v("下载文件的语法格式为：wget http://wwww.xxxxx ，该命令会下载到默认的download目录。")]),t._v(" "),a("p",[t._v("如果我们要下载到指定目录，可以通过 -P 参数来实现：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("重命名")])]),t._v(" "),a("li",[a("ul",[a("li",[a("code",[t._v("重命名文件：mv 文件名 修改后的文件名")])])])])]),t._v(" "),a("h4",{attrs:{id:"解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[t._v("#")]),t._v(" 解压")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" tar xf apache-maven-3.5.4-bin.tar.gz  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"权限-chmod命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限-chmod命令"}},[t._v("#")]),t._v(" 权限 chmod命令")]),t._v(" "),a("p",[t._v("chmod [可选项] "),a("mode",[t._v(" <file...>")])],1),t._v(" "),a("p",[t._v("https://www.cnblogs.com/huchong/p/9075201.html")]),t._v(" "),a("p",[t._v("权限\t权限数值\t二进制\t具体作用\nr\t4\t00000100\tread，读取。当前用户可以读取文件内容，当前用户可以浏览目录。\nw\t2\t00000010\twrite，写入。当前用户可以新增或修改文件内容，当前用户可以删除、移动目录或目录内文件。\nx\t1\t00000001\texecute，执行。当前用户可以执行文件，当前用户可以进入目录。")]),t._v(" "),a("p",[t._v("chmod 777 file  (等价于  chmod u=rwx,g=rwx,o=rwx file 或  chmod a=rwx file)")]),t._v(" "),a("p",[t._v("🌰例子：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("-rw------- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    只有拥有者有读写权限。\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("644")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    只有拥有者有读写权限；而属组用户和其他用户只有读权限。\n-rwx------ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    只有拥有者有读、写、执行权限。\n-rwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("755")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    拥有者有读、写、执行权限；而属组用户和其他用户只有读、执行权限。\n-rwx--x--x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("711")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    拥有者有读、写、执行权限；而属组用户和其他用户只有执行权限。\n-rw-rw-rw- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("666")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \t所有用户都有文件读、写权限。\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rwxrwxrwx")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \t所有用户都有读、写、执行权限。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);