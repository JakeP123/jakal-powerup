import React from 'react'
import "./checkout.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Checkout = () => {
    return (

        <div>
            <div className="scancontainer" style={{ textAlign: "center" }}>
                <img src="https://i.imgur.com/xSbQ2wU.png" style={{ textAlign: "center", maxHeight: "4rem", maxWidth: "4rem" }} ></img>
                <div>
                    <h1 className="scantext" style={{ textAlign: "center", color: "yellowgreen", display: "inline" }}>PowerUp</h1>
                    <h4 className="scantext" style={{ textAlign: "center", color: "red", display: "inline", fontStyle: "italic" }}>    By Jakal</h4>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="info">
                <h1 style={{ color: "red", fontStyle: "italic" }}>Need A Charge?</h1>
                <h2>Dont leave your phone alone, take a battery with you!</h2>
                <p style={{ fontStyle: "italic" }}> Our portable chargers allow you to charge your phone from the convenience of.... anywhere!</p>
                <p style={{ fontStyle: "italic" }}> Now you do not have to worry about leaving your phone behind and hoping for the best.</p>
                <p style={{ fontStyle: "italic" }}>Keep your phone on you at all times so you can still take pictures, answer messages, and make calls!</p>
                <br></br>
                <br></br>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Approve_icon.svg" className="check" style={{verticalAlign:"middle"}}></img>
                    <span className="cord">LIGHTNING CABLE</span>
                    
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Approve_icon.svg" className="check" style={{verticalAlign:"middle"}}></img>
                    <span className="cord">USB-C</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Approve_icon.svg" className="check" style={{verticalAlign:"middle"}}></img>
                    <span className="cord">MICRO USB</span>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="details">
                <img className="battery" src="https://cdn.dribbble.com/users/57484/screenshots/2071184/charging-battery-animated-gif.gif" style={{ height: "20rem" }}></img>
                <div className="details2">
                    <br></br>
                    <h3 className="detailheader" style={{ textDecoration: "underline" }}>Here's How It Works!</h3>
                    <ul className="list">
                        <br></br>
                        <li>Only $1/hr</li>
                        <br></br>
                        <li>Comes Equipped With 3 Cord Options</li>
                        <br></br>
                        <li>$20 Max and its yours</li>
                        <br></br>
                        <li>Return To Any Kiosk When Done</li>
                        <br></br>
                        <li>Click Button Below To Rent!</li>

                    </ul>
                    <br></br>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="button">
                <button className="checkout">Power Me Up!</button>
            </div>
            <br></br>
            <br></br>
        </div>

    )
}

export default Checkout