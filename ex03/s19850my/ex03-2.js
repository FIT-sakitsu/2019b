function iftest() {
  var num = Math.random()

  if (num < 0.1) {
    alert('凶')
  } else if (0.1 <= num < 0.33) {
    alert('小吉')
  } else if (0.33 <= num < 0.6) {
    alert('中吉')
  } else if (0.6 <= num) {
    alert('大吉')
  }
}
