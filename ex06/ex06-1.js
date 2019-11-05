function linethrough() {
  var ele = document.getElementById('linethrough')
  if (ele.style.textDecoration != 'line-through') {
    ele.style.textDecoration = 'line-through'
  } else {
    ele.style.textDecoration = 'none'
  }
}
