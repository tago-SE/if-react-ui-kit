
// import { Container } from '../../../components/If-Design-System/Container';
import { Article, ArticleList, BlogBlock } from '../../../components/If-Design-System/Card/Article';
import { Heading } from '../../../components/If-Design-System/Layout/Typography/Heading';

export const ArticleSection = () => {
    return (
        <BlogBlock>
            <Heading>Articles</Heading>
            <ArticleList>
                <Article 
                    variant=""
                    title="Den viktigste grunnen til å forsikre hunden din"
                    text="
                    Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                    grunner. Med hundeforsikring slipper du det."
                    image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                    href="/link/to/article"
                    tags={[
                        {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                        {name: "Valp", href: "/articles/valp"},
                    ]}
                    author="Alexander Vassbotn"
                    categoryName="Blog post"
                />
                <Article 
                    variant=""
                    title="Den viktigste grunnen til å forsikre hunden din"
                    text="
                    Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                    grunner. Med hundeforsikring slipper du det."
                    image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                    href="/link/to/article"
                    tags={[
                        {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                        {name: "Valp", href: "/articles/valp"},
                    ]}
                    author="Alexander Vassbotn"
                    categoryName="Blog post"
                />
                <Article 
                    variant="across"
                    title="Den viktigste grunnen til å forsikre hunden din"
                    text="
                    Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                    grunner. Med hundeforsikring slipper du det."
                    image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                    href="/link/to/article"
                    tags={[
                        {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                        {name: "Valp", href: "/articles/valp"},
                    ]}
                    author="Alexander Vassbotn"
                    categoryName="Blog post"
                />
                <Article 
                    variant="across"
                    reverse={true}
                    categoryName="Blog post"
                    title="Den viktigste grunnen til å forsikre hunden din"
                    text="
                    Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                    grunner. Med hundeforsikring slipper du det."
                    image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                    href="/link/to/article"
                    tags={[
                        {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                        {name: "Valp", href: "/articles/valp"},
                    ]}
                    author="Alexander Vassbotn"
                    extras={{likes: 100, comments: 25, dateTime: "25.11.2020"}}
                
                />
                <Article 
                    variant="list"
                    title="Den viktigste grunnen til å forsikre hunden din"
                    text="
                    Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                    grunner. Med hundeforsikring slipper du det."
                    image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                    href="/link/to/article"
                    tags={[
                        {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                        {name: "Valp", href: "/articles/valp"},
                    ]}
                    author="Alexander Vassbotn"
                    categoryName="Blog post"
                />
                <Article 
                    variant="list"
                    reverse={true}
                    categoryName="Blog post"
                    title="Den viktigste grunnen til å forsikre hunden din"
                    text="
                    Blir hunden din alvorlig syk, er det vondt å takke nei til livreddende behandling av økonomiske
                    grunner. Med hundeforsikring slipper du det."
                    image={{ src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" }}
                    href="/link/to/article"
                    tags={[
                        {name: "Ta vara på hund", href: "/articles/ta-vara-pa-hund"},
                        {name: "Valp", href: "/articles/valp"},
                    ]}
                    author="Alexander Vassbotn"
                    extras={{likes: 100, comments: 25, dateTime: "25.11.2020"}}
                
                />
            </ArticleList>
        </BlogBlock>
    );
}

export default ArticleSection;