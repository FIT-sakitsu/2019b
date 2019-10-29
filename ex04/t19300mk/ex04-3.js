var m = 0
var n = 100
for (i = 0; i < n; i++) {
  var x = Math.random()
  var y = Math.random()
  var circle = Math.sqrt(x * x + y * y)
  if (circle <= 1) {
    m++
  }
}
var pi = (4 * m) / n
alert(pi)
