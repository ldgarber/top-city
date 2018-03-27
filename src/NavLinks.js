import React, { Component } from 'react'; 
import { NavLink } from "react-router-dom"; 

class NavLinks extends Component {
  render(){
    return( 
      <ul className="header">
        <li><NavLink exact to="/">HOME</NavLink></li>
        <li><NavLink to="/stuff">STUFF</NavLink></li>
        <li><NavLink to="/menu">BREAKFAST</NavLink></li>
        <li><NavLink to="/lunch">SANDWICHES</NavLink></li>
        <li><NavLink to="/delivery">DELIVERY?</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
    );  
  }
}

export default NavLinks; 
