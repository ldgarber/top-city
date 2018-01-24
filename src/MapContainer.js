import React, { Component } from "react"; 
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'; 
export class MapContainer extends Component {
  render() {
    var top_city = {
      lat: 40.7029316,   
      lng: -73.9178615  
    }
    var tc_style = {
      width: '450px', 
      height: '300px'
    }

    return(     
      <div className="map-container">
        <Map 
          google={this.props.google} 
          zoom={14}
          gestureHandling={'cooperative'} 
          style={tc_style}
          initialCenter={top_city} >
          <Marker 
            title={'Yummies here!'}
            name={'Top City Gourmet'}
            position={top_city} />
        </Map>
      </div>
    ); 
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDMDpzAIa_THrUf7eEuWkXv7RIaDHYUl80")
})(MapContainer)
