var r = 150
var centerX = 150
var centerY = 150
var offset = 18
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

ctx.linewidth = 1
ctx.strokeStyle = 'black'
ctx.fillStyle = 'red'
ctx.beginPath()

for (var i = 0; i < 6; i++) {
  var angle = i * (360 / 5) * 2 - offset
  var x = r * Math.cos((angle / 180) * Math.PI) + centerX
  var y = r * Math.sin((angle / 180) * Math.PI) + centerY
  console.log('x:' + x + ' y:' + y)

  if (i == 0) {
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
  }
}

ctx.closePath()
ctx.fill()
ctx.stroke()
