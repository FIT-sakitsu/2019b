var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var x, y
for (x = 0; x < 300; x += 30) {
  for (y = 0; y < 300; y += 30) {
    if ((x + y) % 60 == 0) {
      ctx.fillStyle = 'lightgray'
      ctx.fillRect(x, y, 30, 30)
    }

    if ((x + y) % 120 == 0) {
      ctx.fillStyle = 'green'
      ctx.fillRect(x, y, 30, 30)
    }
  }
}
