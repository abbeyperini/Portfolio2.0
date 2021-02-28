import React from 'react';

function Blog8() {
     return (
          <article className="blog">
               {/* <!-- Cover picture was knit by Abbey Perini. The pattern is Embrace Octopus Sweater by Maia E. Sirnes. The yarn is Malabrigo Rios in Whale Road and Natural. --> */}
               <h1>Knitting as Programming</h1>
               <h2>or how I learned programmers owe it all to fiber</h2>
               <h3 className="blog_published-heading">Originally published on dev.to on February 10, 2021</h3>
               <hr></hr>
               <p>As part of my bootcamp, I was asked to present for 10 minutes on any topic. I've been crocheting since 2013 and knitting since 2018, and I had 
                    noticed some similarities between the way I approached a project in either fiber arts or programming. What I did not expect to find was a rich 
                    history of fiber arts and programming influencing each other.</p>
               <h3>The Beginning</h3>
               <p>Fiber arts, like knitting, are crafts using yarn, string, thread, etc. This encompasses thousands of years of history, starting in 6500 BCE with 
                    Viking <a href="https://theknittinggenie.com/2018/03/06/nalbinding-crash-course/">Nålbinding</a>. Other crafts included under this umbrella are
                    crochet, embroidery, weaving, and textile making.</p>
               <p>Historically, fiber arts and programming have been very intertwined, starting with the Jacquard Loom, an attachment for powered fabric looms. It 
                    was the first machine to use a chain of punch cards to automate instructions. It enabled the loom to make intricate patterns in textiles based on
                    the punch cards it was fed. It inspired Charles Babbage in making his analytical machine. A century later, his designs and Ada Lovelace's notes
                    were read by the people who built the first computer.</p>
               <p>The relationship between fiber arts and programming gets even more overt with
                    <a href="http://drhart.ucoz.com/index/core_memory/0-123-0-123">Core Rope Memory</a> (also called Little Old Lady Memory). Used in the 1960's by
                    NASA, software written by MIT programmers was woven into core rope memory by female workers.</p>
               {/* <!--a woman weaves wire to create core rope memory--> */}
               <p>The direction the current was forced through the wires induced field forces to circulate in a clockwise or counterclockwise direction. One 
                    direction is a stored 1, while the other is a stored 0. The result was non-volatile storage, which could retain a large amount of information 
                    without power - roughly 2.5 megabytes per cubic meter. This was an 18-fold improvement over magnetic-core memory, the standard solution used at 
                    the time.</p>
               <h3>Now</h3>
               <p>Like computers, the textile industry has come a long way since the Jacquard Loom, integrating more and more automated manufacturing. Perhaps you'd 
                    like to <a href="https://textiles-lab.github.io/publications/2019-visualknit/">3D print a lot of knit toys</a>? Makers will find a way, so when
                    home knitting machines were no longer produced, 
                    <a href="https://xxxclairewilliamsxxx.wordpress.com/hack-ta-machine-a-tricoter/">people built the system themselves</a>.</p>
               <p><a href="https://www.ravelry.com/">Ravelry</a> was established in 2007 with free membership and only fiber arts ads. Today, Ravelry is the locus of
                    the fiber arts community with over 9 million users. Their website was the first to allow people to exchange information, tools, materials, and
                    patterns in pdf format on a large scale and in every language, revolutionizing the industry. Furthermore, they offer discussion groups, so people
                    can get help with patterns and techniques.</p>
               <p>Owned and operated by 6 women, they employ a tech stack of about 10 Gentoo Linux servers, MySQL 8.0, Ruby on Rails, Manticore Search, Amazon S3 for
                    image storage and a CDN, Redis, memcached, nginx, and haproxy.</p>
               <p>By removing barriers to entry, Ravelry is credited with creating an explosion of interest in knitting and crochet, driving innovation in easier to
                    follow patterns. I've personally talked with local yarn store owners about their experience before and after Ravelry, and they describe it like
                    night and day. Knitters are now primarily 25–35 years old. Local, regional, and international knitting groups, fiber festivals, and yarn crawls
                    have cropped up everywhere. Indie dyed yarn is now a huge business. There's renewed interest in fiber shows, which educate people on where their
                    yarn comes from. The audience for blogs and podcasts related to fiber arts in general has grown exponentially.</p>
               <h3>A Knitting Primer</h3>
               <p>When you knit something, you use two knitting needles. All of your stitches will be live, meaning if you drop a stitch the fabric you're creating
                    will unravel. Patterns are created by alternating types of stitches or yarn of different colors. For example, K2P2 would mean 2 knit stitches
                    followed by 2 purl stitches. The difference between stitches is how you feed the new loop of yarn through the live stitch on your needle.
                    Effectively, a knit stitch goes through the front of the loop. A purl stitch goes through the back of the loop. Repeating this for several
                    rows is how you would get a ribbed brim on a hat.</p>
               {/* <!--K2P2 ribbing--> */}
               <h3>Patterns as Programming</h3>
               <ul>
                    <li>Knitting pattern designers follow DRY.</li>
                    <li>Pattern repeats are for loops, typically surrounded by brackets, asterisks, or parentheses.</li>
                    <li>It's common to see while loops like 'until the end of the round' or 'to n stitches before marker'.</li>
                    <li>Higher level languages like Python and Javascript use symbols and keywords to tell the computer what the desired output is, just like
                         knitting charts.</li>
                    <li>Like assembly languages, operands are pushed and popped onto the needles.</li>
                    <li>Patterns are tested and retested by users for correctness, scalability, and the look of the finished object (aka expected output).</li>
                    <li>Pattern developers prefer open source software (<a href="https://www.darktable.org/">Darktable</a>, <a href="https://www.gimp.org/">Gimp</a>, 
                         <a href="https://www.libreoffice.org/download/download/">Libre</a>, <a href="https://www.stitchmastery.com/">Stitchmastery</a>, etc.).</li>
                    <li>Different placements of yarn and needles produce different outputs.</li>
               </ul>
               <p>This shawl was created using 8 stitches - all knit based (no purl). One row was written like this: k3, SM, (k2tog, yo) 2 times, 
                    [k1, yo, ssk, yo, sk2p, yo, k2tog, yo] to 5 stitches before marker, k1, (yo, ssk) 2 times), SM, k3</p>    
               {/* <!--Knit by Abbey Perini, pattern by Dowland by Dee O'Keefe, yarn is Meeker Street by The Jewelry Box")--> */}
               <p>There have even been two (no longer supported) programming languages designed specifically for hand knitting - KnitML, a markup language, and KEL,
                    inspired by Groovy, a Java language.</p>
               <h3>Patterns as Regular Expressions</h3>
               <p>Say we want to make a square of ribbing. <code>kp</code> is the <a href="https://regexone.com/">regular expression</a> for one knit stitch followed
                    immediately by one purl stitch. Curly brackets are used for repeats, so <code>kp</code> repeated 10 times looks like this: <code>{`(kp){10}`}</code>.
                    For a new row we use a new line, written, <code>\n</code>. The full regular expression for the row is then <code>{`(kp){10}\n`}</code>. Since we turn
                    the square to knit the next row, the following line must be <code>pk</code>s, or <code>{`(pk){10}\n`}</code>. We want our square to be 40 rows, so
                    they are in turn wrapped up in yet more brackets, producing: <code>{`((kp){10}\n(pk){10}\n){20}`}</code>. A more general pattern would look like
                    <code>{`((kp){x}\n(pk){x}\n){y}`}</code>.</p>
               <h3>Patterns as Tools for Teaching Programming</h3>
               <p><blockquote>"Knitting patterns have evolved from vague, chatty discourse written for experts to precise, line-by-line procedures that are akin to
                    programs."</blockquote></p>
               <p>-- "<a href="https://www.researchgate.net/publication/241623956_Following_a_thread_Knitting_patterns_and_program_tracing">Following a thread:
                    Knitting patterns and program tracing</a>" by Michelle Craig, Andrew Peterson, Sarah Peterson</p>
               <p>Craig, Peterson and Peterson go on to say that programmers can learn from the way the online knitting community has developed standard conventions
                    for communicating concepts like iteration, conditions, and documenting design decisions. Specifically, the way they've come about while trying to
                    make the patterns understandable to beginners. For example, using termination cases with "until" makes the while loop easier to understand. They
                    also say that creating a knitted final object is analogous to tracing, as it demonstrates an understanding of the pattern.</p>
               <h3>Conclusion</h3>
               <p>Having taught myself programming and knitting and crochet, I can safely say the mindset required is very similar. From figuring out how to make a
                    project work as you go to regular expressions in patterns, there are a lot of parallels. Programming as it is today would not exist without 
                    fiber, and programmers could learn a thing or two about teaching beginners from the online knitting community.</p>
               <p>I hope you enjoyed this brief overview of the history of fiber arts and programming. For general recognition and brevity's sake, I stuck to knitting,
                    but my first fiber love will always be crochet. I personally believe in crafting as therapy for anyone, and we could all use a little self-care
                    these days. If you've never thought of yourself as a fiber artist, but have a penchant for coding, try picking up some yarn and tools. You may be
                    surprised.</p>
               <p>If you're already a programming fiber artist with Ravelry projects, check out my project, <a href="http://knitworthy.net/">Knitworthy</a>!</p>
               <h3>Additional Fun</h3>
               <ul>
                    <li><a href="https://www.nytimes.com/2019/05/17/science/math-physics-knitting-matsumoto.html">Knitting is Coding and Yarn Is Programmable in This
                         Physics Lab</a></li>
                    <li><a href="http://wetpixels.blogspot.com/2009/02/knitting-is-acceptable-lisp.html?m=1">Knitting is an acceptable Lisp</a></li>
                    <li>A programmer worked with his daughter to <a href="http://www.mcmanis.com/chuck/graphics/knit-chart.svg">convert text instruction to charts
                         using Perl</a></li>
               </ul>
               <h3>Additional Sources</h3>
               <ul>
               <li><a href="http://www.cs4fn.org/regularexpressions/knitters.php">Knitters and Coders: separated at birth?</a></li>
               <li><a href="https://www.youtube.com/watch?v=UR8iHwOczfI&ab_channel=southeastlinuxfest">Carrie and Dave Stokes - K2P1 or How Your Programming Language
                    Evolved from Knitting</a></li>
               <li><a href="https://news.ycombinator.com/item?id=3986758">Knitting as Programming</a></li>
               </ul>
          </article>
     )
}

export default Blog8;
