import React from "react";

// import { Container, Block } from "../../components/If-Design-System/Container";
// import { GridContainer, GridRow, GridItem } from "../../components/If-Design-System/Grid";

import { Main } from "../../components/If-Design-System/Main";
import { Heading } from "../../components/If-Design-System/Heading";
import { Article, ArticleList, BlogBlock } from '../../components/If-Design-System/Card/Article';

const articles = [
    {
        title: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image: { src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" },
        link: "/link/to/article",
        tags:  [
            {name: "Blog", href: "/articles/valp"},
        ],
        author: "Cicero",
        category: "Blog",
        extras: {dateTime: "21.05.2020", likes: 10, comments: 2}
    },
    {
        title: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image: { src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" },
        link: "/link/to/article",
        tags:  [
            {name: "Blog", href: "/articles/category"},
        ],
        author: "Cicero",
        category: "Blog",
        extras: {dateTime: "21.05.2020", likes: 10, comments: 2}
    },
    {
        title: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image: { src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" },
        link: "/link/to/article",
        tags:  [
            {name: "Use case", href: "/articles/category"},
        ],
        author: "Cicero",
        category: "Use case",
        extras: {dateTime: "21.05.2020" }
    },
    {
        title: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        image: { src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" },
        link: "/link/to/article",
        tags:  [
            {name: "Developer story", href: "/articles/category"},
        ],
        author: "Cicero",
        category: "Developer story",
        extras: {dateTime: "21.05.2020" }
    }
];

export const ArticleListPage = () => {
    // const [filter, setFilter] = React.useState("all articles");
    return (
        <Main>
            <BlogBlock>
            <Heading>Life at If</Heading>
            <ArticleList>
                {articles.map(article => (
                    <Article 
                        type="default"
                        title={article.title}
                        text={article.text}
                        image={article.image}
                        link={{href: article.link}}
                        tags={article.tags}
                        author={article.author}
                        categoryName={article.category}
                        extras={article.extras}
                    />
                ))}
            </ArticleList>
        </BlogBlock>
        </Main>
    );
}

export default ArticleListPage;