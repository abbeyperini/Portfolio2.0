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
                <li><p className="event_title">CodeMash 2026</p><a href="https://events.codemash.org/2026CodeMashConference#/agenda?day=3&lang=en&speakerId=76186000008346098&viewMode=2" className="talk_link">#gitPanic - Restoring Lost Work, Fiber Arts as Programming Workshop</a></li>
              </ul>
              <h3>Testimonials</h3>
              <ul>
                <li><p>"Should be a voice actor"</p></li>
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
              <a href="/contact" className="speaking_CTA">Invite Me to Speak <Arrow className="button_arrow" focusable="false"/></a>
            </div>
        </section>
    </SingleWrapper>
    )
}

export default Speaking;