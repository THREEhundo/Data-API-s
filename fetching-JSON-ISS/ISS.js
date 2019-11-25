
// Create map and tiles
const mymap = L.map('issMap').setView([0, 0], 1);
//                                   ^ lat long & zoom

// Create marker with a custom icon
const issIcon = L.icon({
    iconUrl: 'ISS_marker.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
})

// Attributions
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// const pngAttribution =
// '&copy <a href="https://creativecommons.org/licenses/by/4.0/">ISS icon</a> <a href="http://www.iconarchive.com/artist/goodstuff-no-nonsense.html">Good Stuff No Nonsense</a>'

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL, {attribution})
tiles.addTo(mymap)


// Marker for ISS
const marker =   L.marker([latitude, longitude], {icon: issIcon}).addTo(mymap)

// fetching ISS json data
const url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function dataISS() {
  const response = await fetch(url)
  const apiData = await response.json()
  const {latitude, longitude, velocity} = apiData

//  L.marker([latitude, longitude]).addTo(mymap)
  marker.setLatLng([latitude, longitude])

  document.getElementById('latitude').textContent = latitude
  document.getElementById('longitude').textContent = longitude
  document.getElementById('velocity').textContent = velocity
}
dataISS()
