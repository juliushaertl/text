(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[161],{618:function(e,n,a){"use strict";e.exports=function(e){var n={className:"string",begin:"\\$.{1}"},a={className:"symbol",begin:"#"+e.UNDERSCORE_IDENT_RE};return{name:"Smalltalk",aliases:["st"],keywords:"self super nil true false thisContext",contains:[e.COMMENT('"','"'),e.APOS_STRING_MODE,{className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},{begin:"[a-z][a-zA-Z0-9_]*:",relevance:0},e.C_NUMBER_MODE,a,n,{begin:"\\|[ ]*[a-z][a-zA-Z0-9_]*([ ]+[a-z][a-zA-Z0-9_]*)*[ ]*\\|",returnBegin:!0,end:/\|/,illegal:/\S/,contains:[{begin:"(\\|[ ]*)?[a-z][a-zA-Z0-9_]*"}]},{begin:"#\\(",end:"\\)",contains:[e.APOS_STRING_MODE,n,e.C_NUMBER_MODE,a]}]}}}}]);
//# sourceMappingURL=smalltalk.js.map?v=2519fe4c2da116d4f796