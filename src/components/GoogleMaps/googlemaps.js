import React, { Component } from 'react';
import Footer from "../Sticky Footer/stickyfooter";
import Header from "../Header/header";



class Maps extends Component {
  state = {
    result: 'No result'
  }
  render() {
    return (

      <div className="mapContainer" style={{textAlign:"center"}}>
        <Header />
        <img src="https://www.c2dh.uni.lu/sites/default/files/styles/full_width/public/field/image/capture.png" style={{ width: "50%" }} ></img>
       
       <br></br>
       <br></br>
       <br></br>
    
        <Footer />
      </div>
    );
  }
}
export default Maps



