import React from 'react';

import { IFBlock, IFContainer} from '../../components/If-Design-System/Container';
import { IFContent } from "../../components/If-Design-System/Content";
import { IFMain } from '../../components/If-Design-System/Main';
import { IFVideoContent } from '../../components/If-Design-System/Video';
import { Heading } from '../../components/If-Design-System/Heading';
import { IFSuccessNotification } from '../../components/If-Design-System/Notification';
import GrowthTreeMock, { GrowthTreeMockColumn } from '../../components/Custom/GrowthTree';
import { Dunno } from '../../components/Custom/Dunno';

import { UspItem, UspList } from '../../components/If-Design-System/Usps';
/*

https://www.klarna.com/careers/personal-stories/alexandre-borel/

*/

import RoleListBlock from './RoleListBlock';
import PersonalStoriesListBlock from './PersonalStoriesListBlock';
import ArticlesListBlock from './ArticlesListBlock';

const OurCoreValues = () => {
  
  return (<>
    <ArticlesListBlock />
    <br />
    <br />
    <RoleListBlock />
    <br />
    <br />
    <PersonalStoriesListBlock />
  </>);
}



const JoinUsPage = () => (


  // style={{paddingTop: "5%"}} inside container
   <IFMain>
    <section className="if hero">
      <div className="if container">
        <div className="if content">
          <h1 className="if heading larger">If developer community</h1>
          <p className="if text lead" id="hero_intro">
            Here we showcase what we are passionate about, our tech stack
            how we work with personal growth and who we are looking for to join our teams.&nbsp;
          </p>
          <p className="if text lead">Interested in life at If?</p>
          <a href="/large-enterprises/insight/risk-consulting-magazine/risk-consulting-2020-4" target="" className="if button primary  removerightmargin ">
            Goto our blog
            <span className="if white icon ui arrow-right"></span>
          </a>
        </div>
        <div className="if image  ecmt-IFS-05865" style={{backgroundImage: "url(\"https://v.imgi.no/2l4bfymlr5-MOODBOARD/2042\")"}}></div>
      </div>
    </section>
   
{/* <div className="if block">
  <section className="if hero">
      <div className="if container" style={{paddingTop: "5%"}}>
        <div className="content" style={{width: "80%"}}>
          <h1 className="if heading larger">If developer community</h1>
          <p className="if text lead">
              Here we showcase what we are passionate about, our tech stack
              how we work with personal growth and who we are looking for to join our teams.&nbsp;
          </p>
          </div>
      </div> 
  </section>
</div> */}

<a href="https://www.klarna.com/careers/" target="" className="if">
  (klarna careers example)
</a>


<div className="if block">
  <div className="if container center"> 
  <h2 className="if heading larger center">Benefits</h2>
    <UspList>


      {/*
        Company wide bonus compensation policies
        Lunch contribution
        Support for parents
        
      */}
      <UspItem title="Monthlty Developer Forum" text="Take part in our knowledge sharing events across our tech community." />

      <UspItem title="A generous personal development budget" text="We are always investing in our people." />
      <UspItem title="A generous personal development budget" text="Yearly developer conference in Riga." />
      <UspItem title="ShareIT@If regular" text="Internal and external competence sharing meetups." />
      <UspItem title="Generous bonus compensation" text="Two yearly UX community conferences." />
      <UspItem title="Generous bonus compensation" text="..." />
      <UspItem title="Employee benefits" text="">Reduces lunch prices</UspItem>
      <UspItem title="Support for parents" text="Don't choose between work and family." />
    </UspList>
  </div>
</div>

<div className="if block light  block-padding-bottom-none">
  <div className="if container">
      <div className="if text layout columns">
        <div className="if text body">
          <div className="editorial-text-container"><h2>Our Tech Stack</h2>
            <p>Cyber threats are testing companies’ risk management. This is a particularly tough test, because a networked threat environment requires a networked defence – and a global threat requires global risk management.</p>
            <p><a href="/large-enterprises/insight/risk-consulting-magazine/risk-consulting-2018-1/more-cyber-attacks" title="summary from risk management day seminar 2018">Read the whole article</a></p></div>
          </div>
          <div className="if text body">
            <figure className="if">
              <img className="if image responsively-lazy" alt="fingers on computer key board" src="https://v.imgi.no/vv6pd2gajh-CONTENT/940" 
              data-srcset="https://v.imgi.no/vv6pd2gajh-CONTENT/940 940w, https://v.imgi.no/vv6pd2gajh-CONTENT/890 890w, https://v.imgi.no/vv6pd2gajh-CONTENT/670 670w, https://v.imgi.no/vv6pd2gajh-CONTENT/610 610w, https://v.imgi.no/vv6pd2gajh-CONTENT/360 360w, https://v.imgi.no/vv6pd2gajh-CONTENT/320 320w, https://v.imgi.no/vv6pd2gajh-CONTENT/300 300w"/>
            </figure>
        </div>
      </div>
    </div>
  </div>

 

{/* <section className="if hero">
    <div className="if container">
    <div className="if content">
    <h1 className="if heading larger">If developer community</h1>
    <p className="if text lead">
    Skaffa rätt skydd för ditt hem och dina saker
    </p>
    <button type="button" className="if button primary large" style={{marginTop: "auto"}}>Hitta försäkring</button>
    </div>
    <div className="if image studio" style={{backgroundImage: "url(\"https://design.if.eu/images/hug.png\")", backgroundSize: "40rem", backgroundPosition: "center top 0"}}></div>
    </div>
</section> */}

{/* <div className="ecmt-block ecmt-block-image ecmt-image ecmt-moodboard-other-stamholmen" style={{overflow: }}="overflow:visible">
    <div className="ecmt-page-container">
        <div className="ecmt-image-box  " style="position: relative;">
                <IFHeader className="ecmt-block-IFHeader">
                    
                    <h1 className="if heading larger">Work at If - in a versatile workplace</h1>
                    
                </IFHeader>
            <p className="if text lead">We offer a wide range career opportunities, creating great possibilities for every employee to build their own career.</p>

    <a href="https://if.wd3.myworkdayjobs.com/Careers" target="" className="if button primary  removerightmargin ">
    Careers
    <span className="if white icon ui arrow-right"></span>
    </a>

        </div>
    </div>
</div> */}


  {/* 
        END OF TOP PAGE
  */}




     <div className="if block" style={{paddingTop: "72px"}} data-anatomy="outline top">
        <section className="if split reverse">
          <div className="if container">
            <div className="if content">
              <h2 className="if heading larger">Spara till barnen</h2>
              <p className="if text lead">Sharing is caring</p>
              <p className="if text body">
                ShareIT is a variety of ways to connect with colleagues in If and outside. 
                It's an umbrella of cross country and unit sharing in multiple ways. ShareIT@If is our external events where we showcase what we do to the world. 
                This way we give back to the tech community and reach out beyond If.
              </p>
            </div>
            <div className="if image" style={{backgroundImage: "url(\"https://design.if.eu/images/hug.png\")", backgroundSize: "contain", backgroundPosition: "left center"}}></div>
          </div>
        </section>
      </div>


      <div className="if block">
        <section className="if split">
          <div className="if container">
            <div className="if content">
              <h2 className="if heading larger">Långsiktigt sparande</h2>
              <p className="if text lead">Spara till barnen och ge bort en tryggare framtid</p>
              <p className="if text body">
                Nu är semestertiden över för de flesta av oss och förhoppningsvis har ni haft en härlig sommar. Utöver
                strand, hängmatta och grill så innebär ledigheten en möjlighet att reflektera och stanna upp. För mig
                innebär höstterminen en möjlighet att sätta upp nya mål. Det är ett utmärkt tillfälle att ta tag i de
                där sakerna som inte riktigt prioriterats de senaste månaderna. Jag ser över sparandet, försäkringar
                och diverse andra viktiga saker som inte känns lika intressant under de varmaste sommarmånaderna.
              </p>
              <div className="if image" style={{backgroundImage: "url(\"https://if-brand-static-cdn.azureedge.net/images/documentation/If-lifestyle-comforting@3x.png\")", 
              width: "50%", backgroundSize: "contain", backgroundPosition: "right center"}}></div>
            </div>
  
          </div>
        </section>
      </div>
   
  
  
  
  
  
  
  
        <div className="if banner claims" data-anatomy="outline top">
          <div className="if container">
            <span className="if title">Start your next career at If.</span>
            <a className="if" href="https://if.wd3.myworkdayjobs.com/Careers/3/refreshFacet/318c8bb6f553100021d223d9780d30be">See available roles</a>
            <a className="if" href="https://forms.office.com/Pages/ResponsePage.aspx?id=Z3p-3mGu0kmXp1JskQrWdbFAT7tparhBhnlmnbYRzX1UQzFMUzRFQ1lKVlJPWEUwM1JPWVBOSUc3Ni4u">Couldn't find the role you were looking for?</a>
          </div>
        </div>
        <Dunno />
     



        <GrowthTreeMockColumn />
        
        <GrowthTreeMock />

        <IFBlock>
          <section className="if split">
            <div className="if container">
              <div className="if image" style={{backgroundImage: "url(https://test.developer.ifext.biz/content/grown_in_if.jpg)"}}></div>
              <div className="if content">
                <h2 className="if heading larger">How you grow in a year at If</h2>
                <p className="if text lead"><b>Spara till barnen och ge bort en tryggare framtid</b></p>
                <p className="if text lead"><b>Spara till barnen och ge bort en tryggare framtid</b></p>
                <p className="if text body">
                  Nu är semestertiden över för de flesta av oss och förhoppningsvis har ni haft en härlig sommar. Utöver
                  strand, hängmatta och grill så innebär ledigheten en möjlighet att reflektera och stanna upp. För mig
                  innebär höstterminen en möjlighet att sätta upp nya mål. Det är ett utmärkt tillfälle att ta tag i de
                  där sakerna som inte riktigt prioriterats de senaste månaderna. Jag ser över sparandet, försäkringar
                  och diverse andra viktiga saker som inte känns lika intressant under de varmaste sommarmånaderna.
                </p>
              </div>
            </div>
          </section>
        </IFBlock>

        <IFSuccessNotification>Hello there</IFSuccessNotification>
        <OurCoreValues />


        <div className="if block">
          <div className="if container">
          <div className="editorial-text-container"><h2>We are constantly looking for new talents</h2>
          <p>At If we are working to offer highest quality insurances and services to our 3.6 million customers throughout the Nordic Region. We are constantly working to improve our services and contribute to a positive social development. Our employees' skills and dedication are part of our absolute strengths and we are constantly looking for new talents.</p>
          <h2>Work environment and quality of life in focus</h2>
          <p>We are a modern and versatile workplace that offers a wide range of services and career opportunities. Our duties and roles require the right person for the job, while the educational background and experience may vary. The organization meets mathematicians, IT developers, lawyers, economists, salesmen, police officers, nurses, engineers and many other professions. The working culture is open and inclusive, honest and trustworthy, with clear expectations that everyone takes responsibility and initiative. We encourage creativity, innovation and internal mobility.</p>
          <p>We want our employees to feel good, enjoy and have fun at work. Our regular employee surveys show that. We also contribute to a good balance between work and privacy, taking into account the different phases of life. In addition to exciting work tasks and a nice workplace, we offer good employee benefits.</p>
          {/* <h2>Follow us on LinkedIn</h2>
          <p>See who you know at If and network with us. Follow us on <a href="https://www.linkedin.com/company/if-p&amp;c-insurance" title="linkedIn" target="_blank">LinkedIn</a></p> */}
          </div>
          </div>
        </div>
              

        <div className="if banner claims">
          <div className="if container">
            <p>See who you know at If and network with us. Follow us on <a href="https://www.linkedin.com/company/if-p&amp;c-insurance" title="linkedIn" target="_blank">LinkedIn</a></p>
          </div>
        </div>


         {/*
            Single Small Hero Block /w video
         */}
        <Heading size="large" rank={1}>This section should probably be in a different page "About If" or "Our Culture"</Heading>

        <IFBlock>
          <section className="if split small">
            <IFContainer>
              <IFContent>
              <Heading size="medium" rank={3}>Why If?</Heading>
                <p className="if text body">
                  Insurance is a vital part of a well-functioning and evolving society. We make sure our customers are correctly insured and feel confident enough to face risks and build for the future.
                  When something happens, we help them rebuild and recover. We are there both at defining moments and for everyday matters. Our actions today have a big impact on our customers' future lives and businesses.
                </p>  
                <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
              </IFContent>
              <IFVideoContent 
                  url="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" 
                  posterUrl="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042"
                  coverTitle="If Drulleförsäkring"
                  coverDescription="Se hur If Drulleförsäkring förändrade Anna's vardag"
                />
            </IFContainer>
          </section>
        </IFBlock>
        
        <div className="if block dark" style={{padding: "0px"}}>
          <section className="if split">
            <IFContainer>
              <IFContent>
                <Heading size="largest" rank={1}>Purpose</Heading>
                <p className="if text body">
                  Insurance is a vital part of a well-functioning and evolving society. We make sure our customers are correctly insured and feel confident enough to face risks and build for the future.
                  When something happens, we help them rebuild and recover. We are there both at defining moments and for everyday matters. Our actions today have a big impact on our customers' future lives and businesses.
                </p>  
                <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
              </IFContent>

                <IFVideoContent 
                  url="https://www.dreambroker. /channel/qtauayyk/v8ukrs97/get/fullhd.mp4" 
                  posterUrl="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042"
                  coverTitle="Purpose"
                  coverDescription="We give people confidence today to shape their tomorrow"
                />
            </IFContainer>
          </section>
          
          <section className="if hero">
            <div className="if container">
              <div className="if content">
                <Heading size="medium" rank={3}>Purpose</Heading>
                <p className="if text body">
                  Insurance is a vital part of a well-functioning and evolving society. We make sure our customers are correctly insured and feel confident enough to face risks and build for the future.
                  When something happens, we help them rebuild and recover. We are there both at defining moments and for everyday matters. Our actions today have a big impact on our customers' future lives and businesses.
                </p>
                <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
              </div>
              <IFVideoContent 
                url="https://www.youtube.com/watch?v=VAC-5BQnuXI&amp;list=PL2satA_B-xnSAxmFXHgb1tsaVJ_Pfhrg2" 
                coverTitle="The Almighty Loaf"
                coverDescription="We are all yeast m'lady"
              />
            </div>
          </section>
        </div>

         <div className="if video" data-anatomy="outline right">
          <video src="https://www.dreambroker.com/channel/qtauayyk/v8ukrs97/get/fullhd.mp4" preload="auto" poster="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042">
            Sorry, your browser doesn't support embedded videos, but don't worry, you can
            <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
            and watch it with your favorite video player!
          </video>
          <div className="if overlay">
            <span className="if title">If Villaförsäkring</span>
            <span className="if description">Se hur If Villaförsäkring förändrade Anna’s vardag</span>
            <button type="button" className="if play button secondary">
              Spela up filmen
            </button>
          </div>
        </div>

      </IFMain>
);

export default JoinUsPage;