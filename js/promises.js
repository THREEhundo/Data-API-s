/*
api.graphy.com

dc6zaTOxFJmzC

funny+cat

?api_key=dc6zaTOxFJmzC&q=funny%2Bcat

*/
const api = 'http://api.giphy.com/v1/gifs/search?'
const apiKey = '&api_key=dc6zaTOxFJmzC'
const query = '&q=dancing+baby'

function setup() {
  let url = api + apiKey + query
  fetch(url).then(gotData)
}

function gotData(giphy) {
  for (var i = 0; i < giphy.length; i++) {
    let gif = new Img(400, 200)
    gif.src = giphy.data[i].images.original.url
    document.body.appendChild(gif)
  }
}
setup()
