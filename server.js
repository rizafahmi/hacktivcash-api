const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/products', {
  useMongoClient: true
})

app.use(bodyParser.json())
const products = require('./controllers/product')(app)

app.get('', (req, res) => {
  res.send('OK')
})

app.listen(3000, () => {
  console.log(`Magic happen at http://localhost:3000/`)
})
