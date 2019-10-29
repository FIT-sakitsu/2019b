var box = []

window.onload = function odd() {
  for (var x = 0; x <= 10; x++) {
    if (x % 2 == 1) {
      box.push(x)
    }
  }
}
function show() {
  alert(box)
}
