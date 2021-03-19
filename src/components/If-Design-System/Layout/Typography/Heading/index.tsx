import React, { ReactNode } from 'react';

export type headingVariants = 'largest' | 'larger' | 'large' | 'medium' | 'small' | 'smallest';

export interface IHeading {
  children:  ReactNode,
  rank?: 1 | 2 | 3 | 4 | 5 | 6,
  variant?: headingVariants,
  center?: boolean,
  [x: string]: any
}

export const Heading: React.FC<IHeading>= ({
  children,
  rank = 1,
  variant = "largest",
  center = false,
  ...props
}) => {
  const ShadowHeading: any = 'h' + rank;
  return (
    <ShadowHeading className={`if heading ${variant}${center ? " center" : ""}`} {...props}>
      {children}
    </ShadowHeading>
  );
};

export const H1: React.FC<IHeading>= ({rank = 1, children, variant = "largest", center = false, ...props }) =>  (
  <Heading rank={rank} children={children} variant={variant} center={center} {...props} />
);

export const H2: React.FC<IHeading>= ({rank = 2, children, variant = "larger", center = false, ...props }) =>  (
  <Heading rank={rank} children={children} variant={variant} center={center} {...props} />
);

export const H3: React.FC<IHeading>= ({rank = 3, children, variant = "large", center = false, ...props }) =>  (
  <Heading rank={rank} children={children} variant={variant} center={center} {...props} />
);

export const H4: React.FC<IHeading>= ({rank = 4, children, variant = "medium", center = false, ...props }) =>  (
  <Heading rank={rank} children={children} variant={variant} center={center} {...props} />
);

export const H5: React.FC<IHeading>= ({rank = 5, children, variant = "small", center = false, ...props }) =>  (
  <Heading rank={rank} children={children} variant={variant} center={center} {...props} />
);

export const H6: React.FC<IHeading>= ({rank = 6, children, variant = "smallest", center = false, ...props }) =>  (
  <Heading rank={rank} children={children} variant={variant} center={center} {...props} />
);

export interface ITitleHeading extends IHeading {};

export const TitleHeading: React.FC<ITitleHeading>= ({
  children,
  rank = 1,        
  center = false,
  variant = "largest",
  ...props
}) => {
  const ShadowHeading: any = 'h' + rank;
  return (
    <ShadowHeading className={`if title heading ${variant}${center ? " center" : ""}`} {...props}>
      {children}
    </ShadowHeading>
  );
};

export default Heading;