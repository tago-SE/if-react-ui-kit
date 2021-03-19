// import React from "react";
import { Main } from "../../components/If-Design-System/Main";
import { Container, Block } from "../../components/If-Design-System/Container";
// import { GridContainer, GridRow, GridItem } from "../../components/If-Design-System/Grid";
// import { Main } from "../../components/If-Design-System/Main";
import { Heading } from "../../components/If-Design-System/Layout/Typography/Heading";
// import { Heading, TitleHeading } from "../../components/If-Design-System/Heading";
import { Avatar } from "../../components/If-Design-System/Avatar";
import { TextBody } from "../../components/If-Design-System/Text/Text.Body";

// import { TextBody } from "../../components/If-Design-System/Text/Text.Body";
import { LinkTag, TagContainer } from "../../components/If-Design-System/Tag";
import { ShareBanner } from "../../components/If-Design-System/Banner/ShareBanner";
import { Article, ArticleList } from '../../components/If-Design-System/Card/Article';
import { TeaserList, Teaser } from '../../components/If-Design-System/Card/Teaser';
import { KeyBenefitsBlockMock } from './KeyBenefitsArticle';


import './article.css';
import { ArticleFooter as AuthorSection } from './ArticleFooter'; 

const ArticleHeader = () => {

  return (
    <Block trailingClassName="dark">
      <Container>
      <header className="article-header">
        <section className="meta">
          <span className="date">Nov 3, 2020</span>
          <a className="if standalone" href="/some/link">Case study</a>
        </section>
        {/* <Heading size="larger">How Volvia integrated with our API-Products</Heading> */}
        <section className="profile">
          <Avatar />
          <p>By</p>
          <p className="username">If</p>
        </section>
        <img className="if image studio responsively-lazy" alt="" src="https://v.imgi.no/vsg3eefy2v-SQUARE/400" 
          data-srcset="https://v.imgi.no/vsg3eefy2v-SQUARE/400 400w, https://v.imgi.no/vsg3eefy2v-SQUARE/560 560w"
          style={{width: "100%"}}
        />
        <p className="if text lead">This is an ingress</p>
        {/* <p className="if">
            Selv om skolene nå åpner opp er det mange barn som fortsatt ikke får møtt klassekameratene sine som
            følge av koronapandemien. Derfor tar If klasserommet hjem til barna.
        </p> */}
        <hr className="if" style={{ paddingBottom: "0px", marginBottom: "0px"}}/>
        <ShareBanner companies={[
        {company: "facebook", href: "link/to/facebook", text: "Facebook" },
        {company: "twitter", href: "link/to/twitter", text: "Twitter" },
        {company: "linkedin", href: "link/to/linkedin", text: "LinkedIn" },
        ]}
        />
        <hr className="if" style={{marginTop: " 0px" }} />
      </header>  
      </Container>
     
    </Block>
   
  );
}

const ArticleContent = () => {
  return (
    <div className="article-content">
      <Heading size="small" rank={1} trailingClassName="center">
          Body text modules
      </Heading>

      <Heading size="smallest" rank={4}>
          Blabla
      </Heading>
      <p className="if text lead">
          This is some leading text... not sure what it is about
      </p>
      <TextBody>
          Nu är semestertiden över för de flesta av oss och förhoppningsvis har ni haft en härlig sommar. Utöver
          strand, hängmatta och grill så innebär ledigheten en möjlighet att reflektera och stanna upp. För mig
          innebär höstterminen en möjlighet att sätta upp nya mål. Det är ett utmärkt tillfälle att ta tag i de där
          sakerna som inte riktigt prioriterats de senaste månaderna. Jag ser över sparandet, försäkringar och diverse
          andra viktiga saker som inte känns lika intressant under de varmaste sommarmånaderna.
      </TextBody>
      <TextBody>
          Min sommar bestod inte bara av varma sommardagar utan även tillskott i familjen. För att ge vår dotter ett
          tillskott i framtiden har vi diskuterat hur vi vill spara till henne redan nu. Det kan upplevas som
          krångligt och långt bort men ofta ett välkommet tillskott för barnet i framtiden. Det finns många
          anledningar att spara till sina barn, barnbarn eller kanske barn till dina nära och kära. Du kanske vill
          hjälpa till med pengar till ett körkort, till utlandsstudier eller till ett lägenhetsköp – men inte vet hur
          du ska göra?
      </TextBody>

            
      <KeyBenefitsBlockMock />
      
      <Block>
        <Container>
          <Heading size="medium">Which APIs were used?</Heading>
          <TeaserList>
            {[1].map( _ => (<Teaser 
                heading={{children: "Hemförsäkring"}}
                image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", alt: ""}}
                text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                link={{href: "/to/api", title:"Try it now", target: ""}}
                linkImage
                style={{maxWidth: "360px"}}
            />))}
          </TeaserList>
        </Container>
      </Block>
    </div>
  );
}

const ArticleFooter = () => {

  const article = {
    title: "By Miles pay-by-mile car insurance",
    // text: "",
    image: { src: "https://www.if.no/magasinet/imageshop/img_shp_img_zkexuttycm-780x470.jpeg", alt: "image of puppy" },
    href: "/link/to/article",
    category: "Case study",
    extras: {dateTime: "Nov 3, 2020"}
  };

  const articles = [article, article, article];

  return (
    <footer className="article-footer">

      <TagContainer>
          <LinkTag href="link/to/category" name="Case study"/>
      </TagContainer>

      <Heading size="smallest">Share Article</Heading>

      <hr className="if" style={{ paddingBottom: "0px", marginBottom: "0px"}}/>
      <ShareBanner companies={[
        {company: "facebook", href: "link/to/facebook", text: "Facebook" },
        {company: "twitter", href: "link/to/twitter", text: "Twitter" },
        {company: "linkedin", href: "link/to/linkedin", text: "LinkedIn" },
      ]}
      />
       <hr className="if" style={{marginTop: " 0px" }} />

      <p className="if meta"></p>

      
      <AuthorSection />
      

      <Heading size="smallest">Related Articles</Heading>
      <ArticleList style={{ display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap"}}>
        {articles.map(article => (
          <Article 
              type=""
              title={article.title}
              image={article.image}
              href={article.href}
              titleMarginBottom="0px"
              categoryName={article.category}
              extras={article.extras}
              style={{maxWidth: "32%" }} // fix this should not be percentage
          />
        ))}
      </ArticleList>
    </footer>
  );
}
 
export const ArticlePage = () => {

    return (
      <Main>
        <ArticleHeader />
        <Block style={{paddingTop: "0px"}}>
          <Container>
    
              <ArticleContent />
              <ArticleFooter />
          </Container>
        </Block>
      </Main>
    );
}

export default ArticlePage;

