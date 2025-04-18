import React from 'react';
import Gachagif from '../../images/gachasphereMobile.gif';
import { ReactComponent as Chrome } from '../../images/chrome.svg';
import { ReactComponent as Github } from '../../images/github.svg';


function Gachasphere() {
    return (
        <div id="gachasphere" className="work">
            <h3 className="work_title--primary">Gachasphere</h3>
            <h4 className="work_title--secondary">Capstone Project</h4>
            <img id="gachaGif" className="work_image" src={Gachagif} alt="Gachasphere mobile walkthrough"/>
            <p className="work_text">Gachasphere was built with the intention of being a central hub for all things mobile gaming. Due to the free-to-play nature of Gacha games, 
                most players are actively playing multiple games at the same time. Unfortunately, the communities for each individual game remain isolated. 
                Gachasphere hopes bridge the gap between existing communities and connect players from all over the world together.</p>
            <span className="work_links">
                <a className="link-new-tab" href="https://github.com/brodri4/Gachasphere-client" target="_blank" rel="noreferrer"><Github id="GachasphereGithub" role="img" aria-label="open Gachasphere Github repository in a new tab" className="work_icon"/></a>
                <a className="link-new-tab" href="http://gachasphere.surge.sh/" target="_blank" rel="noreferrer"><Chrome id="GachasphereChrome" role="img" aria-label="open Gachasphere website in a new tab" className="work_icon"/></a>
            </span>
        </div>
    )
}

export default Gachasphere;