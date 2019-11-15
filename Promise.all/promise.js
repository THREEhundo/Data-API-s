/*
api.giphy.com/v1/gifs/random
dc6zaTOxFJmzC
harambe
e826c9fc5c929e0d6c6d423841a282aa

api.giphy.com/v1/gifs/random
*/

const api = `https://api.giphy.com/v1/gifs/random?`
const apiKey = `api_key=dc6zaTOxFJmzC`
const harambe = `&tag=harambe`

function setup() {
  const url = api + apiKey + harambe
  fetch(url).then(resolve => createImg(resolve.data[0].images.original.url))
}
