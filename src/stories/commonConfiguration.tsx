const commonConfiguration = {
    // render: (fields: any, formProps: I_JsonObject = {}) => {
    //     return <Form
    //         {...formProps}
    //         fields={Array.isArray(fields) ? fields : [fields]}
    //         onSubmit={(data) => {
    //             console.log(data)
    //         }}
    //     />
    // }
}

export function getSimpleStoryArgs<T = string>(type: T, label = "component") {
    return {
        type,
        name: `${type}Field`,
        validations: {
            required: true
        },
        label: `A ${type} ${label}`
    }
}

export default commonConfiguration