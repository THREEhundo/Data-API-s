//fetch() API
fetch('rainboww.jpg').then(response => {
  return response.blob()
}).then(response => {
  document.getElementById('rainbow').src = URL.createObjectURL(blob)
}).catch(err => {

})

//ASYNC AWAIT
async function fetchRainbow() {
  let response = await fetch('rainbow.jpg')
  let blob = response.blob()
  document.getElementById('rainbow').src = URL.createObjectURL(blob)
}
