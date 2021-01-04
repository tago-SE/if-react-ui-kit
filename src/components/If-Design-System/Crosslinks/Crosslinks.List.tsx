import React, { ReactNode } from 'react';

interface IListProps {
    title:string,
    href: string     
    [x: string]: any,
}

export const ListCrosslink: React.FC<IListProps> = ({
    title,
    href,
    ...props
}) => {
    return (
        <li className="if" role="presentation" {...props}>
            <a className="if standalone" href={href}>{title}</a>
        </li>
    );
}

interface IListContainerProps {
    children?: ReactNode,
    title?: string,
    titleSize?: 'largest' | 'larger' | 'large' | 'medium' | 'small' | 'smallest',
    [x: string]: any,
}

export const ListColumnCrosslink: React.FC<IListContainerProps> = ({
    children = null,
    title = "",
    titleSize = "medium",
    ...props
}) => {
    return (
        <div className="if col">
            <h2 className={`if heading ${titleSize}`}>{title}</h2>
            <ul role="presentation" className={`if crosslinks list`} {...props}>{children}</ul>
        </div> 
    );
}

interface IContainerProps {
  children?: ReactNode,  
  columns?: 1 | 2 | 3 | 4 | 5,
  [x: string]: any,
}

export const ListColumCrosslinkContainer: React.FC<IContainerProps> = ({
  children = null,
  columns = 3,
  ...props
}) => {
  if (!children) return null;
  let rows: any = [];
  let cols: any = [];
  React.Children.forEach(children, (child: any) => {
    if (child.type === ListColumnCrosslink ) {
      cols.push(child);
      if (cols.length >= columns) {
        rows.push(React.createElement("div", { className: "if row"}, cols));
        cols = [];
      }
    }
  });
  if (cols.length > 0) {
    rows.push(React.createElement("div", { className: "if row"}, cols));
  }
  return (
      <div className="if container" {...props}>
        {rows}
      </div> 
  );
}