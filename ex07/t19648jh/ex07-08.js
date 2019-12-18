var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

ctx.lineWidth = 1
ctx.strokeStyle = 'black'

var r = 100
var centerX = r
var centerY = r
var width = r * 2
var trials = 500

ctx.strokeRect(0, 0, width, width)

ctx.beginPath()
ctx.arc(centerX, centerY, r, (0 * Math.PI) / 180, (360 * Math.PI) / 180, false)
ctx.closePath()
ctx.stroke()

var pi = 0
var n = 0
var m = 0

function drawResult() {
  document.getElementById('pi').innerText = pi
}

function reset() {
  n = 0
  m = 0
  pi = 0
  drawResult()
  ctx.clearRect(0, 0, width, width)
  ctx.strokeRect(0, 0, width, width)

  ctx.beginPath()
  ctx.arc(
    centerX,
    centerY,
    r,
    (0 * Math.PI) / 180,
    (360 * Math.PI) / 180,
    false
  )
  ctx.closePath()
  ctx.stroke()
}

function start() {
  for (var i = 0; i < trials; i++) {
    n++
    var x = Math.random() * width
    var y = Math.random() * width

    var xx = x - centerX
    var yy = y - centerY
    if (Math.sqrt(xx * xx + yy * yy) < r) {
      m++
      ctx.fillStyle = 'green'
    } else {
      ctx.fillStyle = 'orange'
    }
    ctx.fillRect(x, y, 1, 1)
    var area = ((width * width) / n) * m
    pi = area / (r * r)

    drawResult()
  }
}
