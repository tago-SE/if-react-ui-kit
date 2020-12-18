/**
 * References:
 * 1) https://design.if.eu/components/usps
 * 2) https://dev.azure.com/if-it/If%20Design%20Hub/_git/if-design-system?path=%2Fpackages%2Fusps
 */

import React from 'react';

interface IProps {
    title?: string,
    text: string, 
    [x: string]: any
}
  
export const UspItem: React.FC<IProps>= ({
    title = "",
    text = "",
    alignLeft = false,
    ...props
}) => {
    return (
        <li className="if usp">
            {title ? <span className="if heading smallest">{title}</span> : null}
            <p className="if">{text}{props.children}</p>
        </li>
    );
};

export const UspList: React.FC<{children: any, alignLeft?: boolean, [x: string]: any}>= ({
    children = null,
    alignLeft = false,
    ...props
}) => { 
    return (<ul className={`if usps${(alignLeft ? " left" : "")}`} {...props}>{children}</ul>);
};



