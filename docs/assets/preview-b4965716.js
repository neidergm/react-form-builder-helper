import{_ as a}from"./iframe-01e45115.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-58ef108a.js").then(r=>r.D),["./DocsRenderer-K4EAMTCU-58ef108a.js","./iframe-01e45115.js","./index-f46741a2.js","./react-18-f103fcb4.js","./jsx-runtime-1438501e.js","./index-1b441bc2.js","./_getPrototype-15d0d45b.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};