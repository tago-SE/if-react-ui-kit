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

const COLUMNS = ["", "one", "two", "three", "four"];

interface IButtonContainerProps {
    children: any,
    columns?: 1 | 2 | 3 | 4,
    [x: string]: any,
}

export const ButtonCrosslinkContainer: React.FC<IButtonContainerProps> = ({
    children = null,
    columns = 0,
    ...props
}) => {
    return (<ul role="presentation" className={`if crosslinks ${COLUMNS[columns]}`} {...props}>{children}</ul>);
}