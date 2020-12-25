import React, { ReactNode } from "react";

interface IProps {
    children?: ReactNode,
    type?: "fluid" | "wide" | "across" | "default",
    [x: string]: any
}

export const GridContainer : React.FC<IProps> = ({
    children = null,
    type = "default",
    ...props
  }) => {
    return (<div className={`if grid${type === "default" ? "" : " " + type }`} {...props}>{children}</div>);
}

export default GridContainer;