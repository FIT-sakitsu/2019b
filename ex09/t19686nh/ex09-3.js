function light_print(event) {
  var elm = document.getElementById('lighttext')
  elm.value = event.value

  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, 1000, 200)
  ctx.fillRect(0, 0, event.value / 10, 20)
}

window.addEventListener('devicelight', light_print)
