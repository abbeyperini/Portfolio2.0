import React from 'react';
import Preview1 from './blogPreviews/Preview1';
import Preview2 from './blogPreviews/Preview2';
import Preview3 from './blogPreviews/Preview3';
import Preview4 from './blogPreviews/Preview4';
import Preview5 from './blogPreviews/Preview5';
import Preview6 from './blogPreviews/Preview6';
import Preview7 from './blogPreviews/Preview7';
import Preview8 from './blogPreviews/Preview8';
import Preview9 from './blogPreviews/Preview9';
import Preview10 from './blogPreviews/Preview10';

function Blog(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <div className="container_blog">
            <button className="blog-section_title" onClick={() => chooseComponent("FullBlog")}>Blog</button>
            <div className="scroll-cropper">
                <ul className="blog-preview">
                    <Preview10 chooseComponent={props.chooseComponent}/>
                    <Preview9 chooseComponent={props.chooseComponent}/>
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
        </div>
    )
}

export default Blog;