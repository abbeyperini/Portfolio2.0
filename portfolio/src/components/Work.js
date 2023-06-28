import React from 'react';
import SingleWrapper from "./SingleWrapper";
import Gachasphere from './work/Gachasphere';
import BujoToGo from './work/BujoToGo';
import Knitworthy from './work/Knitworthy';
import OWS from './work/OWS';
import ThisSite from './work/ThisSite';

function Work({home}) {
    return (
      <SingleWrapper home={home}>
        {!home && <h1 className="offscreen">Abbey Perini's Portfolio | Work</h1>}
        <section aria-label="Portfolio project descriptions" className="container_work" name="work">
            <h2 className="section_title">Portfolio</h2>
            <ThisSite />
            <Gachasphere />
            <BujoToGo />
            <Knitworthy />
            <OWS />
        </section>
      </SingleWrapper>
    )
}

export default Work;