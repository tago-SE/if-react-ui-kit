import React, { ReactNode } from 'react';

interface IProps {
    children: ReactNode,
    [x: string]: any
  }
  
export const ArticleList: React.FC<IProps>= ({
    children = null,
    ...props
}) => {
    return (
        
        <ol className="if cards articles" {...props}>
            {children}
        </ol>
    );  
}

export default ArticleList;