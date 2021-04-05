import React from 'react';
import Blog10Cover from '../../images/blog10Cover.jpg';

function Preview10(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <button className="preview_button" onClick={() => chooseComponent("Blog10")}>Toggle Dark Mode in React</button>
            <img src={Blog10Cover} className="preview_image" alt=""></img>
        </li>
    )
}

export default Preview10;