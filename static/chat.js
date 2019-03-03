var socket = io.connect('http://localhost:3000')

let btn = document.getElementById('button')
let out = document.getElementById('output')
let hand = document.getElementById('handle')
let msg = document.getElementById('message')

btn.addEventListener('click', () => {
  socket.emit('send', {
    msg: msg.value,
    hand: hand.value
  })
})

socket.on('send', (data) => {
  out.innerHTML += '<span><strong>' + data.hand + ': </strong>' + data.msg + '</span>'
})
