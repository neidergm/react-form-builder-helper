import{c as l,F as n,g as m}from"./FormFieldsComponentsForStory-6cfb7405.js";import"./DynamicFormBuilder-1db66a04.js";import"./index-453e6029.js";import"./index-d765e9f1.js";const S={...l,title:"Field tags/File",component:n,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["file"]}},args:{tag:"file"},tags:["autodocs"]},e={args:m("simple")},r={args:m("multiple")};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: getSimpleStoryArgs<TC>('simple')
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var a,i,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: getSimpleStoryArgs<TC>('multiple')
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const f=["Simple","Multiple"];export{r as Multiple,e as Simple,f as __namedExportsOrder,S as default};
