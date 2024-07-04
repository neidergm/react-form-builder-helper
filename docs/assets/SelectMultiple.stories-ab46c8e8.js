import{c as l}from"./commonConfiguration-93338b90.js";import{S as r}from"./FormFieldsComponentsForStory-ce39eec8.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";import"./index-415bee12.js";const m={...l,title:"Field tags/Select",component:r,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["select"]},type:{control:"inline-radio",options:["multiple"]},defaultValue:{control:"object"}},args:{tag:"select",defaultValue:[]},tags:["autodocs"]},e={args:{label:"Select component",name:"selectMultipleField",type:"multiple",placeholder:"Pick one or more...",options:["Option1","Option2",{label:"Option3",value:"Option3"}],validations:{required:!0}}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Select component",
    name: "selectMultipleField",
    type: "multiple",
    placeholder: "Pick one or more...",
    options: ["Option1", "Option2", {
      "label": "Option3",
      "value": "Option3"
    }],
    validations: {
      required: true
    }
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const u=["Multiple"];export{e as Multiple,u as __namedExportsOrder,m as default};
