import React from 'react';

interface IProps {
  trailingClassName?: string,
  [x: string]: any
};

export const Column : React.FC<IProps> = ({
  trailingClassName="",
  ...props }) => {
  return (<div className={`if row${trailingClassName}`} {...props}>{props.children}</div>);
}
  
export default Column;