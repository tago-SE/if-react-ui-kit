import React from 'react';

interface ITeaser {
    children?: React.ReactNode,
    [x: string]: any,
}

export const TeaserList: React.FC<ITeaser>= ({
    children = null,
    ...props
}) => {
    return (<ul className="if teasers" {...props}>{children}</ul>);
};

export default TeaserList;