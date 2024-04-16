import MyOwnDynamicFormMaker from "../MyOwnFormMaker"

const commonConfiguration = {
    render: (props: any) => {
        return <MyOwnDynamicFormMaker
            fields={Array.isArray(props) ? props : [props]}
            onSubmit={(data) => {
                console.log(data)
            }}
        />
    }
}

export default commonConfiguration