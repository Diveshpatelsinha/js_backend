require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/h', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
 res.send('diwesh.sinha.1')
})

app.get('/login', (req, res) => {
    res.send('<h1> hello this is Divesh </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)

})

