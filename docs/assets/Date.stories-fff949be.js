import{c as p,D as i,g as c}from"./FormFieldsComponentsForStory-6cfb7405.js";import"./DynamicFormBuilder-1db66a04.js";import"./index-453e6029.js";import"./index-d765e9f1.js";const S={...p,title:"Field tags/Date",component:i,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["date"]}},args:{tag:"date"},tags:["autodocs"]},r={args:c("date")},t={args:c("month")};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: getSimpleStoryArgs<TC>('date')
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var s,n,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: getSimpleStoryArgs<TC>('month')
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const D=["Date","Month"];export{r as Date,t as Month,D as __namedExportsOrder,S as default};
