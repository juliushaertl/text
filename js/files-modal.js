(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[199],{152:function(e,t,n){"use strict";n.r(t);var a=n(889),i=n(226);for(var l in i)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(l);var r=n(12),u=Object(r.a)(i.default,a.a,a.b,!1,null,null,null);t.default=u.exports},226:function(e,t,n){"use strict";n.r(t);var a=n(227),i=n.n(a);for(var l in a)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(l);t.default=i.a},227:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"PublicFilesEditor",components:{Modal:((a=n(820))&&a.__esModule?a:{default:a}).default,EditorWrapper:()=>Promise.all([n.e(193),n.e(202),n.e(194)]).then(n.bind(null,104))},props:{fileId:{type:Number,default:null},relativePath:{type:String,default:null},active:{type:Boolean,default:!1},shareToken:{type:String,default:null},mimeType:{type:String,default:null}},computed:{fileName(){return this.relativePath.substring(this.relativePath.lastIndexOf("/")+1)}},methods:{close(){this.active=!1}}};t.default=i},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.active?n("Modal",{attrs:{title:e.fileName},on:{close:e.close}},[n("EditorWrapper",{attrs:{"file-id":e.fileId,"relative-path":e.relativePath,active:e.active,"share-token":e.shareToken,mime:e.mimeType}})],1):e._e()},i=[]}}]);
//# sourceMappingURL=files-modal.js.map?v=320f9bfd5ed71c561145