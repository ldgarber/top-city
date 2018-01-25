import React, { Component } from "react"; 
import {
  Route, 
  NavLink, 
  HashRouter
} from "react-router-dom"; 
import Home from "./Home"; 
import Stuff from "./Stuff"; 
import Menu from "./Menu"; 
import Lunch from "./Lunch"; 
import Delivery from "./Delivery"; 
import Contact from "./Contact"; 
import Insta from "./Insta";  
import LogoSection from "./LogoSection"; 
import Footer from "./Footer"; 

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <LogoSection />
          <ul className="header">
            <li><NavLink exact to="/">HOME</NavLink></li>
            <li><NavLink to="/stuff">STUFF</NavLink></li>
            <li><NavLink to="/menu">BREAKFAST</NavLink></li>
            <li><NavLink to="/lunch">SANDWICHES</NavLink></li>
            <li><NavLink to="/delivery">DELIVERY?</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
            <li><NavLink to="/insta">INSTA</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff} />
            <Route path="/menu" component={Menu} />
            <Route path="/lunch" component={Lunch} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/contact" component={Contact} />
            <Route path="/insta" component={Insta} />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );  
  }
}

export default Main; 

