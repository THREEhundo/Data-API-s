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

const userDB = new Datastore('users.db')
userDB.loadDatabase()

// allDATA.html
app.get('/api', (request, response) => {
  db.find({}, (err, data) => {
    if (err) {
      response.end()
      return
    }
    response.json(data)
  })
})

app.get('/userData', (request, response) => {
  userDB.find({}, (err, data) => {
    if (err) {
      response.end()
      return
    }
    response.json(data)
    console.log(`yo`)
  })
})


app.delete('/api', (request, response) => {
  db.find({ name: { $exists: true} }, (err, data) => {
    if (err) {
      response.end()
      return
    }
    response.json(request.data)
    // console.log(`yo`)
  })
})

// app.delete('/api', (request, response) => {
//   const deleting = db.find({ name: { $exists: true } }, (err, data) => {
//     if (err) {
//       console.log('error');
//       response.end()
//       return
//     }
//     console.log('works');
//     const index = data.indexOf(request.body)
//     db.splice(index, 1)
//   })
//   })
  // if json object key contains name delete object

// index.html
app.post('/api', (request, response) => {
  const data = request.body
  const timestamp = Date.now()
  data.timestamp = timestamp
  db.insert(data)
  console.log(data)
  response.json(data)
})

app.post('/userData', (request, response) => {
  const data = request.body
  userDB.insert(data)
  response.json(data)
})
// Callback to get and give data.
