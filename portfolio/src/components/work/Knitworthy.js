import React from 'react';
import { ReactComponent as Github } from '../../images/github.svg';
import Knitgif from '../../images/knitworthygif.gif';

function Knitworthy() {
    return (
        <div id="knitworthy" className="work">
            <h3 className="work_title--primary">Knitworthy</h3>
            <h4 className="work_title--secondary">Front End Project</h4>
            <img className="work_image" src={Knitgif} alt="Knitworthy walkthrough"/>
            <p className="work_text">In the knitting/crochet/fiber arts community, someone who appreciates a handmade gift and takes care of it is considered "knitworthy." 
                Ravelry, a fiber arts website with over 9 million users, created a hub for sharing information about materials and techniques and a 
                way to exchange and sell patterns in pdf form. Users can keep track of their yarn and their projects, entering stats about when they 
                started and finished, the yarn they used, etc. Knitworthy uses the Ravelry API to pull information about users' projects and compares 
                project data to real life time and length measurements to put the amount of love that goes into a handmade gift into perspective for 
                someone who does not knit or crochet.</p>
            <span className="work_links">
                <a className="link-new-tab" href="https://github.com/abbeyperini/Knitworthy" target="_blank" rel="noreferrer"><Github id="KnitworthyGithub" role="img" aria-label="open Knitworthy Github repository in a new tab" className="work_icon"/></a>
            </span>
        </div>
    )
}

export default Knitworthy;