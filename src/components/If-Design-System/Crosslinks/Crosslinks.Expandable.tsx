/*
    TODO

    https://www.if.se/foretag/forsakringar/fordonsforsakring
*/
import React from 'react';

interface IButtonProps {
    title:string,
    href: string,
    alt?: string,
    [x: string]: any,
}

export const ExpandableCrosslink: React.FC<IButtonProps> = ({
    title,
    href,
    iconTag,
    alt = "",
    ...props
}) => {
    return (
        <li className="if is-expanded" role="presentation" {...props}>
            <button
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="expandable-content-16"
            aria-labelledby="expandable-text-16"
            className="if crosslink expandable"
            type="button"
            >
            <img className="if image" alt={alt} src="https://v.imgi.no/gy5k43je86-MOODBOARD/2042" />
            <p id="expandable-text-16" className="if text body">Reseforsäkring</p>
            <p className="if expandable text meta">Dölj reseförsäkringar</p>
            </button>
            <div tabIndex={-1} id="expandable-content-16 is-open" className="if block expandable">
            <p>Hello there darling</p>
            </div>
        </li>
    );
}

const COLUMNS = ["", "one", "two", "three", "four"];

interface IExpandableContainerProps {
    children: any,
    columns?: 1 | 2 | 3 | 4,
    [x: string]: any,
}

export const ExpandableCrosslinksContainer: React.FC<IExpandableContainerProps> = ({
    children = null,
    columns = 0,
    ...props
}) => {
    return (<ul role="presentation" className={`if crosslinks expandable ${COLUMNS[columns]}`} {...props}>{children}</ul>);
}