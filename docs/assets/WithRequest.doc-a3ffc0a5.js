import{j as e}from"./jsx-runtime-1438501e.js";import{u as n}from"./index-af749de1.js";import{M as d}from"./chunk-HLWAVYOI-5b4df9d0.js";import"./index-f46741a2.js";import"./iframe-56617ae2.js";import"../sb-preview/runtime.js";import"./react-18-f103fcb4.js";import"./index-1b441bc2.js";import"./index-e4259053.js";import"./index-356e4a49.js";function s(r){const t={a:"a",code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Advanced/With Request/Usage"}),`
`,e.jsx(t.h1,{id:"with-request-usage",children:"With request usage"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.p,{children:"If you need that some field do http request to an API, you need to set the next properties:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`interface WithRequestConfig {
  request: {
    method: "GET" | "POST" | "post" | "get",
    url: string,
    params?: { [key: string]: number | boolean | string } | string,
    mapOptions?: { label: string, value: string }
  },
  doRequest: (url: string, method: RequestMethod, params?: RequestParams) => Promise<{FieldProps || OptionsArray}>
}
`})}),`
`,e.jsx(t.h3,{id:"request-object",children:"request (Object)"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Property"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Usage"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"method"})}),e.jsx(t.td,{children:"String"}),e.jsx(t.td,{children:"Specifies the HTTP method for the request"}),e.jsxs(t.td,{children:['- Allowed values: "GET", "POST", "get", or "post"',e.jsx("br",{}),"- Determines how the request will be sent to the server",e.jsx("br",{}),'- Use "GET" to retrieve data and "POST" to send data']})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"url"})}),e.jsx(t.td,{children:"String"}),e.jsx(t.td,{children:"Defines the URL of the API endpoint"}),e.jsxs(t.td,{children:['- Example: "',e.jsx(t.a,{href:"https://api.example.com/data",rel:"nofollow",children:"https://api.example.com/data"}),'"',e.jsx("br",{}),"- This is the address to which the request will be sent"]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"params"})}),e.jsx(t.td,{children:"Object or String (optional)"}),e.jsx(t.td,{children:"Allows sending additional parameters with the request"}),e.jsxs(t.td,{children:["- Object: ",e.jsx(t.code,{children:'{ "fieldName1": "", "fieldName2": "" }'}),e.jsx("br",{}),"- String: ",e.jsx(t.code,{children:'"{fieldName1}/{fieldName2}"'})," or ",e.jsx(t.code,{children:'"?{fieldName1}&{fieldName2}"'}),e.jsx("br",{}),"- Parameters are replaced by form field values",e.jsx("br",{}),"- Can be sent from URL: ",e.jsx(t.code,{children:"https://example.com/api/{fieldName1}?exampleParam={fieldName2}"})]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"mapOptions"})}),e.jsx(t.td,{children:"Object (optional)"}),e.jsx(t.td,{children:"Defines how to map the API response to field options"}),e.jsxs(t.td,{children:["- Properties:",e.jsx("br",{}),"  ",e.jsx(t.code,{children:"label"})," (String): Name of visible label property",e.jsx("br",{}),"  ",e.jsx(t.code,{children:"value"})," (String): Name of internal value property",e.jsx("br",{}),"- Essential for select, checkbox, or radio fields"]})]})]})]}),`
`,e.jsx(t.h3,{id:"dorequest-function",children:"doRequest (Function)"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Aspect"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Details"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Parameters"}),e.jsxs(t.td,{children:["- ",e.jsx(t.code,{children:"url"})," (String)",e.jsx("br",{}),"- ",e.jsx(t.code,{children:"method"})," (String)",e.jsx("br",{}),"- ",e.jsx(t.code,{children:"params"})," (Object or String, optional)"]}),e.jsxs(t.td,{children:["- ",e.jsx(t.code,{children:"url"}),": Final URL of the request",e.jsx("br",{}),"- ",e.jsx(t.code,{children:"method"}),": HTTP method to use",e.jsx("br",{}),"- ",e.jsx(t.code,{children:"params"}),": Request parameters"]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Return"}),e.jsx(t.td,{children:"Promise"}),e.jsxs(t.td,{children:["Promise resolving to an object with:",e.jsx("br",{}),"  ",e.jsx(t.code,{children:"options"})," (Array): List of field options",e.jsx("br",{}),"  Other properties to update field state",e.jsx("br",{})," Or just an Array of options"]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Usage"}),e.jsx(t.td,{children:"Implements HTTP request logic, error handling, and response processing"}),e.jsxs(t.td,{children:["- Handles the entire request-response cycle",e.jsx("br",{}),"- Executes the API request with given parameters",e.jsx("br",{}),"- Provides data to update the field"]})]})]})]}),`
`,e.jsx(t.h3,{id:"example",children:"Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`
{
    ...
    "request": {
        "url": "https://example/citiesbycountry/{id_country}",
        "method": "GET"
    },
    "doRequest": (url, method, data)=> {
        return fetch(url).then(res => res.json())
            .then(r => {
                return { options: r.data.map((i: any) => ({ label: i.name, value: i.id })) };
            });
    }
}
`})}),`
`,e.jsx(t.p,{children:"or"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`{
    ...
    "request": {
        "url": "https://example/citiesbycountry/{id_country}",
        "method": "GET",
        "mapOptions": {"label": "name", "value": "id"}
    },
    "doRequest": (url, method, data)=> {
        return fetch(url).then(res => res.json()).then(r => r.data)
    }
}
`})}),`
`,e.jsx(t.p,{children:"or"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`{
    ...
    "request": {
        "url": "https://example/citiesbycountry",
        "method": "GET",
        "mapOptions": {"label": "name", "value": "id"}
        "params": "/{id_country}"
    },
    "doRequest": (url, method, data)=> {
        return fetch(url + data).then(res => res.json()).then(r => r.data)
    }
}
`})})]})}function u(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{u as default};
