function changeC() {
  var color = document.getElementById('color').value

  var elements = document.getElementsByClassName('ccc')
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = color
  }
}

function changeAB() {
  var color = document.getElementById('color').value

  var elements = document.getElementsByClassName('aaa bbb')
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = color
  }
}
