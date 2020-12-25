import React from 'react';

interface IProps {
  trailingClassName?: string,
  [x: string]: any
};

export const Row : React.FC<IProps> = ({
  trailingClassName="",
  ...props }) => {
  return (<div className={`if row${(trailingClassName ? " " + trailingClassName : "")}`} {...props}>{props.children}</div>);
}
  
export default Row;