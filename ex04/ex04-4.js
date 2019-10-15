var m = 0
var n = Number(prompt('何回試行しますか？'))

var i = 0
while (i < n) {
  var x = Math.random(x <= 1)
  var y = Math.random(y <= 1)
  var z = Math.sqrt(x * x + y * y)
  if (z <= 1) {
    m++
  }
  i = i + 1
}

alert((m * 4) / n)
