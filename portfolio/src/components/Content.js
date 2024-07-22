import React from 'react';
import SingleWrapper from "./SingleWrapper";
import devShiba from "../images/dev-shiba.png";

function Content({home}) {
    return (
      <SingleWrapper home={home}>
        {!home && <h1 className="offscreen">Abbey Perini's Portfolio | Content</h1>}
        <section aria-label="Content" className="container_content" name="Content">
            <h2 className="section_title">Content</h2>
            <div className="secondary-container content-content">
              <img src={devShiba} className="content-graphic" alt="a shiba inu wearing glasses and a bowtie and working on a laptop covered in stickers" />
              <p>You can find my writing on <a href="https://dev.to/abbeyperini" rel="noreferrer">DEV</a> and <a href="https://abbeyperini.hashnode.dev/" rel="noreferrer">Hashnode</a>, and in my <a href="https://www.abbeyperini.com" rel="noreferrer">digital garden</a> (a work in progress).</p>
              <p>In 2024, my goal is to get better at making videos, which you can find on <a href="https://www.tiktok.com/@abbeyperinicodes/" rel="noreferrer">TikTok</a> and <a href="https://www.youtube.com/channel/UCJYky0mE6tqM9hMDsQAIrEg" rel="noreferrer">YouTube</a>.</p>
              <p>If you have found my content valuable and want to show your appreciation, you can <a href="https://abbeyperini.shop" rel="noreferrer" >send me a lil treat</a>.</p>
            </div>
        </section>
      </SingleWrapper>
    )
}

export default Content;