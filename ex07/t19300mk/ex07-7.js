var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var x, y
ctx.fillStyle = 'grey'
ctx.fillRect(0, 0, 200, 200)
for (y = 0; y < 200; y = y + 20) {
  for (x = 0; x < 200; x = x + 20) {
    if (x % 40 == 20 && y % 40 == 20) {
      ctx.fillStyle = 'white'
      ctx.fillRect(x, y, 20, 20)
    }
  }
}
for (y = 0; y < 200; y = y + 20) {
  for (x = 0; x < 200; x = x + 20) {
    if (x == y && (x + y) % 40 == 0) {
      ctx.fillStyle = 'black'
      ctx.fillRect(x, y, 20, 20)
    }
  }
}
