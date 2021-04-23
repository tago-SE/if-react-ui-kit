import React from 'react';
import { IDefaultTagProps } from './index';

interface ILinkTagProps extends IDefaultTagProps {
    href: string,
    color?: 'yellow' | 'mint' | 'pink' | 'aquamarine',
    passive?: boolean, // not sure how passive works...
};

export const LinkTag: React.FC<ILinkTagProps> = ({
    name,
    href,
    id,
    passive = false,
    color = "",
    small = false,
    ...props
}) =>  (
    <li key={id || name}>
        <a href={href} className={`if tag${small ? " small" : ""}${passive ? " passive" : ""} ${color}`} {...props}>{name}</a>
    </li>
);


