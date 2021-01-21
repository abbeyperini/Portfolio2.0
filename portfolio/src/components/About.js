import React from 'react';
import JSLogo from '../images/javascript-js-seeklogo.com.svg';
import PythonLogo from '../images/python-logo-generic.svg';
import HTMLLogo from '../images/html-5.svg';
import CSSLogo from '../images/css3.svg';
import NodeLogo from '../images/nodejs-new-pantone-black.png';
import ReactLogo from '../images/react-js-blog-header.png';
import ReduxLogo from '../images/redux.png';
import PostgreSQLLogo from '../images/postgresql-logo.png';

function About() {
    // add headshot, resume, and skills
    return (
        <div className="container_about">
            <h2 className="section_title">About Abbey</h2>
            <p className="about_text">My name is Abbey Perini, but my friends call me Abbey Normal. I've always been an out of the box thinker 
                and worked in multiple industries before falling in love with coding. My organization and attention to detail
                are outstanding, but my main strength is in spotting problems and solving them. You can see some of my more
                creative problem solving in my work. For more details about my experience and skills, download my resume.
                Outside of work, I am a person of many hobbies. I'm a certified yoga teacher. I love creating fiber arts projects 
                and costumes, but I also dabble in video games, embroidery, baking, cooking, and art of many kinds. I live just
                outside Atlanta with my husband and dog.</p>
            <div className="container_skills-icon">
                <img className="skills-icon" alt="JavaScript-icon" src={JSLogo} />
                <img className="skills-icon" alt="Python icon" src={PythonLogo} />
                <img className="skills-icon" alt="HTML icon" src={HTMLLogo} />
                <img className="skills-icon" alt="CSS icon" src={CSSLogo} />
                <img className="skills-icon" alt="Node icon" src={NodeLogo} />
                <img className="skills-icon" alt="React icon" src={ReactLogo} />
                <img className="skills-icon" alt="Redux icon" src={ReduxLogo} />
                <img className="skills-icon" alt="PostgreSQL icon" src={PostgreSQLLogo} />
            </div>
        </div>
    )
}

export default About;