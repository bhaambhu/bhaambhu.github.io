(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{9361:function(b,a){"use strict";a.Z=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},1210:function(b,a){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(a,"__esModule",{value:!0}),a.getDomainLocale=c,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),b.exports=a.default)},8045:function(e,a,b){"use strict";var c,f=b(9361).Z,g=b(4941).Z,h=b(3929).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){var F,G,c=a.src,H=a.sizes,Q=a.unoptimized,E=void 0!==Q&&Q,R=a.priority,S=void 0!==R&&R,I=a.loading,T=a.lazyRoot,ae=void 0===T?null:T,af=a.lazyBoundary,ag=a.className,ah=a.quality,J=a.width,K=a.height,ai=a.style,U=a.objectFit,V=a.objectPosition,W=a.onLoadingComplete,X=a.placeholder,Y=void 0===X?"empty":X,L=a.blurDataURL,aj=q(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),ak=i.useContext(m.ImageConfigContext),Z=i.useMemo(function(){var a=s||ak||k.imageConfigDefault,b=h(a.deviceSizes).concat(h(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return o({},a,{allSizes:b,deviceSizes:c})},[ak]),d=aj,e=H?"responsive":"intrinsic";"layout"in d&&(d.layout&&(e=d.layout),delete d.layout);var M=A;if("loader"in d){if(d.loader){var ay,az=d.loader;M=function(a){a.config;var b=q(a,["config"]);return az(b)}}delete d.loader}var $="";if(x(c)){var n=w(c)?c.default:c;if(!n.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(n)));if(L=L||n.blurDataURL,$=n.src,(!e||"fill"!==e)&&(K=K||n.height,J=J||n.width,!n.height||!n.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(n)))}c="string"==typeof c?c:$;var v=z(J),B=z(K),_=z(ah),D=!S&&("lazy"===I|| void 0===I);(c.startsWith("data:")||c.startsWith("blob:"))&&(E=!0,D=!1),t.has(c)&&(D=!1),r&&(E=!0);var aa=g(i.useState(!1),2),al=aa[0],am=aa[1],N=g(l.useIntersection({rootRef:ae,rootMargin:af||"200px",disabled:!D}),3),an=N[0],ao=N[1],ap=N[2],ab=!D||ao,b={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},O={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},P=!1,aq=Object.assign({},ai,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:U,objectPosition:V}),ar="blur"!==Y||al?{}:{backgroundSize:U||"cover",backgroundPosition:V||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(L,'")')};if("fill"===e)b.display="block",b.position="absolute",b.top=0,b.left=0,b.bottom=0,b.right=0;else if(void 0!==v&& void 0!==B){var ac=B/v,as=isNaN(ac)?"100%":"".concat(100*ac,"%");"responsive"===e?(b.display="block",b.position="relative",P=!0,O.paddingTop=as):"intrinsic"===e?(b.display="inline-block",b.position="relative",b.maxWidth="100%",P=!0,O.maxWidth="100%",F="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(v,"%27%20height=%27").concat(B,"%27/%3e")):"fixed"===e&&(b.display="inline-block",b.position="relative",b.width=v,b.height=B)}var p={src:u,srcSet:void 0,sizes:void 0};ab&&(p=y({config:Z,src:c,unoptimized:E,layout:e,width:v,quality:_,sizes:H,loader:M}));var at=c,aA="imagesrcset",ad="imagesizes";ad="imageSizes";var au=(f(G={},"imageSrcSet",p.srcSet),f(G,ad,p.sizes),G),av=i.default.useLayoutEffect,aw=i.useRef(W),aB=i.useRef(c);i.useEffect(function(){aw.current=W},[W]),av(function(){aB.current!==c&&(ap(),aB.current=c)},[ap,c]);var ax=o({isLazy:D,imgAttributes:p,heightInt:B,widthInt:v,qualityInt:_,layout:e,className:ag,imgStyle:aq,blurStyle:ar,loading:I,config:Z,unoptimized:E,placeholder:Y,loader:M,srcString:at,onLoadingCompleteRef:aw,setBlurComplete:am,setIntersection:an,isVisible:ab,noscriptSizes:H},d);return i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:b},P?i.default.createElement("span",{style:O},F?i.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:F}):null):null,i.default.createElement(C,Object.assign({},ax))),S?i.default.createElement(j.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+p.src+p.srcSet+p.sizes,rel:"preload",as:"image",href:p.srcSet?void 0:p.src},au))):null)};var i=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=p();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}(b(7294)),j=(c=b(5443),c&&c.__esModule?c:{default:c}),k=b(9309),l=b(7190),m=b(9977);b(3794);var n=b(2392);function o(){return(o=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function p(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return p=function(){return a},a}function q(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}var d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},r=(d.experimentalRemotePatterns,d.experimentalUnoptimized),s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},t=new Set,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(a){var c=a.config,b=a.src,d=a.width,e=a.quality;return b.endsWith(".svg")&&!c.dangerouslyAllowSVG?b:"".concat(n.normalizePathTrailingSlash(c.path),"?url=").concat(encodeURIComponent(b),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(b){var e=b.config,f=b.src,g=b.width,c=b.quality,d=new URL("".concat(e.path).concat(D(f))),a=d.searchParams;return a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||g.toString()),c&&a.set("q",c.toString()),d.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(D(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(D(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(a){return void 0!==a.default}function x(a){var b;return"object"==typeof a&&(w(a)|| void 0!==(b=a).src)}function y(a){var d=a.config,e=a.src,g=a.unoptimized,i=a.layout,j=a.width,k=a.quality,b=a.sizes,l=a.loader;if(g)return{src:e,srcSet:void 0,sizes:void 0};var f=function(d,b,a,e){var i=d.deviceSizes,f=d.allSizes;if(e&&("fill"===a||"responsive"===a)){for(var j=/(^|\s)(1?\d?\d)vw/g,c=[];k=j.exec(e);k)c.push(parseInt(k[2]));if(c.length){var k,g,l=.01*(g=Math).min.apply(g,h(c));return{widths:f.filter(function(a){return a>=i[0]*l}),kind:"w"}}return{widths:f,kind:"w"}}return"number"!=typeof b||"fill"===a||"responsive"===a?{widths:i,kind:"w"}:{widths:h(new Set([b,2*b].map(function(a){return f.find(function(b){return b>=a})||f[f.length-1]}))),kind:"x"}}(d,j,i,b),c=f.widths,m=f.kind,n=c.length-1;return{sizes:b||"w"!==m?b:"100vw",srcSet:c.map(function(a,b){return"".concat(l({config:d,src:e,quality:k,width:a})," ").concat("w"===m?a:b+1).concat(m)}).join(", "),src:l({config:d,src:e,quality:k,width:c[n]})}}function z(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function A(a){var b,c=(null==(b=a.config)?void 0:b.loader)||"default",d=v.get(c);if(d)return d(a);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(k.VALID_LOADERS.join(", "),". Received: ").concat(c))}function B(a,b,c,d,e,f){a&&a.src!==u&&a["data-loaded-src"]!==b&&(a["data-loaded-src"]=b,("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.parentNode&&(t.add(b),"blur"===d&&f(!0),null==e?void 0:e.current)){var c=a.naturalWidth,g=a.naturalHeight;e.current({naturalWidth:c,naturalHeight:g})}}))}var C=function(a){var k=a.imgAttributes,l=(a.heightInt,a.widthInt),m=a.qualityInt,b=a.layout,d=a.className,e=a.imgStyle,n=a.blurStyle,f=a.isLazy,g=a.placeholder,c=a.loading,h=a.srcString,p=a.config,r=a.unoptimized,s=a.loader,t=a.onLoadingCompleteRef,u=a.setBlurComplete,v=a.setIntersection,x=a.onLoad,z=a.onError,w=(a.isVisible,a.noscriptSizes),j=q(a,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return c=f?"lazy":c,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},j,k,{decoding:"async","data-nimg":b,className:d,style:o({},e,n),ref:i.useCallback(function(a){v(a),(null==a?void 0:a.complete)&&B(a,h,b,g,t,u)},[v,h,b,g,t,u,]),onLoad:function(a){B(a.currentTarget,h,b,g,t,u),x&&x(a)},onError:function(a){"blur"===g&&u(!0),z&&z(a)}})),(f||"blur"===g)&&i.default.createElement("noscript",null,i.default.createElement("img",Object.assign({},j,y({config:p,src:h,unoptimized:r,layout:b,width:l,quality:m,sizes:w,loader:s}),{decoding:"async","data-nimg":b,style:e,className:d,loading:c}))))};function D(a){return"/"===a[0]?a.slice(1):a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},8418:function(e,a,b){"use strict";var c,g=b(4941).Z;b(5753).default,Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=(c=b(7294),c&&c.__esModule?c:{default:c}),h=b(6273),i=b(2725),j=b(3462),k=b(1018),l=b(7190),m=b(1210),n=b(8684),o=void 0!==d.default.useTransition,p={};function q(a,c,d,b){if(a&&h.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;p[c+"%"+d+(e?"%"+e:"")]=!0}}var f=d.default.forwardRef(function(a,A){var c,e,B=a.href,C=a.as,D=a.children,E=a.prefetch,F=a.passHref,P=a.replace,Q=a.shallow,R=a.scroll,s=a.locale,S=a.onClick,T=a.onMouseEnter,w=a.legacyBehavior,f=void 0===w?!0!==Boolean(!1):w,G=function(b,f){if(null==b)return{};var c,a,d={},e=Object.keys(b);for(a=0;a<e.length;a++)f.indexOf(c=e[a])>=0||(d[c]=b[c]);return d}(a,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=D,f&&("string"==typeof c||"number"==typeof c)&&(c=d.default.createElement("a",null,c));var H=!1!==E,I=g(o?d.default.useTransition():[],2),U=I[1],b=d.default.useContext(j.RouterContext),x=d.default.useContext(k.AppRouterContext);x&&(b=x);var y=d.default.useMemo(function(){var a=g(h.resolveHref(b,B,!0),2),c=a[0],d=a[1];return{href:c,as:C?h.resolveHref(b,C):d||c}},[b,B,C]),t=y.href,r=y.as,V=d.default.useRef(t),W=d.default.useRef(r);f&&(e=d.default.Children.only(c));var J=f?e&&"object"==typeof e&&e.ref:A,u=g(l.useIntersection({rootMargin:"200px"}),3),K=u[0],L=u[1],M=u[2],N=d.default.useCallback(function(a){(W.current!==r||V.current!==t)&&(M(),W.current=r,V.current=t),K(a),J&&("function"==typeof J?J(a):"object"==typeof J&&(J.current=a))},[r,J,t,M,K]);d.default.useEffect(function(){var c=L&&H&&h.isLocalURL(t),a=void 0!==s?s:b&&b.locale,d=p[t+"%"+r+(a?"%"+a:"")];c&&!d&&q(b,t,r,{locale:a})},[r,t,L,s,H,b]);var v={ref:N,onClick:function(a){f||"function"!=typeof S||S(a),f&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,e,d,f,g,i,j,k,b){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(d)){a.preventDefault();var l,m,c=function(){e[g?"replace":"push"](d,f,{shallow:i,locale:k,scroll:j})};b?b(c):c()}}(a,b,t,r,P,Q,R,s,x?U:void 0)},onMouseEnter:function(a){f||"function"!=typeof T||T(a),f&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(t)&&q(b,t,r,{priority:!0})}};if(!f||F||"a"===e.type&&!("href"in e.props)){var z=void 0!==s?s:b&&b.locale,O=b&&b.isLocaleDomain&&m.getDomainLocale(r,z,b.locales,b.domainLocales);v.href=O||n.addBasePath(i.addLocale(r,z,b&&b.defaultLocale))}return f?d.default.cloneElement(e,v):d.default.createElement("a",Object.assign({},G,v),c)});a.default=f,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},7190:function(c,a,b){"use strict";var d=b(4941).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var j=a.rootRef,k=a.rootMargin,l=a.disabled||!g,p=e.useRef(),b=d(e.useState(!1),2),c=b[0],q=b[1],i=d(e.useState(null),2),m=i[0],n=i[1];e.useEffect(function(){if(g){if(p.current&&(p.current(),p.current=void 0),!l&&!c)return m&&m.tagName&&(p.current=h(m,function(a){return a&&q(a)},{root:null==j?void 0:j.current,rootMargin:k})),function(){null==p.current||p.current(),p.current=void 0}}else if(!c){var a=f.requestIdleCallback(function(){return q(!0)});return function(){return f.cancelIdleCallback(a)}}},[m,l,k,j,c]);var o=e.useCallback(function(){q(!1)},[]);return[n,c,o]};var e=b(7294),f=b(9311),g="function"==typeof IntersectionObserver;function h(b,c,d){var a=k(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),i.delete(g);var a=j.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&j.splice(a,1)}}}var i=new Map,j=[];function k(b){var a,c={root:b.root||null,margin:b.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(a=i.get(d)))return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},b);return a={id:c,observer:f,elements:e},j.push(c),i.set(c,a),a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),c.exports=a.default)},1018:function(h,a,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FullAppTreeContext=a.AppTreeContext=a.AppRouterContext=void 0;var b,c=(b=d(7294),b&&b.__esModule?b:{default:b}),e=c.default.createContext(null);a.AppRouterContext=e;var f=c.default.createContext(null);a.AppTreeContext=f;var g=c.default.createContext(null);a.FullAppTreeContext=g},5675:function(a,c,b){a.exports=b(8045)},1664:function(a,c,b){a.exports=b(8418)},4298:function(a,c,b){a.exports=b(699)},8357:function(e,c,a){"use strict";a.d(c,{w_:function(){return j}});var b=a(7294),d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=b.createContext&&b.createContext(d),g=function(){return(g=Object.assign||function(d){for(var a,b=1,e=arguments.length;b<e;b++)for(var c in a=arguments[b])Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}).apply(this,arguments)},h=function(b,e){var d={};for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&0>e.indexOf(a)&&(d[a]=b[a]);if(null!=b&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,a=Object.getOwnPropertySymbols(b);c<a.length;c++)0>e.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(b,a[c])&&(d[a[c]]=b[a[c]]);return d};function i(a){return a&&a.map(function(a,c){return b.createElement(a.tag,g({key:c},a.attr),i(a.child))})}function j(a){return function(c){return b.createElement(k,g({attr:g({},a.attr)},c),i(a.child))}}function k(c){var a=function(a){var d,i=c.attr,j=c.size,e=c.title,k=h(c,["attr","size","title"]),f=j||a.size||"1em";return a.className&&(d=a.className),c.className&&(d=(d?d+" ":"")+c.className),b.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,k,{className:d,style:g(g({color:c.color||a.color},a.style),c.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),e&&b.createElement("title",null,e),c.children)};return void 0!==f?b.createElement(f.Consumer,null,function(b){return a(b)}):a(d)}},9534:function(c,a,b){"use strict";function d(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}b.d(a,{Z:function(){return d}})},6180:function(c,a,b){"use strict";function d(){return(d=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function e(a,b){if(0===a.length)return b.classGroupId;var c,g=a[0],d=b.nextPart.get(g),f=d?e(a.slice(1),d):void 0;if(f)return f;if(0!==b.validators.length){var h=a.join("-");return null==(c=b.validators.find(function(a){return(0,a.validator)(h)}))?void 0:c.classGroupId}}b.d(a,{m:function(){return F}});var f=/^\[(.+)\]$/;function g(a,b,c,d){a.forEach(function(a){if("string"==typeof a){(""===a?b:h(b,a)).classGroupId=c;return}if("function"==typeof a){if(i(a)){g(a(d),b,c,d);return}b.validators.push({validator:a,classGroupId:c});return}Object.entries(a).forEach(function(a){var e=a[0],f=a[1];g(f,h(b,e),c,d)})})}function h(a,b){var c=a;return b.split("-").forEach(function(a){c.nextPart.has(a)||c.nextPart.set(a,{nextPart:new Map,validators:[]}),c=c.nextPart.get(a)}),c}function i(a){return a.isThemeGetter}function j(a,b){return b?a.map(function(a){var c=a[0],d=a[1],e=d.map(function(a){return"string"==typeof a?b+a:"object"==typeof a?Object.fromEntries(Object.entries(a).map(function(a){var c=a[0],d=a[1];return[b+c,d]})):a});return[c,e]}):a}var k=/\s+/;function l(){for(var b,c,d=0,a="";d<arguments.length;)(b=arguments[d++])&&(c=m(b))&&(a&&(a+=" "),a+=c);return a}function m(a){if("string"==typeof a)return a;for(var d,b="",c=0;c<a.length;c++)a[c]&&(d=m(a[c]))&&(b&&(b+=" "),b+=d);return b}function n(b){var a=function(a){return a[b]||[]};return a.isThemeGetter=!0,a}var o=/^\[(.+)\]$/,p=/^\d+\/\d+$/,q=new Set(["px","full","screen"]),r=/^(\d+)?(xs|sm|md|lg|xl)$/,s=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/,t=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function u(a){return!Number.isNaN(Number(a))||q.has(a)||p.test(a)||v(a)}function v(c){var b,a=null==(b=o.exec(c))?void 0:b[1];return!!a&&(a.startsWith("length:")||s.test(a))}function w(c){var a,b=null==(a=o.exec(c))?void 0:a[1];return!!b&&b.startsWith("size:")}function x(c){var a,b=null==(a=o.exec(c))?void 0:a[1];return!!b&&b.startsWith("position:")}function y(c){var b,a=null==(b=o.exec(c))?void 0:b[1];return!!a&&(a.startsWith("url(")||a.startsWith("url:"))}function z(c){var b,a=null==(b=o.exec(c))?void 0:b[1];return!!a&&(!Number.isNaN(Number(a))||a.startsWith("number:"))}function A(a){var b,c=null==(b=o.exec(a))?void 0:b[1];return c?Number.isInteger(Number(c)):Number.isInteger(Number(a))}function B(a){return o.test(a)}function C(){return!0}function D(a){return r.test(a)}function E(c){var a,b=null==(a=o.exec(c))?void 0:a[1];return!!b&&t.test(b)}var F=function(){for(var h,i,m,b=arguments.length,c=Array(b),a=0;a<b;a++)c[a]=arguments[a];var n=function(p){var b,q,r,s,t,a,u,k,l,v=c[0],w=c.slice(1),x=w.reduce(function(a,b){return b(a)},v());return i=(h=d({cache:function(a){if(a<1)return{get:function(){},set:function(){}};var b=0,c=new Map,d=new Map;function e(e,f){c.set(e,f),++b>a&&(b=0,d=c,c=new Map)}return{get:function(b){var a=c.get(b);return void 0!==a?a:void 0!==(a=d.get(b))?(e(b,a),a):void 0},set:function(a,b){c.has(a)?c.set(a,b):e(a,b)}}}((b=x).cacheSize),splitModifiers:(r=(q=b).separator||":",function(b){for(var c=0,d=[],e=0,a=0;a<b.length;a++){var f=b[a];0===c&&f===r[0]&&(1===r.length||b.slice(a,a+r.length)===r)&&(d.push(b.slice(e,a)),e=a+r.length),"["===f?c++:"]"===f&&c--}var g=0===d.length?b:b.substring(e),h=g.startsWith("!"),i=h?g.substring(1):g;return{modifiers:d,hasImportantModifier:h,baseClassName:i}})},(t=(a=s=b,u=a.theme,k=a.prefix,l={nextPart:new Map,validators:[]},j(Object.entries(a.classGroups),k).forEach(function(a){var b=a[0],c=a[1];g(c,l,b,u)}),l),{getClassGroupId:function(b){var a=b.split("-");return""===a[0]&&1!==a.length&&a.shift(),e(a,t)||function d(b){if(f.test(b)){var a=f.exec(b)[1],c=null==a?void 0:a.substring(0,a.indexOf(":"));if(c)return"arbitrary.."+c}}(b)},getConflictingClassGroupIds:function(a){return s.conflictingClassGroups[a]||[]}}))).cache.get,m=h.cache.set,n=o,o(p)};function o(a){var c=i(a);if(c)return c;var d,b,f,g,j,l,e=(d=a,f=(b=h).splitModifiers,g=b.getClassGroupId,j=b.getConflictingClassGroupIds,l=new Set,d.trim().split(k).map(function(a){var b=f(a),e=b.modifiers,h=b.hasImportantModifier,i=b.baseClassName,c=g(i);if(!c)return{isTailwindClass:!1,originalClassName:a};var d=(function(a){if(a.length<=1)return a;var b=[],c=[];return a.forEach(function(a){"["===a[0]?(b.push.apply(b,c.sort().concat([a])),c=[]):c.push(a)}),b.push.apply(b,c.sort()),b})(e).join(":");return{isTailwindClass:!0,modifierId:h?d+"!":d,classGroupId:c,originalClassName:a}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var d=a.modifierId,b=a.classGroupId,c=d+b;return!l.has(c)&&(l.add(c),j(b).forEach(function(a){return l.add(d+a)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" "));return m(a,e),e}return function(){return n(l.apply(null,arguments))}}(function(){var b=n("colors"),a=n("spacing"),F=n("blur"),G=n("brightness"),e=n("borderColor"),c=n("borderRadius"),m=n("borderSpacing"),d=n("borderWidth"),H=n("contrast"),I=n("grayscale"),J=n("hueRotate"),K=n("invert"),o=n("gap"),p=n("gradientColorStops"),g=n("inset"),h=n("margin"),f=n("opacity"),i=n("padding"),L=n("saturate"),q=n("scale"),M=n("sepia"),N=n("skew"),O=n("space"),P=n("translate"),r=function(){return["auto","contain","none"]},s=function(){return["auto","hidden","clip","visible","scroll"]},Q=function(){return["auto",a]},R=function(){return["",u]},k=function(){return["auto",A]},S=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},l=function(){return["solid","dashed","dotted","double","none"]},T=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},t=function(){return["start","end","center","between","around","evenly"]},j=function(){return["","0",B]},U=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]};return{cacheSize:500,theme:{colors:[C],spacing:[u],blur:["none","",D,v],brightness:[A],borderColor:[b],borderRadius:["none","","full",D,v],borderSpacing:[a],borderWidth:R(),contrast:[A],grayscale:j(),hueRotate:[A],invert:j(),gap:[a],gradientColorStops:[b],inset:Q(),margin:Q(),opacity:[A],padding:[a],saturate:[A],scale:[A],sepia:j(),skew:[A,B],space:[a],translate:[a]},classGroups:{aspect:[{aspect:["auto","square","video",B]}],container:["container"],columns:[{columns:[D]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(S(),[B])}],overflow:[{overflow:s()}],"overflow-x":[{"overflow-x":s()}],"overflow-y":[{"overflow-y":s()}],overscroll:[{overscroll:r()}],"overscroll-x":[{"overscroll-x":r()}],"overscroll-y":[{"overscroll-y":r()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:[A]}],basis:[{basis:[a]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",B]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",A]}],"grid-cols":[{"grid-cols":[C]}],"col-start-end":[{col:["auto",{span:[A]}]}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":[C]}],"row-start-end":[{row:["auto",{span:[A]}]}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",B]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",B]}],gap:[{gap:[o]}],"gap-x":[{"gap-x":[o]}],"gap-y":[{"gap-y":[o]}],"justify-content":[{justify:t()}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:[].concat(t(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(t(),["baseline","stretch"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[i]}],px:[{px:[i]}],py:[{py:[i]}],pt:[{pt:[i]}],pr:[{pr:[i]}],pb:[{pb:[i]}],pl:[{pl:[i]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[O]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[O]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",a]}],"min-w":[{"min-w":["min","max","fit",u]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[D]},D,v]}],h:[{h:[a,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",u]}],"max-h":[{"max-h":[a,"min","max","fit"]}],"font-size":[{text:["base",D,v]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",z]}],"font-family":[{font:[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",v]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",u]}],"list-style-type":[{list:["none","disc","decimal",B]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[b]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[b]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(l(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",u]}],"underline-offset":[{"underline-offset":["auto",u]}],"text-decoration-color":[{decoration:[b]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[a]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",v]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap"]}],break:[{break:["normal","words","all","keep"]}],content:[{content:["none",B]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(S(),[x])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",w]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},y]}],"bg-color":[{bg:[b]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[].concat(l(),["hidden"])}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:l()}],"border-color":[{border:[e]}],"border-color-x":[{"border-x":[e]}],"border-color-y":[{"border-y":[e]}],"border-color-t":[{"border-t":[e]}],"border-color-r":[{"border-r":[e]}],"border-color-b":[{"border-b":[e]}],"border-color-l":[{"border-l":[e]}],"divide-color":[{divide:[e]}],"outline-style":[{outline:[""].concat(l())}],"outline-offset":[{"outline-offset":[u]}],"outline-w":[{outline:[u]}],"outline-color":[{outline:[b]}],"ring-w":[{ring:R()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[b]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[u]}],"ring-offset-color":[{"ring-offset":[b]}],shadow:[{shadow:["","inner","none",D,E]}],"shadow-color":[{shadow:[C]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":T()}],"bg-blend":[{"bg-blend":T()}],filter:[{filter:["","none"]}],blur:[{blur:[F]}],brightness:[{brightness:[G]}],contrast:[{contrast:[H]}],"drop-shadow":[{"drop-shadow":["","none",D,B]}],grayscale:[{grayscale:[I]}],"hue-rotate":[{"hue-rotate":[J]}],invert:[{invert:[K]}],saturate:[{saturate:[L]}],sepia:[{sepia:[M]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[F]}],"backdrop-brightness":[{"backdrop-brightness":[G]}],"backdrop-contrast":[{"backdrop-contrast":[H]}],"backdrop-grayscale":[{"backdrop-grayscale":[I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[J]}],"backdrop-invert":[{"backdrop-invert":[K]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[m]}],"border-spacing-x":[{"border-spacing-x":[m]}],"border-spacing-y":[{"border-spacing-y":[m]}],"table-layout":[{table:["auto","fixed"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",B]}],duration:[{duration:[A]}],ease:[{ease:["linear","in","out","in-out",B]}],delay:[{delay:[A]}],animate:[{animate:["none","spin","ping","pulse","bounce",B]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[q]}],"scale-x":[{"scale-x":[q]}],"scale-y":[{"scale-y":[q]}],rotate:[{rotate:[A,B]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",B]}],accent:[{accent:["auto",b]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",B]}],"caret-color":[{caret:[b]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[a]}],"scroll-mx":[{"scroll-mx":[a]}],"scroll-my":[{"scroll-my":[a]}],"scroll-mt":[{"scroll-mt":[a]}],"scroll-mr":[{"scroll-mr":[a]}],"scroll-mb":[{"scroll-mb":[a]}],"scroll-ml":[{"scroll-ml":[a]}],"scroll-p":[{"scroll-p":[a]}],"scroll-px":[{"scroll-px":[a]}],"scroll-py":[{"scroll-py":[a]}],"scroll-pt":[{"scroll-pt":[a]}],"scroll-pr":[{"scroll-pr":[a]}],"scroll-pb":[{"scroll-pb":[a]}],"scroll-pl":[{"scroll-pl":[a]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",B]}],fill:[{fill:[b,"none"]}],"stroke-w":[{stroke:[u,z]}],stroke:[{stroke:[b,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-t","rounded-r","rounded-b","rounded-l","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]}}})}}])