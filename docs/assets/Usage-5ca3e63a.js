import{j as e}from"./jsx-runtime-1438501e.js";import{u as i}from"./index-af749de1.js";import{M as s}from"./chunk-HLWAVYOI-229bb48e.js";import"./index-f46741a2.js";import"./iframe-4a951f73.js";import"../sb-preview/runtime.js";import"./react-18-f103fcb4.js";import"./index-1b441bc2.js";import"./index-e4259053.js";import"./index-356e4a49.js";function d(r){const n={a:"a",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Usage"}),`
`,e.jsx(n.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage-with-field",children:"With Field"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage-with-dynamicformbuilder",children:"With DynamicFormBuilder"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.h3,{id:"usage-with-field",children:["Usage with ",e.jsx(n.code,{children:"Field"})]}),`
`,e.jsxs(n.p,{children:["You have to import ",e.jsx(n.code,{children:"FieldPrinter"})," component and use an array of field configurations to map them. Each field configuration is an object that defines the properties of the field, such as its tag, type, label, and validation rules."]}),`
`,e.jsx(n.p,{children:"Here's an example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useForm } from 'react-hook-form'
import Field from 'react-form-builder-helper';

const fields = [
  {
    name: 'username',
    tag: 'input',
    label: 'Username',
    type: 'text',
    validations: {
      required: true,
      minLength: 3,
    }
  },
  {
    name: 'email',
    tag: 'input',
    label: 'Email',
    type: 'email',
    validations: {
      required: true,
    }
  }
];

const MyForm = () => {
  const form = useForm();

  const { register, control, handleSubmit, formState: { errors } } = form;
    
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <Field
          key={index}
          field={field}
          form={form}
          error={errors[field.name]}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
`})}),`
`,e.jsxs(n.h3,{id:"usage-with-dynamicformbuilder",children:["Usage with ",e.jsx(n.code,{children:"DynamicFormBuilder"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"DynamicFormBuilder"})," component is an easy way to generate the entire form only passing some props. It takes a JSON object with the form fields and renders a dynamic form."]}),`
`,e.jsx(n.p,{children:"Here's an example of how to use:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DynamicFormBuilder } from 'react-form-builder-helper';

const formFields = [
    {
        label: "Name",
        name: "text",
        tag: "input",
        type: "text",
        placeholder: "Write name",
        validations: {
            required: true
        }
    },
    {
        label: "Type",
        name: "select",
        tag: "select",
        type: "simple",
        options: ["opcion1", "opcion2", "opcion3"],
        validations: {
            required: true
        }
    },
];

const MyForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (<div>
    <DynamicFormBuilder
      id="my-form"
      fields={formFields}
      onSubmit={onSubmit}
      onInvalidSubmit={(errors) => console.log(errors)}
    />
    
    <button form="id-form">Submit all</button>
  </div>);
};
`})}),`
`,e.jsxs(n.h3,{id:"dynamicformbuilder-props",children:[e.jsx(n.code,{children:"DynamicFormBuilder"})," Props"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"id"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"Form ID to use it in submit button"}),e.jsx(n.td,{children:"Required"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"fields"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"array"})}),e.jsx(n.td,{children:"Form fields array"}),e.jsx(n.td,{children:"Required"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"defaultValues"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object"})}),e.jsx(n.td,{children:"Form default values"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSubmit"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"function"})}),e.jsx(n.td,{children:"Submit function"}),e.jsx(n.td,{children:"Required"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onInvalidSubmit"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"function"})}),e.jsx(n.td,{children:"Callback when form fields has errors"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"fieldWrapper"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object"})}),e.jsx(n.td,{children:"Component to wrap every one form field"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"fieldComponents"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object"})}),e.jsx(n.td,{children:"Custom form field component type"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"saveTemporalData"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"function"})}),e.jsx(n.td,{children:"Callback for storage data before component unmounth"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"useFormProps"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"object"})}),e.jsxs(n.td,{children:["Extra props to ",e.jsx(n.code,{children:"useForm"})," hook"]}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"className"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["Classes for main form container. ",e.jsx("br",{})," ",e.jsx(n.code,{children:'Default: "row row-gap-3"'})]}),e.jsx(n.td,{})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"fieldWrapper"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"component"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ComponentType"})}),e.jsx(n.td,{children:"Wrapper component"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"props"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ className?: string } & I_JsonObject"})}),e.jsx(n.td,{children:"Props for wrapper component"}),e.jsx(n.td,{})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"fieldComponents"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ComponentType"})}),e.jsx(n.td,{children:"Specific component for labels of form fields"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"component"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ComponentType"})}),e.jsx(n.td,{children:"Specific component for any form field"}),e.jsx(n.td,{})]})]})]})]})}function u(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{u as default};
