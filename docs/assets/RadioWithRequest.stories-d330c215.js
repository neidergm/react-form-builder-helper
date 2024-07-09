import{c as a}from"./commonConfiguration-93338b90.js";import{d as i}from"./FormFieldsComponentsForStory-15382973.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";const l={...a,title:"Advanced/With Request",component:i,parameters:{controls:{sort:"requiredFirst"}}},e={args:{label:"Select component",tag:"input",name:"selectFieldWithRequest",type:"radio",options:null,validations:{required:!0},doRequest(){return new Promise(r=>setTimeout(()=>r({options:["Colombia","Argentina","Chile","Ecuador","Mexico"]}),3e3))},request:{url:"https://example.api/countries",method:"GET",params:{}}}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Select component",
    tag: "input",
    name: "selectFieldWithRequest",
    type: "radio",
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const d=["Radio"];export{e as Radio,d as __namedExportsOrder,l as default};
