(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{540:function(s,a,t){"use strict";t.r(a);var n=t(4),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[s._v("#")]),s._v(" "),a("strong",[s._v("基础知识")])]),s._v(" "),a("h3",{attrs:{id:"三值逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三值逻辑"}},[s._v("#")]),s._v(" 三值逻辑")]),s._v(" "),a("p",[s._v("题目虽简单，但是背后包含的知识点真的也不少，你都掌握了吗？")]),s._v(" "),a("p",[s._v("NULL有两种，“未知”unknown和“inapplicable”不适用。不知道戴眼镜的人眼睛是什么颜色，就是未知。只要不摘掉眼睛，就不知道，但是这个人眼睛肯定有颜色的。不知道冰箱的眼睛是什么颜色。这就是不适用，这个属性不适用于冰箱。冰箱是没有眼睛的。现在DBMS都将这两种类型NULL归为了一类，并采用三值逻辑。")]),s._v(" "),a("h3",{attrs:{id:"为什么是is-null-而不是-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么是is-null-而不是-null"}},[s._v("#")]),s._v(' 为什么是IS NULL, 而不是"= NULL"?')]),s._v(" "),a("p",[s._v("很奇怪，是不是？小学的时候学的=就是表示相等关系。但是，对NULL使用谓词得到的结果是unknown。")]),s._v(" "),a("blockquote",[a("p",[s._v("Tip: SQL的保留字中，很多都被归类为谓词一类，例如>,<>,= 等比较谓词，以及BETWEEN, LIKE, IN, IS NULL等。总结，谓词是一种特殊的函数，返回值是真值。(前面提到的诶个谓词，返回值都是true, false, unknown,SQL是三值逻辑，所以有三种真值）")])]),s._v(" "),a("p",[s._v("因为查询结果只会包含WHERE子句里的判断结果为true的行！不包含判断结果为false和unknown的行。且不仅是等号，对NULL使用其他比较谓词（比如> NULL），结果也都是unknown。")]),s._v(" "),a("p",[a("strong",[s._v("重点理解：")]),s._v("\nNULL不是值，所以不能对其使用谓词，如果使用谓词，结果是unknown。\n可以认为它只是一个没有值的标记,而比较谓词只适用于比较值。因此对非值的NULL使用比较谓词是没有意义的")]),s._v(" "),a("h3",{attrs:{id:"如何理解is-null-是两个单词-is空格null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何理解is-null-是两个单词-is空格null"}},[s._v("#")]),s._v(" 如何理解IS NULL?是两个单词？IS空格NULL?")]),s._v(" "),a("p",[s._v('"NULL值" 和 "列的值为NULL"这个说法是错误的。NULL不属于关系型数据库中的某种类型。\n我们为什么会误认为NULL是一个值？\n可能因为混淆了别的语言，在一些语言中NULL是一个常量。还有个重要原因是IS NULL是两个单词，所以我以前也把IS当作谓词，比如IS-A,所以误认为NULL是一个值。特别是SQL里有IS TRUE, IS FALSE。在讲解SQL标准的书里提醒人那么样，我们应该把IS NULL看作一个谓词，如果可以IS_NULL或许更合适。')]),s._v(" "),a("h3",{attrs:{id:"三值逻辑运算。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三值逻辑运算。"}},[s._v("#")]),s._v(" 三值逻辑运算。")]),s._v(" "),a("p",[s._v("unknown小写，是第三个真值。与作为NULL的一种UNKNOWN(未知)是不同的东西。小写是明确的布尔类型的真值，后者大写的既不是值也不是变量。为了对比不同：看x=x的情况。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nUNKNOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" UNKNOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("unknown\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("重点：【三值逻辑运算】")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unknown\n\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nunknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unknown\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unknown\n\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unknown\nunknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unknown\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n记忆：优先级：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(":    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(":       "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[s._v("#")]),s._v(" 实战")]),s._v(" "),a("h3",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[s._v("#")]),s._v(" 题解")]),s._v(" "),a("p",[s._v("法一： 使用NOT IN, 注意不能先查出name，否则可能name有重名，id不同，导致数据查询不全。我一开始就犯了这个错误。应该查询出id，去避免这个问题。同样，用UNION也会自动去重，要用的话用UNION ALL.\n注意code格式规范： 所有关键字大写，关键字右边对齐，子句缩进。即使很短的代码，也要严格要求自己，好的代码不仅自己能懂，也要让一个新人能很容易读懂。切不可随意潦草，我自己要慢慢修炼！")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  name\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  customer C\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" C1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id \n                                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customer C1\n                                      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" C1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("referee_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("法二：\n使用exists，先查出referee_id的数据，再用exists,注意语法，exists需要关联表。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customer C \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" C1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  customer C1 \n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  C1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v("  C1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" referee_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("法三：\n直接增加第二个判断，用OR。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customer C\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" referee_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" referee_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n法四: 用"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name \n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customer \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" referee_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name \n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customer \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" referee_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("为什么有时NOT IN 会查不到值，以及推导公式。\n如果用WHERE id NOT IN (1, 2, NULL), 是不能查出数据的。\n推导【经典】：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NOT和IN等价改写NOT IN ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v("（（id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v("（id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v("（id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("））"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用OR等价改写谓词IN")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//德摩根定律等价改写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用<>改写NOT 和 =")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" unknown "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//对NULL使用<>,结果为unknown")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" 或者 unknown "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//AND运算包含unknown,结果不可能为true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("结论：如果NOT IN的子查询用到的表里被选择的列中存在NULL，则SQL整体的查询结果永远是空！")]),s._v(" "),a("p",[s._v("为了解决烦人的NULL，最好在表里添加NOT NULL约束来尽力排除NULL")])])}),[],!1,null,null,null);a.default=r.exports}}]);