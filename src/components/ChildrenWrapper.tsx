import { ComponentType, forwardRef } from 'react'
import { Control, useWatch } from 'react-hook-form'

type Props = {
    ChildComponent: ComponentType<any>,
    control: Control,
    dependsOn: string,
} & { [x: string]: any }

const ChildrenWrapper = forwardRef(
    ({ ChildComponent, control, ...props }: Props, ref) => {
        const parentValue = useWatch({ name: props.dependsOn, control })

        return <ChildComponent {...props} parentValue={parentValue} ref={ref} />
    }
)

export default ChildrenWrapper;
