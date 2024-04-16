import MyOwnDynamicFormMaker from "../MyOwnFormMaker"

const commonConfiguration = {
    render: (props: any) => {
        return <MyOwnDynamicFormMaker
            fields={[props]}
            onSubmit={(data) => {
                console.log(data)
            }}
        />
    }
}

export default commonConfiguration