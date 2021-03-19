import React from "react";

// import { Container, Block } from "../../components/If-Design-System/Container";
// import { GridContainer, GridRow, GridItem } from "../../components/If-Design-System/Grid";

import { Main } from "../../components/If-Design-System/Main";
import { Heading } from "../../components/If-Design-System/Layout/Typography/Heading";
import { Article, ArticleList, BlogBlock } from '../../components/If-Design-System/Card/Article';

const article =
    {
        title: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image: { src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" },
        href: "/link/to/article",
        tags:  [
            {name: "Blog", href: "/articles/valp"},
        ],
        author: "Cicero",
        category: "",
        dateTime: "21.05.2020", 
        likes: 10, 
        comments: 2
    };

const articles = [article, article, article];


export const ArticleListPage = () => {
    // const [filter, setFilter] = React.useState("all articles");
    return (
        <Main>
            <BlogBlock>
            <Heading>Life at If</Heading>
            <ArticleList style={{gridAutoRows: "1fr", gridTemplateRows: "1fr"}}>
                {articles.map(article => (
                    <Article 
                        type="across"
                        title={article.title}
                        text={article.text}
                        image={article.image}
                        href="/link/to/article"
                        tags={article.tags}
                        author={article.author}
                        categoryName={article.category}
                        dateTime={article.dateTime}
                        comments={article.comments}
                        likes={article.likes}
                    />
                ))}
            </ArticleList>
        </BlogBlock>
        </Main>
    );
}

export default ArticleListPage;