import{c as s,d as a}from"./FormFieldsComponentsForStory-ca584217.js";import"./jsx-runtime-6278a575.js";import"./index-453e6029.js";import"./index-d765e9f1.js";import"./DynamicFormBuilder-4eabcda7.js";const u={...s,title:"With Request/Select",component:a,parameters:{controls:{sort:"requiredFirst"}},tags:["autodocs"]},e={args:{label:"Select component",tag:"select",name:"selectFieldWithRequest",type:"simple",placeholder:"Pick one...",options:null,validations:{required:!0},doRequest(){return new Promise(r=>setTimeout(()=>r({options:["Colombia","Argentina","Chile","Ecuador","Mexico"]}),3e3))},request:{url:"https://example.api/countries",method:"GET",params:{}}}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Select component",
    tag: "select",
    name: "selectFieldWithRequest",
    type: "simple",
    placeholder: "Pick one...",
    options: null,
    validations: {
      required: true
    },
    doRequest() {
      return new Promise(resolve => setTimeout(() => resolve({
        options: ["Colombia", "Argentina", "Chile", "Ecuador", "Mexico"]
      }), 3000));
    },
    request: {
      url: "https://example.api/countries",
      method: "GET",
      params: {}
    }
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const d=["Request"];export{e as Request,d as __namedExportsOrder,u as default};
