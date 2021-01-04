import React from 'react';

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

export default Teaser;

/*
import React from "react";

interface TeaserProps {
  header: any;
  image: any;
  content: any;
  actionElement:any;
}

const Teaser = ({ header, image, content, actionElement }: TeaserProps) => (
  <li className="if teaser">
    {image}
    <span className="if heading smallest">{header}</span>
    {content}
    {actionElement}
  </li>
);

export const TeaserImage = (props) =>{
  return <img src={props.imgSrc} {...props.dataAttrs} className="if image" height={props.height} width={props.width} alt={props.alt} />
}

export const TeaserList = ({children}) =>{
  return <ul className="if teasers">{children}</ul>
}

export const TeaserLink = ({href, linkText}) =>{
  return <a href={href} className="if standalone">{linkText}</a>
}

export const TeaserButton = ({href, linkText}) =>{
  return <a href={href} type="button" className="if button primary">{linkText}</a>
}

export default Teaser;
*/