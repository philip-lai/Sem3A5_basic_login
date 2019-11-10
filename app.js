const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginCheck = require('./login_check')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const email = options.email.trim()
  const password = options.password.trim()
  let message = ''

  if (email.length === 0 || password.length === 0) {
    if (options.email === '' && options.password === '') {
      message = "You need to input email and password!!"
    } else if (options.email === '' && options.password !== '') {
      message = "Please input your email!!"
    } else if (options.email !== '' && options.password === '') {
      message = "Please input your password!!"
    }
    res.render('index', { message: message })
  } else {
    message = loginCheck(options)
    res.render('show', { message: message })
  }

  console.log(options)
  // res.render('index', { trashTalk: trashTalk, options: options })
})

// start and listen on the express server
app.listen(port, () => {
  console.log(`express is listening on localhost:${port}`)
})