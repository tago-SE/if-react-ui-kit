import React from 'react';

/*
    TODO: https://design.if.eu/components/card#components-card.card
*/
interface IProps {
    title: string,
    text: string, 
    image: { path: string, alt?: string}                    // Replace /w component
    link: { name: string, path: string, target?: string }   // Replace /w component
    [x: string]: any
  }
  
export const Teaser: React.FC<IProps>= ({
    title,
    text,
    image,
    link,
    ...props
}) => {
    return (
        <li className="if teaser" {...props}>
            <img alt={image.alt} src={image.path} className="if image  responsively-lazy" data-srcset={image.path} /> 
            <h3 className="heading-smallest">{title}</h3> 
            <p>{text}&nbsp;</p>
            <a href={link.path} title={link.name} target="" className="if standalone">{link.name}</a>
        </li>
    );
};

export const TeaserContainer: React.FC<{[x: string]: any}>= (props) => {
    return (<ul className="if teasers">{props.children}</ul>);
};

export default TeaserContainer;