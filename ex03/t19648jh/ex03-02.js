function fortune() {
  var rnd = Math.random()

  if (rnd < 0.1) {
    alert('区')
  } else if (0.1 >= rnd <= 0.33) {
    alert('小吉')
  } else if (0.33 >= rnd <= 0.66) {
    alert('中吉')
  } else if (0.66 <= rnd) {
    alert('大吉')
  }
}
