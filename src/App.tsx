import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage';
import JoinUsPage from './pages/JoinUs';
import WhyUsPage from './pages/WhyUsPage';
import RolePage from './pages/RolePage';

// Boiler plates

import About from './boiler-plates/BAbout';
import Home from './boiler-plates/BHome';

// Styled components test

import { Heading } from './components/If-Design-System/Heading';
import { Navbar, ListMenu, ListMenuItem} from './components/NavBar';

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
} from './components/If-Design-System/Crosslinks';

/*
  https://www.klarna.com/careers/personal-stories/alexandre-borel/
*/


function App() {
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
  return (<Router>
    <Navbar />
    
    <ListMenu focusColor="blue">
      {items.map((item, index) => <ListMenuItem key={index} {...item} />)}
    </ListMenu>


    <ListMenu focusColor="orange">
      <ListMenuItem name="my" href="#" icon="ui person">
        <ListMenuItem name="oh" href="#"/>
      </ListMenuItem>
    </ListMenu>

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
  
      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
      <Switch>
      <Route 
          path="/boiler/home"
          component={Home} 
        />
        <Route 
          path="/boiler/about"
          component={About} 
        />

        <Route 
          path="/join-us/role"
          component={RolePage} 
        />
        <Route 
          path="/join-us"
          component={JoinUsPage} 
        />
          <Route 
          path="/join-us/why"
          component={WhyUsPage} 
        />
        <Route 
          path='/' 
          component={HomePage} 
        />
      </Switch>
  </Router>);
}

export default App;
