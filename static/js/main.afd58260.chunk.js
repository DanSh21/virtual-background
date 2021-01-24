(this["webpackJsonpvirtual-background"]=this["webpackJsonpvirtual-background"]||[]).push([[0],{332:function(e,t){},333:function(e,t){},341:function(e,t){},344:function(e,t){},345:function(e,t){},346:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n(397),o=n(8),c=n.n(o),i=n(50),s=n.n(i),u=n(55),l=n(5),b=n(390),d=n(400),g=n(392),j=n(393),f=n(349),m=n(285),p=n.n(m),h=n(286),O=n.n(h),v=["architecture-5082700_1280","porch-691330_1280","saxon-switzerland-539418_1280","shibuyasky-4768679_1280"].map((function(e){return"".concat("/virtual-background","/backgrounds/").concat(e,".jpg")})),x=n(4),k=n.n(x),y=n(12);function C(e,t,n){var a=Math.min(t,n),r=(t-a)/2,o=(n-a)/2,c=document.createElement("canvas");return c.width=63,c.height=63,c.getContext("2d").drawImage(e,r,o,a,a,0,0,c.width,c.height),new Promise((function(e){return c.toBlob((function(t){return e(t)}))}))}var w=function(e){var t=Object(o.useState)(),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(o.useEffect)((function(){var t=new Image;t.src=e,t.onload=Object(y.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,t.naturalWidth,t.naturalHeight);case 2:n=e.sent,r(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[a,function(){return URL.revokeObjectURL(a)}]},P=n(391),R=n(28),S=n(386);var I=Object(b.a)((function(e){return Object(d.a)({root:{padding:0,minWidth:e.spacing(7)+2,height:e.spacing(7)+2,width:e.spacing(7)+2,marginRight:e.spacing(1),marginBottom:e.spacing(1),border:"2px solid transparent",alignItems:"stretch",transitionProperty:"transform, border-color",transitionDuration:"".concat(e.transitions.duration.shorter,"ms"),transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{transform:"scale(1.125)"}},active:{borderColor:e.palette.primary.main,transform:"scale(1.125)"}})})),L=function(e){var t=I();return Object(a.jsx)(S.a,{className:Object(R.a)(t.root,e.active&&t.active),disabled:e.disabled,onClick:e.onClick,children:e.children})};var _=Object(b.a)((function(e){return Object(d.a)({scalableContent:{width:"calc(100% + 2px)",height:"calc(100% + 2px)",margin:-1,borderRadius:e.shape.borderRadius},image:{objectFit:"cover"}})})),E=function(e){var t=_();return Object(a.jsxs)(L,{active:!!e.thumbnailUrl&&e.active,disabled:!e.thumbnailUrl,onClick:e.onClick,children:[e.thumbnailUrl?Object(a.jsx)("img",{className:Object(R.a)(t.scalableContent,t.image),src:e.thumbnailUrl,alt:"",onLoad:e.onLoad}):Object(a.jsx)(P.a,{className:t.scalableContent,variant:"rect"}),e.children]})};var U=function(e){var t=w(e.imageUrl),n=Object(l.a)(t,2),r=n[0],o=n[1];return Object(a.jsx)(E,{thumbnailUrl:r,active:e.active,onClick:e.onClick,onLoad:o})};var N=Object(b.a)((function(e){return Object(d.a)({root:{width:"100%",height:"100%",borderWidth:1,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.23)",borderRadius:e.shape.borderRadius,margin:-1,boxSizing:"content-box",display:"flex",justifyContent:"center",alignItems:"center"}})})),F=function(e){var t=N();return Object(a.jsx)(L,{active:e.active,onClick:e.onClick,children:Object(a.jsx)("div",{className:t.root,children:e.children})})};var M=Object(b.a)((function(e){return Object(d.a)({root:{flex:1}})})),B=function(e){var t=M();return Object(a.jsx)(g.a,{className:t.root,children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(f.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Background"}),Object(a.jsx)(F,{active:"none"===e.background.type,onClick:function(){return e.onChange({type:"none"})},children:Object(a.jsx)(p.a,{})}),Object(a.jsx)(F,{active:"blur"===e.background.type,onClick:function(){return e.onChange({type:"blur"})},children:Object(a.jsx)(O.a,{})}),v.map((function(t){return Object(a.jsx)(U,{imageUrl:t,active:t===e.background.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)}))]})})},D=n(394),T=n(399);var W=function(e){return Object(a.jsx)(g.a,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(f.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Post-processing"}),Object(a.jsx)(D.a,{label:"Smooth segmentation mask",control:Object(a.jsx)(T.a,{color:"primary",checked:e.config.smoothSegmentationMask,onChange:function(t){e.onChange({smoothSegmentationMask:t.target.checked})}})})]})})},H=n(187),A=n(395),z=n(401),J=n(402),q=n(398);var G=Object(b.a)((function(e){return Object(d.a)({root:Object(u.a)({},e.breakpoints.only("md"),{gridColumnStart:2,gridRowStart:2}),formControl:{marginTop:e.spacing(1),marginBottom:e.spacing(1),marginRight:e.spacing(2),minWidth:120}})})),K=function(e){var t=G();return Object(a.jsx)(g.a,{className:t.root,children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(f.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Segmentation"}),Object(a.jsxs)(A.a,{className:t.formControl,variant:"outlined",children:[Object(a.jsx)(z.a,{children:"Model"}),Object(a.jsxs)(q.a,{label:"Model",value:e.config.model,onChange:function(t){var n=t.target.value,a=e.config.inputResolution;"meet"===n&&"360p"===a&&(a="144p"),e.onChange(Object(H.a)(Object(H.a)({},e.config),{},{model:n,inputResolution:a}))},children:[Object(a.jsx)(J.a,{value:"bodyPix",children:"BodyPix"}),Object(a.jsx)(J.a,{value:"meet",children:"Meet (WIP)"})]})]}),Object(a.jsxs)(A.a,{className:t.formControl,variant:"outlined",children:[Object(a.jsx)(z.a,{children:"Input resolution"}),Object(a.jsxs)(q.a,{label:"Input resolution",value:e.config.inputResolution,onChange:function(t){e.onChange(Object(H.a)(Object(H.a)({},e.config),{},{inputResolution:t.target.value}))},children:[Object(a.jsx)(J.a,{value:"360p",disabled:"meet"===e.config.model,children:"360p"}),Object(a.jsx)(J.a,{value:"144p",children:"144p"}),Object(a.jsx)(J.a,{value:"96p",children:"96p"})]})]})]})})},Q=n(288),V=n.n(Q),X=["girl-919048_1280","doctor-5871743_640","woman-5883428_1280"].map((function(e){return"".concat("/virtual-background","/images/").concat(e,".jpg")})),Y=["Dance - 32938","Doctor - 26732","Thoughtful - 35590"].map((function(e){return"".concat("/virtual-background","/videos/").concat(e,".mp4")})),Z=n(287),$=n.n(Z);var ee=function(e){var t=Object(o.useState)(),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(o.useEffect)((function(){var t=document.createElement("video");t.src=e,t.onloadedmetadata=function(){t.currentTime=t.duration/2},t.onseeked=Object(y.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,t.videoWidth,t.videoHeight);case 2:n=e.sent,r(URL.createObjectURL(n));case 4:case"end":return e.stop()}}),e)})))}),[e]),[a,function(){return URL.revokeObjectURL(a)}]};var te=Object(b.a)((function(e){return Object(d.a)({icon:{position:"absolute",bottom:0,right:0,color:e.palette.common.white}})})),ne=function(e){var t=te(),n=ee(e.videoUrl),r=Object(l.a)(n,2),o=r[0],c=r[1];return Object(a.jsx)(E,{thumbnailUrl:o,active:e.active,onClick:e.onClick,onLoad:c,children:Object(a.jsx)($.a,{className:t.icon})})};var ae=Object(b.a)((function(e){return Object(d.a)({root:{flex:1}})})),re=function(e){var t=ae();return Object(a.jsx)(g.a,{className:t.root,children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(f.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Source"}),Object(a.jsx)(F,{active:"camera"===e.source.type,onClick:function(){return e.onChange({type:"camera"})},children:Object(a.jsx)(V.a,{})}),X.map((function(t){return Object(a.jsx)(U,{imageUrl:t,active:t===e.source.url,onClick:function(){return e.onChange({type:"image",url:t})}},t)})),Y.map((function(t){return Object(a.jsx)(ne,{videoUrl:t,active:t===e.source.url,onClick:function(){return e.onChange({type:"video",url:t})}},t)}))]})})},oe=n(403),ce=n(348),ie={"360p":[640,360],"144p":[256,144],"96p":[160,96]};var se=function(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)([]),c=Object(l.a)(r,2),i=c[0],s=c[1],u=Object(o.useRef)(0),b=Object(o.useRef)(0),d=Object(o.useRef)([]),g=Object(o.useRef)(0),j=Object(o.useRef)(0);return{fps:n,durations:i,beginFrame:Object(o.useCallback)((function(){b.current=Date.now()}),[]),addFrameEvent:Object(o.useCallback)((function(){var e=Date.now();d.current[g.current]=e-b.current,b.current=e,g.current++}),[]),endFrame:Object(o.useCallback)((function(){var e=Date.now();d.current[g.current]=e-b.current,j.current++,e>=u.current+1e3&&(a(1e3*j.current/(e-u.current)),s(d.current),u.current=e,j.current=0),g.current=0}),[])}};var ue=Object(b.a)((function(e){return Object(d.a)({root:{flex:1,position:"relative"},render:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"},stats:{position:"absolute",top:0,right:0,left:0,textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.48)",color:e.palette.common.white}})})),le=function(e){var t=ue(),n=Object(o.useRef)(null),r=se(),c=r.fps,i=Object(l.a)(r.durations,3),s=i[0],u=i[1],b=i[2],d=r.beginFrame,g=r.addFrameEvent,j=r.endFrame;Object(o.useEffect)((function(){var t=n.current.getContext("2d"),a=Object(l.a)(ie[e.segmentationConfig.inputResolution],2),r=a[0],o=a[1],c=r*o,i=new ImageData(r,o),s=document.createElement("canvas");s.width=r,s.height=o;var u,b=s.getContext("2d"),f=!0;function m(){return p.apply(this,arguments)}function p(){return(p=Object(y.a)(k.a.mark((function n(){var a,l;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(f){n.next=2;break}return n.abrupt("return");case 2:if(d(),"none"!==e.background.type&&b.drawImage(e.sourcePlayback.htmlElement,0,0,e.sourcePlayback.width,e.sourcePlayback.height,0,0,r,o),g(),"none"===e.background.type||"bodyPix"!==e.segmentationConfig.model){n.next=11;break}return n.next=8,e.bodyPix.segmentPerson(s);case 8:for(a=n.sent,l=0;l<c;l++)i.data[4*l+3]=a.data[l]?255:0;b.putImageData(i,0,0);case 11:g(),t.globalCompositeOperation="copy",t.filter="none",e.postProcessingConfig.smoothSegmentationMask&&("blur"===e.background.type?t.filter="blur(8px)":"image"===e.background.type&&(t.filter="blur(2px)")),"none"!==e.background.type&&(t.drawImage(s,0,0,r,o,0,0,e.sourcePlayback.width,e.sourcePlayback.height),t.globalCompositeOperation="source-in",t.filter="none"),t.drawImage(e.sourcePlayback.htmlElement,0,0),"blur"===e.background.type&&(t.globalCompositeOperation="destination-over",t.filter="blur(8px)",t.drawImage(e.sourcePlayback.htmlElement,0,0)),j(),u=requestAnimationFrame(m);case 20:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return m(),console.log("Animation started:",e.sourcePlayback,e.background,e.postProcessingConfig),function(){f=!1,cancelAnimationFrame(u),console.log("Animation stopped:",e.sourcePlayback,e.background,e.postProcessingConfig)}}),[e.sourcePlayback,e.background,e.bodyPix,e.segmentationConfig,e.postProcessingConfig,d,g,j]);var m=["resizing ".concat(s,"ms"),"inference ".concat(u,"ms"),"post-processing ".concat(b,"ms")],p="".concat(Math.round(c)," fps (").concat(m.join(", "),")");return Object(a.jsxs)("div",{className:t.root,children:["image"===e.background.type&&Object(a.jsx)("img",{className:t.render,src:e.background.url,alt:""}),Object(a.jsx)("canvas",{ref:n,className:t.render,width:e.sourcePlayback.width,height:e.sourcePlayback.height}),Object(a.jsx)(f.a,{className:t.stats,variant:"caption",children:p})]})},be=n(396),de=n(289),ge=n.n(de);var je=Object(b.a)((function(e){var t;return Object(d.a)({root:(t={position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},Object(u.a)(t,e.breakpoints.down("xs"),{width:0,overflow:"hidden"}),Object(u.a)(t,e.breakpoints.up("sm"),{flex:1,borderRightWidth:1,borderRightStyle:"solid",borderRightColor:e.palette.divider}),t),sourcePlayback:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"}})})),fe=function(e){var t=je(),n=Object(o.useState)(),r=Object(l.a)(n,2),c=r[0],i=r[1],s=Object(o.useState)(!1),u=Object(l.a)(s,2),b=u[0],d=u[1],g=Object(o.useState)(!1),j=Object(l.a)(g,2),f=j[0],m=j[1],p=Object(o.useRef)(null);return Object(o.useEffect)((function(){i(void 0),d(!0),m(!1),setTimeout((function(){return i(e.source.url)}))}),[e.source]),Object(o.useEffect)((function(){function t(){return(t=Object(y.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={video:!0},e.next=4,navigator.mediaDevices.getUserMedia(t);case 4:if(n=e.sent,!p.current){e.next=8;break}return p.current.srcObject=n,e.abrupt("return");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error opening video camera.",e.t0);case 13:d(!1),m(!0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}"camera"===e.source.type?function(){t.apply(this,arguments)}():p.current&&(p.current.srcObject=null)}),[e.source]),Object(a.jsxs)("div",{className:t.root,children:[b&&Object(a.jsx)(be.a,{}),"image"===e.source.type?Object(a.jsx)("img",{className:t.sourcePlayback,src:c,hidden:b,alt:"",onLoad:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.naturalWidth,height:n.naturalHeight}),d(!1)}}):f?Object(a.jsx)(ge.a,{fontSize:"large"}):Object(a.jsx)("video",{ref:p,className:t.sourcePlayback,src:c,hidden:b,autoPlay:!0,playsInline:!0,controls:!1,muted:!0,loop:!0,onLoadedData:function(t){var n=t.target;e.onLoad({htmlElement:n,width:n.videoWidth,height:n.videoHeight}),d(!1)}})]})};var me=Object(b.a)((function(e){var t,n=["".concat(e.spacing(52),"px"),"100vh - ".concat(e.spacing(2),"px")];return Object(d.a)({root:(t={minHeight:"calc(min(".concat(n.join(", "),"))"),display:"flex",overflow:"hidden"},Object(u.a)(t,e.breakpoints.up("md"),{gridColumnStart:1,gridColumnEnd:3}),Object(u.a)(t,e.breakpoints.up("lg"),{gridRowStart:1,gridRowEnd:3}),t),noOutput:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:e.spacing(20),height:e.spacing(20)}})})),pe=function(e){var t=me(),n=Object(o.useState)(),r=Object(l.a)(n,2),c=r[0],i=r[1];return Object(o.useEffect)((function(){i(void 0)}),[e.source]),Object(a.jsxs)(ce.a,{className:t.root,children:[Object(a.jsx)(fe,{source:e.source,onLoad:i}),c&&e.bodyPix?Object(a.jsx)(le,{sourcePlayback:c,background:e.background,bodyPix:e.bodyPix,segmentationConfig:e.segmentationConfig,postProcessingConfig:e.postProcessingConfig}):Object(a.jsx)("div",{className:t.noOutput,children:Object(a.jsx)(oe.a,{className:t.avatar})})]})},he=n(290),Oe=n(310);var ve=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){function e(){return(e=Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading TensorFlow.js and BodyPix segmentation model"),e.next=3,Oe.a();case 3:return e.t0=a,e.next=6,he.a();case 6:e.t1=e.sent,(0,e.t0)(e.t1),console.log("TensorFlow.js and BodyPix loaded");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var xe=function(){Object(o.useEffect)((function(){function e(){return(e=Object(y.a)(k.a.mark((function e(){var t,n,a,r,o,c,i,s,u;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,createTFLiteModule();case 2:return t=e.sent,e.next=5,fetch("".concat("/virtual-background","/models/segm_lite_v681.tflite"));case 5:return n=e.sent,e.next=8,n.arrayBuffer();case 8:return a=e.sent,console.log("Lite model buffer size:",a.byteLength),e.next=12,fetch("".concat("/virtual-background","/models/segm_full_v679.tflite"));case 12:return r=e.sent,e.next=15,r.arrayBuffer();case 15:o=e.sent,console.log("Full model buffer size:",o.byteLength),c=t._getModelBufferMemoryOffset(),console.log("Model buffer memory offset:",c),console.log("Loading light model buffer..."),t.HEAPU8.set(new Uint8Array(a),c),console.log("_loadModel result:",t._loadModel(a.byteLength)),console.log("Input memory offset:",t._getInputMemoryOffset()),console.log("Input height:",t._getInputHeight()),console.log("Input width:",t._getInputWidth()),console.log("Input channels:",t._getInputChannelCount()),console.log("Output memory offset:",t._getOutputMemoryOffset()),console.log("Output height:",t._getOutputHeight()),console.log("Output width:",t._getOutputWidth()),console.log("Output channels:",t._getOutputChannelCount()),i=Date.now(),s=t._runInference(),u=Date.now()-i,console.log("_runInference result: ".concat(s," (").concat(u,"ms)"));case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[])};var ke=Object(b.a)((function(e){var t;return Object(d.a)({root:(t={display:"grid"},Object(u.a)(t,e.breakpoints.up("xs"),{margin:e.spacing(1),gap:e.spacing(1),gridTemplateColumns:"1fr"}),Object(u.a)(t,e.breakpoints.up("md"),{margin:e.spacing(2),gap:e.spacing(2),gridTemplateColumns:"repeat(2, 1fr)"}),Object(u.a)(t,e.breakpoints.up("lg"),{gridTemplateColumns:"repeat(3, 1fr)"}),t),resourceSelectionCards:{display:"flex",flexDirection:"column"}})})),ye=function(){var e=ve();xe();var t=ke(),n=Object(o.useState)({type:"image",url:X[0]}),r=Object(l.a)(n,2),c=r[0],i=r[1],s=Object(o.useState)({type:"image",url:v[0]}),u=Object(l.a)(s,2),b=u[0],d=u[1],g=Object(o.useState)({model:"bodyPix",inputResolution:"360p"}),j=Object(l.a)(g,2),f=j[0],m=j[1],p=Object(o.useState)({smoothSegmentationMask:!0}),h=Object(l.a)(p,2),O=h[0],x=h[1];return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(pe,{source:c,background:b,bodyPix:e,segmentationConfig:f,postProcessingConfig:O}),Object(a.jsx)(re,{source:c,onChange:i}),Object(a.jsx)(B,{background:b,onChange:d}),Object(a.jsx)(K,{config:f,onChange:m}),Object(a.jsx)(W,{config:O,onChange:x})]})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,405)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};s.a.render(Object(a.jsxs)(c.a.StrictMode,{children:[Object(a.jsx)(r.a,{}),Object(a.jsx)(ye,{})]}),document.getElementById("root")),Ce()}},[[346,1,2]]]);
//# sourceMappingURL=main.afd58260.chunk.js.map