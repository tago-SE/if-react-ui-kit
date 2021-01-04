import React from 'react';



import { Main } from '../components/If-Design-System/Main';
import { Heading } from '../components/If-Design-System/Heading';
import { Block, Container } from '../components/If-Design-System/Container';
import { IFClaimsBanner } from '../components/If-Design-System/Banner';
import { Teaser, TeaserList } from '../components/If-Design-System/Card/Teaser';

const role = {
    name: "Full stack developer",
    path: "https://if.wd3.myworkdayjobs.com/Careers/3/refreshFacet/318c8bb6f553100021d223d9780d30be"
};

export const TwoColumTextBlock = () => {
    return (
        <Block>
            <Container>
                <Heading size="largest" rank={1} trailingClassName="center" style={{marginBottom: "100px    "}}>{role.name}</Heading>
                <p className="if text lead center">Spara till barnen och ge bort en tryggare framtid</p>
        
                <div className="if row">
                    <div className="if col-12--xs col-6--md">
                        <p className="if text body">
                            Column 1
                            Nu är semestertiden över för de flesta av oss och förhoppningsvis har ni haft en härlig sommar. Utöver
                            strand, hängmatta och grill så innebär ledigheten en möjlighet att reflektera och stanna upp. För mig
                            innebär höstterminen en möjlighet att sätta upp nya mål. Det är ett utmärkt tillfälle att ta tag i de där
                            sakerna som inte riktigt prioriterats de senaste månaderna. Jag ser över sparandet, försäkringar och diverse
                            andra viktiga saker som inte känns lika intressant under de varmaste sommarmånaderna.
                        </p>
                        <p className="if text body">
                            Column 2
                            Min sommar bestod inte bara av varma sommardagar utan även tillskott i familjen. För att ge vår dotter ett
                            tillskott i framtiden har vi diskuterat hur vi vill spara till henne redan nu. Det kan upplevas som
                            krångligt och långt bort men ofta ett välkommet tillskott för barnet i framtiden. Det finns många
                            anledningar att spara till sina barn, barnbarn eller kanske barn till dina nära och kära. Du kanske vill
                            hjälpa till med pengar till ett körkort, till utlandsstudier eller till ett lägenhetsköp – men inte vet hur
                            du ska göra?
                        </p>
                    </div>
                    <div className="if col-12--xs col-6--md">
                        <p className="if text body">
                            Column 3
                            Jag har valt att öppna en Kapitalförsäkring Barn med min dotter som förmånstagare. Anledningen till detta är
                            att jag på ett enklare sätt kan administrera kontot och bestämmer när pengarna ska betalas ut. Om pengarna
                            ska betalas ut vid barnets 18-årsdag, senare eller löpande är ett beslut jag och min sambo inte behöver ta
                            nu. Om jag dör är jag trygg med att pengarna tillfaller förmånstagaren (min dotter).
                        </p>
                        <p className="if text body">
                            Column 4
                            Utöver kapitalförsäkring kan du välja att öppna ett konto direkt i barnets namn. Kontot står i barnets namn
                            men administreras av föräldrarna. Vid barnets 18-årsdag övergår kontot helt till barnet.
                        </p>
                    </div>
                </div>
            </Container>
        </Block>
    );
}

const RolePage = () => {

    const profile = { 
        name: "David Hasslehoff ",
        workRole: "Full Stack Developer",
        imageUrl: "https://www.klarna.com/assets/sites/13/2020/07/23175739/Engineering_Alexandre-Borel-op-dm.jpg",
        link: { name: "Read their story", path: "https://www.klarna.com/careers/personal-stories/alexandre-borel/"}
    };
      
    return (<Main>
        <div className="if block">
            <div className="if container" style={{width: "40%"}}>
                <Heading size="largest" rank={1} trailingClassName="center">{role.name}</Heading>

                <p className="if text lead center">Spara till barnen och ge bort en tryggare framtid</p>
                <Heading size="smallest" rank={5} trailingClassName="center"><b>{role.name}</b></Heading>
                <p className="if text body">
                    Column 1
                    Nu är semestertiden över för de flesta av oss och förhoppningsvis har ni haft en härlig sommar. Utöver
                    strand, hängmatta och grill så innebär ledigheten en möjlighet att reflektera och stanna upp. För mig
                    innebär höstterminen en möjlighet att sätta upp nya mål. Det är ett utmärkt tillfälle att ta tag i de där
                    sakerna som inte riktigt prioriterats de senaste månaderna. Jag ser över sparandet, försäkringar och diverse
                    andra viktiga saker som inte känns lika intressant under de varmaste sommarmånaderna.
                </p>
                <p className="if text body">
                    Column 2
                    Min sommar bestod inte bara av varma sommardagar utan även tillskott i familjen. För att ge vår dotter ett
                    tillskott i framtiden har vi diskuterat hur vi vill spara till henne redan nu. Det kan upplevas som
                    krångligt och långt bort men ofta ett välkommet tillskott för barnet i framtiden. Det finns många
                    anledningar att spara till sina barn, barnbarn eller kanske barn till dina nära och kära. Du kanske vill
                    hjälpa till med pengar till ett körkort, till utlandsstudier eller till ett lägenhetsköp – men inte vet hur
                    du ska göra?
                </p>
            </div>
        </div>
        <Block>
          <div className="if container center">
            <Heading rank={2} size="large" trailingClassName="center" style={{ bottomMargin: "4rem"}}>
                Here you will meet all kinds of people
            </Heading>
            <TeaserList>
              <Teaser 
                  title={profile.name} 
                  text={profile.workRole}
                  image={ { path: profile.imageUrl} }
                  link={{ name: profile.link.name, path: profile.link.path, target: ""}}
              />
            </TeaserList>
          </div>    
        </Block>
        <IFClaimsBanner title={`Become a ${role.name} at If`} link={{name: "See the available jobs", path: `${role.path}`}}></IFClaimsBanner>
    </Main>);
}

export default RolePage;