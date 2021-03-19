import React from 'react';

export interface IImage {
  src: string,
  alt?: string,
  [x: string]: any
}

export const Image = React.forwardRef<HTMLImageElement, IImage>(
  (
    { 
      src,
      alt = "",
      ...props 
    }, 
    ref, 
  ) => {
    return (
      <img
        className={`if image`}
        src={src}
        ref={ref}
        alt={alt}
        {...props}
      />
    );
  },
);

export default Image;