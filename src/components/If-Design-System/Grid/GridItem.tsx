import React from 'react';

interface IProps {
  trailingClassName?: string,
  xs?: number,
  md?: number,
  [x: string]: any
};

export const GridItem : React.FC<IProps> = ({
  xs = undefined,
  md = undefined,
  ...props }) => {
  
  const mdClass = md ? `col-${md}--md` : "";
  const xsClass = xs ? `col-${xs}--xs` : "";
  return (<div className={`if ${xsClass} ${mdClass}`} {...props}>{props.children}</div>);
}
  
export default GridItem;