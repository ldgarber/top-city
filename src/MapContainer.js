import React from "react"; 
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapContainer = withScriptjs(withGoogleMap((props) => 
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 40.702831, lng: -73.9195097 }}
  >
    {props.markerIsShown && <Marker position={{ lat: 40.702831, lng: -73.9195097 }} />}
  </GoogleMap>
))

export default MapContainer; 

