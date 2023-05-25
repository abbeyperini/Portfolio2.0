import React from 'react';
import '../styles/App.css';
import '../styles/landingBackground.css';
import { ReactComponent as Arrow } from '../images/arrow.svg';

function LandingPage(props) {
    const handleOnClick = () => {
        props.hideLanding()
    }

    return (
        <header>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="landing_text">
                <h1 className="landing_name">Abbey Perini</h1>
                <h2 className="landing_title">Full Stack Web Developer</h2>
                <button className="landing_button" onClick={handleOnClick}>View my work <Arrow className="button_arrow" focusable="false"/></button>
            </div>
      </header>
    )
}

export default LandingPage;