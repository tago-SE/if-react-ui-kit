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

interface IProps {
    title: string,
    text: string, 
    image: IImage,  
    author?: string,
    categoryName?: string,
    tags?: Array<ITag>             
    link: ILink   
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
                </div>
            </div>
            <span className="if image lifestyle" style={{height: "auto"}}>
                <img alt={image.alt || ""} src={image.src} className="if" style={{height: "100%"}}/>
            </span>
        </li>
    );
};

export default Article;