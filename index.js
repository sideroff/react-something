const http = require('http')
const path = require('path')
const fs = require('fs')


const express = require('express')
const app = express()

let port = 3000

app.use(express.static('dist'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(port, function () {
  console.log('Server listening on port: ', port)
})
