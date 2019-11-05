function reset() {
  var classes = document.getElementsByTagName('p')
  for (var i = 0; i < classes.length; i++) {
    classes[i].style.background = 'white'
  }
}

function alpha() {
  reset()

  var classes = document.getElementsByClassName('ccc')
  for (var i = 0; i < classes.length; i++) {
    classes[i].style.background = document.getElementById('color').value
  }
}
function beta() {
  reset()

  var classes = document.getElementsByClassName('aaa bbb')
  for (var i = 0; i < classes.length; i++) {
    classes[i].style.background = document.getElementById('color').value
  }
}
