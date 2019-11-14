window.onload = function() {
  var can = document.getElementById('canvas')
  var ctx = can.getContext('2d')

  ctx.fillStyle = '#ff0000' //塗り潰し
  ctx.strokeStyle = '#' //線

  var x = []
  var y = []
  var count = 0
  while (count <= 4) {
    var theta = 144 * count - 18
    var x_eq = 200 + 50 * Math.cos((theta / 180) * Math.PI)
    var y_eq = 200 + 50 * Math.sin((theta / 180) * Math.PI)
    count = count + 1
    x.push(x_eq)
    y.push(y_eq)
  }

  ctx.beginPath()
  var count_2 = 0
  ctx.moveTo(x[0], y[0])
  while (count_2 <= 4) {
    ctx.lineTo(x[count_2 + 1], y[count_2 + 1])
    count_2 = count_2 + 1
  }
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
}
