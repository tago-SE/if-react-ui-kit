import React from 'react';
import styled from 'styled-components';

const HeadingStyle = styled.div<{textColor?: string, focusColor: string, justifyContent: string}>`
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
  rank?: number,
  size?: string,
  children?: any,
  justifyContent?: string,
  textColor?: string,
  focusColor?: string,
  [x: string]: any
}

const SIZES = ["largest", "larger", "large", "medium", "small", "smallest"];

export const Heading: React.FC<IProps>= ({
  rank = 1, 
  size = "",
  children = null,
  justifyContent = "",
  textColor = "",
  focusColor = "",
  ...props
}) => {
  if (rank < 0) rank = 1;
  else if (rank > 6) rank = 6;
  size = " " + (SIZES.includes(size) ? size : SIZES[rank - 1]);
  const Header: any = "h" + rank;
  return (
    <HeadingStyle textColor={textColor} focusColor={focusColor} justifyContent={justifyContent}>
      <Header className={`if heading${size}`} {...props}>
        {children}
      </Header>
    </HeadingStyle>
  );
};

export default Heading;