import React from 'react';
import Dowland from '../../images/dowland.jpg';

function Preview8(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <button className="preview_button" onClick={() => chooseComponent("Blog8")}>Knitting as Programming or how I learned programmers owe it all to fiber</button>
            <img src={Dowland} className="preview_image" alt="Knit by Abbey Perini, pattern by Dowland by Dee O'Keefe, yarn is Meeker Street by The Jewelry Box"></img>
        </li>
    )
}

export default Preview8;