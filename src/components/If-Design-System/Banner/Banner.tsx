import React from 'react';

interface ILink {
    name: string, 
    path: string
}

interface IProps {
    title: string,
    link: ILink,
    className?: string,
    children?: any, 
    [x: string]: any
};

export const IFClaimsBanner : React.FC<IProps> = ({
  className = "",
  link = undefined,
  title = "",
  children=null,
  ...props
}) =>  (
    <div className={`if banner claims${(className ? " " + className : "")}`} {...props}>
        <div className="if container">
            <span className="if title">{title}</span>
            { link ? ( <a className="if standalone" href={link.path}>{link.name}</a>) : null }
        </div>
    </div>
);
