const app = require('express')()
const products = require('./controllers/product')(app)

app.get('', (req, res) => {
  res.send('OK')
})

app.listen(3000, () => {
  console.log(`Magic happen at http://localhost:3000/`)
})
