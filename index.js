const express = require('express')
const router = require('./routes')
const handlebars = require('express-handlebars')

// express instance
const app = express()

// setting handlebars
app.set('view engine', 'handlebars')

// setting dynamic views layout path
app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: 'index'
}))

// to server static files in this case we are sharing html
app.use(express.static('public'))

app.use(express.json())

// concat routers
app.use(router)

// start the server
app.listen(3000, () => console.log('server listening on 3000'))
