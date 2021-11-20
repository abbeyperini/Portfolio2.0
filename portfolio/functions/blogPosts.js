const axios = require('axios')
const API_KEY = process.env.API_KEY

exports.handler = async function (event, context) {
  let articles
  try {
    articles = await axios.get('https://dev.to/api/articles/me', {
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

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: articles.data
    }),
    headers: {
      "Access-Control-Allow-Origin": "https://abbeyperini.dev",
      "Access-Control-Allow-Methods": "GET"
    }
  }

}