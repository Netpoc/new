(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-811b9c92"],{"0393":function(e,t,n){"use strict";n("0481"),n("4069");var a=n("5530"),s=(n("210b"),n("604c")),i=n("d9bd");t["a"]=s["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(a["a"])({},s["a"].options.computed.classes.call(this),{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(i["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(i["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(a)}}})},"210b":function(e,t,n){},"453d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-conatiner",{attrs:{fluid:""}},[a("p",{staticClass:"display-3"},[e._v("Oxford Capital")]),a("v-row",{staticClass:"ma-5"},[a("v-col",{attrs:{md:"8"}},[a("p",{staticClass:"text-justify ml-5"},[e._v(" Oxford Capital is a legacy investment, and a capital investment, that gives up to 300% return on investment in less than two years and it’s a one in life time business opportunity for investors. It is a capital investment and a Joint ventured investment model that runs through out a life time, meaning endless income as long as the business contract exist. It centres on land development either as estate, court, villa or city depending on capital involvement Oxford Capital Investment simply offer investment avenue for prospective investors to make enormous returns through land investment development. How this work is in two distinct features, Oxford Capital and Capital Plus. Oxford Capital investment is about landed property acquisition and development which covers only the basic amenities and infrastructure such as gate & perimeter fencing, security, road layout with interlocking road network, portable water, Light etc. Oxford Capital Plus investment has all the features of Oxford Capital but the difference is just that there would be structural Development on the landed property as added value, which would be then offer for sale to the public and our investors smiling to the bank with enormous profits ")]),a("v-dialog",{attrs:{persistent:"","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticClass:"white--text",attrs:{rounded:"",absolute:"",color:"orange",large:""}},n),[e._v(" Get started ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-row",[a("v-col",{staticClass:"ma-4"},[a("strong",{staticClass:"display-1"},[e._v("Oxford Capital Application")]),a("v-form",{ref:"form",attrs:{id:"capital-form",method:"POST","lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{rules:e.emailRules,label:"Email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],1)],1),a("v-card-actions",{staticClass:"ma-2"},[a("v-btn",{attrs:{color:"success",rounded:"",disabled:!e.valid},on:{click:function(t){e.sendMessage(),e.reset(),e.popAlert=!0,e.validate}}},[e._v("Submit")]),a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1"},on:{click:function(t){e.dialog=!1}}},[e._v("Close")])],1)],1)],1),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"","max-width":"400"},model:{value:e.popAlert,callback:function(t){e.popAlert=t},expression:"popAlert"}},[!0===e.status?a("v-card",{staticClass:"ma-4",attrs:{"max-height":"100%",color:"success"}},[a("p",{staticClass:"ma-5"},[e._v(e._s(e.notification))]),a("v-btn",{on:{click:function(t){e.popAlert=!1}}},[e._v("Close")]),!1===e.status?a("v-card-text",[e._v(" Please stand by, your message is been sent. "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1):e._e()],1):e._e()],1)],1),a("v-col",{attrs:{md:"3"}},[a("v-img",{attrs:{src:n("875b"),"max-height":"300",contain:""}})],1)],1),a("v-row",{staticClass:"ma-5"},[a("v-expansion-panels",{attrs:{flat:"",focusable:"",tile:"",accordion:"",align:"center"}},[a("v-expansion-panel",[a("p",{staticClass:"display-2"},[e._v("FREQUENTLY ASKED QUESTIONS (FAQs)")]),a("v-expansion-panel-header",[e._v("Where is the location?")]),a("v-expansion-panel-content",[a("p",{staticClass:"ma-3"},[e._v("Answer - All our locations are situated in prime developing areas of Lagos, Abeokuta & Ibadan with ongoing development which makes them suitable for investors, featuring notable landmarks. ")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[e._v("How much is the total cost involved?")]),a("v-expansion-panel-content",[a("p",{staticClass:"ma-3"},[e._v("Answer- This has to be worked out because of varying aspect of the project involvement. ")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[e._v("Will Amenities be assessed?")]),a("v-expansion-panel-content",[a("p",{staticClass:"ma-3"},[e._v("Answer- Yes. ")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[e._v("Is it easy to access the main road?")]),a("v-expansion-panel-content",[a("p",{staticClass:"ma-3"},[e._v("Answer- Definitely yes. One reason that makes us your number stop is the locations of our estate nearness to commercial activities and road link to the main high way. ")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[e._v("What documents have you on the estate?")]),a("v-expansion-panel-content",[a("p",{staticClass:"ma-3"},[e._v(" Answer- Documentes on our locations varies from registered survey to Certificate of Occupancy. Non is under government accusition. ")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",[e._v("Is the land safe and free from land grabbers (omo’nile)")]),a("v-expansion-panel-content",[a("p",{staticClass:"ma-3"},[e._v(" Answer- Yes, because we have painstakingly removed the issue of land grabbers from the equation. ")])])],1)],1)],1)],1)},s=[],i=(n("b0c0"),n("bc3a")),o=n.n(i),l={data:function(){return{popAlert:!1,dialog:!1,status:!1,valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"}],phone:"",phoneRules:[function(e){return!!e||"Phone numeber is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],notification:""}},methods:{sendMessage:function(){var e=this,t="https://192.3.2.50:51100/contact/";o.a.post(t,{email:this.email,subject:"Oxford Capital Enquiry",phone:this.phone,name:this.name}).then((function(t){e.notification=t.data,e.status=!0})).catch((function(t){e.notification=t,e.status=!0}))},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},r=l,c=n("2877"),d=n("6544"),p=n.n(d),u=n("8336"),v=n("b0af"),h=n("99d9"),f=n("62ad"),m=n("169a"),x=n("cd55"),b=n("49e2"),g=n("c865"),C=n("0393"),w=n("4bd4"),y=n("adda"),k=n("8e36"),A=n("0fd9"),_=n("2fa4"),O=n("8654"),P=Object(c["a"])(r,a,s,!1,null,null,null);t["default"]=P.exports;p()(P,{VBtn:u["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCol:f["a"],VDialog:m["a"],VExpansionPanel:x["a"],VExpansionPanelContent:b["a"],VExpansionPanelHeader:g["a"],VExpansionPanels:C["a"],VForm:w["a"],VImg:y["a"],VProgressLinear:k["a"],VRow:A["a"],VSpacer:_["a"],VTextField:O["a"]})},"49e2":function(e,t,n){"use strict";var a=n("0789"),s=n("9d65"),i=n("a9ad"),o=n("3206"),l=n("80d2"),r=n("58df"),c=Object(r["a"])(s["a"],i["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=c.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(a["a"],this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(l["k"])(t))])]})))}})},c865:function(e,t,n){"use strict";var a=n("5530"),s=n("0789"),i=n("9d26"),o=n("a9ad"),l=n("3206"),r=n("5607"),c=n("80d2"),d=n("58df"),p=Object(d["a"])(o["a"],Object(l["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=p.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(c["k"])(this,"actions")||[this.$createElement(i["a"],this.expandIcon)];return this.$createElement(s["b"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])({},this.$listeners,{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(c["k"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,n){"use strict";var a=n("5530"),s=n("4e82"),i=n("3206"),o=n("80d2"),l=n("58df");t["a"]=Object(l["a"])(Object(s["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(i["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(a["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["k"])(this))}})}}]);
//# sourceMappingURL=chunk-811b9c92.25f117ca.js.map