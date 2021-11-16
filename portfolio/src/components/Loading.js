import React from 'react';
import {ReactComponent as ConstructionShiba} from '../images/construction-shiba-inu.svg'

function Loading(props) {
  
  const chooseComponent = (component) => {
    props.chooseComponent(component);
  }

  return (
    <section className="container_blog">
      <h2 aria-label="button to open full blog page" ><button className="blog-section_title" onClick={() => chooseComponent("FullBlog")}>Blog</button></h2>
      <div className="container_error">
        <ConstructionShiba className="loading-graphic"/>
        <p>Blogs loading!</p>
      </div>
    </section>
  )
}

export default Loading