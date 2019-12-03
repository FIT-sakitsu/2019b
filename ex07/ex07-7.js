var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

ctx.fillStyle = 'lightgray'
var x, y
for (x = 0; x < 300; x += 30) {
  for (y = 0; y < 300; y += 30) {
    if ((x + y) % 10 == 0) {
      ctx.fillRect(x, y, 30, 30)
    }
  }
}

for (x = 0; x < 300; x += 30) {
  for (y = 0; y < 300; y += 30) {
    if ((x + y) % 60 == 0 && x % 60 == 30 && y % 60 == 30) {
      ctx.clearRect(x, y, 30, 30)
    }
  }
}

ctx.fillStyle = 'black'
