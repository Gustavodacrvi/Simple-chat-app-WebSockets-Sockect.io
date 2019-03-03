let express = require('express')
let socket = require('socket.io')

let app = express()

app.use(express.static('static'))


let server = app.listen(3000, (req, res) => {
  console.log('Server started at port 3000....')
})

let io = socket(server)

io.on('connection', (socket) => {
  
  socket.on('send', (data) => {
    io.sockets.emit('send', data)
  })
})
