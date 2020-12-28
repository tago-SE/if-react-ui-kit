import React, { ReactNode } from 'react';

export const TextLead : React.FC<{
  children?: ReactNode, 
  [x: string]: any
}> = ({
  children=null,
  ...props
}) =>  (
    <p className="if text lead" {...props}>{children}</p>
);

export default TextLead;
