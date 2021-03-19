import React from 'react';

export interface IFigure {
    src: string,
    caption?: string,
    alt?: string, 
    title?: string,
    sizes?: string,
    srcSet?: string,
    [x: string]: any
  };
  
/**
 * Figure component consisiting of a image and an optional figure caption.
 */
export const Figure : React.FC<IFigure> = ({
    src,
    caption = undefined,
    alt = "", 
    title = "",
    sizes = undefined,
    srcSet = undefined,
    ...props
}) => {
    return (
        <figure className="if" {...props}>
            <img
                className="if"
                src={src}
                srcSet={srcSet}
                sizes={sizes}
                title={title}
                alt={alt}
            />
            {caption ? (
                <figcaption className="if text caption">{caption}</figcaption>
            ) : null}
        </figure>
    );
}

export default Figure;