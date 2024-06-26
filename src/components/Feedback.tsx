type Props = {
    type?: "valid" | "invalid" | "info";
    children: string | JSX.Element | JSX.Element[]
}
const Feedback = ({ type = "invalid", children }: Props) => {
    return (
        <div className={`${type}-feedback`}>{children}</div>
    )
}

export default Feedback