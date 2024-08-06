import{f as u}from"./FormFieldsComponentsForStory-c0102359.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";const y={title:"Form/Dynamic Form",component:u,parameters:{},tags:["autodocs"]},n={args:{fields:[{label:"Name",name:"text",tag:"input",type:"text",placeholder:"Write name",validations:{minLength:3,required:!0}},{label:"Age",name:"number",tag:"input",type:"number",validations:{min:3,required:!0}},{label:"Type",name:"select",tag:"select",type:"simple",options:["opcion1","opcion2","opcion3"],validations:{required:!0}},{label:"Check",name:"checkbox",tag:"checkbox",type:"simple",validations:{required:!0}},{label:"Radio",name:"radio",tag:"input",type:"radio",options:["opcion1","opcion2","opcion3"],validations:{required:!0}}],onSubmit:e=>{console.log(e)},onInvalidSubmit:e=>{console.log(e)},defaultValues:{text:"Neider"}}},t={args:{fields:[{label:"Name",name:"text",tag:"input",type:"text",placeholder:"Write name",validations:{minLength:3,required:!0}},{label:"Type",name:"select",tag:"select",type:"simple",options:["opcion1","opcion2","opcion3"],validations:{required:!0}}],onSubmit:e=>{console.log(e)},onInvalidSubmit:e=>{console.log(e)},disabled:!0}},o={args:{fields:[{label:"Name",name:"text",tag:"input",type:"text",placeholder:"Write name",validations:{minLength:3,required:!0}},{label:"Type",name:"select",tag:"select",type:"simple",options:["opcion1","opcion2","opcion3"],validations:{required:!0}}],onSubmit:e=>{console.log(e)},onInvalidSubmit:e=>{console.log(e)},disableOnLoading:!0,defaultValues:()=>new Promise(e=>{setTimeout(()=>{e({select:"opcion1",text:"Developer"})},3e3)})}};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    // fieldComponents: {
    //     "select": {
    //         includeFormUtils: true,
    //         component: (props) => {
    //             console.log(props.formUtils)
    //             return <input />
    //         }
    //     }
    // }
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var r,s,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      label: "Type",
      name: "select",
      tag: "select",
      type: "simple",
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
    disabled: true
  }
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      label: "Type",
      name: "select",
      tag: "select",
      type: "simple",
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
    disableOnLoading: true,
    defaultValues: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            "select": "opcion1",
            "text": "Developer"
          });
        }, 3000);
      });
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const x=["Simple","Disabled","DisabledOnFetchDefaultValues"];export{t as Disabled,o as DisabledOnFetchDefaultValues,n as Simple,x as __namedExportsOrder,y as default};
