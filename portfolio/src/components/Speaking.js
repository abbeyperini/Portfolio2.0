import React from 'react';
import SingleWrapper from "./SingleWrapper";
import { ReactComponent as ExternalLink } from '../images/external-link.svg';
import { ReactComponent as Arrow } from '../images/arrow.svg';

function Speaking({home}) {
    return (
      <SingleWrapper home={home}>
        {!home && <h1 className="offscreen">Abbey Perini's Portfolio | Speaking</h1>}
        <section aria-label="Speaking" className="container_speaking" name="Speaking">
            <h2 className="section_title">Speaking</h2>
            <div className="talks secondary-container">
            <ul className="talk-list">
              <li><a href="https://youtu.be/mr6rWFgh_1E?t=20463" target="_blank" rel="noreferrer">MagnoliaJS 2023 Day 2</a><ExternalLink className="external-link" id="MagnoliaLink" focusable="false"/></li>
              <li><a href="https://dropjs.com/from-idea-to-design-for-non-designers-with-abbey-perini" target="_blank" rel="noreferrer">From Idea to Design for Non-Designers on JSDrops</a><ExternalLink className="external-link" id="JSDropsLink" focusable="false"/></li>
              <li><a href="https://cfe.dev/sessions/fefd2022-semantic-html/" target="_blank" rel="noreferrer">Front-end Foxes Day - Semantic HTML: What, Why, and How</a><ExternalLink className="external-link" id="HTMLLink" focusable="false"/></li>
              <li><a href="https://www.youtube.com/watch?v=qYPq9Fd-SE4&list=PLh9uT23TA65gwNgoeeZ21XWlxLOwxs3Ls&index=8&ab_channel=VirtualCoffee" target="_blank" rel="noreferrer">Lightning Talk - Semantic HTML: What, Why, and How</a><ExternalLink className="external-link" id="LightningHTMLLink" focusable="false"/></li>
              <li><a href="https://www.youtube.com/watch?v=XwPVZNvP_IM&list=PLh9uT23TA65idCyc_orC85RefgY_-fKsG&index=6&ab_channel=VirtualCoffee" target="_blank" rel="noreferrer">Optimize Your Resume For Both A Hiring Manager And An ATS</a><ExternalLink className="external-link" id="OptimizeLink" focusable="false"/></li>
              <li><a href="https://virtualcoffee.io/podcast/0302-abbey-perini" target="_blank" rel="noreferrer">Finding Confidence and Opportunities</a><ExternalLink className="external-link" id="ConfidenceTalkLink" focusable="false"/></li>
              <li><a href="https://www.youtube.com/watch?v=NVaZu8--4p0&list=PLh9uT23TA65idCyc_orC85RefgY_-fKsG&index=18&ab_channel=VirtualCoffee" target="_blank" rel="noreferrer">Promoting Yourself to Potential Employers</a><ExternalLink className="external-link" id="PromotingTalkLink" focusable="false"/></li>
            </ul>
            <a href="/contact" className="speaking_CTA">Invite Me to Speak <Arrow className="button_arrow" focusable="false"/></a>
            </div>
        </section>
    </SingleWrapper>
    )
}

export default Speaking;