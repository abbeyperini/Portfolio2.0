import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Error from '../components/Error';
import Loading from '../components/Loading';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReactComponent as ExternalLink } from '../images/external-link.svg';

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
    newHeadings = newHeadings.replace(/<kbd>/g, "")
    newHeadings = newHeadings.replace(/<\/kbd>/g, "")

    return newHeadings
  }

  function makeID(title) {
    title = title.toLowerCase()
    let replaced = title.replace(/\s+/g, "-")
    replaced = replaced.replace(/#/g, "")
    return replaced
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
    let skipLinks = []
    if (state.blogs.length > 1) {
      blogList = state.blogs.map((blog) => {
        let SVGID = "ShareExternalLink" + Math.random().toString(16).slice(2)
        let markdown = blog.body_markdown
        let replaced = replaceHeadings(markdown)
        let blogID = makeID(blog.title)
        let Href = `#${blogID}`
        let skipLinkID = blogID + Math.random().toString(16).slice(2)
        let skipLink = <li className="screenreader-text" id={skipLinkID}><a className="screenreader-text" href={Href}>{blog.title}</a></li>
        skipLinks.push(skipLink)
        return (
          <article className="blog">
            <h2 id={blogID}>{blog.title}</h2>
            <a href={blog.url} target="_blank" rel="noreferrer"><button className="preview_button">Share <ExternalLink className="external-link" id={SVGID} focusable="false"/></button></a>
            <ReactMarkdown children={replaced} remarkPlugins={[remarkGfm]}></ReactMarkdown>
          </article>
        )
      })
      return (
        <section aria-label="Full list of Abbey's blog posts" className="full-blog">
          <div className="screenreader-text">
            <p tabIndex="0" role="navigation">Skip directly to a blog:</p>
            <ol>
              {skipLinks}
            </ol>
          </div>
          {blogList}
        </section>
      )
    } else {
      let markdown = state.blogs.body_markdown
      let replaced = replaceHeadings(markdown)
      return (
        <section aria-label="Full list of Abbey's blog posts" className="full-blog">
          <article key={state.blogs.id} className="blog">
            <h2>{state.blogs.title}</h2>
            <a href={state.blogs.url} target="_blank" rel="noreferrer"><button className="preview_button">Share <ExternalLink className="external-link" id="ShareExternalLink" focusable="false"/></button></a>
            <ReactMarkdown children={replaced} remarkPlugins={[remarkGfm]}></ReactMarkdown>
          </article>
        </section>
      )
    }
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