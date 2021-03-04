import React from 'react';
import { ReactComponent as Github } from '../../images/github.svg';

function ThisSite() {
    return (
        <div id="this" className="this-subWork">
            <h2 className="subwork_title--primary">AbbeyPerini.dev</h2>
            <h3 className="subwork_title--secondary">Professional Website</h3>
            <p className="subwork_text">I wasn't happy with my professional portfolio being a template attached to the static personal site
            I built before starting my full-stack web development classes. While I've been job hunting, I've been building this site as a side project,
            and diving into aspects of front-end I love. It's built in React and CSS, incorporating react-transition-group. The landing page has the first svg I coded myself, and I've learned
            a lot about keyframes! I spent a lot of time on the light/dark mode - building the toggle, flipping it, adjusting its size, and making sure it shows the correct side no matter which theme is
             loaded. I enjoyed learning about CSS variables to create the dark and light themes, including getting the svgs to switch colors! This was the first project I deployed with Netlify, and setting up a serverless
             contact form was a breeze!</p>
            <span className="subwork_links">
                <a href="https://github.com/abbeyperini/Portfolio2.0" target="_blank" rel="noreferrer"><Github className="work_icon"/></a>
            </span>
        </div>
    )
}

export default ThisSite;