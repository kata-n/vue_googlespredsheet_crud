(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue_googlespredsheet_crud/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3e4b":function(e,t,a){"use strict";a("bf50")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("2f62"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"green",dark:""}},[a("v-toolbar-title",[e._v(e._s(e.appName))]),a("v-spacer"),a("v-btn",{attrs:{icon:"",to:"/"}},[a("v-icon",[e._v("mdi-file-table-outline")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.producrion,expression:"producrion"}],attrs:{icon:"",to:"/settings"}},[a("v-icon",[e._v("mdi-cog")])],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-snackbar",{attrs:{color:"error"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.errorMessage))])],1)},o=[],i={name:"App",data:function(){return{snackbar:!1,producrion:!1}},computed:Object(r["d"])({appName:function(e){return e.settings.appName},errorMessage:function(e){return e.errorMessage}}),watch:{errorMessage:function(){this.snackbar=!0}},beforeCreate:function(){this.$store.dispatch("loadSettings")}},c=i,l=a("2877"),u=a("6544"),d=a.n(u),f=a("7496"),m=a("40dc"),b=a("8336"),p=a("a523"),v=a("132d"),g=a("f6c4"),h=a("2db4"),j=a("2fa4"),k=a("2a7f"),y=Object(l["a"])(c,s,o,!1,null,null,null),x=y.exports;d()(y,{VApp:f["a"],VAppBar:m["a"],VBtn:b["a"],VContainer:p["a"],VIcon:v["a"],VMain:g["a"],VSnackbar:h["a"],VSpacer:j["a"],VToolbarTitle:k["a"]});var _=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"card__conteiner"},[a("v-card-title",[a("v-col",{attrs:{cols:"8",sm:"3"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.yearMonth,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.yearMonth=t},"update:return-value":function(t){e.yearMonth=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{"prepend-icon":"mdi-calendar",readonly:"","hide-details":""},model:{value:e.yearMonth,callback:function(t){e.yearMonth=t},expression:"yearMonth"}},n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{staticClass:"date__picker",attrs:{type:"month",color:"green",locale:"ja-jp","no-title":"",scrollable:""},model:{value:e.yearMonth,callback:function(t){e.yearMonth=t},expression:"yearMonth"}}),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"gray"},on:{click:function(t){e.menu=!1}}},[e._v("キャンセル")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.onSelectMonth}},[e._v("選択する")])],1)],1),a("v-col",{staticClass:"text-right",attrs:{cols:"4"}},[a("v-btn",{attrs:{dark:"",color:"green"},on:{click:e.onClickAdd}},[a("v-icon",[e._v("mdi-plus")])],1)],1),a("v-col",{staticClass:"overflow-x-auto",attrs:{cols:"12",sm:"8"}},[a("div",{staticClass:"summary"},[a("div",{staticClass:"mr-4"},[a("table",{staticClass:"text-right"},[a("tr",[a("td",[e._v("収入：")]),a("td",[e._v(e._s(e.separate(e.sum.income)))])]),a("tr",[a("td",[e._v("支出：")]),a("td",[e._v(e._s(e.separate(e.sum.outgo)))])]),a("tr",[a("td",[e._v("収支差：")]),a("td",[e._v(e._s(e.separate(e.sum.income-e.sum.outgo)))])])])]),e._l(e.sum.categories,(function(t){return a("div",{key:t[0]},[a("v-progress-circular",{staticClass:"mr-2",attrs:{rotate:-90,size:60,width:5,value:t[1],color:"teal"}},[e._v(" "+e._s(t[0])+" ")]),a("div",{staticClass:"text-center mr-2"},[e._v(e._s(e.separate(t[2])))])],1)}))],2)]),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),a("v-data-table",{staticClass:"text-no-wrap",attrs:{headers:e.tableHeaders,items:e.tableData,search:e.search,"footer-proprs":e.footerProps,loading:e.loading,"sort-by":"date","sort-desc":!0,"items-per-page":30,"mobile-breakpoint":"0"},scopedSlots:e._u([{key:"item.date",fn:function(t){var a=t.item;return[e._v(" "+e._s(parseInt(a.date.slice(-2))+"日")+" ")]}},{key:"item.tags",fn:function(t){var n=t.item;return[n.tags?a("div",e._l(n.tags.split(","),(function(t,n){return a("v-chip",{key:n,staticClass:"mr-2"},[e._v(" "+e._s(t)+" ")])})),1):e._e()]}},{key:"item.income",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.separate(a.income))+" ")]}},{key:"item.outgo",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.separate(a.outgo))+" ")]}},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",on:{click:function(t){return e.onClickEdit(n)}}},[e._v("mdi-pencil")]),a("v-icon",{on:{click:function(t){return e.onClickDelete(n)}}},[e._v("mdi-delete")])]}}],null,!0)})],1),a("ItemDialog",{ref:"itemDialog"}),a("DeleteDialog",{ref:"deleteDialog"})],1)},D=[],O=(a("99af"),a("fb6a"),a("4fad"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("96cf"),a("1da1")),M=a("3835"),C=a("b85c"),I=a("5530"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{scrollable:"",persistent:"","max-width":"500px",eager:""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("v-card",[a("v-card-title",[e._v(e._s(e.titleText))]),a("v-divider"),a("v-card-text",[a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{"prepend-icon":"mdi-calendar",readonly:"","hide-details":""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{color:"green",locale:"ja-jp","day-format":function(e){return new Date(e).getDate()},"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(t){e.menu=!1}}},[e._v("キャンセル")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("選択")])],1)],1),a("v-text-field",{attrs:{label:"タイトル",counter:20,rules:e.titleRules,readonly:""},model:{value:e.titleMaking,callback:function(t){e.titleMaking="string"===typeof t?t.trim():t},expression:"titleMaking"}}),a("v-radio-group",{attrs:{row:"","hide-details":""},on:{change:e.onChangeInout},model:{value:e.inout,callback:function(t){e.inout=t},expression:"inout"}},[a("v-radio",{attrs:{label:"収入",value:"income"}}),a("v-radio",{attrs:{label:"支出",value:"outgo"}})],1),a("v-select",{attrs:{label:"カテゴリ",items:e.categoryItems,"hide-details":""},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}),a("v-select",{attrs:{label:"タグ",items:e.tagItems,multiple:"",chips:"",rules:[e.tagRule]},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}}),a("v-text-field",{attrs:{label:"金額",prefix:"￥",pattern:"[0-9]*",rules:e.amountRules},model:{value:e.amount,callback:function(t){e.amount=e._n(t)},expression:"amount"}}),a("v-text-field",{attrs:{label:"メモ",counter:50,rules:[e.memoRule],readonly:""},model:{value:e.memoMaking,callback:function(t){e.memoMaking=t},expression:"memoMaking"}})],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey darken-1",text:"",disabled:e.loading},on:{click:e.onClickClose}},[e._v(" キャンセル ")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.valid,loading:e.loading},on:{click:e.onClickAction}},[e._v(" "+e._s(e.actionText)+" ")])],1)],1)],1)},V=[],R=(a("a15b"),a("a9e3"),a("8ba4"),a("1276"),a("498a"),a("c1df")),S=a.n(R),A={name:"ItemDialog",data:function(){return{show:!1,valid:!1,menu:!1,actionType:"add",id:"",date:"",title:"",inout:"",category:"",tags:[],amount:0,memo:"",titleEx:"",memoEx:"",categoryItems:[],beforeYM:"",titleRules:[function(e){return e.trim().length>0||"タイトルは必須項目です"},function(e){return e.length<=20||"20字以内で入力して下さい"}],tagRule:function(e){return e.length<=5||"タグは５種類以内で選択して下さい"},amountRules:[function(e){return e>=0||"金額は0以上で入力して下さい"},function(e){return Number.isInteger(e)||"整数で入力して下さい"}],memoRule:function(e){return e.length<=50||"メモは50字以内で入力して下さい"}}},computed:Object(I["a"])(Object(I["a"])(Object(I["a"])({},Object(r["c"])(["incomeItems","outgoItems","tagItems"])),Object(r["d"])({loading:function(e){return e.loading.fetch}})),{},{titleText:function(){return"add"===this.actionType?"データ追加":"データ編集"},actionText:function(){return"add"===this.actionType?"追加":"更新"},titleMaking:function(){var e=new Date;return""===this.titleEx?S()(e).format("HH:mm")+"に追加":"仮データ"},memoMaking:function(){return""===this.memoEx?this.category+"を追加します！":"仮データ"}}),methods:Object(I["a"])(Object(I["a"])({},Object(r["b"])(["addAbData","updateAbData"])),{},{open:function(e,t){this.show=!0,this.actionType=e,this.resetForm(t),"edit"===e&&(this.beforeYM=t.date.slice(0,7))},onClickClose:function(){this.show=!1},onClickAction:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a={date:e.date,title:e.titleMaking,category:e.category,tags:e.tags.join(","),memo:e.memoMaking,income:null,outgo:null},a[e.inout]=e.amount||0,"add"!==e.actionType){t.next=7;break}return t.next=5,e.addAbData({item:a});case 5:t.next=10;break;case 7:return a.id=e.id,t.next=10,e.updateAbData({beforeYM:e.beforeYM,item:a});case 10:e.show=!1;case 11:case"end":return t.stop()}}),t)})))()},onChangeInout:function(){"income"===this.inout?this.categoryItems=this.incomeItems:this.categoryItems=this.outgoItems,this.category=this.categoryItems[0]},resetForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.id=e.id||"",this.date=e.date,this.title=e.title||"",this.inout=""!=e.income?"income":"outgo",this.category=e.category,"income"===this.inout?(this.categoryItems=this.incomeItems,this.amount=e.income||0):(this.categoryItems=this.outgoItems,this.amount=e.outgo||0),this.category=e.category||this.categoryItems[0],this.tags=e.tags?e.tags.split(","):[],this.memo=e.memo||"",this.$refs.form.resetValidation()}})},E=A,z=a("b0af"),$=a("99d9"),P=a("2e4b"),N=a("169a"),U=a("ce7e"),L=a("4bd4"),F=a("e449"),B=a("67b6"),Y=a("43a6"),H=a("b974"),J=a("8654"),q=Object(l["a"])(E,T,V,!1,null,null,null),G=q.exports;d()(q,{VBtn:b["a"],VCard:z["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VDatePicker:P["a"],VDialog:N["a"],VDivider:U["a"],VForm:L["a"],VMenu:F["a"],VRadio:B["a"],VRadioGroup:Y["a"],VSelect:H["a"],VSpacer:j["a"],VTextField:J["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:"",width:"450"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("v-card",[a("v-card-title",[a("v-card-text",{staticClass:"black--text"},[e._v(" 「"+e._s(e.item.title)+"」を削除しますか？ ")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey",text:"",disabled:e.loading},on:{click:e.onClickClose}},[e._v("キャンセル")]),a("v-btn",{attrs:{color:"red",text:"",loading:e.loading},on:{click:e.onClickDelete}},[e._v("削除")])],1)],1)],1)},Q=[],W={name:"DeleteDialog",data:function(){return{show:!1,item:{}}},computed:Object(r["d"])({loading:function(e){return e.loading.delete}}),methods:Object(I["a"])(Object(I["a"])({},Object(r["b"])(["deleteAbData"])),{},{openClisedialog:function(e){this.show=!0,this.item=e},onClickClose:function(){this.show=!1},onClickDelete:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.deleteAbData({item:e.item});case 2:e.show=!1;case 3:case"end":return t.stop()}}),t)})))()}})},X=W,Z=Object(l["a"])(X,K,Q,!1,null,null,null),ee=Z.exports;d()(Z,{VBtn:b["a"],VCard:z["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VDialog:N["a"],VSpacer:j["a"]});var te={name:"Home",components:{ItemDialog:G,DeleteDialog:ee},data:function(){var e=new Date,t=e.getFullYear(),a=("0"+(e.getMonth()+1)).slice(-2);return{menu:!1,search:"",yearMonth:"".concat(t,"-").concat(a),tableData:[]}},computed:Object(I["a"])(Object(I["a"])({},Object(r["d"])({abData:function(e){return e.abData},loading:function(e){return e.loading.fetch}})),{},{tableHeaders:function(){return[{text:"日付",value:"date",align:"end"},{text:"タイトル",value:"title",sortable:!1},{text:"カテゴリ",value:"category",sortable:!1},{text:"タグ",value:"tags",sortable:!1},{text:"収入",value:"income",align:"end"},{text:"支出",value:"outgo",align:"end"},{text:"メモ",value:"memo",sortable:!1},{text:"操作",value:"actions",sortable:!1}]},footerProps:function(){return{itemsPerPageText:"",itemsPerPageOptions:[]}},sum:function(){var e,t=0,a=0,n={},r=[],s=Object(C["a"])(this.tableData);try{for(s.s();!(e=s.n()).done;){var o=e.value;null!==o.income?t+=o.income:(a+=o.outgo,n[o.category]?n[o.category]+=o.outgo:n[o.category]=o.outgo)}}catch(b){s.e(b)}finally{s.f()}var i,c=Object.entries(n).sort((function(e,t){return t[1]-e[1]})),l=Object(C["a"])(c);try{for(l.s();!(i=l.n()).done;){var u=Object(M["a"])(i.value,2),d=u[0],f=u[1],m=parseInt(f/a*100);r.push([d,m,f])}}catch(b){l.e(b)}finally{l.f()}return{income:t,outgo:a,categories:r}}}),methods:Object(I["a"])(Object(I["a"])({},Object(r["b"])(["fetchAbData"])),{},{updateTable:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.yearMonth,n=e.abData[a],!n){t.next=6;break}e.tableData=n,t.next=9;break;case 6:return t.next=8,e.fetchAbData({yearMonth:a});case 8:e.tableData=e.abData[a];case 9:case"end":return t.stop()}}),t)})))()},separate:function(e){return null!==e?e.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,"):null},onClickAdd:function(){this.$refs.itemDialog.open("add")},onClickEdit:function(e){this.$refs.itemDialog.open("edit",e)},onClickDelete:function(e){this.$refs.deleteDialog.openClisedialog(e)},onSelectMonth:function(){this.$refs.menu.save(this.yearMonth),this.updateTable()}}),created:function(){this.updateTable}},ae=te,ne=(a("cccb"),a("cc20")),re=a("62ad"),se=a("8fea"),oe=a("490a"),ie=Object(l["a"])(ae,w,D,!1,null,null,null),ce=ie.exports;d()(ie,{VBtn:b["a"],VCard:z["a"],VCardTitle:$["c"],VChip:ne["a"],VCol:re["a"],VDataTable:se["a"],VDatePicker:P["a"],VIcon:v["a"],VMenu:F["a"],VProgressCircular:oe["a"],VSpacer:j["a"],VTextField:J["a"]});var le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-wrapper"},[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("h5",[e._v("Settingsページ")]),a("v-text-field",{attrs:{label:"アプリ名",counter:30,rules:[e.appNameRule],readonly:""},model:{value:e.settings.appName,callback:function(t){e.$set(e.settings,"appName",t)},expression:"settings.appName"}}),a("h3",[e._v("カテゴリ／タグ設定")]),a("p",[e._v("カンマ（ , ）区切りで入力してください。")]),a("v-text-field",{attrs:{label:"収入カテゴリ",counter:150,rules:[e.stringRule].concat(e.categoryRules),readonly:""},model:{value:e.settings.strIncomeItems,callback:function(t){e.$set(e.settings,"strIncomeItems",t)},expression:"settings.strIncomeItems"}}),a("v-text-field",{attrs:{label:"支出カテゴリ",counter:150,rules:[e.stringRule].concat(e.categoryRules),readonly:""},model:{value:e.settings.strOutgoItems,callback:function(t){e.$set(e.settings,"strOutgoItems",t)},expression:"settings.strOutgoItems"}}),a("v-text-field",{attrs:{label:"タグ",counter:150,rules:[e.stringRule,e.tagRule],readonly:""},model:{value:e.settings.strTagItems,callback:function(t){e.$set(e.settings,"strTagItems",t)},expression:"settings.strTagItems"}}),a("v-text-field",{attrs:{label:"API URL",counter:150,rules:[e.stringRule],readonly:""},model:{value:e.settings.apiUrl,callback:function(t){e.$set(e.settings,"apiUrl",t)},expression:"settings.apiUrl"}}),a("v-text-field",{attrs:{label:"Auth Token",counter:150,rules:[e.stringRule],readonly:""},model:{value:e.settings.authToken,callback:function(t){e.$set(e.settings,"authToken",t)},expression:"settings.authToken"}}),a("v-row",{staticClass:"mt-4"},[a("v-spacer"),a("v-btn",{attrs:{color:"primary",disabled:e.valid},on:{click:e.onClickSave}},[e._v("保存")])],1)],1)],1)},ue=[],de=(a("4de4"),a("d81d"),a("13d5"),{name:"Settings",data:function(){var e=function(e){return e.split(",").map((function(e){return e.trim()})).filter((function(e){return 0!==e.length}))},t=function(t){return e(t).reduce((function(e,t){return Math.max(e,t.length)}),0)};return{valid:!1,settings:Object(I["a"])({},this.$store.state.settings),appNameRule:function(e){return e.length<=30||"30文字以内で入力してください"},stringRule:function(e){return e.length<=150||"150文字以内で入力してください"},categoryRules:[function(t){return 0!==e(t).length||"カテゴリは1つ以上必要です"},function(e){return t(e)<=4||"各カテゴリは4文字以内で入力してください"}],tagRule:function(e){return t(e)<=4||"各タグは四文字以内で入力してください"}}},methods:{onClickSave:function(){this.$store.dispatch("saveSettings",{settings:this.settings})}}}),fe=de,me=(a("3e4b"),a("0fd9")),be=Object(l["a"])(fe,le,ue,!1,null,null,null),pe=be.exports;d()(be,{VBtn:b["a"],VForm:L["a"],VRow:me["a"],VSpacer:j["a"],VTextField:J["a"]});var ve=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ge=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h5",[e._v("Counter")])])}],he={name:"Counter",computed:{count:function(){return this.$store.state.count}}},je=he,ke=Object(l["a"])(je,ve,ge,!1,null,null,null),ye=ke.exports;n["a"].use(_["a"]);var xe=[{path:"/",name:"Home",component:ce},{path:"/settings",name:"Settings",component:pe},{path:"/Counter",name:"Counter",component:ye}],_e=new _["a"]({routes:xe}),we=_e,De=(a("c740"),a("a434"),a("bc3a")),Oe=a.n(De),Me=Oe.a.create({headers:{"content-type":"application/x-www-form-urlencoded"}});Me.interceptors.response.use((function(e){return e.data.error?Promise.reject(e.data.error):Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var Ce=function(e){Me.defaults.baseURL=e},Ie="",Te=function(e){Ie=e},Ve=function(e){return Me.post("",{method:"GET",authToken:Ie,params:{yearMonth:e}})},Re=function(e){return Me.post("",{method:"POST",authToken:Ie,params:{item:e}})},Se=function(e,t){return Me.post("",{method:"DELETE",authToken:Ie,params:{yearMonth:e,id:t}})},Ae=function(e,t){return Me.post("",{method:"PUT",authToken:Ie,params:{beforeYM:e,item:t}})},Ee={setUrl:Ce,setAuthToken:Te,fetch:Ve,add:Re,delete:Se,update:Ae};n["a"].use(r["a"]);var ze={abData:{},loading:{fetch:!1,add:!1,update:!1,delete:!1},errorMessage:"",settings:{appName:"家計簿！",apiUrl:"https://script.google.com/macros/s/AKfycbzFEyBSTh5lLTKayq8SoCENeC7fvUCsuEyzKpVyfi-5_tdehr_4sEOoGA/exec",authToken:"88638c0c-7519-11eb-9439-0242ac130002",strIncomeItems:"",strOutgoItems:"",strTagItems:""}},$e={setAbData:function(e,t){var a=t.yearMonth,n=t.list;e.abData[a]=n},addAbData:function(e,t){var a=t.item,n=a.date.slice(0,7),r=e.abData[n];r&&r.push(a)},updateAbData:function(e,t){var a=t.yearMonth,n=t.item,r=e.abData[a];if(r){var s=r.findIndex((function(e){return e.id===n.id}));r.splice(s,1,n)}},deleteAbData:function(e,t){var a=t.yearMonth,n=t.id,r=e.abData[a];if(r){var s=r.findIndex((function(e){return e.id===n}));r.splice(s,1)}},setLoading:function(e,t){var a=t.type,n=t.v;e.loading[a]=n},setErrorMessage:function(e,t){var a=t.message;e.errorMessage=a},saveSettings:function(e,t){var a=t.settings;e.settings=Object(I["a"])({},a);var n=e.settings,r=n.appName,s=n.apiUrl,o=n.authToken;document.title=r,Ee.setUrl(s),Ee.setAuthToken(o),e.abData={},localStorage.setItem("settings",JSON.stringify(a))},loadSettings:function(e){var t=JSON.parse(localStorage.getItem("settings"));t&&(e.settings=Object.assign(e.settings,t));var a=e.settings,n=a.appName,r=a.apiUrl,s=a.authToken;document.title=n,Ee.setUrl(r),Ee.setAuthToken(s)}},Pe={fetchAbData:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function a(){var n,r,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=t.yearMonth,s="fetch",n("setLoading",{type:s,v:!0}),a.prev=4,a.next=7,Ee.fetch(r);case 7:o=a.sent,n("setAbData",{yearMonth:r,list:o.data}),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](4),n("setErrorMessage",{message:a.t0}),n("setAbData",{yearMonth:r,list:[]});case 15:return a.prev=15,n("setLoading",{type:s,v:!1}),a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[4,11,15,18]])})))()},addAbData:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function a(){var n,r,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=t.item,s="add",n("setLoading",{type:s,v:!0}),a.prev=4,a.next=7,Ee.add(r);case 7:o=a.sent,n("addAbData",{item:o.data}),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](4),n("setErrorMessage",{message:a.t0});case 14:return a.prev=14,n("setLoading",{type:s,v:!1}),a.finish(14);case 17:case"end":return a.stop()}}),a,null,[[4,11,14,17]])})))()},updateAbData:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function a(){var n,r,s,o,i,c,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=t.beforeYM,s=t.item,o="update",i=s.date.slice(0,7),n("setLoading",{type:o,v:!0}),a.prev=5,a.next=8,Ee.update(r,s);case 8:if(c=a.sent,i!==r){a.next=12;break}return n("updateAbData",{yearMonth:i,item:s}),a.abrupt("return");case 12:l=s.id,n("deleteAbData",{yearMonth:r,id:l}),n("addAbData",{item:c.data}),a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](5),n("setErrorMessage",{message:"エラーが発生しました。しばらく待ってからもう一度やり直してください"});case 20:return a.prev=20,n("setLoading",{type:o,v:!1}),a.finish(20);case 23:case"end":return a.stop()}}),a,null,[[5,17,20,23]])})))()},deleteAbData:function(e,t){return Object(O["a"])(regeneratorRuntime.mark((function a(){var n,r,s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,r=t.item,s="delete",o=r.date.slice(0,7),i=r.id,n("setLoading",{type:s,v:!0}),a.prev=6,a.next=9,Ee.delete(o,i);case 9:n("deleteAbData",{yearMonth:o,id:i}),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](6),n("setErrorMessage",{message:"エラーが発生しました。しばらく待ってからもう一度やり直してく"});case 15:return a.prev=15,n("setLoading",{type:s,v:!1}),a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[6,12,15,18]])})))()},saveSettings:function(e,t){var a=e.commit,n=t.settings;a("saveSettings",{settings:n})},loadSettings:function(e){var t=e.commit;t("loadSettings")}},Ne=function(e){return e.split(",").map((function(e){return e.trim()})).filter((function(e){return 0!==e.length}))},Ue={incomeItems:function(e){return Ne(e.settings.strIncomeItems)},outgoItems:function(e){return Ne(e.settings.strOutgoItems)},tagItems:function(e){return Ne(e.settings.strTagItems)}},Le=new r["a"].Store({state:ze,mutations:$e,actions:Pe,getters:Ue}),Fe=Le,Be=a("f309");n["a"].use(Be["a"]);var Ye=new Be["a"]({});n["a"].config.productionTip=!1,n["a"].use(r["a"]),new n["a"]({router:we,store:Fe,vuetify:Ye,render:function(e){return e(x)}}).$mount("#app")},"5ced":function(e,t,a){},bf50:function(e,t,a){},cccb:function(e,t,a){"use strict";a("5ced")}});