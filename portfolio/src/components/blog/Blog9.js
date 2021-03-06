import React from 'react';
import Blog9Cover from '../../images/blog9Cover.jpg';
import DarkLightD from '../../images/darkLight.gif';
import DarkLightM from '../../images/darkLightM.gif';

function Blog9() {
    return (
        <article className="blog">
            <img src={Blog9Cover} className="blog_image" alt="side by side of dark mode and light mode on abbeyperini.dev"></img>
            <h1 className="blog_title">Toggle Dark Mode in React</h1>
            <h3 className="blog_published-heading">Originally published on dev.to on March 5, 2021</h3>
            <p>When I rebuilt my <a href="https://abbeyperini.dev">portfolio site</a>, I knew I wanted to have some fun with the design, and a dark
             and light mode fit the bill. I enjoyed a lot of the discoveries I made during this project, but my favorite has to be the color changing
             SVGs. This tutorial assumes familiarity with React, and I am using v17.0.1 and functional components.</p>
            <p>First, I created a base layout. Next, I put together my <a href="https://coolors.co/292929-2f4550-586f7c-b8dbd9-f9f8f8">dark</a> and
             <a href="https://coolors.co/eddcd2-fff1e6-dbe7e4-bcd4e6-1d2c35">light</a> color schemes. It took a little trial and error, but after testing
             all my combinations for <a  href="https://webaim.org/resources/contrastchecker/">sufficient contrast</a> and experimenting with placement, I found I
             needed 6 CSS variables. I guess you could say I used “dark first” development, because the variable names make sense in the context of the
             dark theme. The light theme has less variation, but needed <code>--button-border</code> where <code>--accent</code> would be the same color as the background.</p>
            <pre id="blog9DarkCSS" className="blog_code-block">
                <code>
{`.theme-dark {
  --dark-text: #292929;
  --light-text: #F9F8F8;  
  --dark-background: #2F4550;
  --light-background: #586F7C;
  --accent: #B8DBD9;
  --button-border: #B8DBD9;
}`}
                </code>
            </pre>
            <pre className="blog_code-block">
                <code>
{`.theme-light {
  --dark-text: #5E4B56;
  --light-text: #5E4B56;
  --dark-background: #DBE7E4;
  --light-background: #EDDCD2;
  --accent: #DBE7E4;
  --button-border: #5E4B56;
}`}
                </code>
            </pre>
            <p>Then, I set about applying colors to my base layout:</p>
            <pre className="blog_code-block">
                <code>
{`html, #root {
  background-color: var(--dark-background);
  color: var(--dark-text);
}

nav {
  background-color: var(--dark-background);
  color: var(--light-text);
}

.main-container {
  background-color: var(--light-background);
}`}
                </code>
            </pre>
            <p>I also set the backgrounds of the sections of content that I wanted to pop to <code>--accent</code>. <code>--dark-text</code> would have
             worked on all backgrounds in the dark theme, but I set the section titles to <code>--light-text</code> to make them stand out more.</p>
            <p>I found Musthaq Ahamad‘s <a href="https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2">basic theme switcher tutorial</a>,
             and set about applying it to functional React components.</p>
            <p>I put functions for changing the theme and checking localStorage for theme preferences into a file called <code>themes.js</code>.</p>
            <pre className="blog_code-block">
                <code>
{`function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function keepTheme() {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
      } else if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light')
      }
    } else {
      setTheme('theme-dark')
    }
}

module.exports = {
  setTheme,
  keepTheme
}`}
                </code>
            </pre>
            <p>In my <code>App.js</code> file, I added <code>keepTheme()</code> to my <code>useEffect()</code>.</p>
            <pre className="blog_code-block">
                <code>
{`import { keepTheme } from './utils/themes';

function App() {
  useEffect(() => {
      keepTheme();
  })
}`}
                </code>
            </pre>
            <p>Next, I added the toggle component to my navigation bar component. I styled the toggle following <a href="https://h.daily-dev-tips.com/creating-day-night-css-only-toggle-switch">Chris Bongers’ Tutorial</a> based on <a href="https://dribbble.com/shots/3220898-Day-Night-toggle-DailyUI-015">Katia De Juan’s Dribbble</a>. Then I <a href="https://github.com/abbeyperini/Portfolio2.0/blob/master/portfolio/src/styles/toggle.css">adjusted the size and flipped it to default to dark mode</a>.
             While this toggle is so cute that you could die, this tutorial will work with any <code>&lt;button&gt;</code> or clickable <code>&lt;input&gt;</code>.
             First, I set up the basic JSX, the local state, and a variable to hold the theme we get from localStorage:</p>
            <pre className="blog_code-block">
                <code>
{`import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/themes';

function Toggle() {
  const [togClass, setTogClass] = useState('dark');
  let theme = localStorage.getItem('theme');
  return (
        <div className="container--toggle">
           <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}

export default Toggle;`}
                </code>
            </pre>
            <p>When a user clicks the toggle, I want the theme on the page to change and the toggle to change with it. I added the imported
             <code>setTheme()</code> function and <code>setTogClass()</code> from the local state to a handleOnClick function. You can see where it is passed to the
             clickable part of the toggle in the JSX above.</p>
            <pre className="blog_code-block">
                <code>
{`const handleOnClick = () => {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      setTogClass('light')
  } else {
      setTheme('theme-dark');
      setTogClass('dark')
  }
}`}
                </code>
            </pre>
            <p>I used this component’s <code>useEffect()</code> to make sure the local state togClass always loads with the correct theme.</p>
            <pre className="blog_code-block">
                <code>
{`useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTogClass('dark')
    } else if (localStorage.getItem('theme') === 'theme-light') {
        setTogClass('light')
    }
}, [theme])`}
                </code>
            </pre>
            <p>Because my toggle is a checkbox, the dark theme should show the unchecked (moon) state and the light theme should show the checked (sun)
                 state. I couldn’t get <a href="https://reactjs.org/docs/uncontrolled-components.html"><code>defaultChecked</code></a> to work how I wanted,
                 so I replaced the unchecked <code>&lt;input&gt;</code> with this conditional rendering
                 <a href="https://twitter.com/dan_abramov/status/1365107258280071168">ternary operator</a> (conditional operator):</p>
            <pre className="blog_code-block">
                <code>
{`{
    togClass === "light" ?
    <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
    :
    <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
}`}
                </code>
            </pre>
            <p>If you used a <code>&lt;button&gt;</code>, you could easily use conditional rendering like this to change the className attribute within the
             <code>&lt;button&gt;</code> tag and get the same effect.</p>
            <p>Put all together, the code for the toggle component looks like this:</p>
            <pre className="blog_code-block">
                <code>              
{`import React, { useEffect, useState } from 'react';
import '../styles/toggle.css';
import { setTheme } from '../utils/themes';

function Toggle() {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])
    
    return (
        <div className="container--toggle">
            {
                togClass === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}`}
                </code>
            </pre>
            <p>Finally, my favorite part: the color switching SVGs! CSS variables work in SVG code too!</p>
            <p>I got my SVG code for the Github and Chrome icons from <a href="https://devicon.dev/">DEVICON</a>. For the Github icon all I had to change was one
             fill attribute in a <code>&lt;g&gt;</code>:</p>
            <pre className="blog_code-block">
                <code>
{`<g fill="var(--dark-text)">`}
                </code>
            </pre>
            <p>The Chrome icon had a fill attribute in a <code>&lt;circle&gt;</code> and a <code>&lt;path&gt;</code>:</p>
            <pre className="blog_code-block">
                <code>
{`<circle fill="var(--dark-text)" cx="63.624" cy="64.474" r="22.634"></circle><path fill="var(--dark-text)" ...>`}
                </code>
            </pre>
            <p>The result looks like this:</p>
            <img className="blog_image" src={DarkLightD} alt="clicking on a toggle styled to look like a moon with stars changes the colors of the site from dark mode to light mode and the toggle now looks like a sun with clouds - desktop view"></img>
            <img id="darkLightM" className="blog_image" src={DarkLightM} alt="clicking on a toggle styled to look like a moon with stars changes the colors of the site from dark mode to light mode and the toggle now looks like a sun with clouds - mobile view"></img>
            <h3>Conclusion</h3>
            <p>I tried to include all of the relevant code, but you can also see the full code for my site in its <a href="https://github.com/abbeyperini/Portfolio2.0">Github repository</a>. If
             you enjoyed this article or are left with questions, please leave a
             comment below! I would also love to see anything built following this tutorial.</p>
        </article>
    )
}

export default Blog9;