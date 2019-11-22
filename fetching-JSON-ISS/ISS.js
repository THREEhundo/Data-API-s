const url = 'https://api.wheretheiss.at/v1/satellites/25544'

// Create map and tiles

// Create marker with a custom icon

// fetching ISS json data
async function dataISS() {
  const response = await fetch(url)
  const apiData = await response.json()

  const {latitude, longitude, velocity} = apiData
  document.getElementById('latitude').textContent = latitude
  document.getElementById('longitude').textContent = longitude
  document.getElementById('velocity').textContent = velocity
}
dataISS()
