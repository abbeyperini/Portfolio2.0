import React from 'react';
import Blog6Cover from '../../images/blog6Cover.jpg';

function Preview6(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <button className="preview_button" onClick={() => chooseComponent("Blog6")}>#100DaysOfCode</button>
            <img src={Blog6Cover} className="preview_image" alt="trees and fog"></img>
        </li>
    )
}

export default Preview6;