(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{7806:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dayz",function(){return c(4513)}])},4513:function(c,b,a){"use strict";a.r(b),a.d(b,{default:function(){return f}});var d=a(5893),e=a(7294);function f(){var a=(0,e.useState)(new Date(new Date().getFullYear(),new Date().getMonth(),1)),b=a[0],c=a[1];return(0,d.jsx)("div",{className:" h-full min-h-full absolute w-full flex justify-center dark:bg-gray-400",children:(0,d.jsx)("div",{className:" w-full flex mt-28 items-center flex-col",children:(0,d.jsx)(j,{currentMonth:b,setCurrentMonth:c})})})}var g=function(a){return String(a).split("").reduce(function(a,b){return a+parseInt(b,10)},0)},h=function(b,c){for(var d=b.getDate(),e=b.getMonth()+1,f=b.getFullYear(),a=g(d)+g(e)+g(f);a>=10;)a=g(a);return a===c},i=function(a){for(var e=new Date(a.getFullYear(),a.getMonth(),1),f=new Date(a.getFullYear(),a.getMonth()+1,0),g=f.getDate(),h=e.getDay(),b=[],d=0;d<h;d++)b.push(void 0);for(var c=1;c<=g;c++)b.push(c);return b},j=function(c){var b,f=c.currentMonth,n=c.setCurrentMonth,e=new Date(f),g=(b=e,"".concat(["January","February","March","April","May","June","July","August","September","October","November","December",][b.getMonth()]," ").concat(b.getFullYear())),j=i(e),a=new Date,k=h(a,4),l=h(a,8),m=h(a,3);return(0,d.jsxs)("div",{className:"flex items-center justify-center py-8 px-4 flex-col gap-2 cursor-default",suppressHydrationWarning:!0,children:[(0,d.jsxs)("div",{className:"flex justify-between w-full",children:[(0,d.jsx)("div",{className:"flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white dark:text-gray-100 text-gray-800",children:a.toLocaleDateString()}),(0,d.jsxs)("div",{className:"flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white italic dark:text-gray-100 text-gray-800",children:["Just another",k?(0,d.jsx)("span",{className:"text-red-500",children:"danger"}):l?(0,d.jsx)("span",{className:"text-green-500",children:"lucky"}):m?(0,d.jsx)("span",{className:"text-blue-500",children:"good"}):(0,d.jsx)("span",{children:"normal"}),"day."]})]}),(0,d.jsx)("div",{className:"max-w-sm w-full shadow-lg ",children:(0,d.jsxs)("div",{className:"p-5 dark:bg-gray-800 bg-white rounded flex-shrink",children:[(0,d.jsxs)("div",{className:"px-4 flex items-center justify-between",children:[(0,d.jsx)("span",{tabIndex:0,className:"focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800",children:g}),(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("button",{"aria-label":"calendar backward",className:"focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100",onClick:function(){var a,b,c,d;n((b=(a=f).getFullYear(),c=a.getMonth(),d=new Date(b,c-1,1)))},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-left",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,d.jsx)("polyline",{points:"15 6 9 12 15 18"})]})}),(0,d.jsx)("button",{"aria-label":"calendar forward",className:"focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100",onClick:function(){var a,b,c,d;n((b=(a=f).getFullYear(),c=a.getMonth(),d=new Date(b,c+1,1)))},children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-right",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,d.jsx)("polyline",{points:"9 6 15 12 9 18"})]})})]})]}),(0,d.jsx)("div",{className:"flex items-center justify-between pt-12 overflow-x-auto",children:(0,d.jsxs)("table",{className:"w-full",children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:["Su","Mo","Tu","We","Th","Fr","Sa"].map(function(a){return(0,d.jsx)("th",{children:(0,d.jsx)("div",{className:"w-full flex justify-center",children:(0,d.jsx)("p",{className:"text-base font-medium text-center text-gray-800 dark:text-gray-100",children:a})})},a)})})}),(0,d.jsx)("tbody",{children:Array.from({length:Math.ceil(j.length/7)}).map(function(b,a){return(0,d.jsx)("tr",{children:j.slice(7*a,(a+1)*7).map(function(a,c){var b=new Date(e.getFullYear(),e.getMonth(),a),f=a&&h(b,4),g=a&&h(b,8),i=a&&h(b,3);return(0,d.jsx)("td",{className:"pt-6",children:(0,d.jsx)("div",{className:"px-2 py-2 flex w-full justify-center",children:a?(0,d.jsx)("p",{className:"text-base font-medium ".concat(f?"bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center":g?"bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center":i?"bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center":"text-gray-500 dark:text-gray-100"),children:a}):null})},c)})},a)})})]})})]})}),(0,d.jsxs)("div",{className:"flex justify-between w-full uppercase",children:[(0,d.jsxs)("div",{className:"flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white dark:text-gray-100 text-gray-800",children:[(0,d.jsx)("div",{className:"bg-red-500 text-white text-xs rounded w-5 h-5 flex items-center justify-center",children:"4"}),"Danger"]}),(0,d.jsxs)("div",{className:"flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white dark:text-gray-100 text-gray-800",children:[(0,d.jsx)("div",{className:"bg-green-500 text-white text-xs rounded w-5 h-5 flex items-center justify-center",children:"8"}),"Lucky"]}),(0,d.jsxs)("div",{className:"flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white dark:text-gray-100 text-gray-800",children:[(0,d.jsx)("div",{className:"bg-blue-500 text-white text-xs rounded w-5 h-5 flex items-center justify-center",children:"3"}),"Good"]})]})]})}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=7806)}),_N_E=a.O()}])