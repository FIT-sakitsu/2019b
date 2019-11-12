var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var r = 100
var width = r * 2
var centerX = 100
var centerY = 100
var trials = 500

var pi = 0
var n = 0
var m = 0

ctx.strokeStyle = 'black'
ctx.strokeWeight = 1
ctx.strokeRect(0, 0, width, width)
ctx.arc(centerX, centerY, r, 0 * Math.PI, 2 * Math.PI, true)
ctx.stroke()

function drawResult() {
  document.getElementById('pi').innerText = pi
  document.getElementById('m').innerText = m
  document.getElementById('n').innerText = n
}

function reset() {
  pi = 0
  n = 0
  m = 0
  drawResult()
  ctx.clearRect(0, 0, width, width)

  ctx.strokeStyle = 'black'
  ctx.strokeWeight = 1
  ctx.strokeRect(0, 0, width, width)
  ctx.arc(centerX, centerY, r, 0 * Math.PI, 2 * Math.PI, true)
  ctx.stroke()
}

function montecarlo() {
  for (var i = 0; i < trials; i++) {
    n++
    var x = Math.random() * width
    var y = Math.random() * width

    var xx = centerX - x
    var yy = centerY - y
    if (Math.sqrt(xx * xx + yy * yy) < r) {
      m++
      ctx.fillStyle = 'blue'
    } else {
      ctx.fillStyle = 'red'
    }
    ctx.fillRect(x, y, 1, 1)
  }

  var area = ((width * width) / n) * m
  pi = area / (r * r)

  drawResult()
}
