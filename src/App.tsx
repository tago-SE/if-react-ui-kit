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


/*
  https://www.klarna.com/careers/personal-stories/alexandre-borel/
*/


function App() {
  return (<Router>
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
