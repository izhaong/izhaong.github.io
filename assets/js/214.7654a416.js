(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{553:function(s,t,e){"use strict";e.r(t);var a=e(4),i=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("/etc/init.d/usbarbitrator stop")]),s._v(" "),t("p",[s._v("chkconfig usbarbitrator off")]),s._v(" "),t("p",[s._v("接入硬盘：esxcli storage core device list |grep -i usb")]),s._v(" "),t("p",[s._v("ls /dev/disks/")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/izhaong/izhaong.com-oss_2023/blogImg/abnerworks.Typora/20230917-163009-1665828645074-4d1a79bc-93d6-4ab3-a9f7-80e67dd917fa.png",alt:"img"}})]),s._v(" "),t("p",[t("code",[s._v("vmhba32\\:C0\\:T0\\:L0")]),s._v("有可能会不一样 如果不一样下面所有命令都需要做替换")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("partedUtil mklabel /dev/disks/mpx.vmhba32\\:C0\\:T0\\:L0 gpt \npartedUtil getptbl /dev/disks/mpx.vmhba32\\:C0\\:T0\\:L0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("换算大小 每个人基本都不一样 下面命令需要替换")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('eval expr $(partedUtil getptbl /dev/disks/mpx.vmhba32\\:C0\\:T0\\:L0 | tail -1 | awk \'{print $1 " \\\\* " $2 " \\\\* " $3}\') - 1\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("得出结果 250067789")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("让系统识别我们的硬盘 250067789需要替换成你的")])]),s._v(" "),t("li",[t("p",[t("code",[s._v('partedUtil setptbl /dev/disks/mpx.vmhba32\\:C0\\:T0\\:L0 gpt "1 2048 250067789 AA31E02A400F11DB9590000C2911D1B8 0"')])])]),s._v(" "),t("li",[t("p",[s._v("挂载USB硬盘")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("vmkfstools -C vmfs5 -S USB_Datastore /dev/disks/mpx.vmhba32\\:C0\\:T0\\:L0:1")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);