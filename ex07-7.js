window.onload = function() {
  var can = document.getElementById('canvas')
  var ctx = can.getContext('2d')

  ctx.fillStyle = '#c0c0c0'
  ctx.strokeStyle = '#c0c0c0'
  ctx.fillRect(0, 0, 200, 200)
  var x, y
  for (y = 20; y < 200; y += 40) {
    for (x = 20; x < 200; x += 40) {
      if (x % 40 == 20) {
        ctx.clearRect(x, y, 20, 20)
      }
    }
  }
  var ctx2 = can.getContext('2d')

  ctx2.fillStyle = 'black'

  var z, w
  for (w = 0; w < 200; w += 20) {
    for (z = 0; z < 200; z += 20) {
      if (z == w) {
        ctx2.fillRect(z, w, 20, 20)
      }
    }
  }
}
