import React from 'react';

interface IStudioProps {
    title:string,
    description: string,
    href: string
    imageSrc: string,
    alt?: string,               // Should be empty or explain the image
    [x: string]: any,
}

export const StudioCrosslink: React.FC<IStudioProps> = ({
    title,
    description,
    href,
    imageSrc,
    alt = "",
    ...props
}) => {
    return (
        <li role="presentation" className="if" {...props}>
            <a className="if crosslink studio" href={href}>
                <img className="if image" alt={alt} src={imageSrc}/>
                <p className="if text lead">
                    <span className="if">
                        {title}
                        <span className="if inline-nowrap">
                            <span className="if arrow"></span>
                        </span>
                    </span>
                </p>
                <p className="if text meta">{description}</p>
            </a>
        </li>
    );
}

interface IStudioContainerProps {
    children: any,
    varian?: string,
    role?: string,
    [x: string]: any,
}

export const StudioCrosslinkContainer: React.FC<IStudioContainerProps> = ({
    children=null,
    variant = "",
    role = "presentation",
    ...props
}) => {
    return (<ul role={role} className={`if crosslinks studio ${variant}`} {...props}>{children}</ul>);
}