// import React from "react";
import { Container, Block } from "../../components/If-Design-System/Container";
import { GridContainer, GridRow, GridItem } from "../../components/If-Design-System/Grid";

import { Main } from "../../components/If-Design-System/Main";
import { Heading, TitleHeading } from "../../components/If-Design-System/Heading";
import { Avatar } from "../../components/If-Design-System/Avatar";

import { TextBody } from "../../components/If-Design-System/Text/Text.Body";

export const BlogPage = () => {

    return (
        <Main>
            <Block trailingClassName="light">
                
                <Container>
                    <GridContainer>
                        <GridRow>
                            <GridItem huger={12}>
                                <Heading marginBottom="0px">Volvia case study</Heading>
                                <hr className="if" style={{paddingBottom: "0px"}}/>
                            </GridItem>
                        </GridRow>
                        <GridRow>
                            <GridItem xs={1}>
                                <Avatar/>
                            </GridItem>
                            <GridItem xs={10}>
                                <p>Hiho</p>
                            </GridItem>
                        </GridRow>
                        <GridRow>
                            <GridItem huge={12}>
                                <br />
                                <img className="if image studio responsively-lazy" alt="" src="https://v.imgi.no/vsg3eefy2v-SQUARE/400" 
                                data-srcset="https://v.imgi.no/vsg3eefy2v-SQUARE/400 400w, https://v.imgi.no/vsg3eefy2v-SQUARE/560 560w"
                                style={{width: "95%"}}/>
                                <p className="if preview">
                                    Selv om skolene nå åpner opp er det mange barn som fortsatt ikke får møtt klassekameratene sine som
                                    følge av koronapandemien. Derfor tar If klasserommet hjem til barna.
                                </p>
                            </GridItem>
                        </GridRow>
                    </GridContainer>
                    
                    <div className="if content">
                        <Heading marginBottom="0px">Volvia</Heading>
                        <hr className="if" style={{paddingBottom: "0px"}}/>
                        <p className="if preview">
                            Selv om skolene nå åpner opp er det mange barn som fortsatt ikke får møtt klassekameratene sine som
                            følge av koronapandemien. Derfor tar If klasserommet hjem til barna.
                        </p>
                  
                        <div className="if meta">
                            <ul className="if tags">
                                <li className="if">
                                    <a href="/asd" className="if tag passive">Case study</a>
                                </li>
                            </ul>
                            <small className="if author">Alexander Vassbotn Røyne-Helgesen</small><br />
                                <small className="if extras">
                                <time className="if" dateTime="2020-04-20">04.20.2020</time><br />
                                </small>
                        </div>
                    </div>
                    <hr className="if" />
                </Container>
            </Block>


            {
            /*
             *      Content Area
             */
            }
            <Block>
                {/* The width must be default when the display is under a certain size*/}
                <div className="if container">
                    <Heading size="largest" rank={1} trailingClassName="center">
                        Body text modules
                    </Heading>

                    <TitleHeading size="smallest" rank={4}>
                        Blabla
                    </TitleHeading>
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
                </div>
            </Block>

            {
            /*
             *      Author Section
             */
            }

            <Block trailingClassName="dark">
                <Container trailingClassName="center">

                <Avatar/>
                <div className="ecmt-grid">
                    <figure className="ecmt-teaser-image ecmt-teaser-image-is-round ecmt-teaser-image-medium">
                        <img src="//cdnsc.azureedge.net/resources/circle-contact-erik-van-der-hejden-s270x268-sha2Iacu1x00bdgkqtiuYu1Z-h9DTZ0.jpg" alt="Erik van der Heijden" title="Erik van der Heijden" />
                    </figure>
                    <h3>Erik van der Heijden</h3>
                    <p>Senior Risk Engineer, If</p>
                </div>
                </Container>
            </Block>
            
            {
            /*
             *     Related Articles
             */
            }
            <Block>
                <Container trailingClassName="center">
                    <TitleHeading rank={4} size="small" marginBottom="0px">Next</TitleHeading>
                    <hr className="if" style={{paddingBottom: "0px"}}/>
                    <ul className="if teasers">
                        <li className="if teaser">
                            <h3 className="heading-smallest">Risk Consulting 2/2019</h3>
                            <p>There are other articles that might interest you in Risk Consulting, issue 2/2019. Did you already read them?</p>
                            <a href="/large-enterprises/insight/risk-consulting-magazine/risk-consulting-2019-2"
                            title="Read all articles in Risk Consulting 2/2019" target="" className="if standalone">
                            Read all articles in Risk Consulting 2/2019
                            </a>
                        </li>
                        <li className="if teaser">
                            <h3 className="heading-smallest">Earlier issues</h3>
                            <p>Read also the earlier issues of Risk Consulting.</p>
                            <a href="/large-enterprises/insight/risk-consulting-magazine" title="See all issues of Risk Consulting" target="" className="if standalone">
                            See all issues of Risk Consulting
                            </a>
                        </li>
                        <li className="if teaser">
                            <h3 className="heading-smallest">Watch videos</h3>
                            <p>See Erik van der Heijden, Senior Risk Engineer, If, talk about cyber risks of industrial control systems. And watch other videos about cyber.</p>
                            <a href="/large-enterprises/insight/cyber-risk/cyber-videos" 
                             title="Experts talking about cyber risks" target="" className="if standalone">
                            Experts talking about cyber risks
                            </a>
                        </li>
                    </ul>
                </Container>
            </Block>
        </Main>
    );
}

export default BlogPage;