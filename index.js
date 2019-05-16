require('env').config()
const express = require('express')
const massive = massive('massive')
const {SERVER_PORT, CONNECTION_STRING} = proces.env
const app = express()

massive(CONNECTION_STRING)
    .then((database) => {
        app.set('db', database)
    .catch((err) => {
        console.log(err)
    })
})

app.listen(SERVER_PORT, () => console.log(`Nothing is screwed up on ${SERVER_PORT}`))