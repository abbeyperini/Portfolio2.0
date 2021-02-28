import React from 'react';
import Blog6Cover from '../../images/blog6Cover.jpg';

function Blog6() {
    return (
     <article className="blog">
     <img src={Blog6Cover} className="blog_image" alt="trees and fog"></img>
     <h1>#100DaysOfCode</h1>
     <h2 className="blog_published-heading">Originally posted on Medium on January 19, 2021</h2>
     <p>It’s been 323 days since I first started this coding journey. Today I finished the <a href="https://www.100daysofcode.com/">#100DaysOfCode challenge</a> — a public commitment to code
          an hour on personal projects every day for 100 days.</p>
     <p>One of Kallaway’s rules is that you can miss a day, but not two days. With the exception of 4 day breaks over Thanksgiving and Christmas, I achieved that… while completing
          DigitalCrafts’ Immersive Full Stack Web Development Bootcamp. Would I recommend everyone do #100DaysOfCode on top of a bootcamp? No. However, I would say #100DaysOfCode kept my
               love of coding in perspective through the grind of the final weeks of my bootcamp.</p>
     <h3>A few of the things I learned about on my own or created thanks to #100DaysOfCode:</h3>
     <ul>
          <li>Algorithm solutions</li>
          <li>JavaScript Fetch requests</li>
          <li>API endpoints</li>
          <li>CSS Grid</li>
          <li>JavaScript animated photo libraries</li>
          <li>Ternary operators</li>
          <li>Accessible CSS dropdown menu</li>
          <li>PostgreSQL</li>
          <li>Web design standards</li>
          <li>Common responsive layouts</li>
          <li>React</li>
          <li>Redux</li>
          <li>Svgs</li>
          <li>Svgs in React</li>
          <li>JSON Web Tokens</li>
          <li><code>React-router-dom</code></li>
          <li>Javascript date time objects</li>
          <li>SQL queries and Sequelize</li>
          <li>Hierarchy in design (e.g. buttons, colors, typography)</li>
          <li>CSS animations</li>
          <li>Axios and its request headers</li>
          <li>Making sure server side has no unhandled exceptions</li>
          <li>Python Discord bot on Repl.it</li>
          <li>Writing a React app without <code>npx create-react-app</code></li>
     </ul>    
     <p>Looking back at the completed log, I can’t help but feel pride in how far I’ve come. In the beginning of the challenge, I spent days trying to decipher the appropriate endpoints for
          the <a href="https://www.ravelry.com/api">Ravelry API</a> that I eventually used for my first group project (check out <a href="http://knitworthy.net/">Knitworthy</a> and its
          <a href="https://github.com/abbeyperini/Knitworthy">Github repo</a>). Now accessing the API is usually the easiest first step of a project.</p>
     <p>Trying to find that extra hour of coding drove me to complete most of the optional assignments provided by the bootcamp. They often involved delete and edit operations,
     so #100DaysOfCode is partially responsible for my comfort level with CRUD operations.</p>
     <p>Most importantly, when classes started in September, I had trouble starting projects — either from lack of ideas or fear of failure. By the end of #100DaysOfCode, my log entries
          changed from “I’ll try and get this feature of this assignment working because I want to” to “I built this on a whim in a new language and loved it.”</p>
     <h3>Conclusion</h3>
     <p>The #100DaysOfCode challenge and its online community welcome and challenge coders of any level. If you’re looking for a way to kickstart your personal projects this year, I would
          recommend it. If nothing else, at the end of 100 days, you’ll have a log of everything you learned about and created.</p>
     <p>For me, that log is a welcome reminder while I’m job searching. Not only does it show how much I’ve learned in a short amount of time, but it proves a sustained desire to create with
          code… even when I’m already stressed out from coding 8+ hours a day.</p>
     <p>I spent my final #100DaysOfCode hour rebuilding my portfolio — it was a template tacked on to a static site I made with HTML, CSS, and JavaScript before starting the bootcamp. Now
          it’ll be a single page app built in React.</p>
     </article>)
}

export default Blog6;