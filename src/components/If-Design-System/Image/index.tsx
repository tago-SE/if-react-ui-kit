import React from 'react';

export interface IImage {
  type?: "default" | "studio"; // "lifestyle" does not work outside a span...
  responsivelyLazy?: boolean,
  src: string,
  alt?: string,
  [x: string]: any
}

export const Image = React.forwardRef<HTMLImageElement, IImage>(
  (
    { 
      type = "", 
      responsivelyLazy, 
      ...props }, 
    ref, 
    alt = ""
  ) => {
    return (
      <img
        className={`if image${type === "default" ? "" : " " + type}${responsivelyLazy ? " responsively-lazy" : ""}`}
        ref={ref}
        alt={alt}
        {...props}
      />
    );
  },
);

export default Image;