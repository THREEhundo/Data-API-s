const express = require('express')
const Datastore = require('nedb') //Database

const app = express()
app.listen(3000, () => console.log('Listening at 3000'))
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))
// To run use Git Bash
// node index.js

const db = new Datastore('database.db')
db.loadDatabase()
// loads the previous data available when the server ran into memory, if the database hasnt been created.

app.post('/api', (request, response) => {
  const data = request.body
  const timestamp = Date.now()
  data.timestamp = timestamp
  db.insert(data)
  console.log(data)
  response.json({
    status: 'success',
    timestamp: timestamp,
    latitude: data.latitude,
    longitude: data.longitude
  })
})
// Callback to get and give data.
