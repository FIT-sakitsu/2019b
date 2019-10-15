var m = 0

var userInput = prompt('試行したい回数を入力してください。')

for (var n = 0; n < Number(userInput); n++) {
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
