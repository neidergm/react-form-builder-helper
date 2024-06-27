import { ComponentType, LabelHTMLAttributes } from 'react'

type Props = {
    Element?: string | ComponentType<LabelHTMLAttributes<HTMLLabelElement>>,
    isRequired?: boolean,
    children?: JSX.Element | string | JSX.Element[]
} & LabelHTMLAttributes<HTMLLabelElement>

const isHtml = (content: unknown) => typeof content === "string" && /<\/?[a-z][\s\S]*>/i.test(content)

const Label = ({ Element = "label", isRequired, children, ...props }: Props) => {
    if (!children) return null

    const content = isHtml(children) ? <div dangerouslySetInnerHTML={{ __html: children }} style={{ display: "inline" }}></div> : children;
    const requiredIndicator = isRequired && <span className="text-danger" style={{ position: "absolute", paddingLeft: "2px" }}>*</span>;

    return (<Element {...props}><>
        {content}
        {requiredIndicator}
    </></Element>)
}

export default Label