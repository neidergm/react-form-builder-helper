import classnames from "classnames";

type Props = {
    invalid?: boolean;
    children?: string | JSX.Element | JSX.Element[],
    className?: string
}

const WrapperFormGroup = ({ invalid, children, className }: Props) => {

    return (
        <div className={classnames({ "is-invalid": invalid }, className)}>
            {children}
        </div>
    )
}

export default WrapperFormGroup