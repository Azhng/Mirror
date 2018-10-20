(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},15:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(9),r=n.n(o),c=(n(15),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),d=(n(17),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.offline?"You are offline!":"You are online";return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("em",null,e)))}}]),t}(i.Component)),m=n(6),f=n.n(m),v=n(7),w=function(){function e(t,n){Object(c.a)(this,e),this.webcamElement=t,this.canvasElement=n}return Object(s.a)(e,[{key:"adjustVideoSize",value:function(e,t){var n=e/t;e>=t?this.webcamElement.width=n*this.webcamElement.height:this.webcamElement.height=this.webcamElement.width/n}},{key:"setup",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){void 0!==navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(function(n){"srcObject"in t.webcamElement?t.webcamElement.srcObject=n:t.webcamElement.src=window.URL.createObjectURL(n),t.webcamElement.addEventListener("loadeddata",Object(v.a)(f.a.mark(function n(){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.adjustVideoSize(t.webcamElement.videoWidth,t.webcamElement.videoHeight),e();case 2:case"end":return n.stop()}},n,this)})),!1)}):n()}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_drawImage",value:function(){var e=this.webcamElement.videoWidth,t=this.webcamElement.videoHeight,n=this.canvasElement.getContext("2d");return this.canvasElement.width=e,this.canvasElement.height=t,n.drawImage(this.webcamElement,0,0,e,t),{imageHeight:t,imageWidth:e}}},{key:"takeBlobPhoto",value:function(){var e=this,t=this._drawImage(),n=t.imageWidth,i=t.imageHeight;return new Promise(function(t,a){e.canvasElement.toBlob(function(e){t({blob:e,imageHeight:i,imageWidth:n})})})}},{key:"takeBase64Photo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"png",quality:1},t=e.type,n=e.quality,i=this._drawImage(),a=i.imageHeight,o=i.imageWidth;return{base64:this.canvasElement.toDataURL("image/"+t,n),imageHeight:a,imageWidth:o}}}]),e}(),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).webcam=null,e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.canvasElement=document.createElement("canvas"),this.webcam=new w(document.getElementById("webcam"),this.canvasElement),this.webcam.setup().catch(function(){alert("Error getting access to your camera")})}},{key:"render",value:function(){return a.a.createElement("video",{autoPlay:"true",id:"webcam",style:{position:"fixed",right:"0",bottom:"0",minWidth:"100%",minHeight:"100%",width:"auto",height:"auto",zIndex:"-100"}})}}]),t}(i.Component),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={offline:!1},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("online",function(){e.setState({offline:!1})}),window.addEventListener("offline",function(){e.setState({offline:!0})})}},{key:"componentDidUpdate",value:function(){var e=!navigator.onLine;this.state.offline!==e&&this.setState({offline:e})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d,{offline:this.state.offline}),a.a.createElement(g,null))}}]),t}(i.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mirror",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/mirror","/service-worker.js");p?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):E(t,e)})}}()}},[[10,2,1]]]);
//# sourceMappingURL=main.1db6998d.chunk.js.map