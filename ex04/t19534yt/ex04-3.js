var m = 0
var n = 100

var i = 0
while (i < n) {
  var x = Math.random()
  var y = Math.random()
  var z = Math.sqrt(x * x + y * y)
  if (z <= 1) {
    m++
  }
  i = i + 1
}

alert((m * 4) / n)
