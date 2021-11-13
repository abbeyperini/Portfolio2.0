import React from 'react';
import { ReactComponent as Github } from '../../images/github.svg';
import OWS1 from '../../images/OWSmobile1.png';
import OWS2 from '../../images/OWSmobile2.png';

function OWS() {
    return (
        <div id="OWS" className="subWork">
            <h3 className="subwork_title--primary">Old Wall Site</h3>
            <h4 className="subwork_title--secondary">Front End Hobby Project</h4>
            <div className="subWork_container_image">
                <img className="old-wall_image" src={OWS1} alt="Old Wall Site mobile screenshot showing the nav, header, and welcome message"/>
                <img className="old-wall_image" src={OWS2} alt="Old Wall Site mobile screenshot showing the popular posts, announcements, and footer"/>
            </div>
            <p className="subwork_text">During week 3 of the DigitalCrafts Full Stack Web Development course, we were given the optional "hardmode" prompt to copy a site from the 90's
                    (written in XML1) and make it responsive. The screenshots here show the new mobile layout I designed. Click the Github link to see more screenshots 
                in my repo, including the desktop view I matched as close as possible to the original.</p>
            <span className="subwork_links">
                <a className="link-new-tab" href="https://github.com/abbeyperini/OldWallSite" target="_blank" rel="noreferrer"><Github id="OWSGithub" aria-label="open Old Wall Site Github repository in a new tab" focusable="true" className="work_icon" /></a>
            </span>
        </div>
    )
}

export default OWS;