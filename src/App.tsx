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

import BlogPage from './pages/News/BlogPage';

// Boiler plates

import About from './boiler-plates/BAbout';
import Home from './boiler-plates/BHome';

// Styled components test

import { Navbar } from './components/NavBar';

import PersonalStoryPage from './pages/PersonalStoryPage';

function App() {

  return (<Router>
    <Navbar />  
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
          path="/blog"
          component={BlogPage} 
        />
        <Route 
          path="/join-us/role"
          component={RolePage} 
        />
         <Route 
          path="/join-us/story"
          component={PersonalStoryPage} 
        />
          <Route 
          path="/join-us/why"
          component={WhyUsPage} 
        />
         <Route 
          path="/join-us"
          component={JoinUsPage} 
        />
        <Route 
          path='/' 
          component={HomePage} 
        />
      </Switch>
  </Router>);
}

export default App;
