// import React from "react";
import { Container, Block } from "../../components/If-Design-System/Container";
import { Main } from "../../components/If-Design-System/Main";
import { Heading, TitleHeading } from "../../components/If-Design-System/Heading";

export const BlogPage = () => {

    return (
        <Main>
            <Block trailingClassName="light">
                <Container>
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

            <Block trailingClassName="dark">
                <div className="if container center">
                <div className="ecmt-grid">


                <div className="ecmt-grid-cell ecmt-width-1of3 ecmt-tablet-width-1of2 ecmt-mobile-width-1of1" id="e908c1e63a2240e3b48b612c360073ea">
                <figure className="ecmt-teaser-image ecmt-teaser-image-is-round ecmt-teaser-image-medium">
                    <img src="//cdnsc.azureedge.net/resources/circle-contact-erik-van-der-hejden-s270x268-sha2Iacu1x00bdgkqtiuYu1Z-h9DTZ0.jpg" alt="Erik van der Heijden" title="Erik van der Heijden" />
                </figure>


                <h3>Erik van der Heijden</h3>
                <p>Senior Risk Engineer, If</p>
                </div>
                </div>
                </div>
            </Block>
            <Block>
                <Container trailingClassName="center">
                    <TitleHeading rank={4} size="small" marginBottom="0px">Up next</TitleHeading>
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