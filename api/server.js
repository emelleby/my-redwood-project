const express = require('express')
const sqlite = require('sqlite3').verbose()

const app = express()
const db = new sqlite.Database(
  'api/db/dev.db',
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) return console.error('Error: ', err)
  }
)
// api/db/dev.db
const port = process.env.PORT || 4000

app.get('/posts', (req, res) => {
  const sql = 'SELECT * FROM Post'
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).send(err)
    } else {
      console.log('What do you think')
      res.json(rows)
    }
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})
