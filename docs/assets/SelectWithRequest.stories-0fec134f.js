import{c as s}from"./commonConfiguration-93338b90.js";import{d as a}from"./FormFieldsComponentsForStory-1e4d89ac.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";const p={...s,title:"With Request/Select",component:a,parameters:{controls:{sort:"requiredFirst"}},tags:["autodocs"]},e={args:{label:"Select component",tag:"select",name:"selectFieldWithRequest",type:"simple",placeholder:"Pick one...",options:null,validations:{required:!0},doRequest(){return new Promise(r=>setTimeout(()=>r({options:["Colombia","Argentina","Chile","Ecuador","Mexico"]}),3e3))},request:{url:"https://example.api/countries",method:"GET",params:{}}}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const u=["Request"];export{e as Request,u as __namedExportsOrder,p as default};
