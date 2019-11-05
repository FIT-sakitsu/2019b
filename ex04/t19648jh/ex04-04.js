var m = 0

var n = Number(prompt('何回試行しますか？'))
for (i = 0; i < n; i++) {
  var x = Math.random()
  var y = Math.random()
  if (x * x + y * y <= 1) {
    m = m + 1
  }
}

var pi = (m / n) * 4
alert(pi)
