var m = 0

var n = Number(prompt('何回試行しますか'))

for (var i = 0; i < n; i++) {
  var x = Math.random()
  var y = Math.random()

  var dis = x * x + y * y
  if (dis < 1) {
    m++
  }
}

var area = ((1 * 1) / n) * m
var pi = area * 4
alert(pi)
