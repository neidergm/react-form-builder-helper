import{c as n,L as s,g as o}from"./FormFieldsComponentsForStory-eb023326.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";const m={...n,title:"Field tags/List",component:s,parameters:{controls:{sort:"requiredFirst"}},argTypes:{tag:{control:"inline-radio",options:["list"]}},args:{tag:"list"},tags:["autodocs"]},e={args:{...o("group"),validations:{max:3,required:!0},fields:[{wrapperClassName:"col-6",tag:"input",type:"text",name:"name",label:"Name:",validations:{required:!0}},{wrapperClassName:"col-6",tag:"input",type:"number",name:"age",label:"Age:",validations:{required:!0}}]}};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...getSimpleStoryArgs("group"),
    validations: {
      max: 3,
      required: true
    },
    fields: [{
      wrapperClassName: "col-6",
      tag: "input",
      type: "text",
      name: "name",
      label: "Name:",
      validations: {
        required: true
      }
    }, {
      wrapperClassName: "col-6",
      tag: "input",
      type: "number",
      name: "age",
      label: "Age:",
      validations: {
        required: true
      }
    }]
  }
  // args: getSimpleStoryArgs<TC>("text"),
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const g=["List"];export{e as List,g as __namedExportsOrder,m as default};
