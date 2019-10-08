function fortune() {
  var rnd = Math.random()
  var num = Number(rnd)
  if (num < 0.1) {
    alert('凶')
  } else if (num >= 0.1 && num < 0.33) {
    alert('小吉')
  } else if (num >= 0.33 && num < 0.66) {
    alert('中吉')
  } else if (num >= 0.66) {
    alert('大吉')
  }
}
