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
              <h3>Upcoming Talks</h3>
              <ul className="talk-list">
                <li><a href="https://thatconference.com/activities/Kol7lX7IoKykdx4xv6jR" target="_blank" rel="noreferrer" className="talk_link"><p className="event_title">THAT WI</p><ExternalLink className="external-link" id="THATLink" focusable="false"/></a><p>July 31, 2024</p></li>
                <li><a href="https://www.meetup.com/modernwebatl/events/302355679" className="talk_link"><p className="event_title">Modern Web + ATLJS event</p><ExternalLink className="external-link" id="ModernWebLink" focusable="false"/></a><p>August 13, 2024</p></li>
                <li><a href="https://www.netlify.com/compose/" target="_blank" rel="noreferrer" className="talk_link"><p className="event_title">Netlify Compose</p><ExternalLink className="external-link" id="ComposeLink" focusable="false"/></a><p>October 3, 2024</p></li>
                <li><a href="https://javascript-conference.com/general-web-development/beginners-guide-http/" target="_blank" rel="noreferrer" className="talk_link"><p className="event_title">iJS</p><ExternalLink className="external-link" id="iJsLink" focusable="false"/></a><p>October 8, 2024</p></li>
                <li><a href="https://2024.allthingsopen.org/speakers/abbey-perini" target="_blank" rel="noreferrer" className="talk_link"><p className="event_title">All Things Open</p><ExternalLink className="external-link" id="ATOLink" focusable="false"/></a><p>October 27-29, 2024</p></li>
              </ul>
              <h3>Recordings of Past Talks</h3>
              <ul className="talk-list">
                <li><p className="event_title">TechLead Conference 2024</p><a href="https://portal.gitnation.org/contents/cognitive-load-and-your-development-environment" target="_blank" rel="noreferrer" className="talk_link"><p>Cognitive Load and Your Developent Environment</p><ExternalLink className="external-link" id="TechLeadLink" focusable="false"/></a></li>
                <li><p className="event_title">StirTrek 2024</p><a href="https://www.youtube.com/watch?v=jghWtOIYP54&t=6s&ab_channel=StirTrek" target="_blank" rel="noreferrer" className="talk_link"><p>#gitPanic - Merging and Rebasing</p><ExternalLink className="external-link" id="StirTrekLink" focusable="false"/></a></li>
                <li><p className="event_title">MagnoliaJS 2023</p><a href="https://youtu.be/mr6rWFgh_1E?t=20463" target="_blank" rel="noreferrer" className="talk_link"><p>Cognitive Load and Your Development Environment</p><ExternalLink className="external-link" id="MagnoliaLink" focusable="false"/></a></li>
                <li><p className="event_title">The Monthly dev #32</p><a href="https://www.youtube.com/watch?v=XWW1hQEnERQ&ab_channel=dailydev" target="_blank" rel="noreferrer" className="talk_link"><p>Getting Started in a New Codebase</p><ExternalLink className="external-link" id="MonthlyDevLink" focusable="false"/></a></li>
                <li><p className="event_title">JSDrops</p><a href="https://dropjs.com/from-idea-to-design-for-non-designers-with-abbey-perini" target="_blank" rel="noreferrer" className="talk_link"><p>From Idea to Design for Non-Designers</p><ExternalLink className="external-link" id="JSDropsLink" focusable="false"/></a></li>
                <li><p className="event_title">Front-end Foxes Day 2022</p><a href="https://cfe.dev/sessions/fefd2022-semantic-html/" target="_blank" rel="noreferrer" className="talk_link"><p>Semantic HTML: What, Why, and How</p><ExternalLink className="external-link" id="HTMLLink" focusable="false"/></a></li>
              </ul>
              <a href="/contact" className="speaking_CTA">Invite Me to Speak <Arrow className="button_arrow" focusable="false"/></a>
            </div>
        </section>
    </SingleWrapper>
    )
}

export default Speaking;