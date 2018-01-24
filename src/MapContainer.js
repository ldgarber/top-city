import React, { Component } from "react"; 
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'; 
export class MapContainer extends Component {
  render() {
    return( 
      <div className="map-container">
        <Map 
          google={this.props.google} 
          zoom={7} 
          className={'map'}
          style={{
            width: '400px', 
            height: '300px'
          }}
          initialCenter={{
            lat: 40.8, 
            lng: -88.08
          }} >
          <Marker 
            title={'Yummies here!'}
            name={'Top City Gourmet'}
            position={{lat: 40.8, lng: -88.08}} />
        </Map>
      </div>
    ); 
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDMDpzAIa_THrUf7eEuWkXv7RIaDHYUl80")
})(MapContainer)
