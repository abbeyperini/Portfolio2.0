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
                <li><p className="event_title">Commit Your Code 2025</p><a href="https://www.commityourcode.com/speakers" className="talk_link">Slot, Slots, Slots, Everybody!</a></li>
              </ul>
              <ul className="talk-list">
                <li><p className="event_title">React Summit US 2025</p><a href="https://gitnation.com/badges/react-summit-us-2025/abbey_perini" className="talk_link">Slot, Slots, Slots, Everybody!</a></li>
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
                <li><p className="event_title">Frontend Queens</p><a href="https://www.youtube.com/watch?v=cZJ19XzS3ng" rel="noreferrer" className="talk_link">Global Accessibility Awareness Day: Building an Inclusive Web</a></li>
                <li><p className="event_title">dotJS 2025</p><a href="https://www.youtube.com/watch?si=RLUgFmQFeyEjVyrg&v=mt2v2DX5Tno&feature=youtu.be" rel="noreferrer" className="talk_link">Coding and ADHD: Where We Excel</a></li>
                <li><p className="event_title">Netlify Compose 2024</p><a href="https://www.youtube.com/watch?v=hSotPlaVxjg&ab_channel=Netlify" rel="noreferrer" className="talk_link">Slots, Slots, Slots, Everybody!</a></li>
                <li><p className="event_title">Developers of the World</p><a href="https://youtu.be/C_E4xghf-8Y?t=20525" rel="noreferrer" className="talk_link"><p>Interview with James Q. Quick at THAT 2024</p></a></li>
                <li><p className="event_title">VueConf US 2024</p><a href="https://www.vuemastery.com/conferences/vueconf-us-2024/slots-slots-slots-everybody/" rel="noreferrer" className="talk_link"><p>Slots, Slots, Slots, Everybody!</p></a></li>
                <li><p className="event_title">TechLead Conference 2024</p><a href="https://portal.gitnation.org/contents/cognitive-load-and-your-development-environment" rel="noreferrer" className="talk_link"><p>Cognitive Load and Your Development Environment</p></a></li>
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