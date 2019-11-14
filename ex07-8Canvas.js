window.onload = function() {
  var can = document.getElementById('canvas')
  var ctx = can.getContext('2d')

  ctx.fillStyle = 'yellow'
  ctx.strokeStyle = 'black'
  ctx.beginPath()
  ctx.arc(50, 50, 100, 0, 90, false)
  ctx.strokeRect(50, 50, 100, 100)
  ctx.closePath()
  ctx.stroke()
}
