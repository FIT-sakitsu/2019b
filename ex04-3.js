var m = 0

for (n = 0; n < 100; n++) {
  var x = Math.random()
  var y = Math.random()
  if (x * x + y * y <= 1) {
    m++
  }
}
var z = (4 * m) / n
alert(z)
