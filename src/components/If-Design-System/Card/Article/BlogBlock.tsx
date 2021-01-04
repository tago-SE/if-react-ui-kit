import React, { ReactNode } from 'react';

interface IProps {
    children: ReactNode,
    [x: string]: any
  }
  
export const BlogBlock: React.FC<IProps>= ({
    children = null,
    ...props
}) => {
    return (
        <div className="if block blog" {...props}>
            <div className="if container">
                {children}
            </div>
        </div>
    );  
}

export default BlogBlock;