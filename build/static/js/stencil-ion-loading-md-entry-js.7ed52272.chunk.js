(this["webpackJsonpgebeden-ionic"]=this["webpackJsonpgebeden-ionic"]||[]).push([[27],{551:function(n,i,e){"use strict";e.r(i),e.d(i,"ion_loading",(function(){return y}));var t=e(16),o=e(1),r=e.n(o),a=e(2),s=e(4),c=e(5),d=e(17),l=e(14),p=(e(21),e(3)),u=(e(37),e(29)),g=e(602),m=e(603),f=function(n){var i=Object(p.a)(),e=Object(p.a)(),t=Object(p.a)();return e.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(n).easing("ease-in-out").duration(200).addAnimation([e,t])},h=function(n){var i=Object(p.a)(),e=Object(p.a)(),t=Object(p.a)();return e.addElement(n.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(n).easing("ease-in-out").duration(200).addAnimation([e,t])},b=function(n){var i=Object(p.a)(),e=Object(p.a)(),t=Object(p.a)();return e.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(n).easing("ease-in-out").duration(200).addAnimation([e,t])},v=function(n){var i=Object(p.a)(),e=Object(p.a)(),t=Object(p.a)();return e.addElement(n.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(n).easing("ease-in-out").duration(200).addAnimation([e,t])},y=function(){function n(i){var e=this;Object(s.a)(this,n),Object(d.l)(this,i),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){e.dismiss(void 0,u.a)},Object(u.e)(this.el),this.didPresent=Object(d.f)(this,"ionLoadingDidPresent",7),this.willPresent=Object(d.f)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(d.f)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(d.f)(this,"ionLoadingDidDismiss",7)}return Object(c.a)(n,[{key:"componentWillLoad",value:function(){if(void 0===this.spinner){var n=Object(l.b)(this);this.spinner=l.c.get("loadingSpinner",l.c.get("spinner","ios"===n?"lines":"crescent"))}}},{key:"present",value:function(){var n=Object(a.a)(r.a.mark((function n(){var i=this;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.f)(this,"loadingEnter",f,b,void 0);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10));case 3:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"dismiss",value:function(n,i){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(u.g)(this,n,i,"loadingLeave",h,v)}},{key:"onDidDismiss",value:function(){return Object(u.h)(this.el,"ionLoadingDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(u.h)(this.el,"ionLoadingWillDismiss")}},{key:"render",value:function(){var n,i=this.message,e=this.spinner,o=Object(l.b)(this);return Object(d.j)(d.b,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:"".concat(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(g.b)(this.cssClass)),(n={},Object(t.a)(n,o,!0),Object(t.a)(n,"loading-translucent",this.translucent),n))},Object(d.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(d.j)("div",{class:"loading-wrapper",role:"dialog"},e&&Object(d.j)("div",{class:"loading-spinner"},Object(d.j)("ion-spinner",{name:e})),i&&Object(d.j)("div",{class:"loading-content",innerHTML:Object(m.a)(i)})))}},{key:"el",get:function(){return Object(d.g)(this)}}]),n}();y.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}},602:function(n,i,e){"use strict";e.d(i,"a",(function(){return c})),e.d(i,"b",(function(){return d})),e.d(i,"c",(function(){return s})),e.d(i,"d",(function(){return p}));var t=e(1),o=e.n(t),r=e(2),a=e(16),s=function(n,i){return null!==i.closest(n)},c=function(n){return"string"===typeof n&&n.length>0?Object(a.a)({"ion-color":!0},"ion-color-".concat(n),!0):void 0},d=function(n){var i={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return i[n]=!0})),i},l=/^[a-z][a-z0-9+\-.]*:/,p=function(){var n=Object(r.a)(o.a.mark((function n(i,e,t){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==i||"#"===i[0]||l.test(i)){n.next=5;break}if(!(r=document.querySelector("ion-router"))){n.next=5;break}return null!=e&&e.preventDefault(),n.abrupt("return",r.push(i,t));case 5:return n.abrupt("return",!1);case 6:case"end":return n.stop()}}),n)})));return function(i,e,t){return n.apply(this,arguments)}}()},603:function(n,i,e){"use strict";e.d(i,"a",(function(){return t}));var t=function(n){try{if("string"!==typeof n||""===n)return n;var i=document.createDocumentFragment(),e=document.createElement("div");i.appendChild(e),e.innerHTML=n,s.forEach((function(n){for(var e=i.querySelectorAll(n),t=e.length-1;t>=0;t--){var a=e[t];a.parentNode?a.parentNode.removeChild(a):i.removeChild(a);for(var s=r(a),c=0;c<s.length;c++)o(s[c])}}));for(var t=r(i),a=0;a<t.length;a++)o(t[a]);var c=document.createElement("div");c.appendChild(i);var d=c.querySelector("div");return null!==d?d.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},o=function n(i){if(!i.nodeType||1===i.nodeType){for(var e=i.attributes.length-1;e>=0;e--){var t=i.attributes.item(e),o=t.name;if(a.includes(o.toLowerCase())){var s=t.value;null!=s&&s.toLowerCase().includes("javascript:")&&i.removeAttribute(o)}else i.removeAttribute(o)}for(var c=r(i),d=0;d<c.length;d++)n(c[d])}},r=function(n){return null!=n.children?n.children:n.childNodes},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=stencil-ion-loading-md-entry-js.7ed52272.chunk.js.map