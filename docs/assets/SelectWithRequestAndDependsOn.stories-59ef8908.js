import{j as e}from"./jsx-runtime-1438501e.js";import{c,o as u}from"./FormFieldsComponentsForStory-774496c2.js";import"./index-f46741a2.js";const g={...c,title:"Advanced/With Request",component:u,parameters:{controls:{sort:"requiredFirst"}}},t={args:{label:"Child field",tag:"select",name:"child",type:"simple",placeholder:"Pick one...",options:[],doRequest(r){return console.log(`Requesting ${r}`),new Promise(l=>setTimeout(()=>l({options:["Colombia","Argentina","Chile","Ecuador","Mexico"]}),2e3))},request:{url:"https://example.api/countries/{parent}",method:"GET"},validations:{required:!0},dependsOn:"parent"},decorators:[r=>e.jsxs("div",{children:[e.jsx("p",{children:"Default values have to be indicated in useForm params"}),e.jsx("p",{children:"Otherwhise, the child component dont get data"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(r,{})]})]},n={args:{...t.args,request:{url:"https://example.api/countries/{parent}/{extra}",method:"GET",otherValuesToMap:{extra:"3"}}},decorators:[r=>e.jsxs("div",{children:[e.jsx("p",{children:"You can pass extra data to map the values of the params request"}),e.jsx("p",{children:'Use the "otherValuesToMap" property in request object'}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(r,{})]})]};var a,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
  },
  decorators: [Story => <div>\r
            <p>Default values have to be indicated in useForm params</p>\r
            <p>Otherwhise, the child component dont get data</p>\r
            <br />\r
            <br />\r
\r
            <Story />\r
        </div>]
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,p,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...DependsOn.args,
    request: {
      url: "https://example.api/countries/{parent}/{extra}",
      method: "GET",
      otherValuesToMap: {
        "extra": "3"
      }
    }
  },
  decorators: [Story => <div>\r
            <p>You can pass extra data to map the values of the params request</p>\r
            <p>Use the "otherValuesToMap" property in request object</p>\r
            <br />\r
            <br />\r
\r
            <Story />\r
        </div>]
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const q=["DependsOn","WithExtraDataForParams"];export{t as DependsOn,n as WithExtraDataForParams,q as __namedExportsOrder,g as default};
