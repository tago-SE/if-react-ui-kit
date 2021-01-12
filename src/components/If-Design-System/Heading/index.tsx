import React, { ReactNode } from 'react';

export interface IHeading {
  children: ReactNode,
  size?: 'largest' | 'larger' | 'large' | 'medium' | 'small' | 'smallest',
  rank?: 1 | 2 | 3 | 4 | 5 | 6,
  center?: boolean,
  [x: string]: any
}

const rankMap = {
  "largest": 1,
  "larger": 2,
  "large": 3,
  "medium": 4,
  "small": 5,
  "smallest": 6,
}

export const Heading: React.FC<IHeading>= ({
  children,
  rank = undefined,
  size = "largest",
  center = false,
  ...props
}) => {
  const Heading: any = "h" + (rank ? rank : rankMap[size]);
  return (
    <Heading className={`if heading ${size}${center ? " center" : ""}`} {...props}>
      {children}
    </Heading>
  );
};

export const TitleHeading: React.FC<IHeading>= ({
  children,
  rank = undefined,
  size = "largest",
  ...props
}) => {
  const Heading: any = "h" + (rank ? rank : rankMap[size]);
  return (
    <Heading className={`if title heading ${size}`} {...props}>
      {children}
    </Heading>
  );
};

export default Heading;