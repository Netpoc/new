(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f025"],{b298:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",[i("v-card",{attrs:{id:"kiddies",color:"#2F84C6",dark:"",height:"620"}},[i("v-row",{staticClass:"ma-5",attrs:{align:"center",justify:"space-around"}},[i("v-col",{attrs:{md:"7"}},[i("p",{staticClass:"display-2 font-weight-bold"},[e._v("OXFORD KIDDIES' HERITAGE")]),i("p",{staticClass:"ma-5"},[e._v("This product is designed to help parent invest ahead of time for their kids in other to secure a better future ground to stand upon. This product helps parent to invest in their children’s’ future by buying into real estate solutions, which simply translate parent buying landed property ahead of time for their kids because of the appreciative value landed property is known for. This product is ever increasing in value therefore, by the time the children are of age the value of the land is exponentially high and they can convert it to cash by selling the land should they choose or they can simply develop the property to keep the heritage going on the landed property. This product solution is designed to be affordable and flexible in payment plan which is done installmentally, up-to 24 months. The beauty of all this, is that the choice of location will always beat inflation at any point in time in the future. ")]),i("v-dialog",{attrs:{persistent:"","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[i("v-btn",e._g({staticClass:"white--text",attrs:{rounded:"",absolute:"",color:"orange",large:""}},a),[e._v(" Get started ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-row",[i("v-col",{staticClass:"ma-4"},[i("strong",{staticClass:"display-1"},[e._v("Oxford Kiddies's Heritage Application")]),i("v-form",{ref:"form",attrs:{id:"capital-form",method:"POST","lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("v-text-field",{attrs:{rules:e.emailRules,label:"Email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],1)],1),i("v-card-actions",{staticClass:"ma-2"},[i("v-btn",{attrs:{color:"success",rounded:"",disabled:!e.valid},on:{click:function(t){e.sendMessage(),e.reset(),e.popAlert=!0,e.validate}}},[e._v("Submit")]),i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1"},on:{click:function(t){e.dialog=!1}}},[e._v("Close")])],1)],1)],1),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"","max-width":"400",color:"success"},model:{value:e.popAlert,callback:function(t){e.popAlert=t},expression:"popAlert"}},[i("v-card",{staticClass:"ma-4",attrs:{"max-height":"100%"}},[!0===e.status?i("p",{staticClass:"ma-5"},[e._v(e._s(e.notification))]):e._e(),i("v-btn",{on:{click:function(t){e.popAlert=!1}}},[e._v("Close")]),!1===e.status?i("span",[e._v(" Please stand by, your message is been sent. "),i("v-progress-linear",{attrs:{indeterminate:"",color:"white"}})],1):e._e()],1)],1)],1),i("v-col",{attrs:{md:"4"}},[i("v-img",{attrs:{src:a("8d4c"),contain:"",height:"100%"}})],1)],1)],1)],1)},n=[],s=(a("b0c0"),a("bc3a")),o=a.n(s),r={data:function(){return{popAlert:!1,dialog:!1,status:!1,valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"}],phone:"",phoneRules:[function(e){return!!e||"Phone numeber is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],notification:""}},methods:{sendMessage:function(){var e=this,t="http://192.3.2.50:51100/contact/";o.a.post(t,{email:this.email,subject:"Oxford Kiddies Heritage Enquiry",phone:this.phone,name:this.name}).then((function(t){e.notification=t.data,e.status=!0})).catch((function(t){e.notification=t,e.status=!0}))},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},l=r,d=a("2877"),c=a("6544"),u=a.n(c),h=a("8336"),p=a("b0af"),f=a("99d9"),m=a("62ad"),v=a("169a"),b=a("4bd4"),g=a("adda"),y=a("8e36"),k=a("0fd9"),w=a("2fa4"),x=a("8654"),_=Object(d["a"])(l,i,n,!1,null,null,null);t["default"]=_.exports;u()(_,{VBtn:h["a"],VCard:p["a"],VCardActions:f["a"],VCol:m["a"],VDialog:v["a"],VForm:b["a"],VImg:g["a"],VProgressLinear:y["a"],VRow:k["a"],VSpacer:w["a"],VTextField:x["a"]})}}]);
//# sourceMappingURL=chunk-2d20f025.5d02d6a0.js.map