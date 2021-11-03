import React from 'react';
import headshot from '../images/headshot.jpg';
import { ReactComponent as JSLogo } from '../images/javascript.svg';
import { ReactComponent as PythonLogo } from '../images/python.svg';
import { ReactComponent as HTMLLogo } from '../images/html.svg';
import { ReactComponent as CSSLogo } from '../images/css3.svg';
import { ReactComponent as NodeLogo } from '../images/node.svg';
import { ReactComponent as ReactLogo } from '../images/react.svg';
import { ReactComponent as ReduxLogo } from '../images/redux.svg';
import { ReactComponent as PostgreSQLLogo } from '../images/postgresql.svg';
import { ReactComponent as Download } from '../images/download.svg';
import resume from '../assets/abbeyperiniresume.pdf';

function About() {

    return (
        <div className="container_about">
            <h2 className="section_title">About Abbey</h2>
            <div className="subAbout">
                <img alt="headshot of Abbey Perini wearing a red collared shirt with white polka dots and red lipstick" src={headshot} className="about_headshot" />
                <p className="about_text">My name is Abbey Perini, but my friends call me Abbey Normal. I've always been an out of the box thinker 
                    and worked in multiple industries before falling in love with coding. My organization and attention to detail
                    are outstanding, but my main strength is in spotting problems and solving them. You can see some of my more
                    creative problem solving in my work. For more details about my experience and skills, download my <a href={resume} download="AbbeyPeriniResume">resume<Download className="download-file" id="DownloadResumeAbout" focusable="false"/></a>.
                    Outside of work, I am a person of many hobbies. I'm a certified yoga teacher. I love creating fiber arts projects 
                    and costumes, but I also dabble in video games, embroidery, baking, cooking, and art of many kinds. I live just
                    outside Atlanta with my husband and dog.</p>
                <div aria-label="About Abbey" className="container_skills-icon">
                    <JSLogo className="skills-icon" focusable="false" />
                    <PythonLogo className="skills-icon" focusable="false" />
                    <HTMLLogo className="skills-icon" focusable="false" />
                    <CSSLogo className="skills-icon" focusable="false" />
                    <NodeLogo className="skills-icon" focusable="false" />
                    <ReactLogo className="skills-icon" focusable="false" />
                    <ReduxLogo className="skills-icon" focusable="false" />
                    <PostgreSQLLogo className="skills-icon" focusable="false" />
                </div>
            </div>
        </div>
    )
}

export default About;