import React from 'react';

interface IButtonProps {
    title:string,
    href: string
    [x: string]: any,
}

export const ButtonCrosslink: React.FC<IButtonProps> = ({
    title,
    href,
    iconTag,
    ...props
}) => {
    return (
        <li className="if" role="presentation" {...props}>
            <a href={href} className={`if crosslink button ${iconTag}`}>{title}</a>
        </li>
    );
}

interface IButtonContainerProps {
    children: any,
    varian?: string,
    [x: string]: any,
}

export const ButtonCrosslinkContainer: React.FC<IButtonContainerProps> = ({
    children = null,
    variant = "",
    ...props
}) => {
    return (<ul role="presentation" className={`if crosslinks ${variant}`} {...props}>{children}</ul>);
}