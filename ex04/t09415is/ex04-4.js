var n = Number(prompt('試行回数を入力して下さい'))
var m = 0

for (var i = 0; i < n; i++) {
  var x = Math.random()
  var y = Math.random()

  if (Math.sqrt(x * x + y * y) <= 1) {
    m++
  }
}

var pi = (m / n) * 4
alert(pi)
