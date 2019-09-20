const express = require('express')
const server = express()
const UserRouter = require('../users/user-router')

server.use('/users', UserRouter)

server.get('/', (req, res) => {
    res.send('Is this thing on?')
})

module.exports = server