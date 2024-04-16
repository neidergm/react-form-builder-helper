import { ComponentType, LabelHTMLAttributes } from 'react'

type Props = {
    check?: boolean,
    Element?: string | ComponentType<LabelHTMLAttributes<HTMLLabelElement>>,
} & LabelHTMLAttributes<HTMLLabelElement>

const Label = ({ Element = "label", ...props }: Props) => {
    if(typeof Element === "string" && props.check !== undefined) delete props.check;
    
    return (<Element {...props} />)
}

export default Label