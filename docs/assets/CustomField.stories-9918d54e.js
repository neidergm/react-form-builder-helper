import{j as e}from"./jsx-runtime-1438501e.js";import{c as i}from"./commonConfiguration-93338b90.js";import{a as c}from"./FormFieldsComponentsForStory-1e4d89ac.js";import{r as l}from"./index-f46741a2.js";const g={...i,title:"Field tags/Custom",component:c,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["custom"]}},args:{tag:"custom"},tags:["autodocs"]},u=l.forwardRef(({invalid:a,...t},m)=>(console.log(t),e.jsxs("div",{className:a?"is-invalid":"",children:[e.jsx("h3",{className:"text-info",children:"My custom component"}),e.jsx("input",{...t,ref:m})]}))),o={args:{label:"A custom field component",wrapperClassName:"true",name:"customField",validations:{required:!0},type:"MyCustomComponentName",Element:u}};var s,r,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "A custom field component",
    wrapperClassName: "true",
    name: "customField",
    validations: {
      required: true
    },
    type: "MyCustomComponentName",
    Element: CustomComponentField
  }
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const x=["CustomOrExternal"];export{o as CustomOrExternal,x as __namedExportsOrder,g as default};
