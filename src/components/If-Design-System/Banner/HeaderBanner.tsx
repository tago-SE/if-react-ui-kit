/*
   <span className="if title">If Villaförsäkring</span>cl
            <span className="if description">Se hur If Villaförsäkring förändrade Anna’s vardag</span>
            */


// import React from 'react';

// import { url } from 'inspector';
import React from 'react';
import './headerBanner.scss';

interface IHeaderBanner {
   title?: string,
   description?: string, 

}

export const HeaderBanner: React.FC<IHeaderBanner> = () => {
    return (<>
      <p> Here we are</p>
      <div className="if block">
        <div className="if container">
            <div className="hero-banner">
            <div className="hero-content">
              <h1 className="hero-title">I am John Doe</h1>
              <p className="hero-description">And I'm a Photographer</p>
              <button className="if button primary">Hire me</button>
            </div>
          </div>
        </div>
      </div>

    <section className="if hero reverse">
      <div className="if container">
        <div className="if content">
          <h1 className="if heading largest">Join our developer community</h1>
          <p className="if text lead">
            Because Klarna isn’t made up of jobs. It’s made up of people. People who want to unlock their potential. Bold people. Curious. Open. Quirky. Optimistic. People who want more than a job.
          </p>
          <button type="button" className="if button primary large">Find your next career</button>
        </div>
        <div className="if image studio" 
          style={{backgroundImage: "url(https://design.if.eu/images/hug.png)", backgroundSize: "40rem", backgroundPosition: "left top 0rem" }}></div>
      </div>
    </section>


    
        {/* <div className = "image-banner">
          <img src="/w3images/wedding.jpg" alt=""/>
          <span className="banner title">If Villaförsäkring</span>
          <span className="banner description">Se hur If Villaförsäkring förändrade Anna’s vardag</span>
        </div> */}
        <p>
            Hi
        </p>
        {/* <section className="if hero reverse">
          <div className="if container">
            <div className="if content">
              <h1 className="if heading larger">Det oknepiga försäkringsbolaget</h1>
              <p className="if text lead">
                Skaffa rätt skydd för ditt hem och dina saker
              </p>
              <button type="button" className="if button primary large" style={{marginTop: "auto"}}>Hitta försäkring</button>
            </div>
            <div className="if image studio" style={{backgroundImage: "url(https://design.if.eu/images/hug.png", backgroundSize: "40rem", backgroundPosition: "left top 0rem"}}></div>
          </div>
        </section> */}
    </>);
}

export default HeaderBanner;