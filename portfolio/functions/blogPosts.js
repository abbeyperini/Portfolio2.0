const axios = require('axios')
const API_KEY = process.env.API_KEY

async function getAllBlogsByID(blogIDs) {
  let blogArray = []

  for (let i = 0; i < blogIDs.length; i++) {
    let blog = await getBlogByID(blogIDs[i])
    blogArray.push(blog)
  }

  return blogArray
}

async function getBlogByID(id) {
  let blog = await axios.get(`https://dev.to/api/articles/${id}`, {
    headers: {
      "Api-Key": API_KEY,
      "Content-Type": 'application/json'
    }
  })
  return blog.data
}

exports.handler = async function (event, context) {
  let articlesByUser
  let blogIDs = []
  try {
    articlesByUser = await axios.get('https://dev.to/api/articles/me', {
      headers: {
        "Api-Key": API_KEY,
        "Content-Type": 'application/json'
      }
    })
  } catch (err) {
    console.log(err)
    return {
      statusCode:err.statusCode || 500,
      body: err.message,
      headers: {
        "Access-Control-Allow-Origin": "https://abbeyperini.dev",
        "Access-Control-Allow-Methods": "GET"
      }
    }
  }

  articlesByUser.data.forEach(blog => blogIDs.push(blog.id))
  let allBlogs = await getAllBlogsByID(blogIDs)

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: allBlogs
    }),
    headers: {
      "Access-Control-Allow-Origin": "https://abbeyperini.dev",
      "Access-Control-Allow-Methods": "GET"
    }
  }

}