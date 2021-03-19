import React from 'react';

interface IProps {
  trailingClassName?: string,
  children?: any, 
  [x: string]: any
};

export const IFDiv : React.FC<IProps> = ({
  trailingtrailingClassName="",
  children=null,
  ...props
}) => {
  return (<div className={`if${(trailingtrailingClassName ? " " + trailingtrailingClassName : "")}`} {...props}>{children}</div>);
}

/**
 * The container centers your content horizontally. It's the most basic layout element.
 * @param param0 
 */
export const Container : React.FC<IProps> = ({
  trailingClassName="",
  children=null,
  ...props
}) => {
  return (<div className={`if container${(trailingClassName ? " " + trailingClassName : "")}`} {...props}>{children}</div>);
}


export const Block : React.FC<IProps> = ({
  trailingClassName="",
  children=null,
  ...props
}) => {
  return (<section className={`if block${trailingClassName ? ` ${trailingClassName}` : ""}`} {...props}>{children}</section>);
}

export const IFMobileContainer : React.FC<IProps> = ({
  trailingClassName="",
  children=null,
  ...props
}) => {
  return (<div className={`if mobile ${trailingClassName}`} {...props}>{children}</div>);
};

export const IFDesktopContainer : React.FC<IProps> = ({
  trailingClassName="",
  children=null,
  ...props
}) => {
  return (<div className={`if desktop container ${trailingClassName}`} {...props}>{children}</div>);
};

export const Holder: React.FC<IProps> = ({
  trailingClassName="",
  children=null,
  ...props
}) => {
  return (<div className={`if holder ${trailingClassName}`} {...props}>{children}</div>);
};

export const IFShowcase : React.FC<IProps> = ({
  trailingClassName="",
  children=null,
  ...props
}) => {
  return (<div className={`if showcase ${trailingClassName}`} {...props}>{children}</div>);
};  

export default IFDiv;


