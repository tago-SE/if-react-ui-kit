import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IStyleProps {
  textColor?: string,
  focusColor?: string,
  justifyContent: string,
  marginBottom: string,
};

const HeadingStyle = styled.section<IStyleProps>`
  display: flex;
  justify-content: ${props => props.justifyContent};
  & .if.heading {
    max-width: fit-content;
    max-height: fit-content;
    margin-bottom: ${props => props.marginBottom};
    display: auto;
    &:hover {
      color: ${props => props.focusColor};
    }
  }
`

interface IProps {
  children: ReactNode,
  size?: 'largest' | 'larger' | 'large' | 'medium' | 'small' | 'smallest',
  rank?: 1 | 2 | 3 | 4 | 5 | 6,
  justifyContent?: string,
  marginBottom?: string,
  textColor?: string,
  focusColor?: string,
  [x: string]: any
}

export const Heading: React.FC<IProps>= ({
  children,
  rank = 1,
  size = "largest",
  marginBottom = "",
  justifyContent = "",
  textColor = "",
  focusColor = "",
  ...props
}) => {
  const Heading: any = "h" + rank;
  return (
    <HeadingStyle marginBottom={marginBottom} textColor={textColor} focusColor={focusColor} justifyContent={justifyContent}>
      <Heading className={`if heading ${size}`} {...props}>
        {children}
      </Heading>
    </HeadingStyle>
  );
};

export const TitleHeading: React.FC<IProps>= ({
  children,
  rank = 1, 
  size = "largest",
  marginBottom = "",
  justifyContent = "",
  textColor = "",
  focusColor = "",
  ...props
}) => {
  const Heading: any = "h" + rank;
  return (
    <HeadingStyle marginBottom={marginBottom} textColor={textColor} focusColor={focusColor} justifyContent={justifyContent}>
      <Heading className={`if title heading ${size}`} {...props}>
        {children}
      </Heading>
  </HeadingStyle>
  );
};

export default Heading;