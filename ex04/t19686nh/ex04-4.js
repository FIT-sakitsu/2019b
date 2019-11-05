var m = 0
var n = prompt('回数')

for (var i = 0; i < n; i = i + 1) {
  var x = Math.random()
  var y = Math.random()
  if (x * x + y * y <= 1) {
    m = m + 1
  }
}

var area = ((1 * 1) / n) * m
var pi = area * 4
alert(pi)
