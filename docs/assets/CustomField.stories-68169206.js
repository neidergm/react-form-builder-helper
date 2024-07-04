import{j as t}from"./DynamicFormBuilder-1db66a04.js";import{c as i,a as c}from"./FormFieldsComponentsForStory-6cfb7405.js";import{r as u}from"./index-453e6029.js";import"./index-d765e9f1.js";const f={...i,title:"Field tags/Custom",component:c,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["custom"]}},args:{tag:"custom"},tags:["autodocs"]},l=u.forwardRef(({invalid:r,...a},m)=>t.jsxs("div",{className:r?"is-invalid":"",children:[t.jsx("h3",{className:"text-info",children:"My custom component"}),t.jsx("input",{...a,ref:m})]})),o={args:{label:"A custom field component",name:"customField",validations:{required:!0},type:"MyCustomComponentName",Element:l}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    label: "A custom field component",
    name: "customField",
    validations: {
      required: true
    },
    type: "MyCustomComponentName",
    Element: CustomComponentField
  }
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const g=["CustomOrExternal"];export{o as CustomOrExternal,g as __namedExportsOrder,f as default};
