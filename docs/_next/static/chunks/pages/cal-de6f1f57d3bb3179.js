(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{5975:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cal",function(){return c(1770)}])},1770:function(c,b,a){"use strict";a.r(b),a.d(b,{default:function(){return f}});var d=a(5893),e=a(7294);function f(){var a=(0,e.useState)(new Date(new Date().getFullYear(),new Date().getMonth(),1)),b=a[0],c=a[1];return(0,d.jsx)("div",{className:" h-full min-h-full absolute w-full flex justify-center items-center dark:bg-gray-400",children:(0,d.jsx)("div",{className:" w-full flex items-center justify-center",children:(0,d.jsx)(i,{currentMonth:b,setCurrentMonth:c})})})}var g=function(c){for(var d=c.getDate(),e=c.getMonth()+1,f=c.getFullYear(),a=function(a){return String(a).split("").reduce(function(a,b){return a+parseInt(b,10)},0)},b=a(d)+a(e)+a(f);b>=10;)b=a(b);return 4===b},h=function(a){for(var e=new Date(a.getFullYear(),a.getMonth(),1),f=new Date(a.getFullYear(),a.getMonth()+1,0),g=f.getDate(),h=e.getDay(),b=[],d=0;d<h;d++)b.push(void 0);for(var c=1;c<=g;c++)b.push(c);return b},i=function(b){var a,e=b.currentMonth,j=b.setCurrentMonth,c=new Date(e),f=(a=c,"".concat(["January","February","March","April","May","June","July","August","September","October","November","December",][a.getMonth()]," ").concat(a.getFullYear())),i=h(c);return(0,d.jsx)("div",{className:"flex items-center justify-center py-8 px-4 ",children:(0,d.jsx)("div",{className:"max-w-sm w-full shadow-lg",children:(0,d.jsxs)("div",{className:"md:p-8 p-5 dark:bg-gray-800 bg-white rounded min-w-[430px] flex-shrink",children:[(0,d.jsxs)("div",{className:"px-4 flex items-center justify-between",children:[(0,d.jsx)("span",{tabIndex:0,className:"focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800",children:f}),(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("button",{"aria-label":"calendar backward",className:"focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100",onClick:function(){var a,b,c,d;j((b=(a=e).getFullYear(),c=a.getMonth(),d=new Date(b,c-1,1)))},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-left",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,d.jsx)("polyline",{points:"15 6 9 12 15 18"})]})}),(0,d.jsx)("button",{"aria-label":"calendar forward",className:"focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100",onClick:function(){var a,b,c,d;j((b=(a=e).getFullYear(),c=a.getMonth(),d=new Date(b,c+1,1)))},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,d.jsx)("polyline",{points:"9 6 15 12 9 18"})]})})]})]}),(0,d.jsx)("div",{className:"flex items-center justify-between pt-12 overflow-x-auto",children:(0,d.jsxs)("table",{className:"w-full",children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:["Mo","Tu","We","Th","Fr","Sa","Su"].map(function(a){return(0,d.jsx)("th",{children:(0,d.jsx)("div",{className:"w-full flex justify-center",children:(0,d.jsx)("p",{className:"text-base font-medium text-center text-gray-800 dark:text-gray-100",children:a})})},a)})})}),(0,d.jsx)("tbody",{children:Array.from({length:Math.ceil(i.length/7)}).map(function(b,a){return(0,d.jsx)("tr",{children:i.slice(7*a,(a+1)*7).map(function(a,b){var e=new Date(c.getFullYear(),c.getMonth(),a),f=a&&g(e);return(0,d.jsx)("td",{className:"pt-6",children:(0,d.jsx)("div",{className:"px-2 py-2 cursor-pointer flex w-full justify-center",children:a?(0,d.jsx)("p",{className:"text-base font-medium ".concat(f?"bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center":"text-gray-500 dark:text-gray-100"),children:a}):null})},b)})},a)})})]})})]})})})}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=5975)}),_N_E=a.O()}])