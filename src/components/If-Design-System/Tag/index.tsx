import React, { ReactNode } from 'react';

interface ITag {
    name: string,
    href: string,
    size?: "small" | "medium" | "large" | "larger" | "largest" | "passive",
    color?: "yellow" | "mint" | "pink" | "aquamarine",
    passive?: boolean, // not sure how passive works...
    onClick?: any,
    [x: string]: any,
}

export const CategoryTag: React.FC<ITag> = ({
    name,
    href,
    passive = true,
    color = "",
    onClick = null,
    ...props
}) => {
    
    return (
        <li className="if">
            <a href={href} className={`if tag${passive ? " passive" : ""} ${color}`} {...props}>{name}</a>
        </li>
    );
}

interface ITags {
    children: ReactNode,
    [x: string]: any,
}

export const TagContainer: React.FC<ITags> = ({
    children,
    ...props
}) => {
    return (
        <ul className="if tags" {...props}>{children}</ul>
    );
}

