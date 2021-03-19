import React from 'react';

/*
    Reference: 
    - https://design.if.eu/design/guidelines/patterns
*/

export interface IQuote {
    text: string | JSX.Element,
    author: string | JSX.Element,
    reference?: string,
    citation?: string,
    italic?: boolean,
    strong?: boolean
    [x: string]: any
};

export const Quote : React.FC<IQuote> = ({
    text,
    author,
    sourceReference = "",
    sourceName = "",
    italic = false,
    strong = false,
    ...props
}) => {
    const buildText = () => {
        if (italic && strong) return <p><strong><em>“{text}”</em></strong></p>;
        if (strong) return <p><strong>“{text}”</strong></p>;
        if (italic) return <p><em>“{text}”</em></p>;
        return <p>“{text}”</p>;
    };
    return (
        <blockquote className="if" cite={sourceReference} {...props}>
            {buildText()}
            <footer>—{author} {sourceName ? `, ${<cite>{sourceName}</cite>}` : null}</footer>
        </blockquote>
    );
}

export default Quote;
