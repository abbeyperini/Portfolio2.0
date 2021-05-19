import React, { useEffect, useReducer } from 'react';

function FullBlog() {

  const initialState = {
    isLoading: false,
    data: null
  }

  async function fetchBlogs() {
    const res = await fetch('https://dev.to/api/articles/me', {
      headers: {
        "Api-Key": "yt5HgRk68fjpAhKu95qjRy3F",
        "Content-Type": 'application/json'
      }
    })
    .then((response) => JSON.parse(response))
    .catch((error) => dispatch({
      type: "blogFetchFail",
      payload: error
    }))
    
    return await res
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
      
      const data = await fetchBlogs()

      dispatch({
        type: "blogsFetched",
        payload: data
      })
    }

    load()
  }, [])

  return (
      <section className="full-blog">
        <p>{state.data}</p>
      </section>
  )
}

export default FullBlog;