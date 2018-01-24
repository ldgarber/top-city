import React, { Component } from "react"; 
import MapContainer from "./MapContainer"; 

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="centered">
          <p className="underline">HOURS</p>
          <p>MON – FRI: 24/7</p>
          <p>SAT & SUN: 24/7</p>

          <p>***</p>

          <p className="underline">HAPPY HOUR</p>
          <p>ALWAYS</p>
          <p>(Beer in the back)</p>
          <p>{"(Don't drink in the store though)"}</p>
        </div>

        <MapContainer />

        <div className="centered">
          <p>144 WYCKOFF AVE, BROOKLYN, NY 11237</p>
          <p>PHONE: (347) 533-9640</p>
        </div>
      </div>
    );  
  }
}

export default Footer; 

