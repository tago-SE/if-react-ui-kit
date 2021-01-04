import React from 'react';

import { VideoContent } from '../../Video';

interface IProps {
    title: string,
    text: string, 
    image: { path: string, alt?: string}                    // Replace /w component
    link: { name: string, path: string, target?: string }   // Replace /w component
    [x: string]: any
  }
  
export const VideoTeaser: React.FC<IProps>= ({
    title,
    text,
    image,
    link,
    ...props
}) => {
    return (
        <li className="if teaser" {...props}>
            {/* <img alt={image.alt} src={image.path} className="if image  responsively-lazy" data-srcset={image.path} />  */}
            <h3 className="heading-smallest">{title}</h3> 
            <p>{text}&nbsp;</p>
            <a href={link.path} title={link.name} target="" className="if standalone">{link.name}</a> 
             <VideoContent 
                url="https://www.youtube.com/watch?v=VAC-5BQnuXI&amp;list=PL2satA_B-xnSAxmFXHgb1tsaVJ_Pfhrg2" 
                coverTitle="The Almighty Loaf"
                coverDescription="We are all yeast m'lady"
              />
        </li>
    );
};

export default VideoTeaser;