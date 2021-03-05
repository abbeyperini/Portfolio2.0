import React from 'react';
import Blog9Cover from '../../images/blog9Cover.jpg';

function Preview9(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <button className="preview_button" onClick={() => chooseComponent("Blog9")}>Toggle Dark Mode in React</button>
            <img src={Blog9Cover} className="preview_image" alt=""></img>
        </li>
    )
}

export default Preview9;