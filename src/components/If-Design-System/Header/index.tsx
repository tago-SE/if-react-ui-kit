import React from 'react';
import styled from 'styled-components';

const HeadingStyle = styled.div<{textColor?: string, focusColor: string}>`
    & .if.heading {
      color: ${props => props.textColor};
      &:hover {
        color: ${props => props.focusColor};
      }
    }
`

interface IProps {
    center?: any,
    rank?: number,
    size?: string,
    children?: any,
    textColor?: string,
    focusColor?: string,
    [x: string]: any
}

const SIZES = ["largest", "larger", "large", "medium", "small", "smallest"];

export const Header: React.FC<IProps>= ({
  rank = 1, 
  size = "",
  center = false,
  children = null,
  textColor = "",
  focusColor = "",
  ...props
}) => {
  if (rank < 0) rank = 1;
  else if (rank > 6) rank = 6;
  size = " " + (SIZES.includes(size) ? size : SIZES[rank - 1]);
  const Header: any = "h" + rank;
  return (
    <HeadingStyle textColor={textColor} focusColor={focusColor}>
      <Header className={`if heading${size}${center ? " center" : ""}`} {...props}>{children}</Header>
    </HeadingStyle>
  );
};

export default Header;