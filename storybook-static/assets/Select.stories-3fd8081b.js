import{c as r,S as i}from"./FormFieldsComponentsForStory-ca584217.js";import"./jsx-runtime-6278a575.js";import"./index-453e6029.js";import"./index-d765e9f1.js";import"./DynamicFormBuilder-4eabcda7.js";const m={...r,title:"Field tags/Select",component:i,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["select"]},type:{control:"inline-radio",options:["simple"]}},args:{tag:"select"},tags:["autodocs"]},e={args:{label:"Select component",name:"selectField",type:"simple",placeholder:"Pick one...",options:["Option1","Option2",{label:"Option3",value:"op3"}],validations:{required:!0}}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Select component",
    name: "selectField",
    type: "simple",
    placeholder: "Pick one...",
    options: ["Option1", "Option2", {
      "label": "Option3",
      "value": "op3"
    }],
    validations: {
      required: true
    }
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const d=["Simple"];export{e as Simple,d as __namedExportsOrder,m as default};
