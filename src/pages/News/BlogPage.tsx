// import React from "react";
import { Container, Block } from "../../components/If-Design-System/Container";
import { Main } from "../../components/If-Design-System/Main";
import { Heading, TitleHeading } from "../../components/If-Design-System/Heading";
import { Avatar } from "../../components/If-Design-System/Avatar";

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


            {
            /*
             *      Content Area
             */
            }

            <div className="if block">
                <div className="if container">
                    <Heading size="largest" rank={1} trailingClassName="center">
                        Body text modules
                    </Heading>
                
                </div>
            </div>
            <div className="if block">
                    <div className="if container">
                     
                    <div className="if row">
                        <div className="if col-6--xs col-6--md">
                            <p className="if text body">
                                Nu är semestertiden över för de flesta av oss och förhoppningsvis har ni haft en härlig sommar. Utöver
                                strand, hängmatta och grill så innebär ledigheten en möjlighet att reflektera och stanna upp. För mig
                                innebär höstterminen en möjlighet att sätta upp nya mål. Det är ett utmärkt tillfälle att ta tag i de där
                                sakerna som inte riktigt prioriterats de senaste månaderna. Jag ser över sparandet, försäkringar och diverse
                                andra viktiga saker som inte känns lika intressant under de varmaste sommarmånaderna.
                            </p>
                            <p className="if text body">
                                Min sommar bestod inte bara av varma sommardagar utan även tillskott i familjen. För att ge vår dotter ett
                                tillskott i framtiden har vi diskuterat hur vi vill spara till henne redan nu. Det kan upplevas som
                                krångligt och långt bort men ofta ett välkommet tillskott för barnet i framtiden. Det finns många
                                anledningar att spara till sina barn, barnbarn eller kanske barn till dina nära och kära. Du kanske vill
                                hjälpa till med pengar till ett körkort, till utlandsstudier eller till ett lägenhetsköp – men inte vet hur
                                du ska göra?
                            </p>
                        </div>

                        {/* <Column trailingClassName="-6--xs col-6--md">
                            <p className="if text body">
                                Jag har valt att öppna en Kapitalförsäkring Barn med min dotter som förmånstagare. Anledningen till detta är
                                att jag på ett enklare sätt kan administrera kontot och bestämmer när pengarna ska betalas ut. Om pengarna
                                ska betalas ut vid barnets 18-årsdag, senare eller löpande är ett beslut jag och min sambo inte behöver ta
                                nu. Om jag dör är jag trygg med att pengarna tillfaller förmånstagaren (min dotter).
                            </p>
                            <p className="if text body">
                                Utöver kapitalförsäkring kan du välja att öppna ett konto direkt i barnets namn. Kontot står i barnets namn
                                men administreras av föräldrarna. Vid barnets 18-årsdag övergår kontot helt till barnet.
                            </p> 
                        </Column> */}
                    </div>
                </div>
            </div>

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