import React from 'react';
import Toggle from './Toggle';
import { Link } from "react-router-dom";


function NavBar(props) {
    return (
      <nav>
        <Link to="/home" className="nav_button">Home</Link>
        <Link to="/content" className="nav_button" >Content</Link>
        <Link to="/speaking" className="nav_button" >Speaking</Link>
        <Link to="/portfolio" className="nav_button" >Portfolio</Link>
        <Link to="/about" className="nav_button">About</Link>
        <Link to="/contact" className="nav_button">Contact</Link>
        <Link to="https://abbeyperini.shop/" className="nav_button">Shop</Link>
        <Toggle setClassName={props.setClassName} />
      </nav>
    )
}

export default NavBar;