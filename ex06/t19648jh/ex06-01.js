function changestyle() {
  var element = document.getElementById('moji')
  switch (element.style.textDecoration) {
    case '':
      element.style.textDecoration = 'line-through'
      break
    case 'line-through':
      element.style.textDecoration = ''
      break
  }
}
