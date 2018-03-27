import React, { Component } from 'react'; 
import { Route } from "react-router-dom"; 
import Home from "./Home"; 
import Stuff from "./Stuff"; 
import Menu from "./Menu"; 
import Lunch from "./Lunch"; 
import Delivery from "./Delivery"; 
import Contact from "./Contact"; 
import Insta from "./Insta";  

class Content extends Component {
  render() {
    return(
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/stuff" component={Stuff} />
        <Route path="/menu" component={Menu} />
        <Route path="/lunch" component={Lunch} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/contact" component={Contact} />
        <Route path="/insta" component={Insta} />
      </div> 
    ) 
  }
}

export default Content; 
