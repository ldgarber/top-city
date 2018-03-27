import React, { Component } from "react"; 

class Home extends Component {
  static defaultProps = {width: '980px'}
  render() {
    return (
      <div className="page">
        <div className="container">
          <img src={"/images/top-city-sepia.jpg"} height="449px" width={this.props.width} alt="top city"/>
          <div className="center-text">A NEIGHBORHOOD JOINT</div>
        </div>
      </div>
    );  
  }
}

export default Home; 

