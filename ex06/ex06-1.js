function changeCSS() {
  var line = document.getElementById('button')
  if (line.style.textDecoration != 'line-through') {
    line.style.textDecoration = 'line-through'
  } else {
    line.style.textDecoration = 'none'
  }
}
