var m = 0

for (var n = 0; n < 100; n++) {
  var x = Math.random()
  var y = Math.random()
  if (x * x + y * y <= 1) {
    m = m + 1
  } else {
    continue
  }
}

var pi = (4 * m) / n
alert(pi)
