const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send('Is this thing on?')
})

module.exports = server