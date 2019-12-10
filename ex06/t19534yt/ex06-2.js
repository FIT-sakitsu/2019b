function changeccc() {
  reset()
  var color = document.getElementById('color').value
  var c = document.getElementsByClassName('ccc')
  for (var i = 0; i < c.length; i++) {
    c[i].style.backgroundColor = color
  }
}

function changeaaabbb() {
  reset()
  var color = document.getElementById('color').value
  var ab = document.getElementsByClassName('aaa bbb')
  for (var i = 0; i < ab.length; i++) {
    ab[i].style.backgroundColor = color
  }
}
function reset() {
  var p = document.getElementsByTagName('p')
  for (var i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'transparent'
  }
}
