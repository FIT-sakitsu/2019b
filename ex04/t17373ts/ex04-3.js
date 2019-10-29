function monteCarlo() {
  var x
  var y
  var d
  var count = 0
  var m = 0
  var box
  while (count <= Number(document.getElementById('z').value)) {
    x = Math.random()
    y = Math.random()
    d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    count += 1
    if (d <= 1) {
      m += 1
    }
  }
  box = (4 * m) / count
  alert(box)
}
