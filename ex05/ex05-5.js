var firstContents = document.getElementsByTagName('p')
var firstTexts = []
for (var i = 0; i < firstContents.length; i = i) {
  firstTexts.push(firstContents[i].innerText)
}

function zuruck() {
  var pAll = document.getElementsByTagName('p')

  for (var i = 0; i < pAll.length; i++) {
    pAll[i].innerText = firstTexts[i]
  }
}

function aaabbb() {
  var ab = document.getElementsByClassName('aaa bbb')
  var text = document.getElementById('text').value

  for (var i = 0; i < ab.length; i++) {
    ab[i].innerText = text
  }
}

function ccc() {
  var c = document.getElementsByClassName('ccc')
  var text = document.getElementById('text').value

  for (var i = 0; i < c.length; i++) {
    c[i].innerText = text
  }
}
