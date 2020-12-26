import React from 'react';

interface IProps {
  [x: string]: any
};

export const GridRow : React.FC<IProps> = ({...props }) => {
  return (<div className={`if row`} {...props}>{props.children}</div>);
}
  
export default GridRow;