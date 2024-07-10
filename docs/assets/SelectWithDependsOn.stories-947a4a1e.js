import{j as e}from"./jsx-runtime-1438501e.js";import{c as V,l as C}from"./FormFieldsComponentsForStory-7a6f877a.js";import"./index-f46741a2.js";const P={...V,title:"Advanced/With depends On",component:C,parameters:{controls:{sort:"requiredFirst"}}},n={args:{label:"Child field",tag:"select",name:"child",type:"simple",placeholder:"Pick one...",options:["Option01","Option02","Option03","Option04"],validations:{required:!0},dependsOn:[{name:"parent",show:!0}]},decorators:[r=>e.jsxs("div",{children:[e.jsx("p",{children:"Pick some value to show other field"}),e.jsx(r,{})]})]},a={args:{...n.args,dependsOn:[{name:"parent",show:!0,whenValue:"2"}]},decorators:[r=>e.jsxs("div",{children:[e.jsxs("p",{children:["Pick ",e.jsx("b",{children:"Option2"})," to show other field"]}),e.jsx(r,{})]})]},s={args:{...n.args,dependsOn:[{name:"parent",show:!1,whenValue:"2"}]},decorators:[r=>e.jsxs("div",{children:[e.jsxs("p",{children:["Pick ",e.jsx("b",{children:"Option2"})," to hide other field"]}),e.jsx(r,{})]})]},o={args:{...n.args,dependsOn:[{name:"parent",whenValue:"2",props:{className:"bg-info",wrapperClassName:"bg-warning col-md-12"}}]}},t={args:{...n.args,dependsOn:"parent",dependsOnChange:({parentValue:r})=>r.parent==="2"?{className:"bg-info",wrapperClassName:"bg-warning col-md-12"}:{}}};var p,i,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Child field",
    tag: "select",
    name: "child",
    type: "simple",
    placeholder: "Pick one...",
    options: ["Option01", "Option02", "Option03", "Option04"],
    validations: {
      required: true
    },
    dependsOn: [{
      name: "parent",
      show: true
    }]
  },
  decorators: [Story => <div>\r
            <p>Pick some value to show other field</p>\r
            <Story />\r
        </div>]
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...ShowByAnyValue.args,
    dependsOn: [{
      name: "parent",
      show: true,
      whenValue: "2"
    }]
  },
  decorators: [Story => <div>\r
            <p>Pick <b>Option2</b> to show other field</p>\r
            <Story />\r
        </div>]
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...ShowByAnyValue.args,
    dependsOn: [{
      name: "parent",
      show: false,
      whenValue: "2"
    }]
  },
  decorators: [Story => <div>\r
            <p>Pick <b>Option2</b> to hide other field</p>\r
            <Story />\r
        </div>]
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,O,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...ShowByAnyValue.args,
    dependsOn: [{
      name: "parent",
      whenValue: "2",
      props: {
        className: "bg-info",
        wrapperClassName: "bg-warning col-md-12"
      }
    }]
  }
}`,...(f=(O=o.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var y,S,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...ShowByAnyValue.args,
    dependsOn: "parent",
    dependsOnChange: ({
      parentValue
    }) => {
      if (parentValue["parent"] === "2") {
        return {
          className: "bg-info",
          wrapperClassName: "bg-warning col-md-12"
        };
      }
      return {};
    }
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const k=["ShowByAnyValue","ShowBySpecificValue","HideBySpecificValue","ChangeProps","ChangePropsUsingCallback"];export{o as ChangeProps,t as ChangePropsUsingCallback,s as HideBySpecificValue,n as ShowByAnyValue,a as ShowBySpecificValue,k as __namedExportsOrder,P as default};
