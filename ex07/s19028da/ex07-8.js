var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
ctx.beginPath(10,10,10,10)
ctx.arc(
  centerX,
  centerY,
  r,
  (0 * Math.PI) / 180,
  (360 * Math.PI) / 180,
  false
)
ctx.closePath(10,10,10,10)
ctx.stroke(10,10,10,10)
}

var m = 0
var n = Number

var i = 0
while (i < n) {
  var x = Math.random(x <= 1)
  var y = Math.random(y <= 1)
  var z = Math.sqrt(x * x + y * y)
  if (z <= 1) {
    m++
  }
  i = i + 1
}

alert((m * 4) / n)
