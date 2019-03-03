var socket = io.connect('http://localhost:3000')

let btn = document.getElementById('button')
let out = document.getElementById('output')
let hand = document.getElementById('handle')
let msg = document.getElementById('message')
let fdback = document.getElementById('feedback')

let startedTyping

btn.addEventListener('click', () => {
  socket.emit('send', {
    msg: msg.value,
    hand: hand.value
  })
})

msg.addEventListener('keypress', () => {
  if (!startedTyping){
    socket.emit('typing', hand.value)
    startedTyping = true
  }
})

socket.on('send', (data) => {
  fdback.innerHTML = ''
  startedTyping = false
  out.innerHTML += '<span><strong>' + data.hand + ': </strong>' + data.msg + '</span>'
})

socket.on('typing', (data) => {
  fdback.innerHTML += '<span class="faded"><em>' + data + ' is typing... </em></span>'
})

