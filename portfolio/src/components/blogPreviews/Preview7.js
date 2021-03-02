import React from 'react';
import Blog7Cover from '../../images/blog7Cover.png';

function Preview7(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <button className="preview_button" onClick={() => chooseComponent("Blog7")}>A Trio of Buttons for a Bubbly, Colorful Site</button>
            <img src={Blog7Cover} alt="a login form with a orange primary button, blue secondary button, and a tertiary button styled like text" className="preview_image"></img>
        </li>
    )
}

export default Preview7;