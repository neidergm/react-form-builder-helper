import{j as e}from"./jsx-runtime-1438501e.js";import{c as a,o as l}from"./FormFieldsComponentsForStory-616eeda7.js";import"./index-f46741a2.js";const m={...a,title:"Advanced/With Request",decorators:[t=>e.jsxs("div",{children:[e.jsx("p",{children:"Default values have to be indicated in useForm params"}),e.jsx("p",{children:"Otherwhise, the child component dont get data"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(t,{})]})],component:l,parameters:{controls:{sort:"requiredFirst"}}},n={args:{label:"Child field",tag:"select",name:"child",type:"simple",placeholder:"Pick one...",options:[],doRequest(t){return console.log(`Requesting ${t}`),new Promise(i=>setTimeout(()=>i({options:["Colombia","Argentina","Chile","Ecuador","Mexico"]}),2e3))},request:{url:"https://example.api/countries/{parent}",method:"GET"},validations:{required:!0},dependsOn:"parent"}};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Child field",
    tag: "select",
    name: "child",
    type: "simple",
    placeholder: "Pick one...",
    options: [],
    doRequest(url) {
      console.log(\`Requesting \${url}\`);
      return new Promise(resolve => setTimeout(() => resolve({
        options: ["Colombia", "Argentina", "Chile", "Ecuador", "Mexico"]
      }), 2000));
    },
    request: {
      url: "https://example.api/countries/{parent}",
      method: "GET"
    },
    validations: {
      required: true
    },
    dependsOn: "parent"
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const u=["DependsOn"];export{n as DependsOn,u as __namedExportsOrder,m as default};
