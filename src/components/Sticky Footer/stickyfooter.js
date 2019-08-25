import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./footer.css";

class Footer extends Component {

render () {
    return(
        <footer>
        <div className="gridImages">
            <Link to="/map" className="box1">
                <img src="https://i.ya-webdesign.com/images/blue-map-pin-png-4.png" ></img>
            </Link>

            <Link to="/" className="box2">
                <img src="https://cdn.pixabay.com/photo/2017/09/28/08/58/camera-2794769_960_720.png"></img>
            </Link>

            <Link to="#" className="box3">
                <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/thumbnail/apple-id-account-person-thumbnail-2x.png" style={{ maxWidth: "3rem", maxHeight: "3rem", float: "middle" }}></img>
            </Link>
        </div>
    </footer>
    )}
}

export default Footer;
