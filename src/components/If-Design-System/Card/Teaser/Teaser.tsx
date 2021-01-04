import React from 'react';

import Image from '../../Image';
import Heading, { IHeading } from '../../Heading';
/*

With square image
With studio image
With text only
With call to action button
With large title

*/
interface IImage {
  src: string,
  alt?: string,
  type?: "default" | "studio";
}

interface ILink {
  name: string,
  href: string,
  target?: string, 
}

interface ITeaser {
  title?: string,
  heading: IHeading,
  text: string, 
  image?: IImage, 
  linkImage?: boolean,                  
  link: ILink,
  maxWidth?: number,
  [x: string]: any
}

export const Teaser: React.FC<ITeaser>= ({
    title = "null",
    heading,
    text,
    image = null,
    link,
    linkImage = false,
    maxWidth = 500,
    ...props
}) => {

  const { size } = heading;

  if (!size) 
    heading.size = "small";
  

  const imageContent = () => {
    if (image === null) return null;
    if (linkImage) return (<a href={link.href} className="if"><Image {...image} /></a>);
    return (<Image {...image} />);
  }

  return (
      <li className="if teaser" {...props} style={{maxWidth: maxWidth}}>
        {imageContent()}
        <Heading {...heading} />
        <p className="if">{text}&nbsp;</p>
        <a href={link.href} title={link.name} target="" className="if standalone">{link.name}</a>
      </li>
  );
};

export default Teaser;
