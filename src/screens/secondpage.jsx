import React from "react";
import StickyFooter from 'react-sticky-footer'
import Checkout from '../components/Checkout/checkout'


class SecondPage extends React.Component {
    render() {
        return (
            <div className="scancontainer" style={{ textAlign: "center" }}>
                <h1 style={{ color: "blue" }}>*JAKAL DEMO APP*</h1>
                <br></br>
            
                <div>
                    <Checkout />
                </div>

                <StickyFooter
                    bottomThreshold={50}
                    normalStyles={{
                        backgroundColor: "#999999",
                        padding: "2rem"
                    }}
                    stickyStyles={{
                        backgroundColor: "rgba(255,255,255,.8)",
                        padding: "2rem",
                        width: "100%",
                        maxHeight: "2rem"
                    }}
                >
                    <a href="#" className="box1" style={{ display: "Inline", width: "30%", float: "left" }}>
                        <img src="https://i.ya-webdesign.com/images/blue-map-pin-png-4.png" href="#" style={{ maxWidth: "3rem", maxHeight: "3rem" }}></img>

                    </a>

                    <a href="#" className="box2" style={{ display: "Inline", width: "30%", float: "middle" }}>

                        <img src="https://cdn.pixabay.com/photo/2017/09/28/08/58/camera-2794769_960_720.png" style={{ maxWidth: "3rem", maxHeight: "3rem", float: "middle" }}></img>
                        <img src="https://ui-ex.com/images/transparent-dividers-vertical-line-2.gif" style={{ maxHeight: "4rem", float: "left" }}></img>
                    </a>

                    <a href="#" className="box3" style={{ display: "Inline", width: "30%", float: "right" }}>
                        <img src="https://ui-ex.com/images/transparent-dividers-vertical-line-2.gif" style={{ maxHeight: "4rem", float: "left" }}></img>
                        <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/thumbnail/apple-id-account-person-thumbnail-2x.png" style={{ maxWidth: "3rem", maxHeight: "3rem", float: "middle" }}></img>
                    </a>


                </StickyFooter>
            </div>

        )
    }


}
export default SecondPage;