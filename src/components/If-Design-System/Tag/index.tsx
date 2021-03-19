import React, { ReactNode } from 'react';
import SpacingBuilder, { ISpacing } from '../Utils/Spacing';

interface ILinkTag {
    name: string,
    href: string,
    small?: boolean,
    color?: "yellow" | "mint" | "pink" | "aquamarine",
    passive?: boolean, // not sure how passive works...
    onClick?: any,
    spacing?: ISpacing,
    [x: string]: any,
}

export const LinkTag: React.FC<ILinkTag> = ({
    name,
    href,
    passive = true,
    color = "",
    small = false,
    onClick = null,
    spacing = undefined, 
    ...props
}) => {
    return (
        <li className={`if ${SpacingBuilder.buildSpacingClass(spacing)}`}>
            <a href={href} className={`if tag${small ? " small" : ""}${passive ? " passive" : ""} ${color}`} {...props}>{name}</a>
        </li>
    );
}

interface IStatusTag {
    name: string,
    status: "error" | "warning" | "success",
    small?: boolean,
    spacing?: ISpacing,
    [x: string]: any,
}

export const StatusTag: React.FC<IStatusTag> = ({
    name,
    status,
    small = false,
    spacing = undefined,
    ...props
}) => {
    return (
        <li className={`if${SpacingBuilder.buildSpacingClass(spacing)}`} {...props}>
            <span className={`if tag status${small ? " small" : ""} ${status}`} {...props} >{name}</span>
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

