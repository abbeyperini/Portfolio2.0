import React from 'react';
import Blog3Cover from '../../images/blog3Cover.png';

function Preview3(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <button className="preview_button" onClick={() => chooseComponent("Blog3")}>CSS Animated Button with Offset Border</button>
            <img src={Blog3Cover} alt="a tan login button with offset border on a blue background" className="preview_image"></img>
        </li>
    )
}

export default Preview3;