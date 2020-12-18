import React from 'react';

interface IProps {
    size: string,
    level?: number,
    trailingClassName?: string,
    children?: any,
    [x: string]: any
}

export const IFHeader: React.FC<IProps>= ({
  size="[smallest|small|medium|large|larger|largest",
  level=1, 
  trailingClassName="",
  children=null,
  ...props
}) => {
  if (level < 0) level = 1;
  if (level > 6) level = 6;
  const Header: any = "h" + level;
  return <Header className={`if heading ${size} ${trailingClassName}`} {...props}>{children}</Header>;
};

export default IFHeader;