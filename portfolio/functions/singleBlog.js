const axios = require('axios')
const API_KEY = process.env.API_KEY

exports.handler = async function (event, context) {

  let id = event.queryStringParameters.id
  try {
    let blog = await axios.get(`https://dev.to/api/articles/${id}`, {
      headers: {
        "Api-Key": API_KEY,
        "Content-Type": 'application/json'
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: blog.data
      }),
      headers: {
        "Access-Control-Allow-Origin": "https://abbeyperini.dev",
        "Access-Control-Allow-Methods": "GET"
        
      }
    }

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

}