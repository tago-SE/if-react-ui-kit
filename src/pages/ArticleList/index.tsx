import React from "react";

import { Container, Block } from "../../components/If-Design-System/Container";
import { GridContainer, GridRow, GridItem } from "../../components/If-Design-System/Grid";

import { Main } from "../../components/If-Design-System/Main";
import { Heading } from "../../components/If-Design-System/Heading";
import { Article, ArticleList, BlogBlock } from '../../components/If-Design-System/Card/Article';


export const ArticleListPage = () => {
    return (
        <Main>
            <BlogBlock>
            <Heading>Life at If</Heading>
            <ArticleList>
                <Article 
                    type="default"
                    title="Den viktigste grunnen til å forsikre hunden din"
                    text="
                    Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                    grunner. Med hundeforsikring slipper du det."
                    image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                    link={{href: "/link/to/article"}}
                    tags={[
                        {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                        {name: "Valp", href: "/articles/valp"},
                    ]}
                    author="Alexander Vassbotn"
                    categoryName="Blog post"
                />
                <Article 
                    type="default"
                    title="Den viktigste grunnen til å forsikre hunden din"
                    text="
                    Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                    grunner. Med hundeforsikring slipper du det."
                    image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                    link={{href: "/link/to/article"}}
                    tags={[
                        {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                        {name: "Valp", href: "/articles/valp"},
                    ]}
                    author="Alexander Vassbotn"
                    categoryName="Blog post"
                />
            </ArticleList>
        </BlogBlock>
        </Main>
    );
}

export default ArticleListPage;