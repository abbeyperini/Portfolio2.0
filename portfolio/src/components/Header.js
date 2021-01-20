import React from 'react';
import '../App.css';

function Header(props) {
    const handleOnClick = () => {
        props.hideHeader()
    }

    return (
        <header>
            <div className="header_text">
                <h1 className="header_name">Abbey Perini</h1>
                <h2 className="header_title">Full Stack Web Developer</h2>
            </div>
            <button className="header_button" onClick={handleOnClick}>View my work</button>
      </header>
    )
}

export default Header;