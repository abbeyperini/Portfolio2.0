import React from 'react';
import '../App.css';

function Header() {
    return (
        <header>
            <h1 className="header_name">Abbey Perini</h1>
            <h2 className="header_title">Full Stack Web Developer</h2>
            <button className="header_button">View my work</button>
            <nav>
                <p>Home</p>
                <p>Portfolio</p>
                <p>Blog</p>
                <p>About</p>
                <p>Contact</p>
            </nav>
      </header>
    )
}

export default Header;