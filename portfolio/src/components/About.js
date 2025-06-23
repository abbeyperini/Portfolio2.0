import React from 'react';
import SingleWrapper from "./SingleWrapper";
import headshot from '../images/headshot.jpg';
import { ReactComponent as JSLogo } from '../images/javascript.svg';
import { ReactComponent as PythonLogo } from '../images/python.svg';
import { ReactComponent as HTMLLogo } from '../images/html.svg';
import { ReactComponent as CSSLogo } from '../images/css3.svg';
import { ReactComponent as NodeLogo } from '../images/node.svg';
import vueLogo from "../images/Vue.png";
import { ReactComponent as NuxtLogo } from "../images/nuxt.svg";
import piniaLogo from "../images/PiniaLogo.png";
import { ReactComponent as ReactLogo } from '../images/react.svg';
import { ReactComponent as ReduxLogo } from '../images/redux.svg';
import { ReactComponent as PostgreSQLLogo } from '../images/postgresql.svg';
import { ReactComponent as DockerLogo } from '../images/docker.svg';
import { ReactComponent as NextLogo } from '../images/nextjs.svg';
import { ReactComponent as TSLogo } from '../images/typescript.svg';
import { ReactComponent as AngularLogo } from '../images/angularjs.svg';
import { ReactComponent as GCLogo } from '../images/google-cloud.svg';
import { ReactComponent as AWSLogo } from '../images/aws-amplify.svg';

function About({home}) {

    return (
      <SingleWrapper home={home}>
        <section aria-labelledby="about" className="container_about flex-container">
            {!home && <h1 className="offscreen">Abbey Perini's Portfolio | About</h1>}
            <h2 id="about" className="section_title">About Abbey</h2>
            <div className="about">
                <img alt="headshot of Abbey Perini wearing a cape blazer, a white button down shirt, a burgundy tie, and burgundy lipstick smiling at the camera. She is pale white with blue eyes and shoulder-length blonde hair." src={headshot} className="about_headshot" />
                <p className="about_text">Abbey Perini is many things - a metro Atlanta native, a person of many hobbies, and a full-stack web developer. Passionate about accessibility, she's worked in Vue, React, and even AngularJS (2013). She's happiest problem solving in the front-end, back-end, and all the APIs and microservices in between. She's spent her development career rectifying tech debt in existing codebases. She loves blogging and speaking about fun and useful things about programming, especially if it helps other developers.</p>
                <div className="container_skills-icon">
                    <JSLogo className="skills-icon" focusable="false" />
                    <PythonLogo className="skills-icon" focusable="false" />
                    <HTMLLogo className="skills-icon" focusable="false" />
                    <CSSLogo className="skills-icon" focusable="false" />
                    <NodeLogo className="skills-icon" focusable="false" />
                    <img alt="Vue logo" src={vueLogo} className="vue-icon" focusable="false" />
                    <NuxtLogo className="nuxt-icon" focusable="false" />
                    <img alt="Pinia logo" src={piniaLogo} className="pinia-icon" focusable="false" />
                    <ReactLogo className="skills-icon" focusable="false" />
                    <ReduxLogo className="skills-icon" focusable="false" />
                    <PostgreSQLLogo className="skills-icon" focusable="false" />
                    <DockerLogo className="skills-icon" focusable="false" />
                    <NextLogo className="skills-icon" focusable="false" />
                    <AngularLogo className="skills-icon" focusable="false" />
                    <TSLogo className="skills-icon" focusable="false" />
                    <GCLogo className="skills-icon" focusable="false" />
                    <AWSLogo className="skills-icon" focusable="false" />
                </div>
            </div>
        </section>
      </SingleWrapper>
    )
}

export default About;