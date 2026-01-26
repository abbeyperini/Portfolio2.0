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
import { ReactComponent as ESLogo } from "../images/es.svg";

function About({home}) {

    return (
      <SingleWrapper home={home}>
        <section aria-labelledby="about" className="container_about flex-container">
            {!home && <h1 className="offscreen">Abbey Perini's Portfolio | About</h1>}
            <h2 id="about" className="section_title">About Abbey</h2>
            <div className="about">
                <img alt="headshot of Abbey Perini wearing a cape blazer, a white button down shirt, a burgundy tie, and burgundy lipstick smiling at the camera. She is pale white with blue eyes and shoulder-length blonde hair." src={headshot} className="about_headshot" />
                <p className="about_text">Abbey Perini is many things - a metro Atlanta native, person of many hobbies, full-stack web developer, accessibility advocate, international speaker, and technical writer with ✨over 500,000 views.✨</p>
                <p className="about_text">She's full-stack in the truest sense - give her a problem and she'll figure it out. Passionate about accessibility, she's worked in Vue, React, and even AngularJS(2013). She's spent her development career rectifying tech debt in existing codebases.</p>            
                <div className="container_skills-icon">
                    <JSLogo className="skills-icon" focusable="false" />
                    <PythonLogo className="skills-icon" focusable="false" />
                    <HTMLLogo className="skills-icon" focusable="false" />
                    <CSSLogo className="skills-icon" focusable="false" />
                    <NodeLogo className="skills-icon" focusable="false" />
                    <img alt="Vue logo" title="Vue logo" src={vueLogo} className="vue-icon" focusable="false" />
                    <NuxtLogo className="nuxt-icon" focusable="false" />
                    <img alt="Pinia logo" title="Pinia logo" src={piniaLogo} className="pinia-icon" focusable="false" />
                    <ReactLogo className="skills-icon" focusable="false" />
                    <ReduxLogo className="skills-icon" focusable="false" />
                    <PostgreSQLLogo className="skills-icon" focusable="false" />
                    <DockerLogo className="skills-icon" focusable="false" />
                    <NextLogo className="skills-icon" focusable="false" />
                    <AngularLogo className="skills-icon" focusable="false" />
                    <TSLogo className="skills-icon" focusable="false" />
                    <GCLogo className="skills-icon" focusable="false" />
                    <AWSLogo className="skills-icon" focusable="false" />
                    <ESLogo className="skills-icon" focusable="false" />
                </div>
            </div>
        </section>
      </SingleWrapper>
    )
}

export default About;