const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const products = require('./controllers/product')(app)

app.get('', (req, res) => {
  res.send('OK')
})

app.listen(3000, () => {
  console.log(`Magic happen at http://localhost:3000/`)
})
