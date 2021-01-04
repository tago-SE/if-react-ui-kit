import React from 'react';

import { Block } from '../../components/If-Design-System/Container';
import { Heading } from '../../components/If-Design-System/Heading';
import { Teaser } from '../../components/If-Design-System/Card/Teaser'
import { TeaserList } from '../../components/If-Design-System/Card/Teaser';

/*
  https://www.klarna.com/careers/personal-stories/alexandre-borel/
*/

const PersonalStoriesListBlock = () => {

    const profiles = [
      { 
        name: "Mr. Arch Engineer",
        workRole: "Engineering Manager",
        imageUrl: "https://www.klarna.com/assets/sites/13/2020/07/23175739/Engineering_Alexandre-Borel-op-dm.jpg",
        link: { name: "Read their story", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
      },
      { 
        name: "The Almighty Loaf ",
        workRole: "Full Stack Developer",
        imageUrl: "https://www.klarna.com/assets/sites/13/2020/07/23175739/Engineering_Alexandre-Borel-op-dm.jpg",
        link: { name: "Read their story", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
      },
      {   
        name: "Just another miracle worker",
        workRole: ".NET Developer",
        imageUrl: "https://www.klarna.com/assets/sites/13/2020/07/23175739/Engineering_Alexandre-Borel-op-dm.jpg",
        link: { name: "Read their story", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
      },
    ]
  
    return (
        <Block className="dark">
          <div className="if container center">
            <Heading rank={2} size="large" trailingClassName="center" style={{ bottomMargin: "4rem"}}>Here you will meet all kinds of people</Heading>
            <TeaserList>
              {profiles.map(profile => <Teaser 
                  heading={{children: profile.name}}
                  text={profile.workRole}
                  image={ { src: profile.imageUrl} }
                  link={{ title: profile.link.name, href: profile.link.path, target: ""}}
              />)}
            </TeaserList>
          </div>    
      </Block>
    );
}

export default PersonalStoriesListBlock;