import React, { Component } from "react"; 

class LogoSection extends Component {
  render() {
    return(
      <div className="logo-section centered">
        <img src={"/images/logo.png"} alt="logo" height="50" width="60"/>
        <br></br>
        <a href="/">TOP CITY GOURMET</a>
      </div>
    ); 
  }
}

export default LogoSection;  

