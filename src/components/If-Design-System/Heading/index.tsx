import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IStyleProps {
  textColor?: string,
  focusColor?: string,
  justifyContent: string,
  marginBottom: string,
};

const HeadingStyle = styled.span<IStyleProps>`
  display: flex;
  margin: 0;
  justify-content: ${props => props.justifyContent};
  & .if.heading {
    margin-bottom: ${props => props.marginBottom};
    display: auto;
    &:hover {
      color: ${props => props.focusColor};
    }
  }
`

export interface IHeading {
  children: ReactNode,
  size?: 'largest' | 'larger' | 'large' | 'medium' | 'small' | 'smallest',
  rank?: 1 | 2 | 3 | 4 | 5 | 6,
  justifyContent?: string,
  marginBottom?: string,
  textColor?: string,
  focusColor?: string,
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
  marginBottom = "",
  justifyContent = "",
  textColor = "",
  focusColor = "",
  ...props
}) => {
  const Heading: any = "h" + (rank ? rank : rankMap[size]);
  return (
    <HeadingStyle marginBottom={marginBottom} textColor={textColor} focusColor={focusColor} justifyContent={justifyContent}>
      <Heading className={`if heading ${size}`} {...props}>
        {children}
      </Heading>
    </HeadingStyle>
  );
};

export const TitleHeading: React.FC<IHeading>= ({
  children,
  rank = undefined,
  size = "largest",
  marginBottom = "",
  justifyContent = "",
  textColor = "",
  focusColor = "",
  ...props
}) => {
  const Heading: any = "h" + (rank ? rank : rankMap[size]);
  return (
    <HeadingStyle marginBottom={marginBottom} textColor={textColor} focusColor={focusColor} justifyContent={justifyContent}>
      <Heading className={`if title heading ${size}`} {...props}>
        {children}
      </Heading>
  </HeadingStyle>
  );
};

export default Heading;