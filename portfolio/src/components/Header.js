import React from 'react';
import '../App.css';
import '../landingBackground.css';
import { ReactComponent as Arrow } from '../images/arrow.svg';

function Header(props) {
    const handleOnClick = () => {
        props.hideHeader()
    }

    return (
        <header>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="header_text">
                <h1 className="header_name">Abbey Perini</h1>
                <h2 className="header_title">Full Stack Web Developer</h2>
                <button className="header_button" onClick={handleOnClick}>View my work <Arrow className="button_arrow"/></button>
            </div>
      </header>
    )
}

export default Header;