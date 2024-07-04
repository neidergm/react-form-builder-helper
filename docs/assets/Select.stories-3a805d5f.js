import{c as r,S as a}from"./FormFieldsComponentsForStory-6cfb7405.js";import"./DynamicFormBuilder-1db66a04.js";import"./index-453e6029.js";import"./index-d765e9f1.js";const c={...r,title:"Field tags/Select",component:a,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["select"]},type:{control:"inline-radio",options:["simple"]}},args:{tag:"select"},tags:["autodocs"]},e={args:{label:"Select component",name:"selectField",type:"simple",placeholder:"Pick one...",options:["Option1","Option2",{label:"Option3",value:"op3"}],validations:{required:!0}}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const m=["Simple"];export{e as Simple,m as __namedExportsOrder,c as default};
