var canvas = document.getElementById('canvas')

var ctx = canvas.getContext('2d')

ctx.fillStyle = 'lightgray'
var x, y
for (y = 0; y < 200; y += 20) {
  for (x = 0; x < 200; x += 20) {
    if ((x + y) % 40 == 0) {
      ctx.fillRect(x, y, 20, 20)
    }
  }
}

ctx.fillStyle = 'black'
var x, y
for (y = 0; y < 200; y += 20) {
  for (x = 0; x < 200; x += 20) {
    if ((x + y) % 80 == 0) {
      ctx.fillRect(x, y, 20, 20)
    }
  }
}
