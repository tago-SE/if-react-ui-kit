import React from 'react';

interface IExpandable {
    id: string,
    tabIndex?: number,
    title: string,
    expanded?: boolean,
    children?: any,
    [x: string]: any,
}

export const Expandable: React.FC<IExpandable> = ({
    id,
    tabIndex = 0,
    title,
    expanded = false,
    children = undefined,

    ...props
}) => {
    const [isOpen, setOpen] = React.useState(expanded);
    const expandedId = id + "-exp";

    const toggleOpen = () => {
        setOpen(isOpen ? false : true);
    }

    return (
        <section className={`if panel is-expandable${ isOpen ? " is-open" : ""}`} id={id} aria-controls={expandedId} {...props}>
            <div className="if title" aria-controls={expandedId} aria-expanded={isOpen} tabIndex={isOpen ? tabIndex : -1} onClick={toggleOpen} onKeyPress={toggleOpen}>
                {title}
            </div>
            <div className="if content" role="region" id={expandedId}>
                {children}
            </div>
        </section>
    );
}

export default Expandable;

