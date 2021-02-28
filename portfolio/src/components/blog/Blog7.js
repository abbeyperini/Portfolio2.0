import React from 'react';

function Blog7() {
    return  (
        <article className="blog">
            {/* <!-- cover photo --> */}
            <h1>A Trio of Buttons for a Bubbly, Colorful Site</h1>
            <h2 className="blog_published-heading">Originally published on dev.to on January 28, 2021</h2>
            <p>We'll use a shifting background gradient, a simple `transform: translate` animation, and a button styled like text.</p>
            <hr></hr>
            <p>I've been reading up on design principles for web projects. For my last big project, <a href="http://gachasphere.surge.sh/#/index">Gachasphere</a> I wanted to implement hierarchical
                buttons. So I made 3 button styles to apply across the site: primary, secondary, and tertiary.</p>
            <p>I wanted the primary button to be used for calls to action and "dangerous" actions like delete. Ideally, it would be one of the first things a user's eye would be drawn to.</p>
            <p>My goal for the secondary button was to make it easier to find than a tertiary button, but not as noticeable as the primary button. It would be used for things like navigation within a
                page and expanding components.</p>
            <p>For the tertiary button, users should be able to find it and tell it's clickable, but it shouldn't pull focus. It would be used for the optional links and in our nav bar when we needed a
                button instead of a link.</p>
            <p>All you need is an HTML &lt;button&gt; tag.</p>
            <h2>Primary</h2>
            <p>I know I want my attention grabbing button to be round and a little fat with a <code>box-shadow:</code>, so we'll start with those declarations. Also, we'll give it a margin, align the
                text in the center, and remove its border. In this case, the text color is the color I used for primary-level text across the site.</p>
            <pre className="blog_code-block">
                <code>
{`.primary-button {
    margin: 20px;
    padding: 15px 35px;
    text-align: center;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
    border-radius: 30px;
    border: none;
}`}
                </code>
            </pre>
            <p>Next, the gradient. We're oversizing the background so we can shift it on hover and click. For this project, I had two logos to pull colors from, and luckily they contrasted. So our
                primary button will be a red, yellow, and orange gradient on a blue background and that will really pop! Add the following to your <code>.primary-button</code> rule-set.</p>
            <pre className="blog_code-block">
                <code>
{`background-size: 200% auto;
color: #083136;
background-image: linear-gradient(
to right,
    #ffbc5b 0%,
    #ff5645 50%,
    #f7213d 50%,
    #dd07b7 100%
);`}
                </code>
            </pre>
            <p>That should give you this:</p>
            {/* <!-- Login button with red, yellow, and orange gradient --> */}
            <p>Then, the hover effect. Add this to your <code>.primary-button</code> rule-set:</p>
            <pre>
                <code>
                    transition: 0.5s;
                </code>
            </pre>
            <p>And add two new rule-sets. One to shift the colors on hover/focus:</p>
            <pre className="blog_code-block">
                <code>
{`.primary-button:hover,
.primary-button:focus {
    background-position: right center;
    outline: none;
}`}
                </code>
            </pre>
            <p>Which should give us this:</p>
            {/* <!--Login button with hover gradient background animation--> */}
            <p>The second declaration will shift the color back on click:</p>
            <pre className="blog_code-block">
                <code>
{`.primary-button:active,
.primary-button:active:after {
    outline: none;
    background-position: left center;
}`}
                </code>
            </pre>
            <p>Which should look like this:</p>
            {/* <!--Login button with hover and click gradient background animation--> */}
            <p>Both include the <code>outline: none;</code> declaration, which will prevent the default blue focus outline provided by the &lt;button&gt; tag for accessibility purposes.</p>
            <h2>Secondary</h2>
            <p>I wanted my secondary button to be a sibling not a twin to my primary button. So it'll have slightly less padding, but the same <code>border-radius</code> and <code>box-shadow</code>.
                The gradient colors I've picked are closer to (or the same as) the background colors I'm working with. In this case, the text color is the color I used for secondary-level text
                across the site. The rule-set should look like this:</p>
            <pre className="blog_code-block">
                <code>
{`.secondary-button {
    border-radius: 30px;
    padding: 10px 30px;
    margin: 20px;
    border: none;
    color: #07373b;
    background-image: linear-gradient(
    to right,
    #e8fffb 0%,
    #85fff1 40%,
    #47d4e5 100%
    );
}`}
                </code>
            </pre>
            <p>Which will give you this:</p>
            {/* <!--Login button with blue gradient background--> */}
            <p>Finally, we'll add a slightly different click animation, using <code>transform: translate</code> with a new rule-set. Now, the button will move 3px on the x-axis and y-axis when it's
                clicked- some nice visual feedback for the user.</p>
            <pre className="blog_code-block">
                <code>
{`.secondary-button:active {
    transform: translateY(3px) translateX(3px);
}`}
                </code>
            </pre>
            <p>Which should give you:</p>
            {/* <!-- Login button with blue gradient background and click animation --> */}
            <p>The text color has a high enough contrast with the background, so the cursor is probably enough… but because the button colors include the background colors, I've left the focus
                outline on.</p>
            <h2>Tertiary</h2>
            <p>Finally, the forgettable button. The styling below will look just like text. The cursor changing shows it's clickable (and it will still be focusable by a keyboard user and semantic
                for a screenreader thanks to the &lt;button&gt; tag). In this case, the text color is the one I was using for tertiary-level text across the site.</p>
            <pre className="blog_code-block">
                <code>
{`.tertiary-button {
    border: none;
    color: #0d5059;
    background-color: #adfff5;
    padding: 20px;
}`}
                </code>
            </pre>
            <p>Put it all together and they look like this:</p>
            {/* <!-- Gachasphere login page --> */}
            <p>A clear hierarchy! Pretty obvious the login button is a call to action. The next button that your eye moves to navigates you to the register page instead of the login page. The
                "forgot password" and "login as guest" options are easily found, but don't pull focus.</p>
            <h2>Conclusion</h2>
            <p>Hopefully you got a little insight into my thought process for designing buttons with a clear hierarchy. I really love the shifting background gradient effect. More importantly,
                understanding simple translation animations and how to style buttons like text are very useful skills.</p>
            <p>Check out these buttons live at <a href="http://gachasphere.surge.sh/#/index">Gachasphere</a> (and its <a href="https://github.com/brodri4/Gachasphere-client">Github repo</a>)).
                Tag me on Twitter or Github if you use the buttons! If you enjoyed this tutorial or are left with questions, leave a comment below.</p>
        </article>
    )
}

export default Blog7;
