import React, { ReactNode } from 'react';

interface IProps {
      children?: ReactNode, 
    [x: string]: any
};

export const TextBody : React.FC<IProps> = ({
  children=null,
  ...props
}) =>  (
    <p className="if text body" {...props}>{children}</p>
);

export const TextLead : React.FC<IProps> = ({
  children=null,
  ...props
}) =>  (
    <p className="if text lead" {...props}>{children}</p>
);

