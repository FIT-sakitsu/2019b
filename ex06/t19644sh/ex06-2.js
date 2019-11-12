function aaabbb() {
  var ab = document.getElementsByClassName('aaa bbb')
  var color = document.getElementById('color').value

  for (var i = 0; i < ab.length; i++) {
    ab[i].style.backgroundColor = color
  }
}

function ccc() {
  var c = document.getElementsByClassName('ccc')
  var color = document.getElementById('color').value

  for (var i = 0; i < c.length; i++) {
    c[i].style.backgroundColor = color
  }
}
