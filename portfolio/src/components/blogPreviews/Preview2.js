import React from 'react';
import Blog2Cover from '../../images/blog2Cover.jpeg';

function Preview2(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <button className="preview_button" onClick={() => chooseComponent("Blog2")}>Accessibility and React</button>
            <img src={Blog2Cover} alt="a keyboard with lighted keys currently set to rainbow" className="preview_image"></img>
        </li>
    )
}

export default Preview2;