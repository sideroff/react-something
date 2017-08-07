const http = require('http')
const path = require('path')
const mongoose = require('mongoose')
mongoose.Promise = Promise

const env = process.env.NODE_ENV || 'development'
const config = require('./config.js')[env]

const express = require('express')
const app = express()

require('./config/router.js')(app, config)


mongoose.connect(config.database.connectionString, { useMongoClient: true })
  .then(() => {
    console.log('Connection to database was successful.\n Starting server...')
    app.listen(config.port, () => {
      console.log('Server listening on port: ', config.port)
    })
  })
  .catch(err => {
    console.log('Connection to database failed: ' + JSON.stringify(err))
  })
