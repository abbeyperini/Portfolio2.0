import React from 'react';
import Gachasphere from './subwork/Gachasphere';
import BujoToGo from './subwork/BujoToGo';
import Knitworthy from './subwork/Knitworthy';
import OWS from './subwork/OWS';
import ThisSite from './subwork/ThisSite';

function Work() {
    return (
        <div className="container_work" name="work">
            <h1 className="section_title">Portfolio</h1>
            <ThisSite />
            <Gachasphere />
            <BujoToGo />
            <Knitworthy />
            <OWS />
        </div>
    )
}

export default Work;