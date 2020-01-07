function change1() {
  var classes = document.getElementsByClassName('ccc')
  var input = document.getElementsByTagName('input')
  // [input要素]
  var text = input[0].value
  for (i = 0; i < classes.length; i++) {
    classes[i].innerHTML = text
  }
}

function change2() {
  var classes = document.getElementsByClassName('aaa bbb')
  var input = document.getElementsByTagName('input')
  // [input要素]
  var text = input[0].value
  for (i = 0; i < classes.length; i++) {
    classes[i].innerHTML = text
  }
}

function reset() {
  var classes = document.getElementsByTagName('p')
  // [input要素]
  for (i = 0; i < classes.length; i++) {
    classes[i].innerHTML = '要素' + (i + 1)
  }
}
