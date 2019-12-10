function revert() {
  var pAll = document.getElementsByTagName('p')
  for (var i = 0; i < pAll.length; i += 1) {
    pAll[i].innerHTML = '要素' + (i + 1)
  }
}

function changec() {
  var content = document.getElementById('text').value
  var len = document.getElementsByClassName('ccc').length
  for (var i = 0; i < len; i += 1) {
    document.getElementsByClassName('ccc')[i].innerHTML = content
  }
}

function changeab() {
  var content = document.getElementById('text').value
  var len = document.getElementsByClassName('aaa bbb').length
  for (var i = 0; i < len; i += 1) {
    document.getElementsByClassName('aaa bbb')[i].innerHTML = content
  }
}
