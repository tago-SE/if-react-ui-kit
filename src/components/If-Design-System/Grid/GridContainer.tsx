import React, { ReactNode } from "react";

interface IProps {
    children?: ReactNode,
    type?: "fluid" | "wide" | "across" | "",
    [x: string]: any
}

export const GridContainer : React.FC<IProps> = ({
    children = null,
    type = "",
    ...props
  }) => {
    return (<div className={`if grid ${type}`} {...props}>{children}</div>);
}

export default GridContainer;