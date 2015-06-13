/*!
 * bernardopacheco - v0.1.0 - 2015-06-12
 * Bernardo Pacheco
 * Source code for Bernardo Pacheco website
 * http://bernardopacheco.net
 * Copyright 2014. MIT licensed.
 */
!function(a,b,c){"use strict";!function(){var c=b.createElement("script"),d="https://api.github.com/repos/",e="zyst",f=e+".github.io";c.type="text/javascript",c.async=!0,c.src=d+e+"/"+f+"?callback="+e+".getGitHubRepoInfo",a[e]=a[e]||{},a[e].getGitHubRepoInfo=function(a){var c=a.data.stargazers_count,d=a.data.forks_count;b.getElementById("stargazers").innerText=c,b.getElementById("forks").innerText=d,b.getElementById("github-repo-info").style.display="block"},b.getElementsByTagName("HEAD")[0].appendChild(c)}(),function(){var a="Zyst",c=b.createElement("script");c.type="text/javascript",c.async=!0,c.src="http://"+a+".disqus.com/count.js",(b.getElementsByTagName("HEAD")[0]||b.getElementsByTagName("BODY")[0]).appendChild(c)}(),function(){var c=b.createElement("script"),d="zyst",e="https://disqus.com/api/3.0/forums/listPosts.jsonp?forum=",f="Zyst",g="XevSB05xjOsiMfk5GH5dJlnYnDcibrvPSSuJcpP6psLdR3BVlZ9XnHLw3w2IelSj";c.type="text/javascript",c.async=!0,c.src=e+f+"&related=thread&api_key="+g+"&callback="+d+".getRecentComments",a[d]=a[d]||{},a[d].getRecentComments=function(a){function c(){return!!a.response.length}if(c()){for(var d,e,f,g,h,i,j=b.createElement("ul"),k=0,l=a.response.length,m="5";l>k&&m>k;k++)g=a.response[k].author.name,h=a.response[k].thread.title,i=a.response[k].url,e=b.createElement("a"),e.setAttribute("href",i),e.innerText=h,f=b.createElement("span"),f.innerText=g+" on ",f.className="disqus-author",d=b.createElement("li"),d.appendChild(f),d.appendChild(e),j.appendChild(d);b.getElementById("recent-comments-section").appendChild(j),b.getElementById("recent-comments-section").style.display="block"}},b.getElementsByTagName("HEAD")[0].appendChild(c)}()}(this,document),window.console||(window.console={}),"function"!=typeof window.console.log&&(window.console.log=function(){}),"function"!=typeof window.console.warn&&(window.console.warn=function(){}),function(){function a(a,b,c){var d=a.split(b);if(!c)return d;if(d.length<c)return d;var e=d.splice(0,c-1),f=d.join(b);return e.push(f),e}function b(a,b){return a===C?(IN.$extensions(b),null):(x.test(a)&&(b=b.replace(r,A)),""===b?null:b)}function c(a,c){if(c=b(a,c)){if(a=a.replace(t,function(){return arguments[1].toUpperCase()}),"lang"!==a||v.test(c))("noAuth"===a||"noApi"===a)&&(c=/^(?:true|yes|1)$/i.test(c));else try{var d=c.replace("-","_").split("_");if(d=[d[0].substr(0,2).toLowerCase(),d[1].substr(0,2).toUpperCase()].join("_"),!v.test(d))throw new Error;c=d}catch(e){k||IN.ENV.js.suppressWarnings||!c||console.warn("'"+c+"' is not a supported language, defaulting to 'en_US'"),c="en_US"}IN.ENV.js[a]=c;var f=[encodeURIComponent(a),encodeURIComponent(c)].join("=");for(var g in P)if(P.hasOwnProperty(g)&&P[g]===a)return void O.push(f);N.push(f)}}function d(a,b){return a+(/\?/.test(a)?"&":"?")+b.join("&")}var e,f,g,h,i,j,k,l={bootstrapInit:+new Date},m=document,n=/^https?:\/\/.*?linkedin.*?\/in\.js.*?$/,o=/async=true/,p=/\/\*((?:.|[\s])*?)\*\//m,q=/\r/g,r=/[\s]/g,s=/^[\s]*(.*?)[\s]*:[\s]*(.*)[\s]*$/,t=/_([a-z])/gi,u=/^[\s]+|[\s]+$/g,v=/^[a-z]{2}(_)[A-Z]{2}$/,w=/suppress(Warnings|_warnings):true/gi,x=/^api(Key|_key)$/gi,y="\n",z=",",A="",B="@",C="extensions",D="on",E="onDOMReady",F="onOnce",G="script",H="https://www.linkedin.com/uas/js/userspace?v=0.0.2000-RC8.40280-1420",I="https://platform.linkedin.com/js/secureAnonymousFramework?v=0.0.2000-RC8.40280-1420",J="http://platform.linkedin.com/js/nonSecureAnonymousFramework?v=0.0.2000-RC8.40280-1420",K="http://platform.linkedin.com/js/frameworkV2?v=0.0.2000-RC8.40280-1420",L=m.getElementsByTagName("head")[0],M=m.getElementsByTagName(G),N=[],O=[],P=["lang"],Q=!1;if(window.IN&&IN.ENV&&IN.ENV.js)return void(IN.ENV.js.suppressWarnings||console.warn("duplicate in.js loaded, any parameters will be ignored"));for(window.IN=window.IN||{},IN.ENV={},IN.ENV.js={},IN.ENV.js.extensions={},statsQueue=IN.ENV.statsQueue=[],statsQueue.push(l),e=IN.ENV.evtQueue=[],IN.Event={on:function(){e.push({type:D,args:arguments})},onDOMReady:function(){e.push({type:E,args:arguments})},onOnce:function(){e.push({type:F,args:arguments})}},IN.$extensions=function(b){var c,d,e,f,g=IN.ENV.js.extensions;c=b.split(z);for(var h=0,i=c.length;i>h;h++)d=a(c[h],B,2),e=d[0].replace(u,A),f=d[1],g[e]||(g[e]={src:f?f.replace(u,A):A,loaded:!1})},f="",U=0,W=M.length;W>U;U++){var R=M[U];if(n.test(R.src)){o.test(R.src)&&(Q=!0);try{f=R.innerHTML.replace(u,A)}catch(S){try{f=R.text.replace(u,A)}catch(T){}}}}f=f.replace(p,"$1").replace(u,A).replace(q,A),k=w.test(f.replace(r,A));for(var U=0,V=f.split(y),W=V.length;W>U;U++){var X=V[U];if(X&&!(X.replace(r,A).length<=0)){try{g=X.match(s),h=g[1].replace(u,A),i=g[2].replace(u,A)}catch(Y){k||console.warn("script tag contents must be key/value pairs separated by a colon. Source: "+Y);continue}c(h,i)}}c("secure",1),IN.init=function(a){var b,e,f=IN.ENV.js;a=a||{};for(b in a)a.hasOwnProperty(b)&&c(b,a[b]);j=m.createElement(G),e=f.v2?d(K,N):f.apiKey&&!f.noAuth?d(H,N):f.secure?I:J,j.src=d(e,O),L.appendChild(j),statsQueue.push({userspaceRequested:+new Date}),IN.init=function(){}},statsQueue.push({bootstrapLoaded:+new Date}),Q||IN.init()}();