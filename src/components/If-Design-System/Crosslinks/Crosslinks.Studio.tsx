import React from 'react';

interface IStudioCrosslink {
    title:string,
    description: string,
    href: string
    imgSrc?: string, 
    alt?: string,
    [x: string]: any,
}

export const StudioCrosslink: React.FC<IStudioCrosslink> = ({
    title,
    description,
    href,
    imgSrc = undefined,
    alt = "",
    ...props
}) => {
    return (
        <li role="presentation" className="if" {...props}>
            <a className="if crosslink studio" href={href}>
                <img src={imgSrc} alt={alt} className="if image" height="300" width="477"></img>
                <p className="if text lead">
                    <span className="if">
                        {title}
                        <span className="if inline-nowrap">
                            <span className="if arrow" />
                        </span>
                    </span>
                </p>
                <p className="if text meta">{description}</p>
            </a>
        </li>
    );
}

const COLUMNS = ["", "one", "two", "three"];

interface IStudioContainerProps {
    children: any,
    columns?: 1 | 2 | 3,
    role?: string,
    [x: string]: any,
}

export const StudioCrosslinkContainer: React.FC<IStudioContainerProps> = ({
    children = null,
    columns = 0,
    role = "presentation",
    ...props
}) => {
    return (<ul role={role} data-anatomy="outline right" className={`if crosslinks studio ${COLUMNS[columns]}`} {...props}>{children}</ul>);
}