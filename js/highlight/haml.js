(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[73],{530:function(e,n,s){"use strict";e.exports=function(e){return{name:"HAML",case_insensitive:!0,contains:[{className:"meta",begin:"^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",relevance:10},e.COMMENT("^\\s*(!=#|=#|-#|/).*$",!1,{relevance:0}),{begin:"^\\s*(-|=|!=)(?!#)",starts:{end:"\\n",subLanguage:"ruby"}},{className:"tag",begin:"^\\s*%",contains:[{className:"selector-tag",begin:"\\w+"},{className:"selector-id",begin:"#[\\w-]+"},{className:"selector-class",begin:"\\.[\\w-]+"},{begin:/\{\s*/,end:/\s*\}/,contains:[{begin:":\\w+\\s*=>",end:",\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:":\\w+"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]},{begin:"\\(\\s*",end:"\\s*\\)",excludeEnd:!0,contains:[{begin:"\\w+\\s*=",end:"\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:"\\w+",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]}]},{begin:"^\\s*[=~]\\s*"},{begin:/#\{/,starts:{end:/\}/,subLanguage:"ruby"}}]}}}}]);
//# sourceMappingURL=haml.js.map?v=d4fb1a9a56e937cf554d