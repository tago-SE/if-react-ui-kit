import React from 'react';

import { IFBlock, IFContainer} from '../../components/If-Design-System/Container';
import { IFContent } from "../../components/If-Design-System/Content";
import { IFVideoContent } from '../../components/If-Design-System/Video';
import { Heading } from '../../components/If-Design-System/Heading';
import { IFButton, IFButtonPrimary} from '../../components/If-Design-System/Button';
import { IFSuccessNotification } from '../../components/If-Design-System/Notification';
import GrowthTreeMock, { GrowthTreeMockColumn } from '../../components/Custom/GrowthTree';
import { Dunno } from '../../components/Custom/Dunno';

import { Teaser, TeaserContainer } from '../../components/If-Design-System/Teasers'

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
        <IFBlock className="dark">
          <div className="if container center">
            <Heading rank={2} size="large" trailingClassName="center" style={{ bottomMargin: "4rem"}}>Here you will meet all kinds of people</Heading>
            <TeaserContainer>
              {profiles.map(profile => <Teaser 
                  title={profile.name} 
                  text={profile.workRole}
                  image={ { path: profile.imageUrl} }
                  link={{ name: profile.link.name, path: profile.link.path, target: ""}}
              />)}
            </TeaserContainer>
          </div>    
      </IFBlock>
    );
}

export default PersonalStoriesListBlock;