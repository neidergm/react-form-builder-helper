import{j as e}from"./jsx-runtime-1438501e.js";import{u as o}from"./index-af749de1.js";import{M as r}from"./chunk-HLWAVYOI-0a4c83eb.js";import"./index-f46741a2.js";import"./iframe-b197569c.js";import"../sb-preview/runtime.js";import"./react-18-f103fcb4.js";import"./index-1b441bc2.js";import"./index-e4259053.js";import"./index-356e4a49.js";function t(i){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utils"}),`
`,e.jsx(n.h1,{id:"utilities",children:"Utilities"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#getfielddefaultvalues",children:"getFieldDefaultValues"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#normalizefieldconfig",children:"normalizeFieldConfig"})}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"getfielddefaultvalues",children:e.jsx(n.strong,{children:"getFieldDefaultValues"})}),`
`,e.jsx(n.p,{children:"Extract default values from the form fields, it return a JSON object used to pass to useForm hook."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const fields = [{...}, ...];
const defaultValues = getFieldDefaultValues(fields);

// Result: defaultValues = { "field1": "value", ... }
`})}),`
`,e.jsx(n.h3,{id:"normalizefieldconfig",children:e.jsx(n.strong,{children:"normalizeFieldConfig"})}),`
`,e.jsx(n.p,{children:"Normalizes an array of field configurations by renaming properties according to a provided relation mapping."}),`
`,e.jsx(n.p,{children:`This function takes an array of field configurations and a relation mapping as input, and returns a new array of normalized field configurations.
The normalization process involves renaming properties in each field configuration according to the mapping defined in the relation object. This can be useful when working with data that has inconsistent or legacy property names, and you need to standardize them to a common format to be used in form building.`}),`
`,e.jsx(n.p,{children:"For example, if you have:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const fields = [{"inputname": "field1", "type": "text", "rules": {...}, ...}, ...]
`})}),`
`,e.jsx(n.p,{children:"Then, you have to normalize fields configuration in a valid format to be used in form building:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const relation = {"input": "inputname", "validations": "rules"};
const normalizedFields = normalizeFieldConfig(fields, relation);

// Result: normalizedFields = [ {"name": "field1", "type": "text", "validations": {...}, ...}, ... ]
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"NOTE: All properties are optional, it will depend on which ones are needed to standardize the field configuration."})})]})}function g(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default};
