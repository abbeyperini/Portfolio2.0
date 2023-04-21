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
            <button className="nav_button" onClick={handleOnClick}>Home</button>
            <button className="nav_button" onClick={() => chooseComponent("work")} >Portfolio</button>
            <button className="nav_button" onClick={() => chooseComponent("about")}>About</button>
            <button className="nav_button" onClick={() => chooseComponent("contact")}>Contact</button>
            <Toggle setClassName={props.setClassName} />
        </nav>
    )
}

export default NavBar;