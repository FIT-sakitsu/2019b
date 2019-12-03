var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
ctx.fillStyle = 'lightgray'
for (n = 0; n < canvas.width; n += 40) {
  ctx.fillRect(0, n, 200, 20)
}
for (m = 0; m < canvas.width; m += 40) {
  ctx.fillRect(m, 0, 20, 200)
}

for (y = 0; y < 200; y += 20) {
  for (x = 0; x < 200; x += 20) {
    if (x == y) {
      ctx.fillStyle = 'black'
      ctx.fillRect(x, y, 20, 20)
    }
  }
}
