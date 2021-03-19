import React from 'react';

interface ILifestyleProps {
    title: string,
    text?: string,
    href: string
    imgSrc: string,
    alt?: string,               // Accessability: Should be empty if the image is decoration, otherwise provide an image description
    [x: string]: any,
}

export const LifestyleCrosslink: React.FC<ILifestyleProps> = ({
    title,
    href,
    imgSrc,
    alt = "",
    text = "",
    ...props
}) => {
    return (
        <li className="if" role="presentation" {...props}>
            <a className="if crosslink image" href={href}>
                <img className="if image" alt={alt} src={imgSrc}/>
                <p className="if text body">{title}</p>
                <p className="if text">{text}</p>
            </a>
        </li>
    );
}

const COLUMNS = ["", "one", "two", "three", "four"];

interface ILifestyleContainerProps {
    children: any,
    role?: string,
    columns?: 1 | 2 | 3 | 4,
    [x: string]: any,
}

export const LifestyleCrosslinkContainer: React.FC<ILifestyleContainerProps> = ({
    children = null,
    columns = 0,
    ...props
}) => {
    return (<ul role="presentation" className={`if crosslinks lifestyle ${COLUMNS[columns]}`} {...props}>{children}</ul>);
}