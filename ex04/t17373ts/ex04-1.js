var x = 0
var box = []

window.onload = function even() {
  while (x <= 10) {
    if (x % 2 == 0) {
      box.push(x)
      x = x + 1
    } else {
      x += 1
    }
  }
}
function show() {
  alert(box)
}
