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
  title: string,
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
  [x: string]: any
}

export const Teaser: React.FC<ITeaser>= ({
    title = "null",
    heading,
    text,
    image = null,
    link,
    linkImage = false,
    ...props
}) => {

  const { size } = heading;

  if (!size) 
    heading.size = "smallest";
  
  const imageContent = () => {
    if (image === null) return null;
    if (linkImage) return (<a href={link.href} className="if"><Image {...image} /></a>);
    return (<Image {...image} />);
  }

  return (
      <li className="if teaser" {...props}>
        {imageContent()}
        <Heading {...heading} />
        <p className="if">{text}&nbsp;</p>
        {link ? (
          <a href={link.href} title={link.title} target={link.target} className="if standalone">{link.title}</a>
        ) : null}
      </li>
  );
};

export default Teaser;
