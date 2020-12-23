import React from 'react';

import { Block } from '../../components/If-Design-System/Container';
import { Heading } from '../../components/If-Design-System/Heading';

import { Teaser, TeaserContainer } from '../../components/If-Design-System/Teasers'

const ArticlesListBlock = () => {

    const profiles = [
      { 
        name: "How you grow at If",
        workRole: "Engineering Manager",
        imageUrl: "https://www.klarna.com/assets/sites/13/2020/07/23175739/Engineering_Alexandre-Borel-op-dm.jpg",
        link: { name: "Read their story", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
      },
      { 
        name: "Our Tech Stack",
        workRole: "Full Stack Developer",
        imageUrl: "https://miro.medium.com/max/1024/1*H53H7hTwiUyr9M3IqeENcQ.png",
        link: { name: "Read their story", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
      },
      {   
        name: "Sharing is Caring",
        workRole: "ShareIT is a variety of ways to connect with colleagues in If and outside. It's an umbrella of cross country and unit sharing in multiple ways. ShareIT@If is our external events where we showcase what we do to the world. This way we give back to the tech community and reach out beyond If.",
        imageUrl: "https://www.klarna.com/assets/sites/13/2020/07/23175739/Engineering_Alexandre-Borel-op-dm.jpg",
        link: { name: "Find out more about ShareIT", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
      },
      
    ]
  
    /*
    Sharing is caring
ShareIT is a variety of ways to connect with colleagues in If and outside. It's an umbrella of cross country and unit sharing in multiple ways. ShareIT@If is our external events where we showcase what we do to the world. This way we give back to the tech community and reach out beyond If.

Join next time
In Sweden

In Finland

Would you like to contribute? Get in touch with Per Ol-Ers.
*/
    return (<>
    
<a href="https://www.klarna.com/careers/life-at-klarna/" target="" className="if">
  (Klarna blog article list page example)
  This would be a teaser section to the ArticleList page...
</a>

        <Block>
          <div className="if container center">
            <Heading rank={2} size="large" trailingClassName="center" style={{ bottomMargin: "4rem"}}>Community</Heading>
            <TeaserContainer>
              {profiles.map(profile => <Teaser 
                  title={profile.name} 
                  text={profile.workRole}
                  image={ { path: profile.imageUrl} }
                  link={{ name: profile.link.name, path: profile.link.path, target: ""}}
              />)}
            </TeaserContainer>
          </div>    
      </Block>
    </>);
}

export default ArticlesListBlock;