window.onload = function() {
  var can = document.getElementById('canvas')
  var ctx = can.getContext('2d')

  ctx.fillStyle = '#'
  ctx.strokeStyle = '#'

  var x, y
  for (y = 0; y < 200; y += 20) {
    for (x = 0; x < 200; x += 20) {
      if ((x + y) % 80 == 0) {
        ctx.fillRect(x, y, 20, 20)
      }
    }
  }
  var ctx2 = can.getContext('2d')

  ctx2.fillStyle = '#c0c0c0'
  ctx2.strokeStyle = '#c0c0c0'

  var z, w
  for (w = 0; w < 200; w += 20) {
    for (z = 0; z < 200; z += 20) {
      if ((z + w) % 80 == 40) {
        ctx2.fillRect(z, w, 20, 20)
      }
    }
  }
}
