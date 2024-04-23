import MyOwnDynamicFormMaker from "../MyOwnFormMaker"
import { I_JsonObject } from "../interfaces/generic.interfaces"

const commonConfiguration = {
    render: (fields: any, formProps: I_JsonObject = {}) => {
        return <MyOwnDynamicFormMaker
            {...formProps}
            fields={Array.isArray(fields) ? fields : [fields]}
            onSubmit={(data) => {
                console.log(data)
            }}
        />
    }
}

export default commonConfiguration