import React from 'react';
import PicardMeme from '../../images/picardMeme.jpeg';

function Preview5(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <li className="preview">
            <p onClick={() => chooseComponent("Blog5")}>Object Oriented Programming in Memes</p>
            <img src={PicardMeme} alt="`Here is my desired state. Make it so!` - Captain Picard" className="preview_image"></img>
        </li>
    )
}

export default Preview5;