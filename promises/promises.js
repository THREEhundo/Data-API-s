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

let promises = [wordGIF(3), wordGIF(4), wordGIF(5)]
Promise.all(promises)
  .then((results) => {
    createP(results[i].word)
    createImg(results[i].img)
  })
  .catch(err => console.log(err))

















  let promises = []
  for (var i = 0; i < 100; i++) {
    promises.push(wordGIF(4))
  }
  Promise.all(promises)
  .then(response => {
    createP(response.title)
    createImg(response.img)
  })
  .catch(err => console.log(err))

  async function wordGIF() {
    let response1 = await fetch(wordnikAPI)
    let json1 = await response1.json()
    let response2 = await fetch(giphyAPI + json1.word)
    let json2 = await response2.json()
    let img_url = json2.data[0].images["fixed_height_small"]
    return {
      word: json1.word
      img: img_url
    }
  }
