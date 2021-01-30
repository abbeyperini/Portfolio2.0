import React from 'react';
import Toggle from './Toggle';

function NavBar(props) {
    const handleOnClick = () => {
        props.hideHeader();
    }

    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <nav>
            <button className="nav_button" onClick={handleOnClick}><p>Home</p></button>
            <button className="nav_button" onClick={() => chooseComponent("work")} ><p>Portfolio</p></button>
            <button className="nav_button" onClick={() => chooseComponent("blog")}><p>Blog</p></button>
            <button className="nav_button" onClick={() => chooseComponent("about")}><p>About</p></button>
            <button className="nav_button" onClick={() => chooseComponent("contact")}><p>Contact</p></button>
            <Toggle />
        </nav>
    )
}

export default NavBar;