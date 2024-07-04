**React Form Builder Helper**
=============================

**Overview**
------------

React Form Builder Helper is a lightweight package that helps you create dynamic form fields from JSON objects. It uses React Hook Form [React hook form](https://react-hook-form.com/) under the hood to provide real-time validation and a simple API for creating and managing form fields.

* Note: Bootstrap is recomended

**Features**
------------

* **Dynamic form fields**: Create form fields dynamically from JSON objects
* **Real-time validation**: Validate form fields in real-time using React Hook Form's built-in validation features
* **Easy to use**: Simple and intuitive API for creating and managing form fields

**Getting Started**
-------------------

**Installation**

To get started, install the package using npm:
```
npm i --save react-form-builder-helper
```


**Peer Dependencies**

This package requires [React hook form](https://react-hook-form.com/) as a peer dependency. Make sure to install it separately:
```
npm i --save react-hook-form
```

**Documentation**
------------

You can see a usage documentation and interact with every kind of field form: 

[**react-form-builder-helper**](https://neidergm.github.io/react-form-builder-helper) 


**Usage**
------------

You have to import `FieldPrinter` component and use an array of field configurations to map them. Each field configuration is an object that defines the properties of the field, such as its tag, type, label, and validation rules.

Here's an example:
```jsx
import { useForm } from 'react-hook-form'
import FieldPrinter from 'react-form-builder-helper';

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
        <FieldPrinter
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
```

### Usage with `DynamicFormBuilder`

The `DynamicFormBuilder` component is an easy way to generate the entire form only passing some props. It takes a JSON object with the form fields and renders a dynamic form.

Here's an example of how to use `DynamicFormBuilder`:
```jsx
import { DynamicFormBuilder } from 'react-form-builder-helper';

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
```

### Propiedades de `DynamicFormBuilder`

| Propiedad | Tipo | Descripción |  |
| --- | --- | --- | --- | 
| `id` | `string` | Form ID to use it in submit button | Required |
| `fields` | `array` | Form fields array | Required |
| `defaultValues` | `object` | Form default values | |
| `onSubmit` | `function` | Submit function | Required |
| `onInvalidSubmit` | `function` | Callback when form fields has errors |  |
| `fieldWrapper` | `object` | Component to wrap every one form field | |
| `fieldComponents` | `object` | Custom form field component type | |
| `saveTemporalData` | `function` | Callback for storage data before component unmounth |  | |
| `useFormProps` | `object` | Extra props to `useForm` hook | |
| `className` | `string` | Classes for main form container. <br/> `Default: "row"` | |


**fieldWrapper**

| Propiedad | Tipo | Descripción  | |
| --- | --- | --- | --- | 
| `component` | `ComponentType` | Wrapper component |  | 
| `props` | `{ className?: string } & I_JsonObject` | Props for wrapper component |  |

**fieldComponents**

| Propiedad | Tipo | Descripción | |
| --- | --- | --- | --- |
| `label` | `ComponentType` | Specific component for labels of form fields | |
| `component` | `ComponentType` | Specific component for any form field | |






### Usage

Here's a basic example of how to use React Form Builder Helper:
```jsx
import React from 'react';
import { useFormBuilder } from 'react-form-builder-helper';

const formData = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
  },
  {
    type: 'email',
    label: 'Email',
    name: 'email',
  },
  {
    type: 'checkbox',
    label: 'Agree to terms',
    name: 'terms',
  },
];

const MyForm = () => {
  const { register, handleSubmit } = useFormBuilder(formData);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formData.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input {...register(field.name)} type={field.type} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

