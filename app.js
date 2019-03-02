let express = require('express')


let app = express()


app.get('/', (req, res) => {
  res.send('Hey vsauce! Michael here')
})



app.listen(3000, (req, res) => {
  console.log('App started at port 3000....')
})
