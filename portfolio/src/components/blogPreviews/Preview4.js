import React from 'react';
import Blog4Cover from '../../images/shibas.png';

function Preview4(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <button className="preview_button" onClick={() => chooseComponent("Blog4")}>How To Reload a Page Whenever a User Makes a Change with React/Redux</button>
            <img src={Blog4Cover} className="preview_image" alt="'Counter!', a plus button, a minus button, and the current count reads 20. 14 of the 20 shiba pictures are show below the counter set up."></img>
        </li>
    )
}

export default Preview4;