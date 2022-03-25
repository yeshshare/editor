/*! grapesjs-tabs - 1.0.7 */
!function(t,e){'object'==typeof exports&&'object'==typeof module?module.exports=e():'function'==typeof define&&define.amd?define([],e):'object'==typeof exports?exports["grapesjs-tabs"]=e():t["grapesjs-tabs"]=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&'object'==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,'default',{enumerable:!0,value:t}),2&e&&'string'!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,'a',e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(null==t)return{};var n,o,a=r(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(1),c=n.n(a);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=function(t,e){var n=e.defaultModel,r=e.typeTabs,a=e.selectorTab,i=(e.editor,c()(e,["defaultModel","typeTabs","selectorTab","editor"])),b=[{full:1,type:'button',label:!1,text:'Style Active',command:function(t){var e=t.Panels.getButton('views','open-sm');e&&e.set('active',1);var n=".".concat(i.classTab,".").concat(i.classTabActive);t.StyleManager.setTarget(n,{targetIsClass:1})}}],p=function(t){return t.getAttributes()["data-prev"]};t.addType(i.typeTab,{model:{defaults:s({name:'Tab',draggable:"[data-gjs-type=\"".concat(i.typeTabContainer,"\"]"),attributes:{role:"tab"},components:i.templateTab,classes:i.classTab,traits:b},i.tabProps),init:function(){this.on('removed',this.__onRemove)},__initTab:function(){if(!this.tabContent){var t=this.getTabContent();if(t&&p(t)){var e,n=t.getId(),r=this.getId();t.addAttributes({id:n,'aria-labelledby':r,hidden:!0}),t.removeAttributes("data-prev"),this.addAttributes((e={},o()(e,a,n),o()(e,"id",r),e))}if(!t){var c,s=(t=this.getTabsType().getContentsType().append({type:i.typeTabContent,components:i.templateTabContent(this)})[0]).getId(),b=this.getId();t.addAttributes({id:s,'aria-labelledby':b,hidden:!0}),this.addAttributes((c={},o()(c,a,s),o()(c,"id",b),c)),this.tabContent=t}this.tabContent=t}},__onRemove:function(){var t=this.getTabContent();t&&t.remove(),this.getTabsType().trigger('rerender')},getTabsType:function(){return this.closestType(r)},getTabContent:function(){var t=this.getAttributes()[a],e=this.getTabsType();if(e&&t)return e.findContents().filter((function(e){return e.getId()==t||p(e)==t}))[0]},clone:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t._inner;if(e){var r=this.getTabContent();r&&r.addAttributes(o()({},"data-prev",r.getId()))}var c=n.prototype.clone.apply(this,arguments);return!e&&c.addAttributes(o()({},a,'')),c}}})};function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=function(t,e){var n=e.typeTab,r=e.typeTabContent,o=e.typeTabContents,a=e.typeTabContainer,i=e.style,s=c()(e,["typeTab","typeTabContent","typeTabContents","typeTabContainer","style"]),b=s.typeTabs,p=[1,2,3].map((function(t){return{type:n}}));t.addType(b,{model:{defaults:l({name:'Tabs',classactive:s.classTabActive,selectortab:s.selectorTab,'script-props':['classactive','selectortab'],script:function(t){var e,n,r=this,o=t.classactive,a=t.selectortab,c=window,i=c.history,s=c._isEditor,b='[role=tab]',p=document,l=p.body,u=p.location,f=l.matchesSelector||l.webkitMatchesSelector||l.mozMatchesSelector||l.msMatchesSelector,y=function(t,e){for(var n=t||[],r=0;r<n.length;r++)e(n[r],r)},d=function(t){return t.getAttribute(a)},O=function(t,e){return t.querySelector(e)},g=function(){return r.querySelectorAll(b)},v=function(t,e){return!s&&(t.tabIndex=e)},h=function(t){y(g(),(function(t){t.className=t.className.replace(o,'').trim(),t.ariaSelected='false',v(t,'-1')})),y(r.querySelectorAll("[role=tabpanel]"),(function(t){return t.hidden=!0})),t.className+=' '+o,t.ariaSelected='true',v(t,'0');var e=d(t),n=e&&O(r,"#".concat(e));n&&(n.hidden=!1)},j=O(r,".".concat(o).concat(b));(j=j||(n=(u.hash||'').replace('#',''))&&O(r,(e=a,"".concat(b,"[").concat(e,"=").concat(n,"]")))||O(r,b))&&h(j),r.addEventListener('click',(function(t){var e=t.target,n=f.call(e,b);if(n||(e=function(t){var e;return y(g(),(function(n){e||n.contains(t)&&(e=n)})),e}(e))&&(n=1),n&&!t.__trg&&e.className.indexOf(o)<0){t.preventDefault(),t.__trg=1,h(e);var r=d(e);try{i&&i.pushState(null,null,"#".concat(r))}catch(t){}}}))},traits:[{full:1,type:'button',label:!1,text:'Add Tab',command:function(t){var e=t.getSelected();e&&e.addTab()}}],components:[{type:a,components:p},{type:o},i&&"<style>".concat(i(s),"</style>")]},s.tabsProps),init:function(){this.findTabs().map(this.__onTab),this.listenTo(this.getTabContainerType().components(),'add',this.__onTab)},__onTab:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!n.avoidStore&&!n.temporary&&t.__initTab&&t.__initTab()},getTabContainerType:function(){return this.findType(a)[0]},getContentsType:function(){return this.findType(o)[0]||this},findTabs:function(){return this.findType(n)},findContents:function(){return this.findType(r)},addTab:function(t){this.getTabContainerType().append({type:n,components:t})}}})};function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=function(t,e){t.addType(e.typeTabContent,{model:{defaults:y({name:'Tab Content',draggable:!1,copyable:!1,removable:!1,highlightable:!1,attributes:{role:"tabpanel"},classes:e.classTabContent,traits:[]},e.tabContentProps)}})};function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(t,e){t.addType(e.typeTabContents,{model:{defaults:g({name:'Tab Contents',draggable:!1,droppable:!1,copyable:!1,removable:!1,classes:e.classTabContents},e.tabContentsProps)}})};function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T=function(t,e){t.addType(e.typeTabContainer,{model:{defaults:j({name:'Tab Container',draggable:"[data-gjs-type=\"".concat(e.typeTabs,"\"]"),droppable:"[data-gjs-type=\"".concat(e.typeTab,"\"]"),copyable:!1,removable:!1,highlightable:!1,attributes:{role:"tablist"},classes:e.classTabContainer},e.tabContainerProps)}})};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.DomComponents,r=P(P({},e),{},{defaultModel:n.getType('default').model,editor:t});[b,u,d,v,T].map((function(t){return t(n,r)}))};function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var S=function(t,e){var n=e.tabsBlock,r=e.typeTabs,a=t.BlockManager;n&&a.add(r,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({media:"\n      <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M22 9.3c0-.8-.5-1.3-1.3-1.3H3.4C2.5 8 2 8.5 2 9.3v7.4c0 .8.5 1.3 1.3 1.3h17.4c.8 0 1.3-.5 1.3-1.3V9.3zM21 17H3V9h18v8z\" fill-rule=\"nonzero\"/><rect x=\"3\" y=\"5\" width=\"4\" height=\"2\" rx=\".5\"/><rect x=\"8\" y=\"5\" width=\"4\" height=\"2\" rx=\".5\"/><rect x=\"13\" y=\"5\" width=\"4\" height=\"2\" rx=\".5\"/>\n      </svg>\n    ",label:'Tabs',content:{type:r}},n))},D={tabsBlock:{},tabsProps:{},tabContainerProps:{},tabProps:{},tabContentProps:{},tabContentsProps:{},classTab:'tab',classTabContainer:'tab-container',classTabActive:'tab-active',classTabContent:'tab-content',classTabContents:'tab-contents',selectorTab:'aria-controls',typeTabs:'tabs',typeTabContainer:'tab-container',typeTab:'tab',typeTabContent:'tab-content',typeTabContents:'tab-contents',templateTab:function(t){return'<span data-gjs-highlightable="false">Tab</span>'},templateTabContent:function(t){return'<div>Tab Content</div>'},style:function(t){return"\n        .".concat(t.classTab," {\n            padding: 7px 14px;\n            display: inline-block;\n            border-radius: 3px;\n            margin-right: 10px;\n        }\n\n        .").concat(t.classTab,":focus {\n            outline: none;\n        }\n\n        .").concat(t.classTab,".").concat(t.classTabActive," {\n            background-color: #0d94e6;\n            color: white;\n        }\n\n        .").concat(t.classTabContainer," {\n            display: inline-block;\n        }\n\n        .").concat(t.classTabContent," {\n            animation: fadeEffect 1s;\n        }\n\n        .").concat(t.classTabContents," {\n            min-height: 100px;\n            padding: 10px;\n        }\n\n        @keyframes fadeEffect {\n            from {opacity: 0;}\n            to {opacity: 1;}\n        }\n    ")}};function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=_(_({},D),e);w(t,n),S(t,n)}}])}));
//# sourceMappingURL=grapesjs-tabs.min.js.map