import React, { Component } from "react"; 

class Home extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <img src={"/images/top-city.jpg"} alt="top city"/>
          <div className="center-text">A NEIGHBORHOOD JOINT</div>
        </div>
      </div>
    );  
  }
}

export default Home; 

