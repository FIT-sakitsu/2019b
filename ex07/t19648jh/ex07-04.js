var r = 100
var centerX = 100
var centerY = 100
var offset = 18

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
ctx.strokeStyle = 'green'
ctx.fillStyle = '#D8F781'

ctx.beginPath()
for (var i = 0; i < 6; i++) {
  var angle = i * (360 / 5) * 2 - offset
  var x = r * Math.cos((angle / 180) * Math.PI) + centerX
  var y = r * Math.sin((angle / 180) * Math.PI) + centerY

  if (i == 0) {
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
  }
}
ctx.closePath()
ctx.stroke()
ctx.fill()
