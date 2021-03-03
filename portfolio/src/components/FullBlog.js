import React from 'react';
import Blog1 from './blog/Blog1';
import Blog2 from './blog/Blog2';
import Blog3 from './blog/Blog3';
import Blog4 from './blog/Blog4';
import Blog5 from './blog/Blog5';
import Blog6 from './blog/Blog6';
import Blog7 from './blog/Blog7';
import Blog8 from './blog/Blog8';

function FullBlog() {
    return (
        <section className="full-blog">
            <Blog8 />
            <Blog7 />
            <Blog6 />
            <Blog5 />
            <Blog4 />
            <Blog3 />
            <Blog2 />
            <Blog1 />
        </section>
    )
}

export default FullBlog;