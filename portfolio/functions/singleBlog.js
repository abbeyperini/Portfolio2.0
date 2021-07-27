const axios = require('axios')

exports.handler = async function (event, context) {

  let id = event.queryStringParameters.id
  try {
    let blog = await axios.get(`https://dev.to/api/articles/${id}`, {
      headers: {
        "Api-Key": "xr99WgmvHfymuoWoU89huq22",
        "Content-Type": 'application/json'
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: blog.data
      }),
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    }

  } catch (err) {
    console.log(err)
    return {
      statusCode:err.statusCode || 500,
      body: err.message,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    }
  }

}