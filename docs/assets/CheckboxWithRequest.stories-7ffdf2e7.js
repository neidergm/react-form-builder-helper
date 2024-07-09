import{c as a}from"./commonConfiguration-93338b90.js";import{a as s}from"./FormFieldsComponentsForStory-15382973.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";const p={...a,title:"Advanced/With Request",component:s,parameters:{controls:{sort:"requiredFirst"}}},e={args:{label:"Checkbox component",tag:"checkbox",name:"checkFieldWithRequest",type:"multiple",options:[],validations:{required:!0},defaultValue:[],doRequest(){return new Promise(r=>setTimeout(()=>r({options:["Colombia","Argentina","Chile","Ecuador","Mexico"]}),3e3))},request:{url:"https://example.api/countries",method:"GET",params:{}}}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Checkbox component",
    tag: "checkbox",
    name: "checkFieldWithRequest",
    type: "multiple",
    options: [],
    validations: {
      required: true
    },
    defaultValue: [],
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
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const l=["Checkbox"];export{e as Checkbox,l as __namedExportsOrder,p as default};
