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
  rank?: 1 | 2 | 3 | 4 | 5 | 6,
  size?: 'largest' | 'larger' | 'large' | 'medium' | 'small' | 'smallest',
  children?: ReactNode,
  justifyContent?: string,
  textColor?: string,
  focusColor?: string,
  [x: string]: any
}

export const Heading: React.FC<IProps>= ({
  rank = 1, 
  size = "largest",
  children = null,
  justifyContent = "",
  textColor = "",
  focusColor = "",
  ...props
}) => {
  const Header: any = "h" + rank;
  return (
    <HeadingStyle textColor={textColor} focusColor={focusColor} justifyContent={justifyContent}>
      <Header className={`if heading ${size}`} {...props}>
        {children}
      </Header>
    </HeadingStyle>
  );
};

export default Heading;