webpackJsonp([5],{"40jm":function(t,s,e){"use strict";s.a={name:"demo",components:{},data:function(){return{propList:[{attr:"value",type:"String",details:"默认值",default:"m"},{attr:"unSelectValue",type:"String",details:"开关在左侧默认值",default:"f"},{attr:"selectValue",type:"String",details:"开关在右侧默认值",default:"m"},{attr:"disabled",type:"Boolean",details:"是否禁用状态",default:"false"}],eventList:[{name:"change",detail:"点击切换时候触发",args:"切换值"}]}},methods:{},mounted:function(){}}},B4D3:function(t,s,e){"use strict";function a(t){e("Jn0F")}Object.defineProperty(s,"__esModule",{value:!0});var i=e("40jm"),l=e("tred"),n=e("VU/8"),v=a,_=n(i.a,l.a,!1,v,null,null);s.default=_.exports},Jn0F:function(t,s,e){var a=e("KiL/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("f033a21a",a,!0,{})},"KiL/":function(t,s,e){s=t.exports=e("FZ+f")(!1),s.push([t.i,"",""])},tred:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"card_item"},[e("h3",[t._v("Usage")]),t._v(" "),e("n22-highlight",{attrs:{lang:"html"}},[t._v("\n      <n22-switch :disabled = 'disabled'\n                     :value.sync=\"value\">\n</n22-switch>\n      ")]),t._v(" "),e("br"),t._v(" "),e("n22-highlight",{attrs:{lang:"javascript"}},[t._v("\n           // 塞入默认值\nsetValue () {\n  this.value = this.value == 'f' ? 'm' : 'f'\n},\n      ")])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.propList.length>0,expression:"propList.length > 0"}],staticClass:"card_item"},[e("h3",[t._v("Input Properties")]),t._v(" "),e("div",{staticClass:"table_box"},[t._m(1),t._v(" "),t._l(t.propList,function(s,a){return e("div",{key:a,staticClass:"box_row"},[e("div",{staticClass:"box_col"},[t._v(t._s(s.attr))]),t._v(" "),e("div",{staticClass:"box_col"},[t._v(t._s(s.type))]),t._v(" "),e("div",{staticClass:"box_col"},[t._v(t._s(s.details))]),t._v(" "),e("div",{staticClass:"box_col"},[t._v(t._s(s.default))])])})],2)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.eventList.length>0,expression:"eventList.length > 0"}],staticClass:"card_item"},[e("h3",[t._v("Event")]),t._v(" "),e("div",{staticClass:"table_box"},[t._m(2),t._v(" "),t._l(t.eventList,function(s,a){return e("div",{key:a,staticClass:"box_row"},[e("div",{staticClass:"box_col"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"box_col"},[t._v(t._s(s.detail))]),t._v(" "),e("div",{staticClass:"box_col"},[t._v(t._s(s.args))])])})],2)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card_item name_title"},[e("h3",[t._v("开关控件")]),t._v(" "),e("p")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header box_row"},[e("div",{staticClass:"box_col"},[t._v("Attr")]),t._v(" "),e("div",{staticClass:"box_col"},[t._v("Type")]),t._v(" "),e("div",{staticClass:"box_col"},[t._v("Details")]),t._v(" "),e("div",{staticClass:"box_col"},[t._v("Default")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header box_row"},[e("div",{staticClass:"box_col"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"box_col"},[t._v("Detail")]),t._v(" "),e("div",{staticClass:"box_col"},[t._v("Args")])])}],l={render:a,staticRenderFns:i};s.a=l}});