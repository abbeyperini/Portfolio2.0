import React from 'react';
import Preview1 from './blogPreviews/Preview1';
import Preview2 from './blogPreviews/Preview2';
import Preview3 from './blogPreviews/Preview3';
import Preview4 from './blogPreviews/Preview4';
import Preview5 from './blogPreviews/Preview5';
import Preview6 from './blogPreviews/Preview6';
import Preview7 from './blogPreviews/Preview7';
import Preview8 from './blogPreviews/Preview8';

function Blog(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <div className="container_blog">
            <h1 className="section_title" onClick={() => chooseComponent("FullBlog")}>Blog</h1>
            <ul className="blog-preview">
                <Preview8 chooseComponent={props.chooseComponent}/>
                <Preview7 chooseComponent={props.chooseComponent}/>
                <Preview6 chooseComponent={props.chooseComponent}/>
                <Preview5 chooseComponent={props.chooseComponent}/>
                <Preview4 chooseComponent={props.chooseComponent}/>
                <Preview3 chooseComponent={props.chooseComponent}/>
                <Preview2 chooseComponent={props.chooseComponent}/>
                <Preview1 chooseComponent={props.chooseComponent}/>
            </ul>
        </div>
    )
}

export default Blog;