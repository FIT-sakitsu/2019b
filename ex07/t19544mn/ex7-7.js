var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

for (var i = 0; i < 200; i += 40) {
  ctx.fillStyle = 'lightgray'
  ctx.fillRect(i, 0, 20, 200)
  ctx.fillRect(0, i, 200, 20)
}

for (var y = 0; y < 200; y += 20) {
  for (var x = 0; x < 200; x += 20) {
    if (x == y) {
      ctx.fillStyle = 'black'
      ctx.fillRect(x, y, 20, 20)
    }
  }
}
