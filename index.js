const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! pro')
})
let retries = 5
while (retries) {
  try {
    app.listen(port, () => {
      console.log(`node server is started at port: 3000 && retries ${retries}`)
    })
    break
  } catch (error) {
    console.log(error)
    retries -= 1
  }
}
