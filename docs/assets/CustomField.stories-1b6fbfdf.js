import{j as o}from"./jsx-runtime-1438501e.js";import{c as i,d as c}from"./FormFieldsComponentsForStory-8254131c.js";import{r as l}from"./index-f46741a2.js";const g={...i,title:"Field tags/Custom",component:c,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["custom"]}},args:{tag:"custom"},tags:["autodocs"]},u=l.forwardRef(({invalid:a,...t},m)=>(console.log(t),o.jsxs("div",{className:a?"is-invalid":"",children:[o.jsx("h3",{className:"text-info",children:"My custom component"}),o.jsx("input",{...t,ref:m})]}))),e={args:{label:"A custom field component",wrapperClassName:"true",name:"customField",validations:{required:!0},type:"MyCustomComponentName",Element:u}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const x=["CustomOrExternal"];export{e as CustomOrExternal,x as __namedExportsOrder,g as default};
