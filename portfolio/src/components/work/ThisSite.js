import React from 'react';
import { ReactComponent as Github } from '../../images/github.svg';
import { ReactComponent as ExternalLink } from '../../images/external-link.svg';

function ThisSite() {
    return (
        <div id="this" className="work_this">
            <h3 className="work_title--primary">abbeyperini.dev</h3>
            <h4 className="work_title--secondary">Portfolio Website</h4>
            <p className="work_text">
              Back in early 2021, I was job hunting and not happy with my professional portfolio being a template attached to a static personal site.
               I built this site to showcase what I enjoy about building webpages and what I had learned while studying before, during, and after bootcamp. It's built
               in React and CSS, incorporating react-transition-group. This was the first site I deployed on Netlify, and the landing page has
               the first SVG I coded myself. I learned a lot about keyframes and CSS variables building the <a href="https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9"  target="_blank" rel="noreferrer" aria-label="link to Abbey's dark mode toggle tutorial on DEV">dark mode toggle!</a><ExternalLink className="external-link" id="ToggleBlogExternalLink" focusable="false"/> 
               Since then, I <a href="https://dev.to/abbeyperini/series/15625" target="_blank" rel="noreferrer" aria-label="link to Abbey's Accessibility Audit Series' Articles on DEV">conducted an accessibility audit,</a><ExternalLink className="external-link" id="AuditBlogSeriesExternalLink" focusable="false"/> 
               <a href="https://dev.to/abbeyperini/what-are-favicons-2e9d" target="_blank" rel="noreferrer" aria-label="link to Abbey's Favicon Article on DEV">updated my favicons,</a><ExternalLink className="external-link" id="FaviconExternalLink" focusable="false"/> 
               <a href="https://dev.to/abbeyperini/a-walkthrough-of-updating-my-portfolio-site-with-netlify-functions-and-the-dev-to-api-dd2" target="_blank" rel="noreferrer" aria-label="link to Abbey's Netlify serverless functions blog post on DEV">added Netlify serverless functions</a><ExternalLink className="external-link" id="WalkthroughBlogExternalLink" focusable="false"/>
               <a href="https://dev.to/abbeyperini/adding-shiba-inu-loading-and-error-svgs-to-my-react-site-lnj" target="_blank" rel="noreferrer" aria-label="link to Abbey's SVG Article on DEV"> added Shiba Inu loading and error SVGs,</a><ExternalLink className="external-link" id="ShibaInuExternalLink" focusable="false"/>
               {" and "}
               <a href="https://dev.to/abbeyperini/dark-mode-toggle-and-prefers-color-scheme-4f3m" target="_blank" rel="noreferrer" aria-label="link to Abbey's Prefers Color Scheme Article on DEV">updated the dark mode toggle.</a><ExternalLink className="external-link" id="PrefersColorSchemeLink" focusable="false"/>
               
            </p>
            <span className="work_links">
                <a className="link-new-tab" href="https://github.com/abbeyperini/Portfolio2.0" target="_blank" rel="noreferrer"><Github id="ThisSiteGithub" aria-label="open Github repository for this site in a new tab" focusable="true" className="work_icon"/></a>
            </span>
        </div>
    )
}

export default ThisSite;