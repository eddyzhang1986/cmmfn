webpackJsonp([36],{OqES:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("WIfg"),i=n("du2I"),l=n("J0+h"),o=l(a.a,i.a,null,null,null);e.default=o.exports},WIfg:function(t,e,n){"use strict";var a=n("viA7");e.a={data:function(){return{list:null,listLoading:!0,downloadLoading:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,n.i(a.a)().then(function(e){t.list=e.data.items,t.listLoading=!1})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([n.e(53),n.e(54)]).then(function(){var e=n("zWO4"),a=e.export_json_to_excel,i=["序号","文章标题","作者","阅读数","发布时间"],l=["id","title","author","pageviews","display_time"],o=t.list;a(i,t.formatJson(l,o),"列表excel"),t.downloadLoading=!1}.bind(null,n)).catch(n.oe)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}}}},du2I:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",icon:"document",loading:t.downloadLoading},on:{click:t.handleDownload}},[t._v("导出excel")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"文章标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"作者",width:"95",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"阅读数",width:"115",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"发布时间",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.display_time))])]}}])})],1)],1)},i=[],l={render:a,staticRenderFns:i};e.a=l},viA7:function(t,e,n){"use strict";function a(t){return n.i(o.a)({url:"/article/list",method:"get",params:t})}function i(){return n.i(o.a)({url:"/article/detail",method:"get"})}function l(t){return n.i(o.a)({url:"/article/pv",method:"get",params:{pv:t}})}e.a=a,e.c=i,e.b=l;var o=n("Vo7i")}});