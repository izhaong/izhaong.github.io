(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{448:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"setstate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setstate"}},[s._v("#")]),s._v(" setState")]),s._v(" "),t("ul",[t("li",[s._v("不可变值")]),s._v(" "),t("li",[s._v("可能是异步更新")]),s._v(" "),t("li",[s._v("可能会被合并")])]),s._v(" "),t("p",[s._v("函数式组件，默认没有 state")]),s._v(" "),t("p",[s._v("state 放在 constructor中， 要在构造函数中定义")]),s._v(" "),t("div",{staticClass:"language-react line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import React from 'react'\n\n// 函数组件（后面会讲），默认没有 state\nclass StateDemo extends React.Component {\n    constructor(props) {\n        super(props)\n\n        // 第一，state 要在构造函数中定义\n        this.state = {\n            count: 0\n        }\n    }\n    render() {\n        return <div>\n            <p>{this.state.count}</p>\n            <button onClick={this.increase}>累加</button>\n        </div>\n    }\n    increase = () => {\n        // - 第二 不可变值\n        // - 第三 可能是异步更新\n        // - 第四 可能会被合并       \n    }\n}\n\nexport default StateDemo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h4",{attrs:{id:"第二-不要直接修改-state-使用不可变值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二-不要直接修改-state-使用不可变值"}},[s._v("#")]),s._v(" 第二，不要直接修改 state ，使用不可变值")]),s._v(" "),t("div",{staticClass:"language-react line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    // this.state.count++ // 错误\n    this.setState({\n        count: this.state.count + 1 // SCU\n    })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-react line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 不可变值（函数式编程，纯函数） - 数组\nconst list5Copy = this.state.list5.slice()\nlist5Copy.splice(2, 0, 'a') // 中间插入/删除\nthis.setState({\n    list1: this.state.list1.concat(100), // 追加\n    list2: [...this.state.list2, 100], // 追加\n    list3: this.state.list3.slice(0, 3), // 截取\n    list4: this.state.list4.filter(item => item > 100), // 筛选\n    list5: list5Copy // 其他操作\n})\n// 注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值\n\n// 不可变值 - 对象\nthis.setState({\n    obj1: Object.assign({}, this.state.obj1, {a: 100}),\n    obj2: {...this.state.obj2, a: 100}\n})\n// 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h4",{attrs:{id:"第三-setstate-可能是异步更新-有可能是同步更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三-setstate-可能是异步更新-有可能是同步更新"}},[s._v("#")]),s._v(" 第三，setState 可能是异步更新（有可能是同步更新）")]),s._v(" "),t("div",{staticClass:"language-react line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\t\t\t\tthis.setState({\n            count: this.state.count + 1\n        }, () => {\n            // 联想 Vue $nextTick - DOM\n            console.log('count by callback', this.state.count) // 回调函数中可以拿到最新的 state\n        })\n        console.log('count', this.state.count) // 异步的，拿不到最新值\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("setTimeout 中 setState 是同步的")])]),s._v(" "),t("div",{staticClass:"language-react line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        // setTimeout 中 setState 是同步的\n        setTimeout(() => {\n            this.setState({\n                count: this.state.count + 1\n            })\n            console.log('count in setTimeout', this.state.count)\n        }, 0)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("自己定义的 DOM 事件，setState 是同步的")])]),s._v(" "),t("div",{staticClass:"language-react line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    componentDidMount() {\n        // 自己定义的 DOM 事件，setState 是同步的\n        document.body.addEventListener('click', this.bodyClickHandler)\n    }\n\n\t  bodyClickHandler = () => {\n        this.setState({\n            count: this.state.count + 1\n        })\n        console.log('count in body event', this.state.count)\n    }\n    \n    componentWillUnmount() {\n        // 及时销毁自定义 DOM 事件\n        document.body.removeEventListener('click', this.bodyClickHandler)\n        // clearTimeout\n    }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("strong",[s._v("可能是异步更新")])]),s._v(" "),t("h4",{attrs:{id:"第四-state-异步更新的话-更新前会被合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四-state-异步更新的话-更新前会被合并"}},[s._v("#")]),s._v(" 第四，state 异步更新的话，更新前会被合并")]),s._v(" "),t("div",{staticClass:"language-react line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("        // 传入对象，会被合并（类似 Object.assign ）。执行结果只一次 +1\n\t\t\t  // Object.assign({ count: 1 }, { count: 1 })\n        this.setState({\n            count: this.state.count + 1\n        })\n        this.setState({\n            count: this.state.count + 1\n        })\n        this.setState({\n            count: this.state.count + 1\n        })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("strong",[s._v("传入函数，不会被合并")])]),s._v(" "),t("div",{staticClass:"language-react line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" \t\t\t\t// 传入函数，不会被合并。执行结果是 +3\n        this.setState((prevState, props) => {\n            return {\n                count: prevState.count + 1\n            }\n        })\n        this.setState((prevState, props) => {\n            return {\n                count: prevState.count + 1\n            }\n        })\n        this.setState((prevState, props) => {\n            return {\n                count: prevState.count + 1\n            }\n        })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);