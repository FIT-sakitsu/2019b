window.onload = function() {
  var can = document.getElementById('canvas')
  var ctx = can.getContext('2d')

  ctx.fillStyle = '#ff0000' //塗り潰し
  ctx.strokeStyle = '#' //線
  ctx.beginPath()
  ctx.moveTo(50, 100)
  ctx.lineTo(210, 100)
  ctx.lineTo(78, 188)
  ctx.lineTo(130, 44)
  ctx.lineTo(182, 188)
  ctx.lineTo(50, 100)
  ctx.fill()
  ctx.stroke()
}
