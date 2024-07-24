import{f as i}from"./FormFieldsComponentsForStory-79796094.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";const m={title:"Form/Dynamic Form",component:i,parameters:{},tags:["autodocs"]},e={args:{fields:[{label:"Name",name:"text",tag:"input",type:"text",placeholder:"Write name",validations:{minLength:3,required:!0}},{label:"Age",name:"number",tag:"input",type:"number",validations:{min:3,required:!0}},{label:"Type",name:"select",tag:"select",type:"simple",options:["opcion1","opcion2","opcion3"],validations:{required:!0}},{label:"Check",name:"checkbox",tag:"checkbox",type:"simple",validations:{required:!0}},{label:"Radio",name:"radio",tag:"input",type:"radio",options:["opcion1","opcion2","opcion3"],validations:{required:!0}}],onSubmit:n=>{console.log(n)},onInvalidSubmit:n=>{console.log(n)},defaultValues:{text:"Neider"}}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    fields: [{
      label: "Name",
      name: "text",
      tag: "input",
      type: "text",
      placeholder: "Write name",
      validations: {
        minLength: 3,
        required: true
      }
    }, {
      label: "Age",
      name: "number",
      tag: "input",
      type: "number",
      validations: {
        min: 3,
        required: true
      }
    }, {
      label: "Type",
      name: "select",
      tag: "select",
      type: "simple",
      options: ["opcion1", "opcion2", "opcion3"],
      validations: {
        required: true
      }
    }, {
      label: "Check",
      name: "checkbox",
      tag: "checkbox",
      type: "simple",
      validations: {
        required: true
      }
    }, {
      label: "Radio",
      name: "radio",
      tag: "input",
      type: "radio",
      options: ["opcion1", "opcion2", "opcion3"],
      validations: {
        required: true
      }
    }],
    onSubmit: d => {
      console.log(d);
    },
    onInvalidSubmit: d => {
      console.log(d);
    },
    defaultValues: {
      "text": "Neider"
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const s=["Simple"];export{e as Simple,s as __namedExportsOrder,m as default};
