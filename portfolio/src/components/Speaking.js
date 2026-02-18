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
                <li><p className="event_title">VueConfUS 2026</p><a href="https://vueconf.us/#speakers" className="talk_link">Universal Lessons Learned from Legacy Codebases</a></li>
              </ul>
              <h3>Testimonials</h3>
              <ul>
                <li><p>"Should be a voice actor" - many</p></li>
                <li><p>"Very energetic" - anonymous</p></li>
                <li><p>"A big deal" - Danny Thompson</p></li>
                <li><p>"Intimidatingly good" - James Q. Quick</p></li>
                <li><p>"A wonderful talk, and ...brilliant at the event" - Phil Hawksworth</p></li>
              </ul>
              <h3>Recordings of Past Talks</h3>
              <ul className="talk-list">
                <li><p className="event_title">React Summit 2025</p><a href="https://gitnation.com/contents/slots-slots-slots-everybody" rel="noreferrer" className="talk_link">Slots, Slots, Slots, Everybody!</a></li>
                <li><p className="event_title">Frontend Queens</p><a href="https://www.youtube.com/watch?v=cZJ19XzS3ng" rel="noreferrer" className="talk_link">Global Accessibility Awareness Day: Building an Inclusive Web</a></li>
                <li><p className="event_title">dotJS 2025</p><a href="https://www.youtube.com/watch?si=RLUgFmQFeyEjVyrg&v=mt2v2DX5Tno&feature=youtu.be" rel="noreferrer" className="talk_link">Coding and ADHD: Where We Excel</a></li>
                <li><p className="event_title">TechLead Conference 2024</p><a href="https://portal.gitnation.org/contents/cognitive-load-and-your-development-environment" rel="noreferrer" className="talk_link"><p>Cognitive Load and Your Development Environment</p></a></li>
                <li><p className="event_title">StirTrek 2024</p><a href="https://www.youtube.com/watch?v=jghWtOIYP54&t=6s&ab_channel=StirTrek" rel="noreferrer" className="talk_link"><p>#gitPanic - Merging and Rebasing</p></a></li>
                <li><p className="event_title">The Monthly dev #32</p><a href="https://www.youtube.com/watch?v=XWW1hQEnERQ&ab_channel=dailydev" rel="noreferrer" className="talk_link"><p>Getting Started in a New Codebase</p></a></li>
                <li><p className="event_title">JSDrops</p><a href="https://dropjs.com/from-idea-to-design-for-non-designers-with-abbey-perini" rel="noreferrer" className="talk_link"><p>From Idea to Design for Non-Designers</p></a></li>
              </ul>
              <h3>Interviews and More</h3>
              <ul className="talk-list">
                <li><a href="https://overcommitted.dev/accessibility-fiber-arts-and-adhd-with-abbey-perini/">Overcommitted Podcast</a></li>
                <li><a href="https://www.youtube.com/watch?si=QrlWH64qghXtDpe1&v=rgt5GPFgryI&feature=youtu.be" rel="noreferrer" className="talk_link">FreeCodeCamp Podcast</a></li>
                <li><a href="https://codetv.dev/series/web-dev-challenge/s2/e1-build-a-custom-api-postman" rel="noreferrer" className="talk_link">Web Dev Challenge</a></li>
                <li><a href="https://youtu.be/C_E4xghf-8Y?t=20525" rel="noreferrer" className="talk_link">Developers of the World with James Q. Quick</a></li>
              </ul>
              <a href="/contact" className="speaking_CTA">Invite Me to Speak <Arrow className="button_arrow" focusable="false"/></a>
            </div>
        </section>
    </SingleWrapper>
    )
}

export default Speaking;