import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '40%',
    height: '40%',
  };

  class GoogleMaps extends Component {
    state = {
      result: 'No result'
    }
render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  } 
  }
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAo1y-Zh_ogedposABQPSYseTTtD0cJaYE'
  })(MapContainer);



