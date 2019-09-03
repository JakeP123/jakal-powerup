import React, { Component } from 'react';
import Footer from "../Sticky Footer/stickyfooter";
import Header from "../Header/header";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import Axios from 'axios';


class Maps extends Component {
  state = {
    places: [],
    placesCopy: [],
    radius: 9000,
    searchTerm: '',
    activeLocation: null,
    markers: []
  }

  componentDidMount() {
    if (!localStorage.getItem('loggedIn')) {
      return this.props.history.push('/');
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.setState({
          userLocation: { lat: latitude, lng: longitude },
        }, () => {
          Axios.post('/get-places', {
            lat: latitude, lng: longitude, radius: this.state.radius
          }).then(res => this.setState({
            places: res.data, placesCopy: res.data, markers: res.data.map((p, i) => <Marker
              key={p.id}
              title={p.vicinity}
              name={p.vicinity}
              position={p.geometry.location}
            />)
          })).catch(err => console.log('err occuredd', err))
        });
      });
  }

  handleRadiusChange = e => this.setState({ [e.target.name]: e.target.value }, () => {
    const { userLocation: { lat, lng }, radius } = this.state;
    Axios.post('/get-places', {
      lat, lng, radius
    }).then(res => this.setState({
      places: res.data, placesCopy: res.data, markers: res.data.map((p, i) => <Marker
        key={p.id}
        title={p.vicinity}
        name={p.vicinity}
        position={p.geometry.location}
      />)
    })).catch(err => console.log('err occuredd', err))
  });

  handleSearchChange = e => {
    const { placesCopy } = this.state;
    const searchTerm = e.target.value;
    this.setState({
      searchTerm, places: placesCopy.filter(p => {
        return p.vicinity.toLowerCase().includes(searchTerm.toLowerCase()) || p.plus_code.compound_code.toLowerCase().includes(searchTerm.toLowerCase())
      })
    })
  }

  handleMouseEnter = p => {
    const { markers, userLocation } = this.state;
    const foundMarker = markers.find(m => m.key === p.id)
    /*
    console.log('vvvvvvvvvv', new this.props.google.maps.Marker({
      position: userLocation,
      //map: map,
      //icon: icon1,
      title: "some marker"
    }).setIcon);
    */
    //foundMarker.setIcon
  }

  render() {
    const { userLocation, places, radius, searchTerm, activeLocation, markers } = this.state;
    return (
      <div className="map-container" style={{ textAlign: "center" }}>
        <Header />
        Radius: <select name="radius" value={radius} onChange={this.handleRadiusChange} >
          <option value={400}>0.25mi</option>
          <option value={800}>0.5mi</option>
          <option value={1200}>0.75mi</option>
          <option value={1600}>1.0mi</option>
        </select>
        <div className="whole-map">
          <div className="map-side">
            <div className="search-box">
              <input value={searchTerm} onChange={this.handleSearchChange} placeholder="enter something here" />
            </div>
            {places.map((p, i) => (
              <div key={p.id} onMouseEnter={() => this.handleMouseEnter(p)} className="map-side__details">
                <div>
                  <p style={{ color: "red" }}>{`PowerUp Station ${i + 1}`}</p>
                  <p>{p.vicinity}</p>
                  <p>Rating: {p.rating}</p>
                </div>
                <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${p.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`} width="175" height="75" />
              </div>
            ))}
          </div>
          <div id="map-area">
            {userLocation && <Map google={this.props.google} initialCenter={userLocation} zoom={13} >
              {places.map((p, i) => (
                <Marker
                  key={i}
                  id={p.id}
                  title={p.vicinity}
                  name={p.vicinity}
                  position={p.geometry.location}
                />
              ))}
            </Map>}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(Maps);