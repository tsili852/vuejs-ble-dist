webpackJsonp([1],{"+j2Z":function(t,e,n){"use strict";var a=n("mvHQ"),i=n.n(a);e.a={name:"test",data:function(){return{title:"BLE Test",user:{firstName:"Nick",lastName:"Tsilivis"}}},mounted:function(){/Chrome\/(\d+\.\d+.\d+.\d+)/.test(navigator.userAgent)&&45>parseInt(RegExp.$1)&&this.setStatus("Warning! Keep in mind this sample has been tested with Chrome 45."),navigator.bluetooth||this.setStatus("Web Bluetooth API is not available.\n")},methods:{getDevices:function(t){var e=this;t.preventDefault(),this.clearLog();var n=document.querySelector("#service").value;n.startsWith("0x")&&(n=parseInt(n)),this.log("Service UUID: "+n);var a=document.querySelector("#characteristic").value;a.startsWith("0x")&&(a=parseInt(a)),this.log("Characteristic UUID: "+a),this.log("Requesting Bluetooth Device..."),navigator.bluetooth.requestDevice({filters:[{services:[n]}]}).then(function(t){return e.log("-> Name:      "+t.name),e.log("-> ID:        "+t.id),t.gatt.connect()}).then(function(t){return e.log("Getting Service"),t.getPrimaryService(n)}).then(function(t){if(e.log("Getting characteristic"),a)return t.getCharacteristic(a)}).then(function(t){e.log(">Characteristic: "+t.map(function(t){return t.uuid}).join("\n"+"".repeat(19)))}).catch(function(t){e.log("Argh! "+t)})},log:function(){var t=Array.prototype.slice.call(arguments).map(function(t){return"string"==typeof t?t:i()(t)}).join(" ");document.querySelector("#log").textContent+=t+"\n"},clearLog:function(){document.querySelector("#log").textContent=""},setStatus:function(t){document.querySelector("#status").textContent=t},setContent:function(){for(var t=document.querySelector("#content");t.hasChildNodes();)t.removeChild(t.lastChild);t.appendChild(newContent)}}}},"2TzR":function(t,e){},BVxo:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("form",{on:{submit:t.getDevices}},[n("input",{attrs:{id:"service",type:"text",size:"17",list:"services",placeholder:"Bluetooth Service"}}),t._v(" "),n("input",{attrs:{id:"characteristic",type:"text",size:"17",placeholder:"Characteristic"}}),t._v(" "),n("input",{attrs:{type:"submit",value:"Get Devices"}})]),t._v(" "),t._m(0),t._v(" "),n("h3",[t._v("Output")]),t._v(" "),t._m(1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("datalist",{attrs:{id:"services"}},[n("option",{attrs:{value:"alert_notification"}},[t._v("alert_notification")]),t._v(" "),n("option",{attrs:{value:"automation_io"}},[t._v("automation_io")]),t._v(" "),n("option",{attrs:{value:"battery_service"}},[t._v("battery_service")]),t._v(" "),n("option",{attrs:{value:"blood_pressure"}},[t._v("blood_pressure")]),t._v(" "),n("option",{attrs:{value:"body_composition"}},[t._v("body_composition")]),t._v(" "),n("option",{attrs:{value:"bond_management"}},[t._v("bond_management")]),t._v(" "),n("option",{attrs:{value:"continuous_glucose_monitoring"}},[t._v("continuous_glucose_monitoring")]),t._v(" "),n("option",{attrs:{value:"current_time"}},[t._v("current_time")]),t._v(" "),n("option",{attrs:{value:"cycling_power"}},[t._v("cycling_power")]),t._v(" "),n("option",{attrs:{value:"cycling_speed_and_cadence"}},[t._v("cycling_speed_and_cadence")]),t._v(" "),n("option",{attrs:{value:"device_information"}},[t._v("device_information")]),t._v(" "),n("option",{attrs:{value:"environmental_sensing"}},[t._v("environmental_sensing")]),t._v(" "),n("option",{attrs:{value:"generic_access"}},[t._v("generic_access")]),t._v(" "),n("option",{attrs:{value:"generic_attribute"}},[t._v("generic_attribute")]),t._v(" "),n("option",{attrs:{value:"glucose"}},[t._v("glucose")]),t._v(" "),n("option",{attrs:{value:"health_thermometer"}},[t._v("health_thermometer")]),t._v(" "),n("option",{attrs:{value:"heart_rate"}},[t._v("heart_rate")]),t._v(" "),n("option",{attrs:{value:"human_interface_device"}},[t._v("human_interface_device (blacklisted)")]),t._v(" "),n("option",{attrs:{value:"immediate_alert"}},[t._v("immediate_alert")]),t._v(" "),n("option",{attrs:{value:"indoor_positioning"}},[t._v("indoor_positioning")]),t._v(" "),n("option",{attrs:{value:"internet_protocol_support"}},[t._v("internet_protocol_support")]),t._v(" "),n("option",{attrs:{value:"link_loss"}},[t._v("link_loss")]),t._v(" "),n("option",{attrs:{value:"location_and_navigation"}},[t._v("location_and_navigation")]),t._v(" "),n("option",{attrs:{value:"next_dst_change"}},[t._v("next_dst_change")]),t._v(" "),n("option",{attrs:{value:"phone_alert_status"}},[t._v("phone_alert_status")]),t._v(" "),n("option",{attrs:{value:"pulse_oximeter"}},[t._v("pulse_oximeter")]),t._v(" "),n("option",{attrs:{value:"reference_time_update"}},[t._v("reference_time_update")]),t._v(" "),n("option",{attrs:{value:"running_speed_and_cadence"}},[t._v("running_speed_and_cadence")]),t._v(" "),n("option",{attrs:{value:"scan_parameters"}},[t._v("scan_parameters")]),t._v(" "),n("option",{attrs:{value:"tx_power"}},[t._v("tx_power")]),t._v(" "),n("option",{attrs:{value:"user_data"}},[t._v("user_data")]),t._v(" "),n("option",{attrs:{value:"weight_scale"}},[t._v("weight_scale")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"output",attrs:{id:"output"}},[n("div",{attrs:{id:"content"}}),t._v(" "),n("div",{attrs:{id:"status"}}),t._v(" "),n("pre",{attrs:{id:"log"}})])}],o={render:a,staticRenderFns:i};e.a=o},EXDq:function(t,e,n){"use strict";function a(t){n("Yzag")}var i=n("+j2Z"),o=n("BVxo"),r=n("VU/8"),s=a,_=r(i.a,o.a,s,"data-v-6ef7216a",null);e.a=_.exports},M93x:function(t,e,n){"use strict";function a(t){n("2TzR")}var i=n("xJD8"),o=n("wUgY"),r=n("VU/8"),s=a,_=r(i.a,o.a,s,null,null);e.a=_.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("M93x");a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:i.a}})},Yzag:function(t,e){},wUgY:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("test")],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},xJD8:function(t,e,n){"use strict";var a=n("EXDq");e.a={name:"app",components:{Test:a.a}}}},["NHnr"]);
//# sourceMappingURL=app.bad4c81ead6e6df36708.js.map