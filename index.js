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

app.use(express.json())

app.post('/api/products', products_controller.create)
app.get('/api/getone/:id', products_controller.getOne)
app.get('/api/products', products_controller.getAll)
app.put('/api/products/:id', products_controller.update)
app.delete('/api/products/:id', products_controller.delete)

app.listen(SERVER_PORT, () => console.log(`Nothing is screwed up on ${SERVER_PORT}`))