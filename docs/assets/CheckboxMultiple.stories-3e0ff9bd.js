import{c as s,C as a,g as c}from"./FormFieldsComponentsForStory-6cfb7405.js";import"./DynamicFormBuilder-1db66a04.js";import"./index-453e6029.js";import"./index-d765e9f1.js";const m={...s,title:"Field tags/Checkbox",component:a,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["checkbox"]},type:{control:"inline-radio",options:["multiple"]}},args:{tag:"checkbox",defaultValue:[]},tags:["autodocs"]},o={args:{...c("multiple","checkbox"),options:["Check 1","Check 2","Check 3"]}};var e,t,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    ...getSimpleStoryArgs<TC>('multiple', "checkbox"),
    options: ["Check 1", "Check 2", "Check 3"]
  }
}`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const g=["Multiple"];export{o as Multiple,g as __namedExportsOrder,m as default};
