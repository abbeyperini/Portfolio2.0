import React from 'react';
import {ReactComponent as ConfusedShiba} from '../images/confused-shiba-inu.svg'

function Error(props) {

  const chooseComponent = (component) => {
    props.chooseComponent(component);
  }

  return (
    <section className="container_blog">
      <h2 aria-label="button to open full blog page" ><button className="blog-section_title" onClick={() => chooseComponent("FullBlog")}>Blog</button></h2>
      <div className="container_error">
        <ConfusedShiba className="error-graphic"/>
        <p>There was an error! Try again later.</p>
      </div>
    </section>
  )
}

export default Error