import React from 'react';
import './textlist.css';

type notationTypes = 'circle-black' | 'circle-white' | 'decimal';

export interface ITextListItem {
    children?: any, 
    notation?: notationTypes,
    [x: string]: any
}

export const TextListItem : React.FC<ITextListItem> = ({
    children = null,
    notation = "circle-black",
    ...props
  }) => {
    return (
      <div className={`text-list-item not-${notation}`} {...props}>{children}</div>
    );
  }

export interface ITextList {
    children?:  Array<ITextListItem>,
    columns?: 1 | 2,
    variant?: notationTypes,
    [x: string]: any    
};

/**
 * Custom implementation of List, typically used inside a TextLayoutBox component.  
 */
export const TextList : React.FC<ITextList> = ({
  children = [],
  columns = 1,
  notation = "circle-black",
  ...props
}) => {
  return (
    <div className={`text-list col--${columns}`} {...props}>
        {children.map( item => (<TextListItem notation={notation} {...item}/>))}
    </div>
  );
}

export default TextList;
