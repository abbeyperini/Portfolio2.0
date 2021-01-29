import React from 'react';
import Gachagif from '../images/gachasphereMobile.gif';
import Bujogif from '../images/BujoToGo.gif';
import Knitgif from '../images/knitworthygif.gif';
import OWS1 from '../images/OWSmobile1.png';
import OWS2 from '../images/OWSmobile2.png';
import { ReactComponent as Chrome } from '../images/chrome.svg';
import { ReactComponent as Github } from '../images/github.svg';

function Work() {
    return (
        <div className="container_work">
            <h1 className="section_title">Portfolio</h1>
            <div id="gachasphere" className="subWork">
                <h2 className="subwork_title--primary">Gachasphere</h2>
                <h3 className="subwork_title--secondary">Capstone Project</h3>
                <img className="subwork_image" src={Gachagif} alt="Gachasphere mobile walkthrough"/>
                <p className="subwork_text">Gachasphere was built with the intention of being a central hub for all things mobile gaming. Due to the free-to-play nature of Gacha games, 
                    most players are actively playing multiple games at the same time. Unfortunately, the communities for each individual game remain isolated. 
                    Gachasphere hopes bridge the gap between existing communities and connect players from all over the world together.</p>
                <span className="subwork_links">
                    <a href="https://github.com/brodri4/Gachasphere-client" target="_blank" rel="noreferrer"><Github className="work_icon"/></a>
                    <a href="http://gachasphere.surge.sh/" target="_blank" rel="noreferrer"><Chrome className="work_icon"/></a>
                </span>
            </div>
            <div id="BujoToGo" className="subWork">
                <h2 className="subwork_title--primary">BujoToGo</h2>
                <h3 className="subwork_title--secondary">Solo Full-Stack Project</h3>
                <img className="subwork_image" src={Bujogif} alt="BujoToGo walkthrough gif"/>
                <p className="subwork_text">BujoToGo is a to do list app based on Ryder Carroll's Bullet Journal system. At its most basic, Bullet Journal is about highly 
                    customizable rapid logging, a method of capturing information as bulleted lists. In addition to normal to do list functions, this 
                    app allows users to view their bullets in views analogous to popular handwritten traditional and calendar Bullet Journal spreads.
                    Add, edit, and delete task, event, and note bullets (short descriptions) and migrate them (indicate they've been moved forward to 
                    complete later or backward because they were completed early). View your bullets in monthly, weekly, and daily spreads - traditional 
                    or calendar style. Bullets are stored with date time strings and returned in chronological order based on the time range of the view.</p>
                <span className="subwork_links">
                    <a href="https://github.com/abbeyperini/BujoToGo" target="_blank" rel="noreferrer"><Github className="work_icon"/></a>
                    <a href="http://bujo-to-go.surge.sh/#/index" target="_blank" rel="noreferrer"><Chrome className="work_icon"/></a>
                </span>
            </div>
            <div id="knitworthy" className="subWork">
                <h2 className="subwork_title--primary">Knitworthy</h2>
                <h3 className="subwork_title--secondary">Front End Project</h3>
                <img className="subwork_image" src={Knitgif} alt="gif of a user navigating Knitworthy"/>
                <p className="subwork_text">In the knitting/crochet/fiber arts community, someone who appreciates a handmade gift and takes care of it is considered "knitworthy." 
                    Ravelry, a fiber arts website with over 9 million users, created a hub for sharing information about materials and techniques and a 
                    way to exchange and sell patterns in pdf form. Users can keep track of their yarn and their projects, entering stats about when they 
                    started and finished, the yarn they used, etc. Knitworthy uses the Ravelry API to pull information about users' projects and compares 
                    project data to real life time and length measurements to put the amount of love that goes into a handmade gift into perspective for 
                    someone who does not knit or crochet.</p>
                <span className="subwork_links">
                    <a href="https://github.com/abbeyperini/Knitworthy" target="_blank" rel="noreferrer"><Github className="work_icon"/></a>
                    <a href="http://knitworthy.net/" target="_blank" rel="noreferrer"><Chrome className="work_icon"/></a>
                </span>
            </div>
            <div id="OWS" className="subWork">
                <h2 className="subwork_title--primary">Old Wall Site</h2>
                <h3 className="subwork_title--secondary">Front End Hobby Project</h3>
                <div className="subWork_container_image">
                    <img className="old-wall_image" src={OWS1} alt="Old Wall Site mobile screenshot"/>
                    <img className="old-wall_image" src={OWS2} alt="Old Wall Site mobile screenshot"/>
                </div>
                <p className="subwork_text">During week 3 of the DigitalCrafts Full Stack Web Development course, we were given the optional "hardmode" prompt to copy a site from the 90's
                        (written in XML1) and make it responsive. The screenshots above are the new mobile layout I designed. Click below to see more screenshots 
                    in my github repo, including the desktop view I matched as close as possible to the original.</p>
                <span className="subwork_links">
                    <a href="https://github.com/abbeyperini/OldWallSite" target="_blank" rel="noreferrer"><Github className="work_icon" /></a>
                </span>
            </div>
        </div>
    )
}

export default Work;