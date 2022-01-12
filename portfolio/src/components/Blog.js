import React, {useEffect, useReducer} from 'react';
import Error from '../components/Error';
import Loading from '../components/Loading';
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
    axios.get('https://abbeyperini.dev/.netlify/functions/blogPosts')
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
      let blogImage = '';

      if (blog.cover_image) {
        blogImage = blog.cover_image
      } else if (blog.social_image) {
        blogImage = blog.social_image
      }

      return (
        <li key={blog.id} className="preview">
          <button className="preview_button" onClick={() => chooseComponent({component: "SingleBlog", id: blog.id})}>{blog.title}</button>
          <img className="preview_image" alt="" src={blogImage}></img>
        </li>
      )
    })

    return (
      <section aria-label="Blog Previews" className="container_blog">
          <h2 aria-label="button to open full blog page" ><button className="blog-section_title" onClick={() => chooseComponent("FullBlog")}>Blog</button></h2>
          <a className="screenreader-text" href='#about'>Skip directly to the next section.</a>
          <div className="scroll-cropper">
              <ul aria-label="previews of Abbey's blog posts" className="blog-preview">
                {blogPreviewList}
              </ul>
          </div>
      </section>
  )
  } else if (!state.isLoading && state.error) {
    return (
      <Error chooseComponent={chooseComponent} />
    )
  } else {
    return (
      <Loading chooseComponent={chooseComponent} />
    )
  }
}

export default Blog;