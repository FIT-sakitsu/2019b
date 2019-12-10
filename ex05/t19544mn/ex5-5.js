function changeC() {
  var sentence = document.getElementById('tx').value
  var ccc = document.getElementsByClassName('ccc')
  for (var i = 0; i < ccc.length; i++) {
    ccc[i].innerHTML = sentence
  }
}

function changeAB() {
  var sentence = document.getElementById('tx').value
  var ab = document.getElementsByClassName('aaa bbb')
  for (var j = 0; j < ab.length; j++) {
    ab[j].innerHTML = sentence
  }
}

function reset() {
  var reset = document.getElementsByTagName('p')
  for (n = 1; n < reset.length; ++n) {
    reset[n].innerHTML = '要素' + (n + 1)
  }
}
