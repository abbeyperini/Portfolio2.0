import React from 'react';

function SingleBlog(props) {
    const chooseComponent = (component) => {
        props.chooseComponent(component);
    }

    return (
        <div className="container_blog">
            <button className="blog-section_title" onClick={() => chooseComponent("FullBlog")}>Blog</button>
            <div className="scroll-cropper">
                <ul className="blog-preview">
                </ul>
            </div>
        </div>
    )
}

export default SingleBlog;