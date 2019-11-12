var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
ctx.lineWidth = 1
ctx.strokeStyle = 'black'
ctx.strokeRect(0, 0, 200, 200)
ctx.beginPath()
ctx.arc(100, 100, 100, 0, 2 * Math.PI, true)
ctx.stroke()

var m = 0

var r = 100
var centerX = 100
var centerY = 100

for (var i = 0; i < n; i = i + 1) {
  var x = 200 * Math.random()
  var y = 200 * Math.random()
  var a = x - centerX
  var b = y - centerY

  if (Math.sqrt(a * a + b * b) <= r) {
    m = m + 1
  }
}

function Start() {
  var m = 0
  var n = 100

  for (var i = 0; i < n; i = i + 1) {
    var x = Math.random()
    var y = Math.random()
    if (x * x + y * y <= 1) {
      m = m + 1
    }
  }

  var area = ((1 * 1) / n) * m
  var pi = area * 4

  document.getElementById('pi').innerHTML = pi

  function Reset() {}
}
