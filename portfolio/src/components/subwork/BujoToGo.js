import React from 'react';
import { ReactComponent as Chrome } from '../../images/chrome.svg';
import { ReactComponent as Github } from '../../images/github.svg';
import Bujogif from '../../images/BujoToGo.gif';

function BujoToGo() {
    return (
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
                <a href="https://github.com/abbeyperini/BujoToGo" target="_blank" rel="noreferrer"><Github id="BujoToGoGithub" aria-labelledby="link to BujoToGo Github repo" focusable="true" className="work_icon"/></a>
                <a href="http://bujo-to-go.surge.sh/#/index" target="_blank" rel="noreferrer"><Chrome id="BujoToGoChrome" aria-labelledby="link to BujoToGo live site" focusable="true" className="work_icon"/></a>
            </span>
        </div>
    )
}

export default BujoToGo;