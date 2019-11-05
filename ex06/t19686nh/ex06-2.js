function reset() {
  var classes = document.getElementsByClassName('aaa')
  for (var i = 0; i < classes.length; i++) {
    classes[i].style.backgroundColor = 'transparent'
  }
}

function change1() {
  var classes = document.getElementsByClassName('ccc')
  var text = document.getElementById('color').value
  reset()
  for (var i = 0; i < classes.length; i++) {
    classes[i].style.backgroundColor = text
  }
}

function change2() {
  var classes = document.getElementsByClassName('aaa bbb')
  var text = document.getElementById('color').value
  reset()
  for (var i = 0; i < classes.length; i++) {
    classes[i].style.backgroundColor = text
  }
}
