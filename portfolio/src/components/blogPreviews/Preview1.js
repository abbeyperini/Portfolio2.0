import React from 'react';
import Blog1Cover from '../../images/blog1Cover.jpg';

function Preview1(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <button className="preview_button" onClick={() => chooseComponent("Blog1")}>Embrace the Struggle While Learning to Code</button>
            <img src={Blog1Cover} alt="The Olympic Mountain range stretches into the distance, in the foreground is grass and rocks" className="preview_image"></img>
        </li>
    )
}

export default Preview1;