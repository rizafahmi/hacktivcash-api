const _ = require('lodash')

module.exports = app => {
  _products = []

  // Create
  // Read
  app.get('/product', (req, res) => {
    res.send(_products)
  })
  // Update
  // Delete
}
