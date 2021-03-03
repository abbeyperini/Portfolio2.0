import React from 'react';
import Blog1Cover from '../../images/blog1Cover.jpg';

function Blog1() {
    return (
        <article className="blog">
            <img src={Blog1Cover} alt="The Olympic Mountain range stretches into the distance, in the foreground is grass and rocks" className="blog_image"></img>
            <h1 className="blog_title">Embrace the Struggle While Learning to Code</h1>
            <h2 className="blog_published-heading">Originally published on Medium on September 25, 2020</h2>
            <p>Wrapping up my 3rd week of a 16 week coding bootcamp, I can tell you that there is no substitute for staring at a coding problem while your brain struggles. Leading up to 
                class, I had been doing a lot of practicing (because everyone knows practice makes perfect), but I wasn’t struggling.</p>
            <p>You always hear that everything you need to learn how to code is on the internet already. Codecademy, Udemy, FreeCodeCamp, LabEx, and many more will provide you with a wealth
                of easy to follow information. HackerRank, Codewars, and others will provide you with simple algorithms and interview practice.</p>
            <p>And yet, after months of following books, coding basics courses, and reading Mozilla Developer Network’s Getting Started with the Web (and all of the related topics), I still
                found I had a hard time beginning any coding project larger than a Codewars prompt or a basic static webpage.</p>
            <p>When I started learning about async Javascript and manipulating the DOM, I had trouble finding small prompts that would allow me to practice these concepts. Especially 
                because many of the resources I was using had the answer right next to or as part of the question, and that’s too tempting for me. People suggested I find a hobby project,
                but I never started one because I couldn’t articulate where to start. I often came up with ideas far outside my comfort zone and immediately dismissed them.</p>
            <p>Week 1 and 2 of the bootcamp we went over coding basics in Python, which I enjoyed, but I began to notice a pattern. My for loops were well established, but I avoided while 
                loops entirely. I had learned one method for writing a command line user menu, and stuck to it even when it became bulky and error prone. By being forced to do problems that
                didn’t inherently interest me, I was finding gaps I had unconsciously steered away from when choosing prompts.</p>
            <p>Then, Week 2 we were assigned a longer app (still just one Python file but with lots of entangled functions and classes) and I sat, staring at a blank page. I couldn’t
                immediately grasp what the end product would look like. I hadn’t used the Datetime Python module before and didn’t know how I would implement an automatically updated time.
                Thankfully, Zed Shaw’s advice cut through the panic and I started the same way I start every time — taking the plain English from the prompt and turning it into comments
                around function and class definitions. Piece by piece the app came together, and project by project I’m getting less overwhelmed by the blank page.</p>
            <p>I can tell you that adapting to the feeling of struggling is different in every medium. I’d already honed this skill across plenty of hobbies. If I had given up every time a
                pattern looked like gibberish when crocheting, I wouldn’t have 35,567+ yards of yarn in knitted and crocheted finished objects today. From my degree and experience working
                in staffing, I can safely say that while interviewers focus on a candidate’s resume and skills, they should also be verifying a candidate is willing to say 
                <a href="https://www.edsurge.com/news/2019-10-28-why-struggle-is-essential-for-the-brain-and-our-lives"> “I don’t know, but I will find out.”</a></p>
        </article>
    )
}

export default Blog1;