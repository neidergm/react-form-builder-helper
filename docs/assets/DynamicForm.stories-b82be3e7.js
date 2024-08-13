import{f as m}from"./FormFieldsComponentsForStory-d8c6ee35.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";const h={title:"Form/Dynamic Form",component:m,parameters:{},tags:["autodocs"]},n={args:{fields:[{label:"Name",name:"text",tag:"input",type:"text",placeholder:"Write name",validations:{minLength:3,required:!0}},{label:"Age",name:"number",tag:"input",type:"number",validations:{min:3,required:!0}},{label:"Type",name:"select",tag:"select",type:"simple",options:["opcion1","opcion2","opcion3"],validations:{required:!0}},{label:"Check",name:"checkbox",tag:"checkbox",type:"simple",validations:{required:!0}},{label:"Radio",name:"radio",tag:"input",type:"radio",options:["opcion1","opcion2","opcion3"],validations:{required:!0}}],onSubmit:e=>{console.log(e)},onInvalidSubmit:e=>{console.log(e)},defaultValues:{text:"Neider"}}},t={args:{fields:[{label:"Name",name:"text",tag:"input",type:"text",placeholder:"Write name",validations:{minLength:3,required:!0}},{label:"Type",name:"select",tag:"select",type:"simple",options:["opcion1","opcion2","opcion3"],validations:{required:!0}}],onSubmit:e=>{console.log(e)},onInvalidSubmit:e=>{console.log(e)},disabled:!0}},o={args:{fields:[{label:"Name",name:"text",tag:"input",type:"text",placeholder:"Write name",validations:{minLength:3,required:!0}},{label:"Type",name:"select",tag:"select",type:"simple",options:["opcion1","opcion2","opcion3"],validations:{required:!0}},{label:"Select with request",name:"selectrequest",tag:"select",type:"simple",options:null,validations:{required:!0},dependsOn:"text",doRequest(){return new Promise(e=>{console.log("Fetching"),setTimeout(()=>e({options:["Colombia","Argentina","Chile","Ecuador","Mexico"]}),100)})},request:{url:"https://example.api/countries",method:"GET",params:{}}}],onSubmit:e=>{console.log(e)},onInvalidSubmit:e=>{console.log(e)},disableOnLoading:!0,defaultValues:()=>new Promise(e=>{setTimeout(()=>{e({select:"opcion1",text:"Developer",selectrequest:"Colombia"})},100)})}};var i,a,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var r,s,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var u,d,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    }, {
      label: "Select with request",
      name: "selectrequest",
      tag: "select",
      type: "simple",
      options: null,
      validations: {
        required: true
      },
      dependsOn: "text",
      doRequest() {
        return new Promise(resolve => {
          console.log("Fetching");
          setTimeout(() => resolve({
            options: ["Colombia", "Argentina", "Chile", "Ecuador", "Mexico"]
          }), 100);
        });
      },
      // defaultValue: "Colombia",
      request: {
        url: "https://example.api/countries",
        method: "GET",
        params: {}
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
            "text": "Developer",
            selectrequest: "Colombia"
          });
        }, 100);
      });
    }
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const q=["Simple","Disabled","DisabledOnFetchDefaultValues"];export{t as Disabled,o as DisabledOnFetchDefaultValues,n as Simple,q as __namedExportsOrder,h as default};
