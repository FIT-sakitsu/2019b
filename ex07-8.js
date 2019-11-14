function monteCarlo() {
  var can = document.getElementById('canvas')
  var ctx = can.getContext('2d')

  var m = 0

  var xPoint = []
  var yPoint = []
  ctx.beginPath()
  for (n = 0; n < 100; n++) {
    var x = Math.random()
    var y = Math.random()

    if (x * x + y * y <= 1) {
      m++
    }
    var z = x * 100
    var w = y * 100
    xPoint.push(z)
    yPoint.push(w)
    ctx.fillRect(xPoint[n], yPoint[n], 0.2, 0.2)
  }
  ctx.closePath()

  var z = (4 * m) / n
  var element = document.getElementById('pi-table')
  element.innerHTML.value = z
}
