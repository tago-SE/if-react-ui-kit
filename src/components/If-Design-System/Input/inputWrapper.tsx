export function InputWrapper ({ children, ...props}) {
    return (<div className="if input-wrapper" {...props}>{children}</div>);
}
