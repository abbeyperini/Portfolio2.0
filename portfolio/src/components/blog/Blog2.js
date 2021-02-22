import React from 'react';
import Blog2Cover from '../../images/blog2Cover.jpeg'

function Blog2() {
    return (
        <article>
            <img src={Blog2Cover} alt="a keyboard with lighted keys currently set to rainbow"></img>
            <h1>Accessibility and React</h1>
            <h2>Originally published on Medium on November 11, 2020</h2>
            <p>If you’ve ever read anything about HTML on Mozilla Developer Network, you’ve probably come across the phrase “semantic HTML.”</p>
            <p><blockquote>“Semantic HTML is the correct use of HTML to reinforce the meaning of content on a web page, rather than merely define its appearance.”</blockquote> 
                <p className="caption">-<a href="http://www.springboardseo.com/resources/what-is/semantic-html.html">Springboard SEO</a></p>
                Meaning that appearance should be left to CSS (instead of using presentational HTML elements like &lt;b&gt;). Any developer’s goal should be to make their webpage
                accessible to as many users as possible, including those that rely on <a href="https://webaim.org/techniques/screenreader/">screen readers</a> or keyboard navigation.
                Not to mention, a lot of these practices will bolster your SEO.</p>
            <p>Semantic HTML has a lot of <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML">built in features</a> to take some of the accessibility work off of
                the developer. For instance, a &lt;button&gt; is automatically keyboard accessible! Some of the HTML that should always be included in a page is pretty straightforward
                — a title for your page, alt text for images that convey information, and make sure to include your headings and labels. All menus, forms, and inputs should be set up 
                for keyboard navigation. Most importantly, a page should be sectioned using HTML sectioning elements or appropriate
                <a href="https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html">ARIA Landmarks</a> (e.g. a &lt;div&gt; or a &lt;span&gt; should be your last resort).</p>
            <p>This is all fairly easy to adhere to when you’re creating static pages or multiple <a href="https://www.npmjs.com/package/mustache-express">mustache-express views</a>, 
                but what happens when you hit single page apps like <a href="https://reactjs.org/">React</a>?</p>
            <p>In React, multiple elements can be rendered at the same time as long as they’re all children of one parent element. As a result, the common method is to throw all of
                them in &lt;div&gt; within &lt;div&gt; within &lt;div&gt;.</p>
            <h3>There are a few common sense steps to take right off the bat:</h3>
                <ul>
                <li>Read the React <a href="https://reactjs.org/docs/accessibility.html">accessibility documentation</a>.</li> 
                <li>Remember that the for attribute is htmlFor in JSX.</li>
                <li>Use &lt;section&gt;, &lt;article&gt;, &lt;label&gt;, headings, and 
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute">aria-label</a> liberally.</li> 
                <li>Use buttons to handle onClick events.</li>           
                <li>Use links for navigation.</li> 
                <li>Always test your page with a screen reader and keyboard navigation to see if you need to switch around tags to make navigation and focus possible.</li>
                </ul>
            <p>In addition, really get to know the handy tools React has to help you: <a href="https://reactjs.org/docs/fragments.html">Fragments</a> and 
                <a href="https://reactjs.org/docs/refs-and-the-dom.html">Refs</a>. Fragments can help you declutter your containers, while still inserting components wherever you need
                to. Refs can be used to manage focus for keyboard and mobile navigation (and insert a page title after rendering — titles are always read by screen readers).</p>
            <p>Finally, <a href="https://web.dev/accessibility-auditing-react/">audit your React app</a> with <a href="https://github.com/dequelabs/react-axe">react-axe</a> and 
                <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a>.</p>
            <p>If tackling accessibility still seems like a huge hurdle, checkout Nozi Nindie’s 
                <a href="https://medium.com/the-school-of-do/making-accessibility-accessible-the-pour-principles-f5ad21eda12f">POUR principles</a>!</p>
        </article>
    )
}

export default Blog2;