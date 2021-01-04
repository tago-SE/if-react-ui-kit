import React from 'react';


interface IProps {
  className?: string,
  children?: any, 
  [x: string]: any
};

export const Content : React.FC<IProps> = ({
  className="",
  children=null,
  ...props
}) => {
  return (<div className={`if content${(className ? " " + className : "")}`} {...props}>{children}</div>);
}

export default Content;