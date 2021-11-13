import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import Error from '../components/Error';
import Loading from '../components/Loading';

function SingleBlog(props) {

  const initialState = {
    isLoading: false,
    blog: null
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
          blog: action.payload
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
      
      fetchSingleBlog(props.id)
    }

    load()
  }, [props.id])

  if (!state.isLoading && state.blog !== null) {

    let blogBody = parse(state.blog.body_html)

    return (
      <section className="full-blog">
        <ul>
          <li key={state.blog.id} className="blog">
            <h1>{state.blog.title}</h1>
            {blogBody}
          </li>
        </ul>
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

export default SingleBlog;