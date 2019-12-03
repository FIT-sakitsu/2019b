var r = 100
var centerX = 100
var centerY = 100
var offset = 18

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

ctx.lineWidth = 3
ctx.strokeStyle = 'black'
ctx.fillStyle = 'lightgray'

ctx.beginPath()

for (var i = 0; i < 6; i++) {
  var angle = i * (360 / 5) * 2 - offset
  var x = centerX + r * Math.cos((angle / 180) * Math.PI)
  var y = centerY + r * Math.sin((angle / 180) * Math.PI)

  if (i == 0) {
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
  }
}
ctx.closePath()
ctx.fill()
ctx.stroke()
