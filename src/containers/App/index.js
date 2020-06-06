import React from 'react';

import './App.css';
import './app.scss';
import Store from '../../redux/store';
import { Provider } from 'react-redux';
import { LogoLinkedin24, LogoGithub24 } from '@carbon/icons-react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  HeaderContainer
} from "carbon-components-react/lib/components/UIShell";

import Home from '../Home';
import About from '../About';
import Projects from '../Projects';

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
};

const App = ({ useResponsiveOffset = true }) => {
  const style = {
    height: '100%',
  };
  if (useResponsiveOffset) {
    style.margin = '0';
    style.width = '100%';
  }
  return (
    <Content id="main-content" style={style}>
      <Provider store={Store}>
        <Router>
          <div className="bx--grid bx--grid--full-width">
            <div className="bx--row" style={{justifyContent:'center'}}>
              <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                  <>
                    <Header aria-label="IBM Platform Name">
                      <SkipToContent />
                      <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                      />
                      <HeaderName href="/"  prefix="Daniel">
                        Gisolfi
                      </HeaderName>
                      <HeaderNavigation aria-label="IBM [Platform]">
                        <HeaderMenuItem href="/about">About</HeaderMenuItem>
                        <HeaderMenuItem href="/projects">Projects</HeaderMenuItem>
                      </HeaderNavigation>
                      <HeaderGlobalBar>
                        {/* <HeaderMenuItem href="#">Resume</HeaderMenuItem> */}
                        <HeaderMenuItem  href="https://github.com/dgisolfi">
                          <LogoGithub24 aria-hidden="github" style={{fill:"#ffffff"}}/>
                        </HeaderMenuItem>
                        <HeaderMenuItem href="https://www.linkedin.com/in/dgisolfi/">
                          <LogoLinkedin24 aria-hidden="linkedin" style={{fill:"#ffffff"}}/>
                        </HeaderMenuItem>
                      </HeaderGlobalBar>
                      <SideNav
                        aria-label="Side navigation"
                        expanded={isSideNavExpanded}
                        isPersistent={false}>
                        <SideNavItems>
                          <HeaderSideNavItems>
                            <HeaderMenuItem href="/about">About</HeaderMenuItem>
                            <HeaderMenuItem href="/projects">Projects</HeaderMenuItem>
                          </HeaderSideNavItems>
                        </SideNavItems>
                      </SideNav>
                    </Header>
                    <Content>
                      <div className="bx--grid bx--grid--full-width">
                        <Switch>
                          {/* This is for future use */}
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
                  </>
                )}
              />
            </div>
          </div>
        </Router>
      </Provider>
    </Content>
  );
};

export default App;