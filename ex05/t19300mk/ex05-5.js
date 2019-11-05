function reset() {
  var p5 = document.getElementsByTagName('p')
  for (var i = 0; i < p5.length; i++) {
    p5[i].innerText = '要素' + (i + 1)
  }
}

function c() {
  var c = document.getElementsByClassName('ccc')
  console.log(c)
  var text = document.getElementById('text').value
  for (var i = 0; i < c.length; i++) {
    c[i].innerText = text
  }
}

function ab() {
  var ab = document.getElementsByClassName('aaa bbb')
  var text = document.getElementById('text').value
  for (var i = 0; i < ab.length; i++) {
    ab[i].innerText = text
  }
}
