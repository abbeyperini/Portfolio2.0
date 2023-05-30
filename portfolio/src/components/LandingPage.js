import React from 'react';
import '../styles/App.css';
import '../styles/landingBackground.css';
import { ReactComponent as Arrow } from '../images/arrow.svg';
import { Link } from "react-router-dom";

function LandingPage(props) {
    return (
        <header>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="landing_text">
                <h1 className="landing_name">Abbey Perini</h1>
                <h2 className="landing_title">Full Stack Web Developer</h2>
                <Link className="landing_button" to="/home">View my work <Arrow className="button_arrow" focusable="false"/></Link>
            </div>
      </header>
    )
}

export default LandingPage;