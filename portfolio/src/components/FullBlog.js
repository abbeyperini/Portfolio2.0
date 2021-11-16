import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Error from '../components/Error';
import Loading from '../components/Loading';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function FullBlog(props) {

  const initialState = {
    isLoading: false,
    blogs: null
  }

  async function fetchBlogs() {
    axios.get('https://abbeyperini.dev/.netlify/functions/blogPosts')
    .then((res) => {
      dispatch({
        type: "blogFetched",
        payload: res.data.data
      })
    }).catch((error) => {
      dispatch({
        type: "blogFetchFail",
        payload: error
      })
    })
  }

  async function fetchSingleBlog(id) {
    let url = `https://abbeyperini.dev/.netlify/functions/singleBlog?id=${id}`
    axios.get(url)
    .then((res) => {
      dispatch({
        type: "blogFetched",
        payload: res.data.data
      })
    }).catch((err) => {
      dispatch({
        type: "blogFetchFail",
        payload: err
      })
    })
  }

  function replaceHeadings(markdown) {
    let newHeadings 
    newHeadings = markdown.replace(/\s#{5}\s/g, "\n###### ")
    newHeadings = newHeadings.replace(/\s#{4}\s/g, "\n##### ")
    newHeadings = newHeadings.replace(/\s#{3}\s/g, "\n#### ")
    newHeadings = newHeadings.replace(/\s#{2}\s/g, "\n### ")

    return newHeadings
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
      if (props.id !== 0) {
        fetchSingleBlog(props.id)
      } else {
        fetchBlogs()
      }
    }

    load()
  }, [props.id])

  if (!state.isLoading && state.blogs !== null) {
    let blogList
    if (state.blogs.length > 1) {
      blogList = state.blogs.map((blog) => {
        let markdown = blog.body_markdown
        let replaced = replaceHeadings(markdown)
        return (
          <article key={blog.id} className="blog">
            <h2>{blog.title}</h2>
            <a href={blog.url} target="_blank" rel="noreferrer"><button className="preview_button">Share</button></a>
            <ReactMarkdown children={replaced} remarkPlugins={[remarkGfm]}></ReactMarkdown>
          </article>
        )
      })
    } else {
      let markdown = state.blogs.body_markdown
      let replaced = replaceHeadings(markdown)
      blogList =
      <article key={state.blogs.id} className="blog">
        <h2>{state.blogs.title}</h2>
        <a href={state.blogs.url} target="_blank" rel="noreferrer"><button className="preview_button">Share</button></a>
        <ReactMarkdown children={replaced} remarkPlugins={[remarkGfm]}></ReactMarkdown>
      </article>
    }

    return (
      <section aria-label="Full list of Abbey's blog posts" className="full-blog">
        {blogList}
      </section>
  )
  } else if (!state.isLoading && state.error) {
    return (
      <Error />
    )
  } else {
    return (
      <Loading />
    )
  }
}

export default FullBlog;