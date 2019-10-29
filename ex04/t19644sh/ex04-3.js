var m = 0

for (i = 0; i < 100; i++) {
  var x = Math.random()
  var y = Math.random()

  if (x * x + y * y <= 1) {
    m = m + 1
  }
}

var pi = (4 * m) / i
alert(pi)
