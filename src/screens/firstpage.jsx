import React from "react";
import QrScanner from "../components/QRReader/QRReader.js";
import StickyFooter from 'react-sticky-footer';


class FirstPage extends React.Component {
    render() {
        return (
            <div className="scancontainer" style={{ textAlign: "center" }}>
                <h1 style={{ color: "blue" }}>*JAKAL DEMO APP*</h1>
                <br></br>
                <br></br>
                <img src="https://i.imgur.com/xSbQ2wU.png" style={{ textAlign: "center", maxHeight: "4rem", maxWidth: "4rem" }} ></img>
                <div>
                    <h1 className="scantext" style={{ textAlign: "center", color: "yellowgreen", display: "inline" }}>PowerUp</h1>
                    <h4 className="scantext" style={{ textAlign: "center", color: "red", display: "inline", fontStyle: "italic" }}>    By Jakal</h4>
                </div>
                <h3 className="scantext">Scan QR Code</h3>
                <div className="scanner" style={{ paddingLeft: "20px" }}>
                    <QrScanner />
                </div>
                <img src="https://www.c2dh.uni.lu/sites/default/files/styles/full_width/public/field/image/capture.png" style={{ width: "50%" }} ></img>
                <br></br>
                <div className="button">
                    <button className="checkout" onClick={() => { this.props.history.push('checkout') }}>Rent A Battery</button>
                    <h4 style={{ color: "red", fontStyle: "italic" }}>(QR Code Scan Will Do This Once Programmed)</h4>
                </div>
                <br></br>



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
export default FirstPage;