import React from 'react';

import { Block, Container } from '../../components/If-Design-System/Container';
import { Content } from "../../components/If-Design-System/Content";
import { Main } from '../../components/If-Design-System/Main';
import { VideoContent } from '../../components/If-Design-System/Video';
import { Heading } from '../../components/If-Design-System/Heading';

/*
https://www.klarna.com/careers/personal-stories/alexandre-borel/

*/

import RoleListBlock from './Blocks/RoleListBlock';
import PersonalStoriesBlock from './Blocks/PersonalStoriesBlock';
import BenefitsListBlock from './Blocks/UspBenefitsListBlock';
import GrowthListBlock from './Blocks/UspGrowthListBlock';
import QAListBlock from './Blocks/QAListBlock';

const CareerPage = () => (
   <Main>

    <Block>
      <section className="if hero ">
        <div className="if container">
          <div className="if content">
            <h1 className="if heading larger">Join our developer community</h1>
            <p className="if text lead" id="hero_intro">
              If is made up of people. People who want to unlock their potential. Bold people. Curious. Open. Quirky. Optimistic. People who want more than a job.
            </p>
            <p className="if text lead">Interested in life at If?</p>
            <a href="https://if.wd3.myworkdayjobs.com/Careers" target="" className="if button primary removerightmargin ">
              Start your next career 
              <span className="if white icon ui arrow-right"></span>
            </a>
          </div>
          <div className="if image studio" 
            style={{backgroundImage: "url(https://design.if.eu/images/hug.png)", width: "100%", backgroundSize: "40rem", backgroundPosition: "left top 0rem"}} 
          />
        </div>
      </section>
    </Block>

    {/*
      Alternative video, maybe better
    */}
    <div className="if block" style={{padding: "8rem"}}>
      <section className="if split">
        <Container>
          <Content>
            <Heading size="large" rank={2}>Why If?</Heading>
            <p className="if text body">
              Insurance is a vital part of a well-functioning and evolving society. We make sure our customers are correctly insured and feel confident enough to face risks and build for the future.
              When something happens, we help them rebuild and recover. We are there both at defining moments and for everyday matters. Our actions today have a big impact on our customers' future lives and businesses.
            </p>  
            <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a>
          </Content>

            <VideoContent 
              url="https://www.dreambroker. /channel/qtauayyk/v8ukrs97/get/fullhd.mp4" 
              posterUrl="https://v.imgi.no/cxb3sdbcsn-MOODBOARD/2042"
              coverTitle="Purpose"
              coverDescription="We give people confidence today to shape their tomorrow"
            />
        </Container>
      </section>
    </div>
    

    <Block>
      <Container>
        <div className="editorial-text-container" style={{width: "80%"}}>
          <Heading rank={2} size="large">We are constantly looking for new talents</Heading>
          <p>At If we are working to offer highest quality insurances and services to our 3.6 million customers throughout the Nordic Region. We are constantly working to improve our services and contribute to a positive social development. Our employees' skills and dedication are part of our absolute strengths and we are constantly looking for new talents.</p>
        </div>
      </Container>
    </Block>

    <RoleListBlock />

    <Block>
      {/*
        Need fix, not yet implemented as a complete component
      */}
      <section className="if split">
            <div className="if container">
              <div className="if content">
                <Heading size="medium" rank={3}>If Students</Heading>
                <p className="if text body">
                  We believe that students and new graduates are our future. That’s why we grow our teams with upcoming, hard-working talent. 
                  At If, you’ll gain vital experience contributing to – and being mentored at – a trailblazing, nordic company. To kick-start your career, see our open internships and positions.
                </p>
                <div className="if form-group">
                  <button type="button" className="if button primary large">Learn more</button>
                  <button type="button" className="if button tertiary large">Open positions</button>
                </div>
                {/* <a href="/asdasd" className="if standalone">Läs mer om vår drulleförsäkring</a> */}
              </div>
              <VideoContent 
                url="https://www.youtube.com/watch?v=VAC-5BQnuXI&amp;list=PL2satA_B-xnSAxmFXHgb1tsaVJ_Pfhrg2" 
                coverTitle="The Almighty Loaf"
                coverDescription="We are all yeast m'lady"
              />
            </div>
          </section>
    </Block>

    <Block>
      <Container>
        <div className="editorial-text-container" style={{width: "70%"}}>
          <Heading rank={2} size="large">Work environment and quality of life in focus</Heading>
          <p>
            The working culture is open and inclusive, honest and trustworthy, with clear expectations that everyone takes responsibility and initiative. 
            We encourage creativity, innovation and internal mobility.
          </p>
          <p>We want our employees to feel good, enjoy and have fun at work. Our regular employee surveys show that. 
            We also contribute to a good balance between work and privacy, taking into account the different phases of life. 
            In addition to exciting work tasks and a nice workplace, we offer good employee benefits.</p>
          {/* <h2>Follow us on LinkedIn</h2>
          <p>See who you know at If and network with us. Follow us on <a href="https://www.linkedin.com/company/if-p&amp;c-insurance" title="linkedIn" target="_blank">LinkedIn</a></p> */}
        </div>
      </Container>
    </Block>

    

    <BenefitsListBlock />
    <GrowthListBlock />
    <PersonalStoriesBlock />
    <QAListBlock />

    <Block>
      <section className="if hero">
        <div className="if container">
          <div className="if content" style={{width: "60%"}}>
            <h1 className="if heading medium">Start your next career at If</h1>
            <br />
            <br />
            <div className="if form-group">
              <button type="button" className="if button primary large">
                Available roles
                {/* <span className="if white icon ui arrow-right"></span> */}
              </button>
              <button type="button" className="if button tertiary large"> 
                Follow us on LinkedIn
                {/* <span className="if white icon ui linkedin"></span> */}
              </button>
            </div>
          </div>
        </div>
      </section>

    </Block>
  </Main>
);

export default CareerPage;