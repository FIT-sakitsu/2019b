function changecolor() {
  var color = document.getElementById('color').value
  var element = document.getElementsByClassName('ccc')
  for (var i = 0; i < element.length; i++) {
    element[i].style.background = color
  }
}

function changecolorab() {
  var color = document.getElementById('color').value
  var element = document.getElementsByClassName('aaa bbb')
  for (var i = 0; i < element.length; i++) {
    element[i].style.background = color
  }
}
