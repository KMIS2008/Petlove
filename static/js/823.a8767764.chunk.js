"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[823],{5823:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,o,u,c,a,f,l,s,p=t(2791),d=t(9434),h=t(208),g=t(2387),m=t(7245),x=t(168),v=t(6487),y=v.ZP.div(r||(r=(0,x.Z)(["\npadding: 50px 20px;\n"]))),w=v.ZP.li(i||(i=(0,x.Z)(["\npadding: 12px 20px;\nmargin-bottom: 20px;\nborder-radius: 15px;\nbackground: ",";\n\ndisplay: flex;\nflex-direction: column;\n"])),(function(n){return n.theme.colors.white})),j=v.ZP.ul(o||(o=(0,x.Z)(["\ndisplay: flex;\nmargin-left: auto;\njustify-content: center;\nalign-items: center;\n text-align: center; \nlist-style: none;\n\nheight: 32px;\nborder-radius: 30px;\nbackground: #FFF4DF;\n\nfont-family: Manrope;\nfont-size: 12px;\nfont-weight: 500;\nline-height: 1,25;\nletter-spacing: -0.02em;\ncolor: ","; \n"])),(function(n){return n.theme.colors.yellow})),Z=v.ZP.li(u||(u=(0,x.Z)(["\npadding: 0 8px;\n"]))),k=v.ZP.div(c||(c=(0,x.Z)(["\ndisplay: flex;\ngap: 20px;\n"]))),b=v.ZP.h4(a||(a=(0,x.Z)(["\nmargin-bottom: 20px;\nfont-family: Manrope;\nfont-size: 16px;\nfont-weight: 700;\nline-height: 1,25;\nletter-spacing: -0.04em;\n\n"]))),P=v.ZP.p(f||(f=(0,x.Z)(["\nmargin-bottom: 8px;\nfont-family: Manrope;\nfont-size: 14px;\nfont-weight: 500;\nline-height: 1,29;\nletter-spacing: -0.02em;\ncolor: #26262680;\n"]))),F=v.ZP.span(l||(l=(0,x.Z)(["\ncolor: #262626;\n"]))),z=t(184),A=function(n){var e=n.friend,t=e.workDays,r=e.imageUrl,i=e.title,o=e.email,u=e.address,c=e.phone,a=(new Date).getDay(),f=t?t[a]:null;return(0,z.jsxs)(w,{children:[(0,z.jsx)(j,{children:f?(0,z.jsx)(Z,{children:f.isOpen?"".concat(f.from," - ").concat(f.to):"Closed"}):(0,z.jsx)(Z,{children:"Day and night"})}),(0,z.jsxs)(k,{children:[(0,z.jsx)("img",{width:80,height:80,src:r,alt:i}),(0,z.jsxs)("div",{children:[(0,z.jsx)(b,{children:i}),o&&(0,z.jsxs)(P,{children:["Email: ",(0,z.jsxs)(F,{children:[" ",o]})," "]}),u&&(0,z.jsxs)(P,{children:["Adress: ",(0,z.jsxs)(F,{children:[" ",u]})," "]}),c&&(0,z.jsxs)(P,{children:["Phone: ",(0,z.jsxs)(F,{children:[" ",c]})," "]})]})]})]})},C=v.ZP.ul(s||(s=(0,x.Z)(["\nbackground: #F9F9F9;\nlist-style: none;\npadding: 40px 0;\n\n"]))),D=function(n){var e=n.friends;return(0,z.jsx)(C,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,z.jsx)(A,{friend:n},n._id)}))})};function E(){var n=(0,d.I0)(),e=(0,d.v9)(g.$e);return(0,p.useEffect)((function(){n((0,h.nm)())}),[n]),(0,z.jsxs)(y,{children:[(0,z.jsx)(m.D,{name:"Our friends"}),(0,z.jsx)(D,{friends:e})]})}},7245:function(n,e,t){t.d(e,{D:function(){return c}});var r,i=t(168),o=t(6487).ZP.h1(r||(r=(0,i.Z)(["\nmargin-bottom : ",";\nfont-family: Manrope;\nfont-size: 28px;\nfont-weight: 700;\nline-height: 1;\nletter-spacing: -0.04em;\ntext-align: left;\ncolor: #262626;\n\n@media (min-width: 768px) {\nfont-size: 54px;\n}\n"])),(function(n){return n.theme.spacing(2)})),u=t(184),c=function(n){var e=n.name;return(0,u.jsx)(o,{children:e})}},2387:function(n,e,t){t.d(e,{$e:function(){return s},AD:function(){return o},Af:function(){return i},HE:function(){return l},SX:function(){return a},hF:function(){return p},k5:function(){return f},xU:function(){return u},zh:function(){return c}});var r=t(6916),i=function(n){return n.contact.items},o=function(n){return n.filter},u=function(n){return n.contact.isLoading},c=function(n){return n.contact.error},a=function(n){return n.news.news},f=function(n){return n.news.totalPages},l=function(n){return n.notices.notices},s=function(n){return n.friends.friends},p=(0,r.P1)([i,o],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))},6916:function(n,e,t){t.d(e,{P1:function(){return a}});var r="NOT_FOUND";var i=function(n,e){return n===e};function o(n,e){var t="object"===typeof e?e:{equalityCheck:e},o=t.equalityCheck,u=void 0===o?i:o,c=t.maxSize,a=void 0===c?1:c,f=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(u),s=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function i(n){var i=t.findIndex((function(t){return e(n,t.key)}));if(i>-1){var o=t[i];return i>0&&(t.splice(i,1),t.unshift(o)),o.value}return r}return{get:i,put:function(e,o){i(e)===r&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function p(){var e=s.get(arguments);if(e===r){if(e=n.apply(null,arguments),f){var t=s.getEntries(),i=t.find((function(n){return f(n.value,e)}));i&&(e=i.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function u(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,c=0,a={memoizeOptions:void 0},f=r.pop();if("object"===typeof f&&(a=f,f=r.pop()),"function"!==typeof f)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var l=a,s=l.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],h=u(r),g=n.apply(void 0,[function(){return c++,f.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return o=g.apply(null,n)}));return Object.assign(m,{resultFunc:f,memoizedResultFunc:g,dependencies:h,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),m};return i}var a=c(o)}}]);
//# sourceMappingURL=823.a8767764.chunk.js.map