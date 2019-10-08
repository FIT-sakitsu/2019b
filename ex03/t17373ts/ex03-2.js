function omikuji() {
  var num = Math.random()
  if (num < 0.1) {
    alert('凶')
  } else if (0.1 <= num && num < 0.33333) {
    alert('小吉')
  } else if (0.33333 <= num && num < 0.66666) {
    alert('中吉')
  } else {
    alert('大吉')
  }
}
