import React from 'react';

export interface ImageProps {
  fluid?: boolean;
  rounded?: boolean;
  roundedCircle?: boolean;
  thumbnail?: boolean;
  alt?: string,
}
const Image = React.forwardRef<HTMLImageElement, ImageProps>(
    (
      { fluid, rounded, roundedCircle, thumbnail, ...props }, 
      ref, 
      alt = ""
    ) => {
    //   bsPrefix = useBootstrapPrefix(bsPrefix, 'img');
  
    //   const classes = classNames(
    //     fluid && `${bsPrefix}-fluid`,
    //     rounded && `rounded`,
    //     roundedCircle && `rounded-circle`,
    //     thumbnail && `${bsPrefix}-thumbnail`,
    //   );
  
      return (
        <img
          ref={ref}
          alt = {alt}
          {...props}
        />
      );
    },
);

export default Image;