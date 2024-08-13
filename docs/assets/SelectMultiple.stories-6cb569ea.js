import{c as l,S as r}from"./FormFieldsComponentsForStory-774496c2.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";const s={...l,title:"Field tags/Select",component:r,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["select"]},type:{control:"inline-radio",options:["multiple"]},defaultValue:{control:"object"}},args:{tag:"select",defaultValue:["Option1"]},tags:["autodocs"]},e={args:{label:"Select component",name:"selectMultipleField",type:"multiple",placeholder:"Pick one or more...",options:["Option1","Option2",{label:"Option3",value:"Option3"}],validations:{required:!0}}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const c=["Multiple"];export{e as Multiple,c as __namedExportsOrder,s as default};
