import React from 'react';
import SingleWrapper from "./SingleWrapper";
import { ReactComponent as ExternalLink } from '../images/external-link.svg';
import { ReactComponent as ConstructionShiba } from '../images/construction-shiba-inu.svg'

function Blog({home}) {
    return (
      <SingleWrapper home={home}>
        {!home && <h1 className="offscreen">Abbey Perini's Portfolio | Blog</h1>}
        <section aria-label="Blog" className="container_blog" name="Blog">
            <h2 className="section_title">Blog</h2>
            <div className="secondary-container blog-content">
              <p>Right now, you can find my writing on <a href="https://dev.to/abbeyperini" target="_blank" rel="noreferrer" aria-label="link to Abbey's Profile on DEV">DEV</a><ExternalLink className="external-link" id="DEVExternalLinkBlog" focusable="false"/> and <a href="https://abbeyperini.hashnode.dev/" target="_blank" rel="noreferrer" aria-label="link to Abbey's Profile on Hashnode">Hashnode</a><ExternalLink className="external-link" id="HashnodeExternalLinkBlog" focusable="false"/>.
              All my writing is in my <a href="https://www.abbeyperini.com">digital garden</a><ExternalLink className="external-link" id="GardenExternalLink" focusable="false"/>, but it is a work in progress.</p>
              <ConstructionShiba className="loading-graphic" />
            </div>
        </section>
      </SingleWrapper>
    )
}

export default Blog;