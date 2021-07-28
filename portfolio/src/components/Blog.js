import React, {useEffect, useReducer} from 'react';
import axios from 'axios';

function Blog(props) {

  const chooseComponent = (component) => {
      props.chooseComponent(component);
  }

  const initialState = {
    isLoading: false,
    blogs: null
  }

  async function fetchBlogs() {
    axios.get('https://abbeyperini.dev//.netlify/functions/blogPosts')
    .then((res) => {
      dispatch({
        type: "blogFetched",
        payload: res.data
      })
    }).catch((error) => {
      dispatch({
        type: "blogFetchFail",
        payload: error
      })
    })
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "blogLoading":
        return {
          ...state,
          isLoading: true
        };
      case "blogFetched":
        return {
          ...state,
          isLoading: false,
          blogs: action.payload
        };
      case "blogFetchFail":
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return {
          ...state,
          isLoading: false,
          error: "unknown error"
        };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function load() {

      dispatch({
        type: "blogLoading"
      })
      
      fetchBlogs()
    }

    load()
  }, [])

  if (!state.isLoading && state.blogs !== null) {
    let blogPreviewList = state.blogs.data.map((blog) => {
      let altText = `cover image for ${blog.title}`
      let blogImage = '';

      if (blog.cover_image) {
        blogImage = blog.cover_image
      } else if (blog.social_image) {
        blogImage = blog.social_image
      }

      return (
        <li key={blog.id} className="preview">
          <h2 className="preview_button" onClick={() => chooseComponent({id: blog.id})}>{blog.title}</h2>
          <img className="preview_image" alt={altText} src={blogImage}></img>
        </li>
      )
    })

    return (
      <div className="container_blog">
          <button className="blog-section_title" onClick={() => chooseComponent("FullBlog")}>Blog</button>
          <div className="scroll-cropper">
              <ul className="blog-preview">
                {blogPreviewList}
              </ul>
          </div>
      </div>
  )
  } else if (!state.isLoading && state.error) {
    return (
      <p>There was an error! Try again later.</p>
    )
  } else {
    return (
      <p>Blogs loading!</p>
    )
  }
}

export default Blog;