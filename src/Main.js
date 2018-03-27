import React, { Component } from "react"; 
import { HashRouter } from "react-router-dom"; 
import MediaQuery from 'react-responsive'; 
import LogoSection from "./LogoSection"; 
import NavLinks from "./NavLinks"; 
import Content from "./Content"; 
import Footer from "./Footer"; 

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <LogoSection />
          <MediaQuery minDeviceWidth={1224}>
            <NavLinks />
          </MediaQuery>
          <Content />
          <Footer />
        </div>
      </HashRouter>
    );  
  }
}

export default Main; 

