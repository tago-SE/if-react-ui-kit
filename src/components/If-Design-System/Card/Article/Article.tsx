import React from 'react';

interface ITag {
    name: string,
    href: string,
}

interface IImage {
    src: string,
    alt?: string,
}

interface ILink {
    href: string,
    target?: string, 
}

interface IExtras {
    dateTime?: string,
    likes?: number,
    comments?: number,    
}

interface IProps {
    title: string,
    text: string, 
    image: IImage,  
    link: ILink,  
    categoryName?: string,
    author?: string,
    tags?: Array<ITag>,
    extras?: IExtras,
    type?: "across" | "default" | "reverse",
    [x: string]: any
}

export const Article: React.FC<IProps>= ({
    title,
    text,
    author = "",
    image,
    categoryName = null,
    tags = [],
    extras = null,
    link,
    type = "default",
    ...props
}) => {

    const getClassName = () => {
        if (type === "across") return "if card article across";
        if (type === "reverse") return "if card reverse article across";
        return "if card article";
    }
    
    return (
        <li className={getClassName()} {...props}>
            <div className="if content">
                <span className="if category">
                    {categoryName}
                </span>
                <h3 className="if title heading small">
                    <a href={link.href} target={link?.target} className="if">
                        {title}
                        <span className="if inline-nowrap">
                            ﻿<span className="if icon ui arrow-right"/>
                        </span>
                    </a>
                </h3>
                <p className="if preview">{text}</p>
                <div className="if meta">
                    <ul className="if tags">
                        {tags.map((tag: ITag) => (
                            <li className="if">
                                <a href={tag.href} className="if tag passive">{tag.name}</a>
                            </li>
                        ))}
                    </ul>
                    <small className="if author text meta">{author}</small>
                    {extras ? (
                        <small className="if extras">
                            <time className="if" dateTime="2020-04-20">{extras?.dateTime}</time><span className="if likes">{extras?.likes}</span>
                            <span className="if comments">{extras?.comments}</span>
                        </small>
                    ) : null}
                </div>
            </div>
            <span className="if image lifestyle" style={{height: "auto"}}>
                <img alt={image.alt || ""} src={image.src} className="if" style={{height: "100%"}}/>
            </span>
        </li>
    );
};

export default Article;