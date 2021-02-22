import React from 'react';
import Blog3Cover from '../../images/blog3Cover.png';
import Blog3Button from '../../images/button.gif';

function Blog3() {
    return (
        <article>
            <img src={Blog3Cover} alt="a tan login button with offset border on a blue background"></img>
            <h1>CSS Animated Button with Offset Border</h1>
            <h2>Originally published on Medium on December 16, 2020</h2>
            <p>I’m a believer in finding joy in the little things, and during
                my last project, that little thing was this button. I have been reading a lot about web design, and wanted my primary buttons to stand out in a big way. I had seen an
                image of a square button with an offset border while researching a design for an even earlier project, but never got the time to implement it. So for weeks, I’ve been
                trying to find the time to build this baby, and it was worth the wait.</p>
            <img src={Blog3Button} alt="a tan add button with offset border on a teal and blue background, when clicked the main button moves to meet its offset border, the text color changes and a blue focus outline appears"></img>
            <h3>To div or not to div</h3>
            <p>I researched a few ways to make the offset border without wrapping it in a container, but ultimately, I wanted an animation that looked like the button was moving into
                the offset border. If you are looking for an offset border and are ok with it moving with the button itself, you can use <code>position: absolute;</code> and 
                <code>z-index: -1;</code> on the button with the <code>::before</code> pseudo-selector to create an offset border. (Keep in mind transitions and animations using
                <code>::before</code> are not supported in IE or Safari.) Similarly, you can also use an offset box shadow to create a double box effect that will move with the
                button.</p>
            <h1>The div solution</h1>
            <p>First create a div container — using <code>position: relative;</code> and <code>left:</code>, we’ll position the whole button where we want it on the page. Changing
                the <code>left:</code> property will change its position horizontally, and you can use top: or bottom: to move it vertically. Adjusting the margin will also help.</p>
                <pre>
                    <code>
                        .primary-button-container &#123;
                            position: relative;
                            display: block;
                            left: 5px;
                            width: 90px;
                            margin-top: 30px;
                            padding: 30px;
                            border: 2px solid #EBCBAD;
                            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
                        &#125;
                    </code>
                </pre>
            <p>Next, the actual button:</p>
                <pre>
                    <code>
                        .primary-button &#123;
                            display: block;
                            height: 58px;
                            width: 82px;
                            background-color: #EBCBAD;
                            border: solid #EBCBAD;
                            border-width: 0 10px;
                            color: #123440;
                            font-size: 18px;
                            margin: -37px 0px -25px -37px;
                            padding: 15px;
                            padding-left: 10px;
                        &#125;
                    </code>
                </pre>
            <p>And, finally, the animation:</p>
                <pre>
                    <code>
                        .primary-button:active &#123;
                            transform: translateY(9px) translateX(9px);
                        &#125;
                    </code>
                </pre>
            <p>If you’d like to prevent the blue focus outline, you can use this:</p>
                <pre>
                    <code>
                        button:focus &#123;    
                            outline: none;    
                        &#125;
                    </code>
                </pre>
            <p>However, you should add something else (like a new <code>background-color:</code>) in its place.</p>
            <h3>Conclusion</h3>
            <p>You can check out this button (and a sweet HTML radio button/label icon selector) in detail on my Github and in action at
                <a href="http://bujo-to-go.surge.sh/#/index">BujoToGo</a> (an app I wrote in a week). Tag me on Twitter (or Github or somewhere…) if you end up using this button! I
                would be thrilled to see it out in the world spreading more joy.</p>
        </article>
    )
}

export default Blog3;