module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {product_name, description, price, image_url} = req.body
        db.create_product({$1, $2, $3, $4}).then(() => {
            res.sendStatus(200)
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.read_product()
        .then((product) => {
            res.status(200).send(product)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.read_products()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const {params, query} = req 
        db.update_product()
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product()
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
}