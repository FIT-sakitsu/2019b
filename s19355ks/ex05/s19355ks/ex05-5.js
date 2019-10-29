function reset() {
  var pAll = document.getElementsByTagName('p')

  for (var i = 0; i < pAll.length; i++) {
    pAll[i].innerText = '要素' + (i + 1)
  }
}

function aaabbb() {
  var aaabbb = document.getElementsByClassName('aaa bbb')
  var text = document.getElementById('text').value

  for (var i = 0; i < aaabbb.length; i++) {
    aaabbb[i].innerText = text
  }
}

function ccc() {
  var ccc = document.getElementsByClassName('ccc')
  var text = document.getElementById('text').value

  for (var i = 0; i < ccc.length; i++) {
    ccc[i].innerText = text
  }
}
