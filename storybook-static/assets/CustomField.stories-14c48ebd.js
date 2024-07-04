import{j as t}from"./jsx-runtime-6278a575.js";import{c as i,a as c}from"./FormFieldsComponentsForStory-ca584217.js";import{r as u}from"./index-453e6029.js";import"./index-d765e9f1.js";import"./DynamicFormBuilder-4eabcda7.js";const g={...i,title:"Field tags/Custom",component:c,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["custom"]}},args:{tag:"custom"},tags:["autodocs"]},l=u.forwardRef(({invalid:n,...a},m)=>t.jsxs("div",{className:n?"is-invalid":"",children:[t.jsx("h3",{className:"text-info",children:"My custom component"}),t.jsx("input",{...a,ref:m})]})),o={args:{label:"A custom field component",name:"customField",validations:{required:!0},type:"MyCustomComponentName",Element:l}};var e,s,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    label: "A custom field component",
    name: "customField",
    validations: {
      required: true
    },
    type: "MyCustomComponentName",
    Element: CustomComponentField
  }
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const E=["CustomOrExternal"];export{o as CustomOrExternal,E as __namedExportsOrder,g as default};
