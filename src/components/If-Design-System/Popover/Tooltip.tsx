import React, { ReactElement } from 'react';
import './tooltip.css';

interface IProps {
    children: ReactElement,
    position: "top" | "left" | "right" | "bottom";
    text?: string,
    underlineTarget?: boolean,
    [x: string]: any    
}
  
export const Tooltip: React.FC<IProps>= ({
    children = null,
    text = undefined,
    underlineTarget = false,
    position,
    ...props
}) => {
    return (
        <div  className={`tooltip ${position} ${underlineTarget ? "dotted" : ""}`} {...props}>
            <span className="text">{text}</span>
            {children}
        </div>
    );
}

export default Tooltip;