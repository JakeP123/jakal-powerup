import React from "react";
import QrScanner from "../components/QRReader/QRReader.js";
import Footer from "../components/Sticky Footer/stickyfooter"
import Header from "../components/Header/header";
import "./pagecss.css";

class FirstPage extends React.Component {
    render() {
        return (
            <div className="scancontainer">
                <Header />
                <div className="content">
                <h3 className="scantext">Scan QR Code</h3>
                <div className="scanner">
                    <QrScanner />
                </div>
                <div className="button footerSpace">
                    <button className="checkout" onClick={() => { this.props.history.push('checkout') }}>Rent A Battery</button>
                </div>
                </div>
                <Footer />
            </div>
        )
    }


}
export default FirstPage;