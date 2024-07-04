import{j as e}from"./jsx-runtime-6278a575.js";import{c as i,e as a}from"./FormFieldsComponentsForStory-ca584217.js";import"./index-453e6029.js";import"./index-d765e9f1.js";import"./DynamicFormBuilder-4eabcda7.js";const u={...i,title:"With Request/Select",decorators:[n=>e.jsxs("div",{children:[e.jsx("p",{children:"Default values have to be indicated in useForm params"}),e.jsx("p",{children:"Otherwhise, the child component dont get data"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(n,{})]})],component:a,parameters:{controls:{sort:"requiredFirst"}}},t={args:{label:"Child field",tag:"select",name:"child",type:"simple",placeholder:"Pick one...",options:[],doRequest(){return new Promise(n=>setTimeout(()=>n({options:["Colombia","Argentina","Chile","Ecuador","Mexico"]}),2e3))},request:{url:"https://example.api/countries",method:"GET"},validations:{required:!0},dependsOn:"parent",defaultValue:"Colombia"}};var o,r,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Child field",
    tag: "select",
    name: "child",
    type: "simple",
    placeholder: "Pick one...",
    options: [],
    doRequest() {
      return new Promise(resolve => setTimeout(() => resolve({
        options: ["Colombia", "Argentina", "Chile", "Ecuador", "Mexico"]
      }), 2000));
    },
    request: {
      url: "https://example.api/countries",
      method: "GET"
    },
    validations: {
      required: true
    },
    dependsOn: "parent",
    defaultValue: "Colombia"
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const h=["DependsOn"];export{t as DependsOn,h as __namedExportsOrder,u as default};
