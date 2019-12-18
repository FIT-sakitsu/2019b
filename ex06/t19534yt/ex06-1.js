function line() {
  var line = document.getElementById('line')
  if (line.style.textDecoration == 'line-through') {
    line.style.textDecoration = ''
  } else {
    line.style.textDecoration = 'line-through'
  }
}
