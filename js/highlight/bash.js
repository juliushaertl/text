(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[19],{459:function(e,s,n){"use strict";function t(...e){return e.map(e=>{return(s=e)?"string"==typeof s?s:s.source:null;var s}).join("")}e.exports=function(e){const s={},n={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[s]}]};Object.assign(s,{className:"variable",variants:[{begin:t(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},n]});const a={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s,a]};a.contains.push(c);const o={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,s]},l=e.SHEBANG({binary:"(".concat(["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|"),")"),relevance:10}),r={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z._-]+\b/,keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"},contains:[l,e.SHEBANG(),r,o,e.HASH_COMMENT_MODE,i,c,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},s]}}}}]);
//# sourceMappingURL=bash.js.map?v=21e79a34d580f86282cb