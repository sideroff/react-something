const path = require('path')

const rootPath = path.join(__dirname, '../')
const port = process.env.PORT || 9000

module.exports = {
    development: {
        database: {
            connectionString: 'mongodb://localhost:27017/drawit'
        },
        rootPath: rootPath,
        port: port

    },
    production: {
        rootPath: rootPath,
        port: port
    }
}