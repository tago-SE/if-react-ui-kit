import React, { ReactNode } from 'react';

export const TextBody : React.FC<{
  children?: ReactNode, 
  [x: string]: any
}> = ({
  children=null,
  ...props
}) =>  (
  <p className="if text body" {...props}>{children}</p>
);

export default TextBody;