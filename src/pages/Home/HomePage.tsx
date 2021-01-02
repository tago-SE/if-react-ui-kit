import React from 'react';

import { Main } from '../../components/If-Design-System/Main';
import { Heading } from '../../components/If-Design-System/Heading'

import { ListMenu, ListMenuItem} from '../../components/NavBar';

import { 
  StudioCrosslink, 
  StudioCrosslinkContainer, 
  ButtonCrosslink, 
  ButtonCrosslinkContainer,
  LifestyleCrosslink, 
  LifestyleCrosslinkContainer,
  ListCrosslink,
  ListColumnCrosslink,
  ListColumCrosslinkContainer,
  ExpandableCrosslink,
  ExpandableCrosslinksContainer,
} from '../../components/If-Design-System/Crosslinks';

import { PartnerLogoItem, PartnerLogoList } from '../../components/Banner';
import { PartnerBlock } from '../Partners/PartnerBlock';

import { Block, Container } from '../../components/If-Design-System/Container';

import { ShareBanner } from '../../components/If-Design-System/Banner/ShareBanner';

// Sections
import ButtonSection from './Sections/ButtonSection';
import LoaderSection from './Sections/LoaderSection';
import PopoverSection from './Sections/PopoverSection';

const HomePage = () => {
    const items = [
        {
           name: "A",
           icon: "ui house",
           list: [
               {
                   name: "B", 
                   href: "#",
                   icon: "ui house",
                   list: [
                    {
                        name: "C", 
                        href: "#",
                    }
                ] 
               },
               {
                name: "D", 
                href: "#",
                list: [
                 {
                     name: "E", 
                     href: "#",
                 }
             ] 
            },
            {
              name: "F", 
              href: "#",
              list: [
               {
                   name: "G", 
                   href: "#",
               }
           ] 
          }
          ] 
        },
        {
            name: "H",
            href: "#",
            list: [
              {
                  name: "G", 
                  href: "#",
              }
          ] 
        },
        {
            name: "I",
            href: "#",  
            list: [
              {
                  name: "G", 
                  href: "#",
              }
          ] 
        }
    ];
    return (
    <Main>

        
    <ListMenu focusColor="blue">
      {items.map((item, index) => <ListMenuItem key={index} {...item} />)}
    </ListMenu>


    <ButtonSection />
    <br />
    <PopoverSection />
    <br />
    <LoaderSection />
  
    <Block>
        <Container>
            <PartnerBlock />
            <PartnerLogoList>
                <PartnerLogoItem src="./images/volvia.svg"/>
                <PartnerLogoItem src="./images/graphql.svg"/>
                <PartnerLogoItem src="./images/apple-1.svg"/>
                <PartnerLogoItem src="./images/nordea.svg"/>
                <PartnerLogoItem src="./images/most-1.svg"/>
                <PartnerLogoItem src="./images/minnie-mouse.svg"/>
                <PartnerLogoItem src="./images/pilot-1.svg"/>
                <PartnerLogoItem src="./images/vans-4.svg"/>
                <PartnerLogoItem src="./images/apollo-graphql-1.svg"/>
                <PartnerLogoItem src="./images/dukepowr.svg"/>
            </PartnerLogoList>
            <hr className="if" />
        </Container>
    </Block>
    
    <ListMenu focusColor="orange">
      <ListMenuItem name="my" href="#" icon="ui person">
        <ListMenuItem name="oh" href="#"/>
      </ListMenuItem>
    </ListMenu>
    <div className="if block">
        <div className="if container">
          <ShareBanner companies={[
            {
              company: "facebook", href: "https://wwww.google.com", text: "Share on Facebook"
            },
            {
              company: "twitter", href: "https://wwww.google.com", text: "Share on Twitter"
            },
            {
              company: "linkedin", href: "https://wwww.google.com", text: "Share on LinkedIn"
            }
          ]}>
          </ShareBanner>
        </div>
    </div>

    
    <div className="if block">
      <div className="if container">

        <Heading rank={1} size="largest" focusColor="blue" justifyContent="center" onClick={() => { alert("hello");}}>Largest</Heading>
        <Heading size="larger" focusColor="blue" justifyContent="center" onClick={() => { alert("hello");}}>Larger</Heading>
        <Heading size="large" focusColor="blue" justifyContent="center" onClick={() => { alert("hello");}}>Large</Heading>
        <Heading size="medium" focusColor="blue" justifyContent="center" onClick={() => { alert("hello");}}>Medium</Heading>
        <Heading size="small" focusColor="blue" justifyContent="center" onClick={() => { alert("hello");}}>Small</Heading>
        <Heading size="smallest" focusColor="blue" justifyContent="center" onClick={() => { alert("hello");}}>smallest</Heading>

        <StudioCrosslinkContainer columns={3}>
          <StudioCrosslink title="Yo" description="abc" href="/abc" imageSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
          <StudioCrosslink title="hello" description="abc" href="/abc" imageSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
          <StudioCrosslink title="hello" description="abc" href="/abc" imageSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
          <StudioCrosslink title="hello" description="abc" href="/abc" imageSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
          <StudioCrosslink title="hello" description="abc" href="/abc" imageSrc="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG" />
        </StudioCrosslinkContainer>

        <br />
        
        <ButtonCrosslinkContainer columns={4}>
          <ButtonCrosslink title="hello" href="/abc" iconTag="diamond"  />
          <ButtonCrosslink title="hello" href="/abc" iconTag="forest"  />
          <ButtonCrosslink title="hello" href="/abc" iconTag="cloud-light"  />
          <ButtonCrosslink title="hello" href="/abc" iconTag="smarthphone"  />
          <ButtonCrosslink title="hello" href="/abc" iconTag="watch"  />
        </ButtonCrosslinkContainer>

        <br />

        <LifestyleCrosslinkContainer columns={4}>
          <LifestyleCrosslink  title="hello" href="/abc" imageSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
          <LifestyleCrosslink  title="hello" href="/abc" imageSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
          <LifestyleCrosslink  title="hello" href="/abc" imageSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
          <LifestyleCrosslink  title="hello" href="/abc" imageSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
          <LifestyleCrosslink  title="hello" href="/abc" imageSrc="https://v.imgi.no/gy5k43je86-MOODBOARD/2042"/>
        </LifestyleCrosslinkContainer>

        <ExpandableCrosslinksContainer>
          <ExpandableCrosslink title="hello" href="#" />
        </ExpandableCrosslinksContainer>

        <br />
      </div>
    </div>

    <div className="if block">
      <ListColumCrosslinkContainer>
          <ListColumnCrosslink title="Innehålstittel" titleSize="medium">
              <ListCrosslink title="Betalningsguide" href="#"/>
              <ListCrosslink title="Därfor väljer du If" href="#"/>
              <ListCrosslink title="Säkerhetsbutikken" href="#"/>
              <ListCrosslink title="Tryggare vardag" href="#"/>
              <ListCrosslink title="Inför pensionen" href="#"/>
            </ListColumnCrosslink>
            <ListColumnCrosslink title="Innehålstittel" titleSize="medium">
              <ListCrosslink title="Betalningsguide" href="#"/>
              <ListCrosslink title="Därfor väljer du If" href="#"/>
              <ListCrosslink title="Säkerhetsbutikken" href="#"/>
              <ListCrosslink title="Tryggare vardag" href="#"/>
              <ListCrosslink title="En alldeles för lång rubrik" href="#"/>
            </ListColumnCrosslink>
            <ListColumnCrosslink title="Innehålstittel" titleSize="medium">
              <ListCrosslink title="Betalningsguide" href="#"/>
              <ListCrosslink title="Därfor väljer du If" href="#"/>
              <ListCrosslink title="Säkerhetsbutikken" href="#"/>
              <ListCrosslink title="Tryggare vardag" href="#"/>
              <ListCrosslink title="Inför pensionen" href="#"/>
            </ListColumnCrosslink>
      
            <ListColumnCrosslink title="Innehålstittel" titleSize="medium">
              <ListCrosslink title="Betalningsguide" href="#"/>
              <ListCrosslink title="Därfor väljer du If" href="#"/>
              <ListCrosslink title="Säkerhetsbutikken" href="#"/>
              <ListCrosslink title="Tryggare vardag" href="#"/>
              <ListCrosslink title="Inför pensionen" href="#"/>
            </ListColumnCrosslink>
            <ListColumnCrosslink title="Innehålstittel" titleSize="medium">
              <ListCrosslink title="Betalningsguide" href="#"/>
              <ListCrosslink title="Därfor väljer du If" href="#"/>
              <ListCrosslink title="Säkerhetsbutikken" href="#"/>
              <ListCrosslink title="Tryggare vardag" href="#"/>
              <ListCrosslink title="Inför pensionen" href="#"/>
            </ListColumnCrosslink>
            <ListColumnCrosslink title="Innehålstittel" titleSize="medium">
              <ListCrosslink title="Betalningsguide" href="#"/>
              <ListCrosslink title="Därfor väljer du If" href="#"/>
              <ListCrosslink title="Säkerhetsbutikken" href="#"/>
              <ListCrosslink title="Tryggare vardag" href="#"/>
              <ListCrosslink title="Inför pensionen" href="#"/>
            </ListColumnCrosslink>
  
            <ListColumnCrosslink title="Innehålstittel" titleSize="medium">
              <ListCrosslink title="Betalningsguide" href="#"/>
              <ListCrosslink title="Därfor väljer du If" href="#"/>
              <ListCrosslink title="Säkerhetsbutikken" href="#"/>
              <ListCrosslink title="Tryggare vardag" href="#"/>
              <ListCrosslink title="Inför pensionen" href="#"/>
            </ListColumnCrosslink>
            <ListColumnCrosslink title="Innehålstittel" titleSize="medium">
              <ListCrosslink title="Betalningsguide" href="#"/>
              <ListCrosslink title="Därfor väljer du If" href="#"/>
              <ListCrosslink title="Säkerhetsbutikken" href="#"/>
              <ListCrosslink title="Tryggare vardag" href="#"/>
              <ListCrosslink title="Inför pensionen" href="#"/>
            </ListColumnCrosslink>

      </ListColumCrosslinkContainer>
    </div>

        <div className="if block">
            <div className="if container">
                <Heading size="largest" rank={1} trailingClassName="center">
                    Body text modules
                </Heading>

                {/* <Row>
                    <Column trailingClassName="-6--xs col-6--md">
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
                    </Column>

                    <Column trailingClassName="-6--xs col-6--md">
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
                    </Column>
                </Row> */}
            </div>
        </div>
  </Main>
    );
}

export default HomePage;