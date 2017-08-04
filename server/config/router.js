module.exports = (app, config) => {
    app.get('/api/test', function (req, res) {
        res.send({ data: 'test successful' })
    })

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../dist/index.html'))
    })

}