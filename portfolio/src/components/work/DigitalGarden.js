import React from 'react';
import dGScreenshot from "../../images/digital-garden.png";
import { ReactComponent as Chrome } from '../../images/chrome.svg';
import { ReactComponent as Github } from '../../images/github.svg';

function DigitalGarden() {
    return (
        <div id="digitalGarden" className="work">
            <h3 className="work_title--primary">Digital Garden</h3>
            <h4 className="work_title--secondary">Personal Website</h4>
            <img id="dGScreenshot" className="work_image" src={dGScreenshot} alt="screenshot of digital garden site"/>
            <p className="work_text">If you want a comprehensive summary of digital gardening, you can't go wrong with Maggie Appleton's <a href="https://maggieappleton.com/garden-history" target="_blank" rel="noreferrer">A Brief History & Ethos of the Digital Garden</a> or her <a href="https://github.com/MaggieAppleton/digital-gardeners" target="_blank" rel="noreferrer">repo of resources</a>. As it stands, my blog timeline would give you topic whiplash. In contrast, a digital garden works with how my brain works - grouping related articles together even if I wrote them 5 years apart. Still a work in progress, My digital garden is to be an organic home for all my tech creations. My stack is JavaScript, CSS, HTML, and Markdown.</p>
            <span className="work_links">
                <a className="link-new-tab" href="https://github.com/abbeyperini/digital-garden" target="_blank" rel="noreferrer"><Github id="DigitalGardenGithub" aria-label="open Digital Garden Github repository in a new tab" className="work_icon"/></a>
                <a className="link-new-tab" href="https://abbeyperini.com" target="_blank" rel="noreferrer"><Chrome id="DigitalGardenChrome" aria-label="open Digital Garden website in a new tab" className="work_icon"/></a>
            </span>
        </div>
    )
}

export default DigitalGarden;