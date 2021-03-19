import React from 'react';

/*
    Reference: 
    - https://dev.azure.com/if-it/If%20Design%20Hub/_git/if-design-system?path=%2Fpackages%2Fcore%2Fsrc%2Fblock.scss
*/

export interface IBlock {
  children?: any, 
  variant?: 'blog' | 'dark' | 'darker' | 'light' | "poc" | '';
  [x: string]: any
};

/**
 * Primary building block, typically used with a Container child component. Use the variant property to specify the background color.
 */
export const Block : React.FC<IBlock> = ({
  children = null,
  variant = "",
  ...props
}) => {
  return (<div className={`if block ${variant}`} {...props}>{children}</div>);
}

export default Block;