
// Create map and tiles
const mymap = L.map('issMap').setView([0, 0], 4);
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
    iconSize: [75, 50],
    iconAnchor: [25, 16],
})
const marker = L.marker([0, 0], { icon: iss400 }).addTo(mymap)

// fetching ISS json data
const url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function dataISS() {
  const response = await fetch(url)
  const apiData = await response.json()
  const {latitude, longitude, velocity} = apiData

// Zoom
  mymap.setV iew([latitude, longitude], mymap.getZoom());
  marker.setLatLng([latitude, longitude])

  document.getElementById('longitude').textContent = longitude.toFixed(2)
  document.getElementById('latitude').textContent = latitude.toFixed(2)
  document.getElementById('velocity').textContent = velocity.toFixed(2)

}
dataISS()

// Updates icon position every second on the map
setInterval(dataISS, 1000)
