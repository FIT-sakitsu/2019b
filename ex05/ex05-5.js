function reset() {
  var classes = document.getElementsByTagName('p')
  for (var i = 0; i < classes.length; i++) {
    classes[i].innerText = '要素' + (i + 1)
  }
}

function alpha() {
  var classes = document.getElementsByClassName('ccc')
  var text = document.getElementById('words').value

  for (var i = 0; i < classes.length; i++) {
    classes[i].innerText = text
  }
}
function beta() {
  var classes = document.getElementsByClassName('aaa bbb')
  var text = document.getElementById('words').value

  for (var i = 0; i < classes.length; i++) {
    classes[i].innerText = text
  }
}
