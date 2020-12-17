import React from 'react';

interface IProps {
  className?: string,
  children?: any, 
  [x: string]: any
};

export const IFDiv : React.FC<IProps> = ({
  className="",
  children=null,
  ...props
}) => {
  return (<div className={`if${(className ? " " + className : "")}`} {...props}>{children}</div>);
}

export const IFContainer : React.FC<IProps> = ({
  className="",
  children=null,
  ...props
}) => {
  return (<div className={`if container${(className ? " " + className : "")}`} {...props}>{children}</div>);
}


export const IFBlock : React.FC<IProps> = ({
  className="",
  children=null,
  ...props
}) => {
  return (<section className={`if block${(className ? " " + className : "")}`} {...props}>{children}</section>);
}

export const IFMobileContainer : React.FC<IProps> = ({
  className="",
  children=null,
  ...props
}) => {
  return (<div className={`if mobile ${className}`} {...props}>{children}</div>);
};

export const IFDesktopContainer : React.FC<IProps> = ({
  className="",
  children=null,
  ...props
}) => {
  return (<div className={`if desktop container ${className}`} {...props}>{children}</div>);
};

export const IFHolder: React.FC<IProps> = ({
  className="",
  children=null,
  ...props
}) => {
  return (<div className={`if holder ${className}`} {...props}>{children}</div>);
};

export const IFShowcase : React.FC<IProps> = ({
  className="",
  children=null,
  ...props
}) => {
  return (<div className={`if showcase ${className}`} {...props}>{children}</div>);
};  

export default IFDiv;


