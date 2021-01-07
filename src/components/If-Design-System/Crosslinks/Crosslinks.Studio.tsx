import React from 'react';
import { Image, IImage } from '../Image';

interface IStudioProps {
    title:string,
    description: string,
    href: string
    image?: IImage,
    alt?: string,               // Accessability: Should be empty if the image is decoration, otherwise provide an image description
    [x: string]: any,
}

export const StudioCrosslink: React.FC<IStudioProps> = ({
    title,
    description,
    href,
    image = undefined,
    ...props
}) => {
    return (
        <li role="presentation" className="if" {...props}>
            <a className="if crosslink studio" href={href}>
                {image ? <Image {...image} /> : null}
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