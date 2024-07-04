import{c as f,b as C}from"./FormFieldsComponentsForStory-7c2d3a3d.js";import"./jsx-runtime-1438501e.js";import"./index-f46741a2.js";import"./index-415bee12.js";import"./DynamicFormBuilder-34320418.js";const k={...f,title:"With depends On/Select",component:C,parameters:{controls:{sort:"requiredFirst"}},tags:["autodocs"]},e={args:{label:"Child field",tag:"select",name:"child",type:"simple",placeholder:"Pick one...",options:["Option01","Option02","Option03","Option04"],validations:{required:!0},dependsOn:[{name:"parent",show:!0}]}},n={args:{...e.args,dependsOn:[{name:"parent",show:!0,whenValue:"2"}]}},a={args:{...e.args,dependsOn:[{name:"parent",show:!1,whenValue:"2"}]}},r={args:{...e.args,dependsOn:[{name:"parent",whenValue:"2",props:{className:"bg-info",wrapperClassName:"bg-warning col-md-12"}}]}},s={args:{...e.args,dependsOn:"parent",dependsOnChange:({parentValue:V})=>V.parent==="2"?{className:"bg-info",wrapperClassName:"bg-warning col-md-12"}:{}}};var o,p,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  }
}`,...(t=(p=e.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var c,i,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...ShowByAnyValue.args,
    dependsOn: [{
      name: "parent",
      show: true,
      whenValue: "2"
    }]
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...ShowByAnyValue.args,
    dependsOn: [{
      name: "parent",
      show: false,
      whenValue: "2"
    }]
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var O,S,y;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const q=["ShowByAnyValue","ShowBySpecificValue","HideBySpecificValue","ChangeProps","ChangePropsUsingCallback"];export{r as ChangeProps,s as ChangePropsUsingCallback,a as HideBySpecificValue,e as ShowByAnyValue,n as ShowBySpecificValue,q as __namedExportsOrder,k as default};
