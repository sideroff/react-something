const path = require('path')
const express = require('express')

module.exports = (app, config) => {
    app.get('/api/test', function (req, res) {
        res.send({ data: 'test successful' })
    })

    app.use(express.static(path.join(config.rootPath, '/dist')))

    app.get('*', function (req, res) {
        res.sendFile(path.join(config.rootPath, '/dist/index.html'))
    })
}