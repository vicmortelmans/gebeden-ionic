(this["webpackJsonpgebeden-ionic"]=this["webpackJsonpgebeden-ionic"]||[]).push([[0],{607:function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return a}));var r=n(21),i=n(61),a=function(e,t,n,a,c){var o=e.ownerDocument.defaultView;return Object(i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){var t=e.deltaX/o.innerWidth;a(t)},onEnd:function(e){var t=e.deltaX,n=o.innerWidth,i=t/n,a=e.velocityX,u=n/2,s=a>=0&&(a>.2||e.deltaX>u),d=(s?1-i:i)*n,h=0;if(d>5){var b=d/Math.abs(a);h=Math.min(b,540)}c(s,i<=0?.01:Object(r.c)(0,i,.9999),h)}})}}}]);
//# sourceMappingURL=0.18617b5c.chunk.js.map