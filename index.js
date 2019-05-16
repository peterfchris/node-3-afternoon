require('env').config()
const express = require('express')
const massive = massive('massive')
const {SERVER_PORT} = proces.env
const app = express()

app.listen(SERVER_PORT, () => console.log(`Nothing is screwed up on ${SERVER_PORT}`))