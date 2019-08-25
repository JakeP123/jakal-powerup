import React, { Component } from 'react';
import "./header.css";

class Header extends Component {
    state = {}
    render() {
        return (
            <header>
                <img src="https://i.imgur.com/xSbQ2wU.png" style={{ textAlign: "center", maxHeight: "4rem", maxWidth: "4rem" }} ></img>
                <div>
                    <h1 className="scantext" style={{ textAlign: "center", color: "yellowgreen", display: "inline" }}>PowerUp</h1>
                    <h4 className="scantext" style={{ textAlign: "center", color: "red", display: "inline", fontStyle: "italic" }}>    By Jakal</h4>
                </div>
            </header>
        );
    }
}

export default Header;

