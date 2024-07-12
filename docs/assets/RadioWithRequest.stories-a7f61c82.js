import{c as a,k as s}from"./FormFieldsComponentsForStory-eb023326.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";const l={...a,title:"Advanced/With Request",component:s,parameters:{controls:{sort:"requiredFirst"}}},e={args:{label:"Select component",tag:"input",name:"selectFieldWithRequest",type:"radio",options:null,validations:{required:!0},doRequest(){return new Promise(r=>setTimeout(()=>r({options:["Colombia","Argentina","Chile","Ecuador","Mexico"]}),3e3))},request:{url:"https://example.api/countries",method:"GET",params:{}}}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["Radio"];export{e as Radio,p as __namedExportsOrder,l as default};
