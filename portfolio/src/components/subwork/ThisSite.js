import React from 'react';
import { ReactComponent as Github } from '../../images/github.svg';
import { ReactComponent as ExternalLink } from '../../images/external-link.svg';

function ThisSite() {
    return (
        <div id="this" className="this-subWork">
            <h3 className="subwork_title--primary">abbeyperini.dev</h3>
            <h4 className="subwork_title--secondary">Portfolio Website</h4>
            <p className="subwork_text">
              Back in early 2021, I was job hunting and not happy with my professional portfolio being a template attached to a static personal site.
               I built this site to showcase what I enjoy about building webpages and what I had learned while studying before, during, and after bootcamp. It's built
               in React and CSS, incorporating react-transition-group. This was the first site I deployed on Netlify, and the landing page has
               the first SVG I coded myself. I learned a lot about keyframes and CSS variables building the <a href="https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9"  target="_blank" rel="noreferrer" aria-label="link to Abbey's dark mode toggle tutorial on DEV">dark mode toggle!</a><ExternalLink className="external-link" id="ToggleBlogExternalLink" focusable="false"/> Since then,
               I've added my <a href="https://dev.to/abbeyperini/a-walkthrough-of-updating-my-portfolio-site-with-netlify-functions-and-the-dev-to-api-dd2" target="_blank" rel="noreferrer" aria-label="link to Abbey's walkthrough blog post on DEV">DEV blog posts</a><ExternalLink className="external-link" id="WalkthroughBlogExternalLink" focusable="false"/> using
               Netlify's serverless functions and conducted an <a href="https://dev.to/abbeyperini/series/15625" target="_blank" rel="noreferrer" aria-label="link to Abbey's Accessibility Audit Series' Articles on DEV">accessibility audit.</a><ExternalLink className="external-link" id="AuditBlogSeriesExternalLink" focusable="false"/>
               
            </p>
            <span className="subwork_links">
                <a className="link-new-tab" href="https://github.com/abbeyperini/Portfolio2.0" target="_blank" rel="noreferrer"><Github id="ThisSiteGithub" aria-label="open Github repository for this site in a new tab" focusable="true" className="work_icon"/></a>
            </span>
        </div>
    )
}

export default ThisSite;