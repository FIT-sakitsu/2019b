function light_print(event) {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  ctx.clearRect(50, 50, 100000, 50)
  ctx.fillRect(50, 50, event.value / 2, 10)
}

window.addEventListener('devicelight', light_print)
