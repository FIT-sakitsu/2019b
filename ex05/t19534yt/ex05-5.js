function reset() {
  var pchange = document.getElementsByTagName('p')
  for (var i = 0; i < pchange.length; i++) {
    pchange[i].innerText = '要素' + (i + 1)
  }
}

function changeccc() {
  var changeccc = document.getElementsByClassName('ccc')
  var text = document.getElementById('words').value

  for (var i = 0; i < changeccc.length; i++) {
    changeccc[i].innerText = text
  }
}
function changeaaabbb() {
  var classes = document.getElementsByClassName('aaa bbb')
  var text = document.getElementById('words').value

  for (var i = 0; i < classes.length; i++) {
    classes[i].innerText = text
  }
}
