import React from 'react';
import SingleWrapper from "./SingleWrapper";
import { ReactComponent as ExternalLink } from '../images/external-link.svg';
import { ReactComponent as ConstructionShiba } from '../images/construction-shiba-inu.svg'

function Blog({home}) {
    return (
      <SingleWrapper home={home}>
        <section aria-label="Blog" className="container_blog" name="Blog">
            <h2 className="section_title">Blog</h2>
            <div className="secondary-container blog-content">
              <p>Right now, you can find my writing on <a href="https://dev.to/abbeyperini" target="_blank" rel="noreferrer" aria-label="link to Abbey's Profile on DEV">DEV</a><ExternalLink className="external-link" id="DEVExternalLink" focusable="false"/> and <a href="https://abbeyperini.hashnode.dev/" target="_blank" rel="noreferrer" aria-label="link to Abbey's Profile on Hashnode">Hashnode</a><ExternalLink className="external-link" id="HashnodeExternalLink" focusable="false"/>.
              When I make a bit more progress, all my blogs will be in my <a href="https://www.abbeyperini.com">digital garden</a><ExternalLink className="external-link" id="AuditBlogSeriesExternalLink" focusable="false"/>.</p>
              <ConstructionShiba className="loading-graphic" />
            </div>
        </section>
      </SingleWrapper>
    )
}

export default Blog;