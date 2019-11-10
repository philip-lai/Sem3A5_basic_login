const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

function loginCheck(options) {
  console.log(options)
  let judge = false
  let message = ''
  const failMessage = "Username/Password 錯誤"
  for (let account in users) {
    console.log(account)
    if (options.email === users[account].email) {
      if (options.password === users[account].password) {
        message = `Welcom back, ${users[account].firstName}!`
        judge = true
        break
      }
    }
  }
  console.log('judge:',judge)
  if (judge) {
    return message
  } else {
    return failMessage
  }
}

module.exports = loginCheck
