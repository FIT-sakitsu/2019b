var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var x, y
for (y = 0; y < 200; y = y + 20) {
  for (x = 0; x < 200; x = x + 20) {
    if ((x + y) % 80 == 0) {
      ctx.fillRect(x, y, 20, 20)
    }
  }
}
