const _ = require('lodash')

module.exports = app => {
  _products = []

  // Create
  app.post('/product', (req, res) => {
    _products.push(req.body)
    res.json({ info: 'product created successfully.' })
  })
  // Read
  app.get('/product', (req, res) => {
    res.send(_products)
  })
  app.get('/product/:id', (req, res) => {
    res.json(_.find(_products, { id: req.params.id }))
  })
  // Update
  app.put('/product/:id', (req, res) => {
    const index = _.findIndex(_products, {
      id: parseInt(req.params.id)
    })
    _.merge(_products[index], req.body)
    res.json({ info: 'product updated successfully' })
  })

  // Delete
  app.delete('/product/:id', (req, res) => {
    _.remove(_products, product => {
      return product.id === parseInt(req.params.id)
    })
    res.json({ info: 'product removed successfully' })
  })
}
