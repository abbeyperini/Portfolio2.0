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
              <p>If you want to buy stickers or send me a lil treat, check out <a href="https://abbeyperini.shop" rel="noreferrer" >my shop</a>.</p>
              <h3>Writing Awards and Honors</h3>
              <ul>
                <li><p>More than 460,000 total blog views</p></li>
                <li><p>About 10,000 blog views a month</p></li>
                <li><p>A Top Author on <a href="https://dev.to" rel="noreferrer">DEV</a> 2021 - 2023</p></li>
                <li><p>The most Top 7 badges of any author on <a href="https://dev.to" rel="noreferrer">DEV</a> in 2023</p></li>
                <li class="content_link"><p>2022 Hackernoon Contributor of the Year - </p><a href="https://noonies.hackernoon.com/2022/internet-heroes/2022-hackernoon-contributor-of-the-year-beginners-guide" rel="noreferrer">Beginners-Guide</a></li>
                <li class="content_link"><p>2022 Hackernoon Contributor of the Year - </p><a href="https://noonies.hackernoon.com/2022/programming/2022-hackernoon-contributor-of-the-year-refactoring" rel="noreferrer">Refactoring</a></li>
                <li class="content_link"><p>Quoted in the</p><a href="https://stackoverflow.blog/2023/12/26/developer-with-adhd-youre-not-alone/" rel="noreferrer">Stackoverflow blog on ADHD</a></li>
              </ul>
              <h3>Testimonials</h3>
              <ul>
                <li><p>"Very helpful"</p></li>
                <li><p>"Life changing" - Luiz Amaral</p></li>
                <li><p>"Inspiring and reassuring" - Sara Brielmaier</p></li>
                <li><p>"Abbey's articles are so informative and enjoyable to read." - Ayu Adiati</p></li>
                <li><p>"At first I thought I was reading something from a national publication" - Julia Seidman</p></li>
                <li><p>"I think I've learned more from this article than my college classes about computer networks." - Leticia Pegoraro Garcez</p></li>
              </ul>
            </div>
        </section>
      </SingleWrapper>
    )
}

export default Content;