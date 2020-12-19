import React from 'react';

interface ILifestyleProps {
    title:string,
    href: string
    imageSrc: string,
    alt?: string,               // Should be empty if the image is decoration, otherwise provide an image description
    [x: string]: any,
}

export const LifestyleCrosslink: React.FC<ILifestyleProps> = ({
    title,
    href,
    imageSrc,
    alt = "",
    ...props
}) => {
    return (
        <li className="if" role="presentation" {...props}>
            <a className="if crosslink image" href={href}>
                <img className="if image" alt={alt} src={imageSrc}/>
                <p className="if text body">{title}</p>
            </a>
        </li>
    );
}

interface ILifestyleContainerProps {
    children: any,
    role?: string,
    variant?: string,
    [x: string]: any,
}

export const LifestyleCrosslinkContainer: React.FC<ILifestyleContainerProps> = ({
    children=null,
    variant = "",
    ...props
}) => {
    return (<ul role="presentation" className={`if crosslinks lifestyle ${variant}`} {...props}>{children}</ul>);
}