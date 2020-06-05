import React from "react";
import './App.css';
import './app.scss';
import { render } from "react-dom";
import Store from '../../redux/store';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderNavigation,
  Content,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";
import { LogoLinkedin24, LogoGithub24 } from '@carbon/icons-react';


import Home from '../Home';
import About from '../About';
import Projects from '../Projects';

const linkStyle = { 
  width: "100px", 
  display: "inline-block", 
  textAlign: "center", 
  lineHeight: "45px"
}

const Copyright = () => {
  return (
    <p align="center">
      {'Copyright © '}
      <a href="http://www.dgisolfi.xyz" style={{textDecoration: "none"}}>
        Daniel Gisolfi 
      </a>{' '}
      {new Date().getFullYear()}{' | '}
      <a 
        href="https://github.com/dgisolfi/PersonalWebsite" 
        style={{textDecoration: "none"}}
      > 
        Source Code
      </a>
    </p>
  );
}


const App = () => (
  <div className="container">
    <Provider store={Store}>
      <Router>
        <Header aria-label="">
          <HeaderName href="/" prefix="Daniel">
            Gisolfi
          </HeaderName>
          <HeaderNavigation>
            {/* <HeaderMenuItem href="/about">About</HeaderMenuItem>
            <HeaderMenuItem href="/projects">Projects</HeaderMenuItem> */}
          </HeaderNavigation>
          <HeaderGlobalBar style={{listStyleType: "none"}}>
            <HeaderMenuItem href="/about">About</HeaderMenuItem>
            <HeaderMenuItem href="/projects">Projects</HeaderMenuItem>
            {/* <HeaderMenuItem href="#">Resume</HeaderMenuItem> */}
            <HeaderMenuItem  href="https://github.com/dgisolfi">
              <LogoGithub24 aria-hidden="github" style={{fill:"#ffffff"}}/>
            </HeaderMenuItem>
            
            <HeaderMenuItem href="https://www.linkedin.com/in/dgisolfi/">
              <LogoLinkedin24 aria-hidden="linkedin" style={{fill:"#ffffff"}}/>
            </HeaderMenuItem>
          </HeaderGlobalBar>
        </Header>
        <Content>
          <div className="bx--grid bx--grid--full-width">
            <Switch>
              {/* {user[0].role === "Admin" ? <Route path="/results" component={ResultsView} /> : null} */}
              {/* <Route path="/survey/new/:sid" component={SurveyView} /> */}
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />  
              <Redirect to="/" />         
            </Switch>
            <div style={{paddingTop: '3vh'}}>
              <Copyright />
            </div>
          </div>
        </Content>
      </Router>
    </Provider>
  </div>
);

export default App;
