import React from 'react';

interface ITag {
    name: string,
    href: string,
}

interface IImage {
    src: string,
    alt?: string,
}

interface IArticle {
    title: string,
    href: string,  
    text?: string, 
    image: IImage,  
    categoryName?: string,
    author?: string,
    tags?: Array<ITag>,
    dateTime?: string,
    likes?: number,
    comments?: number
    variant?: "" | "across" | "list",
    reverse?: boolean,
    titleMarginBottom?: string,
    [x: string]: any
};

export const Article: React.FC<IArticle>= ({
    title,
    href,
    text = "",
    author = "",
    image,
    reverse = false,
    categoryName = null,
    tags = [],
    dateTime = undefined,
    likes = undefined,
    comments = undefined,
    titleMarginBottom = "",
    variant = "",
    ...props
}) => {
    const shouldHideLikesAndcomments = () => {
        return !(likes || comments);
    }
    return (
        <li className={`if card ${reverse ? "reverse " : ""}article ${variant}`} {...props}>
            <div className="if content" style={{paddingTop: "2rem"}}>
                {categoryName ? (
                    <span className="if category">
                    {categoryName}
                </span>
                ) : null}
                <h3 className="if title heading smallest"> 
                    <a href={href} target="" className="if">
                        {title}
                        <span className="if inline-nowrap">
                            ﻿<span className="if icon ui arrow-right"/>
                        </span>
                    </a>
                </h3>
                {text ? (<p className="if preview">{text}</p>): null}
                <div className="if meta" style={{marginTop: "0px", paddingTop: "0.5rem"}}>
                    <ul className="if tags">
                        {tags.map((tag: ITag) => (
                            <li className="if" key={tag.name}>
                                <a href={tag.href} className="if tag passive">{tag.name}</a>
                            </li>
                        ))}
                    </ul>
                    <small className="if author text meta" style={{marginBottom: "0px"}}>{author}</small>
                    <small className="if extras">
                        {shouldHideLikesAndcomments() ? (
                            <time className="if" style={{borderRight: "none"}}>{dateTime}</time>
                        ) : (<>
                            <time className="if">{dateTime}</time>
                            <span className="if likes">{likes}</span>
                            <span className="if commen  ts">{comments}</span>
                        </>)}
                    </small>
                </div>
            </div>
            <span className="if image lifestyle" style={{height: "auto"}}>
                <img alt={image.alt || ""} src={image.src} className="if" style={{height: "100%"}}/>
            </span>
        </li>
    );
};

export default Article;