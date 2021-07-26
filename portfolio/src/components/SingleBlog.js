import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

function SingleBlog(props) {
  const [id, setID] = useState(0)

  const initialState = {
    isLoading: false,
    blogs: null
  }

  async function fetchSingleBlog() {
    const res = await axios.post('http://localhost:9000/.netlify/functions/singleBlog', {
      body: {
        data: id
      }
    })

    dispatch({
      type: "blogFetched",
      payload: res.data
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
    setID(props.id)

    async function load() {

      dispatch({
        type: "blogLoading"
      })
      
      fetchSingleBlog()
    }

    load()
  }, [])

  if (!state.isLoading && state.blogs !== null) {
    let blogList = state.blogs.data.map((blog) => {
      let blogBody = parse(blog.body_html)
      return (
        <li key={blog.id} className="blog">
          <h2>{blog.title}</h2>
          {blogBody}
        </li>
      )
    })

    return (
      <section className="full-blog">
        <ul>
          {blogList}
        </ul>
      </section>
  )
  } else {
    return (
      <p>Blogs loading!</p>
    )
  }
}

export default SingleBlog;