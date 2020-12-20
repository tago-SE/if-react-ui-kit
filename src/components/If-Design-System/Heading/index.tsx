import React, { ReactNode } from 'react';
import styled from 'styled-components';

const HeadingStyle = styled.section<{textColor?: string, focusColor: string, justifyContent: string}>`
  display: flex;
  justify-content: ${props => props.justifyContent};
  & .if.heading {
    max-width: fit-content;
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
  textColor?: string,
  focusColor?: string,
  [x: string]: any
}

export const Heading: React.FC<IProps>= ({
  children,
  rank = 1, 
  size = "largest",
  justifyContent = "",
  textColor = "",
  focusColor = "",
  ...props
}) => {
  const Heading: any = "h" + rank;
  return (
    <HeadingStyle textColor={textColor} focusColor={focusColor} justifyContent={justifyContent}>
      <Heading className={`if heading ${size}`} {...props}>
        {children}
      </Heading>
    </HeadingStyle>
  );
};

export default Heading;