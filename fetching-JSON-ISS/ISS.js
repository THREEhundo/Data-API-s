
// Create map and tiles
const mymap = L.map('issMap').setView([0, 0], 1);
//                                      ^ lat long & zoom

// Attributions
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL, {attribution})
tiles.addTo(mymap)

// Create marker with a custom icon
const iss400 = L.icon({
    iconUrl: 'iss400.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
})
const marker = L.marker([0, 0], { icon: iss400 }).addTo(mymap)

// fetching ISS json data
const url = 'https://api.wheretheiss.at/v1/satellites/25544'



async function dataISS() {
  const response = await fetch(url)
  const apiData = await response.json()
  const {latitude, longitude, velocity} = apiData

  marker.setLatLng([latitude, longitude])


  document.getElementById('latitude').textContent = latitude
  document.getElementById('longitude').textContent = longitude
  document.getElementById('velocity').textContent = velocity
}
dataISS()
