(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{606:function(s,n,t){"use strict";t.r(n);var a=t(4),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"excel-表中某个范围内的单元格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#excel-表中某个范围内的单元格"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://leetcode.cn/problems/cells-in-a-range-on-an-excel-sheet/description/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Excel 表中某个范围内的单元格"),n("OutboundLink")],1)]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[s._v("Category")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("Difficulty")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("Likes")]),s._v(" "),n("th",{staticStyle:{"text-align":"center"}},[s._v("Dislikes")])])]),s._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[s._v("algorithms")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("Easy (84.66%)")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("15")]),s._v(" "),n("td",{staticStyle:{"text-align":"center"}},[s._v("-")])])])]),s._v(" "),n("details",{staticStyle:{color:"rgb(225, 228, 232)","font-family":'-apple-system, "system-ui", "Segoe WPC", "Segoe UI", system-ui, Ubuntu, "Droid Sans", sans-serif',"font-size":"14px","font-style":"normal","font-variant-ligatures":"normal","font-variant-caps":"normal","font-weight":"400","letter-spacing":"normal",orphans:"2","text-align":"start","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","text-decoration-thickness":"initial","text-decoration-style":"initial","text-decoration-color":"initial"}},[n("summary",[n("strong",[s._v("Tags")])]),n("p",{staticStyle:{"margin-top":"0px","margin-bottom":"0.7em"}},[n("a",{staticStyle:{color:"var(--vscode-textLink-foreground)","text-decoration":"none"},attrs:{href:"https://leetcode.com/tag/Unknown",title:"https://leetcode.com/tag/Unknown"}},[n("code",{staticStyle:{color:"var(--vscode-textLink-foreground)","font-family":'var(--vscode-editor-font-family, "SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace)',"font-size":"1em","line-height":"1.357em","white-space":"pre-wrap"}})])])]),s._v(" "),n("details",{staticStyle:{color:"rgb(225, 228, 232)","font-family":'-apple-system, "system-ui", "Segoe WPC", "Segoe UI", system-ui, Ubuntu, "Droid Sans", sans-serif',"font-size":"14px","font-style":"normal","font-variant-ligatures":"normal","font-variant-caps":"normal","font-weight":"400","letter-spacing":"normal",orphans:"2","text-align":"start","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","text-decoration-thickness":"initial","text-decoration-style":"initial","text-decoration-color":"initial"}},[n("summary",[n("strong",[s._v("Companies")])]),n("p",{staticStyle:{"margin-top":"0px","margin-bottom":"0.7em"}},[n("code",{staticStyle:{color:"var(--vscode-textPreformat-foreground)","font-family":'var(--vscode-editor-font-family, "SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace)',"font-size":"1em","line-height":"1.357em","white-space":"pre-wrap"}})])]),s._v(" "),n("p",[s._v("Excel 表中的一个单元格 "),n("code",[s._v("(r, c)")]),s._v(" 会以字符串 "),n("code",[s._v('"<col><row>"')]),s._v(" 的形式进行表示，其中：")]),s._v(" "),n("ul",[n("li",[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<col>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("即单元格的列号")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("c\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("。用英文字母表中的")]),s._v(" "),n("p",[s._v("字母")]),s._v(" "),n("p",[s._v("标识。")]),s._v(" "),n("ul",[n("li",[s._v("例如，第 "),n("code",[s._v("1")]),s._v(" 列用 "),n("code",[s._v("'A'")]),s._v(" 表示，第 "),n("code",[s._v("2")]),s._v(" 列用 "),n("code",[s._v("'B'")]),s._v(" 表示，第 "),n("code",[s._v("3")]),s._v(" 列用 "),n("code",[s._v("'C'")]),s._v(" 表示，以此类推。")])])]),s._v(" "),n("li",[n("p",[n("code",[s._v("<row>")]),s._v(" 即单元格的行号 "),n("code",[s._v("r")]),s._v(" 。第 "),n("code",[s._v("r")]),s._v(" 行就用 "),n("strong",[s._v("整数")]),s._v(" "),n("code",[s._v("r")]),s._v(" 标识。")])])]),s._v(" "),n("p",[s._v("给你一个格式为 "),n("code",[s._v('"<col1><row1>:<col2><row2>"')]),s._v(" 的字符串 "),n("code",[s._v("s")]),s._v(" ，其中 "),n("code",[s._v("<col1>")]),s._v(" 表示 "),n("code",[s._v("c1")]),s._v(" 列，"),n("code",[s._v("<row1>")]),s._v(" 表示 "),n("code",[s._v("r1")]),s._v(" 行，"),n("code",[s._v("<col2>")]),s._v(" 表示 "),n("code",[s._v("c2")]),s._v(" 列，"),n("code",[s._v("<row2>")]),s._v(" 表示 "),n("code",[s._v("r2")]),s._v(" 行，并满足 "),n("code",[s._v("r1 <= r2")]),s._v(" 且 "),n("code",[s._v("c1 <= c2")]),s._v(" 。")]),s._v(" "),n("p",[s._v("找出所有满足 "),n("code",[s._v("r1 <= x <= r2")]),s._v(" 且 "),n("code",[s._v("c1 <= y <= c2")]),s._v(" 的单元格，并以列表形式返回。单元格应该按前面描述的格式用 "),n("strong",[s._v("字符串")]),s._v(" 表示，并以 "),n("strong",[s._v("非递减")]),s._v(" 顺序排列（先按列排，再按行排）。")]),s._v(" "),n("p",[n("strong",[s._v("示例 1：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/Users/izhaong/izhaong/Project_me/Blog/izhaong.com-localFile/30502194.excel-%E8%A1%A8%E4%B8%AD%E6%9F%90%E4%B8%AA%E8%8C%83%E5%9B%B4%E5%86%85%E7%9A%84%E5%8D%95%E5%85%83%E6%A0%BC/ex1drawio.png",alt:"img"}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('输入：s = "K1:L2"\n输出：["K1","K2","L1","L2"]\n解释：\n上图显示了列表中应该出现的单元格。\n红色箭头指示单元格的出现顺序。\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("示例 2：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/Users/izhaong/izhaong/Project_me/Blog/izhaong.com-localFile/30502194.excel-%E8%A1%A8%E4%B8%AD%E6%9F%90%E4%B8%AA%E8%8C%83%E5%9B%B4%E5%86%85%E7%9A%84%E5%8D%95%E5%85%83%E6%A0%BC/exam2drawio.png",alt:"img"}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('输入：s = "A1:F1"\n输出：["A1","B1","C1","D1","E1","F1"]\n解释：\n上图显示了列表中应该出现的单元格。 \n红色箭头指示单元格的出现顺序。\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("提示：")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("s.length == 5")])]),s._v(" "),n("li",[n("code",[s._v("'A' <= s[0] <= s[3] <= 'Z'")])]),s._v(" "),n("li",[n("code",[s._v("'1' <= s[1] <= s[4] <= '9'")])]),s._v(" "),n("li",[n("code",[s._v("s")]),s._v(" 由大写英文字母、数字、和 "),n("code",[s._v("':'")]),s._v(" 组成")])]),s._v(" "),n("hr"),s._v(" "),n("p",[n("a",{attrs:{href:"https://leetcode.cn/problems/cells-in-a-range-on-an-excel-sheet/comments/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Discussion"),n("OutboundLink")],1),s._v(" | "),n("a",{attrs:{href:"https://leetcode.cn/problems/cells-in-a-range-on-an-excel-sheet/solution/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Solution"),n("OutboundLink")],1)]),s._v(" "),n("hr"),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶\n * @Date: 2022-11-11 11:30:21\n * @LastEditTime: 2022-11-11 13:58:41\n * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶\n * @Description:\n * @FilePath: /loan-home/Users/izhaong/izhaong/Project_me/leetcode/2194.excel-表中某个范围内的单元格.js\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*\n * @lc app=leetcode.cn id=2194 lang=javascript\n *\n * [2194] Excel 表中某个范围内的单元格\n *\n * https://leetcode.cn/problems/cells-in-a-range-on-an-excel-sheet/description/\n *\n * algorithms\n * Easy (84.66%)\n * Likes:    15\n * Dislikes: 0\n * Total Accepted:    12.3K\n * Total Submissions: 14.5K\n * Testcase Example:  \'"K1:L2"\'\n *\n * Excel 表中的一个单元格 (r, c) 会以字符串 "<col><row>" 的形式进行表示，其中：\n *\n *\n * <col> 即单元格的列号 c 。用英文字母表中的 字母 标识。\n *\n *\n * 例如，第 1 列用 \'A\' 表示，第 2 列用 \'B\' 表示，第 3 列用 \'C\' 表示，以此类推。\n *\n *\n * <row> 即单元格的行号 r 。第 r 行就用 整数 r 标识。\n *\n *\n * 给你一个格式为 "<col1><row1>:<col2><row2>" 的字符串 s ，其中 <col1> 表示 c1 列，<row1> 表示 r1\n * 行，<col2> 表示 c2 列，<row2> 表示 r2 行，并满足 r1 <= r2 且 c1 <= c2 。\n *\n * 找出所有满足 r1 <= x <= r2 且 c1 <= y <= c2 的单元格，并以列表形式返回。单元格应该按前面描述的格式用 字符串 表示，并以\n * 非递减 顺序排列（先按列排，再按行排）。\n *\n *\n *\n * 示例 1：\n *\n *\n *\n *\n * 输入：s = "K1:L2"\n * 输出：["K1","K2","L1","L2"]\n * 解释：\n * 上图显示了列表中应该出现的单元格。\n * 红色箭头指示单元格的出现顺序。\n *\n *\n * 示例 2：\n *\n *\n *\n *\n * 输入：s = "A1:F1"\n * 输出：["A1","B1","C1","D1","E1","F1"]\n * 解释：\n * 上图显示了列表中应该出现的单元格。\n * 红色箭头指示单元格的出现顺序。\n *\n *\n *\n *\n * 提示：\n *\n *\n * s.length == 5\n * \'A\' <= s[0] <= s[3] <= \'Z\'\n * \'1\' <= s[1] <= s[4] <= \'9\'\n * s 由大写英文字母、数字、和 \':\' 组成\n *\n *\n */')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=start")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {string} s\n * @return {string[]}\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// var cellsInRange = function (s) {")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   const [start, end] = s.split(":");')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   const [sa, sw, sd] = /(^[A-Z])(\\d+)/.exec(start);")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   const [ea, ew, ed] = /(^[A-Z])(\\d+)/.exec(end);")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   let resArr = [];")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   for (let i = sw.charCodeAt(); i <= ew.charCodeAt(); i++) {")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     for (let j = 1; j <= ed - sd + 1; j++) {")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       resArr.push(String.fromCharCode(i) + j);")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     }")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   }")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   return resArr.length;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// };")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("cellsInRange")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" colonIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("indexOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sw "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" colonIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" colonIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ew "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("colonIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("colonIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" resArr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("charCodeAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" ew"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("charCodeAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" ed "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" sd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      resArr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fromCharCode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" resArr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @lc code=end")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);