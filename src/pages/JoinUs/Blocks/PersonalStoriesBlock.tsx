import React from 'react';

import { Block, Container } from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Layout/Typography/Heading';
import { Teaser } from '../../../components/If-Design-System/Card/Teaser'
import { TeaserList } from '../../../components/If-Design-System/Card/Teaser';

/*
  https://www.klarna.com/careers/personal-stories/alexandre-borel/
*/

const PersonalStoriesBlock = () => {

    const profiles = [
      { 
        name: "Mr. Arch Engineer",
        workRole: "Engineering Manager",
        imageUrl: "https://www.klarna.com/assets/sites/13/2020/07/23175739/Engineering_Alexandre-Borel-op-dm.jpg",
        link: { name: "Read more", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
      },
      { 
        name: "The Almighty Loaf ",
        workRole: "Senior Engineer",
        imageUrl: "https://www.klarna.com/assets/sites/13/2020/07/23175739/Engineering_Alexandre-Borel-op-dm.jpg",
        link: { name: "Read more", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
      },
      {   
        name: "Just another miracle worker",
        workRole: ".NET Developer",
        imageUrl: "https://www.klarna.com/assets/sites/13/2020/07/23175739/Engineering_Alexandre-Borel-op-dm.jpg",
        link: { name: "Read more", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
      },
    ]
  
    return (
      <Block className="dark">
        <Container>
          <Heading rank={2} size="medium" trailingClassName="center" style={{ marginBottom: "25px"}}>Meet our developers</Heading>
          <p className="if text" style={{width: "76%", marginBottom: "60px"}}>
            You’ll meet all kinds of people here. Every day they move If forward. They shape our products. They shape our identity. That makes them our biggest assets. Here are just a few of them.
          </p>
          <TeaserList>
            {profiles.map(profile => <Teaser 
                heading={{children: profile.name}}
                text={profile.workRole}
                image={ { src: profile.imageUrl} }
                link={{ title: profile.link.name, href: profile.link.path, target: ""}}
            />)}
          </TeaserList>
        </Container>    
      </Block>
    );
}

export default PersonalStoriesBlock;