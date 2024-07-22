import React from 'react';
import SingleWrapper from "./SingleWrapper";
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
                <li><a href="https://thatconference.com/activities/Kol7lX7IoKykdx4xv6jR" rel="noreferrer" className="talk_link"><p className="event_title">THAT WI</p></a><p>July 31, 2024</p></li>
                <li><a href="https://www.meetup.com/modernwebatl/events/302355679" className="talk_link"><p className="event_title">Modern Web + ATLJS event</p></a><p>August 13, 2024</p></li>
                <li><a href="https://www.netlify.com/compose/" rel="noreferrer" className="talk_link"><p className="event_title">Netlify Compose</p></a><p>October 3, 2024</p></li>
                <li><a href="https://javascript-conference.com/general-web-development/beginners-guide-http/" rel="noreferrer" className="talk_link"><p className="event_title">iJS</p></a><p>October 8, 2024</p></li>
                <li><a href="https://2024.allthingsopen.org/speakers/abbey-perini" rel="noreferrer" className="talk_link"><p className="event_title">All Things Open</p></a><p>October 27-29, 2024</p></li>
                <li><a href="https://2024.connect.tech/session/682054" rel="noreferrer" className="talk_link"><p className="event_title">Connect.Tech</p></a><p>November 18-20, 2024</p></li>
              </ul>
              <h3>Recordings of Past Talks</h3>
              <ul className="talk-list">
                <li><p className="event_title">TechLead Conference 2024</p><a href="https://portal.gitnation.org/contents/cognitive-load-and-your-development-environment" rel="noreferrer" className="talk_link"><p>Cognitive Load and Your Developent Environment</p></a></li>
                <li><p className="event_title">StirTrek 2024</p><a href="https://www.youtube.com/watch?v=jghWtOIYP54&t=6s&ab_channel=StirTrek" rel="noreferrer" className="talk_link"><p>#gitPanic - Merging and Rebasing</p></a></li>
                <li><p className="event_title">MagnoliaJS 2023</p><a href="https://youtu.be/mr6rWFgh_1E?t=20463" rel="noreferrer" className="talk_link"><p>Cognitive Load and Your Development Environment</p></a></li>
                <li><p className="event_title">The Monthly dev #32</p><a href="https://www.youtube.com/watch?v=XWW1hQEnERQ&ab_channel=dailydev" rel="noreferrer" className="talk_link"><p>Getting Started in a New Codebase</p></a></li>
                <li><p className="event_title">JSDrops</p><a href="https://dropjs.com/from-idea-to-design-for-non-designers-with-abbey-perini" rel="noreferrer" className="talk_link"><p>From Idea to Design for Non-Designers</p></a></li>
                <li><p className="event_title">Front-end Foxes Day 2022</p><a href="https://cfe.dev/sessions/fefd2022-semantic-html/" rel="noreferrer" className="talk_link"><p>Semantic HTML: What, Why, and How</p></a></li>
              </ul>
              <a href="/contact" className="speaking_CTA">Invite Me to Speak <Arrow className="button_arrow" focusable="false"/></a>
            </div>
        </section>
    </SingleWrapper>
    )
}

export default Speaking;