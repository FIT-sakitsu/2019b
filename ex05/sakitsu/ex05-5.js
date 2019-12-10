function reset() {
  var ps = document.getElementsByTagName('p')

  for (var i =  0; i < ps.length; i++) {
    ps[i].innerText = "要素" + (i + 1)
  }
}

function ab() {
  var ab = document.getElementsByClassName('aaa bbb')
  var text = document.getElementById("text").value

  for (var i = 0; i < ab.length; i++) {
    ab[i].innerText = text
  }
}

function c() {
  var c = document.getElementsByClassName('ccc')
  var text = document.getElementById("text").value

  for (var i = 0; i < c.length; i++) {
    c[i].innerText = text
  }
}